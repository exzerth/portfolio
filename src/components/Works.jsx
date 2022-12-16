import React from "react";
import estendoImage from '../images/est-img.png'
import printRunnerImage from '../images/pr-hero.png'
import dazzlerImage from '../images/dazzler-hero.png'
import zuriImage from '../images/zuri-hero.png'
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

const dazzlerLinks = <>
                      <a className='shadow-links py-[.4rem] px-[.9rem] rounded-[5px] mr-[.8rem] bg-[purple]' href="https://dazzler.netlify.app" target="blank">Live</a> 
                      <a className='shadow-links py-[.4rem] px-[.9rem] rounded-[5px] mr-[.8rem] bg-[green]' href="https://github.com/exzerth/dazzler" target="blank">Code</a>
                    </>

const zuriLinks = <>
                      <a className='shadow-links py-[.4rem] px-[.9rem] rounded-[5px] mr-[.8rem] bg-[purple]' href="https://zuri-education.netlify.app/" target="blank">Live</a> 
                      <a className='shadow-links py-[.4rem] px-[.9rem] rounded-[5px] mr-[.8rem] bg-[green]' href="https://github.com/exzerth/Team-New-Justice-League_Education-Template" target="blank">Code</a>
                    </>

  return (
    <div className="container mx-auto px-[15px] md:px-[24px] mb-[40px] md:mb-[50px]">
      <div className="relative mb-[15px]">
          <div className="text-[32px] text-gray20 font-semibold">Works</div>
          <span className="absolute w-[20%] border-[3px] border-[#E6E345]"></span>
      </div>
      <div className="font-semibold text-[16px] opacity-[.6] mb-[30px]">LET'S GET YOU ACQUAINTED</div>
      <div className="grid items-center grid-rows-1 md:grid-cols-2 gap-6 lg:gap-8">
        <WorkCards
            cardImage = {printRunnerImage}
            cardTitle = "PrintRunner"
            cardDesc = "An online printing company, offering solutions to event promotion amongst other things."
            cardTech = "HTML5, Tailwind CSS, NextJS"
            cardPreview = {printRunnerLinks}
        />
        <WorkCards 
            cardImage = {estendoImage}
            cardTitle = "Estendo"
            cardDesc = "A generator retail company for popular generator brands."
            cardTech = "HTML5, CSS, React"
            cardPreview = {estendoLinks}
        />
        <WorkCards 
            cardImage = {dazzlerImage}
            cardTitle = "Dazzler"
            cardDesc = "A webapp for music shuffle and selection based on the user's mood."
            cardTech = "HTML5, CSS, Javascript, Bootstrap, PHP"
            cardPreview = {dazzlerLinks}
        />
        <WorkCards 
            cardImage = {zuriImage}
            cardTitle = "Zuri Education"
            cardDesc = "A online portal for a remote software engineering internship program."
            cardTech = "HTML5, CSS, Javascript, Bootstrap"
            cardPreview = {zuriLinks}
        />
      </div>
    </div>
  );
};

export default Works;
