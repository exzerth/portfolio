import React from "react";
import "../css/hero.css";
/* import avatarImg from "../images/avatar.jpeg"; */

const Hero = () => {
  return (
    <div id="about" className="hero">
      <div className="hero-container">
        <div className="intro-box">
          <h2>OSINAYA OLUDARE</h2>
          <p>
            Frontend developer committed to making pixel perfect web apps. <br /> I'd love to work with you! 🙂
          </p>
          {/* <a href="https://drive.google.com/file/d/1SfPID_OIMU8PoWPnOtNy1O9DBFiRSps8/view?usp=sharing" target="blank">Download CV</a> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
