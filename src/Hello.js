import React,{useState,useEffect} from "react"

function Hello(){
const [users,setData]=useState(null)
useEffect(()=>{
  fetch("https://json.placeholder.typicode.com/Users")
  .then((res)=>res.json())
  .then(data=>setData(data))
  .catch((err)=>{
    console.log(err);
  });
},[])
return(
  <div>
 <ul>{users && users.map((user,index)=>(
  <li key={index}>{user.name}</li>
 ))}</ul>
  
  </div>
 
)
}
export default Hello;