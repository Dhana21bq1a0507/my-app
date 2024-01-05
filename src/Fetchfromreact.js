import axios from 'axios';
import React,{useState,useEffect} from 'react';

import ReactDOM from "react-dom/client";
import { useHistory } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const Fetchfromreact=()=>{
    const [textInput,settextInput]=useState({username:'',password:''})
    const [mes,setmes]=useState([]);
    const [flag0,setflag0]=useState(false);
  const [flag1,setflag1]=useState(false);
  const navigate = useNavigate();
    const handleInputChange=(e)=>{
       const {name,value}=e.target;
       settextInput({...textInput,[name]:value});
    }
    const login=()=>{
     
        setflag1(true);
      
      }
    const sendDataToExpress=async() =>{
        try{
            
            const response=await fetch('http://localhost:3300/message',{
                method:'POST',headers:{
                    'Content-Type':'application/json',
                },
                body:JSON.stringify(textInput),
            });
            const result=await response.json();
           
                setmes(result);
                setflag0(true);
              {/*}  if (flag0 && mes.length > 0 && mes[0].password === textInput.password) {
                    console.log(mes[0].password)
                    setmes([])
                  navigate('/Digital');
                } else {
                    console.log('else state',mes[0].password)
                  login();
                }*/}
                
              } 
        
           
        catch(error){
            console.log('Error sending data to Express',error)
        }
        
      
    };

    useEffect(() => {
        if (flag0 && mes.length > 0 && mes[0].password === textInput.password) {
          
          setmes([]);
          navigate('/home');
        } else if (flag0) {
        
          login();
        }
      }, [flag0, mes, navigate, textInput.password]);
    
    {/*const url='http://localhost:3300/message';
    let senddata=()=>{
        axios.post(url,textInput)
        .then(res=>console.log('data send',textInput))
        .catch(err=>console.log(err.data))
       
    }*/}
    
    return(
        <div>
          <div><h1>Login Page</h1>
          {flag1 && <h5>Please Enter valid username and password</h5>}
            UserName<input type="text" value={textInput.username}  name="username" onChange={handleInputChange}/><br/>
            Password<input type="text" value={textInput.password} name="password" onChange={handleInputChange}/><br/>
            <button onClick={sendDataToExpress}>send Data</button>
          
            </div>
           
        </div>
    );
}
export default Fetchfromreact;
