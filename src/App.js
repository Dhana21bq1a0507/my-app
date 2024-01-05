import ReactDOM from 'react-dom';
import './App.css';

import Digital from './Digital';
import { useEffect, useState } from 'react';
import axios from 'axios'
import Fetch from './Fetch'
import Adminhome from './Admin/Adminhome';
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

import AdminFirstpage from './AdminFirstpage';
{/*}
function App() {
  
  return (
   <Expt4/>
  );
}
export default App;
{/*const binfo={
  Re:{
    name:'dhana',
    post:'jdgf',
  },
  Node:{
    name:'pooji',
    post:'werwtytrewy',
  }
}
export const blong=React.createContext(binfo);
export default function App(){
  return(
<div className='App'>
<blong.Provider value={binfo}>
  <Expt4/>
</blong.Provider>
</div>
  )
}*/}
{/*import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
class App extends Component {
   constructor(){
       super();
       this.state ={users: []};
   }
   componentDidMount() {
          fetch('/users')
            .then(res => {
                console.log(res);
                return res.json()
             })
            .then(users => { 
                console.log(users); 
                this.setState({ users })
             });
         }
   render() {
        return (
            <div className="App">
                <h1>Users</h1>
                {this.state.users.map(user =>
                <div key={user.id}>user: {user.name} Password: {user.password}</div>
              )}
            </div>
        );
    }
}
export default App;*/}

function App(){
  return(
    <div>
     
{/*<BrowserRouter>
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
      <Route path="/adminhome" element={<Adminhome/>} ></Route>
      <Route path="/adminfirstpage" element={<AdminFirstpage/>} ></Route>
        </Routes>

  </BrowserRouter> 
  {/*<Contact/> */}
  <Digital/>
    </div>

  

  )
  
}
export default App;







