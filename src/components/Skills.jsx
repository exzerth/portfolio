import React from "react";
import htmlImg from "../images/html.png"
import cssImg from "../images/css3.png"
import jsImg from "../images/js.png";
import reactImg from "../images/react.png";
import nodeImg from "../images/nodejs.png";
import solImg from "../images/solidity.png";

const Skills = () => {
    return (
        <div className="container mx-auto px-[15px] mb-[40px]">
        <div className="relative mb-[30px]">
            <div className="text-[32px] text-gray20 font-semibold">My Skills</div>
            <span className="absolute w-[20%] border-[3px] border-[#E6E345]"></span>
        </div>
            <div className="grid grid-cols-2 md:grid-cols-3 justify-center items-center gap-2">
                <div className="bg-[#e6e34566] shadow-skill rounded-lg py-[8px] px-[16px]">
                    <div className="flex justify-start">
                        <img className="w-[33px] pr-[.2rem] align-middle" src={htmlImg} alt="" />
                        <div className="font-medium text-[1.3rem] align-middle mt-[6px]">HTML</div>
                    </div>
                </div>
                <div className="bg-[#e6e34566] shadow-skill rounded-lg py-[8px] px-[16px]">
                    <div className="flex justify-start">
                        <img className="w-[33px] pr-[.2rem] align-middle" src={cssImg} alt="" />
                        <div className="font-medium text-[1.3rem] align-middle mt-[6px]">CSS</div>
                    </div>
                </div>
                <div className="bg-[#e6e34566] shadow-skill rounded-lg py-[8px] px-[16px]">
                    <div className="flex justify-start">
                        <img className="w-[33px] pr-[.2rem] align-middle" src={jsImg} alt="" />
                        <div className="font-medium text-[1.3rem] align-middle mt-[6px]">Javascript</div>
                    </div>
                </div>
                <div className="bg-[#e6e34566] shadow-skill rounded-lg py-[8px] px-[16px]">
                    <div className="flex justify-start">
                        <img className="w-[33px] pr-[.2rem] align-middle" src={reactImg} alt="" />
                        <div className="font-medium text-[1.3rem] align-middle mt-[6px]">React</div>
                    </div>
                </div>
                <div className="bg-[#e6e34566] shadow-skill rounded-lg py-[8px] px-[16px]">
                    <div className="flex justify-start">
                        <img className="w-[33px] pr-[.2rem] align-middle" src={solImg} alt="" />
                        <div className="font-medium text-[1.3rem] align-middle mt-[6px]">Solidity</div>
                    </div>
                </div>
                <div className="bg-[#e6e34566] shadow-skill rounded-lg py-[8px] px-[16px]">
                    <div className="flex justify-start">
                        <img className="w-[33px] pr-[.2rem] align-middle" src={nodeImg} alt="" />
                        <div className="font-medium text-[1.3rem] align-middle mt-[6px]">NodeJS</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills;