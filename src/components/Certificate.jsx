import React, { useState } from 'react'
import { easeInOut, motion } from 'motion/react'

const Certificate = () => {
  return (
    <div className='text-slate-400 bg-gray-800 p-5 m-5 mt-10 rounded-lg'>
      <h2 className='text-2xl lg:text-3xl text-center text-slate-200 font-semibold mb-5'>Certificates</h2>

        <div className='flex-col lg:flex lg:justify-evenly lg:flex-row'>
          <div className='rounded-lg lg:w-[30%] w-full lg:h-auto p-5 bg-gray-800 shadow-lg shadow-gray-950 hover:shadow-none hover:border-2 border-gray-600 hover:scale-105'>
            <h3 className='text-xl lg:text-2xl font-semibold text-slate-300 text-center'>RSCIT Certificate</h3>
            <p className='mb-3 mt-5'>Vardhman Mahaveer Open University, Kota (March 2021)</p>
            <p>Completed the Rajasthan State Certificate in Information Technology (RSCIT) with 80% marks. This certification provided me with a strong foundation in computer fundamentals, IT applications, and internet usage.</p>
            <p className='text-sky-600 font-semibold inline-block mt-3'>Verfication: </p> <a href="Certificates/RSCITCertificate.jpg" target='_blank' rel='noopener noreferrer' className='text-sky-500 hover:text-sky-700'>View Certificate</a>
          </div>

          <div className='rounded-lg lg:w-[30%] w-full mt-5 lg:mt-0 lg:h-auto p-5 bg-gray-800 shadow-lg shadow-gray-950 hover:shadow-none hover:border-2 border-gray-600 hover:scale-105'>
            <h3 className='text-xl lg:text-2xl text-slate-300 font-semibold text-center '>Advanced Basic Computer Certificate</h3>
            <p className='mb-3 mt-5'>KRS Academy, Beawar (April 2022)</p>
            <p>Successfully completed a certified course in Advanced Basic Computer and was awarded Grade A+ for excellent performance. The course enhanced my practical knowledge of essential computer operations and applications.</p>
            <p className='text-sky-600 font-semibold inline-block mt-3'>Verfication: </p> <a href="Certificates/BasicComputer.jpg" target='_blank' rel='noopener noreferrer' className='text-sky-500 hover:text-sky-700'>View Certificate</a>
          </div>

          <div className='rounded-lg lg:w-[30%] w-full mt-5 lg:mt-0 lg:h-auto p-5 bg-gray-800 shadow-lg shadow-gray-950 hover:shadow-none hover:border-2 border-gray-600 hover:scale-105'>  
            <h3 className='text-xl lg:text-2xl text-slate-300 font-semibold text-center'>Salesforce AI Associate Certificate</h3>
            <p className='mb-3 mt-5'>Salesforce (March 2025)</p>
            <p>Certified as a Salesforce AI Associate, validating my understanding of AI fundamentals and Salesforce AI-powered tools.</p>
            <p className='text-sky-600 font-semibold inline-block mt-3'>Verfication: </p> <a href="Certificates/SalesforceCertificate.jpg" target='_blank' rel='noopener noreferrer' className='text-sky-500 hover:text-sky-700'>View Certificate</a>
          </div>
        </div>
    </div>
  )
}

export default Certificate