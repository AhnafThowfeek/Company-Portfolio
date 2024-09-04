import React from 'react';

const Services = () => {
    const services = [
        {id:1, title: "Development Services", descroption:"We are doing development services like"},
        {id:2, title: "Designing Services", descroption:"We are doing designing services like"},
    ]
  return (
    
    <div className='md:px-14 px-4 py-16 max-w-screen-2xl mx-auto' id='services'>
        <div className='text-center my-8'>
            <h2 className='text-4xl text-neutral-700 font-semibold mb-2'>Our Clients</h2>
            <p className='text-neutral-400'>We have working with some fortune 10+ clients</p>

            <div className="w-[80px] h-[80px] my-12 flex flex-warp justify-between items-center gap-14">
                <img src="/src/assets/1.png" alt=""/>
                <img src="/src/assets/2.png" alt=""/>
                <img src="/src/assets/3.png" alt=""/>
                <img src="/src/assets/4.png" alt=""/>
            </div>
        </div>

        <div className='mt-20 md:w-1/2 mx-auto text-center'>
            <h2 className='text-4xl text-neutral-700 font-semibold mb-3'>Our Services</h2>
        </div>

        <div className='mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-12 '>
            {
                services.map(service => <div key={service.id} className='px-4 py-8 text-center md:w-[300px] mx-auto md:h-80 rounded-md shadow cursor-pointer hover:-translate-y-5 hover:border-b-4 hover:border-sky-600 transition-all duration-300 flex items-center justify-center h-full'>
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
