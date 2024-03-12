import React, { useState ,useEffect} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCaretUp, faUser,faTimes } from "@fortawesome/free-solid-svg-icons";
import { createGlobalStyle, ThemeProvider } from "styled-components";

import { Theme } from 'react-toastify';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const GlobalStyle = createGlobalStyle`
  // Your global styles go here
`;
function RequestConfirmationModal({ isOpen, onCancel, onConfirm }) {
    return (
      <div style={{ display: isOpen ? "block" : "none", position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)", padding: "20px",border:"0.3rem solid #206885", background: "white", zIndex: 1000 }}>
        <p>Are you sure you want to delete this leave?</p>
        <button onClick={onCancel}>Cancel</button>
        <button onClick={onConfirm}>Confirm</button>
      </div>
    );
  }
  

function Addnewleave({ isOpen, onCancel}) {
    const [textInput, setTextInput] = useState({ leavetype: "", defaultallowance: "" });
const [flag0,setflag0]=useState(false);

    const handleLeavetypeChange = (e) => {
        const { name, value } = e.target;
        setTextInput({ ...textInput, [name]: value });
    };
    const handleCancel = () => {
        setTextInput({ leavetype: "", defaultallowance: "" });
        setflag0(false)
        onCancel(); // Call the onCancel prop if needed
    };
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
    const notifywarning = (message) => {
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
   const savebut=async(mail) =>{
    if(textInput.leavetype=="" && textInput.defaultallowance==""){
      notifywarning("Please Enter All Details!...")
    }else{
        try{
         
            const response=await fetch('http://localhost:3300/addnewleave',{
                method:'POST',headers:{
                    'Content-Type':'application/json',
                },
               
                body:JSON.stringify(textInput),
            });
            console.log()
            const result=await response.json();
            console.log(result[0])
            if(result.message==="Data added successfully"){
               setflag0(true);
               notify('Leave type added successfully!')
               window.location.reload();
            
            }

           
               
              }
        catch(error){
            console.log('Error sending data to Express',error)
        }
    }
      };
    
      


    return (
        <div style={{ display: isOpen ? "block" : "none", position: "fixed", top: "35%", left: "50%", transform: "translate(-50%, -50%)", padding: "2rem", border: "0.3rem solid #206885",paddingTop:"1rem", background: "white", zIndex: 1000 }}>
           <ToastContainer/>
           <span style={{fontSize:"1.5rem",color:"#3B92B5",marginLeft:"30rem"}} onClick={handleCancel}>  <FontAwesomeIcon icon={faTimes}></FontAwesomeIcon></span><br></br>
       
            {flag0 && <h3 style={{color:"green",marginLeft:"6rem",marginTop:"-2rem"}}>Data Insert successfully</h3>}
            <span style={{ color: "#3B92B5", fontSize: "1.5rem" ,marginTop:"1rem"}}>Leave Type:</span>
            <input type="text" name="leavetype" value={textInput.leavetype} onChange={handleLeavetypeChange} style={{ marginLeft: "4.8rem",marginTop:"1rem", border: "0.1rem solid #3B92B5", width: "17rem", height: "3.4rem" }} /><br></br>
            <span style={{ color: "#3B92B5", fontSize: "1.5rem" }}>Default Allowance:</span>
            <input type="number" name="defaultallowance" value={textInput.defaultallowance} onChange={handleLeavetypeChange}  style={{ marginTop: "1rem", border: "0.1rem solid #3B92B5", width: "17rem", height: "3.4rem" }} /><br></br>
            <button style={{ marginTop: "1.5rem", width: "7rem", marginLeft: "6rem" }} onClick={savebut}>Save</button>
            <button style={{ width: "7rem", marginLeft: "3rem" }} onClick={handleCancel}>Cancel</button>
        </div>
    );
}

function Adminleavemanagement() {
    const [isaddnewleaveopen, setAddnewleaveopen] = useState(false);
const [data,setdata]=useState([]);
const [c1,setc1]=useState(1)
    const addLeave = () => {
        setAddnewleaveopen(true);
    };
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
    
    useEffect(()=>{
        fetch("http://localhost:3300/newleavedetails")
        .then(res => res.json())
        .then(data2 => {setdata(data2)
        console.log(data)})
        .catch((err)=>{
            console.log(err);
         })
        
      
        },[]);
    const handleCancel = () => {
        setAddnewleaveopen(false);
    };
const [leavetype,setleavetype]=useState('')
    const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
    const handleDelete = (leavetype) => {
        setleavetype(leavetype)
      setDeleteModalOpen(true);
      
    };
    const handleCancelDelete = () => {
        setDeleteModalOpen(false);
      };
      const handleConfirmDelete = async () => {
        try {
          const response = await fetch('http://localhost:3300/leavetypedelete', {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ leavetype:leavetype}),
          });
    
          const data = await response.json();
    
          if (response.ok) {
          
            console.log(data.message);
            notify('LeaveType Deleted!....')
            window.location.reload();
          } else {
            console.error(data.error || 'Error deleting user');
          }
        } catch (error) {
          console.error('Error:', error.message);
        } finally {
          setDeleteModalOpen(false);
        }
      };
const leavedetails=()=>{
  
    return data.map((item,index)=>(
        <tr key={index}>
            <td style={{width:"18rem",borderLeft:"0.2rem solid #3B92B5",height:"3.5rem",borderBottom:"0.2rem solid #3B92B5",fontSize:"1.5rem",color:"#3B92B5",textAlign:"center"}}>{item.leavetype}</td>
            <td style={{width:"18rem",height:"3.5rem",borderBottom:"0.2rem solid #3B92B5",fontSize:"1.5rem",color:"#3B92B5",textAlign:"center"}}>{item.defaultallowance}</td>
            <td style={{width:"18rem",borderRight:"0.2rem solid #3B92B5",height:"3.5rem",borderBottom:"0.2rem solid #3B92B5",fontSize:"1.5rem",color:"#3B92B5",textAlign:"center",textDecoration:"underline"}}><span style={{cursor:"pointer"}} onClick={() => handleDelete(item.leavetype)}>Delete</span></td>
       
        </tr>
    ))
}
const leavebut=()=>{
    setc1(c1+1)
}

const leaverefresh=async() =>{
    
  try{
    //console.log("data is sending");
      const response=await fetch('http://localhost:3300/leaverefresh',{
          method:'POST',headers:{
              'Content-Type':'application/json',
              
          },
         
          body:JSON.stringify({message:"dhana"}),
      });
      
      const result=await response.json();
        }
  catch(error){
      console.log('Error sending data to Express',error)
  }

};
  return (
        <div style={{ border: "0.7rem solid #3B92B5", width: "94.4rem", height: "42rem",overflow:"auto"}}>
            <div className="firstdiv" style={{ width: "95.5rem", marginLeft: "-1rem" }}>
                <p style={{ fontSize: "2.7rem", color: "white", fontFamily: "-moz-initial", marginTop: "0px", paddingLeft: "2rem", display: "flex", paddingTop: "10px" }}>
                    <FontAwesomeIcon icon={faUser} />&nbsp;Leave Management
                </p>
            </div>

            <button style={{ marginTop: "4rem", marginLeft: "3.5rem" }} onClick={addLeave}>Add New Leave</button>
            <Addnewleave isOpen={isaddnewleaveopen} onCancel={handleCancel} />
            <RequestConfirmationModal isOpen={isDeleteModalOpen} onCancel={handleCancelDelete} onConfirm={()=>handleConfirmDelete(leavetype)} />
                     
            <table style={{borderCollapse:"collapse",marginTop:"4rem",overflow:"auto",marginLeft:"8rem"}}>
                     
                            
                        <tr>
                                          <th style={{width:"24rem",height:"3.5rem",fontSize:"1.5rem",backgroundColor:"#3B92B5",color:"white"}}>Leave Type</th>
                                <th style={{width:"24rem",height:"3.5rem",fontSize:"1.5rem",backgroundColor:"#3B92B5",color:"white"}}>Default Allowance</th>
                                <th style={{width:"24rem",height:"3.5rem",fontSize:"1.5rem",backgroundColor:"#3B92B5",color:"white"}}>Actions</th>
                                    </tr>
                                    {leavedetails()}
                                </table>

                               {c1%2!=0 && <div style={{width:"71.8rem",marginTop:"2rem",marginLeft:"8rem",height:"3.5rem",backgroundColor:"#3B92B5",color:"white",fontSize:"2rem",paddingLeft:"1rem"}} onClick={leavebut}>Leave Duration<FontAwesomeIcon icon={faCaretDown} style={{marginLeft:"53rem",fontSize:"3rem"}}></FontAwesomeIcon></div>}
                               {c1%2==0 && <div><div style={{width:"71.8rem",marginTop:"2rem",marginLeft:"8rem",height:"3.5rem",backgroundColor:"#3B92B5",color:"white",fontSize:"2rem",paddingLeft:"1rem"}} onClick={leavebut}>Leave Duration<FontAwesomeIcon icon={faCaretUp} style={{marginLeft:"53rem",fontSize:"3rem"}}></FontAwesomeIcon></div>
                               
                                <div style={{width:"72.1rem",height:"14rem",marginLeft:"8rem",border:"0.3rem solid #3B92B5"}}>
                                    <span style={{fontSize:"1.5rem",marginLeft:"20rem"}}>Start date:</span><input type="date" style={{width:"12rem"}}></input><br></br>
                                    <span style={{fontSize:"1.5rem",marginLeft:"20rem"}}>End date:</span><input type="date" style={{width:"12rem"}}></input><br></br>
                                    <button style={{width:"15rem",marginLeft:"20rem",marginTop:"1rem"}} onClick={leaverefresh}>Leave Refresh Allowance</button><br></br>
                                    </div></div>}
        </div>
    );
}

export default Adminleavemanagement;
