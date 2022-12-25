import { TbBrandTailwind, TbBrandNextjs } from 'react-icons/tb'
import { DiHtml5, DiCss3, DiMysql } from 'react-icons/di'
import { SiTypescript, SiJavascript, SiReact, SiSolidity, SiNodedotjs, SiMongodb, SiAmazonaws } from 'react-icons/si'
import SkillTag from "./SkillTag";

const Skills = () => {
    return (
        <div id='skills' className="cov bg-bgfoundation bg-bgblack bg-blend-overlay text-owhite">
            <div className="container mx-auto px-[15px] md:px-[24px] pt-[40px] pb-[70px] mb-[40px] md:mb-[50px]">
                <div className="relative mb-[30px]">
                    <div className="text-[32px] lg:text-[38px] font-semibold">Skills</div>
                    <span className="absolute w-[20%] border-[3px] border-[#E6E345]"></span>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 justify-center items-center gap-4">
                    <SkillTag skillIcon={<DiHtml5 className="text-[250%] pr-[.5rem] align-middle" />} skillName="HTML"/>
                    <SkillTag skillIcon={<DiCss3 className="text-[250%] pr-[.5rem] align-middle" />} skillName="CSS"/>
                    <SkillTag skillIcon={<SiJavascript className="text-[250%] pr-[.5rem] align-middle" />} skillName="Javascript"/>
                    <SkillTag skillIcon={<SiReact className="text-[250%] pr-[.5rem] align-middle" />} skillName="React"/>
                    <SkillTag skillIcon={<SiSolidity className="text-[250%] pr-[.5rem] align-middle" />} skillName="Solidity"/>
                    <SkillTag skillIcon={<SiNodedotjs className="text-[250%] pr-[.5rem] align-middle" />} skillName="NodeJS"/>
                    <SkillTag skillIcon={<SiTypescript className="text-[250%] pr-[.5rem] align-middle" />} skillName="Typescript"/>
                    <SkillTag skillIcon={<TbBrandNextjs className="text-[250%] pr-[.5rem] align-middle" />} skillName="Next.js"/>
                    <SkillTag skillIcon={<TbBrandTailwind className="text-[250%] pr-[.5rem] align-middle" />} skillName="Tailwind"/>
                    <SkillTag skillIcon={<SiMongodb className="text-[250%] pr-[.5rem] align-middle" />} skillName="MongoDB"/>
                    <SkillTag skillIcon={<DiMysql className="text-[250%] pr-[.5rem] align-middle" />} skillName="MySql"/>
                    <SkillTag skillIcon={<SiAmazonaws className="text-[250%] pr-[.5rem] align-middle" />} skillName="AWS"/>
                </div>
            </div>
        </div>
    )
}

export default Skills;