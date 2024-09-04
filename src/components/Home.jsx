import React from 'react';
import logo from "../assets/logo.jpg";

const Home = () => {
  return (
    <div className='bg-neutral-100' id='home'>
        <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-screen'>
            <div className='my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12'>
                <div>
                  <img src={logo}/>
                </div>

                <div className='md:w-1/2'>
                  <h1 className='text-5xl font-semibold mb-4 text-neutral-900 md:w-3/4 leading-sung'>INNENTA <span className='text-sky-600 leading-sung'><br/>SOLUTIONS</span></h1>
                  <p className='text-neutral-400 text-base mb-8'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis amet odio corrupti iste ab provident quisquam minima tempora omnis quo?</p>
                  <button className='btn-primary'>Get In Touch</button>
                </div>
            </div>        

        </div>
    </div>
  )
}

export default Home;