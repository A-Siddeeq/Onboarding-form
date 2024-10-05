import React from 'react';

const InputField = (props) => {
  return (
    <div className='flex flex-col items-center text-left'>
      <div className="w-full max-w-[350px] my-2">
        <label 
          className='text-[#491B6D] text-[16px] font-semibold leading-[36px]' 
          htmlFor={props.id}
        >
          {props.label}
        </label>
        <input
          type={props.type}
          className='border border-[#491B6D] rounded-[5px] h-[44px] w-full placeholder-[#4B4B4B] placeholder:text-[10px] pl-[20px]'
          placeholder={props.placeholder}
          required
        />
      </div>
    </div>
  );
}

export default InputField;
