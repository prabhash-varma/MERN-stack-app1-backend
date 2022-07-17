const express = require('express')
const app = express();
const mongoose = require('mongoose')
const cors = require('cors');
const userModel = require('./models/user');
const { response } = require('express');
app.use(cors());
app.use(express.json());

require('dotenv').config();

//MongoDB connection
mongoose.connect('mongodb+srv://mernuser:Mernuser123@cluster0.clst9ev.mongodb.net/?retryWrites=true&w=majority')



app.get('/getUsers',(req,res)=>{
    userModel.find({},(err,result)=>{
        if(err){
            res.json(err);
        } else {
            res.json(result);
        }
    })
})



app.post('/createUser',async (req,res)=>{

    const user = req.body;
    const newUser = new userModel(user);
    await newUser.save();
    console.log("user created");

    res.json(user);
})


app.post('/deleteUser',async (req,res)=>{

    const uname = req.body.name;
    userModel.findOneAndDelete({name:uname},(err,docs)=>{
        if (err){
            console.log(err)
        }
        else{
            console.log("Deleted User : ", docs);
            res.json(docs);
        }
    })

})


app.listen(process.env.PORT || 3001,()=>{
    console.log('Server is running');
})
