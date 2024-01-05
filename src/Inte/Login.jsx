import React from 'react';
import './Login.css';

const Login = () => (
  <div>
    <h2>Login Page</h2>
    <div className="div1">
      <div className="div2">
        <pre>
          <p style={{ fontSize: '50px', color: 'white' }}>Fly makes you Faster</p>
        </pre>
        <p style={{ fontSize: '32px', color: 'white' }}>Login to your account</p>
        <br />
        <br />
        <br />
        <br />
        <input type="submit" id="b2" />
      </div>
      <div className="div3">
        <center>
          <h2>Login To your Account</h2>
        </center>
        <br />
        <input type="email" placeholder="Email" required /><br />
        <br />
        <br />
        <input type="password" id="pass" name="password" placeholder="Password" required />
        <br/>
        <br/>
        <br/>
        <br/>
        <input type="submit" id="b1" />
      </div>
    </div>
  </div>
);

export default Login;