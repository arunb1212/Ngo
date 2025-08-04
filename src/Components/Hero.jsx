import React from 'react'

const Hero = () => {
  return (
    <div className='relative h-screen'>
      <div className='absolute top-0 left-0 w-full h-full z-[-1]'>
        <video className='w-full h-full object-cover' autoPlay muted loop src='./src/assets/vid1.mp4' ></video>
      </div>
      
      <div className=' h-[100vh] bg-blend-darken 
  flex items-center flex-col   justify-center z-[1] text-white text-center'>
        <p className='text-3xl font-bold'> Empowering Communities Through Education </p>
        <p>Providing quality education to underprivileged children in urban slums

</p>
        <button className='border border-white cursor-pointer hover:bg-amber-700 hover:text-white transition-all duration-300 p-[10px] mt-[10px] rounded'>
          Explore more
        </button>
      </div>
    </div>
  )
}

export default Hero