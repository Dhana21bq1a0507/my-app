import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart, LinearScale, CategoryScale } from 'chart.js/auto';

// Register the required scales
Chart.register(LinearScale, CategoryScale);

const Leavehistory = () => {
  const chartData = {
    labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    datasets: [
      {
        label: "Leaves Consumed",
        data: [10, 8, 25, 12, 15, 16, 7, 4, 20, 20, 13, 10],
        backgroundColor: "#134563",
        borderColor: "#134563",
        borderWidth: 1,
        barThickness: 20, // Adjust this value to decrease/increase the width of bars
      },
    ],
  };

  const chartOptions = {
    scales: {
      y: {
        type: 'linear',
        beginAtZero: true,
        ticks: {
          color: '#0A4C66',
        }
      },
      x: {
        ticks: {
          color: '#0A4C66', // Set font color for x-axis labels
        },
      },
    },
    maintainAspectRatio: false,
  };

  return (
    <div style={{ border: "1rem solid #3B92B5", borderRadius: "1rem", display: "flex", flexDirection: "column",alignItems: "center" }}>
      <h2 style={{ paddingRight: "17rem", color: "#0A4C66", paddingTop: "0rem", paddingRight: "65rem" }}>Annual Leave Summary,2024</h2>
      <div style={{ maxWidth: "600px", margin: "auto", paddingTop: "2rem", paddingRight: "20rem" }}>
        <Bar data={chartData} options={chartOptions} style={{ background: "#D2FFF4", height: "20rem" }} />
      </div>
      <br></br>
      <br></br>
      

<div>
  <table style={{ borderCollapse: "collapse", border: "2px solid #3B92B5", width: "40rem", marginTop: "2rem", height: "6rem" }}>
    <tr>
      <th style={{ fontSize: "1.2rem", padding: "0.5rem", border: "1px solid #3B92B5" }}>Date</th>
      <th style={{ border: "1px solid #3B92B5" }}>Type</th>
      <th style={{ border: "1px solid #3B92B5" }}>Duration</th>
      <th style={{ border: "1px solid #3B92B5" }}>Status</th>
      <th style={{ border: "1px solid #3B92B5" }}>Comments</th>
    </tr>
    <tr>
      <td style={{ border: "1px solid #3B92B5" ,width:"8rem",height:"2.5rem"}}>2024-01-01</td>
      <td style={{ border: "1px solid #3B92B5" }}>Vacation</td>
      <td style={{ border: "1px solid #3B92B5" }}>1 day</td>
      <td style={{ border: "1px solid #3B92B5" }}>Approved</td>
      <td style={{ border: "1px solid #3B92B5" }}>Enjoyed a day off</td>
    </tr>
    <tr>
      <td style={{ border: "1px solid #3B92B5" ,width:"8rem",height:"2.5rem"}}>2024-01-01</td>
      <td style={{ border: "1px solid #3B92B5" }}>Vacation</td>
      <td style={{ border: "1px solid #3B92B5" }}>1 day</td>
      <td style={{ border: "1px solid #3B92B5" }}>Approved</td>
      <td style={{ border: "1px solid #3B92B5" }}>Enjoyed a day off</td>
    </tr>
    <tr>
      <td style={{ border: "1px solid #3B92B5" ,width:"8rem",height:"2.5rem"}}>2024-01-01</td>
      <td style={{ border: "1px solid #3B92B5" }}>Vacation</td>
      <td style={{ border: "1px solid #3B92B5" }}>1 day</td>
      <td style={{ border: "1px solid #3B92B5" }}>Approved</td>
      <td style={{ border: "1px solid #3B92B5" }}>Enjoyed a day off</td>
    </tr>
  </table>
</div>
  <br></br>
    </div>
  );
};

export default Leavehistory;