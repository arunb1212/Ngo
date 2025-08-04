import React from 'react'
// import { GoBook } from "react-icons/go";

const Program = ({icon,p1,p2}) => {
  return (
    <div className='w-[350px] h-[250px] shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.2)] px-[20px] rounded-xl flex justify-center flex-col gap-[20px] hover:shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.34)] '>
        <div className='w-[60px] h-[60px]'>
        {icon}

        </div>
        <div className='flex flex-col  gap-[20px]'>
            <p className='font-bold text-[#111827] text-2xl'>{p1}
            </p>
            <p className='text-[18px] text-[#4B5563]'>
            {p2}
            </p>
        </div>

    </div>
  )
}

export default Program