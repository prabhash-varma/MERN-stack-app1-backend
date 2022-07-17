const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true,

    },

    age:{
        type: Number,
        required:true,
       
    },

    email:{
        type: String,
        required:true,
       
    },

    message:{
        type: String,
        required:true,
    }
})


const userModel = mongoose.model('Users',userSchema);

module.exports = userModel;
