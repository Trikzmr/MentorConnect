import React, { useState } from 'react';
import './loginbasic.css';

const LoginBasic = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: ""
  });

  const onChangeUsername = (e) => {
    setLoginData({
      ...loginData,
      email: e.target.value
    });
  }

  const onChangePassword = (e) => {
    setLoginData({
      ...loginData,
      password: e.target.value
    });
  }

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8008/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(loginData)
      });

      const data = await response.json();

      if (response.ok) {
        // Login successful, save the token (e.g., in localStorage)
        localStorage.setItem('token', data.token);
        alert('Login successful!');
        // Redirect to profile or dashboard
      } else {
        // Handle login failure
        alert(data.message || 'Login failed!');
      }
    } catch (error) {
      console.error('Error during login:', error);
      alert('An error occurred. Please try again later.');
    }
  }

  return (
    <div id="lobwrapper">
      <div id="lobbox">
        <div id="lobtop_header">
          <h3>Login</h3>
          <h5>Sign in to continue to your profile page.</h5>
        </div>
        <div id="lobinputs">
          <form id="loblogin" onSubmit={onSubmit}>
            <div className="lobcontainer">
              <input
                type="text"
                name="username"
                id="lobusername"
                onChange={onChangeUsername}
                maxLength={50}
                size={30}
                placeholder="Username"
              /><br />
            </div>
            <div className="lobcontainer">
              <input
                type="password"
                name="password"
                onChange={onChangePassword}
                id="lobpassword"
                maxLength={50}
                size={30}
                placeholder="Password"
              /><br />
            </div>
            <div className="lobcontainer">
              <input type="submit" name="Submit" value="Login" />
            </div>
          </form>
          <div id="lobbottom">
            <a href=" ">Create an account</a>
            <a className="lobright_a" href=" ">Forgot password</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginBasic;
