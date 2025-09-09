import React from 'react'

const Footer = () => {
  return (

    // Footer Section

    <div className='m-5 p-5 rounded-lg text-center bg-gray-800 text-slate-400'>
      <h2 className='text-2xl lg:text-3xl text-slate-200 font-semibold mb-5'>Footer</h2>
      <p className='mb-3'>© 2025 Niranjan Barupal | Frontend Web Developer</p>
      <p className='mb-3'>Built with ❤ using HTML, CSS, JavaScript, and React.js</p>
      <p className='mb-5'>Turning ideas into interactive experiences</p>
      <p className='text-slate-300 font-bold text-xl lg:text-2xl mb-3'>Links Section</p>
      <p className='text-sky-600 font-semibold inline-block mb-3'>GitHub:</p> <a href="https://github.com/nash-09" className='text-sky-500 hover:text-sky-700'>github.com/nash-09</a> <br />
      <p className='text-sky-600 font-semibold inline-block mb-3'>Email:</p> <a href="mailto:niranjanbarupal182@gmail.com" className='text-sky-500 hover:text-sky-700 mb-3'>niranjanbarupal182@gmail.com</a><br />
      <p className='text-sky-600 font-semibold inline-block'>LinkedIn: </p> <a href="https://www.linkedin.com/in/niranjan-barupal-a96a83365?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className='text-sky-500 hover:text-sky-700'>https://www.linkedin.com/in/niranjan-barupal</a> <br />
    </div>
  )
}

export default Footer