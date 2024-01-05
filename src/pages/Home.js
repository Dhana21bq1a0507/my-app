import React,{useState,useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFile,faList,faPieChart,faTable} from "@fortawesome/free-solid-svg-icons";
import "./Dash.css";
import Dashboard from '../Components/Dashboard';
import { useNavigate } from 'react-router-dom'; 
import Leaveform from './Leaveform';
const Home=()=>{
    const [data,setdata]=useState([]);
    const navigate = useNavigate();
    const leave=()=>{
        navigate('/leaveform');
    }
    const classadjust=()=>{
        navigate('/classadjustment');
    }
    useEffect(()=>{
        fetch("http://localhost:3300/userdetails")
        .then(res => res.json())
        .then(data1 => setdata(data1))
        .catch((err)=>{
            console.log(err);
      
        })
          
        },[]);
    return(
        
        <div >
          <Dashboard>
            <div>&nbsp; </div>  <div>&nbsp; </div> <section>
        {data.length>0 &&<label className="heading">&nbsp;&nbsp;&nbsp;&nbsp;Welcome,{data[0].username}</label>}
        <div className="container">
        <div className="s1" onClick={leave}>
            <p style={{marginTop:"15px",textAlign:"center",fontSize:"27px",color:"aliceblue"}}>Leave Request Form</p>
            <h1 style={{textAlign:"center",fontSize:"70px",color:"aliceblue",marginTop:"20px"}}><FontAwesomeIcon icon={faFile}/></h1>
        </div>
        <div className="s2">
            <p style={{marginTop:"15px",textAlign:"center",fontSize:"27px",color:"aliceblue"}}>Leave Balance</p>
            <h1 style={{textAlign:"center",fontSize:"70px",color:"aliceblue",marginTop:"20px"}}><FontAwesomeIcon icon={faPieChart}/></h1>
        </div>
        </div>
        <div className="container">
        <div className="s3">
            <p style={{marginTop:"15px",textAlign:"center",fontSize:"27px",color:"aliceblue"}}>Leave History</p>
            <h1 style={{textAlign:"center",fontSize:"70px",color:"aliceblue",marginTop:"20px"}}><FontAwesomeIcon icon={faList}/></h1>
        </div>
        <div className="s4" onClick={classadjust}>
            <p style={{marginTop:"15px",textAlign:"center",fontSize:"27px",color:"aliceblue"}}>Class Adjustment </p>
            <h1 style={{textAlign:"center",fontSize:"70px",color:"aliceblue",marginTop:"20px"}}><FontAwesomeIcon icon={faTable}/></h1>
        </div>
        </div>
        </section>  
        </Dashboard>
     </div>
    )
}
export default Home;


