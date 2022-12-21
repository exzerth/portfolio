const SkillTag = (props) => {

    const skillName = props.skillName
    const skillIcon = props.skillIcon

  return (
    <>
        <div className="bg-bgskills text-gray20 shadow-skill rounded-lg py-[8px] px-[16px]">
            <div className="flex justify-start">
                {skillIcon}
                <div className="font-medium text-[1.3rem] align-middle mt-[4px]">{skillName}</div>
            </div>
        </div>
    </>
  )
}

export default SkillTag