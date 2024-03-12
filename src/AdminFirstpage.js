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
import Adminhome from "./Admin/Adminhome";

import Adminprofile from "./Admin/Adminprofile";
import Admintimetable from "./Admin/Admintimetable";
import AdminDepartmentupload from './Admin/AdminDepartmentupload'
import Hodleaveform from "./Hod/Hodleaveform";
import HodEditdetails from "./Hod/HodEditdetails";
import Hodchangepassword from "./Hod/Hodchangepassword";
import Hodleaveapplication from "./Hod/Hodleaveapplication";
import AdminEditdetails from "./Admin/AdminEditdetails";
import AdminChangepassword from "./Admin/AdminChangepassword";
import AdminTeachermanagement from "./Admin/AdminTeachermanagement";
import Adminteachermanagementmain from "./Admin/Adminteachermanagementmain";
import AdminTeachermanage from "./Admin/AdminTeachermanage";
import Adminleavemanagement from "./Admin/Adminleavemanagement";
import AdminDepartment from "./Admin/AdminDepartment";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import React,{useEffect} from "react";
import { Theme } from 'react-toastify';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const GlobalStyle = createGlobalStyle`
  // Your global styles go here
`;
function AdminFirstpage(){
  useEffect(() => {
    // Display toast notification when the component mounts
    toast.success("Successfully logged in as Admin",{
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

 <Route path="/" element={<Adminhome/>}></Route>
 <Route path="/adminhome" element={<Adminhome/>}></Route>
 <Route path="/adminprofile" element={<Adminprofile/>} ></Route>
      <Route path="/admintimetable" element={<Admintimetable/>} ></Route>
      <Route path="/adminchangepassword" element={<AdminChangepassword/>} ></Route>
      <Route path="/admineditdetails" element={<AdminEditdetails/>} ></Route>
      <Route path="/adminteachermanagement" element={<AdminTeachermanagement/>} ></Route>
<Route path="/adminteachermanagementmain" element={<Adminteachermanagementmain/>}></Route>
<Route path="/adminteachermanage" element={<AdminTeachermanage/>}></Route>
<Route path="/admindepartmentupload" element={<AdminDepartmentupload/>}></Route>
<Route path="/adminleavemanagement" element={<Adminleavemanagement/>}></Route>
<Route path="/admindepartment" element={<AdminDepartment/>}></Route>
 </Routes>
    </div>
 </div>
  );

}
export default AdminFirstpage;