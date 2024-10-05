import React from 'react'

const InfoAboutDWD = (props) => {
  return (
    <div className='flex flex-col justify-between'>
        <div className=' flex flex-col items-center py-12'>
            <div>
                <img src={props.src} alt={props.alt} width={'300px'} height={'200px'}/>
            </div>

            <div className='py-4'>
                <h1 className='text-[#491B6D] text-[26px] font-bold leading-[36px] py-1'>{props.text}</h1>
                <p className='text-[#4B4B4B] text-[12px] text-center font-normal leading-[15px]'>{props.subtitle}</p>
            </div>
        </div>

    </div>
  )
}

export default InfoAboutDWD