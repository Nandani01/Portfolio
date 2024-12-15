import React from 'react'
import logo from "../assets/logo.jpg";
import {FaLinkedin} from "react-icons/fa"
import {FaGithub} from "react-icons/fa"
import {FaFacebook} from "react-icons/fa"

const Navbar = () => {
  return (
  <nav className=' mb-20 flex items-center justify-between py-6'>
  
    <div className='flex flex-shrink-0 items-center h-20 w-20  ;  '>
        <img className="mx-2 w-10 rounded-full" src={logo} alt="Logo"  />
    </div>
    <div className='m-8 flex items-center justify-center gap-4 text-2xl'> 
        {/* LinkedIn Link */}
        <a href="https://www.linkedin.com/in/nandanisah/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        {/* GitHub Link */}
        <a href="https://github.com/Nandani01" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        {/* Facebook Link */}
        <a href="https://www.facebook.com/nandani.sah.35728/" target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </a>
    </div>
    </nav>
  )
}



export default Navbar