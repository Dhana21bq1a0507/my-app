import React, { Children, useState ,useEffect} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHome,faUser,faQuestion,faTable,faBell} from "@fortawesome/free-solid-svg-icons";
import { NavLink ,useParams} from "react-router-dom";

const Dashboard=({children})=>{
    const [data,setdata]=useState([]);
    const {id}=useParams();
    const isSelected=id===children.name;
  
    useEffect(()=>{
        fetch("http://localhost:3300/userdetails")
        .then(res => res.json())
        .then(data1 => setdata(data1))
        .catch((err)=>{
            console.log(err);
      
        })
          
        },[]);
    const menuItem=[
        {
            path:"/home",
            name:"Home",
            icon:<FontAwesomeIcon icon={faHome}/>
        },
        {
            path:"/profile",
            name:"Profile",
            icon:<FontAwesomeIcon icon={faUser}/>
        },
        {
            path:"/timetable",
            name:"Timetable",
            icon:<FontAwesomeIcon icon={faTable}/>
        },
        {
            path:"/notification",
            name:"Notification",
            icon:<FontAwesomeIcon icon={faBell}/>
        },
        {
            path:"/help",
            name:"Help",
            icon:<FontAwesomeIcon icon={faQuestion}/>
        },
    ]
    return(
        <div className="container" >
            <div className="sidebar" style={{height:"auto",width:"20rem",height:"44rem"}}>
            <div className="container">
            <h1 style={{fontSize:"50px",color:"aliceblue",marginTop:"40px",marginLeft:"15px"}}><FontAwesomeIcon icon={faUser}/></h1>
            {data.length>0 && <label className="name">{data[0].username}</label>}
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
export default Dashboard;