import React from 'react'
import InputField from '../components/InputField'
import { Link } from 'react-router-dom'

const ForgotPswd = () => {
    return (
        <div className='flex flex-col items-center justify-between h-[200px]'>
            <div>
            <h1 className='text-[#4B4B4B]  font-semibold text-[22px] leading-[33px]'>Forgot Your Password?</h1>
            <p className='text-[12xpx] leading-[18px] text-[#4B4B4B] py-1'>Enter your email address and we will share a link to create a new password.</p>
            </div>
    
            <div className='w-full'>
                <InputField 
                type="email"
                placeholder="Email Address"/>
            </div>
    
            <Link to="/reset-password">
                <button className='cursor-pointer text-[#fff] bg-[#491B6D] text-[16px] font-semibold leading-[24px]  w-[350px] h-[44px] rounded-[5px]'>Send</button>
           </Link>
     
        </div>
      )
    }
    

export default ForgotPswd