import React, { useState, useEffect } from 'react'
import { Link } from 'react-router'

const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPercentage = (window.scrollY / window.innerHeight) * 100
      setIsScrolled(scrollPercentage > 20)
    //   console.log(scrollPercentage)
    }

    window.addEventListener('scroll', handleScroll)
    // return () => window.removeEventListener('scroll', handleScroll)
  }, [])
// console.log(window.scrollY)
  return (
    <div className={`fixed top-0 left-0 w-full flex justify-between items-center py-[10px] px-[50px] z-50 transition-all duration-300 ${isScrolled ? 'backdrop-blur-md text-black' : 'bg-transparent text-white'}`}>
        <div>
        <img className='w-[100px]' src="https://bastikipathshala-org.translate.goog/wp-content/uploads/2024/02/Basti_Ki_Pathshala-_Official_Logo-removebg-preview.png?_x_tr_sl=en&_x_tr_tl=hi&_x_tr_hl=hi&_x_tr_pto=tc" alt="" />

        </div>

     <nav className='flex gap-[20px] font-bold'>

     <Link to={"/"}> <p>Home</p> </Link> 
    <Link to={"/about"}> <p>About</p> </Link> 
    <Link to={"/contact"}> <p>Contact</p> </Link> 
    <Link to={"/program"}> <p>Program</p> </Link>
     </nav>
     
<button className={`font-bold p-[10px] w-[100px] hover:text-[18px] ease-in duration-150 cursor-pointer shadow-[0_8px_30px_rgb(0,0,0,0.40)] rounded transition-all  ${isScrolled ? 'border-black bg-white text-black' : 'border-white bg-white text-black'}`}>
    Donate
</button >
            
        
    </div>
  )
}

export default Nav