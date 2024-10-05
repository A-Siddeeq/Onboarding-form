import React from 'react'
import InputField from '../components/InputField'
import logoDark from '../assets/logoDark.svg'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='flex flex-col items-center justify-between h-[500px]'>
        <div className='flex flex-col items-center'>
            <img src={logoDark} alt="D.W.D Logo" />
            <h1 className='text-[#491B6D] text-left max-w-[350px] font-bold text-[26px] leading-[36px]'>Create An Account</h1>
            <p>Login to continue</p>
        </div>

        <div>
            <InputField 
            id="email"
            label="Email Address"
            type="email"
            placeholder="designwithdesigners@gmail.com"/>
            
            <InputField
            id="password"
            label="Password"
            type="password"
            placeholder="DesignWITHdesigners12345"/>

            <div className='flex justify-end'>
            <Link to='/forgot-password'><span className='text-[#491B6D] text-[12px] leading-[23px]'>Forgot Password?</span></Link>
            </div>
        </div>

        <div>
            <button className='cursor-pointer text-[#fff] bg-[#491B6D] text-[16px] font-semibold leading-[24px]  w-[350px] h-[44px] rounded-[5px]'>LOG IN</button>
            <p className='font-normal text-[12px] leading-[36px]'>Don't Have an account already? <Link to='/signup'><span className='font-bold text-[#491B6D]'>Sign up now</span></Link></p>
       </div>
    </div>
  )
}

export default Login