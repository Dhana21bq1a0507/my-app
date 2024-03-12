import React,{useEffect,useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUser,faCaretDown,faCaretUp, faPlus, faL,faArrowRight, faFile, faDownload, faRefresh} from "@fortawesome/free-solid-svg-icons";
import axios from 'axios';
import { createGlobalStyle, ThemeProvider } from "styled-components";
import './Admindash.css'
import { Theme } from 'react-toastify';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const GlobalStyle = createGlobalStyle`
  // Your global styles go here
`;

function AdminDepartmentupload(){
    const [flag0,setflag0]=useState(true)
    const [flag1,setflag1]=useState(false)
    const [flag2,setflag2]=useState(true)
    const [flag3,setflag3]=useState(false)
    const [flag4,setflag4]=useState(false)
    const [flag5,setflag5]=useState(false)
    const [flag6,setflag6]=useState(false)
    const [flag7,setflag7]=useState(false)
    const [textInput,settextInput]=useState({teacherid:"",section:""})
    const [isFileChosen, setIsFileChosen] = useState(false);
    const [fileName, setFileName] = useState("No file Choosen");
    const [depInput, setDepInput] = useState({ department: '' });
    const [yearInput, setYearInput] = useState({ year: '' });
    const [classInput, setclassInput] = useState({ class: '' });
   
    const button1=()=>{
setflag0(true)
setflag1(false)
setflag2(true)
setflag3(false)
setflag5(false)
setflag6(false)
setflag7(false)
    }
    const button2=()=>{
setflag0(false)
setflag1(true)
setflag2(false)
setflag3(false)
setflag5(false)
setflag6(false)
setflag7(true)
    }
    const onedata=()=>{
     setflag0(true);
     setflag5(true)
     setflag2(false)
          }
          const groupdata=()=>{
            setflag0(true);
            setflag6(true)
            setflag2(false)
          }
          const singleclass=()=>{
            setflag3(true);
            setflag1(true)
            setflag7(false)
          }
          const groupclass=()=>{

          }
          const notify = (message) => {
            toast.success(message, {
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
          
    const [file, setFile] = useState(null);
const [mes,setmes]=useState([])
  
  // Modify the handleFileChange function
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
  
    if (selectedFile) {
      setIsFileChosen(true);
      setFileName(selectedFile.name);
      setFile(selectedFile);
    } else {
      setIsFileChosen(false);
      setFileName("No file Choosen");
      setFile(null);
    }
  };
  const handleChangeClass = (e) => {
    const { name, value } = e.target;
    if (name === 'department') {
      setDepInput({ ...depInput, department: value });
    } else if (name === 'year') {
      setYearInput({ ...yearInput, year: value });
    } else if (name === 'class') {
      setclassInput({ ...classInput, class: value });
    }
  };
  

// Add a useEffect to update fileName based on the selectedFile
useEffect(() => {
  if (file) {
    setFileName(file.name);
  } else {
    setFileName("No file Choosen");
  }
}, [file]);

// Modify the cleardata function
const cleardata = () => {
  setFileName("No file Choosen");
  settextInput({ teacherid: "" });
  setIsFileChosen(false);
  setFile(null);

  // Clear the input file value
  const fileInput = document.getElementById("fileInput");
  if (fileInput) {
    fileInput.value = "";
  }

  setflag4(false);
};

const handleUpload = async () => {
  const formData = new FormData();

  // Append the file
  formData.append('file', file);

  // Append the teacherid
  formData.append('teacherid', textInput.teacherid);

  try {
    const response = await axios.post('http://localhost:3300/onetimetableupload', formData);
    if (response.status === 200) {
      setmes("File uploaded successfully!");
      setflag4(true); 
      notify('File Uploaded Successfully!');// Set the flag to indicate successful data upload
    } else {
      console.error('Error uploading file:', response.data.message);
      // Handle error cases here
    }
  } catch (error) {
    console.error('Error uploading file:', error);
    // Handle error cases here
  }
};
const handleUploadgroup= async () => {
  const formData = new FormData();

  // Append the file
  formData.append('file', file);

  // Append the teacherid
  formData.append('teacherid', textInput.teacherid);

  try {
    const response = await axios.post('http://localhost:3300/grouptimetableupload', formData);
    if (response.status === 200) {
      setmes("File uploaded successfully!");
      setflag4(true); 
      notify('File Uploaded Successfully!');// Set the flag to indicate successful data upload
    } else {
      console.error('Error uploading file:', response.data.message);
      // Handle error cases here
    }
  } catch (error) {
    console.error('Error uploading file:', error);
    // Handle error cases here
  }
};


  
    const handleInputChange=(e)=>{
        const {name,value}=e.target;
        settextInput({...textInput,[name]:value});
        console.log(textInput);
     }
     const handleUploadClass=async()=>{
      
      const formData = new FormData();
      formData.append('file', file);
      formData.append('year',yearInput.year);
      formData.append('department', depInput.department);
      formData.append('classname',classInput.class);

      try {

        await axios.post('http://localhost:3300/uploadSingleClass', formData);
        console.log('File uploaded successfully!');
        notify('File Uploaded Successfully!');
      
      } catch (error) {
        console.error('Error uploading file:', error);
      }
    }
return(
    <div style={{border:"0.7rem solid #3B92B5",width:"93.5rem",height:"57rem"}}>
       <ToastContainer  />
        <div className="firstdiv" style={{width:"95rem",marginLeft:"-1rem"}}><p style={{fontSize:"2.7rem",color:"white",fontFamily:"-moz-initial",marginTop:"0px",paddingLeft:"2rem",display:"flex",paddingTop:"10px"}}><FontAwesomeIcon icon={faUser}/>&nbsp;Teacher Management
   </p></div>
   <div style={{width:"90rem",height:"1rem"}}>
    <h1 style={{color:"#134563",paddingRight:"55rem"}}>Timetable Administration</h1>
    <h2 style={{color:"#134563",paddingRight:"40rem"}}>Manage and update timetables for teachers and classes,</h2>
   </div>
   <br></br><br></br><br></br>
    <div style={{display:"flex",marginLeft:"23rem",marginTop:"5rem"}}><button style={{width:"15rem",height:"3rem",fontSize:"1.6rem"}} onClick={button1}>Teacher Timetable</button>
    <button onClick={button2} style={{width:"18rem",height:"3rem",marginLeft:"15rem",fontSize:"1.6rem"}}>Class Timetable</button></div>
    <div style={{fontSize:"3rem",color:"#206885"}}>
      {flag0 && <FontAwesomeIcon style={{marginLeft:"32rem"}} icon={faCaretDown}></FontAwesomeIcon>}{flag1 && <FontAwesomeIcon style={{marginLeft:"32rem"}} icon={faCaretUp}></FontAwesomeIcon>}{flag0 && <FontAwesomeIcon icon={faCaretUp} style={{marginLeft:"31rem"}}></FontAwesomeIcon>}{flag1 && <FontAwesomeIcon icon={faCaretDown} style={{marginLeft:"31rem"}}></FontAwesomeIcon>}</div>
    {flag5 && (
        <div style={{ width: "55rem", height: "29.5rem", marginLeft: "20rem", border: "0.3rem solid #206885"}}>
          <span style={{ fontSize: "25px", marginLeft: "7rem", color: "#3B92B5", display: "flex", paddingTop: "4rem" }}>
            <span style={{paddingTop:"0.5rem",color:"#134563"}}>Teacher Mail</span>
          <span style={{marginLeft:"4rem",fontSize:"2rem",color:"#134563"}}>:</span>
            <input type="text" className="edittext1" value={textInput.teacherid} name="teacherid" onChange={handleInputChange} style={{ border: "1px solid #3B92B5", marginLeft: "10rem", height: "45px", width: "300px", borderRadius: "5px" ,color:"#134563",fontSize:"1.2rem",outline:"none"}} />
          </span>
          <br></br>
          {flag4 && <h2 style={{color:"green",marginLeft:"15rem"}}>Data added successfully</h2>}
          <label htmlFor="fileInput" className="fileInputLabel" style={{display:"inline-block",marginLeft:"12rem",marginTop:"2.3rem"}}>&nbsp;
            Choose File<span style={{ paddingLeft: "1rem" }}><FontAwesomeIcon icon={faFile} style={{ fontSize: "2rem", paddingTop: "0.5rem" }}></FontAwesomeIcon></span>
            <input
              type="file"
              id="fileInput"
              onChange={handleFileChange}
              className="fileInput"
            />
          </label>
          <p style={{display:"inline-block",marginLeft:"4rem",color:"#206885",fontSize:"1.3rem"}}>{fileName}</p><br></br>
          <button onClick={handleUpload} style={{marginLeft:"10rem",width:"9.3rem",height:"2.9rem",fontSize:"1.5rem",borderRadius:"0.3rem",color:"#ffffff",background:"#134563",border:"none",marginTop:"5rem"}}>Upload&nbsp;&nbsp;<FontAwesomeIcon icon={faDownload}></FontAwesomeIcon></button>
          <button onClick={cleardata} style={{marginLeft:"9rem",width:"9.3rem",height:"2.9rem",fontSize:"1.5rem",borderRadius:"0.3rem",color:"#ffffff",background:"#134563",border:"none",marginTop:"5rem"}}>Clear&nbsp;&nbsp;<FontAwesomeIcon icon={faRefresh}></FontAwesomeIcon></button>
          <br></br>
        </div>)}
        {flag6 && (
        <div style={{ width: "55rem", height: "29.5rem", marginLeft: "20rem", border: "0.3rem solid #206885"}}>
          <span style={{ fontSize: "25px", marginLeft: "7rem", color: "#3B92B5", display: "flex", paddingTop: "4rem" }}>
           
           </span>
          <br></br>
          {flag4 && <h2 style={{color:"green",marginLeft:"15rem"}}>Data added successfully</h2>}
          <label htmlFor="fileInput" className="fileInputLabel" style={{display:"inline-block",marginLeft:"12rem",marginTop:"2.3rem"}}>&nbsp;
            Choose File<span style={{ paddingLeft: "1rem" }}><FontAwesomeIcon icon={faFile} style={{ fontSize: "2rem", paddingTop: "0.5rem" }}></FontAwesomeIcon></span>
            <input
              type="file"
              id="fileInput"
              onChange={handleFileChange}
              className="fileInput"
            />
          </label>
          <p style={{display:"inline-block",marginLeft:"4rem",color:"#206885",fontSize:"1.3rem"}}>{fileName}</p><br></br>
          <button onClick={handleUploadgroup} style={{marginLeft:"10rem",width:"9.3rem",height:"2.9rem",fontSize:"1.5rem",borderRadius:"0.3rem",color:"#ffffff",background:"#134563",border:"none",marginTop:"5rem"}}>Upload&nbsp;&nbsp;<FontAwesomeIcon icon={faDownload}></FontAwesomeIcon></button>
          <button onClick={cleardata} style={{marginLeft:"9rem",width:"9.3rem",height:"2.9rem",fontSize:"1.5rem",borderRadius:"0.3rem",color:"#ffffff",background:"#134563",border:"none",marginTop:"5rem"}}>Clear&nbsp;&nbsp;<FontAwesomeIcon icon={faRefresh}></FontAwesomeIcon></button>
          <br></br>
        </div>)}
        {flag2&&  <div><div style={{color:"white",fontSize:"30px",marginTop:"2rem",marginLeft:"20rem",backgroundColor:"#317B99",borderRadius:"0.3rem",width:"55rem",height:"4rem",display:"flex",alignItems:"center",justifyContent:"center"}} onClick={onedata}>
Add a Teacher Timetable <FontAwesomeIcon icon={faArrowRight} onClick={onedata}style={{marginLeft:"28.5rem",marginTop:"0.5rem",fontSize:"2.5rem"}}></FontAwesomeIcon></div><div style={{color:"white",fontSize:"30px",marginTop:"2rem",marginLeft:"20rem",backgroundColor:"#317B99",borderRadius:"0.3rem",width:"55rem",height:"4rem",display:"flex",alignItems:"center",justifyContent:"center"}}  onClick={groupdata}>
Add a group of Teachers Timetables<FontAwesomeIcon icon={faArrowRight} onClick={groupdata} style={{marginLeft:"19rem",marginTop:"0.5rem",fontSize:"2.5rem"}}></FontAwesomeIcon></div></div>}
{flag7 &&  <div><div style={{color:"white",fontSize:"30px",marginTop:"2rem",marginLeft:"20rem",backgroundColor:"#317B99",borderRadius:"0.3rem",width:"55rem",height:"4rem",display:"flex",alignItems:"center",justifyContent:"center"}} onClick={singleclass}>
Add a  Singleclass Timetable <FontAwesomeIcon icon={faArrowRight} onClick={singleclass}style={{marginLeft:"28.5rem",marginTop:"0.5rem",fontSize:"2.5rem"}}></FontAwesomeIcon></div><div style={{color:"white",fontSize:"30px",marginTop:"2rem",marginLeft:"20rem",backgroundColor:"#317B99",borderRadius:"0.3rem",width:"55rem",height:"4rem",display:"flex",alignItems:"center",justifyContent:"center"}}  onClick={groupclass}>
Add a group of Class Timetables<FontAwesomeIcon icon={faArrowRight} onClick={groupclass} style={{marginLeft:"19rem",marginTop:"0.5rem",fontSize:"2.5rem"}}></FontAwesomeIcon></div></div>}
    
    {flag3 && flag1 && (<div style={{ width: "55rem", height: "29.5rem", marginLeft: "20rem", border: "0.3rem solid #206885"}}>
          <span style={{ fontSize: "25px", marginLeft: "7rem", color: "#3B92B5", display: "flex", paddingTop: "4rem" }}>
          <select value={yearInput.year} name="year" onChange={handleChangeClass} id="Year" style={{height:"3rem",width:"10rem",marginLeft:"2rem",marginRight:"2rem"}}>
                            <option   defaultValue={true}>Select Year...</option>
                            <option>I</option>
                            <option>II</option>
                            <option>III </option>
                            <option>IV </option>
                        </select> 
                        <select value={depInput.department} onChange={handleChangeClass} name="department" id="Department" style={{height:"3rem",width:"10rem",marginLeft:"2rem",marginRight:"2rem"}}>
                          <option defaultValue={true}>Select Department...</option>
                          <option>CSE</option>
                          <option>IT</option>
                          <option>EEE</option>
                          <option>ECE</option>
                          <option>AIDS</option>
                          <option>CSO</option>
                        </select>
                        <select value={classInput.class} name="class" onChange={handleChangeClass} id="class" style={{height:"3rem",width:"10rem",marginLeft:"2rem",marginRight:"2rem"}}>
                            <option   defaultValue={true}>Select Section...</option>
                            <option>A</option>
                            <option>B</option>
                            <option>C</option>
                            <option>D</option>
                            <option>Single Section</option>
                        </select><br></br><br></br><br></br>
          
                    
           </span>
          <br></br>
          {flag4 && <h2 style={{color:"green",marginLeft:"15rem"}}>Data added successfully</h2>}
          <label htmlFor="fileInput" className="fileInputLabel" style={{display:"inline-block",marginLeft:"12rem",marginTop:"2.3rem"}}>
           &nbsp; Choose File<span style={{ paddingLeft: "1rem" }}><FontAwesomeIcon icon={faFile} style={{ fontSize: "2rem", paddingTop: "0.5rem" }}></FontAwesomeIcon></span>
            <input
              type="file"
              id="fileInput"
              onChange={handleFileChange}
              className="fileInput"
            />
          </label>
          <p style={{display:"inline-block",marginLeft:"4rem",color:"#206885",fontSize:"1.3rem"}}>{fileName}</p><br></br>
          <button onClick={handleUploadClass} style={{marginLeft:"10rem",width:"9.3rem",height:"2.9rem",fontSize:"1.5rem",borderRadius:"0.3rem",color:"#ffffff",background:"#134563",border:"none",marginTop:"5rem"}} >Upload&nbsp;&nbsp;<FontAwesomeIcon icon={faDownload}></FontAwesomeIcon></button>
          <button onClick={cleardata} style={{marginLeft:"9rem",width:"9.3rem",height:"2.9rem",fontSize:"1.5rem",borderRadius:"0.3rem",color:"#ffffff",background:"#134563",border:"none",marginTop:"5rem"}}>Clear&nbsp;&nbsp;<FontAwesomeIcon icon={faRefresh}></FontAwesomeIcon></button>
          <br></br>
        </div>)}
        </div>

)}
export default AdminDepartmentupload;