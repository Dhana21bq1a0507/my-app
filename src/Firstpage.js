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
function Firstpage(){
  return(
 <div>
     <div>
        

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
      </Routes>

   
    </div>
 </div>
  );

}
export default Firstpage;