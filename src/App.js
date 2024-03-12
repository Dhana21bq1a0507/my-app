import ReactDOM from 'react-dom';
import './App.css';
import Leaverequest from './Hod/Leaverequest';
import Digital from './Digital';
import { useEffect, useState } from 'react';
import axios from 'axios'
import Fetch from './Fetch'
import Hodhome from './Hod/Hodhome';
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Timetable from "./pages/Timetable";
import Notification from "./pages/Notification";
import Help from "./pages/Help";
import Dashboard from './Components/Dashboard';
import Editdetails from './pages/Editdetails';
import Changepassword from './pages/Changepassword';
import Firstpage from './Firstpage';
import Fetchfromreact from './Fetchfromreact';
import Contact from './Contact'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import Leaveform from './pages/Leaveform';
import Forgetpassword from './Forgetpassword';
import ClassAdjustment from './pages/ClassAdjustment';
import Resetpassword from './Resetpassword';
import HodDash from './Components/HodDash';
import HodFirstpage from './HodFirstpage';
import Hodtimetable from './Hod/Hodtimetable';
import Hodleaveform from './Hod/Hodleaveform';
    import Hodprofile from './Hod/Hodprofile';
import HodEditdetails from './Hod/HodEditdetails';
import Hodchangepassword from './Hod/Hodchangepassword';
 import Hodleaveapplication from './Hod/Hodleaveapplication';
import Leavebalance from './pages/Leavebalance';
import AdminFirstpage from './AdminFirstpage';
import Adminhome from './Admin/Adminhome';
import Adminprofile from './Admin/Adminprofile';
import Admintimetable from './Admin/Admintimetable'
import Leavehistory from './pages/Leavehistory';
import AdminEditdetails from './Admin/AdminEditdetails';
import AdminChangepassword from './Admin/AdminChangepassword';
import AdminTeachermanagement from './Admin/AdminTeachermanagement';
import Adminteachermanagementmain from './Admin/Adminteachermanagementmain';
import AdminTeachermanage from './Admin/AdminTeachermanage';
import AdminDepartmentupload from './Admin/AdminDepartmentupload';
import Hello from './Hello';
import HodTeacherdetails from './Hod/HodTeacherdetails';
import Teachertimetable from './pages/Teachertimetable';
import Hodteachertimetable from './Hod/Hodteachertimetable';
import Adminleavemanagement from './Admin/Adminleavemanagement';
import React from "react";
import AdminDepartment from './Admin/AdminDepartment';
import { createGlobalStyle, ThemeProvider } from "styled-components";

import { Theme } from 'react-toastify';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const GlobalStyle = createGlobalStyle`
  // Your global styles go here
`;
const notify = () => {
  toast("first Notification");
};
function App(){
  return(
    <div>
     
<BrowserRouter>
    <Routes>
        <Route path="/" element={<HomePage />} ></Route>
        <Route path="/homepage" element={<HomePage />} ></Route>
        <Route path="/leaveform" element={<Leaveform/>}></Route>
        <Route path="/forgetpassword" element={<Forgetpassword/>}></Route>
        <Route path="/firstpage" element={<Firstpage/>}></Route>
        <Route path="/classadjustment" element={<ClassAdjustment/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
      <Route path="/profile" element={<Profile/>}></Route>
      <Route path="/timetable" element={<Timetable/>}></Route>
      <Route path="/notification" element={<Notification/>}></Route>
      <Route path="/dashboard" element={<Dashboard/>}></Route>
       <Route path="/editdetails" element={<Editdetails/>}></Route>
      <Route path="/help" element={<Help/>}></Route>
      <Route path="/leaveform" element={<Leaveform/>}></Route>
      <Route path="/Changepassword" element={<Changepassword/>}></Route>
      <Route path="/resetpassword" element={<Resetpassword />} ></Route>
      <Route path="/hodhome" element={<Hodhome/>} ></Route>
      <Route path="/hodfirstpage" element={<HodFirstpage/>} ></Route>
      <Route path="/hoddash" element={<HodDash/>} ></Route>
      <Route path="/hodprofile" element={<Hodprofile/>} ></Route>
      <Route path="/hodtimetable" element={<Hodtimetable/>} ></Route>
      <Route path="/leaverequest" element={<Leaverequest/>} ></Route>
      <Route path="/hodleaveform" element={<Hodleaveform/>} ></Route>
      <Route path="/hodeditdetails" element={<HodEditdetails/>} ></Route>
      <Route path="/hodchangepassword" element={<Hodchangepassword/>} ></Route>
      <Route path="/hodleaveapplication" element={<Hodleaveapplication/>} ></Route>
      <Route path="/leavebalance" element={<Leavebalance/>} ></Route>
      <Route path="/adminfirstpage" element={<AdminFirstpage/>} ></Route>
      <Route path="/adminhome" element={<Adminhome/>} ></Route>
      <Route path="/adminprofile" element={<Adminprofile/>} ></Route>
      <Route path="/admintimetable" element={<Admintimetable/>} ></Route>
      <Route path="/leavehistory" element={<Leavehistory/>} ></Route>
      <Route path="/admineditdetails" element={<AdminEditdetails/>} ></Route>
      <Route path="/adminchangepassword" element={<AdminChangepassword/>} ></Route>
      <Route path="/adminteachermanagement" element={<AdminTeachermanagement/>} ></Route>
      <Route path="/adminteachermanagementmain" element={<Adminteachermanagementmain/>}></Route>
      <Route path="/adminteachermanage" element={<AdminTeachermanage/>}></Route>
      <Route path="/admindepartmentupload" element={<AdminDepartmentupload/>}></Route>
      <Route path="/hodteacherdetails" element={<HodTeacherdetails/>}></Route>
      <Route path="/teachertimetable" element={<Teachertimetable/>}></Route>
      <Route path="/hodteachertimetable" element={<Hodteachertimetable/>} ></Route>
      <Route path="/adminleavemanagement" element={<Adminleavemanagement/>}></Route>
      <Route path="/admindepartment" element={<AdminDepartment/>}></Route>
        </Routes>

  </BrowserRouter> 
  
  {/*<Hello/>*/}
  


{/*

  
    <ThemeProvider theme={{}}>
      <>
        <GlobalStyle />
        <button onClick={notify}>Notify</button>
        <ToastContainer />
      </>
    </ThemeProvider>
*/}


    </div>

  

  )
  
}
export default App;







