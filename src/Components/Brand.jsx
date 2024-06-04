import React, { useState } from "react";
import "../Pages/Brand.css";
import logo from "../Assets/brand_logo.png";
import { GiHamburgerMenu } from "react-icons/gi";

const Brand = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);

  return (
    <div className="main">
      <nav className="main-nav">
        <div className="header">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <div className={showMediaIcons ? "mobile-menu-link " : "content"}>
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#location">Location</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
          <div className="button">
            <button className="button-1">Login</button>
          </div>
          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Brand;
