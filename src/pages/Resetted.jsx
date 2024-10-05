import React from 'react'
import { Link } from 'react-router-dom'

const Resetted = () => {
  return (
    <div className='flex flex-col items-center text-center'>
        <div>
            <h1 className='text-[#4B4B4B] font-semibold text-[22px] leading-[33px]'>PASSWORD RESET SUCCESSFUL</h1>
            <p className='text-[12xpx] leading-[18px] text-[#4B4B4B] py-1'>You can now login with your new password.</p>
        </div>

        <Link to="/login">
            <button className='cursor-pointer text-[#fff] bg-[#491B6D] text-[16px] font-semibold leading-[24px] w-[350px] h-[44px] mt-4 rounded-[5px]'>Proceed</button>
        </Link>
    </div>
  )
}

export default Resetted