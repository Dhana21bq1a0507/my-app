import React,{useRef,useState} from "react";
import emailjs from '@emailjs/browser';
import { useNavigate } from 'react-router-dom'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLock,faEnvelope,faClock} from "@fortawesome/free-solid-svg-icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { createGlobalStyle, ThemeProvider } from "styled-components";
const GlobalStyle = createGlobalStyle`
  // Your global styles go here
`;
function Forgetpassword(){
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
  const notifyerror = (message) => {
    toast.error(message, {
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
    const form = useRef();
   // const [textInput,settextInput]=useState({teachermail:''})
    const [otp, setOtp] = useState(null);
    const [mes,setmes]=useState('')
    const [flag0,setflag0]=useState(false);
    const [flag1,setflag1]=useState(false);
    const navigate = useNavigate();
    const gotologin=()=>{
      navigate('/homepage');
    }
    const sendDataToExpress=async() =>{
      try{
          
          const response=await fetch('http://localhost:3300/forget',{
              method:'POST',headers:{
                  'Content-Type':'application/json',
              },
              body:JSON.stringify({teachermail:mes}),
          });
       //   const result=await response.json();
              
            }
      catch(error){
          console.log('Error sending data to Express',error)
      }
  };
  
    const generateOTP = () => {
        return Math.floor(Math.random() * 10000);
      };

      const sendOTP = (email) => {
        const generatedOtp = generateOTP();
        setOtp(generatedOtp);
    
        const message = `Your OTP is: ${generatedOtp}`;
       // settextInput({...textInput,['teachermail']:email});
       setmes(email)
     
        emailjs.send('service_hn0rv12', 'template_ys3qyuo', { to: email, message }, 'eDkVE9ZXBi_ftgNxt')
          .then((result) => {
            setflag0(true);
            //console.log(result.text);
            notify("Mail Send Successfully")
          })
          .catch((error) => {
            console.log(error.text);
            notifyerror("Please Check Network")
          });
      };



      const sendEmail = (e) => {
        e.preventDefault();
        const formData = new FormData(form.current);
        const userEnteredOtp = formData.get('otp');
    
        if (userEnteredOtp && parseInt(userEnteredOtp) === otp) {
                
                navigate('/resetpassword');
         // window.alert('OTP is correct. Sending email...');
          // Proceed with sending the email using emailjs or perform other actions.
        } else {
          setflag1(true)
        }
      };        
    return(
      
        <div className="maind">
           <ThemeProvider theme={{}}>
        <>
          <GlobalStyle />
          <ToastContainer  />
        </>
      </ThemeProvider>
            <div className="forgotdiv">

                <h1 style={{marginTop:"40px",marginLeft:"250px"}}><FontAwesomeIcon icon={faLock}/>&nbsp;&nbsp;Forgot Password  ?</h1>
                <p style={{marginTop:"35px",marginLeft:"70px",marginRight:"50px",fontSize:"25px"}}>No Problem! Enter your email or username below and we will send you an email with OTP to resend your password</p>
                <form ref={form} onSubmit={sendEmail}>
                {flag1 && <h4 style={{color:"red"}}>Incorrect OTP. Please try again.</h4>}
               <input type="text" name="to" style={{marginLeft:"150px",marginTop:"30px",border:"1px solid black"}} placeholder="Email"></input><span style={{fontSize:"40px",marginLeft:"10px"}}><FontAwesomeIcon icon={faEnvelope}/></span><br></br>
               { flag0==false && <button type="button"  onClick={() => sendOTP(form.current['to'].value)}  style={{marginTop:"40px",marginLeft:"290px"}}>Send OTP</button>}
               {flag0 && <div><input type="text" name="otp"style={{marginLeft:"150px",marginTop:"30px",border:"1px solid black"}}  placeholder="Enter OTP" /><span style={{fontSize:"40px",marginLeft:"10px"}}><FontAwesomeIcon icon={faClock}/></span><input type="submit" onClick={sendDataToExpress}style={{marginTop:"40px",marginLeft:"290px"}}></input></div>}
               </form>

               <p style={{marginLeft:"320px",textDecoration:"underline",cursor:"pointer"}} onClick={gotologin}>Go to Login</p>

            </div>
            </div>
        
    )
}
export default Forgetpassword;