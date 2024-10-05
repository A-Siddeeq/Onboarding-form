import React from 'react'
import logo from '../assets/logo.svg'

const Loading = () => {
  return (
    <div className='h-[90vh] w-full flex items-center justify-center bg-[#491B6D]'>
        <div>
            <img src={logo} alt="D.W.D Logo" width={"200px"} />
        </div>
    </div>
  )
}

export default Loading