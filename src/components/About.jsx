import React from 'react';


const About = () => {
    const aboutUs = [
        {id:1, image:"/src/assets/pro.JPG", name: "Mulhima Jawahir", title: "Co-Founder in Innenta Solutions, Lead Project Manager & Client Handler.", description:""},
        {id:2, image:"/src/assets/pro.JPG", name: "Ahnaf Thowfeek", title: "Co-Founder in Innenta Solutions, Lead Project Developer.", description:""},
        {id:3, image:"/src/assets/pro.JPG", name: "Asela Pasindu Dias", title: "Co-Founder in Innenta Solutions, Lead Project Manager and Developer.", description:"Having seen many companies struggle to integrate technology into their business models, my vision is to bridge this gap and help them thrive. At Innenta Solutions, we are dedicated to helping businesses flourish through technological innovation."},
    ]

  return (
    <div id='about' className='about md:px-14 px-4 py-16 max-w-screen-2xl mx-auto'>
        <div className='text-center my-8'>
            <h2 className='text-4xl text-neutral-700 font-semibold mb-2'>Our Team</h2>                    
        </div>
        <div className='mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-12'>      
            {aboutUs.map(about =>
                <div key={about.id} className='card relative flex items-center justify-center h-full px-4 py-8 text-center md:w-[300px] mx-auto md:h-[25rem] rounded-md shadow cursor-pointer hover:border-b-4 hover:border-sky-600 group'>
                    <div className='card-front absolute'>
                        <div className='h-40 w-40  mx-auto'><img src={about.image} alt={`${about.name}`} className='rounded-tl-2xl rounded-br-2xl'/></div>
                        <h4 className='text-2xl font-bold text-black mt-14 mb-2 px-2'>{about.name}</h4>
                        <h4 className='text-sm text-gray-400'>{about.title}</h4>
                    </div>
                    <div className='card-description absolute p-4'>
                        <p className='text-lg text-gray-400 text-justify tracking-tight' style={{wordSpacing: "2px"}}>{about.description}</p>
                    </div>
                </div>
            )}
        </div>
    </div>
  )
}

export default About;

