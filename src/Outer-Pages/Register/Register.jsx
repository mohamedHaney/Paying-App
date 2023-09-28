import "./register.css";
import { Link } from "react-router-dom";
import Navbar from "../../components/navBar/Navbar"
import React from "react";
import bgImg from "../Register/reg.jpg";
function Register() {
  
  return (
    <section className="reg-body">
      <Navbar/>
      <div className="register">
        <div className="col-1">
          <h2>Sign Up</h2>
          <span>Register and enjoy the service</span>
          <form
            id="form"
            className="flex flex-col"
          >
            <input
              type="text"
              placeholder="username"
              required
            />
            <input
              type="text"
              placeholder="password"
              required
            />
            <input
              type="text"
              placeholder="confirm password"
              required
            />
            <input
              type="text"
              placeholder="mobile number"
              required
            />
            <Link to={"/confirmation-code"} className="btn">Register</Link>
            <Link to={"/login"} className="sign-in">you are already have account? <br /> <span className="span">Login now</span></Link>
          </form>
        </div>
        <div className="col-2">
          <img src={bgImg} alt="" />
        </div>
      </div>
    </section>
  );
}
export default Register;