import React from 'react';


const About = () => {
    const aboutUs = [
        {id:1, image:"/src/assets/pro.JPG" ,title: "Mulhima Jawahir ", descroption:"Co-Founder in Innenta Solutions, Lead Project Manager & Client Handler. "},
        {id:2, image:"/src/assets/pro.JPG", title: "Ahnaf Thowfeek", descroption:" Co-Founder in Innenta Solutions, Lead Project Developer. "},
        {id:3, image:"/src/assets/pro.JPG", title: "Asela Pasindu Dias", descroption:" Co-Founder in Innenta Solutions, Lead Project Manager and Developer. Having seen many companies struggle to integrate technology into their business models, my vision is to bridge this gap and help them thrive. At Innenta Solutions, we are dedicated to helping businesses flourish through technological innovation."},
    ]

  return (
    <div className='md:px-14 px-4 py-16 max-w-screen-2xl mx-auto' id='about'>
        <div className='text-center my-8'>
            <h2 className='text-4xl text-neutral-700 font-semibold mb-2'>Our Team</h2>                    
        </div>

    
    <div className='mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-12 '>      
        {
            aboutUs.map(about => <div key={about.id} className='px-4 py-8 text-center md:w-[300px] mx-auto md:h-80 rounded-md shadow cursor-pointer hover:border-b-4 hover:border-sky-600 transition-all flex items-center justify-center h-full'>
                <div>
                    <div className='h-40 w-40  mx-auto rounded-tl-3xl rounded-br-3xl justify-center items-center'><img src={about.image} alt='' className='-ml-5'/></div>
                    <h4 className='text-2xl font-bold text-neutral-700 mt-14 mb-2 px-2'>{about.title}</h4>
                    <p className='text-sm text-neutral-400'>{about.descroption}</p>                   

                </div>
            </div>)
        }
    </div>


    </div>

    
  )
}

export default About;

