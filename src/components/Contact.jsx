import React, { useRef } from 'react';
// import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // emailjs
    //   .sendForm('service_w1zyw1i', 'template_io881ms', form.current, {
    //     publicKey: '6Myv3i8kOVnKk0l2O',
    //   });
    // e.target.reset();
  };

  return (
    <section className="min-h-screen flex justify-center items-center bg-neutral-100 p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start max-w-4xl mx-auto">
       
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-center text-3xl font-bold text-sky-600 mb-6">Contact Us</h2>
          <div className="grid grid-cols-1 gap-4">
            <div className="bg-neutral-100 p-4 rounded-lg shadow-sm text-center">
              <div className="text-2xl text-sky-600 mb-2">
                <i className="fas fa-phone-alt"></i>
              </div>
              <p className="font-medium">Call Us</p>
              <span className="text-sm">+94 77 425 6402</span>
            </div>
            <div className="bg-neutral-100 p-4 rounded-lg shadow-sm text-center">
              <div className="text-2xl text-sky-600 mb-2">
                <i className="fas fa-envelope"></i>
              </div>
              <p className="font-medium">Email Us</p>
              <span className="text-sm">innenta.solutions@gmail.com</span>
            </div>
          </div>
        </div>

       
        <div className="bg-white p-6 rounded-lg shadow-md">
          <form ref={form} onSubmit={sendEmail}>
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-2">Your Name</label>
              <input
                placeholder="Mohammed Ahnaf"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-sky-600"
                required
                type="text"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-2">Your Email</label>
              <input
                placeholder="dummy@dummy.com"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-sky-600"
                required
                type="email"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-2">Your Idea</label>
              <textarea
                rows="4"
                placeholder="Enter your idea here.."
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-sky-600"
                required
              />
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-sky-600 text-white font-semibold px-4 py-2 rounded-lg hover:bg-sky-700"
              >
                Send Idea
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
