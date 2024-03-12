import React, { useState, useEffect } from "react";
import "./Admindash.css";
import Dashboard from "../Components/Dashboard";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTable, faDownload } from "@fortawesome/free-solid-svg-icons";
import { type } from "@testing-library/user-event/dist/type";
import AdminDash from "../Components/AdminDash";

const Admintimetable= () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3300/oritable")
      .then((res) => res.json())
      .then((data1) => setData(data1))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  
  const renderTableCell = (day, timeSlot) => {
    if (data.length > 0 && data[0].Teacher && data[0].Teacher[day]) {
      const dayDataString = data[0].Teacher[day];
     console.log(dayDataString)
      try {
    
      const keyValuePairs = dayDataString.match(/"([^"]+)":\s*"([^"]+)"/g);

      const resultObject = {};
      if (keyValuePairs) {
        keyValuePairs.forEach(pair => {
          const [key, value] = pair.split('": "').map(item => item.replace(/"/g, ''));
          resultObject[key] = value;
        });
      }

        if (resultObject && resultObject[timeSlot] !== "undefined") {
          console.log(resultObject[timeSlot])
          const value = resultObject[timeSlot];
          console.log('value:', value);
          return <td key={timeSlot}>{value}</td>;
        } else {
          return <td></td>
        }
      } catch (error) {
        console.error(`Error parsing JSON for ${day} - ${timeSlot}`, error);
      }
    } else {
      console.log('Invalid data structure or missing data for day:', day);
    }
  };
  
  
  return (
    <div>
      <AdminDash>
        <div className="div2">
          <h2 style={{ color: "white", marginTop: "5px", paddingTop: "10px", fontSize: "30px", paddingLeft: "20px" }}>
            <FontAwesomeIcon icon={faTable} style={{ fontSize: "40px" }} />&nbsp;&nbsp;Time Table Chart
          </h2>
        </div>
        <h3 style={{ fontSize: "25px", color: "#0A4C66", marginLeft: "30px" }}>
          Explore your timetable effortlessly to stay informed about upcoming classes and timings
        </h3>
        <table cellPadding={"5px"} border={1} align="center" className="timetableori" style={{ borderColor: "#3B92B5", borderCollapse: "collapse", borderWidth: "5px" }}>
          <tbody>
            <tr>
              <th colSpan={7} width={"80px"} height={"30px"} style={{ backgroundColor: "#3B92B5", color: "white" }}>Academic Year:2023-2024</th>
            </tr>
            <tr>
              <td width={"80px"} height={"30px"}></td>
              <th style={{ color: "#0A4C66" }}>8:20-9:15</th>
              <th style={{ color: "#0A4C66" }}>9:15-10:10</th>
              <th style={{ color: "#0A4C66" }}>10:20-11:15</th>
              <th style={{ color: "#0A4C66" }}>11:15-12:10</th>
              <th style={{ color: "#0A4C66" }}>12:50-1:40</th>
              <th style={{ color: "#0A4C66" }}>1:40-2:25</th>
            </tr>
            {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
              <tr key={day}>
                <td width={"80px"} height={"30px"} style={{ color: "#0A4C66" }}>{day.charAt(0).toUpperCase() + day.slice(1)}</td>
                {["8:20-9:15", "9:15-10:10", "10:20-11:15", "11:15-12:10","12:50-1:40","1:40-2:25"].map((timeSlot) => (
                  renderTableCell(day, timeSlot)
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <button style={{ marginLeft: "500px", marginTop: "20px", width: "170px", height: "50px" }}>
          <span><FontAwesomeIcon icon={faDownload} /></span>&nbsp;&nbsp;Download
        </button>
      </AdminDash>
    </div>
  );
};

export default Admintimetable;
