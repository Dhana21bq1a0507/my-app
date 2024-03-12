import React,{useState,useEffect} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEye,faList,faCaretDown,faTimesCircle, faCircleCheck,faTimes,faCheck,faCircle} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from 'react-router-dom'; 

import Hodleaveform from "./Hodleaveform";
import './HodDash.css'
function Leavedetails({ isOpen, onCancel, onConfirm ,leavedata}) {
  
  const [data1,setdata1]=useState([])
  
    useEffect(()=>{
      fetch("http://localhost:3300/allleavetypes")
      .then(res => res.json())
      .then(data1 => setdata1(data1))
      .catch((err)=>{
          console.log(err);
    
      })
        
      },[]);
  const leavetable = () => {
    if (leavedata.length > 0 && data1.length>0 ) {
      return leavedata.map((item, index) => {
        if (item.leave) {
          const res = item.leave.split(',');
          res.pop();
          return res.map((leaveItem, leaveIndex) => {
            const a = leaveItem.split(':');
            return (
              <tr key={`${index}-${leaveIndex}`}>
                <td style={{ borderLeft: "0.2rem solid #3B92B5", height: "3.5rem", borderBottom: "0.2rem solid #3B92B5", fontSize: "1.5rem", color: "#3B92B5", textAlign: "center" }}>{a[0].replace('{', '')}</td>
                <td style={{ borderBottom: "0.2rem solid #3B92B5", fontSize: "1.5rem", color: "#3B92B5", textAlign: "center" }}>{a[0].replace('{', '')===data1[leaveIndex].leavetype && data1[leaveIndex].defaultallowance}</td>
                <td style={{ borderBottom: "0.2rem solid #3B92B5", fontSize: "1.5rem", color: "#3B92B5", textAlign: "center" }}>{a[1]}</td>
                <td style={{ borderRight: "0.2rem solid #3B92B5", height: "3.5rem", borderBottom: "0.2rem solid #3B92B5", fontSize: "1.5rem", color: "#3B92B5", textAlign: "center" }}>{a[0].replace('{', '')===data1[leaveIndex].leavetype && parseInt(data1[leaveIndex].defaultallowance)-parseInt(a[1])}</td>
              </tr>
            );
          });
        }
        return null;
      });
    }
  
    return null;
  };
  return (
    <div style={{ display: isOpen ? "block" : "none", position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)", padding: "20px",border:"0.3rem solid #206885", background: "white", zIndex: 1000 }}>
    {leavedata.length>0  && <div><h2 style={{color:"#3B92B5"}}>{leavedata[0].username}</h2><h2 style={{color:"#3B92B5"}}>{leavedata[0].teachermail}</h2></div>}
    <table style={{borderCollapse:"collapse",marginTop:"0rem",overflow:"auto",marginLeft:"2rem"}}>
                     
                            
                     <tr style={{width:"15rem",height:"4rem"}}>
                                       <th style={{fontSize:"1.5rem",backgroundColor:"#3B92B5",color:"white"}}>Leave Type</th>
                             <th style={{fontSize:"1.5rem",backgroundColor:"#3B92B5",color:"white"}}>Default Allowance</th>
                             <th style={{fontSize:"1.5rem",backgroundColor:"#3B92B5",color:"white"}}>LeaveBalance</th>
                             <th style={{fontSize:"1.5rem",backgroundColor:"#3B92B5",color:"white"}}>LeaveConsumption</th>
                          
                                 </tr>
                                 {leavedata && leavetable()}
                             </table>
  
    <button style={{width:"7rem",marginTop:"1rem"}} onClick={onCancel}>Ok</button>
    </div>
  );
}
function Leaverequest(){
    const navigate = useNavigate();
    const [data,setdata]=useState([]);
    const [leavedata,setleavedata]=useState({})
    const [count,setcount]=useState(0);
    const [flag0,setflag0]=useState(false)
    const [flag1,setflag1]=useState(false)
    const [flag2,setflag2]=useState(true)
    const [data1,setdata1]=useState([]);
  
    const [selectedLeave, setSelectedLeave] = useState(null);
    const [inputdata,setinputdata]=useState({teachermail:"",date:""})
    //const [isDeleteModalOpen,setisDeleteModalOpen]=useState(true)
   
    const leaveform = (teachermail, date) => {
    
      navigate('/hodleaveform', {
        state: {
          mail: teachermail,
          datereal: date
        }
      });
    };
    const acceptbtn=()=>{
setflag0(true)
setflag1(false)
setflag2(false)
    }
    const rejectbtn=()=>{
      setflag0(false);
      setflag1(true);
      setflag2(false)
    }
   const requestbtn=()=>{
      setflag0(false)
      setflag1(false)
      setflag2(true)
    }
    useEffect(()=>{
      fetch("http://localhost:3300/hoddetailsprofile")
      .then(res => res.json())
      .then(data1 => setdata1(data1))
      .catch((err)=>{
          console.log(err);
    
      })
        
      },[]);
    
    const requestaccept=async(mail,date1,leave) =>{
      //setinputdata({...inputdata,[teachermail]:mail});
      //setinputdata({...inputdata,[date]:date1});
      try{
          
          const response=await fetch('http://localhost:3300/leaveaccept',{
              method:'POST',headers:{
                  'Content-Type':'application/json',
              },
              body:JSON.stringify({teachermail:mail,date:date1,status:"Accept",leavetype:leave}),
          });
          const result=await response.json();
        // console.log(result.message)
         window.location.reload();
            } 
      
         
      catch(error){
          console.log('Error sending data to Express',error)
      }

  };
  const requestreject=async(mail,date1) =>{
    //setinputdata({...inputdata,[teachermail]:mail});
    //setinputdata({...inputdata,[date]:date1});
    try{
        
        const response=await fetch('http://localhost:3300/leaveaccept',{
            method:'POST',headers:{
                'Content-Type':'application/json',
            },
            body:JSON.stringify({teachermail:mail,date:date1,status:"Reject"}),
        });
        const result=await response.json();
       //console.log(result.message)
       window.location.reload();
          } 
    
       
    catch(error){
        console.log('Error sending data to Express',error)
    }

};
const [leavediv,setleavediv]=useState(false)
const displayleavedetails = async (mail) => {
  // Update textInput by adding "@vvit.net" to teacherid
  
  try {
    const response = await fetch('http://localhost:3300/particularleavehistory', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({teachermail:mail}),
    });

    const result = await response.json();
    console.log(result[0])
   setleavedata(result);
   setleavediv(true)
 // console.log(result[0].length)
  } catch (error) {
    console.log('Error sending data to Express', error);
  }
};
/*const displayleavedetails=(teachermail,date)=>{
  setSelectedLeave({ teachermail, date });
setleavediv(true)
}*/
    const request=()=>{return data.map((item,index)=>(
      item.status===undefined  && item.Branch===data1[0].department &&  (
        <div className="requestdiv" key={index}>
        <p className="reqp"><section style={{borderBottom:"0.2rem  solid black",width:"81.5rem",height:"2rem"}}> Date :{item.date}
       <section style={{display:"flex",flexDirection:"row",height:"3rem",marginTop:"-3rem",marginLeft:"35rem",marginTop:"-2.3rem"}}>
      <button style={{width:"9rem",height:"2.9rem"}} onClick={()=>displayleavedetails(item.teachermail)}>Leave</button>
       <button  style={{width:"9rem",height:"2.9rem"}} onClick={()=>requestaccept(item.teachermail,item.date,item.leavetype)}>&nbsp;<FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>&nbsp;Accept</button>
     
       <button  style={{width:"9rem",height:"2.9rem"}} onClick={()=>requestreject(item.teachermail,item.date)} ><FontAwesomeIcon icon={faTimes}></FontAwesomeIcon>&nbsp;Reject </button>

<button  style={{width:"8rem",height:"2.9rem"}} onClick={() => leaveform(item.teachermail,item.date)}>
          <FontAwesomeIcon icon={faEye}/>&nbsp;View </button>
        
          </section>
        </section>Teachermail :{item.teachermail}
        <br></br> TeacherName :{item.teachername} <br></br>Leave Type:{item.leavetype}<br></br>Reason:{item.ReasonforLeave}
       </p>
        
       </div> )
    ))}
    const accept=()=>{return data.map((item,index)=>(
      item.status==="Accept" && item.Branch===data1[0].department && 
      <div className="requestdiv" key={index}>
         
    <p className="reqp"><section style={{borderBottom:"0.2rem  solid black",width:"81.5rem",height:"2rem",backgroundImage:"linear-gradient(#D1F5E6,#D1F5E6,#D1F5E6))"}}> Date :{item.date} 
    <button className="b3" onClick={() => leaveform(item.teachermail,item.date)}><FontAwesomeIcon icon={faEye}/>&nbsp;View </button>
    </section>Teachermail :{item.teachermail}
      <br></br> TeacherName :{item.teachername} <br></br>Leave Type:{item.leavetype}<br></br>Reason:{item.ReasonforLeave}
     </p> 
      
     </div> 
  ))}
  const reject=()=>{return data.map((item,index)=>(
  item.status==="Reject" && item.Branch===data1[0].department && 
    <div className="requestdiv" key={index}>
      
    <p className="reqp"><section style={{borderBottom:"0.2rem  solid black",width:"81.5rem",height:"2rem"}}> Date :{item.date}
    <button className="b3" onClick={() => leaveform(item.teachermail,item.date)}><FontAwesomeIcon icon={faEye}/>&nbsp;View </button>
    </section>Teachermail :{item.teachermail}
    <br></br> TeacherName :{item.teachername} <br></br>Leave Type:{item.leavetype}<br></br>Reason:{item.ReasonforLeave}
   </p>
    
   </div> 
))}
    useEffect(()=>{
        fetch("http://localhost:3300/leavedetails")
        .then(res => res.json())
        .then(data1 => {
          // Reverse the data before setting it in the state
          const reversedData = [...data1].reverse();
          setdata(reversedData);
        } )
        .catch((err)=>{
            console.log(err);
         })
        
        },[]);
    const handleCancelDelete=()=>{
      setleavediv(false)
    }
return(
  <div style={{border:"0.7rem solid #3B92B5"}}>
       <div className="topdiv">
       <p style={{fontSize:"42px",color:"white",fontFamily:"-moz-initial",marginTop:"0px",marginLeft:"10px",display:"flex",paddingTop:"2rem"}}>
        <FontAwesomeIcon style={{fontSize:"3rem"}}icon={faList}/>&nbsp;Leave Requests</p>
       </div>
       <p style={{fontSize:"1.5rem",color:"#0A4C66",marginLeft:"2rem"}}>Welcome A.Madhavi,<br></br>Leave Requests hub for managing  and responding to leave requests</p>
         <div><button className="acceptbtn" onClick={acceptbtn}>Accepted&nbsp;&nbsp;<FontAwesomeIcon icon={faCircleCheck}/></button>
         <button onClick={rejectbtn} className="acceptbtn" style={{color:"red",border:"0.2rem solid red"}}>Rejected&nbsp;&nbsp;&nbsp;<FontAwesomeIcon icon={faTimesCircle}/></button>

<button onClick={requestbtn} className="acceptbtn" style={{color:"#3B92B5",border:"0.2rem solid #3B92B5"}}>Requests<div style={{borderRadius:"50%",width:"2rem",height:"2rem",backgroundColor:"#3B92B5",color:"#fff",marginLeft:"9rem",marginTop:"-1.5rem"}}>{count}</div> </button></div>

<Leavedetails isOpen={leavediv}  leavedata={leavedata}  onCancel={handleCancelDelete}/>

       <div> { flag0 && <FontAwesomeIcon style={{fontSize:"3rem",marginLeft:"19rem",color:"green"}} icon={faCaretDown}></FontAwesomeIcon>}
        {flag1 && <FontAwesomeIcon style={{fontSize:"3rem",marginLeft:"45rem",color:"red"}} icon={faCaretDown}></FontAwesomeIcon>}
         {flag2 && <FontAwesomeIcon style={{fontSize:"3rem",marginLeft:"71rem",color:"#3B92B5"}} icon={faCaretDown}></FontAwesomeIcon>}</div>
         <div style={{overflow:"auto",width:"86rem",height:"34rem",marginLeft:"5rem"}}>

        {data.length>0 && flag2 ? request()
                :null}
          {data.length>0 && flag1 ? reject()
                :null}
            {data.length>0 && flag0 ? accept()
                :null}
      
        </div>

        </div>
)
}
export default Leaverequest;