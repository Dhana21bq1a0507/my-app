import React, { useState,useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUser ,faArrowRight, faCaretUp,faCaretDown, faBuilding, faBuildingCircleArrowRight, faBuildingFlag, faPlus, faClock, faArrowRotateBack, faCheck, faTicket, faTimes} from "@fortawesome/free-solid-svg-icons";
import { useSearchParams } from "react-router-dom";
import { createGlobalStyle, ThemeProvider } from "styled-components";

import { Theme } from 'react-toastify';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const GlobalStyle = createGlobalStyle`
  // Your global styles go here
`;
function DeleteConfirmationModal({ isOpen, onCancel, onConfirm }) {
  return (
    <div style={{ display: isOpen ? "block" : "none", position: "fixed", top: "53%", left: "50%", transform: "translate(-50%, -50%)", padding: "20px",border:"0.3rem solid #206885", background: "white", zIndex: 1000 }}>
      <p style={{fontSize:"1.3rem"}}>Are you sure you want to delete this Department?</p>
      <button onClick={onCancel}>Cancel</button>
      <button onClick={onConfirm}>Confirm</button>
    </div>
  );
}
  function Addnewleave({ isOpen, onCancel}) {
    const [textInput, setTextInput] = useState({username:"",department:"",teacherid:"",contact:"",address:""});
const [flag0,setflag0]=useState(false);

    const handleLeavetypeChange = (e) => {
        const { name, value } = e.target;
        setTextInput({ ...textInput, [name]: value });
    };
    const handleCancel = () => {
        setTextInput({username:"",department:"",teacherid:"",contact:"",address:""});
        setflag0(false)
        onCancel(); // Call the onCancel prop if needed
    };
    const notify = (message) => {
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
    if(textInput.username=="" && textInput.department=="" && textInput.teacherid=="" && textInput.contact==="" && textInput.address==""){
notify('Please Enter All Details')
    }else{
        try{
         
            const response=await fetch('http://localhost:3300/addhoddetails',{
                method:'POST',headers:{
                    'Content-Type':'application/json',
                },
               
                body:JSON.stringify(textInput),
            });
            console.log()
            const result=await response.json();
            setflag0(true)
            window.location.reload();
             }
        catch(error){
            console.log('Error sending data to Express',error)
        }
      }
      
      };
     
    return (
        <div style={{ display: isOpen ? "block" : "none", position: "fixed", top: "43%", left: "50%", transform: "translate(-50%, -50%)", padding: "2rem", paddingTop:"1rem",border: "0.3rem solid #206885", background: "white", zIndex: 1000 }}>
         <span style={{fontSize:"1.5rem",color:"#3B92B5",marginLeft:"25rem"}} onClick={handleCancel}>  <FontAwesomeIcon icon={faTimes}></FontAwesomeIcon></span>
           <ToastContainer/>
            {flag0 && <h3 style={{color:"green",marginLeft:"6rem",marginTop:"-2rem"}}>Data Insert successfully</h3>}
           <table>
            <tr>
              <th style={{ color: "#3B92B5", fontSize: "1.3rem" }}>Department</th>
              <th><input type="text"  required name="department" value={textInput.department} onChange={handleLeavetypeChange}  style={{ marginTop: "1rem", border: "0.1rem solid #3B92B5", width: "17rem", height: "3.4rem" }}></input></th>
            </tr>
            <tr>
              <th style={{ color: "#3B92B5", fontSize: "1.3rem" }}>HOD Name</th>
              <th><input type="text" name="username" value={textInput.username} onChange={handleLeavetypeChange}  style={{ marginTop: "1rem", border: "0.1rem solid #3B92B5", width: "17rem", height: "3.4rem" }}></input></th>
          
             </tr>
             <tr>
              <th style={{ color: "#3B92B5", fontSize: "1.3rem" }}>HOD ID</th>
              <th><input type="text" name="teacherid" value={textInput.teacherid} onChange={handleLeavetypeChange}  style={{ marginTop: "1rem", border: "0.1rem solid #3B92B5", width: "17rem", height: "3.4rem" }}></input></th>
          
             </tr>
             <tr>
              <th style={{ color: "#3B92B5", fontSize: "1.3rem" }}>Contact</th>
              <th><input type="text" name="contact" value={textInput.contact} onChange={handleLeavetypeChange}  style={{ marginTop: "1rem", border: "0.1rem solid #3B92B5", width: "17rem", height: "3.4rem" }}></input></th>
          
             </tr>
             <tr>
              <th style={{ color: "#3B92B5", fontSize: "1.3rem" }}>Address</th>
              <th><input type="text" name="address" value={textInput.address} onChange={handleLeavetypeChange}  style={{ marginTop: "1rem", border: "0.1rem solid #3B92B5", width: "17rem", height: "3.4rem" }}></input></th>
          
             </tr>
           </table>
            <button type="submit" style={{ marginTop: "1.5rem", width: "7rem", marginLeft: "6rem" }} method="post" onClick={savebut}>Save</button>
            <button style={{ width: "7rem", marginLeft: "3rem" }} onClick={handleCancel}>Cancel</button>
        </div>
      
    );
}
function AdminDepartment(){
const [details,setdetails]=useState(["CSE","EEE","ECE"])
const [isaddnewleaveopen, setAddnewleaveopen] = useState(false);

    const [data,setdata]=useState([]);
    const [deleteid,setdeleteid]=useState('');
    const [deletedepart,setdeletedepart]=useState('');
    const [opt,setopt]=useState('')
    const handleChange=(event)=>{
        setopt(event.target.value);
    }
   
      const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
      const handleDelete = (teacherid,depart) => {
        setdeleteid(teacherid)
        setdeletedepart(depart)
        setDeleteModalOpen(true);
        
      };
  
      
      const handleCancelDelete = () => {
        setDeleteModalOpen(false);
      };
    const handleConfirmDelete = async (id,depart) => {
        try {
          const response = await fetch('http://localhost:3300/hoddelete', {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ teacherid: id,department:depart }),
          });
    
          const data = await response.json();
    
          if (response.ok) {
          
           
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
    useEffect(()=>{
        fetch("http://localhost:3300/allhoddetails")
        .then(res => res.json())
        .then(data1 => setdata(data1))
        .catch((err)=>{
            console.log(err);
      
        })
          
        },[]);
 
        const sendDataToExpress = async (depart) => {
          try {
            const response = await fetch('http://localhost:3300/finddepartment', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ department: depart }),
            });
        
            const result = await response.json();
       
            if (Array.isArray(result)) {
              // Assuming result is an array
              return result.length;
            } else {
              // Handle other result types accordingly
              console.error('Unexpected result format:', result);
              return 0; // Return a default value or handle accordingly
            }
          } catch (error) {
            console.log('Error sending data to Express', error);
            return 0; // Return a default value or handle accordingly
          }
        };
        
       useEffect(() => {
          const fetchData = async () => {
            const results = await Promise.all(
              data.map(async (item) => {
                const result = await sendDataToExpress(item.department);
                return result;
              })
            );
            setDepartmentDetails(results);
          };
      
          fetchData();
        }, [data]);
      
        const [departmentDetails, setDepartmentDetails] = useState([]);
      
        const departmentdetails = () => {
          return data.map((item, index) => (
            <tr key={index}>
              
                       <td style={{ width: "15rem",borderLeft:"0.2rem solid #3B92B5", height: "3.5rem", fontSize: "1.5rem", color: "#3B92B5",textAlign:"center" ,borderBottom:"0.2rem solid #3B92B5"}}>{item.department}</td>
              <td style={{ width: "14rem", height: "3.5rem", fontSize: "1.5rem", color: "#3B92B5" ,textAlign:"center",borderBottom:"0.2rem solid #3B92B5"}}>{item.teacherid}</td>
              <td style={{ width: "14rem", height: "3.5rem", fontSize: "1.5rem", color: "#3B92B5",textAlign:"center" ,borderBottom:"0.2rem solid #3B92B5"}}>{item.username}</td>
              <td style={{ width: "14rem", height: "3.5rem", fontSize: "1.5rem", color: "#3B92B5",textAlign:"center",borderBottom:"0.2rem solid #3B92B5" }}>{departmentDetails[index]}</td>
              <td style={{ width: "14rem", height: "3.5rem", fontSize: "1.5rem", borderRight:"0.2rem solid #3B92B5",color: "#3B92B5" ,textAlign:"center",borderBottom:"0.2rem solid #3B92B5",textDecoration:"underline"}}><span>Edit|</span><span onClick={()=>handleDelete(item.teacherid,item.department)}>Delete</span></td>
            </tr>
          ));
        };
     
    
        
      
       const handleCancel = () => {
        setAddnewleaveopen(false);
    };
    const addLeave = () => {
      setAddnewleaveopen(true);
  };
       
