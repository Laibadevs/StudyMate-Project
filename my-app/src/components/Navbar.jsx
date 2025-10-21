import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">StudyMate</h2>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><Link to="/signup">Sign Up</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
