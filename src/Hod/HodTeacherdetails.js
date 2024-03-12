import React, { useState,useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUser ,faArrowRight, faCaretUp,faCaretDown, faUserCircle} from "@fortawesome/free-solid-svg-icons";
import { useSearchParams } from "react-router-dom";

function HodTeacherdetails(){
    const [data,setdata]=useState([]);
    const [data1,setdata1]=useState([]);
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
      useEffect(()=>{
        fetch("http://localhost:3300/hoddetailsprofile")
        .then(res => res.json())
        .then(data1 => setdata1(data1))
        .catch((err)=>{
            console.log(err);
      
        })
          
        },[]);
  
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
                item.department==data1[0].department  &&
                <tr key={index}>
                <td style={{width:"6rem",height:"3.5rem",borderBottom:"0.2rem solid #3B92B5",fontSize:"2.3rem",color:"#3B92B5",textAlign:"center"}}><FontAwesomeIcon icon={faUserCircle}></FontAwesomeIcon></td>
                <td style={{width:"18rem",height:"3.5rem",borderBottom:"0.2rem solid #3B92B5",fontSize:"1.5rem",color:"#3B92B5",textAlign:"center"}}>{item.teacherid}</td>
                <td style={{width:"18rem",height:"3.5rem",borderBottom:"0.2rem solid #3B92B5",fontSize:"1.5rem",color:"#3B92B5",textAlign:"center"}}>{item.teachermail}</td>
                <td style={{width:"18rem",height:"3.5rem",borderBottom:"0.2rem solid #3B92B5",fontSize:"1.5rem",color:"#3B92B5",textAlign:"center"}}>{item.username}</td>
                <td style={{width:"18rem",height:"3.5rem",borderBottom:"0.2rem solid #3B92B5",fontSize:"1.5rem",color:"#3B92B5",textAlign:"center"}}>{item.department}</td>
           </tr>
        
            ))
        }
        
        
return(
    <div style={{border:"0.7rem solid #3B92B5",width:"93.8rem",height:"42.5rem",overflow:"auto"}}>
    <div className="firstdiv" style={{width:"94rem",marginLeft:"-1rem"}}><p style={{fontSize:"2.7rem",color:"white",fontFamily:"-moz-initial",marginTop:"0px",paddingLeft:"2rem",display:"flex",paddingTop:"10px"}}><FontAwesomeIcon icon={faUser}/>&nbsp;Teacher Management
</p></div>

                    
                        <div style={{width:"80rem",overflow:"auto",height:"27rem",marginLeft:"8rem",border:"0.2rem solid #206885",marginTop:"5rem"}}>
                       
                            <table style={{borderCollapse:"collapse"}}>
                                <tr>
                                    <th style={{width:"3rem",height:"3.5rem",fontSize:"1.5rem",backgroundColor:"#3B92B5"}}></th>
                                <th style={{width:"18rem",height:"3.5rem",fontSize:"1.5rem",backgroundColor:"#3B92B5",color:"white"}}>Teacher Id</th>
                                <th style={{width:"20rem",height:"3.5rem",fontSize:"1.5rem",backgroundColor:"#3B92B5",color:"white"}}>Name</th>
                                <th style={{width:"20rem",height:"3.5rem",fontSize:"1.5rem",backgroundColor:"#3B92B5",color:"white"}}>Email Id</th>
                                <th style={{width:"20rem",height:"3.5rem",fontSize:"1.5rem",backgroundColor:"#3B92B5",color:"white"}}>Department</th>
                               </tr>
                                {data.length>0 && data1.length &&  teacherdetails()}
                            
                               </table>
                        </div>
</div>
)
}
export default HodTeacherdetails;