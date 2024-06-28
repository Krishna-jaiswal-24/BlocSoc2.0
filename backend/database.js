const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://ashitoshsable09:*******@ashitoshdb.gvstg6c.mongodb.net/?retryWrites=true&w=majority&appName=ashitoshdb/users");

const userSchema = mongoose.Schema({
    name : String,
    email : String,
    username : String,
    password : String,
});


// for event
// const eventSchema = mongoose.Schema({
//     event : String,
//     date : string,
// })

const User = mongoose.model('users',userSchema);

module.exports = {
    User: User
}

