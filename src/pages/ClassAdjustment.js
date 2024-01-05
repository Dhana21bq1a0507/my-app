import React, { useState,useEffect,useRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTable,faFile,faBell,faUser,faCaretDown,faCaretUp} from "@fortawesome/free-solid-svg-icons";
import './leave.css'
import emailjs from '@emailjs/browser';
import './Dash.css'
import Dashboard from "../Components/Dashboard";
function ClassAdjustment(){
    const [c1,setc1]=useState(1);
    const [c2,setc2]=useState(1);
    const [c3,setc3]=useState(1);
    const [c4,setc4]=useState(1);
    const form = useRef();
    const [data, setData] = useState([]);
    const [textInput,settextInput]=useState({teacherid:''})
    const [replyContent, setReplyContent] = useState('');
   {/*} useEffect(() => {
      // Simulate a webhook notification or polling for new replies
      const checkForReplies = async () => {
        // Make an API request to your server or email service
        // to check for new replies based on the unique identifier
        const response = await fetch('/api/checkReplies/:uniqueIdentifier');
        const data = await response.json();
  
        // Process the reply content
        if (data.replyContent) {
          setReplyContent(data.replyContent);
        }
      };
  
      // Poll every 5 seconds for new replies (adjust as needed)
      const intervalId = setInterval(() => {
        checkForReplies();
      }, 5000);
  
      // Cleanup the interval when the component unmounts
      return () => clearInterval(intervalId);
    }, []);
  */}

   const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_hn0rv12', 'template_lb7geqh', form.current, 'eDkVE9ZXBi_ftgNxt')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
    const handleButtonClick = (buttonId) => {
      console.log(`Button ${buttonId} clicked!`);

    };
    const handleInputChange=(e)=>{
      const {name,value}=e.target;
      settextInput({...textInput,[name]:value});
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
    const sendDataToExpress=async() =>{
      try{
        
          const response=await fetch('http://localhost:3300/timetable',{
              method:'POST',headers:{
                  'Content-Type':'application/json',
              },
              body:JSON.stringify(textInput),
          });
          console.log(textInput)
          const result=await response.json();
          console.log(result[0]['mon'])
              setData(result);
            }
      catch(error){
          console.log('Error sending data to Express',error)
      }

  };
  
    return(
       <div className="maindiv">
        
    <div className="firstdiv"><p style={{fontSize:"45px",color:"white",fontFamily:"-moz-initial",marginTop:"0px",marginLeft:"10px",display:"flex",paddingTop:"10px"}}><FontAwesomeIcon icon={faTable}/>&nbsp;ClassAdjustment<div style={{marginLeft:"900px",}}>&nbsp;&nbsp;&nbsp;&nbsp;<FontAwesomeIcon icon={faUser}/></div></p></div>
    <h1 style={{color:"#3B92B5",marginLeft:"10px",fontWeight:"8px"}}>&nbsp;Welcome to the Class Adjustment feature! </h1>
<h2 style={{color:"#3B92B5",fontFamily:"math",marginLeft:"10px"}}> &nbsp;Use this feature to propose changes to specific classes, adjust timings,and ensure a smooth transition 
in your absence</h2>



<div className="c1" onClick={clidiv1} ><span style={{color:"white",fontSize:"30px",paddingLeft:"40px",paddingTop:"1px"}}>Need To adjust your classes?check Timetables
{c1%2!=0 ? <span style={{color:"white",fontSize:"40px",paddingLeft:"400px",paddingTop:"5px"}}><FontAwesomeIcon icon={faCaretUp}/></span>:<span style={{color:"white",fontSize:"40px",paddingLeft:"400px",paddingTop:"5px",marginTop:"14px"}}><FontAwesomeIcon icon={faCaretDown}/></span>}</span></div>

{c1%2==0 &&  <div className="c2">
        <h3 style={{fontSize:"25px",marginTop:"30px",marginLeft:"200px",color:"#3B92B5"}}>Enter Teacher Id&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="text" name="teacherid" value={textInput.teacherid}  onChange={handleInputChange} style={{borderBottom:"2px solid black",height:"40px"}} /></h3>
        <button style={{marginLeft:"400px",width:"200px",height:"35px"}} onClick={sendDataToExpress}>View Timetable</button>
        {data.length > 0  && <table cellPadding={"5px"} border={1} align="center" className="timetable" style={{borderColor:"#3B92B5",borderCollapse:"collapse",borderWidth:"3px"}}>
        <tbody>
          <tr>
            <th colSpan={7} width={"80px"} height={"30px"} style={{backgroundColor:"#3B92B5",color:"white"}}>Academic Year:2023-2024</th>
          </tr>
          <tr>
            <td width={"80px"} height={"30px"}></td>
            <th style={{color:"#0A4C66"}}>8:20-9:15</th>
            <th style={{color:"#0A4C66"}}>9:15-10:10</th>
            <th style={{color:"#0A4C66"}}>10:20-11:15</th>
            <th style={{color:"#0A4C66"}}>11:15-12:10</th>
            <th style={{color:"#0A4C66"}}>12:50-1:40</th>
            <th style={{color:"#0A4C66"}}>1:40-2:25</th>
          </tr>
          <tr >
            <td width={"80px"} height={"30px"} style={{color:"#0A4C66"}}>Monday</td>
           {data.length > 0 &&
              JSON.parse(data[0]["mon"])["8:20-9:15"]!== undefined
                ? <td>{JSON.parse(data[0]["mon"])["8:20-9:15"]}</td>
                : <td></td>}
                {data.length > 0 &&
              JSON.parse(data[0]["mon"])["9:15-10:10"]!== undefined
                ? <td>{JSON.parse(data[0]["mon"])["9:15-10:10"]}</td>
                : <td></td>}
             {data.length > 0 &&
              JSON.parse(data[0]["mon"])["10:20-11:15"]!== undefined
                ? <td>{JSON.parse(data[0]["mon"])["10:20-11:15"]}</td>
                : <td></td>}
                {data.length > 0 &&
              JSON.parse(data[0]["mon"])["11:15-12:10"]!== undefined
                ? <td>{JSON.parse(data[0]["mon"])["11:15-12:10"]}</td>
                : <td></td>}
            
            {data.length > 0 &&
              JSON.parse(data[0]["mon"])["12:50-1:40"]!== undefined
                ? <td>{JSON.parse(data[0]["mon"])["12:50-1:40"]}</td>
                : <td></td>}
                {data.length > 0 &&
              JSON.parse(data[0]["mon"])["1:40-2:25"]!== undefined
                ? <td>{JSON.parse(data[0]["mon"])["1:40-2:25"]}</td>
                : <td></td>}
          </tr>
          <tr>
            <td width={"80px"} height={"30px"} style={{color:"#0A4C66"}}>Tuesday</td>
           {data.length > 0 &&
              JSON.parse(data[0]["tue"])["8:20-9:15"]!== undefined
                ? <td>{JSON.parse(data[0]["tue"])["8:20-9:15"]}</td>
                : <td></td>}
                {data.length > 0 &&
              JSON.parse(data[0]["tue"])["9:15-10:10"]!== undefined
                ? <td>{JSON.parse(data[0]["tue"])["9:15-10:10"]}</td>
                : <td></td>}
             {data.length > 0 &&
              JSON.parse(data[0]["tue"])["10:20-11:15"]!== undefined
                ? <td>{JSON.parse(data[0]["tue"])["10:20-11:15"]}</td>
                : <td></td>}
                {data.length > 0 &&
              JSON.parse(data[0]["tue"])["11:15-12:10"]!== undefined
                ? <td>{JSON.parse(data[0]["tue"])["11:15-12:10"]}</td>
                : <td></td>}
            
            {data.length > 0 &&
              JSON.parse(data[0]["tue"])["12:50-1:40"]!== undefined
                ? <td>{JSON.parse(data[0]["tue"])["12:50-1:40"]}</td>
                : <td></td>}
                {data.length > 0 &&
              JSON.parse(data[0]["tue"])["1:40-2:25"]!== undefined
                ? <td>{JSON.parse(data[0]["tue"])["1:40-2:25"]}</td>
                : <td></td>}
          </tr>
          <tr>
            <td width={"80px"} height={"30px"} style={{color:"#0A4C66"}}>wednesday</td>
           {data.length > 0 &&
              JSON.parse(data[0]["wed"])["8:20-9:15"]!== undefined
                ? <td>{JSON.parse(data[0]["wed"])["8:20-9:15"]}</td>
                : <td></td>}
                {data.length > 0 &&
              JSON.parse(data[0]["wed"])["9:15-10:10"]!== undefined
                ? <td>{JSON.parse(data[0]["wed"])["9:15-10:10"]}</td>
                : <td></td>}
             {data.length > 0 &&
              JSON.parse(data[0]["wed"])["10:20-11:15"]!== undefined
                ? <td>{JSON.parse(data[0]["wed"])["10:20-11:15"]}</td>
                : <td></td>}
                {data.length > 0 &&
              JSON.parse(data[0]["wed"])["11:15-12:10"]!== undefined
                ? <td>{JSON.parse(data[0]["wed"])["11:15-12:10"]}</td>
                : <td></td>}
            
            {data.length > 0 &&
              JSON.parse(data[0]["wed"])["12:50-1:40"]!== undefined
                ? <td>{JSON.parse(data[0]["wed"])["12:50-1:40"]}</td>
                : <td></td>}
                {data.length > 0 &&
              JSON.parse(data[0]["wed"])["1:40-2:25"]!== undefined
                ? <td>{JSON.parse(data[0]["wed"])["1:40-2:25"]}</td>
                : <td></td>}
          </tr>
          <tr>
            <td width={"80px"} height={"30px"} style={{color:"#0A4C66"}}>Thursday</td>
           {data.length > 0 &&
              JSON.parse(data[0]["thu"])["8:20-9:15"]!== undefined
                ? <td>{JSON.parse(data[0]["thu"])["8:20-9:15"]}</td>
                : <td></td>}
                {data.length > 0 &&
              JSON.parse(data[0]["thu"])["9:15-10:10"]!== undefined
                ? <td>{JSON.parse(data[0]["thu"])["9:15-10:10"]}</td>
                : <td></td>}
             {data.length > 0 &&
              JSON.parse(data[0]["thu"])["10:20-11:15"]!== undefined
                ? <td>{JSON.parse(data[0]["thu"])["10:20-11:15"]}</td>
                : <td></td>}
                {data.length > 0 &&
              JSON.parse(data[0]["thu"])["11:15-12:10"]!== undefined
                ? <td>{JSON.parse(data[0]["thu"])["11:15-12:10"]}</td>
                : <td></td>}
            
            {data.length > 0 &&
              JSON.parse(data[0]["thu"])["12:50-1:40"]!== undefined
                ? <td>{JSON.parse(data[0]["thu"])["12:50-1:40"]}</td>
                : <td></td>}
                {data.length > 0 &&
              JSON.parse(data[0]["thu"])["1:40-2:25"]!== undefined
                ? <td>{JSON.parse(data[0]["thu"])["1:40-2:25"]}</td>
                : <td></td>}
          </tr>
          <tr>
            <td width={"80px"} height={"30px"} style={{color:"#0A4C66"}}>Friday</td>
           {data.length > 0 &&
              JSON.parse(data[0]["fri"])["8:20-9:15"]!== undefined
                ? <td>{JSON.parse(data[0]["fri"])["8:20-9:15"]}</td>
                : <td></td>}
                {data.length > 0 &&
              JSON.parse(data[0]["fri"])["9:15-10:10"]!== undefined
                ? <td>{JSON.parse(data[0]["fri"])["9:15-10:10"]}</td>
                : <td></td>}
             {data.length > 0 &&
              JSON.parse(data[0]["fri"])["10:20-11:15"]!== undefined
                ? <td>{JSON.parse(data[0]["fri"])["10:20-11:15"]}</td>
                : <td></td>}
                {data.length > 0 &&
              JSON.parse(data[0]["fri"])["11:15-12:10"]!== undefined
                ? <td>{JSON.parse(data[0]["fri"])["11:15-12:10"]}</td>
                : <td></td>}
            
            {data.length > 0 &&
              JSON.parse(data[0]["fri"])["12:50-1:40"]!== undefined
                ? <td>{JSON.parse(data[0]["fri"])["12:50-1:40"]}</td>
                : <td></td>}
                {data.length > 0 &&
              JSON.parse(data[0]["fri"])["1:40-2:25"]!== undefined
                ? <td>{JSON.parse(data[0]["fri"])["1:40-2:25"]}</td>
                : <td></td>}
          </tr>
          <tr>
          <td width={"80px"} height={"30px"} style={{color:"#0A4C66"}}>Saturday</td>
          {data.length > 0 &&
              JSON.parse(data[0]["sat"])["8:20-9:15"]!== undefined
                ? <td>{JSON.parse(data[0]["sat"])["8:20-9:15"]}</td>
                : <td></td>}
                {data.length > 0 &&
              JSON.parse(data[0]["sat"])["9:15-10:10"]!== undefined
                ? <td>{JSON.parse(data[0]["sat"])["9:15-10:10"]}</td>
                : <td></td>}
                 {data.length > 0 &&
              JSON.parse(data[0]["sat"])["10:20-11:15"]!== undefined
                ? <td>{JSON.parse(data[0]["sat"])["10:20-11:15"]}</td>
                : <td></td>}
                {data.length > 0 &&
              JSON.parse(data[0]["sat"])["11:15-12:10"]!== undefined
                ? <td>{JSON.parse(data[0]["sat"])["11:15-12:10"]}</td>
                : <td></td>}
                 {data.length > 0 &&
              JSON.parse(data[0]["sat"])["12:50-1:40"]!== undefined
                ? <td>{JSON.parse(data[0]["sat"])["12:50-1:40"]}</td>
                : <td></td>}
               {data.length > 0 &&
              JSON.parse(data[0]["sat"])["1:40-2:25"]!== undefined
                ? <td>{JSON.parse(data[0]["sat"])["1:40-2:25"]}</td>
                : <td></td>}
          </tr>
        </tbody>
      </table>}
    
    
    
    </div>}


<div className="c1" onClick={clidiv2} ><span style={{color:"white",fontSize:"30px",paddingLeft:"40px",paddingTop:"5px"}}>Request Adjustment</span>{c2%2!=0 ? <span style={{color:"white",fontSize:"40px",paddingTop:"5px",marginTop:"14px",paddingLeft:"740px"}}><FontAwesomeIcon icon={faCaretUp}/></span>:<span style={{color:"white",fontSize:"40px",paddingTop:"5px",marginTop:"14px",paddingLeft:"740px"}}><FontAwesomeIcon icon={faCaretDown}/></span>}</div>

{c2%2==0 &&  <div className="c2">
  <br></br><br></br>
  <form ref={form} onSubmit={sendEmail}>
 <span style={{fontSize:"25px",marginLeft:"200px",color:"#3B92B5"}}>Enter Teacher Mail</span>
 <input type="text" name="to" style={{border:"1px solid #3B92B5",marginLeft:"20px",height:"45px",width:"300px"}}/>
   <br></br><br></br>
   <span style={{fontSize:"25px",marginLeft:"200px",color:"#3B92B5"}}>Date</span>
 <input type="text" name="date" style={{border:"1px solid #3B92B5",marginLeft:"170px",height:"45px",width:"300px"}}/>
   <br></br><br></br>
   <span style={{fontSize:"25px",marginLeft:"200px",color:"#3B92B5"}}>Class</span>
 <input type="text" name="class" style={{border:"1px solid #3B92B5",marginLeft:"165px",height:"45px",width:"300px"}}/>
   <br></br><br></br>
   <span style={{fontSize:"25px",marginLeft:"200px",color:"#3B92B5"}}>Time</span>
 <input type="text" name="time" style={{border:"1px solid #3B92B5",marginLeft:"170px",height:"45px",width:"300px"}}/>
   <br></br><br></br>
   

   <input type="submit" style={{width:"200px",marginLeft:"400px",marginTop:"10px"}} value={"Send Request"}/>
   </form>
  </div>}

<div className="c1" onClick={clidiv3} ><span style={{color:"white",fontSize:"30px",paddingLeft:"40px",paddingTop:"5px"}}>Request Approval</span>{c3%2!=0 ? <span style={{color:"white",fontSize:"40px",paddingLeft:"770px",marginTop:"14px"}}><FontAwesomeIcon icon={faCaretUp}/></span>:<span style={{color:"white",fontSize:"40px",marginTop:"14px",paddingLeft:"770px"}}><FontAwesomeIcon icon={faCaretDown}/></span>}</div>

{c3%2==0 &&  <div className="c2"></div>}

<div className="c1" onClick={clidiv4} ><span style={{color:"white",fontSize:"30px",paddingLeft:"40px",paddingTop:"5px"}}>View </span>{c4%2!=0 ? <span style={{color:"white",fontSize:"40px",paddingLeft:"930px",marginTop:"14px"}}><FontAwesomeIcon icon={faCaretUp}/></span>:<span style={{color:"white",fontSize:"40px",paddingLeft:"930px",marginTop:"14px"}}><FontAwesomeIcon icon={faCaretDown}/></span>}</div>

{c4%2==0 &&  <div className="c2"></div>}

       </div>
       
    )
}
export default ClassAdjustment;