import React from 'react';

const Services = () => {
    const services = [
        {
            id:1,
            title: "Web Development",
            descroption: "CMS Development (WordPress, Shopify, etc.)"
        },
        {
            id:2,
            title: "Graphic Designing",
            descroption:<ul className="list-disc list-inside text-left">
                            <li>Flyer Design</li>
                            <li>Brochure Design</li>
                            <li>Logo Design</li>
                            <li>Invitation</li>
                            <li>LinkedIn Banner</li>
                            <li>CV/Resume</li>
                            <li>Business Card</li>
                            <li>E-book Cover</li>
                            <li>Menu Design</li>
                            <li>Poster</li>
                            <li>Company Letterhead</li>
                            <li>Company Profile</li>
                        </ul>
        },
        {
            id:3,
            title: "Infographic Design",
            descroption:<ul className="list-disc list-inside text-left">
                            <li>Timeline Infographics</li>
                            <li>Comparison Infographic</li>
                            <li>Process Infographic</li>
                            <li>Geographical Infographic</li>
                            <li>How-to Infographic</li>
                        </ul>
        },
    ]
    return (
        <div className='md:px-14 px-4 py-10 max-w-screen-2xl mx-auto' id='services'>
            <div className='mt-10 md:w-1/2 mx-auto text-center'>
                <h2 className='text-4xl text-neutral-700 font-semibold mb-3'>Our Services</h2>
                <p className='text-neutral-400'>These are our services we offering for you.</p>
            </div>
            <div className='mt-10 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-12 '>
                {
                    services.map(service => <div key={service.id} className='px-4 py-8 text-center md:w-[300px] lg:mx-auto md:h-80 rounded-md shadow cursor-pointer hover:border-b-4 hover:border-sky-600  duration-300 flex items-center justify-center h-full'>
                        <div>
                            <h4 className='text-2xl font-bold text-neutral-700 mb-2 px-2'>{service.title}</h4>
                            <p className='text-sm text-neutral-400'>{service.descroption}</p>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Services;
