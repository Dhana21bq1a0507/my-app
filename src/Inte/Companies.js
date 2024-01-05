import React from 'react'
import styled from 'styled-components'

function Companies() {
  return (
    <div>
      <h1 style={{marginTop: 70,padding:30,color: "white"}}><b>Top Companies Trust Us</b></h1>
      <Blur style={{
            background: "orange",
            top: "90rem",
            width: "35rem",
            height: "10rem",
            left: "30rem",
          }}>

      </Blur>
      <Company>
        <img src='Images/amazon.png' style={{width: 200,height: 100,marginTop: 30}}></img>
        <img src='Images/jio.png' style={{width: 120,height: 100,marginTop: 30}}></img>
        <img src='Images/itc.png' style={{width: 100,height: 100,marginTop: 30}}></img>
        <img src='Images/oyo.png' style={{width: 200,height: 200,marginTop: -10}}></img>
        <img src='Images/tcs.jpg' style={{width: 120,height: 100,marginTop: 30}}></img>
        <img src='Images/tesla.jpg' style={{width: 160,height: 120,marginTop: 30}}></img>
      </Company>
      <Rating>
           <img src='Images/rating.png'></img>
      </Rating>
    </div>
  )
}

export default Companies

const Company=styled.div`
   display:flex;
   justify-content:space-evenly;
`
const Rating=styled.div`
   background-color:rgba(0,0,0,0.2);
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