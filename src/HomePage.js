import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'; 
import './HomePage.css'
import Forgetpassword from './Forgetpassword';
import { createGlobalStyle, ThemeProvider } from "styled-components";

import { Theme } from 'react-toastify';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const GlobalStyle = createGlobalStyle`
  // Your global styles go here
`;

function Homepage(){
    const [textInput,settextInput]=useState({Usermail:'',Password:''})
    const [opt,setopt]=useState('')
    const [mes,setmes]=useState([]);
    const [flag0,setflag0]=useState(false);
  const [flag1,setflag1]=useState(false);
  const navigate = useNavigate();
    const handleInputChange=(e)=>{
       const {name,value}=e.target;
       settextInput({...textInput,[name]:value});
    }
    const handleChange=(event)=>{
        setopt(event.target.value);
    }
    const forget=()=>{
        navigate('/Forgetpassword');
    }
   
    const notify = (message) => {
        toast.error(message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      };
      
      const login=()=>{
     
        setflag1(true);
        notify('Invalid Credientals');
        
      }
      const sendDataToExpress = async () => {
        if (opt === "Teacher" || opt === "HeadOfDepartment" || opt === "Admin") {
          try {
            const response = await fetch(`http://localhost:3300/${opt}`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(textInput),
            });
            const result = await response.json();
            console.log(result[0].password);
            setmes(result);
            setflag0(true);
            console.log(textInput.Password);
          } catch (error) {
            console.log("Error sending data to Express", error);
            notify("Invalid Credientals");
          }
        } else {
          notify("Please select a valid role");
        }
      };
      
   /* const sendDataToExpress=async() =>{
        //const dataTosend={textInput};
        //const dataTosend1={passInput};
        if(opt==="Teacher"){
        try{
            
            const response=await fetch('http://localhost:3300/Teacher',{
                method:'POST',headers:{
                    'Content-Type':'application/json',
                },
                body:JSON.stringify(textInput),
            });
            const result=await response.json();
            console.log(result[0].password)
                setmes(result);
                setflag0(true);
                console.log(textInput.Password)
              } 
        
           
        catch(error){
            console.log('Error sending data to Express',error)
            notify("Invalid Credientals");
        }
    }else if(opt==="HeadofDepartment"){
        try{
            
            const response=await fetch('http://localhost:3300/HeadofDepartment',{
                method:'POST',headers:{
                    'Content-Type':'application/json',
                },
                body:JSON.stringify(textInput),
            });
            const result=await response.json();
            console.log(result[0].password)
                setmes(result);
                setflag0(true);
                console.log(textInput.Password)
              } 
        
           
        catch(error){
            console.log('Error sending data to Express',error)
            notify("Invalid Credientals");
        }
    }
    else if(opt==="Admin"){
        try{
            
            const response=await fetch('http://localhost:3300/Admin',{
                method:'POST',headers:{
                    'Content-Type':'application/json',
                },
                body:JSON.stringify(textInput),
            });
            const result=await response.json();
            console.log(result[0].password)
                setmes(result);
                setflag0(true);
                console.log(textInput.Password)
              } 
        
           
        catch(error){
            console.log('Error sending data to Express',error)
            notify("Invalid Credientals");
        }
    }else{
        notify("Please select a valid role");
    }

    };*/
    useEffect(() => {
        if (flag0 && mes.length > 0 && mes[0].password === textInput.Password) {
          setmes([]);
          if (opt === 'Teacher') {
          
           navigate('/firstpage');
           
          } else if (opt === 'HeadOfDepartment') {
           // notify('Successfully logged in as Head of Department');
            navigate('/hodfirstpage');
          } else if (opt === 'Admin') {
          //  notify('Successfully logged in as Admin');
            navigate('/adminfirstpage');
          }
        } else if (flag0) {
          login();
        }
      }, [flag0, mes, navigate,]);
    
    
    return(
        <div id="body">
            <div id="loginpage">
                <div id="loginsection">
                    <h4 >LogIn</h4>
                    
                    <div id="inputfields">
                    {flag1 && <h3>Please Enter Valid Username and password</h3>}
                        <select onChange={handleChange} id="role">
                            <option   defaultValue={true}>Select Role...</option>
                            <option>Teacher</option>
                            <option>Admin</option>
                            <option>HeadOfDepartment</option>
                            <option>Principle</option>
                        </select><br></br><br></br><br></br>
                       
                        <input type="text" placeholder='Enter usermail' value={textInput.Usermail} name="Usermail" onChange={handleInputChange} ></input><br></br><br></br><br></br>
                        <input type="password" placeholder='Enter password'  style={{marginBottom:"1px"}}value={textInput.Password} name="Password" onChange={handleInputChange}></input><br></br>
                        <p onClick={forget} className='pa' style={{ cursor: "pointer"}}>Forgot Password</p>
                        <button type="button" onClick={sendDataToExpress} className='but'>LogIn</button>
                    </div>
                    <ThemeProvider theme={{}}>
        <>
          <GlobalStyle />
          <ToastContainer 
          theme='colored'
          position="top-right"
          autoClose={10000}
          hideProgressBar={false}
          closeOnClick={false}
          pauseOnHover={true}
          draggable={true}
          progress={undefined}
      />
        </>
      </ThemeProvider>
                </div>
            </div>
           
        </div>
    )
}
export default Homepage;