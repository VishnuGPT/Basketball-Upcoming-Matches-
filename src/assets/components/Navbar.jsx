import React from 'react'
import logo from '../images.jpg'


const Navbar = () => {
  return (
    <div className='transition-all duration-500 ease-in-out hover:scale-105 flex items-center gap-5  border-2	solid bg-gray-500 '>
      <img className="w-16 h-16 rounded-full object-cover"  src={logo}/>
      <h1 className=' text-2xl bold' >BasketBall Matches</h1>
      
    </div>
  )
}

export default Navbar
