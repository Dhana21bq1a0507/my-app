import React,{useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPrint,faUpload,faFileDownload,faFile,faBell,faUser} from "@fortawesome/free-solid-svg-icons";
import './leave.css'
import './Dash.css'
function Leaveform(){
    const [textInput,settextInput]=useState({teacherid:''})
    return(
       <div className="maindiv">
    <div className="firstdiv"><p style={{fontSize:"45px",color:"white",fontFamily:"-moz-initial",marginTop:"0px",marginLeft:"10px",display:"flex",paddingTop:"10px"}}><FontAwesomeIcon icon={faFile}/>&nbsp;Leave Request Form<div style={{marginLeft:"900px",}}>&nbsp;&nbsp;&nbsp;&nbsp;<FontAwesomeIcon icon={faUser}/></div></p></div>
        <h1 style={{color:"#3B92B5",marginLeft:"10px"}}>&nbsp;Welcome to the Leave Request Form,</h1>
<h2 style={{color:"#3B92B5",fontFamily:"math",marginLeft:"10px"}}> &nbsp;This form allows you to request time off from your regular duties</h2>
       <div className="secdiv">
        <div className="thirddiv">Application for Leave(STAFF)<br/>[VVIT/ACD/16]</div>
        <form><table  cellSpacing={0} className="tsy">
            <tr><td  className="leavehed">
            Name & Employee Id &nbsp;</td><td><input type="text" className="edittext1" required></input></td>
            </tr>
            <tr><td  className="leavehed">
                  Designation </td><td><input type="text" className="edittext1" required></input></td>
            </tr>
            <tr><td  className="leavehed">
            Branch </td><td><input type="text" className="edittext1" required></input></td>
            </tr>
            <tr>  </tr>
            <tr><td  className="leavehed">
            Leave Availed Till Date (In this Academic Year)</td><td><input type="text" className="edittext1" required></input></td>
            
            </tr>
            <tr><td  className="leavehed">
            Balance Leave At credit(In this Academic Year)</td><td><input type="text" className="edittext1" required></input></td>
            </tr>
            <tr><td  className="leavehed">
            Reason for leave </td><td><input type="text" className="edittext1" required></input></td>
            </tr>
            <tr><td  className="leavehed">
            Alternative Arrangement made for Classes/Duties </td>
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
                        <th>
                            Signature of Alternative staff/Faculty
                        </th>
                       </tr>
                       <tr>
                        <td ><input type="text" className="tableinput"></input></td>
                        <td><input type="text" className="tableinput"></input></td>
                        <td><input type="text" className="tableinput"></input></td>
                        <td><input type="text" className="tableinput"></input></td>
                        <td><input type="text" className="tableinput"></input></td>
                       </tr>
                       <tr>
                        <td><input type="text" className="tableinput"></input></td>
                        <td><input type="text" className="tableinput"></input></td>
                        <td><input type="text" className="tableinput"></input></td>
                        <td><input type="text" className="tableinput"></input></td>
                        <td><input type="text" className="tableinput"></input></td>
                       </tr>
                       <tr>
                        <td><input type="text" className="tableinput"></input></td>
                        <td><input type="text" className="tableinput"></input></td>
                        <td><input type="text" className="tableinput"></input></td>
                        <td><input type="text" className="tableinput"></input></td>
                        <td><input type="text" className="tableinput"></input></td>
                       </tr>
                       <tr>
                        <td><input type="text" className="tableinput"></input></td>
                        <td><input type="text" className="tableinput"></input></td>
                        <td><input type="text" className="tableinput"></input></td>
                        <td><input type="text" className="tableinput"></input></td>
                        <td><input type="text" className="tableinput"></input></td>
                       </tr>
                       <tr>
                        <td><input type="text" className="tableinput"></input></td>
                        <td><input type="text" className="tableinput"></input></td>
                        <td><input type="text" className="tableinput"></input></td>
                        <td><input type="text" className="tableinput"></input></td>
                        <td><input type="text" className="tableinput"></input></td>
                       </tr>
                    </table>
                </td>
            </tr>
           
            </table>
                <div style={{display:"flex",marginLeft:"6px"}}>
                <p style={{color:"#3B92B5"}}  className="leavehed">Applicant's Signature : <input type="text" className="edittext1"/></p><p style={{marginLeft:"200px",color:"#3B92B5"}}  className="leavehed">Date : <input type="text" className="edittext1"/></p>
                </div>
                <p style={{marginLeft:"6px",color:"#3B92B5"}}  className="leavehed">HOD : <input type="text" className="edittext1"/>
                <br/><br/>
                Principal : <input type="text" className="edittext1"/></p>
                
            
        </form>
       </div><div style={{marginLeft:"280px",marginTop:"20px",width:"900px"}}>
       <button style={{width:"260px",marginLeft:"50px"}}><FontAwesomeIcon icon={faPrint}/>&nbsp;Print Request form</button>
       <button style={{width:"220px",marginLeft:"50px"}}><FontAwesomeIcon icon={faUpload}/>&nbsp;Submit to HOD</button>
       <button style={{width:"220px",marginLeft:"50px"}}><FontAwesomeIcon icon={faFileDownload}/>&nbsp;Download</button>
       </div>
       </div>
       
    )
}
export default Leaveform;