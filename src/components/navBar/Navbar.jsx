import { useState } from "react";
import { Link } from "react-router-dom";
import { NavLink } from 'react-router-dom'
import './navbar.css'

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <Link to={"/"}>Logo</Link>
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
        {showNavbar?<i className="fa-solid fa-x"></i>:<i className="fa-solid fa-bars"></i>}
        </div>
        <div className={`nav-elements  ${showNavbar && 'active'}`}>
          <ul>
            <li>
              <NavLink to="/about">About Us</NavLink>
            </li>
            <li>
              <NavLink to="/how-it-works">How it Works</NavLink>
            </li>
            <li>
              <NavLink to="/help-and-support">Help & Support</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
            <li>
              <NavLink className={'active-login'} to="/login">Login</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar