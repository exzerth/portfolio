import React from "react";
import avatarImg from "../images/avatar.jpeg";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-container">
        <div className="intro-box">
          <h2>FRONTEND DEVELOPER</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras turpis
            justo, consequat a arcu et, lobortis tempor ex. Sed sed scelerisque
            orci.
          </p>
          <button>Download CV</button>
        </div>
        <div className="image-box">
          <img className="avatar" src={avatarImg} alt="avatar_image" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
