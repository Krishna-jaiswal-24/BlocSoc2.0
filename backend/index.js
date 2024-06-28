const express = require("express");
const cors = require("cors");
const { addUser, existingUser } = require("./types");
const { User } = require("./database");

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

app.get("/login", async(req,res)=>{
    const userInfo = req.body;
    const isvaild = existingUser.safeParse(userInfo);
    if(!isvaild.success){
        return res.status(400).send({
            msg:"invalid inputs!"
        })
    }
    

    try {
        const userExists = await User.findOne({ email: userInfo.email });
        if (!userExists) {
            return res.status(401).json({
                msg: "Invalid credentials!"
            });
        }
        if (userExists.password !== userInfo.password) {
            return res.status(401).json({
                msg: "Invalid credentials!"
            });
        }
        res.status(200).json({
            msg: "Login successful!",
            user: {
                name: userExists.name,
                email: userExists.email,
                username: userExists.username,
            }
        });
    } catch (error) {
        console.error("Error during login:", error);
        res.status(500).json({ msg: "Internal Server Error" });
    }
});

app.post("/signup",async (req,res)=>{
    const userInfo = req.body;
    const isValid = addUser.safeParse(userInfo);
    if(!isValid.success){
        const errors = isValid.error.errors.map(error => ({
            path: error.path,
            message: error.message
        }));

        return res.status(401).json({
            msg: "User Not Valid!",
            errors: errors
        });

        // res.send(401).send({
        //     msg:"User Not Valid!",
        //     errors: isValid.error.errors
        // })
        // return;
    }

    const exists = await User.findOne({email:userInfo.email});
    if(exists){
        res.status(400).json({
            msg:"user already exists!"
        });
        return;
    }

    await User.create({
        name: userInfo.name,
        email : userInfo.email,
        username : userInfo.username,
        password : userInfo.password,
    })

    res.json({
        msg:"Signup Completed!"
    })

});

app.listen(port,()=>{
    console.log(`The server is running on port ${port}`);
});
