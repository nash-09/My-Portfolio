import React from 'react'

const Certificate = () => {
  return (
    <div>
        <h2 className='text-2xl text-slate-700 font-semibold mt-5 mb-3'>Certificates</h2>
        <h3 className='text-xl font-semibold text-slate-700 mt-3 mb-3'>RSCIT Certificate</h3>
        <p className='mb-3'>Vardhman Mahaveer Open University, Kota (March 2021)</p>
        <p>Completed the Rajasthan State Certificate in Information Technology (RSCIT) with 80% marks. This certification provided me with a strong foundation in computer fundamentals, IT applications, and internet usage.</p>
        <p className='text-sky-600 font-semibold inline-block mb-3 mt-3'>Verification:</p> <a href="/Certificates/RSCIT Certificate.jpg" target='_blank' rel='noopener noreferrer' className='text-sky-500 hover:text-sky-700'>View Certificate</a>
        
        <div className='w-full border-2 border-dashed border-sky-700 mt-5 mb-5'></div>

        <h3 className='text-xl text-slate-700 font-semibold mt-5 mb-3'>Advanced Basic Computer Certificate</h3>
        <p className='mb-3'>KRS Academy, Beawar (April 2022)</p>
        <p>Successfully completed a certified course in Advanced Basic Computer and was awarded Grade A+ for excellent performance. The course enhanced my practical knowledge of essential computer operations and applications.</p>
        <p className='text-sky-600 font-semibold inline-block mb-3 mt-3'>Verification:</p> <a href="/Certificates/Advanced Basic Computer Certificate.jpg" target='_blank' rel='noopener noreferrer' className='text-sky-500 hover:text-sky-700'>View Certificate</a>

        <div className='w-full border-2 border-dashed border-sky-700 mt-5 mb-5'></div>

        <h3 className='text-xl text-slate-700 font-semibold mt-5 mb-3'>Salesforce AI Associate Certificate</h3>
        <p className='mb-3'>Salesforce (March 2025)</p>
        <p>Certified as a Salesforce AI Associate, validating my understanding of AI fundamentals and Salesforce AI-powered tools.</p>
        <ul className='list-disc p-5 pb-0'>
            <li><p className='text-sky-600 font-semibold inline-block'>Credential ID:</p> <p className='text-sky-500 inline-block'>5875599</p></li>
            <li><p className='text-sky-600 font-semibold inline-block'>Verification:</p> <a href="/Certificates/SalesforceCertificate.jpg" target='_blank' rel='noopener noreferrer' className='text-sky-500 hover:text-sky-700'>View Certificate</a></li>
        </ul>
        <div className='w-full border-2 border-sky-600 mb-5 mt-5'></div>
    </div>

    
  )
}

export default Certificate