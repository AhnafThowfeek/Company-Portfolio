import React from 'react';
import logo1 from '../assets/logo1.png';
import { Footer } from "flowbite-react";
import { BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";

const MyFooter = () => {
  return (
    <Footer bgDark>
      <div className="w-full">
        <div className="flex w-full justify-around px-6 py-8 flex-col md:flex-row items-center text-center lg:text-start gap-[40px] [&>div]:flex [&>div]:flex-col [&>div]:justify-center">
          <div>
            <a href='/'><img src={logo1} alt='' className='h-[140px]'></img></a>
          </div>
          <div>
            <Footer.Title title="Company" />
            <Footer.LinkGroup  col >
              <Footer.Link href='#home'>Home</Footer.Link>
              <Footer.Link href='#about'>About</Footer.Link>
              <Footer.Link href='#services'>Services</Footer.Link>
              <Footer.Link href='#projects'>Projects</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="Support" />
            <Footer.LinkGroup col>
              <Footer.Link href="#">Twitter</Footer.Link>
              <Footer.Link href="#">Facebook</Footer.Link>
              <Footer.Link href="#">Contact Us</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="legal" />
            <Footer.LinkGroup col>
              <Footer.Link href="#">Privacy Policy</Footer.Link>
              <Footer.Link href="#">Licensing</Footer.Link>
              <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
            </Footer.LinkGroup>
          </div>
        
        </div>
        <div className="w-full bg-white px-4 py-6 lg:flex lg:justify-around">
          <Footer.Copyright href="/" className='text-center lg:text-auto' by="Innenta" year={2024} />
          <div className="mt-4 flex space-x-6 sm:mt-0 justify-center lg:justify-start">
            <Footer.Icon href="#" icon={BsFacebook} />
            <Footer.Icon href="#" icon={BsInstagram} />
            <Footer.Icon href="#" icon={BsTwitter} />
            <Footer.Icon href="#" icon={BsGithub} />
          </div>
        </div>
      </div>
    </Footer>
  )
};

export default MyFooter;
