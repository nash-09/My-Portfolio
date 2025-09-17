import React from 'react'
import Lottie from 'lottie-react'
import heroAnimation from '../assets/animations/contact.json'

const Contact = () => {
  return (

    // Contact Me Section

    <div id='contactMe' className='flex'>
      <div className='m-5 p-5 w-full lg:w-2/3 rounded-lg text-slate-400 bg-gray-800'>
        <h2 className='text-2xl lg:text-3xl text-center lg:text-left text-slate-200 font-semibold mb-5'>Contact Me</h2>
        <h3 className='text-xl lg:text-2xl text-slate-300 font-semibold mb-3'>Let's Connect!</h3>
        <p>I'm always open to discussing new projects, collaborations, or opportunities. Whether you have a question, an idea, or just want to say hi — feel free to reach out!</p>
        <p className='text-slate-300 text-xl lg:text-2xl font-semibold mt-5 mb-3'>Contact Details</p>
        <p className='text-sky-600 font-semibold inline-block mb-3'>Email:</p> <a href="mailto:niranjanbarupal182@gmail.com" target='_blank' rel='noopener noreferrer' className='text-sky-500 hover:text-sky-700'>niranjanbarupal182@gmail.com</a> <br />
        <p className='text-sky-600 font-semibold inline-block mb-3'>GitHub:</p> <a href="https://github.com/nash-09" target='_blank' rel='noopener noreferrer' className='text-sky-500 hover:text-sky-700'>github.com/nash-09</a> <br />
        <p className='text-sky-600 font-semibold inline-block'>LinkedIn: </p> <a href="https://www.linkedin.com/in/niranjan-barupal-a96a83365?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target='_blank' rel='noopener noreferrer' className='text-sky-500 hover:text-sky-700'>https://www.linkedin.com/in/niranjan-barupal</a>
      </div>

      {/* Animation */}

      <div className='hidden lg:block w-80 m-auto'>
        <Lottie animationData={heroAnimation} loop={true} />
      </div>
    </div>
  )
}

export default Contact