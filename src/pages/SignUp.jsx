import React from 'react'
import InputField from '../components/InputField'
import { Link } from 'react-router-dom'

const SignUp = () => {
  return (
    <div className='flex flex-col items-center justify-between h-[80vh]'>

      
       <div>

       <h1 className='text-[#491B6D] text-left max-w-[350px] font-bold text-[26px] leading-[36px]'>Create An Account</h1>

        <InputField
        id="name"
        label="Name"
        type="text"
        placeholder="Design Withdesigners"/>

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
        
        <InputField
        id="confirmPassword"
        label="Confirm Password"
        type="password"
        placeholder="DesignWITHdesigners12345"/>
      </div>

      <div>
        <button className='cursor-pointer text-[#fff] bg-[#491B6D] text-[16px] font-semibold leading-[24px]  w-[350px] h-[44px] rounded-[5px]'>SIGN UP</button>
        <p className='font-normal text-[12px] leading-[36px]'>Have an account already? <Link to='/login'><span className='font-bold text-[#491B6D]'>Log in</span></Link></p>
      </div>

    </div>
  )
}

export default SignUp