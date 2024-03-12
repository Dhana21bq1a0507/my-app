import React,{useEffect,useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUser,faCaretDown,faCaretUp, faPlus, faL, faFile, faDownload, faArrowAltCircleDown, faArrowCircleRight, faCircle, faClockRotateLeft, faClockFour, faArrowRotateBack, faRefresh} from "@fortawesome/free-solid-svg-icons";
import axios from 'axios';
import { createGlobalStyle, ThemeProvider } from "styled-components";

import { Theme } from 'react-toastify';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const GlobalStyle = createGlobalStyle`
  // Your global styles go here
`;
function AdminTeachermanagement(){
    const [flag0,setflag0]=useState(true)
    const [flag1,setflag1]=useState(false)
    const [flag2,setflag2]=useState(true)
    const [flag3,setflag3]=useState(false)
    const [flag4,setflag4]=useState(false)
    const [textInput,settextInput]=useState({username:"",teacherid:"",teachermail:"",department:"",address:"",contact:""})
    const button1=()=>{
setflag0(true)
setflag1(false)
setflag2(true)
setflag3(false)
    }
    const notify = (message) => {
      toast.warning(message, {
        theme:"colored",
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    };
    
    
    const button2=()=>{
setflag0(false)
setflag1(true)
setflag2(false)
setflag3(true)
    }
    const [file, setFile] = useState(null);
const [mes,setmes]=useState([])
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('file', file);

    try {
      await axios.post('http://localhost:3300/upload', formData);
      setmes("File uploaded successfully!")
      notify('File uploaded successfully!')
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

    const sendDataToExpress=async() =>{
    if(textInput.username=="" && textInput.teacherid=="" && textInput.teachermail=="" && textInput.department=="" && textInput.address=="" && textInput.contact==""){
     notify("Please Enter  All details!...")
}else{
        try{
            
            const response=await fetch('http://localhost:3300/addteacher',{
                method:'POST',headers:{
                    'Content-Type':'application/json',
                },
                body:JSON.stringify(textInput),
            });
            const result=await response.json();
            setflag4(true)
            notify('Teacher Details Added successfully!')
              }     
        catch(error){
            console.log('Error sending data to Express',error)
        }
      }
    };
    const handleInputChange=(e)=>{
        const {name,value}=e.target;
        settextInput({...textInput,[name]:value});
        console.log(textInput);
     }
     const cleardata=()=>{
        settextInput({username:"",teacherid:"",teachermail:"",department:"",address:"",contact:""})
        setflag4(false)
     }
return(
    <div style={{border:"0.7rem solid #3B92B5",width:"94.4rem",height:"52rem"}}>
       <ToastContainer />
        <div className="firstdiv" style={{width:"95.5rem",marginLeft:"-1rem"}}><p style={{fontSize:"2.7rem",color:"white",fontFamily:"-moz-initial",marginTop:"0px",paddingLeft:"2rem",display:"flex",paddingTop:"10px"}}><FontAwesomeIcon icon={faUser}/>&nbsp;Teacher Management
   </p></div>
    <div style={{display:"flex",marginLeft:"21rem",marginTop:"5rem"}}><button style={{width:"15rem",height:"3rem"}} onClick={button1}>Add one Teacher</button><button onClick={button2} style={{width:"18rem",height:"3rem",marginLeft:"15rem"}}>Add one or more Teacher</button></div>
    <div style={{fontSize:"3rem",color:"#206885"}}>
      {flag0 && <FontAwesomeIcon style={{marginLeft:"29rem"}} icon={faCaretDown}></FontAwesomeIcon>}{flag1 && <FontAwesomeIcon style={{marginLeft:"29rem"}} icon={faCaretUp}></FontAwesomeIcon>}{flag0 && <FontAwesomeIcon icon={faCaretUp} style={{marginLeft:"31rem"}}></FontAwesomeIcon>}{flag1 && <FontAwesomeIcon icon={faCaretDown} style={{marginLeft:"31rem"}}></FontAwesomeIcon>}</div>
    {flag4 && <h2 style={{color:"green",marginLeft:"40rem",marginTop:"-1rem"}}>Data added successfully</h2>}
   {flag2 && <div style={{width:"55rem",height:"29.5rem",marginLeft:"20rem",border:"0.3rem solid #206885"}}>
    <span style={{fontSize:"25px",marginLeft:"4rem",color:"#3B92B5",display:"flex",marginTop:"1rem"}}>Teacher Name
 <input type="text" className="edittext1" value={textInput.username} name="username" onChange={handleInputChange}  style={{border:"1px solid #3B92B5",marginLeft:"17rem",height:"45px",width:"300px"}}/></span>
 <span style={{fontSize:"25px",marginLeft:"4rem",color:"#3B92B5",display:"flex",marginTop:"1rem"}}>Teacher Id
 <input type="text" className="edittext1" value={textInput.teacherid} name="teacherid" onChange={handleInputChange}  style={{border:"1px solid #3B92B5",marginLeft:"19.5rem",height:"45px",width:"300px"}}/></span>
 <span style={{fontSize:"25px",marginLeft:"4rem",color:"#3B92B5",display:"flex",marginTop:"1rem"}}>Teacher Mail
 <input type="text" className="edittext1" value={textInput.teachermail} name="teachermail" onChange={handleInputChange}  style={{border:"1px solid #3B92B5",marginLeft:"18rem",height:"45px",width:"300px"}}/></span>
 <span style={{fontSize:"25px",marginLeft:"4rem",color:"#3B92B5",display:"flex",marginTop:"1rem"}}>Department
 <input type="text" className="edittext1" value={textInput.department} name="department" onChange={handleInputChange}  style={{border:"1px solid #3B92B5",marginLeft:"18.5rem",height:"45px",width:"300px"}}/></span>
 <span style={{fontSize:"25px",marginLeft:"4rem",color:"#3B92B5",display:"flex",marginTop:"1rem"}}>Contact
 <input type="text" className="edittext1" value={textInput.contact} name="contact" onChange={handleInputChange}  style={{border:"1px solid #3B92B5",marginLeft:"21rem",height:"45px",width:"300px"}}/></span>
 <span style={{fontSize:"25px",marginLeft:"4rem",color:"#3B92B5",display:"flex",marginTop:"1rem"}}>Address
 <input type="text" className="edittext1" value={textInput.address} name="address" onChange={handleInputChange}  style={{border:"1px solid #3B92B5",marginLeft:"21rem",height:"45px",width:"300px"}}/></span>
  <br></br>
   <button style={{marginLeft:"15rem"}} onClick={sendDataToExpress}>Add&nbsp;&nbsp;<FontAwesomeIcon icon={faPlus}></FontAwesomeIcon></button>
   <button style={{marginLeft:"10rem"}} onClick={cleardata}>Clear&nbsp;&nbsp;<FontAwesomeIcon icon={faRefresh}></FontAwesomeIcon></button>
   
   <br></br><br></br>
    </div>}
    {flag3 && <div style={{width:"55rem",height:"20rem",marginLeft:"20rem",border:"0.3rem solid #206885"}}>
    
                        <input type="file" onChange={handleFileChange} style={{marginLeft:"17rem",marginTop:"6rem"}} /><br></br>
                        <button onClick={handleUpload} style={{marginLeft:"23rem"}}>Upload&nbsp;&nbsp;<FontAwesomeIcon icon={faDownload}></FontAwesomeIcon></button>
   {mes.length>0 && <h3 style={{color:"green",marginLeft:"20rem"}}>{mes}</h3>}
    </div>}
    </div>
)
}
export default AdminTeachermanagement;