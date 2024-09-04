import React, {useEffect, useState} from 'react';
import logo1 from '../assets/logo1.png';
import { Link } from 'react-scroll';

import { FaXmark, FaBars } from 'react-icons/fa6';


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
        {link: "About", path:"about"},
        {link: "Services", path:"services"},
        {link: "Projects", path:"projects"},
     
    ];


  return (
    <header className='w-full bg-white md:bg-transparent fixed top-0 left-0 right-0'>
        <nav className={`py-4 lg:px-14 px-4 ${isSticky ? "sticky top-0 left-0 right-0 border bg-white duration-300" : ""}`}>
            <div className='flex justify-between items-center text-base gap-8'>
                <a href=''><img src={logo1} alt='' className='w-[70px] h-[70px]'></img></a>

                <ul className='md:flex space-x-12 hidden'>
                    {
                        navItems.map(({link,path}) => <Link to={path} spy={true} smooth={true} offset={-100} key={path} className='block text-base text-gray-900 hover:text-sky-600 first:font-medium cursor-pointer'>{link}</Link>)
                    }
                </ul>

                <div className='space-x-12 hidden lg:flex items-center'>
                    <button href='Contact.jsx' className='bg-sky-600 text-white py-2 px-4 transition-all duration-300 rounded hover:bg-neutral-700' >Get In Touch</button>
                </div>

                <div className='md:hidden'>
                    <button onClick={toggleMenu} className=' text-neutral-700 focus:outline-none focus:text-gray-500'>
                        {
                            isMenuOpen ? (<FaXmark className='h-6 w-6'/>) : (<FaBars className='h-6 w-6'/>)
                        }
                    </button>
                </div>
            </div>

            <div className={`space-y-4 px-4 mt-16 py-7 bg-sky-600 ${isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"}`}>
                {
                    navItems.map(({link,path}) => <Link to={path} spy={true} smooth={true} offset={-100} key={path} className='block text-base text-white hover:text-sky-600 first:font-medium cursor-pointer'>{link}</Link>)
                }
            </div>
        </nav>
    </header>
 
  )
}

export default Navbar;