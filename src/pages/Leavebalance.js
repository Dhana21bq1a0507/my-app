import React, { useState,useEffect } from "react";
import { PieChart, Pie, Cell, Tooltip,Legend } from "recharts";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import profile from './pro.jpg';
import {faMoon} from "@fortawesome/free-solid-svg-icons";

import {faPieChart,faFile,faBell,faUser, faCalendar,faCaretRight} from "@fortawesome/free-solid-svg-icons";

    const COLORS = ["#6CE5E8", "#31356E", "#41B8D5", "#2D8BBA", "#2F5F98"];
   
const LeaveBalance = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [data,setdata]=useState([])
  const [leavetypes,setleavetypes]=useState([])
  const [data1,setdata1]=useState([])
    const toggleDropdown = () => {
      setDropdownVisible(!isDropdownVisible);
    };
  
    const closeDropdown = (event) => {
      if (!event.target.matches('#dropdown-icon')) {
        setDropdownVisible(false);
      }
    };

      const pieData = [
        {
          name: "Annual Leave Balance",
          value: 42.6,
        },
        {
          name: "Casual Leave Balance",
          value: 25.5,
        },
        {
          name: "Medical Leave Balance",
          value: 10.6,
        },
        {
          name: "OD Leave Balance",
          value: 19.1,
        },
        {
          name: "Other Leave Balance",
          value: 2.1,
        },
      ];
    
      const CustomTooltip = ({ active, payload, label }) => {
        if (active) {
          return (
            <div
              className="custom-tooltip"
              style={{
                backgroundColor: "#ffff",
                padding: "5px",
                border: "1px solid #cccc",
              }}
            >
              <label>{`${payload[0].name} : ${payload[0].value}%`}</label>
            </div>
          );
        }
        return null;
      };
      const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, value, index }) => {
        const RADIAN = Math.PI / 180;
        const radius = 90 + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);
    
        return (
          <text x={x} y={y} fill="#000" textAnchor={x > cx ? "start" : "end"} dominantBaseline="central">
          <tspan x={x} dy="1em">{pieData[index].name}</tspan>
    <tspan x={x} dy="1em">{`${(value * 100).toFixed(2)}%`}</tspan>

          </text>
        );
      };
      useEffect(()=>{
        fetch("http://localhost:3300/teacherleavehistory")
        .then(res => res.json())
        .then(data1 => setdata(data1))
        .catch((err)=>{
            console.log(err);
      
        })
          
        },[]);
        useEffect(()=>{
          fetch("http://localhost:3300/allleavetypes")
          .then(res => res.json())
          .then(data1 => setdata1(data1))
          .catch((err)=>{
              console.log(err);
        
          })
            
          },[]);
        const leavedetails = () => {
          if (data.length > 0 && data1.length>0 ) {
            return data.map((item, index) => {
              if (item.leave) {
                const res = item.leave.split(',');
                res.pop();
                return res.map((leaveItem, leaveIndex) => {
                  const a = leaveItem.split(':');
                  return (
                    <tr key={`${index}-${leaveIndex}`}>
                      <td style={{ width: "16rem", borderLeft: "0.2rem solid #3B92B5", height: "3.5rem", borderBottom: "0.2rem solid #3B92B5", fontSize: "1.5rem", color: "#3B92B5", textAlign: "center" }}>{a[0].replace('{', '')}</td>
                      <td style={{ width: "14rem", height: "3.5rem", borderBottom: "0.2rem solid #3B92B5", fontSize: "1.5rem", color: "#3B92B5", textAlign: "center" }}>{a[0].replace('{', '')===data1[leaveIndex].leavetype && data1[leaveIndex].defaultallowance}</td>
                      <td style={{ width: "14rem", height: "3.5rem", borderBottom: "0.2rem solid #3B92B5", fontSize: "1.5rem", color: "#3B92B5", textAlign: "center" }}>{a[1]}</td>
                      <td style={{ width: "14rem", borderRight: "0.2rem solid #3B92B5", height: "3.5rem", borderBottom: "0.2rem solid #3B92B5", fontSize: "1.5rem", color: "#3B92B5", textAlign: "center" }}>{a[0].replace('{', '')===data1[leaveIndex].leavetype && parseInt(data1[leaveIndex].defaultallowance)-parseInt(a[1])}</td>
                  
                    </tr>
                  );
                });
              }
              return null;
            });
          }
        
          return null;
        };
        
          /*return data.map((item,index)=>(
              <tr key={index}>
                  <td style={{width:"18rem",borderLeft:"0.2rem solid #3B92B5",height:"3.5rem",borderBottom:"0.2rem solid #3B92B5",fontSize:"1.5rem",color:"#3B92B5",textAlign:"center"}}></td>
                  <td style={{width:"18rem",height:"3.5rem",borderBottom:"0.2rem solid #3B92B5",fontSize:"1.5rem",color:"#3B92B5",textAlign:"center"}}></td>
                  <td style={{width:"18rem",borderRight:"0.2rem solid #3B92B5",height:"3.5rem",borderBottom:"0.2rem solid #3B92B5",fontSize:"1.5rem",color:"#3B92B5",textAlign:"center",textDecoration:"underline"}}></td>
             
              </tr>
          ))*/
      
      return (
        <div style={{width:"90rem",height:"40rem",flexDirection:"row"}}>
             <div className="firstdiv"><p style={{fontSize:"40px",paddingTop:"1.0rem",color:"white",fontFamily:"-moz-initial",marginTop:"1rem",marginLeft:"1rem",display:"flex"}}><FontAwesomeIcon icon={faPieChart}/>&nbsp;Leave Balance
             <div className="dropdown-container" onClick={closeDropdown} >
      <img src={profile} alt="Dropdown Icon" onClick={toggleDropdown} id="dropdown-icon" style={{width:"4.5rem",height:"3.5rem",borderRadius:"10rem"}} />
      <div style={{marginLeft:"-3rem"}}className={`dropdown-content ${isDropdownVisible ? 'show' : ''}`}>
        <a href="#" style={{paddingRight:"5rem"}}>Dashboard</a>
        <div style={{width:"12.5rem",height:"0.15rem",background:"#206885"}}></div>
        <a href="#" style={{}}>Dark mode <span style={{paddingLeft:"1.8rem"}}><FontAwesomeIcon
        icon={faMoon}
        className="icon"
        style={{ color: '#3B92B5',width:"2rem",height:"2rem" }}
        onClick={toggleDropdown}
      /></span></a>
        <div style={{width:"12.5rem",height:"0.15rem",background:"#206885"}}></div>
        <a href="#" style={{paddingRight:"7rem"}}>Logout</a>
      
    </div>
    
</div></p></div>
   <div style={{display:"flex"}}>
    <div style={{display:"flex",flexDirection:"column",height:"30rem"}}>
    <h1 style={{color:"#0A4C66",fontSize:"1.5rem",marginLeft:"10rem"}}>Teacher Leave Balances Distribution</h1>
            <PieChart width={700} height={380} style={{marginTop:"-2.5rem"}}>
              
          <Pie
            data={pieData}
            color="#000000"
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={120}
            fill="#8884d8"
            labelLine={false}
            label={renderCustomizedLabel}
          >
           
            {pieData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip content={<CustomTooltip />} />
        </PieChart>
        </div>
        <div style={{display:"flex",flexDirection:"column",height:"30rem"}}>
        <h1  style={{color:"#0A4C66",fontSize:"1.5rem",marginLeft:"15rem"}}>Leave Utilization Overview</h1>
        <PieChart width={700} height={380} style={{marginTop:"-2.5rem"}}>
          <Pie
            data={pieData}
            color="#000000"
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={120}
            fill="#8884d8"
            labelLine={false}
            label={renderCustomizedLabel}
          >
            {pieData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip content={<CustomTooltip />} />
         
        </PieChart>
        </div>
        </div>
        <div style={{display:"flex",marginLeft:"10rem"}}>
       {/*     <FontAwesomeIcon icon={faCalendar} style={{marginTop:"0.2rem",fontSize:"2rem",color:"#3B92B5",marginTop:"8rem"}} />
        <div className='Tabled2'>
            <select style={{width:"12rem",height:"2rem",border:"none",color:"#3B92B5",fontSize:"1.2rem",marginTop:"8rem",marginRight:"3rem"}}>
                    <option defaultValue={true}>Select Month</option>
                    <option>JANUARY</option>
                    <option>FEBRUARY</option>
                    <option>MARCH</option>
                    <option>APRIL</option>
                    <option>MAY</option>
                    <option>JUNE</option>
                    <option>JULY</option>
                    <option>AUGUST</option>
                    <option>SEPTEMBER</option>
                    <option>OCTOBER</option>
                    <option>NOVEMBER</option>
                    <option>DECEMBER</option>
            </select>
            </div>*/}
              <div className='Tabled3'>
              <table style={{borderCollapse:"collapse",marginTop:"0rem",overflow:"auto",marginLeft:"3rem"}}>
                     
                            
                     <tr>
                                       <th style={{width:"15rem",height:"3.5rem",fontSize:"1.5rem",backgroundColor:"#3B92B5",color:"white"}}>Leave Type</th>
                             <th style={{width:"10rem",height:"3.5rem",fontSize:"1.5rem",backgroundColor:"#3B92B5",color:"white"}}>Default Allowance</th>
                             <th style={{width:"10rem",height:"3.5rem",fontSize:"1.5rem",backgroundColor:"#3B92B5",color:"white"}}>LeaveBalance</th>
                             <th style={{width:"10rem",height:"3.5rem",fontSize:"1.5rem",backgroundColor:"#3B92B5",color:"white"}}>LeaveConsumption</th>
                          
                                 </tr>
                                 
                                 {leavedetails()}
                             </table>
            </div>
            </div>
        </div>
        
        
            );

    
    
            }


export default LeaveBalance;