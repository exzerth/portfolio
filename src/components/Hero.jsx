import React from "react";
import "../css/hero.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faLinkedinIn, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons'

const Hero = () => {
  return (
    <div className="mt-[2rem] text-owhite">
      <div className="hero-container flex justify-center items-end md:items-center">
        <div className=" pb-[1.5rem]">
          <div className="md:flex md:justify-between px-[1.5rem] md:px-[0] pt-[.6rem] pb-[1rem] lg:pb-0 text-center container mx-auto">
            <div className="md:pl-[24px] md:text-start"><span className="text-[20px] lg:text-[24px]">Hi!, I'm</span><br />
            <span className="text-[2.3rem] font-semibold font-headings leading-[2.9rem] text-center">OSINAYA OLUWADAMILARE</span>
            </div>
            <p className="md:pr-[24px] md:text-end font-normal text-[1.25rem] md:w-[50%] lg:text-[24px]">
              Frontend developer committed to making pixel perfect web apps. <br /> I'd love to work with you! 🙂
            </p>
            {/* <a href="https://drive.google.com/file/d/1SfPID_OIMU8PoWPnOtNy1O9DBFiRSps8/view?usp=sharing" target="blank">Download CV</a> */}
          </div>
          <div className="icon">
            <ul className="flex justify-center gap-4 lg:gap-6 self-center md:justify-end md:pr-[24px] text-[1.4rem] lg:text-[1.8rem]">
              <li><a href="https://twitter.com/3ohh9" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faTwitter} /></a></li>
              <li><a href="https://www.linkedin.com/in/osinaya-oludare-101218158/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedinIn}/></a></li>
              <li><a href="https://github.com/exzerth" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub}/></a></li>
              <li><a href="#ig"><FontAwesomeIcon icon={faInstagram}/></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
