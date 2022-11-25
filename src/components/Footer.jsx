import React from "react";
import "../css/footer.css";
import twitterImg from "../images/twitter.png";
import githubImg from "../images/github.png";
import linkedInImg from "../images/linkedin.png";
import mailImg from "../images/at.png";

const Footer = () => {
    return (
        <footer>
            <h1 className="footer-title">HAVE A PROJECT?</h1>
            <h1 className="footer-subtitle">LET'S TALK ABOUT IT!</h1>
            <div className="socials-container">
                <div className="socials-box">
                    <img src={twitterImg} alt="" />
                </div>
                <div className="socials-box">
                    <img src={githubImg} alt="" />
                </div>
                <div className="socials-box">
                    <img src={linkedInImg} alt="" />
                </div>
                <div className="socials-box">
                    <img src={mailImg} alt="" />
                </div>
            </div>
            <p>Made with ❤️ by 3ohh9</p>
        </footer>
    )
}

export default Footer