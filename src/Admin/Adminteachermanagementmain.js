import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faArrowRight, faCaretUp, faCaretDown, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from 'react-router-dom';

function DeleteConfirmationModal({ isOpen, onCancel, onConfirm }) {
  return (
    <div style={{ display: isOpen ? "block" : "none", position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)", border:"0.3rem solid #206885",padding: "20px", background: "white", zIndex: 1000 }}>
      <p>Are you sure you want to delete this teacher?</p>
      <button onClick={onCancel}>Cancel</button>
      <button onClick={onConfirm}>Confirm</button>
    </div>
  );
}

function Adminteachermanagementmain() {
  const [flag0, setFlag0] = useState(0);
  const [flag1, setFlag1] = useState(false);
  const [textInput, setTextInput] = useState({ username: "", teacherid: "", department: "" });
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTextInput({ ...textInput, [name]: value });
  };

  const handleDiv = () => {
    setFlag0(flag0 + 1);
  };

  const add = () => {
    navigate('/adminteachermanagement');
  };

  const manage = () => {
    navigate('/adminteachermanage');
  };

  const handleDelete = () => {
    setDeleteModalOpen(true);
  };

  const handleCancelDelete = () => {
    setDeleteModalOpen(false);
  };

  const handleConfirmDelete = async () => {
    try {
      const response = await fetch('http://localhost:3300/delete', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ teacherid: textInput.teacherid }),
      });

      const data = await response.json();

      if (response.ok) {
        setFlag1(true);
        console.log(data.message);
      } else {
        console.error(data.error || 'Error deleting user');
      }
    } catch (error) {
      console.error('Error:', error.message);
    } finally {
      setDeleteModalOpen(false);
    }
  };

  return (
    <div style={{ border: "0.7rem solid #3B92B5", width: "93.8rem", height: "42rem", overflow: "auto" }}>
      {/* ... other components ... */}
      <div className="firstdiv" style={{width:"95.5rem",marginLeft:"-1rem"}}><p style={{fontSize:"2.7rem",color:"white",fontFamily:"-moz-initial",marginTop:"0px",paddingLeft:"2rem",display:"flex",paddingTop:"10px"}}><FontAwesomeIcon icon={faUser}/>&nbsp;Teacher Management
   </p></div>
   <div style={{width:"76rem",height:"4rem",backgroundColor:"#3B92B5",fontSize:"1.8rem",color:"white",marginTop:"5rem",marginLeft:"5.7rem"}}>
    <span style={{marginLeft:"2.5rem",marginTop:"2rem"}} onClick={add}>Add Teacher<FontAwesomeIcon icon={faArrowRight} onClick={add} style={{marginLeft:"58rem",marginTop:"0.5rem",fontSize:"2.5rem"}}></FontAwesomeIcon></span>
   </div>
   <div style={{width:"76rem",height:"4rem",backgroundColor:"#3B92B5",fontSize:"1.8rem",color:"white",marginTop:"2rem",marginLeft:"5.7rem"}}>
    <span style={{marginLeft:"2.5rem",marginTop:"2rem"}} onClick={manage}> Manage Teacher<FontAwesomeIcon icon={faArrowRight} onClick={manage} style={{marginLeft:"55rem",fontSize:"2.5rem",marginTop:"0.5rem"}}></FontAwesomeIcon></span>
   </div>
      <DeleteConfirmationModal isOpen={isDeleteModalOpen} onCancel={handleCancelDelete} onConfirm={handleConfirmDelete} />

      {flag0 % 2 === 0 ? (
        <div onClick={handleDiv} style={{ width: "76rem", height: "4rem", backgroundColor: "#3B92B5", fontSize: "1.8rem", color: "white", marginTop: "2rem", marginLeft: "5.7rem" }}>
          <span style={{ marginLeft: "2.5rem", marginTop: "2rem" }}>Delete Teacher <FontAwesomeIcon icon={faCaretUp} style={{ marginLeft: "56rem", fontSize: "3.1rem", marginTop: "0.2rem" }}></FontAwesomeIcon></span>
        </div>
      ) : (
        <div onClick={handleDiv} style={{ width: "76rem", height: "4rem", backgroundColor: "#3B92B5", fontSize: "1.8rem", color: "white", marginTop: "2rem", marginLeft: "5.7rem" }}>
          <span style={{ marginLeft: "2.5rem", marginTop: "2rem" }}>Delete Teacher <FontAwesomeIcon icon={faCaretDown} style={{ marginLeft: "56rem", fontSize: "3.1rem", marginTop: "0.2rem" }}></FontAwesomeIcon></span>
        </div>
      )}

      {flag0 % 2 !== 0 && (
        <div style={{ width: "76rem", height: "21rem", border: "0.2rem solid #206885", marginLeft: "5.7rem" }}>
          {flag1 && <h2 style={{ marginLeft: "27rem", color: "green" }}>Data Deleted Successfully..</h2>}
          <span style={{fontSize:"25px",marginLeft:"4rem",color:"#3B92B5",display:"flex",marginTop:"1rem"}}>Name
 <input value={textInput.username} name="username" onChange={handleInputChange} type="text" className="edittext1"  style={{border:"1px solid #3B92B5",marginLeft:"25rem",height:"45px",width:"300px"}}/></span>
 <span style={{fontSize:"25px",marginLeft:"4rem",color:"#3B92B5",display:"flex",marginTop:"1rem"}}>Teacher Id
 <input  value={textInput.teacherid} name="teacherid" onChange={handleInputChange} type="text" className="edittext1"  style={{border:"1px solid #3B92B5",marginLeft:"22rem",height:"45px",width:"300px"}}/></span>
 <span style={{fontSize:"25px",marginLeft:"4rem",color:"#3B92B5",display:"flex",marginTop:"1rem"}}>Department
 <input  value={textInput.department} name="department" onChange={handleInputChange} type="text" className="edittext1"   style={{border:"1px solid #3B92B5",marginLeft:"21rem",height:"45px",width:"300px"}}/></span>
          <button style={{ marginLeft: "29rem", marginTop: "1rem" }} onClick={handleDelete}>
            Delete&nbsp;&nbsp;&nbsp;<FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
          </button>
        </div>
      )}
    </div>
  );
}

export default Adminteachermanagementmain;
