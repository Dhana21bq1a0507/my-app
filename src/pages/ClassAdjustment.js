import React, { useState,useEffect,useRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTable,faFile,faUserCircle,faBell,faUser,faMoon,faCaretDown,faCaretUp,faCheck, faTimes, fas, faL} from "@fortawesome/free-solid-svg-icons";
import './leave.css'
import emailjs from '@emailjs/browser';
import './Dash.css'
import Dashboard from "../Components/Dashboard";
import profile from './pro.jpg';
import './ClassAdjustment.css'
function RequestConfirmationModal({ isOpen, onCancel, onConfirm }) {
  return (
    <div style={{ display: isOpen ? "block" : "none", position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)", padding: "20px",border:"0.3rem solid #206885", background: "white", zIndex: 1000 }}>
      <p>Are you sure you want to send request this teacher?</p>
      <button onClick={onCancel}>Cancel</button>
      <button onClick={onConfirm}>Confirm</button>
    </div>
  );
}
function MessageConfirmationModal({ isOpen, onCancel, onConfirm }) {
  return (
    <div style={{ display: isOpen ? "block" : "none", position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)", padding: "20px",border:"0.3rem solid #206885", background: "white", zIndex: 1000 }}>
      <p>Successfully Send Request..</p>
      <button onClick={onCancel}>OK</button>
     
    </div>
  );
}
function ClassAdjustment(){
    const [c1,setc1]=useState(1);
    const [c2,setc2]=useState(1);
    const [c3,setc3]=useState(1);
    const [c4,setc4]=useState(1);
    const [data1,setdata1]=useState([])
    const [data2,setdata2]=useState([])
    const [data3,setdata3]=useState([])
    const form = useRef();
    const [flag1,setflag1]=useState(true)
    const [flag2,setflag2]=useState(false)
    const [flag3,setflag3]=useState(false)
    const[teacherdetails,setteacherdetails]=useState([])
    const [data, setData] = useState([]);
   const [mail,setmail]=useState([])
    const [textInput,settextInput]=useState({time:"",date:""})
    const [textInput1,settextInput1]=useState({toteachermali:'',date:'',class:'',time:''})
  
     const [department,setdepartment]=useState('')
     const [year,setyear]=useState('')
     const [Section,setsection]=useState('')
     const [day,setday]=useState('')
     
    
const [flag0,setflag0]=useState(false)
  /* const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_hn0rv12', 'template_lb7geqh', form.current, 'eDkVE9ZXBi_ftgNxt')
        .then((result) => {
            console.log(result.text);
            setflag0(true)
        }, (error) => {
            console.log(error.text);
        });
    };
   */
    const handleInputChange=(e)=>{
      const {name,value}=e.target;
      settextInput({...textInput,[name]:value});
   }
      
   const [ismsgModalOpen, setmsgModalOpen] = useState(false);
   const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
   const handleDelete = (mail) => {
 setmail(mail)
     setDeleteModalOpen(true);
     
   };
   const handleok= () => {
    setmsgModalOpen(false);
  };
   const handleCancelDelete = () => {
     setDeleteModalOpen(false);
   };
   const [isDropdownVisible, setDropdownVisible] = useState(false);

   const toggleDropdown = () => {
     setDropdownVisible(!isDropdownVisible);
   };
 
   const closeDropdown = (event) => {
     if (!event.target.matches('#dropdown-icon')) {
       setDropdownVisible(false);
     }
   };
   const requestaccept=async(mail,date1,status1) =>{
    
    try{
        
        const response=await fetch('http://localhost:3300/requestaccept',{
            method:'POST',headers:{
                'Content-Type':'application/json',
            },
            body:JSON.stringify({teachermail:mail,date:date1,status:status1}),
        });
        const result=await response.json();
      
      setflag1(false)
      setflag2(true)
       window.location.reload();
    
          } 
    
       
    catch(error){
        console.log('Error sending data to Express',error)
    }

};
   const acceptbtn=()=>{
setflag1(false)
setflag2(true)
   }
   const rejectbtn=()=>{
    setflag1(false)
    setflag3(true)
   }
   const handleInputChange1=(e)=>{
    const {name,value}=e.target;
    settextInput1({...textInput1,[name]:value});
 }
    const clidiv1=()=>{
       
        setc1(c1+1);  
    }
    const clidiv2=()=>{
        setc2(c2+1);
      
    }
    const clidiv3=()=>{
       
        setc3(c3+1);  
    }
    const clidiv4=()=>{
       
        
        setc4(c4+1);   
    }
    useEffect(()=>{
      fetch("http://localhost:3300/requestapproal")
      .then(res => res.json())
      .then(data2 => {setdata1(data2)
      console.log(data1)})
      .catch((err)=>{
          console.log(err);
       })
       console.log(data1[1]);
    
      },[]);
        
      useEffect(()=>{
        fetch("http://localhost:3300/requestresponse")
        .then(res => res.json())
        .then(data3 => {setdata2(data3)
       })
        .catch((err)=>{
            console.log(err);
         })
       
      
        },[]);
        useEffect(()=>{
          fetch("http://localhost:3300/actionbutton")
          .then(res => res.json())
          .then(data4 => {setdata3(data4)
         })
          .catch((err)=>{
              console.log(err);
           })
         
        
          },[]);
        useEffect(() => {
          fetch("http://localhost:3300/teacherclassadjust")
            .then((res) => res.json())
            .then((data1) => setteacherdetails(data1))
            .catch((err) => {
              console.log(err);
            });
        }, []);
      const requestrejectmain=(item)=>{
     return(
          <div className="requestappdiv">
            <div className="subdiv">Date:{item.date}
           <button className="btn">&nbsp;&nbsp;Rejected&nbsp;&nbsp;<FontAwesomeIcon icon={faTimes}></FontAwesomeIcon>&nbsp;&nbsp;</button>
 
             </div>
                <p className="teachermail">TeacherMail&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;{item.fromteachermali}<br></br>
               Class&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;{item.class}<br></br>Time&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;{item.time}</p>
                </div>
     )
      }
      const requestresponse=()=>{
        return data2.map((item,index)=>(
          item.status==="Accept" ?  <div className="requestappdiv">
          <div className="subdiv">Date:{item.date}
          <button  className="greenbtn">&nbsp;&nbsp;Accepted&nbsp;&nbsp;<FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>&nbsp;&nbsp;</button>
           </div>
              <p className="teachermail">TeacherMail&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;{item.toteachermali}<br></br>
             Class&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;{item.class}<br></br>Time&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;{item.time}</p>
              </div>: item.status==="Reject" ?  <div className="requestappdiv">
          <div className="subdiv">Date:{item.date}
          <button  className="btn">&nbsp;&nbsp;Rejected&nbsp;&nbsp;<FontAwesomeIcon icon={faTimes}></FontAwesomeIcon>&nbsp;&nbsp;</button>
 
           </div>
              <p className="teachermail">TeacherMail&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;{item.toteachermali}<br></br>
             Class&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;{item.class}<br></br>Time&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;{item.time}</p>
              </div> :null ))
      }
      const requestacceptmain=(item)=>{
       return(
          <div className="requestappdiv">
            <div className="subdiv">Date:{item.date}
           <button  className="greenbtn">&nbsp;&nbsp;Accepted&nbsp;&nbsp;<FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>&nbsp;&nbsp;</button>
      </div>
                <p className="teachermail">TeacherMail&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;{item.fromteachermali}<br></br>
               Class&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;{item.class}<br></br>Time&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;{item.time}</p>
                </div>
       )
      }
      const requestnoaction=(item)=>{
        return (
          <div className="requestappdiv">
            <div className="subdiv">Date:{item.date}
            <div style={{marginTop:"-2rem",marginLeft:"9rem"}}><button onClick={()=>requestaccept(item.fromteachermali,item.date,"Accept")} className="accept">&nbsp;&nbsp;Accept&nbsp;&nbsp;<FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>&nbsp;&nbsp;</button>
            <button onClick={()=>requestaccept(item.fromteachermali,item.date,"Reject")} className="reject">&nbsp;&nbsp;Reject&nbsp;&nbsp;<FontAwesomeIcon icon={faTimes}></FontAwesomeIcon>&nbsp;&nbsp;</button></div>
      
      </div>
          <p className="teachermail">TeacherMail&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;{item.fromteachermali}<br></br>
         Class&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;{item.class}<br></br>Time&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;{item.time}</p>
          </div>
        
      )}
      const requestapproal=()=>{
        return data1.map((item,index)=>(
          <div  key={index}>
          {item.status===undefined ? (<div>{requestnoaction(item)}</div>):
          item.status==="Accept" ? (<div>{requestacceptmain(item)}</div>) :
          item.status==="Reject" && <div>{requestrejectmain(item)}</div>
        } 
</div>
        ))
      }
      const handleChangedepart=(event)=>{
        setdepartment(event.target.value);
    }
    const handleChangeyear=(event)=>{
      setyear(event.target.value);
  }
  const handleChangesection=(event)=>{
    setsection(event.target.value);
}
const handleChangeday=(event)=>{
  setday(event.target.value);
}
    const sendDataToExpress=async() =>{
    
      try{
       
          const response=await fetch('http://localhost:3300/timetable',{
              method:'POST',headers:{
                  'Content-Type':'application/json',
              },
             
              body:JSON.stringify(),
          });
          console.log()
          const result=await response.json();
          //console.log(result[0]['mon'])
              setData(result);
             
            }
      catch(error){
          console.log('Error sending data to Express',error)
      }

  };
  const handleConfirmDelete=async(mail) =>{
    try{
   // console.log(textInput1)
       const response=await fetch('http://localhost:3300/requestadjust',{
            method:'POST',headers:{
                'Content-Type':'application/json',
            },
            body:JSON.stringify({date:textInput.date,time:textInput.time,class:(year+"-"+department+"-"+Section),toteachermali:mail}),
        });
       // console.log(textInput1)
        const result=await response.json();
        //console.log(result[0]['mon'])
           //setData(result);
           setDeleteModalOpen(false)
           setmsgModalOpen(true)
          }
    catch(error){
        console.log('Error sending data to Express',error)
    }

};
const [tabledetails, setTabledetails] = useState([]);


const actionbutton = (mail) => {
  //console.log("actionbutton"+mail)
  for (const item of data3) {
    //console.log("out"+""+item.toteachermali+item.status)
    if (item.toteachermali === mail && item.time==textInput.time && item.date==textInput.date && item.class==(year+"-"+department+"-"+Section)) {
    // console.log(item)
      return item.status;
    }
  }
  return null;
};

const renderTableCell =(day, timeSlot,i) => {
// if(teacherdetails.length>0){
    if (teacherdetails && teacherdetails.length > i && teacherdetails[i].Teacher && teacherdetails[i].Teacher[day]) {
  
  // if ( teacherdetails[i].Teacher && teacherdetails[i].Teacher[day]) {

      const dayDataString = teacherdetails[i].Teacher[day];

//console.log(i+"  "+dayDataString)
      try {
        const keyValuePairs = dayDataString.match(/"([^"]+)":\s*"([^"]+)"/g);

        const resultObject = {};
        if (keyValuePairs) {
          keyValuePairs.forEach(pair => {
            const [key, value] = pair.split('": "').map(item => item.replace(/"/g, ''));
            resultObject[key] = value;
          });
        }
       
        if (resultObject) {
           const value = resultObject[timeSlot];
          if (value === "undefined") {  
          
            var result=actionbutton(teacherdetails[i].Teacher.id);
                      return (
              <tr key={i}>
                <td style={{ width: "6rem",fontSize: "2.3rem", height: "3.5rem", borderBottom: "0.2rem solid #3B92B5",  color: "#3B92B5", textAlign: "center" }}><FontAwesomeIcon icon={faUserCircle}></FontAwesomeIcon></td>
                <td style={{ width: "18rem", height: "3.5rem", borderBottom: "0.2rem solid #3B92B5", fontSize: "1.5rem", color: "#3B92B5", textAlign: "center" }}>21bq1a0507</td>
                <td style={{ width: "18rem", height: "3.5rem", borderBottom: "0.2rem solid #3B92B5", fontSize: "1.5rem", color: "#3B92B5", textAlign: "center" }}>{teacherdetails[i].Teacher.name}</td>
  
                <td style={{ width: "18rem", height: "3.5rem", borderBottom: "0.2rem solid #3B92B5", fontSize: "1.5rem", color: "#3B92B5", textAlign: "center" }}>{teacherdetails[i].Teacher.id}</td>
                  <td style={{ width: "15rem", height: "3.5rem", borderBottom: "0.2rem solid #3B92B5", fontSize: "1.5rem", color: "#3B92B5", textAlign: "center", textDecoration: "underline", cursor: "pointer" }} onClick={()=>handleDelete(teacherdetails[i].Teacher.id)}>
                  {result=== "Accept" ? "Assinged" : "Not Assinged"}
                </td>
              </tr>
            );
        } 
      }
      } catch (error) {
        console.error(`Error parsing JSON for ${day} - ${timeSlot}`, error);
      }
    }
//  }

  
};


    return(
       <div className="maindiv">
        
    <div className="firstdiv" style={{width:"93rem"}}><p style={{fontSize:"45px",color:"white",fontFamily:"-moz-initial",marginTop:"0px",marginLeft:"10px",display:"flex",paddingTop:"10px"}}><FontAwesomeIcon icon={faTable}/>&nbsp;ClassAdjustment<div >
     
      
      <div className="dropdown-container" onClick={closeDropdown} >
      <img src={profile} alt="Dropdown Icon" onClick={toggleDropdown} id="dropdown-icon" style={{width:"4.5rem",height:"3.5rem",borderRadius:"10rem"}} />
      <div style={{marginLeft:"-3rem"}}className={`dropdown-content ${isDropdownVisible ? 'show' : ''}`}>
        <a href="#" style={{paddingRight:"5rem"}}>Dashboard</a>
        <div style={{width:"12.5rem",height:"0.15rem",background:"#206885"}}></div>
        <a href="#" style={{}}>Dark mode <span style={{paddingLeft:"1.8rem"}}><FontAwesomeIcon
        icon={faMoon}
        className="icon"
        style={{ color: '#3B92B5',width:"2rem",height:"2rem" }}
        onClick={toggleDropdown}
      /></span></a>
        <div style={{width:"12.5rem",height:"0.15rem",background:"#206885"}}></div>
        <a href="#" style={{paddingRight:"7rem"}}>Logout</a>
      </div>
    </div>
    

      </div></p></div>
    <h1 style={{color:"#3B92B5",marginLeft:"10px",fontWeight:"8px"}}>&nbsp;Welcome to the Class Adjustment feature! </h1>
<h2 style={{color:"#3B92B5",fontFamily:"math",marginLeft:"10px"}}> &nbsp;Use this feature to propose changes to specific classes, adjust timings,and ensure a smooth transition 
in your absence</h2>



<div className="c1" onClick={clidiv1} ><span style={{color:"white",fontSize:"30px",paddingLeft:"40px",paddingTop:"1px"}}>Need To adjust your classes?check Timetables
{c1%2!=0 ? <span style={{color:"white",fontSize:"40px",paddingLeft:"400px",paddingTop:"5px"}}><FontAwesomeIcon icon={faCaretUp}/></span>:<span style={{color:"white",fontSize:"40px",paddingLeft:"400px",paddingTop:"5px",marginTop:"14px"}}><FontAwesomeIcon icon={faCaretDown}/></span>}</span></div>

{c1%2==0 &&  <div className="c2" style={{height:"40rem"}}>
<div style={{width:"50rem",fontSize: "25px", marginLeft: "7rem", color: "#3B92B5",  paddingTop: "4rem" }}>
          <input type="date" name="date" value={textInput.date} placeholder="Date" style={{marginLeft:"1rem",marginTop:"-2rem",width:"12rem",border:"0.1rem solid ",height:"3.7rem"}} onChange={handleInputChange}></input>
                        <select onChange={handleChangedepart} id="role" style={{width:"12rem",marginLeft:"3rem",marginTop:"-2rem",height:"3.5rem"}}>
                            <option defaultValue={true}>Department</option>
                           <option>CSE</option>
                            <option>EEE</option>
                            <option>ECE</option>
                            <option>IT</option>
                        </select>
                        <select onChange={handleChangeyear} id="role" style={{width:"12rem",marginLeft:"3rem",marginTop:"-2rem",height:"3.5rem"}}>
                            <option defaultValue={true}>Year</option>
                           <option>I</option>
                            <option>II</option>
                            <option>III</option>
                            <option>IV</option>
                        </select>
                        <select onChange={handleChangesection} id="role" style={{width:"14rem",marginLeft:"0.7rem",marginTop:"1rem",height:"3.5rem"}}>
                            <option defaultValue={true}>Section</option>
                           <option>A</option>
                            <option>B</option>
                            <option>C</option>
                            <option>D</option>
                        </select>
                        <select onChange={handleChangeday} id="role" style={{width:"12rem",marginLeft:"3rem",marginTop:"-2rem",height:"3.5rem"}}>
                            <option   defaultValue={true}>Day</option>
                            <option>Mon</option>
                            <option>Tue</option>
                            <option>Wed</option>
                            <option>Thu</option>
                            <option>Fri</option>
                            <option>Sat</option>
                        </select>
                        <RequestConfirmationModal isOpen={isDeleteModalOpen} onCancel={handleCancelDelete} onConfirm={()=>handleConfirmDelete(mail)} />
                        <MessageConfirmationModal isOpen={ismsgModalOpen} onCancel={handleok} />

                        <input type="text" name="time" value={textInput.time} placeholder="Class Time" style={{border:"1px solid #3B92B5",marginTop:"-2rem",marginLeft:"3rem",height:"3rem",width:"10rem"}}  onChange={handleInputChange}/>
                        </div>
                    <div  style={{overflow:"auto",width:"68.5rem",height:"28rem"}}>
                        <table style={{borderCollapse:"collapse",marginTop:"2rem",overflow:"auto"}}>
                     
                            
                        <tr>
                                    <th style={{width:"3rem",height:"3.5rem",fontSize:"1.5rem",backgroundColor:"#3B92B5"}}></th>
                                <th style={{width:"18rem",height:"3.5rem",fontSize:"1.5rem",backgroundColor:"#3B92B5",color:"white"}}>Teacher Id</th>
                                <th style={{width:"20rem",height:"3.5rem",fontSize:"1.5rem",backgroundColor:"#3B92B5",color:"white"}}>Name</th>
                                <th style={{width:"20rem",height:"3.5rem",fontSize:"1.5rem",backgroundColor:"#3B92B5",color:"white"}}>Email Id</th>
                                 <th style={{width:"15rem",height:"3.5rem",fontSize:"1.5rem",backgroundColor:"#3B92B5",color:"white"}}>Actions</th>
                                </tr>
                              
                                {teacherdetails.length > 0 && [0,1,2,3,4,5,6,7,8,9].map(index => (
                                  
    <React.Fragment key={index}>
      {renderTableCell(day, textInput.time, index)}
    </React.Fragment>
  ))}
                               
                                </table>
                                    </div>
           
    </div>}



<div className="c1" onClick={clidiv3} ><span style={{color:"white",fontSize:"30px",paddingLeft:"3rem",paddingTop:"5px"}}>Request Approval Responses</span>{c3%2!=0 ? <span style={{color:"white",fontSize:"40px",paddingLeft:"38.5rem",marginTop:"14px"}}><FontAwesomeIcon icon={faCaretUp}/></span>:<span style={{color:"white",fontSize:"40px",marginTop:"14px",paddingLeft:"38.5rem"}}><FontAwesomeIcon icon={faCaretDown}/></span>}</div>

{c3%2==0 &&  <div className="c2" style={{overflow:"auto"}}>{requestresponse()}</div>}

<div className="c1" onClick={clidiv4} ><span style={{color:"white",fontSize:"30px",paddingLeft:"40px",paddingTop:"5px"}}>View </span>{c4%2!=0 ? <span style={{color:"white",fontSize:"40px",paddingLeft:"930px",marginTop:"14px"}}><FontAwesomeIcon icon={faCaretUp}/></span>:<span style={{color:"white",fontSize:"40px",paddingLeft:"930px",marginTop:"14px"}}><FontAwesomeIcon icon={faCaretDown}/></span>}</div>

{c4%2==0 &&  <div className="c2" style={{overflow:"auto"}}> {requestapproal()}</div>}

       </div>
       
    )
                              }              
export default ClassAdjustment;