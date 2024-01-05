import React from 'react'
import styled from 'styled-components'

function Newsletter() {
  return (
    <News style={{ marginTop: 100 }}>
          <br></br><br></br>
          <h1><b>Subscribe to Our NewsLetter</b></h1>
          <p style={{ marginTop: 10 }}>Enter your email address to register to our newsletter subscription!</p>
          <input type="email" placeholder='Email' style={{ width: 740, height: 40 }}></input>
          <br></br><br></br>
          <button style={{ height: 30, width: 70, background: "rgb(1,50,32,0.8)", color: 'white' }}>Send</button>
          <br></br><br></br><br></br>
          <Connect>
             <h5><b>Connect us at</b></h5><hr></hr>
             <a href='https://www.instagram.com/'><img src='Images/insta.webp' style={{width:40,height:40,marginLeft:20}}></img></a>
             <a href='https://twitter.com/i/flow/login'><img src='Images/twitter.webp' style={{width:40,height:40,marginLeft:20}}></img></a>
             <a href='https://in.linkedin.com/'><img src='Images/linkedin.png' style={{width:40,height:40,marginLeft:20}}></img></a>
          </Connect>
          <br></br><br></br><br></br>
      </News>
      
  )
}

export default Newsletter

const News=styled.div`
    
    background-color:rgb(1,50,32,0.2);

`
const Connect=styled.div`
   display:flex;
   align-items:center;
   justify-content:center;
`