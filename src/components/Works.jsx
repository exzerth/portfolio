import React from "react";
import "../css/works.css";
import WorkCards from "./WorkCards";

const Works = () => {
  return (
    <div id="works" className="works">
      <h4 className="work-title">LET'S GET YOU ACQUAINTED</h4>
      <h1 className="work-subtitle">AMAZING WORKS</h1>
      <div className="works-container">
        <WorkCards/>
        <WorkCards/>
        <WorkCards/>
      </div>
    </div>
  );
};

export default Works;
