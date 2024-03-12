import React,{useState,useEffect} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPrint,faUpload,faFileDownload,faFile,faBell,faUser,faMoon} from "@fortawesome/free-solid-svg-icons";
import './leave.css'
import emailjs from '@emailjs/browser';
import './Dash.css'
import profile from './pro.jpg';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { createGlobalStyle, ThemeProvider } from "styled-components";
const GlobalStyle = createGlobalStyle`
  // Your global styles go here
`;
function Leaveform(){

  const [mes,setmes]=useState([])
  const [flag0,setflag0]=useState(false)
  const [hoddepart,setHoddepart]=useState([])
    const [textInput,settextInput]=useState({teachermail:"",date:"",teachername:"",leavetype:'',teacherid:"",Designature:"",Branch:"",LeaveAvailedTillDate:"",ReasonforLeave:"",date1:"",class1:"",time1:"",nameofalternative1:"",date2:"",class2:"",time2:"",nameofalternative2:"",date3:"",class3:"",time3:"",nameofalternative3:"",date4:"",class4:"",time4:"",nameofalternative4:"",date5:"",class5:"",time5:"",nameofalternative5:""})
    const handleInputChange=(e)=>{
      const {name,value}=e.target;
      settextInput({...textInput,[name]:value});
      console.log(textInput);
   }
   const [isDropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };
const notify = (message) => {
        toast.success(message, {
          theme:"colored",
          position: "top-right",
          autoClose: 10000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      };
      const notifyerror = (message) => {
        toast.error(message, {
          theme:"colored",
          position: "top-right",
          autoClose: 10000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      };
  const closeDropdown = (event) => {
    if (!event.target.matches('#dropdown-icon')) {
      setDropdownVisible(false);
    }
  };

   
const handleChangeopt = (event) => {
  if (event.target.value !== "Select Month") {
   
    settextInput((prev) => ({ ...prev, leavetype: event.target.value }));
  } else {
   
    settextInput((prev) => ({ ...prev, leavetype: '' }));
  }
}
const handleChangeopt1 = (event) => {
  if (event.target.value !== "Select Department") {
   
    settextInput((prev) => ({ ...prev, Branch: event.target.value }));
  } else {
   
    settextInput((prev) => ({ ...prev, Branch: '' }));
  }
}
   const success=()=>{
    setflag0(true)
    notify("LeaveForm is sent to HOD")
   }
   const sendEmail = (e) => {
    
  };
   const sendDataToExpress=async() =>{
    //const dataTosend={textInput};
    //const dataTosend1={passInput};
   
    try{
        
        const response=await fetch('http://localhost:3300/leaveform',{
            method:'POST',headers:{
                'Content-Type':'application/json',
            },
            
            body:JSON.stringify(textInput),
        });
        console.log("data send successfully..")
        const result=await response.json();
        setmes(result)
        success()
       {/*} emailjs.sendForm('service_2nrmpj7', 'template_dkhnmur',{} , 'YqyHpfeECsAI5B1c8')
          .then((result) => {
              //console.log(result.text);
              setflag0(true)
          }, (error) => {
              console.log(error.text);
          });*/}
            
          } 
    
       
    catch(error){
        console.log('Error sending data to Express',error)
        notifyerror("LeaveForm is not sent to HOD")
    }

};

const [data1,setdata1]=useState([])
useEffect(()=>{
  fetch("http://localhost:3300/allleavetypes")
  .then(res => res.json())
  .then(data1 => setdata1(data1))
  .catch((err)=>{
      console.log(err);

  })
    
  },[]);
  useEffect(()=>{
    fetch("http://localhost:3300/hodalldetails")
    .then(res => res.json())
    .then(data1 => setHoddepart(data1))
    .catch((err)=>{
        console.log(err);
  
    })
      
    },[]);
const leavedetails = () => {
 try{
  if(data1.length>0){
   return  data1.map((item,index)=>{
     return  <option key={index}>{item.leavetype}</option>
    
    })
  }
  else{
    return null;
  }
 }
 catch(e){
  console.log("Error"+e)
 }
    
 
};
const alldepartment= () => {
  try{
   if(hoddepart.length>0){
    return  hoddepart.map((item,index)=>{
      return  <option key={index}>{item.department}</option>
     
     })
   }
   else{
     return null;
   }
  }
  catch(e){
   console.log("Error"+e)
  }
     
  
 };
   
    return(
      
       <div className="maindiv">
       <ThemeProvider theme={{}}>
        <>
          <GlobalStyle />
          <ToastContainer  />
        </>
      </ThemeProvider>
    <div className="firstdiv" style={{width:"94rem"}}><p style={{fontSize:"45px",color:"white",fontFamily:"-moz-initial",marginTop:"0px",marginLeft:"10px",display:"flex",paddingTop:"10px"}}><FontAwesomeIcon icon={faFile}/>&nbsp;Leave Request Form
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
    

   
   
    </p>
    </div>
        
        
        
        <h1 style={{color:"#3B92B5",marginLeft:"10px"}}>&nbsp;Welcome to the Leave Request Form,</h1>
<h2 style={{color:"#3B92B5",fontFamily:"math",marginLeft:"10px"}}> &nbsp;This form allows you to request time off from your regular duties</h2>
      {flag0 ? <h1 style={{marginLeft:"400px",color:"green"}}>Leave is successfully send to HOD</h1>: null}
       <div className="secdiv" style={{width:"63rem",marginLeft:"17rem"}}>
        <div className="thirddiv" style={{width:"61.5rem"}}>Application for Leave(STAFF)<br/>[VVIT/ACD/16]</div>
        
        <form ><table  cellSpacing={0} className="tsy"><br></br><br></br>
        <span style={{fontSize:"25px",marginLeft:"40px",color:"#3B92B5"}}>Today Date</span>
 <input type="text" className="edittext1"  name="date" onChange={handleInputChange} value={textInput.date}  style={{border:"1px solid #3B92B5",marginLeft:"24.7rem",height:"45px",width:"300px"}}/>
   <br></br><br></br>
 
        <span style={{fontSize:"25px",marginLeft:"40px",color:"#3B92B5"}}>Teacher Id</span>
 <input type="text" className="edittext1" value={textInput.teacherid} name="teacherid" onChange={handleInputChange}  style={{border:"1px solid #3B92B5",marginLeft:"25.5rem",height:"45px",width:"300px"}}/>
   <br></br><br></br>
   <span style={{fontSize:"25px",marginLeft:"40px",color:"#3B92B5"}}>Teacher Name</span>
 <input type="text" className="edittext1" value={textInput.teachername} name="teachername" onChange={handleInputChange}  style={{border:"1px solid #3B92B5",marginLeft:"22.6rem",height:"45px",width:"300px"}}/>
   <br></br><br></br>
   <span style={{fontSize:"25px",marginLeft:"40px",color:"#3B92B5"}}>Teacher Mail</span>
 <input type="text" className="edittext1" value={textInput.teachermail} name="teachermail" onChange={handleInputChange}  style={{border:"1px solid #3B92B5",marginLeft:"23.6rem",height:"45px",width:"300px"}}/>
   <br></br><br></br>
   <span style={{fontSize:"25px",marginLeft:"40px",color:"#3B92B5"}}>Designature</span>
 <input type="text" className="edittext1" value={textInput.Designature} name="Designature" onChange={handleInputChange}  style={{border:"1px solid #3B92B5",marginLeft:"24rem",height:"45px",width:"300px"}}/>
   <br></br><br></br>
           
   <span style={{fontSize:"25px",marginLeft:"40px",color:"#3B92B5"}}>Branch</span>
   <select style={{width:"20.5rem",height:"3.3rem",color:"#3B92B5",fontSize:"1.7rem",marginLeft:"27.5rem"}}  onChange={handleChangeopt1} id="role">
                    <option defaultValue={true}>Select Department</option>
                {alldepartment()}
                   
                </select>
   <br></br><br></br>
   <span style={{fontSize:"25px",marginLeft:"40px",color:"#3B92B5"}}>Leave Type</span>
   <select style={{width:"20.5rem",height:"3.3rem",color:"#3B92B5",fontSize:"1.7rem",marginLeft:"24.5rem"}}  onChange={handleChangeopt} id="role">
                    <option defaultValue={true}>Select Month</option>
                  {leavedetails()}
              
                </select>
             

    <br></br><br></br>
   <span style={{fontSize:"25px",marginLeft:"40px",color:"#3B92B5"}}>Leave Availed Till Date (In this Academic Year)</span>
 <input type="text" className="edittext1"  value={textInput.LeaveAvailedTillDate} name="LeaveAvailedTillDate" onChange={handleInputChange}  style={{border:"1px solid #3B92B5",marginLeft:"10px",height:"45px",width:"300px"}}/>
   <br></br><br></br>
  
   <span style={{fontSize:"25px",marginLeft:"40px",color:"#3B92B5"}}>Reason for Leave</span>
 <input type="text" className="edittext1"  value={textInput.ReasonforLeave} name="ReasonforLeave" onChange={handleInputChange}  style={{border:"1px solid #3B92B5",marginLeft:"330px",height:"45px",width:"300px"}}/>
   <br></br><br></br>
            <tr><td  className="leavehed">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Alternative Arrangement made for Classes/Duties </td>
            </tr>
            <tr>
                <td>
                    <table border={1} cellSpacing={1} cellPadding={10} className="tablestyle">
                       <tr>
                        <th>
                            Date of Assignment
                        </th>
                        <th>
                            Class
                        </th>
                        <th>
                            Time
                        </th> <th>
                            Name of Alternative staff/Faculty
                        </th>
                        
                       </tr>
                       <tr>
                        <td ><input type="text" value={textInput.date1} name="date1" onChange={handleInputChange} className="tableinput"></input></td>
                        <td><input type="text" value={textInput.time1} name="time1" onChange={handleInputChange} className="tableinput"></input></td>
                        <td><input type="text"  value={textInput.class1} name="class1" onChange={handleInputChange}className="tableinput"></input></td>
                        <td><input type="text" value={textInput.nameofalternative1} name="nameofalternative1" onChange={handleInputChange} className="tableinput"></input></td>
                        </tr>
                       <tr>
                       <td ><input type="text" value={textInput.date2} name="date2" onChange={handleInputChange} className="tableinput"></input></td>
                        <td><input type="text" value={textInput.time2} name="time2" onChange={handleInputChange} className="tableinput"></input></td>
                        <td><input type="text"  value={textInput.class2} name="class2" onChange={handleInputChange}className="tableinput"></input></td>
                        <td><input type="text" value={textInput.nameofalternative2} name="nameofalternative2" onChange={handleInputChange} className="tableinput"></input></td>
                       
                         </tr>
                       <tr>
                       <td ><input type="text" value={textInput.date3} name="date3" onChange={handleInputChange} className="tableinput"></input></td>
                        <td><input type="text" value={textInput.time3} name="time3" onChange={handleInputChange} className="tableinput"></input></td>
                        <td><input type="text"  value={textInput.class3} name="class3" onChange={handleInputChange}className="tableinput"></input></td>
                        <td><input type="text" value={textInput.nameofalternative3} name="nameofalternative3" onChange={handleInputChange} className="tableinput"></input></td>
                       
                          </tr>
                       <tr>
                       <td ><input type="text" value={textInput.date4} name="date4" onChange={handleInputChange} className="tableinput"></input></td>
                        <td><input type="text" value={textInput.time4} name="time4" onChange={handleInputChange} className="tableinput"></input></td>
                        <td><input type="text"  value={textInput.class4} name="class4" onChange={handleInputChange}className="tableinput"></input></td>
                        <td><input type="text" value={textInput.nameofalternative4} name="nameofalternative4" onChange={handleInputChange} className="tableinput"></input></td>
                            </tr>
                       <tr>
                       <td ><input type="text" value={textInput.date5} name="date5" onChange={handleInputChange} className="tableinput"></input></td>
                        <td><input type="text" value={textInput.time5} name="time5" onChange={handleInputChange} className="tableinput"></input></td>
                        <td><input type="text"  value={textInput.class5} name="class5" onChange={handleInputChange}className="tableinput"></input></td>
                        <td><input type="text" value={textInput.nameofalternative5} name="nameofalternative5" onChange={handleInputChange} className="tableinput"></input></td>
                       
                       </tr>
                    </table>
                </td>
            </tr>
           
            </table>
           
              
                
            
   </form>
       </div>
         <button style={{width:"220px",marginLeft:"500px",marginTop:"2rem"}} onClick={sendDataToExpress}><FontAwesomeIcon icon={faUpload} />&nbsp;Submit to HOD</button>
       <button style={{width:"220px",marginLeft:"50px"}}><FontAwesomeIcon icon={faFileDownload}/>&nbsp;Download</button>
       
       </div>
       
    )
}
export default Leaveform;