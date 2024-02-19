import { Link } from 'react-router-dom';
import Socials from '../socials'
import React from 'react';
import Logo from '../../images/Logo.svg'
const Header = () => {
  return (
    <header className='absolute z-9 w-full flex items-center px-16 xl:px-0 xl:h-[90px]'>
    <div className='container mx-auto'>
    <div className=' flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8 px-16'>
    <Link href={'/'}>
    <img src={Logo} width={220} height={48} alt='Logo'/>
    </Link>
    <Socials/>
    </div>
    </div>
    </header>
  )
}

export default Header;