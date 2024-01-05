
import React,{useState,useEffect} from "react";
import "./Dash.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLock,faEnvelope,faKey, faK, faL} from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'; 
import Dashboard from "../Components/Dashboard";
function Changepassword(){
    const [mes,setmes]=useState([]);
    const[flag0,setflag0]=useState(false);
    const[flag1,setflag1]=useState(false);
    const [textInput,settextInput]=useState({Newpassword:'',Confirmpassword:''});
    const handleInputChange=(e)=>{
        const {name,value}=e.target;
        settextInput({...textInput,[name]:value});
     }
     const Changepass=async()=>{
        if(textInput.Newpassword===textInput.Confirmpassword){
            try{
            
                const response=await fetch('http://localhost:3300/change',{
                    method:'POST',headers:{
                        'Content-Type':'application/json',
                    },
                    body:JSON.stringify(textInput),
                });
                const result=await response.json();
                setmes(result)
                console.log(mes.message)
                if(mes.message==="successfully updated"){
                    setflag0(false);
                        setflag1(true);
                        
                }
                  } 
            
               
            catch(error){
                console.log('Error sending data to Express',error)
            }
        }else{
            setflag0(true);
        }
     }
      
return(
   
    <div className="containter">
        <Dashboard>
         <div className="div1"> 
         <h2  style={{color:"white",marginTop:"5px",paddingTop:"10px",fontSize:"30px",paddingTop:"7px",paddingLeft:"20px"}} >Profile Management</h2>
       
        </div>
        <div>
            {flag0 && <h4 style={{marginLeft:"250px"}}> Password and confirm password must be same</h4>}
            {flag1 && <h4  style={{marginLeft:"250px"}}>Password successfully changed...</h4>}
            <table className="userdetails">
                    <tr >
                   
                        <td width={"270px"} style={{color:"#0A4C66",fontWeight: "500"}}> <span style={{color:"#0A4C66",fontSize:"35px",marginRight:"10px"}}><FontAwesomeIcon icon={faEnvelope}/></span> Email</td>
                        <td width={"20px"}>:</td>
                        <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;21bq1a0507@vvit.net</td>
                    </tr>
                    <tr>
                        <td style={{color:"#0A4C66",fontWeight: "500"}}><span style={{color:"#0A4C66",fontSize:"35px",marginRight:"10px"}}><FontAwesomeIcon icon={faKey}/></span>New Password</td>
                        <td>:</td>
                        <td><td><input type="text" className="edittext" name="Newpassword" value={textInput.Newpassword} onChange={handleInputChange}/></td>
</td>
                    </tr>
                    <tr>
                        <td style={{color:"#0A4C66",fontWeight: "500"}}><span style={{color:"#0A4C66",fontSize:"35px",marginRight:"10px"}}><FontAwesomeIcon icon={faKey}/></span>Confirm Password</td>
                        <td>:</td>
                        <td><td><input type="text" className="edittext" name="Confirmpassword" value={textInput.Confirmpassword} onChange={handleInputChange}/></td>
</td>
                    </tr>
            </table>
            <button type="button" onClick={Changepass} style={{width:'250px',marginLeft:'400px',marginTop:"30px"}}><span style={{color:"white",paddingTop:"34px",paddingRight:"12px"}}><FontAwesomeIcon icon={faLock}/></span>Change Password</button>
        </div>
        </Dashboard>
    </div>
)
}
export default Changepassword;