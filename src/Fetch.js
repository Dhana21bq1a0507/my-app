import React,{useState,useEffect} from "react"
function Fetch(){
const [data,setdata]=useState([]);
  useEffect(()=>{
  fetch("http://localhost:3300/message")
  .then(res => res.json())
  .then(data1 => setdata(data1))
  .catch((err)=>{
      console.log(err);

  })
    
  },[]);
  
 console.log(data.name);
    return(
        <div>
          <h1>Data from Database</h1>
         {data.map((item,index)=>(
            <div key={index}>
                <p>Name:{item.name}</p>
                <p>id:{item.id}</p>
                <p>marks:{item.marks}</p>
            </div>
         ))}
        </div>
    )
}
export default Fetch;