import React from 'react'
import './loginhighlight.css'

const Loginhighlight = () => {
  return (
  
   <div className="lohcontainer">
  <div className="lohwelcome">
    <h1>Welcome</h1>
    <p>Introducing Broker Operating System</p>
  </div>
  <div className="lohsection">
    <h2>Login</h2>
    <form>
      <div className="lohgroup">
        <label htmlFor="username">Username</label>
        <input type="text" id="lohusername" name="username" required />
      </div>
      <div className="lohgroup">
        <label htmlFor="password">Password</label>
        <input type="password" id="lohpassword" name="password" required />
      </div>
      <button type="submit">Login</button>
    </form>
    <div className="help-links">
      <a href="  ">Forgot</a>
      <a href="   ">Help</a>
    </div>
  </div>
</div>



  )
}

export default Loginhighlight