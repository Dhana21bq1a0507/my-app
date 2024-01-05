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
function AdminFirstpage(){
  return(
 <div>
     <div>
        

        <Routes>
        <Route path="/" element={<Adminhome/>}></Route>
      
          <Route path="/adminhome" element={<Adminhome/>}></Route>
      
     
     
      </Routes>

   
    </div>
 </div>
  );

}
export default AdminFirstpage;