import React from "react";
import layerOne from "../images/layerone.PNG";
import layerTwo from "../images/layertwo.PNG";
import layerThree from "../images/layerthree.PNG";
import ArrowForward from "@mui/icons-material/ArrowForward";

const Works = () => {
  return (
    <div className="works">
      <h4 className="work-title">LET'S GET YOU ACQUAINTED</h4>
      <h1 className="work-subtitle">AMAZING WORKS</h1>
      <div className="works-container">
        <div className="work-layer-one">
          <div className="layer-one-img">
            <img src={layerOne} alt="" />
          </div>
          <div className="layer-one-text">
            <h4>Sunshine Website</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
              turpis justo, consequat a arcu et, lobortis tempor ex. Sed sed
              scelerisque orci. Cras turpis justo, consequat a arcu et, lobortis
              tempor ex.
            </p>
            <button>
              Visit site
              <ArrowForward className="arrow-img" />
            </button>
          </div>
        </div>
        <div className="work-layer-two">
          <div className="layer-two-text">
            <h4>Sunshine Website</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
              turpis justo, consequat a arcu et, lobortis tempor ex. Sed sed
              scelerisque orci. Cras turpis justo, consequat a arcu et, lobortis
              tempor ex.
            </p>
            <button>
              Visit site
              <ArrowForward className="arrow-img" />
            </button>
          </div>
          <div className="layer-two-img">
            <img src={layerTwo} alt="" />
          </div>
        </div>
        <div className="work-layer-three">
          <div className="layer-three-img">
            <img src={layerThree} alt="" />
          </div>
          <div className="layer-three-text">
            <h4>Sunshine Website</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
              turpis justo, consequat a arcu et, lobortis tempor ex. Sed sed
              scelerisque orci. Cras turpis justo, consequat a arcu et, lobortis
              tempor ex.
            </p>
            <button>
              Visit site
              <ArrowForward className="arrow-img" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
