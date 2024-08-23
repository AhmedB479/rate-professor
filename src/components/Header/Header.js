import React, { useState } from "react";
import "./Header.css";
import logo from "../../Image/logo.png";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header className="header">
      <div className="logo">
        <img
          src={logo}
          alt="AI"
          className="logo-img"
          style={{
            width: "100px",
          }}
        />
        <h1>AI Rate My Professor</h1>
      </div>
      <button className="nav-toggle" onClick={toggleNav}>
        ☰
      </button>
      <nav className={`nav ${isNavOpen ? "active" : ""}`}>
        <ul className="nav-list">
          <li className="nav-item">
            <a href="#about">About</a>
          </li>
          <li className="nav-item">
            <a href="#features">Features</a>
          </li>
          <li className="nav-item">
            <a href="#testimonials">Testimonials</a>
          </li>
          <li className="nav-item">
            <a href="#signup" className="cta-button secondary">
              Sign Up
            </a>
          </li>
          <li className="nav-item">
            <a href="#login">Login</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
