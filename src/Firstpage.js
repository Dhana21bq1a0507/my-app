import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Timetable from "./pages/Timetable";
import Notification from "./pages/Notification";
import Help from "./pages/Help";
import Dashboard from './Components/Dashboard';
import Editdetails from './pages/Editdetails';
import Changepassword from './pages/Changepassword';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Leaveform from "./pages/ClassAdjustment";
import LeaveBalance from "./pages/Leavebalance";
import Leavehistory from "./pages/Leavehistory";
import Teachertimetable from "./pages/Teachertimetable";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import React,{useEffect} from "react";
import { Theme } from 'react-toastify';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const GlobalStyle = createGlobalStyle`
  // Your global styles go here
`;

function Firstpage(){
  useEffect(() => {
    // Display toast notification when the component mounts
    toast.success("Successfully logged in as Teacher",{
      theme:"colored",
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }, []); 
  return(
 <div>
     <div>
 
     <ThemeProvider theme={{}}>
        <>
          <GlobalStyle />
          <ToastContainer  />
        </>
      </ThemeProvider>

        <Routes>
        <Route path="/" element={<Home/>}></Route>
      <Route path="/home" element={<Home/>}></Route>
      <Route path="/profile" element={<Profile/>}></Route>
      <Route path="/timetable" element={<Timetable/>}></Route>
      <Route path="/notification" element={<Notification/>}></Route>
      <Route path="/help" element={<Help/>}></Route>
      <Route path="/leaveform" element={<Leaveform/>}></Route>
      <Route path="/Changepassword" element={<Changepassword/>}></Route>
      <Route path="/editdetails" element={<Editdetails/>}></Route>
      <Route path="/leavebalance" element={<LeaveBalance/>} ></Route>
      <Route path="/leavehistory" element={<Leavehistory/>} ></Route>
      <Route path="/teachertimetable" element={<Teachertimetable/>}></Route>
    
      </Routes>

   
    </div>
 </div>
  );

}
export default Firstpage;