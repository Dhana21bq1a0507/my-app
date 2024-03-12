import React,{useEffect, useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFile,faList,faPieChart,faTable,faCalendarDays,faFileLines, faTableCells, faClockRotateLeft, faRotateBack, faUser, faBuilding} from "@fortawesome/free-solid-svg-icons";
import {Link} from 'react-router-dom';

import AdminDash from '../Components/AdminDash';
import { useNavigate } from 'react-router-dom'; 

const Adminhome=()=>{
    const navigate = useNavigate();
    const [data,setdata]=useState([])
    const teachermanagement=()=>{
        navigate('/adminteachermanagementmain');
    }
    const timetable=()=>{
        navigate('/admindepartmentupload');
    }
    const leavemanage=()=>{
        navigate('/adminleavemanagement');
    }
    const departmentmanage=()=>{
        navigate('/admindepartment');
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
      <AdminDash>
        <div style={{overflow:"auto",height:"700px",width:"1200px"}}>
        <div>&nbsp; </div>  <div>&nbsp; </div> <section>
        <label className="heading">&nbsp;&nbsp;&nbsp;&nbsp;{data.length>0 && data[0].username}</label>
      
        <div className="container">
        <div className="s1" onClick={teachermanagement} >
            <p style={{marginTop:"15px",textAlign:"center",fontSize:"30px",color:"aliceblue"}}>Teacher Management</p>
            <h1 style={{textAlign:"center",fontSize:"60px",color:"aliceblue",marginTop:"20px"}}><FontAwesomeIcon icon={faUser}/></h1>
        </div>
        <div className="s2" onClick={timetable}>
            <p style={{marginTop:"15px",textAlign:"center",fontSize:"30px",color:"aliceblue"}}>Timetable Management</p>
            <h1 style={{textAlign:"center",fontSize:"60px",color:"aliceblue",marginTop:"20px"}}><FontAwesomeIcon icon={faTable}/></h1>
        </div>
        </div>
        <div className="container">
        <div className="s3" onClick={departmentmanage}>
            <p style={{marginTop:"15px",textAlign:"center",fontSize:"30px",color:"aliceblue"}}>Department Management</p>
            <h1 style={{textAlign:"center",fontSize:"60px",color:"aliceblue",marginTop:"20px"}}><FontAwesomeIcon icon={faBuilding}/></h1>
        </div>
        <div className="s4" onClick={leavemanage}>
            <p style={{marginTop:"15px",textAlign:"center",fontSize:"30px",color:"aliceblue"}}>Leave Management</p>
            <h1 style={{textAlign:"center",fontSize:"60px",color:"aliceblue",marginTop:"20px"}}><FontAwesomeIcon icon={faCalendarDays}/></h1>
        </div>
        </div>
      
       
        </section>  
     </div>
     </AdminDash>
    )
}
export default Adminhome;