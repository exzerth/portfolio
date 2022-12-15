import React from "react";
import estendoImage from '../images/layerOne.png'
import printRunnerImage from '../images/pr-hero.png'
import WorkCards from "./WorkCards";

const Works = () => {

  const printRunnerLinks = <>
                        <a className='shadow-links py-[.4rem] px-[.9rem] rounded-[5px] mr-[.8rem] bg-[purple]' href="https://print-runner.vercel.app" target="blank">Live</a> 
                        <a className='shadow-links py-[.4rem] px-[.9rem] rounded-[5px] mr-[.8rem] bg-[green]' href="https://github.com/exzerth/printrunner" target="blank">Code</a>
                      </>

  const estendoLinks = <>
                        <a className='shadow-links py-[.4rem] px-[.9rem] rounded-[5px] mr-[.8rem] bg-[purple]' href="https://estendo.netlify.app" target="blank">Live</a> 
                        <a className='shadow-links py-[.4rem] px-[.9rem] rounded-[5px] mr-[.8rem] bg-[green]' href="https://github.com/exzerth/Estendo" target="blank">Code</a>
                      </>

  return (
    <div className="works container mx-auto px-[15px] mb-[40px]">
      <div className="relative mb-[15px]">
          <div className="text-[32px] text-gray20 font-semibold">Works</div>
          <span className="absolute w-[20%] border-[3px] border-[#E6E345]"></span>
      </div>
      <div className="font-semibold text-[16px] opacity-[.6] mb-[30px]">LET'S GET YOU ACQUAINTED</div>
      <div className="grid items-center grid-rows-1 md:grid-cols-2 gap-8">
        <WorkCards
            cardImage = {printRunnerImage}
            cardTitle = "PrintRunner"
            cardDesc = "An ecommerce website"
            cardTech = "HTML5, Tailwind CSS, NextJS"
            cardPreview = {printRunnerLinks}
        />
        <WorkCards 
            cardImage = {estendoImage}
            cardTitle = "Estendo"
            cardDesc = "A generator retail company for popular generator brands"
            cardTech = "HTML5, CSS, React"
            cardPreview = {estendoLinks}
        />
        <WorkCards 
            cardImage = {estendoImage}
            cardTitle = "Dazzler"
            cardDesc = "A webapp for music shuffle and selection based on mood"
            cardTech = "HTML5, CSS, Javascript, Bootstrap"
        />
      </div>
    </div>
  );
};

export default Works;
