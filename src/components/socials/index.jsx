import {
  RiLinkedinLine,
  RiBehanceLine,
  RiGithubLine,
       } from 'react-icons/ri';
import React from 'react'
const Socials = () => {
  return (
    <div className='flex items-center gap-x-5 text-lg text-white z-10'>
      <a 
        href="https://www.linkedin.com/in/adrian-jonathan-a3b6272ab" 
        className="transition-all duration-300 cursor-pointer hover:text-[#F13024]"
        target="_blank" 
        rel="noopener noreferrer"
      >
        <RiLinkedinLine size={24}/>
      </a> 
      <a 
        href="https://www.behance.net/adrianjonathan" 
        className="transition-all duration-300 cursor-pointer hover:text-[#F13024]"
        target="_blank" 
        rel="noopener noreferrer"
      >
        <RiBehanceLine size={24}/>
      </a> 
      <a 
        href="https://github.com/Adrian-jnt" 
        className="transition-all duration-300 cursor-pointer hover:text-[#F13024]"
        target='_blank'
        rel="noopener noreferrer"
      >
        <RiGithubLine size={24}/>
      </a> 
     
    </div>

  )
}

export default Socials;