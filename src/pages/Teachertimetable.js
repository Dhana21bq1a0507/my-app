import React,{useEffect,useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUser,faCaretDown,faCaretUp, faPlus, faL, faFile, faDownload, faRefresh} from "@fortawesome/free-solid-svg-icons";
import axios from 'axios';
import './Dash.css'
function Teachertimetable(){
    const [flag0,setflag0]=useState(true)
    const [flag1,setflag1]=useState(false)
    const [flag2,setflag2]=useState(true)
    const [flag3,setflag3]=useState(false)
    const [flag4,setflag4]=useState(false)
    const [textInput,settextInput]=useState({teacherid:"",section:""})
    const [isFileChosen, setIsFileChosen] = useState(false);
    const [fileName, setFileName] = useState("No file Choosen");
    const [opt,setopt]=useState('')
    const [data, setData] = useState([]);
    const [department,setdepartment]=useState('')
    const [year,setyear]=useState('')
    const [section,setsection]=useState('')
    const [classtimetable,setclasstimetable]=useState([])
    const handleChange=(event)=>{
        setopt(event.target.value);
    }
    const handleChangesection=(event)=>{
      setsection(event.target.value);
  }
  const handleChangedepart=(event)=>{
    setdepartment(event.target.value);
}
const handleChangeyear=(event)=>{
  setyear(event.target.value);
}
    const button1=()=>{
setflag0(true)
setflag1(false)
setflag2(true)
setflag3(false)
    }
    const button2=()=>{
setflag0(false)
setflag1(true)
setflag2(false)
setflag3(true)
    }
const [mes,setmes]=useState([])
  
  // Modify the handleFileChange function
  

// Add a useEffect to update fileName based on the selectedFile


// Modify the cleardata function
const renderTableCell1 = (day, timeSlot) => {
  if (classtimetable.length > 0 && classtimetable[0].Teacher && classtimetable[0].Teacher[day]) {
    const dayDataString = classtimetable[0].Teacher[day];

   //console.log(dayDataString)
    try {
  
    const keyValuePairs = dayDataString.match(/"([^"]+)":\s*"([^"]+)"/g);

    const resultObject = {};
    if (keyValuePairs) {
      keyValuePairs.forEach(pair => {
        const [key, value] = pair.split('": "').map(item => item.replace(/"/g, ''));
        resultObject[key] = value;
      });
    }
    
      if (resultObject && resultObject[timeSlot] !== "undefined") {
        console.log(resultObject[timeSlot])
        const value = resultObject[timeSlot];
        console.log('value:', value);
        return <td key={timeSlot}>{value}</td>;
      } else {
        return <td></td>
      }
    } catch (error) {
      console.error(`Error parsing JSON for ${day} - ${timeSlot}`, error);
    }
  } else {
    console.log('Invalid data structure or missing data for day:', day);
  }
};
const renderTableCell = (day, timeSlot) => {
    if (data.length > 0 && data[0].Teacher && data[0].Teacher[day]) {
      const dayDataString = data[0].Teacher[day];
     console.log(dayDataString)
      try {
    
      const keyValuePairs = dayDataString.match(/"([^"]+)":\s*"([^"]+)"/g);

      const resultObject = {};
      if (keyValuePairs) {
        keyValuePairs.forEach(pair => {
          const [key, value] = pair.split('": "').map(item => item.replace(/"/g, ''));
          resultObject[key] = value;
        });
      }

        if (resultObject && resultObject[timeSlot] !== "undefined") {
          console.log(resultObject[timeSlot])
          const value = resultObject[timeSlot];
          console.log('value:', value);
          return <td key={timeSlot}>{value}</td>;
        } else {
          return <td></td>
        }
      } catch (error) {
        console.error(`Error parsing JSON for ${day} - ${timeSlot}`, error);
      }
    } else {
      console.log('Invalid data structure or missing data for day:', day);
    }
  };
 const sendDataToExpress = async () => {
    // Update textInput by adding "@vvit.net" to teacherid
    const updatedTextInput = { ...textInput, teacherid: textInput.teacherid + "@vvit.net" };
  
    try {
      const response = await fetch('http://localhost:3300/timetable', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedTextInput),
      });
  
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.log('Error sending data to Express', error);
    }
  };
  const sendDataClass = async () => {
    // Update textInput by adding "@vvit.net" to teacherid
    
    try {
      const response = await fetch('http://localhost:3300/classtimetable', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({department:department,year:year,section:section}),
      });
  
      const result = await response.json();
      setclasstimetable(result)
   // console.log(result[0].length)
    } catch (error) {
      console.log('Error sending data to Express', error);
    }
  };
  


const handleInputChange=(e)=>{
        const {name,value}=e.target;
        settextInput({...textInput,[name]:value});
        console.log(textInput);
}
return(
    <div style={{border:"0.7rem solid #3B92B5",width:"93.5rem",height:"57rem"}}>
        <div className="firstdiv" style={{width:"95rem",marginLeft:"-1rem"}}><p style={{fontSize:"2.7rem",color:"white",fontFamily:"-moz-initial",marginTop:"0px",paddingLeft:"2rem",display:"flex",paddingTop:"10px"}}><FontAwesomeIcon icon={faUser}/>&nbsp;Teacher Management
   </p></div>
   <div style={{width:"90rem",height:"1rem"}}>
    <h1 style={{color:"#134563",paddingRight:"55rem"}}>Timetable Administration</h1>
    <h2 style={{color:"#134563",paddingRight:"40rem"}}>Manage and update timetables for teachers and classes,</h2>
   </div>
   <br></br><br></br><br></br>
    <div style={{display:"flex",marginLeft:"23rem",marginTop:"5rem"}}><button style={{width:"15rem",height:"3rem",fontSize:"1.6rem"}} onClick={button1}>Teacher Timetable</button><button onClick={button2} style={{width:"18rem",height:"3rem",marginLeft:"15rem",fontSize:"1.6rem"}}>Class Timetable</button></div>
    <div style={{fontSize:"3rem",color:"#206885"}}>
      {flag0 && <FontAwesomeIcon style={{marginLeft:"32rem"}} icon={faCaretDown}></FontAwesomeIcon>}{flag1 && <FontAwesomeIcon style={{marginLeft:"32rem"}} icon={faCaretUp}></FontAwesomeIcon>}{flag0 && <FontAwesomeIcon icon={faCaretUp} style={{marginLeft:"31rem"}}></FontAwesomeIcon>}{flag1 && <FontAwesomeIcon icon={faCaretDown} style={{marginLeft:"31rem"}}></FontAwesomeIcon>}</div>
    {flag2 && (
        <div style={{ width: "55rem", height: "32rem", marginLeft: "20rem"}}>
         <h3 style={{fontSize:"25px",marginTop:"30px",marginLeft:"7rem",color:"#3B92B5",display:"flex"}}>Enter Teacher Id&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="text" name="teacherid" value={textInput.teacherid}  onChange={handleInputChange} style={{height:"3rem",width:"20rem",border:"0.2rem solid #3B92B5"}} /></h3>
        <button style={{marginLeft:"18rem",width:"14rem",height:"2.9rem"}} onClick={sendDataToExpress}>View Timetable</button>
      
        {data.length > 0  && 
       <table border={1} align="center" className="timetableori" style={{ borderColor: "#3B92B5",marginTop:"1rem", borderCollapse: "collapse", borderWidth: "5px" }}>
       <tbody>
         <tr>
           <td colSpan={7} width={"80px"} height={"30px"} style={{ backgroundColor: "#3B92B5", color: "white" ,border:"0.1rem solid white",textAlign:"center"}}>Academic Year:2023-2024</td>
         </tr>
         <tr>
         <td colSpan={4} width={"80px"} height={"30px"} style={{ backgroundColor: "#3B92B5", color: "white",textAlign:"center" }}>{data[0].Teacher.name}</td>
         <td colSpan={4} width={"80px"} height={"30px"} style={{ backgroundColor: "#3B92B5", color: "white",textAlign:"center" }}>{data[0].Teacher.id}</td>
     
         </tr>
         <tr>
           <td width={"1rem"} height={"2rem"}></td>
           <th style={{ color: "#0A4C66" }}>8:20-9:15</th>
              <th style={{ color: "#0A4C66" }}>9:15-10:10</th>
              <th style={{ color: "#0A4C66" }}>10:20-11:15</th>
              <th style={{ color: "#0A4C66" }}>11:15-12:10</th>
              <th style={{ color: "#0A4C66" }}>12:50-1:40</th>
              <th style={{ color: "#0A4C66" }}>1:40-2:25</th>
         
         </tr>
         {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
           <tr key={day}>
             <td width={"1rem"} height={"2rem"} style={{ color: "#0A4C66" }}>{day.charAt(0).toUpperCase() + day.slice(1)}</td>
             {["8:20-9:15", "9:15-10:10", "10:20-11:15", "11:15-12:10","12:50-1:40","1:40-2:25"].map((timeSlot) => (
             
               renderTableCell(day, timeSlot)
             ))}
           </tr>
         ))}
       </tbody>
     </table>}
    
          
         
          
        </div>)}
    {flag3 && flag1 && (<div style={{ width: "55rem", height: "29.5rem", marginLeft: "20rem",}}>
          <span style={{ fontSize: "25px", marginLeft: "10rem", color: "#3B92B5", display: "flex", paddingTop: "1rem" }}>
          <select onChange={handleChangedepart} id="role" style={{width:"12rem",marginLeft:"-3rem",marginTop:"-1rem",height:"3.5rem"}}>
                            <option   defaultValue={true}>Department</option>
                            <option>CSE</option>
                            <option>EEE</option>
                            <option>ECE</option>
                            <option>MECH</option>
                        </select>
                        <select onChange={handleChangeyear} id="role" style={{width:"12rem",marginLeft:"3rem",marginTop:"-1rem",height:"3.5rem"}}>
                            <option   defaultValue={true}>Year</option>
                            <option>I</option>
                            <option>II</option>
                            <option>III</option>
                            <option>IV</option>
                        </select>
                        <select onChange={handleChangesection} id="role" style={{width:"12rem",marginLeft:"3rem",marginTop:"-1rem",height:"3.5rem"}}>
                            <option   defaultValue={true}>Section</option>
                            <option>A</option>
                            <option>B</option>
                            <option>C</option>
                            <option>D</option>
                        </select>
                    
           </span>
           <button onClick={sendDataClass} style={{marginLeft:"15rem",marginTop:"1rem",width:"14rem",height:"2.9rem"}} >View Timetable</button>
 
           {classtimetable.length > 0  && 
       <table border={1} align="center" className="timetableori" style={{ fontSize:"1.05rem",borderColor: "#3B92B5", borderCollapse: "collapse", borderWidth: "5px" }}>
       <tbody>
      
         <tr>
           <th colSpan={3} width={"15rem"} height={"3rem"} style={{ backgroundColor: "#3B92B5", color: "white" ,borderBottom:"0.1rem solid white"}}>AcademicYear:{classtimetable[0].Teacher.AcademicYear}</th>
           <th colSpan={5} width={"15rem"} height={"3rem"} style={{ backgroundColor: "#3B92B5", color: "white",borderBottom:"0.1rem solid white" }}>{classtimetable[0].Teacher.Sem}</th>
           <th colSpan={3} width={"15rem"} height={"3rem"} style={{ backgroundColor: "#3B92B5", color: "white",borderBottom:"0.1rem solid white" }}>W.E.F:{classtimetable[0].Teacher.WEF}</th>
      
         </tr>
         <tr>
           <th colSpan={3} width={"15rem"} height={"3rem"} style={{ backgroundColor: "#3B92B5", color: "white" }}>{classtimetable[0].Teacher.Year+classtimetable[0].Teacher.Class+classtimetable[0].Teacher.Department+"-"+classtimetable[0].Teacher.Section}</th>
           <th colSpan={5} width={"15rem"} height={"3rem"} style={{ backgroundColor: "#3B92B5", color: "white" }}>Room-No:{classtimetable[0].Teacher.RoomNo}</th>
           <th colSpan={3} width={"15rem"} height={"3rem"} style={{ backgroundColor: "#3B92B5", color: "white" }}>ClassTeacher{classtimetable[0].Teacher.ClassTeacher}</th>
      
         </tr>
         <tr>
          <td colSpan={3}></td>
        </tr>
         <tr>
           <td width={"15rem"} height={"3rem"}></td>
           <th style={{ color: "#0A4C66" ,width:"5rem",height:"2rem"}}>8:10-8:20</th>
           <th style={{ color: "#0A4C66" ,width:"5rem",height:"2rem"}}>8:20-9:15</th>
              <th style={{ color: "#0A4C66" ,width:"6rem",height:"2rem"}}>9:15-10:10</th>
              <th style={{ color: "#0A4C66",width:"6rem",height:"2rem" }}>10:10-10:20</th>
              <th style={{ color: "#0A4C66" ,width:"6rem",height:"2rem"}}>10:20-11:15</th>
              <th style={{ color: "#0A4C66",width:"6rem",height:"2rem" }}>11:15-12:10</th>
              <th style={{ color: "#0A4C66",width:"6rem",height:"2rem"  }}>12:10-12:50</th>
              <th style={{ color: "#0A4C66" ,width:"6rem",height:"2rem" }}>12:50-1:45</th>
              <th style={{ color: "#0A4C66" ,width:"6rem",height:"2rem" }}>1:40-2:35</th>
              <th style={{ color: "#0A4C66",width:"6rem",height:"2rem"  }}>2:35-3:55</th>
         
         </tr>
         {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
           <tr key={day}>
             <td width={"20rem"} height={"3rem"} style={{ color: "#0A4C66" }}>{day.charAt(0).toUpperCase() + day.slice(1)}</td>
            { (day=="Mon" )? <td key={`${day}`} rowSpan={6}>BREAK</td>:null}
                
             {["8.20-9.15", "9.15-10.10", "10.20-11.15", "11.15-12.10","12.50-1.45","1.45-2.35","2.35-3.55"].map((timeSlot) => (
                <React.Fragment key={timeSlot}>
                  
                {day === "Mon" && timeSlot === "10.20-11.15" ? <td rowSpan={6} key={`${day}`}>BREAK</td> : null}
                
                {day === "Mon" && timeSlot === "12.50-1.45" ? <td rowSpan={6} key={`${day}`}>LUNCH</td> : null}
               {renderTableCell1(day, timeSlot)}
              </React.Fragment>
             ))}
           </tr>
         ))}
       </tbody>
     </table>}
    
          
                 </div>)}
        </div>

)}
export default Teachertimetable;