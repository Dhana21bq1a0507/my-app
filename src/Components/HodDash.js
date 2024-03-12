import React,{useEffect, useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHome,faUser,faQuestion,faTable,faBell,faFile,faSignOut,faCog} from "@fortawesome/free-solid-svg-icons";
import { NavLink, useParams, useSearchParams } from "react-router-dom";

const HodDash=({children})=>{
    const {id}=useParams();
    const [data,setdata]=useState([])
    const isSelected=id===children.name;
    useEffect(()=>{
        fetch("http://localhost:3300/hoddetailsprofile")
        .then(res => res.json())
        .then(data1 => setdata(data1))
        .catch((err)=>{
            console.log(err);
      
        })
          
        },[]);
    const menuItem=[
        {
            path:"/hodhome",
            name:"Home",
            icon:<FontAwesomeIcon icon={faHome}/>
        },
        {
            path:"/hodprofile",
            name:"Profile",
            icon:<FontAwesomeIcon icon={faUser}/>
        },
       
        {
            path:"/hodtimetable",
            name:"Timetable",
            icon:<FontAwesomeIcon icon={faTable}/>
        },
        {
            path:"/notification",
            name:"Notification",
            icon:<FontAwesomeIcon icon={faBell}/>
        },
        {
            path:"/settings",
            name:"Settings",
            icon:<FontAwesomeIcon icon={faCog}/>
        },
        {
            path:"/logout",
            name:"Log Out",
            icon:<FontAwesomeIcon icon={faSignOut}/>
        },
        {
            path:"/help",
            name:"Help",
            icon:<FontAwesomeIcon icon={faQuestion}/>
        },
    ]
    return(
        <div className="container">
            <div className="sidebar" style={{height:"44rem",width:"21rem"}}>
            <div className="cont">
            <h1 style={{fontSize:"40px",color:"aliceblue",marginTop:"40px",marginLeft:"5%"}}><FontAwesomeIcon icon={faUser}/></h1>
            <label className="name">{data.length>0 && data[0].username}</label>
            </div>
                {
                    menuItem.map((item,index)=>(
                        <NavLink to={item.path} key={index} className={`link ${isSelected ? "selected" : ""}`} activeClassName="active">
                            <div className="icon" >{item.icon}</div>
                            <div >{item.name}</div>
                        </NavLink> 
                    ))
                }
            </div>
       <main>{children}</main>
        </div>
    )
}
export default HodDash;