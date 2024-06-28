const z = require("zod");

// Password Format
const passwordFormat = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z]).{6,18}$/;
const passwordTest = z.string().refine(value => passwordFormat.test(value), {
  message: "Password must be between 6-18 characters, and include at least one uppercase letter, one lowercase letter, and one character other than alphabets."
});

// username Format 
const usernameFormat = /^[a-zA-Z_]+$/;
const usernameTest = z.string().refine(value => usernameFormat.test(value), {
  message: "Username must consist only of alphabets and underscores."
});

const addUser = z.object({
    name: z.string(),
    email: z.string().email(),
    username: usernameTest,
    password: passwordTest,
});

const existingUser = z.object({
    email: z.string().email(),
    password: z.string(),
});

module.exports = {
    addUser: addUser,
    existingUser: existingUser
}

