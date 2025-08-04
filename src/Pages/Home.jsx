import React from 'react'
import Hero from '../Components/Hero'
import Program from './Program'
// import About from './About'
 import { GoBook } from "react-icons/go";
 import { SlPeople } from "react-icons/sl";

//  import { FaHeart } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import Timeline from '../Components/Timeline';



const Home = () => {
  return (
    <div className=''>
       <Hero/>

<h1 className='py-[30px] mb-[20px] h-[150px] grid place-content-center text-xl font-semi-bold text-center'>
    <span className='text-3xl font-bold'>Our Mission</span> <br />
To provide quality education and create opportunities for children in underserved communities, breaking the cycle of poverty through learning.

</h1>    

<div className='px-[20px] mb-[20px] flex justify-center gap-[40px]'>
    <Program p1="Primary Education
" p2="Basic literacy and numeracy for children aged 6-12
" icon={<GoBook className='w-full h-full rounded p-[10px] bg-[#21C55D]' />}/>
    <Program p1="Vocational Training
 " p2="Skill development programs for youth and adults" icon={<SlPeople className='h-full w-full p-[10px]   bg-[#3B81F6] rounded'/>}/>
    <Program p1="Digital Literacy" p2="Computer and internet skills for the digital age" icon={<CiHeart className='h-full w-full rounded p-[10px] bg-[#F87315]'/>} />

    
</div>
<div className='px-[20px]'>
<Timeline/>

</div>

    </div>
  )
}

export default Home