return(
    <div style={{border:"0.7rem solid #3B92B5",width:"93.8rem",height:"42rem",overflow:"auto"}}>
       <ToastContainer />
    <div className="firstdiv" style={{width:"95.5rem",marginLeft:"-1rem"}}><p style={{fontSize:"2.7rem",color:"white",fontFamily:"-moz-initial",marginTop:"0px",paddingLeft:"2rem",display:"flex",paddingTop:"10px"}}><FontAwesomeIcon icon={faBuilding}/>&nbsp;Department Management
</p></div>
<button style={{marginTop:"2rem",marginLeft:"9rem",width:"7rem",fontSize:"1.4rem"}} onClick={addLeave}>ADD &nbsp;<FontAwesomeIcon icon={faPlus}></FontAwesomeIcon></button><br></br>

                         <Addnewleave isOpen={isaddnewleaveopen} onCancel={handleCancel} />
                         <DeleteConfirmationModal isOpen={isDeleteModalOpen} onCancel={handleCancelDelete} onConfirm={()=>handleConfirmDelete(deleteid,deletedepart)} />

                          <table style={{borderCollapse:"collapse",overflow:"auto",marginTop:"2rem",marginLeft:"10rem"}}>
                     
                            
                                        <tr>
                                             <th style={{width:"10rem",height:"3.5rem",fontSize:"1.5rem",backgroundColor:"#3B92B5",color:"white"}}>Department Name</th>
                             <th style={{width:"14rem",height:"3.5rem",fontSize:"1.5rem",backgroundColor:"#3B92B5",color:"white"}}>HOD Id</th>
                             <th style={{width:"14rem",height:"3.5rem",fontSize:"1.5rem",backgroundColor:"#3B92B5",color:"white"}}>Department Head </th>
                             <th style={{width:"14rem",height:"3.5rem",fontSize:"1.5rem",backgroundColor:"#3B92B5",color:"white"}}>Number Of Teachers</th>
                             <th style={{width:"14rem",height:"3.5rem",fontSize:"1.5rem",backgroundColor:"#3B92B5",color:"white"}}>Actions</th>
                             
                                 </tr>
                                 {data.length>0 && departmentdetails()}
                               
                             </table>

                          
                       
</div>
)
}
export default AdminDepartment;