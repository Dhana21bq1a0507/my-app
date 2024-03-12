import React, { useState,useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUser ,faArrowRight, faCaretUp,faCaretDown, faUserCircle} from "@fortawesome/free-solid-svg-icons";
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
      <div style={{ display: isOpen ? "block" : "none", position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)", padding: "20px",border:"0.3rem solid #206885", background: "white", zIndex: 1000 }}>
        <p>Are you sure you want to delete this teacher?</p>
        <button onClick={onCancel}>Cancel</button>
        <button onClick={onConfirm}>Confirm</button>
      </div>
    );
  }
function AdminTeachermanage(){

    const [data,setdata]=useState([]);
    const [deleteid,setdeleteid]=useState('');
    const [opt,setopt]=useState('')
    const handleChange=(event)=>{
        setopt(event.target.value);
    }
   
      const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
      const handleDelete = (id) => {
        setdeleteid(id)
        setDeleteModalOpen(true);
        
      };
    const notify = (message) => {
        toast.success(message, {
          position: "top-right",
          theme:"colored",
          autoClose: 10000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      
      };
      
      const handleCancelDelete = () => {
        setDeleteModalOpen(false);
      };
    const handleConfirmDelete = async (id) => {
        try {
          const response = await fetch('http://localhost:3300/delete', {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ teacherid: id }),
          });
    
          const data = await response.json();
    
          if (response.ok) {
          
            console.log(data.message);
           window.location.reload();
            notify('TeacherDetails Deleted Successfully!')
           
            
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
        fetch("http://localhost:3300/teacherdetails")
        .then(res => res.json())
        .then(data1 => setdata(data1))
        .catch((err)=>{
            console.log(err);
      
        })
          
        },[]);
        const teacherdetails=()=>{
            return  data.map((item,index)=>(
              
                <tr key={index}>
                <td style={{width:"6rem",height:"3.5rem",borderBottom:"0.2rem solid #3B92B5",fontSize:"2.3rem",color:"#3B92B5",textAlign:"center"}}><FontAwesomeIcon icon={faUserCircle}></FontAwesomeIcon></td>
                <td style={{width:"18rem",height:"3.5rem",borderBottom:"0.2rem solid #3B92B5",fontSize:"1.5rem",color:"#3B92B5",textAlign:"center"}}>{item.teacherid}</td>
                <td style={{width:"18rem",height:"3.5rem",borderBottom:"0.2rem solid #3B92B5",fontSize:"1.5rem",color:"#3B92B5",textAlign:"center"}}>{item.username}</td>
               
                <td style={{width:"18rem",height:"3.5rem",borderBottom:"0.2rem solid #3B92B5",fontSize:"1.5rem",color:"#3B92B5",textAlign:"center"}}>{item.teachermail}</td>
                <td style={{width:"18rem",height:"3.5rem",borderBottom:"0.2rem solid #3B92B5",fontSize:"1.5rem",color:"#3B92B5",textAlign:"center"}}>{item.department}</td>
                <td style={{width:"15rem",height:"3.5rem",borderBottom:"0.2rem solid #3B92B5",fontSize:"1.5rem",color:"#3B92B5",textAlign:"center",textDecoration:"underline",cursor:"pointer"}}><span>Edit|</span><span onClick={()=>handleDelete(item.teacherid)}>Delete</span></td>
            </tr>
        
            ))
        }
        const csedetails=()=>{
            return  data.map((item,index)=>(
                (item.department=="CSE" || item.department=="Computer Science and Engineering" )&&
                <tr key={index}>
                <td style={{width:"6rem",height:"3.5rem",borderBottom:"0.2rem solid #3B92B5",fontSize:"2.3rem",color:"#3B92B5",textAlign:"center"}}><FontAwesomeIcon icon={faUserCircle}></FontAwesomeIcon></td>
                <td style={{width:"18rem",height:"3.5rem",borderBottom:"0.2rem solid #3B92B5",fontSize:"1.5rem",color:"#3B92B5",textAlign:"center"}}>{item.teacherid}</td>
                <td style={{width:"18rem",height:"3.5rem",borderBottom:"0.2rem solid #3B92B5",fontSize:"1.5rem",color:"#3B92B5",textAlign:"center"}}>{item.teachermail}</td>
               
                <td style={{width:"18rem",height:"3.5rem",borderBottom:"0.2rem solid #3B92B5",fontSize:"1.5rem",color:"#3B92B5",textAlign:"center"}}>{item.username}</td>
                <td style={{width:"18rem",height:"3.5rem",borderBottom:"0.2rem solid #3B92B5",fontSize:"1.5rem",color:"#3B92B5",textAlign:"center"}}>{item.department}</td>
                <td style={{width:"15rem",height:"3.5rem",borderBottom:"0.2rem solid #3B92B5",fontSize:"1.5rem",color:"#3B92B5",textAlign:"center",textDecoration:"underline",cursor:"pointer"}}><span>Edit|</span><span onClick={()=>handleDelete(item.teacherid)}>Delete</span></td>
            </tr>
        
            ))
        }
        const ecedetails=()=>{
            return  data.map((item,index)=>(
                item.department=="ECE"  &&
                <tr key={index}>
                <td style={{width:"6rem",height:"3.5rem",borderBottom:"0.2rem solid #3B92B5",fontSize:"2.3rem",color:"#3B92B5",textAlign:"center"}}><FontAwesomeIcon icon={faUserCircle}></FontAwesomeIcon></td>
                <td style={{width:"18rem",height:"3.5rem",borderBottom:"0.2rem solid #3B92B5",fontSize:"1.5rem",color:"#3B92B5",textAlign:"center"}}>{item.teacherid}</td>
                <td style={{width:"18rem",height:"3.5rem",borderBottom:"0.2rem solid #3B92B5",fontSize:"1.5rem",color:"#3B92B5",textAlign:"center"}}>{item.teachermail}</td>
                <td style={{width:"18rem",height:"3.5rem",borderBottom:"0.2rem solid #3B92B5",fontSize:"1.5rem",color:"#3B92B5",textAlign:"center"}}>{item.username}</td>
                <td style={{width:"18rem",height:"3.5rem",borderBottom:"0.2rem solid #3B92B5",fontSize:"1.5rem",color:"#3B92B5",textAlign:"center"}}>{item.department}</td>
                <td style={{width:"15rem",height:"3.5rem",borderBottom:"0.2rem solid #3B92B5",fontSize:"1.5rem",color:"#3B92B5",textAlign:"center",textDecoration:"underline",cursor:"pointer"}}><span>Edit|</span><span onClick={()=>handleDelete(item.teacherid)}>Delete</span></td>
            </tr>
        
            ))
        }
        const eeedetails=()=>{
            return  data.map((item,index)=>(
                item.department=="EEE"  &&
                <tr key={index}>
                <td style={{width:"6rem",height:"3.5rem",borderBottom:"0.2rem solid #3B92B5",fontSize:"2.3rem",color:"#3B92B5",textAlign:"center"}}><FontAwesomeIcon icon={faUserCircle}></FontAwesomeIcon></td>
                <td style={{width:"18rem",height:"3.5rem",borderBottom:"0.2rem solid #3B92B5",fontSize:"1.5rem",color:"#3B92B5",textAlign:"center"}}>{item.teacherid}</td>
                <td style={{width:"18rem",height:"3.5rem",borderBottom:"0.2rem solid #3B92B5",fontSize:"1.5rem",color:"#3B92B5",textAlign:"center"}}>{item.teachermail}</td>
                <td style={{width:"18rem",height:"3.5rem",borderBottom:"0.2rem solid #3B92B5",fontSize:"1.5rem",color:"#3B92B5",textAlign:"center"}}>{item.username}</td>
                <td style={{width:"18rem",height:"3.5rem",borderBottom:"0.2rem solid #3B92B5",fontSize:"1.5rem",color:"#3B92B5",textAlign:"center"}}>{item.department}</td>
                <td style={{width:"15rem",height:"3.5rem",borderBottom:"0.2rem solid #3B92B5",fontSize:"1.5rem",color:"#3B92B5",textAlign:"center",textDecoration:"underline",cursor:"pointer"}}><span>Edit|</span><span onClick={()=>handleDelete(item.teacherid)}>Delete</span></td>
            </tr>
        
            ))
        }
return(
    <div style={{border:"0.7rem solid #3B92B5",width:"93.8rem",height:"42rem",overflow:"auto"}}>
       <ToastContainer />
    <div className="firstdiv" style={{width:"95.5rem",marginLeft:"-1rem"}}><p style={{fontSize:"2.7rem",color:"white",fontFamily:"-moz-initial",marginTop:"0px",paddingLeft:"2rem",display:"flex",paddingTop:"10px"}}><FontAwesomeIcon icon={faUser}/>&nbsp;Teacher Management
</p></div>
<select onChange={handleChange} id="role" style={{width:"15rem",marginLeft:"10rem",marginTop:"3rem",height:"3.5rem"}}>
                            <option   defaultValue={true}>Select Department</option>
                            <option>CSE</option>
                            <option>EEE</option>
                            <option>ECE</option>
                            <option>MECH</option>
                        </select>
                    
                        <div style={{width:"80rem",overflow:"auto",height:"27rem",marginLeft:"8rem",border:"0.2rem solid #206885",marginTop:"1rem"}}>
                        <DeleteConfirmationModal isOpen={isDeleteModalOpen} onCancel={handleCancelDelete} onConfirm={()=>handleConfirmDelete(deleteid)} />

                            <table style={{borderCollapse:"collapse"}}>
                                <tr>
                                    <th style={{width:"3rem",height:"3.5rem",fontSize:"1.5rem",backgroundColor:"#3B92B5"}}></th>
                                <th style={{width:"18rem",height:"3.5rem",fontSize:"1.5rem",backgroundColor:"#3B92B5",color:"white"}}>Teacher Id</th>
                                <th style={{width:"20rem",height:"3.5rem",fontSize:"1.5rem",backgroundColor:"#3B92B5",color:"white"}}>Name</th>
                                <th style={{width:"20rem",height:"3.5rem",fontSize:"1.5rem",backgroundColor:"#3B92B5",color:"white"}}>Email Id</th>
                                <th style={{width:"20rem",height:"3.5rem",fontSize:"1.5rem",backgroundColor:"#3B92B5",color:"white"}}>Department</th>
                                <th style={{width:"15rem",height:"3.5rem",fontSize:"1.5rem",backgroundColor:"#3B92B5",color:"white"}}>Actions</th>
                                </tr>
                                {(opt=="Select Department" || opt=="" )&&  teacherdetails()}
                                {opt=="CSE" && csedetails()}
                                {opt=="ECE" && ecedetails()}
                                {opt=="EEE" && eeedetails()}
                               </table>
                        </div>
</div>
)
}
export default AdminTeachermanage;