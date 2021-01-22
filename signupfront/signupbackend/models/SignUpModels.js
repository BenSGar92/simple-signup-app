const mongoose = require('mongoose');

//this here is creating the "template" for the users data to be sent to the database
const signUpTemplate = new mongoose.Schema({
    fullName:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    //good practice to have a date record only visible on the backend
    date:{
        type:Date,
        default:Date.now
    }
})

module.exports = mongoose.model('mytable', signUpTemplate)