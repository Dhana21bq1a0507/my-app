import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'; 
import './HomePage.css'
import Forgetpassword from './Forgetpassword';
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
    const login=()=>{
     
        setflag1(true);
      
      }
    const sendDataToExpress=async() =>{
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
        }
    }else if(opt==="Admin"){
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
        }
    }

    };
    useEffect(() => {
        if (flag0 && mes.length > 0 && mes[0].password === textInput.Password && opt==="Teacher") {
           // console.log('within if ',mes[0].password)
          setmes([]);
          navigate('/firstpage');
        } else if(flag0 && mes.length > 0 && mes[0].password === textInput.Password && opt==="Admin"){
            setmes([]);
          navigate('/adminhome');
        }
        else if (flag0) {
        
          login();
        }
      }, [flag0, mes, navigate, textInput.Password]);

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
                            <option>Head of Department</option>
                            <option>Principle</option>
                        </select><br></br><br></br><br></br>
                       
                        <input type="text" placeholder='Enter usermail' value={textInput.Usermail} name="Usermail" onChange={handleInputChange} ></input><br></br><br></br><br></br>
                        <input type="password" placeholder='Enter password'  style={{marginBottom:"1px"}}value={textInput.Password} name="Password" onChange={handleInputChange}></input><br></br>
                        <p onClick={forget} className='pa'>Forgot Password</p>
                        <button type="button" onClick={sendDataToExpress} className='but'>LogIn</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Homepage;