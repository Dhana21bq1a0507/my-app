{/*const express=require('express')
const mongoose=require('mongoose')
const cors=require('cors')
const app=express()
app.use(cors())
app.use(express.json())
const UserSchema=new mongoose.Schema
({
    name:String,
    id:String,
    marks:String,
})
const UserModel=mongoose.model("studetails",UserSchema)
module.exports=UserModel,

mongoose.connect("mongodb://localhost:27017/Student")
app.get('/getUsers',(req,res)=>{
    UserModel.find({},{_id:0})
    .where("name")
    .equals("vasavi")
    //.limit(2)
    .select("name")
    //.sort({name:1})
    .then(users=>res.json(users))
    .catch(err=>res.json(err))
})
app.listen(3300,()=>{
    console.log("server is running")
})*/}
var express = require('express');
var router = express.Router();
/* GET users listing. */
router.get('/users', function(req, res, next) {
 // res.send('respond with a resource');
  res.json([{
    id: 1,
    name: "Hiccup",
    password: 'hiccup'
  }, {
    id: 2,
    name: "King Arthur",
    password: 'king-arthur'
  }]);
});
module.exports = router;