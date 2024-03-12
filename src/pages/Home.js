import React,{useState,useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFile,faList,faPieChart,faTable} from "@fortawesome/free-solid-svg-icons";

import "./Home.css";
import Dashboard from '../Components/Dashboard';
import { useNavigate } from 'react-router-dom'; 
import Leaveform from './Leaveform';
const Home=()=>{
    const [data,setdata]=useState([]);
    const navigate = useNavigate();
    const leave=()=>{
        navigate('/leaveform');
    }
    const leavebalance=()=>{
        navigate('/leavebalance');
    }
    const classadjust=()=>{
        navigate('/classadjustment');
    }
    const leavehistory=()=>{
        navigate('/leavehistory');
    }
    const timetable=()=>{
        navigate('/teachertimetable');
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
        <div className="container" >
        <div className="s1" onClick={leave}>
            <p  className='divhead'>Leave Request Form</p>
            <h1  className='divicon'><FontAwesomeIcon icon={faFile}/></h1>
        </div>
        <div className="s2"  onClick={leavebalance}>
            <p className='divhead'>Leave Balance</p>
            <h1 className='divicon' ><FontAwesomeIcon icon={faPieChart}/></h1>
        </div>
        </div>
        <div className="container" >
        <div className="s3" onClick={leavehistory}>
            <p className='divhead'>Leave History</p>
            <h1 className='divicon'><FontAwesomeIcon icon={faList}/></h1>
        </div>
        <div className="s4" onClick={classadjust}>
            <p className='divhead'>Class Adjustment </p>
            <h1 className='divicon'><FontAwesomeIcon icon={faTable}/></h1>
        </div>
       
        </div>
        <div className="s4" onClick={timetable} style={{marginLeft:"6rem"}}>
            <p className='divhead'>TimeTable </p>
            <h1 className='divicon'><FontAwesomeIcon icon={faTable}/></h1>
        </div>
        </section>  
        </Dashboard>
     </div>
    )
}
export default Home;


