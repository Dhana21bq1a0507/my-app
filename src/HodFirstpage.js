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
import Hodhome from "./Hod/Hodhome";

import Hodprofile from "./Components/HodDash";
import Hodtimetable from "./Hod/Hodtimetable";
import Leaverequest from "./Hod/Leaverequest";
import Hodleaveform from "./Hod/Hodleaveform";
import HodEditdetails from "./Hod/HodEditdetails";
import Hodchangepassword from "./Hod/Hodchangepassword";
import Hodleaveapplication from "./Hod/Hodleaveapplication";
import HodTeacherdetails from "./Hod/HodTeacherdetails";
import Hodteachertimetable from "./Hod/Hodteachertimetable";
import React,{useEffect} from "react";
import { Theme } from 'react-toastify';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { createGlobalStyle, ThemeProvider } from "styled-components";
const GlobalStyle = createGlobalStyle`
  // Your global styles go here
`;
function HodFirstpage(){
  useEffect(() => {
    // Display toast notification when the component mounts
    toast.success("Successfully logged in as Head of Department",{
      theme:"colored",
      position: "top-right",
      autoClose: 10000,
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

 <Route path="/" element={<Hodhome/>}></Route>
 <Route path="/hodhome" element={<Hodhome/>}></Route>
 <Route path="/hodprofile" element={<Hodprofile/>} ></Route>
      <Route path="/hodtimetable" element={<Hodtimetable/>} ></Route>
      <Route path="/leaverequest" element={<Leaverequest/>} ></Route>
      <Route path="/hodleaveform" element={<Hodleaveform/>} ></Route>
      <Route path="/hodeditdetails" element={<HodEditdetails/>} ></Route>
      <Route path="/hodchangepassword" element={<Hodchangepassword/>} ></Route>
      <Route path="/hodleaveapplication" element={<Hodleaveapplication/>} ></Route>
      <Route path="/hodteacherdetails" element={<HodTeacherdetails/>} ></Route>
      <Route path="/hodteachertimetable" element={<Hodteachertimetable/>} ></Route>
    
 </Routes>
    </div>
 </div>
  );

}
export default HodFirstpage;