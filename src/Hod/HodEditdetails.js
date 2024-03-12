import React,{useState,useEffect} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUser,faIdCard,faEnvelope,faBuilding,faAddressCard,faPhone,faCamera,faPencil,faLock} from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'; 
import Dashboard from "../Components/Dashboard";
import HodDash from "../Components/HodDash";
import { createGlobalStyle, ThemeProvider } from "styled-components";

import { Theme } from 'react-toastify';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const GlobalStyle = createGlobalStyle`
  // Your global styles go here
`;
function HodEditdetails(){
    const [data,setdata]=useState([]);
    const [mes,setmes]=useState([])
    const navigate = useNavigate();
    const [textInput,settextInput]=useState({Username:'',Department:'',Address:'',Contact:''});
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
     const sendDataToExpress=async() =>{
        //const dataTosend={textInput};
        //const dataTosend1={passInput};
        if(textInput.Username==='' && textInput.Department=='',textInput.Address==='' && textInput.Contact==='' && textInput.Department=='' && textInput.Address=='' && textInput.Contact===''){
            notifywarning("Please Enter All details...")
        }else{
        try{
            
            const response=await fetch('http://localhost:3300/hodeditdetails',{
                method:'POST',headers:{
                    'Content-Type':'application/json',
                },
                body:JSON.stringify(textInput),
            });
            const result=await response.json();
            setmes(result)
            navigate('/hodprofile');
                
                
              } 
        
           
        catch(error){
            console.log('Error sending data to Express',error)
        }
    }

    };
    useEffect(()=>{
        fetch("http://localhost:3300/hoddetailsprofile")
        .then(res => res.json())
        .then(data1 => setdata(data1))
        .catch((err)=>{
            console.log(err);
      
        })
          
        },[]);

return(
   
    <div className="containter">
        <HodDash>
        <ToastContainer />
         <div className="div1"  style={{width:"75rem"}}> 
         <h2  style={{color:"white",marginTop:"5px",paddingTop:"10px",fontSize:"30px",paddingTop:"7px",paddingLeft:"20px"}} >Profile Management</h2>
         <div className="prof"><span style={{color:"#0A4C66",fontSize:"40px",marginLeft:"100px"}}><FontAwesomeIcon icon={faCamera}/></span></div>
      
        </div>
        <table className="userdetails">
            <tr>
            
                <td width={"300px"} height={"60px"}><span style={{color:"#0A4C66",fontSize:"35px",marginRight:"20px"}}><FontAwesomeIcon icon={faUser}/></span>Username &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:</td>
            
                <td><input type="text" className="edittext" name="Username" value={textInput.Username} onChange={handleInputChange}/></td>

            </tr>
            <tr>
                <td width={"60px"} height={"60px"} ><span style={{color:"#0A4C66",fontSize:"35px",marginRight:"20px"}}><FontAwesomeIcon icon={faIdCard}/></span>TeacherId &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:</td>
              
                <td style={{paddingLeft:"100px"}}>{data.length>0 && data[0].teacherid}</td>
            </tr>
            <tr>
                <td width={"60px"} height={"60px"}><span style={{color:"#0A4C66",fontSize:"35px",marginRight:"20px"}}><FontAwesomeIcon icon={faEnvelope}/></span>TeacherEmail&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:</td>
               
                <td style={{paddingLeft:"100px"}}>{data.length>0 && data[0].teachermail}</td>
            </tr>
            <tr>
                <td width={"60px"} height={"60px"}><span style={{color:"#0A4C66",fontSize:"35px",marginRight:"20px"}}><FontAwesomeIcon icon={faBuilding}/></span>Department&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:</td>
                
                <td ><input type="text" name="Department" className="edittext" value={textInput.Department} onChange={handleInputChange} /></td>
            </tr>
            <tr>
                <td width={"60px"} height={"60px"}><span style={{color:"#0A4C66",fontSize:"35px",marginRight:"20px"}}><FontAwesomeIcon icon={faAddressCard}/></span>Address &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:</td>
             
                <td><input type="text" className="edittext" name="Address" value={textInput.Address} onChange={handleInputChange}/></td>
            </tr>
            <tr>
                <td width={"60px"} height={"60px"}><span style={{color:"#0A4C66",fontSize:"35px",marginRight:"20px"}}><FontAwesomeIcon icon={faPhone}/></span>Contact&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:</td>
                
                <td><input type="text" className="edittext" name="Contact" value={textInput.Contact} onChange={handleInputChange}/></td>
            </tr>
            <tr>
                <td></td>
                <td><button  type="button" style={{width:'170px',marginTop:"20px"}} onClick={sendDataToExpress}><span ><FontAwesomeIcon icon={faPencil}/></span>Edit Details</button></td>
            </tr>
        </table>
        </HodDash>
    </div>
)
}
export default HodEditdetails