import React from 'react'
// import india from "@react-map/india";
import India from '@react-map/india';

const Map = () => {
  return (
    <div className='px-[20px] bg-[#F9FAFB]'>
<h1 className='font-semibold text-center text-3xl'>Our Story</h1>
        <div className='grid grid-cols-2 justify-center items-center gap-[20px]'>
            <div>
            <p className='text-[20px]'>Basti Ki Pathshale began in 2018 when Dr. Anjali Gupta, a former university professor, witnessed the educational challenges faced by children in Mumbai's urban slums. Despite their eagerness to learn, these bright young minds lacked access to quality education.
                Starting with a single classroom in Dharavi, we began with just 15 students. Our community-centered approach quickly gained trust, and word spread about the quality education we provided. Parents saw their children thriving, reading for the first time, and developing confidence.

Today, we operate 25 community schools across Mumbai, serving over 2,500 students. Our holistic approach includes not just academic learning, but also life skills, digital literacy, and vocational training for older students and community members.</p>
            </div>



        <India size={600} hoverColor="orange"  type = 'select-single'/>

        </div>

    </div>
  )
}

export default Map