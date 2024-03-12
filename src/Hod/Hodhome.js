import React,{useEffect, useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFile,faList,faPieChart,faTable,faCalendarDays,faFileLines, faTableCells, faClockRotateLeft, faRotateBack} from "@fortawesome/free-solid-svg-icons";
import {Link, useSearchParams} from 'react-router-dom';
import "./HodDash.css";
import HodDash from '../Components/HodDash';
import { useNavigate } from 'react-router-dom'; 

const Hodhome=()=>{
    const navigate = useNavigate();
    const [data,setdata]=useState([])
    const leaverequest=()=>{
        navigate('/leaverequest');
    }
    const leaveapplication=()=>{
        navigate('/hodleaveapplication');
    }
    const teacherdetails=()=>{
        navigate('/hodteacherdetails');
    }
    const timetable=()=>{
        navigate('/hodteachertimetable');
    }
    useEffect(()=>{
        fetch("http://localhost:3300/hoddetailsprofile")
        .then(res => res.json())
        .then(data1 => setdata(data1))
        .catch((err)=>{
            console.log(err);
      
        })
          
        },[]);
    return(
      <HodDash>
        <div style={{overflow:"auto",height:"700px",width:"1200px"}}>
        <div>&nbsp; </div>  <div>&nbsp; </div> <section>
        <label className="heading">&nbsp;&nbsp;&nbsp;&nbsp;{data.length>0 && data[0].username}</label>
      
        <div className="container">
        <div className="s1"  onClick={leaveapplication}>
            <p style={{marginTop:"15px",textAlign:"center",fontSize:"30px",color:"aliceblue"}}>Leave Application</p>
            <h1 style={{textAlign:"center",fontSize:"60px",color:"aliceblue",marginTop:"20px"}}><FontAwesomeIcon icon={faFileLines}/></h1>
        </div>
        <div className="s2" onClick={leaverequest}>
            <p style={{marginTop:"15px",textAlign:"center",fontSize:"30px",color:"aliceblue"}}>Leave Requests</p>
            <h1 style={{textAlign:"center",fontSize:"60px",color:"aliceblue",marginTop:"20px"}}><FontAwesomeIcon icon={faList}/></h1>
        </div>
        </div>
        <div className="container">
        <div className="s3" onClick={teacherdetails}>
            <p style={{marginTop:"15px",textAlign:"center",fontSize:"30px",color:"aliceblue"}}>Teacher</p>
            <h1 style={{textAlign:"center",fontSize:"60px",color:"aliceblue",marginTop:"20px"}}><FontAwesomeIcon icon={faList}/></h1>
        </div>
        <div className="s4" onClick={timetable}>
            <p style={{marginTop:"15px",textAlign:"center",fontSize:"30px",color:"aliceblue"}}>Timetable</p>
            <h1 style={{textAlign:"center",fontSize:"60px",color:"aliceblue",marginTop:"20px"}}><FontAwesomeIcon icon={faCalendarDays}/></h1>
        </div>
        </div>
        <div className="container">
        <div className="s3">
            <p style={{marginTop:"15px",textAlign:"center",fontSize:"30px",color:"aliceblue"}}>Class Timetables</p>
            <h1 style={{textAlign:"center",fontSize:"60px",color:"aliceblue",marginTop:"20px"}}><FontAwesomeIcon icon={faTableCells}/></h1>
        </div>
        <div className="s4">
            <p style={{marginTop:"15px",textAlign:"center",fontSize:"30px",color:"aliceblue"}}>Class Adjustments</p>
            <h1 style={{textAlign:"center",fontSize:"60px",color:"aliceblue",marginTop:"20px"}}><FontAwesomeIcon icon={faClockRotateLeft}/></h1>
        </div>
        </div>
       
        </section>  
     </div>
     </HodDash>
    )
}
export default Hodhome;