import React from 'react'
import './Nav.css'
import styled from "styled-components"
import { Link as ink } from "react-scroll";
import { Link } from 'react-router-dom'
import Jobs from './Jobs';
import {Route,Router,Routes,BrowserRouter} from "react-router-dom";

function Nav() {
  return (
    <Container>
      <h1 id="nav">InternWave</h1>
      <Menu>
        {/* <ink to="latest" spy={true} ><a href="">Internships</a></ink> */}
        <Link to="/home"><a href=''>Internships</a></Link>
        <Link to="/jobs"><a href=''>Jobs</a></Link>
        {/* <Link to="/jobs" activeStyle>
            <a >Jobs</a>
        </Link> */}
        
        {/* <a href="">Jobs</a> */}
        <Link to="/community"><a href=''>Community</a></Link>
        <Link to="/contact"><a href=''>Contact</a></Link>
        
      </Menu>
      <Right>
        <button><Link to="/register">Register</Link></button>
        <button1><Link to="/login">Login</Link></button1>
      </Right>
    </Container>
  )
}

export default Nav

const Container=styled.div`
   min-height:60px;
   box-shadow: 0 4px 2px -2px rgba(0,0,0,.2);
   
   display:flex;
   align-items:center;
   justify-content:space-between;
   color:orange;
   padding:0 10%;
   top:0;
   left:0;
   right:0;
`
const Menu=styled.div`
   display:flex;
   align-items:center;
   
   margin-left:70px;
   color:"white";
   flex:1;
   a{
     font-weight:550;
     
     padding:0 2%;
     text-decoration:none;
     flex-wrap:nowrap;
     
   }
   a:hover {
    color: orange;
  }

`
const Right=styled.div`
  display:flex;
  align-items:center;
  button{
    width:70px;
    height:30px;
    margin:10px;
    border:3px solid orange;
    color:orange;
    background:white;
    border-radius:10%;
    cursor:pointer;
  }
  button1{
    width:70px;
    height:30px;
    margin:10px;
    background:orange;
    color:white;
    border-radius:10%;
    cursor:pointer;
  }
`