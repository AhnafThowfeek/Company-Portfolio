import React from 'react';
import logo from "../assets/logo.jpg";
import {Link} from 'react-router-dom';

const Home = () => {

  const slogan1 = 'Innovating Today'.toUpperCase();
  const slogan2 = 'for a Brighter Tomorrow'.toUpperCase();

  return (
    <div className='bg-neutral-100' id='home'>
        <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto'>
            <div className='mt-28 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12'>
                <div>
                  <img src={logo}/>
                </div>
                <div className='md:w-1/2'>
                  <h1 className='text-5xl lg:text-6xl text-center md:text-left font-semibold mb-6 md:w-4/4 leading-sung'>
                    <span>{slogan1}</span>
                    <br/>
                    <span className='text-primary leading-sung'>{slogan2}</span>
                  </h1>
                  <p className='text-xl text-gray-400 mb-10 text-justify'>We believe that behind every successful business is a strong technological foundation. At Innenta Solutions, we partner with businesses to deliver innovative software that bridges the gap between their vision and digital reality, helping them unlock new opportunities and drive sustainable growth. </p>
                  <div className='flex lg:hidden justify-center md:justify-start items-center'>
                    <Link to='/contact' className='btn-primary'>Get In Touch</Link>
                  </div>
                </div>
            </div>        

        </div>
    </div>
  )
}

export default Home;