import React from 'react'
import Cards from './Cards'

const Programs = () => {
  return (
    <div className=' relative h-[500px]'>
      <img className="object-cover w-full h-[500px]" src="https://images.pexels.com/photos/8197567/pexels-photo-8197567.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop" alt="" />
      <div className='absolute top-0 right-0 bg-gradient-to-br from-blue-400 to-green-700 bg-amber-500 h-[100%] opacity-70 w-[100%] flex justify-center items-center flex-col'>
      </div>
      <div className=' absolute top-0 right-0 w-full h-[500px] flex-col flex justify-center items-center gap-[30px]'>
      <h1 className='text-4xl font-bold text-white'>Our Programs</h1>
      <p className='text-2xl font-semibold text-[#DBE9FE] '>Comprehensive educational programs designed to empower communities</p>
      </div>
    <div className='text-center mt-[30px] '>
      <h1 className='text-3xl font-bold'>Core Programs </h1>
      <p className='text-xl text-[#4B5563]'>Three pillars of education that transform lives</p>

      <div className='flex w-full flex-col items-center'>
        <Cards/>
      </div>
    </div>
    </div>
  )
}

export default Programs