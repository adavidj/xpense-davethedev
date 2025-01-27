/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState, useEffect} from 'react';
import { header } from '../data';
import { HiMenuAlt4, HiOutlineX } from 'react-icons/hi';

import MobileNav from '../components/MobileNav';
import Nav from '../components/Nav';

const Header = () => {
  //mobile navigation etat
  const [mobileNav, setMobileNav] = useState(false);

  //header navigation*
  const [isActive, setIsActive] = useState(false);

  const {logo, btnText} = header;

  //scroller
  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    })
  })

  return (
    <header className={`${isActive ? 'lg:top-0 bg-white shadow-2xl' : 'lg:top-[60px]'} py-6 lg:py-4 fixed w-full transition-all z-10`} >
      <div className="container mx-auto flex justify-between items-center">
        <a href='#' data-aos ='fade-down' data-aos-delay='1000'>
          <img src={logo} alt="" />
        </a>

        {/* desktop menu, initialement cache pr mobile menu */}
        <div className='hidden lg:flex' data-aos ='fade-down' data-aos-delay='1200'>
          <Nav />
        </div>

        {/* button montrer en mode desktop, initialement cache pr mobile */ }
        <button className='btn btn-sm btn-outline hidden lg:flex' data-aos ='fade-down' data-aos-delay='1400'>{btnText}</button>

        {/* menu mobile */}
        <button className='lg:hidden' onClick={() => setMobileNav(!mobileNav)}>
          {mobileNav ? (  
            <HiOutlineX className='text-3xl' /> 
            
            ) : ( 
              <HiMenuAlt4 className='text-3xl ' /> 
            )}
        </button>

        <div className={`${mobileNav ? 'left-0' : '-left-full'} fixed top-0 bottom-0 w-[60vw] lg:hidden transition-all`}>
          <MobileNav />
        </div>

      </div>
  </header>
  )
};

export default Header;
