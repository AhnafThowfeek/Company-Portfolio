import React from 'react';

const Contact = () => {
  return (
    <div className='flex justify-center items-center w-[100%] h-[100vh] max-w-md mx-auto p-6 bg-neutral-200 rounded-lg shadow-md'>
        <h2 className='text-3xl text-center text-sky-600 font-bold mb-6' id='contact'>Contact Us</h2>
        
        <form action=''>
            <div className='mb-4'>
                <label className='block text-sm font-semibold mb-2' htmlFor=''>Your Name</label>
                <input placeholder='Mohammed Ahnaf' className='w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-sky-600' required type='text'/>
            </div>
            <div className='mb-4'>
                <label className='block text-sm font-semibold mb-2' htmlFor=''>Your Email</label>
                <input placeholder='dummy@dummy.com' className='w-full px-3 py-2 border rounded-lg focus:outline-none  focus:border-sky-600' required type='text'/>
            </div>
            <div className='mb-4'>
                <label className='block text-sm font-semibold mb-2' htmlFor=''>Your Idea</label>
                <textarea rows='4' placeholder='Enter your idea here..' className='w-full px-3 py-2 border rounded-lg focus:outline-none  focus:border-sky-600' required type='text'/>
            </div>
            <div className='flex justify-center'>
                <button type='submit' className='bg-sky-600 text-white font-semibold px-4 rounded-lg hover:bg-neutral-700'>Send Idea</button>
            </div>
            
        </form>

    </div>
  );
};

export default Contact;