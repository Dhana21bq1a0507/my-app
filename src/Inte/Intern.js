import React from 'react'
import styled from 'styled-components'
import More from './More'
import { useHistory,useNavigate } from 'react-router-dom';
import {Route,Routes,BrowserRouter} from "react-router-dom";
import { Link } from "react-router-dom";

function Intern() {

  const navigate = useNavigate();

  function handleButtonClick(){
    navigate("/more");
  
  }
  
  return (
    
    <><h1 id="latest" style={{marginTop: 70,padding: 30,color: "white"}}><b>Latest Internships</b></h1><Internship>
      <Blur style={{
            background: "orange",
            top: "47rem",
            width: "25rem",
            height: "10rem",
            left: "35rem",
          }}>

      </Blur>
      <Vernenest>
      <div class="card" style={{ width: 300,height:400 }}>
        <img src="Images/marketing.jpg" class="card-img-top" alt="..."></img><br></br>
        <div class="card-body">
          <h5>👨‍💻 Vervenest Technologies</h5>
          <h5>📍 Hi-tech City,Hyderabad</h5>
          <h5>💰 30,000/month    </h5>
          <h5>⏰ 3 Months</h5><br></br>
          <a href="#" class="btn btn-primary">Apply</a>
        </div>
      </div>
      </Vernenest>
      <Oyo>
      <div class="card" style={{ width: 300,height:400 }}>
        <img src="Images/hr.jpg" class="card-img-top" alt="..."></img>
        <div class="card-body">
          <h5>👨‍💻 App Labs</h5>
          <h5>📍 Gurgaon,Bangalore</h5>
          <h5>💰 50,000/month    </h5>
          <h5>⏰ 6 Months</h5><br></br>
          <a href="#" class="btn btn-primary">Apply</a>
        </div>
      </div>
      </Oyo>
      <Airtel>
      <div class="card" style={{ width: 300,height:400 }}>
        <img src="Images/airtel.webp" class="card-img-top" alt="..."></img>
        <div class="card-body">
          <h5>👨‍💻 Airtel Sales</h5>
          <h5>📍 New Delhi</h5>
          <h5>💰 10,000/month    </h5>
          <h5>⏰ 6 Months</h5><br></br>
          <a href="#" class="btn btn-primary">Apply</a>
        </div>
      </div>
      </Airtel>
      <Itc>
      <div class="card" style={{ width: 300,height:400 }}>
        <img src="Images/opportunities.jpg" class="card-img-top" alt="..."></img>
        <div class="card-body">
          <br></br>
          <h5><b>Don't Stop untill you suceed</b></h5>
          <br></br>
          <h6>Explore More Than 500 Internships</h6><br></br><br></br>
          <Link to="/more" component={More}><a class="btn btn-primary">More</a></Link>
          
        </div>
      </div>
      {/* <Routes><Route path="/more" component={More} /></Routes> */}
      
      </Itc>
    </Internship></>
  )
}

export default Intern

const Internship=styled.div`
   display:flex;
   align-items:center;
   justify-content:space-evenly;
   margin:50px;
   
   background-color:rgba(0,0,0,0.2);
   
`
const Vernenest=styled.div`
   margin:30px;
`
const Oyo=styled.div`
   margin:30px;
`
const Airtel=styled.div`
   margin:30px;
`
const Itc=styled.div`
   margin:30px;
`
const Blur=styled.div`
position: absolute;
width: 22rem;
height: 14rem;
border-radius: 50%;
background: #edd0ff;
filter: blur(212px);
z-index: -9;
top: -18%;
left: 56%;
filter: blur(62px);
`