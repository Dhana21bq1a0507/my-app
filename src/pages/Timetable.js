import React, { useState, useEffect } from "react";
import "./Dash.css";
import Dashboard from "../Components/Dashboard";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTable,faDownload} from "@fortawesome/free-solid-svg-icons";
const Timetable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3300/oritable")
      .then((res) => res.json())
      .then((data1) => setData(data1))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
   
    <div>
      <Dashboard>
       <div className="div2"><h2  style={{color:"white",marginTop:"5px",paddingTop:"10px",fontSize:"30px",paddingLeft:"20px"}} ><FontAwesomeIcon icon={faTable} style={{fontSize:"40px"}}/>&nbsp;&nbsp;Time Table Chart</h2></div>
      <h3 style={{fontSize:"25px",color:"#0A4C66",marginLeft:"30px"}}>Explore your timetable effortlessly to stay informed about 
upcoming classes and timings</h3>
      <table cellPadding={"5px"} border={1} align="center" className="timetableori" style={{borderColor:"#3B92B5",borderCollapse:"collapse",borderWidth:"5px"}}>
        <tbody>
          <tr>
            <th colSpan={7} width={"80px"} height={"30px"} style={{backgroundColor:"#3B92B5",color:"white"}}>Academic Year:2023-2024</th>
          </tr>
          <tr>
            <td width={"80px"} height={"30px"}></td>
            <th style={{color:"#0A4C66"}}>8:20-9:15</th>
            <th style={{color:"#0A4C66"}}>9:15-10:10</th>
            <th style={{color:"#0A4C66"}}>10:20-11:15</th>
            <th style={{color:"#0A4C66"}}>11:15-12:10</th>
            <th style={{color:"#0A4C66"}}>12:50-1:40</th>
            <th style={{color:"#0A4C66"}}>1:40-2:25</th>
          </tr>
          <tr >
            <td width={"80px"} height={"30px"} style={{color:"#0A4C66"}}>Monday</td>
           {data.length > 0 &&
              JSON.parse(data[0]["mon"])["8:20-9:15"]!== undefined
                ? <td>{JSON.parse(data[0]["mon"])["8:20-9:15"]}</td>
                : <td></td>}
                {data.length > 0 &&
              JSON.parse(data[0]["mon"])["9:15-10:10"]!== undefined
                ? <td>{JSON.parse(data[0]["mon"])["9:15-10:10"]}</td>
                : <td></td>}
             {data.length > 0 &&
              JSON.parse(data[0]["mon"])["10:20-11:15"]!== undefined
                ? <td>{JSON.parse(data[0]["mon"])["10:20-11:15"]}</td>
                : <td></td>}
                {data.length > 0 &&
              JSON.parse(data[0]["mon"])["11:15-12:10"]!== undefined
                ? <td>{JSON.parse(data[0]["mon"])["11:15-12:10"]}</td>
                : <td></td>}
            
            {data.length > 0 &&
              JSON.parse(data[0]["mon"])["12:50-1:40"]!== undefined
                ? <td>{JSON.parse(data[0]["mon"])["12:50-1:40"]}</td>
                : <td></td>}
                {data.length > 0 &&
              JSON.parse(data[0]["mon"])["1:40-2:25"]!== undefined
                ? <td>{JSON.parse(data[0]["mon"])["1:40-2:25"]}</td>
                : <td></td>}
          </tr>
          <tr>
            <td width={"80px"} height={"30px"} style={{color:"#0A4C66"}}>Tuesday</td>
           {data.length > 0 &&
              JSON.parse(data[0]["tue"])["8:20-9:15"]!== undefined
                ? <td>{JSON.parse(data[0]["tue"])["8:20-9:15"]}</td>
                : <td></td>}
                {data.length > 0 &&
              JSON.parse(data[0]["tue"])["9:15-10:10"]!== undefined
                ? <td>{JSON.parse(data[0]["tue"])["9:15-10:10"]}</td>
                : <td></td>}
             {data.length > 0 &&
              JSON.parse(data[0]["tue"])["10:20-11:15"]!== undefined
                ? <td>{JSON.parse(data[0]["tue"])["10:20-11:15"]}</td>
                : <td></td>}
                {data.length > 0 &&
              JSON.parse(data[0]["tue"])["11:15-12:10"]!== undefined
                ? <td>{JSON.parse(data[0]["tue"])["11:15-12:10"]}</td>
                : <td></td>}
            
            {data.length > 0 &&
              JSON.parse(data[0]["tue"])["12:50-1:40"]!== undefined
                ? <td>{JSON.parse(data[0]["tue"])["12:50-1:40"]}</td>
                : <td></td>}
                {data.length > 0 &&
              JSON.parse(data[0]["tue"])["1:40-2:25"]!== undefined
                ? <td>{JSON.parse(data[0]["tue"])["1:40-2:25"]}</td>
                : <td></td>}
          </tr>
          <tr>
            <td width={"80px"} height={"30px"} style={{color:"#0A4C66"}}>wednesday</td>
           {data.length > 0 &&
              JSON.parse(data[0]["wed"])["8:20-9:15"]!== undefined
                ? <td>{JSON.parse(data[0]["wed"])["8:20-9:15"]}</td>
                : <td></td>}
                {data.length > 0 &&
              JSON.parse(data[0]["wed"])["9:15-10:10"]!== undefined
                ? <td>{JSON.parse(data[0]["wed"])["9:15-10:10"]}</td>
                : <td></td>}
             {data.length > 0 &&
              JSON.parse(data[0]["wed"])["10:20-11:15"]!== undefined
                ? <td>{JSON.parse(data[0]["wed"])["10:20-11:15"]}</td>
                : <td></td>}
                {data.length > 0 &&
              JSON.parse(data[0]["wed"])["11:15-12:10"]!== undefined
                ? <td>{JSON.parse(data[0]["wed"])["11:15-12:10"]}</td>
                : <td></td>}
            
            {data.length > 0 &&
              JSON.parse(data[0]["wed"])["12:50-1:40"]!== undefined
                ? <td>{JSON.parse(data[0]["wed"])["12:50-1:40"]}</td>
                : <td></td>}
                {data.length > 0 &&
              JSON.parse(data[0]["wed"])["1:40-2:25"]!== undefined
                ? <td>{JSON.parse(data[0]["wed"])["1:40-2:25"]}</td>
                : <td></td>}
          </tr>
          <tr>
            <td width={"80px"} height={"30px"} style={{color:"#0A4C66"}}>Thursday</td>
           {data.length > 0 &&
              JSON.parse(data[0]["thu"])["8:20-9:15"]!== undefined
                ? <td>{JSON.parse(data[0]["thu"])["8:20-9:15"]}</td>
                : <td></td>}
                {data.length > 0 &&
              JSON.parse(data[0]["thu"])["9:15-10:10"]!== undefined
                ? <td>{JSON.parse(data[0]["thu"])["9:15-10:10"]}</td>
                : <td></td>}
             {data.length > 0 &&
              JSON.parse(data[0]["thu"])["10:20-11:15"]!== undefined
                ? <td>{JSON.parse(data[0]["thu"])["10:20-11:15"]}</td>
                : <td></td>}
                {data.length > 0 &&
              JSON.parse(data[0]["thu"])["11:15-12:10"]!== undefined
                ? <td>{JSON.parse(data[0]["thu"])["11:15-12:10"]}</td>
                : <td></td>}
            
            {data.length > 0 &&
              JSON.parse(data[0]["thu"])["12:50-1:40"]!== undefined
                ? <td>{JSON.parse(data[0]["thu"])["12:50-1:40"]}</td>
                : <td></td>}
                {data.length > 0 &&
              JSON.parse(data[0]["thu"])["1:40-2:25"]!== undefined
                ? <td>{JSON.parse(data[0]["thu"])["1:40-2:25"]}</td>
                : <td></td>}
          </tr>
          <tr>
            <td width={"80px"} height={"30px"} style={{color:"#0A4C66"}}>Friday</td>
           {data.length > 0 &&
              JSON.parse(data[0]["fri"])["8:20-9:15"]!== undefined
                ? <td>{JSON.parse(data[0]["fri"])["8:20-9:15"]}</td>
                : <td></td>}
                {data.length > 0 &&
              JSON.parse(data[0]["fri"])["9:15-10:10"]!== undefined
                ? <td>{JSON.parse(data[0]["fri"])["9:15-10:10"]}</td>
                : <td></td>}
             {data.length > 0 &&
              JSON.parse(data[0]["fri"])["10:20-11:15"]!== undefined
                ? <td>{JSON.parse(data[0]["fri"])["10:20-11:15"]}</td>
                : <td></td>}
                {data.length > 0 &&
              JSON.parse(data[0]["fri"])["11:15-12:10"]!== undefined
                ? <td>{JSON.parse(data[0]["fri"])["11:15-12:10"]}</td>
                : <td></td>}
            
            {data.length > 0 &&
              JSON.parse(data[0]["fri"])["12:50-1:40"]!== undefined
                ? <td>{JSON.parse(data[0]["fri"])["12:50-1:40"]}</td>
                : <td></td>}
                {data.length > 0 &&
              JSON.parse(data[0]["fri"])["1:40-2:25"]!== undefined
                ? <td>{JSON.parse(data[0]["fri"])["1:40-2:25"]}</td>
                : <td></td>}
          </tr>
          <tr>
          <td width={"80px"} height={"30px"} style={{color:"#0A4C66"}}>Saturday</td>
          {data.length > 0 &&
              JSON.parse(data[0]["sat"])["8:20-9:15"]!== undefined
                ? <td>{JSON.parse(data[0]["sat"])["8:20-9:15"]}</td>
                : <td></td>}
                {data.length > 0 &&
              JSON.parse(data[0]["sat"])["9:15-10:10"]!== undefined
                ? <td>{JSON.parse(data[0]["sat"])["9:15-10:10"]}</td>
                : <td></td>}
                 {data.length > 0 &&
              JSON.parse(data[0]["sat"])["10:20-11:15"]!== undefined
                ? <td>{JSON.parse(data[0]["sat"])["10:20-11:15"]}</td>
                : <td></td>}
                {data.length > 0 &&
              JSON.parse(data[0]["sat"])["11:15-12:10"]!== undefined
                ? <td>{JSON.parse(data[0]["sat"])["11:15-12:10"]}</td>
                : <td></td>}
                 {data.length > 0 &&
              JSON.parse(data[0]["sat"])["12:50-1:40"]!== undefined
                ? <td>{JSON.parse(data[0]["sat"])["12:50-1:40"]}</td>
                : <td></td>}
               {data.length > 0 &&
              JSON.parse(data[0]["sat"])["1:40-2:25"]!== undefined
                ? <td>{JSON.parse(data[0]["sat"])["1:40-2:25"]}</td>
                : <td></td>}
          </tr>
        </tbody>
      </table>
      <button  style={{marginLeft:"500px",marginTop:"20px",width:"170px",height:"50px"}}><span><FontAwesomeIcon icon={faDownload}/></span>&nbsp;&nbsp;Download</button>
      </Dashboard>
    </div>
  );
};

export default Timetable;
