
import React,{useState,useEffect} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLock,faEnvelope,faKey, faK, faL} from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'; 
import Dashboard from "../Components/Dashboard";
import HodDash from "../Components/HodDash";
import AdminDash from "../Components/AdminDash";
import { createGlobalStyle, ThemeProvider } from "styled-components";

import { Theme } from 'react-toastify';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const GlobalStyle = createGlobalStyle`
  // Your global styles go here
`;
function AdminChangepassword(){

    const [mes,setmes]=useState([]);
    const[flag0,setflag0]=useState(false);
    const[flag1,setflag1]=useState(false);
    const [data,setdata]=useState([])
    const [textInput,settextInput]=useState({Newpassword:'',Confirmpassword:''});
    const handleInputChange=(e)=>{
        const {name,value}=e.target;
        settextInput({...textInput,[name]:value});
     }
     const notifywarning = (message) => {
        toast.warning(message, {
          position: "top-right",
          theme:"colored",
          autoClose: 10000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      
      };
      const notifyerror= (message) => {
        toast.error(message, {
          position: "top-right",
          theme:"colored",
          autoClose: 10000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      
      };
      const notifysuccess= (message) => {
        toast.success(message, {
          position: "top-right",
          theme:"colored",
          autoClose: 10000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      
      };
     const Changepass=async()=>{
        if(textInput.Newpassword=="" && textInput.Confirmpassword==""){
            notifywarning("Please Enter All Details")
        }
        else if(textInput.Newpassword===textInput.Confirmpassword){
            try{
            
                const response=await fetch('http://localhost:3300/adminchangepassword',{
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
                        notifysuccess("Password successfully changed...")
                        
                }
                  } 
            
               
            catch(error){
                console.log('Error sending data to Express',error)
            }
        }else{
            setflag0(true);
            notifyerror("Password and confirm password must be same")
        }
     }
     useEffect(()=>{
        fetch("http://localhost:3300/admindetailsprofile")
        .then(res => res.json())
        .then(data1 => setdata(data1))
        .catch((err)=>{
            console.log(err);
      
        })
          
        },[]);
return(
   
    <div className="containter">
        <AdminDash>
        <ToastContainer />
         <div className="div1" style={{width:"75rem"}}>  
         <h2  style={{color:"white",marginTop:"5px",paddingTop:"10px",fontSize:"30px",paddingTop:"7px",paddingLeft:"20px"}} >Profile Management</h2>
       
        </div>
        <div>
            {flag0 && <h4 style={{marginLeft:"250px"}}> Password and confirm password must be same</h4>}
            {flag1 && <h4  style={{marginLeft:"250px"}}>Password successfully changed...</h4>}
            <table className="userdetails">
                    <tr >
                   
                        <td width={"270px"} style={{color:"#0A4C66",fontWeight: "500"}}> <span style={{color:"#0A4C66",fontSize:"35px",marginRight:"10px"}}><FontAwesomeIcon icon={faEnvelope}/></span> Email</td>
                        <td width={"20px"}>:</td>
                        <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{ data.length>0 && data[0].teachermail}</td>
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
        </AdminDash>
    </div>
)
}
export default AdminChangepassword;