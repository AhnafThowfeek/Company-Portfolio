import React, {useEffect, useState} from 'react';
import { Link as ScrollLink } from 'react-scroll';
import {Link} from 'react-router-dom';
import { FaXmark, FaBars } from 'react-icons/fa6';

import companyicon from '../assets/companyicon.png';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    const toggleMenu =() => {
        setIsMenuOpen(!isMenuOpen);
    }

    useEffect(() => {
        const handleScroll = () => {
            if(window.scrollY > 100){
                setIsSticky(true);
            }
            else{
                setIsSticky(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.addEventListener('scroll', handleScroll);
        }
    });

    const navItems =[
        {link: "Home", path:"home"},
        {link: "Services", path:"services"},
        {link: "Projects", path:"projects"},
        {link: "About", path:"about"},
        {link: "SocialMedia", path: "social-media"}
    ];

  return (
    <header className='w-full bg-white fixed top-0 left-0 right-0'>
        <nav className={`py-4 lg:px-14 px-4 ${isSticky ? "sticky top-0 left-0 right-0 border bg-white duration-300" : ""}`}>
            <div className='flex justify-between items-center text-base gap-8'>
                <a href=''><img src={companyicon} alt='' className='h-[70px]'></img></a>

                <ul className='md:flex space-x-12 hidden'>
                    {
                        navItems.map(({link,path}) => <ScrollLink to={path} spy={true} smooth={true} offset={-100} key={path} className='block text-base text-gray-900 hover:text-sky-600 first:font-medium cursor-pointer'>{link}</ScrollLink>)
                    }
                </ul>

                <div className='hidden lg:flex items-center'>
                    <Link to='/contact' className='btn-primary' >Get In Touch</Link>
                </div>

                <div className='md:hidden'>
                    <button onClick={toggleMenu} className=' text-neutral-700 focus:outline-none focus:text-gray-500'>
                        {
                            isMenuOpen ? (<FaXmark className='h-6 w-6'/>) : (<FaBars className='h-6 w-6'/>)
                        }
                    </button>
                </div>
            </div>

            <div className={`mobile md:hidden space-y-4 px-4 mt-[6.5rem] py-7 bg-sky-600 ${isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"}`}>
                {
                    navItems.map(({link,path}) => <ScrollLink to={path} spy={true} smooth={true} offset={-100} key={path} className='block text-base text-white hover:text-sky-600 first:font-medium cursor-pointer'>{link}</ScrollLink>)
                }
            </div>
        </nav>
    </header>
 
  )
}

export default Navbar;