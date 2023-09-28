import { useState } from "react";
import { Link } from "react-router-dom";
import { NavLink } from 'react-router-dom'
import './inner-nav.css'

const InnerNav = () => {
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  return (
    <nav className="inner-navbar">
      <div className="container">
          <div className="logo">
            <Link to={"/"} >Logo</Link>
          </div>
        <div className="input-search">
          <input type="text" placeholder="Search..." />
          <div className="search-icon">
          <i className="fa-solid fa-magnifying-glass"></i>
          </div>
          </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
        {showNavbar?<i className="fa-solid fa-x"></i>:<i className="fa-solid fa-bars"></i>}
        </div>
        <div className={`nav-elements  ${showNavbar && 'active'}`}>
          <ul>
            <li>
              <NavLink  to="/home">Home</NavLink>
            </li>
            <li>
              <NavLink to="/offers">Offers</NavLink>
            </li>
            <li>
              <NavLink to="/balance">Balance</NavLink>
            </li>
            <li>
              <NavLink to="/rewards">Rewards</NavLink>
            </li>
            <li>
            <NavLink className={"notifications"} to="/notifications"><i className="fa-regular fa-bell"></i></NavLink>
            </li>
            <li>
            <NavLink to={"/profile"}> <img src="https://img.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg?w=740&t=st=1695293986~exp=1695294586~hmac=13c799028891e098847f293b4fd8af731a0f505f71e8c9c20950f9e559e87d26" alt="" /> </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default InnerNav