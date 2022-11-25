import React from "react";
import "../css/skills.css"
import jsImg from "../images/js.png";
import reactImg from "../images/react.png";
import nodeImg from "../images/nodejs.png";
import solImg from "../images/solidity.png";

const Skills = () => {
    return (
        <div className="skills">
            <div className="skills-container">
                <div className="skill-box">
                    <h3><img src={jsImg} alt="" /> Javascript</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div className="skill-box">
                    <h3><img src={reactImg} alt="" /> React</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div className="skill-box">
                    <h3><img src={solImg} alt="" /> Solidity</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div className="skill-box">
                    <h3><img src={nodeImg} alt="" /> NodeJS</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
            </div>
        </div>
    )
}

export default Skills;