import React from "react";
import "../Pages/Hero.css";
import shoe from "../Assets/shoe_image.png";
import flip from "../Assets/flipkart.png";
import amz from "../Assets/amazon.png";

const Hero = () => {
  return (
    <div className="hero-main main-nav">
      <div className="hero-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES. YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>
        <div className="hero-button">
          <button className="first-btn">Shop Now</button>
          <button className="second-btn" >Category</button>
        </div>
        <div className="hero-web">
          <p>Also Available On</p>
          <div className="brand-icon">
            <img src={flip} alt="Flipkart" />
            <img src={amz} alt="Amazon" />
          </div>
        </div>
      </div>
      <div className="hero-image">
        <img src={shoe} alt="Shoe" />
      </div>
    </div>
  );
};

export default Hero;
