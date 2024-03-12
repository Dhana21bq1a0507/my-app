import React,{useState,useEffect} from "react";
import HodDash from "../Components/HodDash";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom'; 
import {faUser,faIdCard,faEnvelope,faBuilding,faAddressCard,faPhone, faCamera,faPencil,faLock} from  "@fortawesome/free-solid-svg-icons"

function Hodprofile(){
    const navigate = useNavigate();
    const [data,setdata]=useState([]);
    const Editdetails=()=>{
        navigate('/hodeditdetails');
    }
    const changepassword=()=>{
        navigate('/hodchangepassword');
    }
    useEffect(()=>{
        fetch("http://localhost:3300/hoddetailsprofile")
        .then(res => res.json())
        .then(data1 => setdata(data1))
        .catch((err)=>{
            console.log(err);
      
        })
          
        },[]);
return(
    <div>
        <HodDash>
        <div className="containter">
           
        <div className="div1" style={{width:"75rem"}}> 
        <h2  style={{color:"white",marginTop:"5px",paddingTop:"10px",fontSize:"30px",paddingTop:"7px",paddingLeft:"20px"}} >Profile Management</h2>
       <div className="prof"><span style={{color:"#0A4C66",fontSize:"40px",marginLeft:"100px"}}><FontAwesomeIcon icon={faCamera}/></span></div>
        </div>
        <div>
            <table className="userdetails">
                <tr className="ud" >
                    <td width={"60px"} height={"50px"}><span style={{color:"#0A4C66",fontSize:"35px"}}><FontAwesomeIcon icon={faUser}/></span></td><td  width={"200px"} height={"50px"} style={{color:"#3B92B5",fontWeight: "500"}}>Username</td><td width={"20px"}>:</td><td>{data.length>0 && data[0].username}</td>
                </tr>
                <tr className="ud" >
                    <td height={"50px"}><span style={{color:"#0A4C66",fontSize:"35px"}} ><FontAwesomeIcon icon={faIdCard}/></span></td><td style={{color:"#3B92B5",fontWeight: "500"}}>TeacherId</td><td>:</td><td>{data.length>0 && data[0].teacherid}</td>
                </tr>
                <tr className="ud" >
                    <td height={"50px"}><span style={{color:"#0A4C66",fontSize:"35px"}}><FontAwesomeIcon icon={faEnvelope}/></span></td><td style={{color:"#3B92B5",fontWeight: "500"}}>TeacherEmail</td><td>:</td><td>{data.length>0 && data[0].teachermail}</td>
                </tr>
                <tr className="ud" >
                    <td height={"50px"}><span style={{color:"#0A4C66",fontSize:"35px"}}><FontAwesomeIcon icon={faBuilding}/></span></td><td style={{color:"#3B92B5",fontWeight: "500"}}>Department</td><td>:</td><td>{data.length>0 && data[0].department}</td>
                </tr>
                <tr className="ud" >
                    <td height={"50px"}><span style={{color:"#0A4C66",fontSize:"35px"}}><FontAwesomeIcon icon={faAddressCard}/></span></td><td style={{color:"#3B92B5",fontWeight: "500"}}>Address</td><td>:</td><td> {data.length>0 && data[0].address}</td>
                </tr>
                <tr className="ud" >
                    <td height={"50px"}><span style={{color:"#0A4C66",fontSize:"35px"}}><FontAwesomeIcon icon={faPhone}/></span></td><td style={{color:"#3B92B5",fontWeight: "500"}}>Contact</td><td>:</td><td>{data.length>0 && data[0].contact}</td>
                </tr>
               <tr>
                <td height={"80px"}></td><td><button onClick={Editdetails} type="button" style={{width:'170px'}} ><span ><FontAwesomeIcon icon={faPencil}/></span>Edit Details</button></td><tr></tr><td><button type="button" onClick={changepassword} style={{width:'250px'}}><span style={{color:"white",paddingTop:"34px",paddingRight:"12px"}}><FontAwesomeIcon icon={faLock}/></span>Change Password</button></td>
               </tr>
            </table>
        </div>
       
        </div>
        </HodDash>
       
    </div>
)
}
export default Hodprofile;