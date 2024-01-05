  {/*const {createPool    }=require('mysql');
  const pool=createPool({
    host:"localhost",
    user:"root",
    password:"",
    database:"csea",
    connectionLimit:10, 
  })
  pool.query(`select * from student where sname= ? `,['dhana'],(err,result,fields)=>{
    if(err){
        return console.log(err);
    }
    return console.log(result);

  })*/}
  const express=require('express');
  const mysql=require('mysql');
  const cors=require(cors);
  const app=express()
  app.use(cors());

  app.listen(8081,()=>{
    console.log("listening"); 
  })
