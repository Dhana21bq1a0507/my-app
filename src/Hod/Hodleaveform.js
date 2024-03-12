import React,{useState,useEffect} from "react";
import HodDash from "../Components/HodDash";
import { useLocation } from 'react-router-dom';

function Hodleaveform(){
    const [data,setdata]=useState([])
    const [data1,setdata1]=useState({})
    const [flag,setflag]=useState(false)
    const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
    const location = useLocation();
    const teachermail = location.state && location.state.mail ;
    const date = location.state && location.state.datereal;
    useEffect(() => {
        fetch("http://localhost:3300/leavedetails")
          .then(res => res.json())
          .then(data1 => {
            setdata(data1);
            
            // Call the result method here
            data1.map((item, index) => {
              if (item.teachermail === teachermail && item.date === date) {
                setdata1(item);
              }
            });
          })
          .catch((err) => {
            console.log(err);
          });
      }, []); 
      const viewbutton=()=>{
        setDeleteModalOpen(true)
      }
      const handleCancelDelete=()=>{
          setDeleteModalOpen(false)
      }
return(
 <div style={{display:"flex"}}>
  
    <div className="secdiv" style={{width:"57rem",marginLeft:"20rem"}}>
        
    <div className="thirddiv">Application for Leave(STAFF)<br/>[VVIT/ACD/16]</div>
   
    <form ><table  cellSpacing={0} className="tsy"><br></br><br></br>
    <span style={{fontSize:"25px",fontWeight:"bold",marginLeft:"35px",color:"#3B92B5"}}>Today Date</span>
   
    <label style={{fontSize:"1.5rem",marginLeft:"26.5rem"}}>:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{data1.date}</label>
<br></br><br></br>
    <span style={{fontSize:"25px",fontWeight:"bold",marginLeft:"40px",color:"#3B92B5"}}>Teacher Id</span>
    <label style={{fontSize:"1.5rem",marginLeft:"27rem"}}>:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{data1.teacherid}</label>
<br></br><br></br>
<span style={{fontSize:"25px",marginLeft:"40px",fontWeight:"bold",color:"#3B92B5"}}>Teacher Name</span>
<label style={{fontSize:"1.5rem",marginLeft:"24rem"}}>:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{data1.teachername}</label>
<br></br><br></br>
<span style={{fontSize:"25px",marginLeft:"40px",color:"#3B92B5",fontWeight:"bold"}}>Teacher Mail</span>
<label style={{fontSize:"1.5rem",marginLeft:"25rem"}}>:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{data1.teachermail}</label>
<br></br><br></br>
<span style={{fontSize:"25px",marginLeft:"40px",color:"#3B92B5",fontWeight:"bold"}}>Designature</span>
<label style={{fontSize:"1.5rem",marginLeft:"25.5rem"}}>:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{data1.Designature}</label>
<br></br><br></br>
<span style={{fontSize:"25px",marginLeft:"40px",color:"#3B92B5",fontWeight:"bold"}}>Branch</span>
<label style={{fontSize:"1.5rem",marginLeft:"29.5rem"}}>:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{data1.Branch}</label>
<br></br><br></br>
<span style={{fontSize:"25px",marginLeft:"40px",color:"#3B92B5",fontWeight:"bold"}}>Leave Type</span>
<label style={{fontSize:"1.5rem",marginLeft:"26.5rem"}}>:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{data1.leavetype}</label>
<br></br><br></br>
<span style={{fontSize:"25px",marginLeft:"40px",color:"#3B92B5",fontWeight:"bold"}}>Leave Availed Till Date (In this Academic Year)</span>
<label style={{fontSize:"1.5rem",marginLeft:"1rem"}}>:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{data1.LeaveAvailedTillDate}</label>

<br></br><br></br>

<span style={{fontSize:"25px",marginLeft:"40px",color:"#3B92B5",fontWeight:"bold"}}>Reason for Leave</span>
<label style={{fontSize:"1.5rem",marginLeft:"23rem"}}>:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{data1.ReasonforLeave}</label>

<br></br><br></br>
        <tr><td  className="leavehed" style={{fontWeight:"bold"}}>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Alternative Arrangement made for Classes/Duties </td>
        </tr>
        <tr>
            <td>
                  
                <table border={1} cellSpacing={1} cellPadding={10}  style={{marginTop:"3rem"}} className="tablestyle">
                   <tr style={{fontSize:"1.3rem"}}>
                    <th style={{width:"13rem",height:"2rem"}}>
                        Date of Assignment
                    </th>
                    <th style={{width:"8rem",height:"2rem"}}>
                        Class
                    </th>
                    <th style={{width:"10rem",height:"2rem"}}> 
                        Time
                    </th> <th style={{width:"17rem",height:"2rem"}}>
                        Name of Alternative staff/Faculty
                    </th>
                    
                   </tr>
                   <tr style={{fontSize:"1.3rem"}}>
                    <td >{data1.date1}</td>
                    <td >{data1.class1}</td>
                    <td >{data1.time1}</td>
                    <td >{data1.nameofalternative1}</td>
                   </tr>
                   <tr style={{fontSize:"1.3rem"}}>
                   <td >{data1.date2}</td>
                    <td >{data1.class2}</td>
                    <td >{data1.time2}</td>
                    <td >{data1.nameofalternative2}</td>
                     </tr>
                  
                   { data1.date3!="" && ( <tr style={{fontSize:"1.3rem"}}><td ></td>
                   <td ></td>
                   <td ></td>
                   <td ></td></tr>)}
                   { data1.date4!="" && ( <tr style={{fontSize:"1.3rem"}}><td ></td>
                   <td ></td>
                   <td ></td>
                   <td ></td></tr>)}
                   { data1.date5!="" && ( <tr style={{fontSize:"1.3rem"}}><td ></td>
                   <td ></td>
                   <td ></td>
                   <td ></td></tr>)}
                  
                </table>
            </td>
        </tr>
       
        </table>
    
</form>
   
    
   </div>
   <button style={{width:"6rem",marginTop:"4rem"}} onClick={viewbutton}>View</button>
   </div>
 
)
}
export default Hodleaveform