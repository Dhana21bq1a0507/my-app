import React,{useState} from "react";
import { useNavigate } from 'react-router-dom'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faKey} from "@fortawesome/free-solid-svg-icons";
function Resetpassword(){
    const [textInput,settextInput]=useState({password:'',conpassword:''})
    const [mes,setmes]=useState([]);
    const [flag0,setflag0]=useState(false);
    const navigate = useNavigate();
    const gotologin=()=>{
        navigate('/homepage');
    }
    const handleInputChange=(e)=>{
        const {name,value}=e.target;
        settextInput({...textInput,[name]:value});
     }
     const sendDataToExpress=async() =>{
        if(textInput.password===textInput.conpassword){
        try{
            const response=await fetch('http://localhost:3300/resetpassword',{
                method:'POST',headers:{
                    'Content-Type':'application/json',
                },
                body:JSON.stringify(textInput)
            });
            const result=await response.json();
                setmes(result)
                if(mes.message==="successfully update"){
                    window.alert('successfully updated password')
                    navigate('/homepage');
                }
              } 
        
           
        catch(error){
            console.log('Error sending data to Express',error)
        }
    }else{
setflag0(true)
    }

    };
return(
    <div className="maind">
         <div className="forgotdiv">

<h1 style={{marginTop:"40px",marginLeft:"250px"}}>Reset Password</h1>
{flag0 && <p style={{fontSize:"23px",marginLeft:"150px"}}>password and confirm password not matched</p>}
<input type="password"  value={textInput.password} name="password" style={{marginLeft:"150px",marginTop:"30px",border:"1px solid black"}} placeholder="New Password" onChange={handleInputChange} ></input><span style={{fontSize:"40px",marginLeft:"10px"}}><FontAwesomeIcon icon={faKey}/></span><br></br>
<input type="password"  value={textInput.conpassword} name="conpassword" style={{marginLeft:"150px",marginTop:"30px",border:"1px solid black"}} placeholder="Confirm Password" onChange={handleInputChange} ></input><span style={{fontSize:"40px",marginLeft:"10px"}}><FontAwesomeIcon icon={faKey}/></span><br></br>
 <button type="button"  onClick={sendDataToExpress} style={{marginTop:"40px",marginLeft:"290px"}}>Reaset Password</button>


<p style={{marginLeft:"350px"}} onClick={gotologin}>Go to Login</p>

</div>
    </div>
)
}
export default Resetpassword;