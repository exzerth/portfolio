import React from "react";
import "../css/hero.css";
import avatarImg from "../images/avatar.jpeg";

const Hero = () => {
  return (
    <div id="about" className="hero">
      <div className="hero-container">
        <div className="intro-box">
          <h2>FRONTEND DEVELOPER</h2>
          <p>
            Hi, My name is Osinaya Oluwadamilare. I'm a Frontend Web Developer from Lagos, Nigeria. 
            I have a commitment to making pixel perfects web apps with React, The most popular Javascript Library.
            I'd love to work with you! 🙂
          </p>
          <a href="https://drive.google.com/file/d/1SfPID_OIMU8PoWPnOtNy1O9DBFiRSps8/view?usp=sharing" target="blank">Download CV</a>
        </div>
        <div className="image-box">
          <img className="avatar" src={avatarImg} alt="avatar_image" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
