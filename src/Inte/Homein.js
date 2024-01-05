import React from 'react'
import styled from 'styled-components'
import Intern from './Intern'

function Home() {
  return (
    <><><Find>
      <h1>Find Your Dream Internship At InternWave<br></br>🔥</h1>
    </Find><Photo>

        <img src='Images/main.png'></img>

        <img src='Images/main1.png'></img>

      </Photo></>
      <
      Blur style={{
            background: "#C1F5FF",
            top: "27rem",
            width: "21rem",
            height: "11rem",
            left: "-5rem",
          }}>

      </Blur>
      <Blur style={{ background: "rgb(238 210 255)" ,top: "7rem",
      width: "21rem",
      height: "11rem",
      left: "75rem",}}>

     </Blur>
     <Intern/>
     </>
  )
}

export default Home

const Photo=styled.div`
   margin-top:50px;
   display:flex;
   align-items:center;
   justify-content:center;
`
const Find=styled.div`
  color:orange;
  margin-top:50px;
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
filter: blur(32px);
`