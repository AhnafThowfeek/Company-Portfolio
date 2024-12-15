import React from 'react';

import image1 from '../assets/1.png';
import image2 from '../assets/2.png';
import image3 from '../assets/3.png';
import image4 from '../assets/4.png';

const Projects = () => {
  const projects = [
    {
        id:1,
        title: "Project Title",
        description: "Project Description"
    },
    {
        id:2,
        title: "Project Title",
        description: "Project Description"
    },
    {
        id:3,
        title: "Project Title",
        description: "Project Description"
    },
  ]
  return (
    <div className='md:px-14 px-4 py-10 max-w-screen-2xl mx-auto' id='projects'>
      <div className='text-center mb-8'>
          <h2 className='text-4xl text-neutral-700 font-semibold mb-2'>Our Projects</h2>
          <p className='text-neutral-400'>Some project we have worked on.</p>
      </div>
      <div className='my-10 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-12 '>
          {
              projects.map(project => <div key={project.id} className='px-4 py-8 text-center md:w-[300px] lg:mx-auto md:h-80 rounded-md shadow cursor-pointer hover:border-b-4 hover:border-sky-600  duration-300 flex items-center justify-center h-full'>
                  <div>
                      <h4 className='text-2xl font-bold text-neutral-700 mb-2 px-2'>{project.title}</h4>
                      <p className='text-sm text-neutral-400'>{project.description}</p>
                  </div>
              </div>)
          }
      </div>
      <div className='text-center pt-10'>
            <h2 className='text-4xl text-neutral-700 font-semibold mb-2'>Our Clients</h2>
            <p className='text-neutral-400'>We are working with professional clients.</p>

            <div className="[&>img]:w-[60px] [&>img]:h-[60px] lg:[&>img]:w-[80px] lg:[&>img]:h-[80px] mt-10 flex flex-warp justify-between lg:justify-center lg:gap-[3rem] items-center">
                <img src={image1} alt=""/>
                <img src={image2} alt=""/>
                <img src={image3} alt=""/>
                <img src={image4} alt=""/>
            </div>
        </div>
    </div>
  );
};

export default Projects;
