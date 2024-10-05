import React from 'react'
import InputField from '../components/InputField'
import { Link } from 'react-router-dom'

const ResetPswd = () => {
  return (
    <div className='flex flex-col items-center'>
        <div>
            <InputField 
            label="Enter New Password"
            type="email"
            placeholder="designwithdesigners@gmail.com"/>

            <InputField 
            label="Enter New Password"
            type="email"
            placeholder="designwithdesigners@gmail.com"/>
        </div>

        <Link to="/password-success">
            <button className='cursor-pointer text-[#fff] bg-[#491B6D] text-[16px] font-semibold leading-[24px] w-[350px] h-[44px] mt-4 rounded-[5px]'>RESET PASSWORD</button>
       </Link>
 
    </div>
  )
}

export default ResetPswd