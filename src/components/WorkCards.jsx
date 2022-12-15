import React from 'react'

const WorkCards = (props) => {
    const cardImage = props.cardImage
    const cardTitle = props.cardTitle
    const cardDesc = props.cardDesc
    const cardTech = props.cardTech
    const cardPreview = props.cardPreview
    
  return (
    <>
        <div className="flex justify-evenly border rounded-[5px] border-transparent shadow-works h-[100%]">
            <div className="self-center rounded-[5px] text-gray20 bg-slate-50">
                <img className='w-[100%] rounded-t-[5px]' src={cardImage} alt="" />
                <div className="px-[3rem] pt-[1rem] pb-[1.5rem]">
                    <div className='text-[28px] font-semibold'>{cardTitle}</div>
                    <p className='text-[18px] font-light pb-[10px]'>
                        {cardDesc}
                    </p>
                    <p className='pb-[7px] text-[15px]'>{cardTech}</p>
                    <div className="text-[1.1rem] font-medium flex justify-between items-start w-[120px] text-slate-50">
                        {cardPreview}
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default WorkCards