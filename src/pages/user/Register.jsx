import { useState, useEfffect } from "react";
import './styles.css'
// import {bg} from './bg.svg'
const Register = () => {
  const [name, setName] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  return (
    <>    
    <div className="signup">
      <h2>Sign Up</h2>
      <h3>It's quick & simple</h3>
      <form className="form needs-validation">
        <div className="textbox">
          <input type="text" required />
          <label>Name</label>
          <span className="material-symbols-outlined"> account_circle </span>
        </div>
        <div className="textbox">
          <input type="text" required />
          <label>Email</label>
          <span className="material-symbols-outlined"> email </span>
        </div>
        <div className="textbox">
          <input type="text" required />
          <label>Mobile No.</label>
          <span className="material-symbols-outlined"> phone_android </span>
        </div>
        <div className="textbox">
          <input type="password" required />
          <label>Password</label>
          <span className="material-symbols-outlined"> key </span>
        </div>
        <div className="textbox">
          <input type="conf_password" required />
          <label>Confirm Password</label>
          <span className="material-symbols-outlined"> key </span>
        </div>
        <p >
          Signed up already?
          <a href="#" classNameName="m-2">Login here</a>
        </p>

        <button type="submit">
          Register
          <span className="material-symbols-outlined"> arrow_forward </span>
        </button>
      </form>
    </div>
    </>
  )
}

export default Register