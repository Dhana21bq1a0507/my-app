{/*const express=require("express");
const cors=require("cors");
const app=express();
app.use(cors());
app.use(express.json());
app.get("/message",(req,res)=>{
    res.send({message:"hello from server!"});
});
app.listen(3300,()=>{
    console.log(`server is running on port 8000`);
}
);*/}
/*}
var express = require('express');
var router = express.Router();
/* GET users listing. */
{/*
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

module.exports = router;*/}
const express=require("express")
const bodyparser=require("body-parser")
const app=express();
app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json());
app.get("/home",(req,res)=>{
    res.json({
        name:"bill",
        age:66
    })
})
app.listen(3000,()=>console.log("server is up"))


