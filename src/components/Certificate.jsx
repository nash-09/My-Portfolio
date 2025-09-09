import React from 'react'
import { easeInOut, motion } from 'motion/react'

const Certificate = () => {
  return (
    <div className='text-slate-400 bg-gray-800 p-5 m-5 mt-10 rounded-lg'>
      <h2 className='text-2xl lg:text-3xl text-center text-slate-200 font-semibold mb-5'>Certificates</h2>

      <div className='flex-col lg:flex lg:justify-evenly lg:flex-row'>

        <motion.div whileHover={{rotateY:180}} style={{transformStyle:'preserve-3d', perspective:1000}} transition={{ease:easeInOut}} className='rounded-lg lg:w-1/4 w-full lg:h-auto p-5 bg-gray-800 shadow-lg shadow-gray-950'>
        
          <motion.div style={{backfaceVisibility:'hidden'}} >
            <h3 className='text-xl lg:text-2xl font-semibold text-slate-300 text-center'>RSCIT Certificate</h3>
            <p className='mb-3 mt-5'>Vardhman Mahaveer Open University, Kota (March 2021)</p>
            <p>Completed the Rajasthan State Certificate in Information Technology (RSCIT) with 80% marks. This certification provided me with a strong foundation in computer fundamentals, IT applications, and internet usage.</p>
          </motion.div>

          <motion.div style={{transform:'rotateY(180deg)', backfaceVisibility:'hidden'}}>

          </motion.div>

        </motion.div>



        <motion.div whileHover={{rotateY:180}} style={{transformStyle:'preserve-3d', perspective:1000}} transition={{ease:easeInOut}} className='rounded-lg lg:w-1/4 w-full mt-5 lg:mt-0 lg:h-auto p-5 bg-gray-800 shadow-lg shadow-gray-950'>

          <motion.div style={{backfaceVisibility:'hidden'}}>
            <h3 className='text-xl lg:text-2xl text-slate-300 font-semibold text-center '>Advanced Basic Computer Certificate</h3>
            <p className='mb-3 mt-5'>KRS Academy, Beawar (April 2022)</p>
            <p>Successfully completed a certified course in Advanced Basic Computer and was awarded Grade A+ for excellent performance. The course enhanced my practical knowledge of essential computer operations and applications.</p>
          </motion.div>

          <motion.div style={{transform:'rotateY(180deg)', backfaceVisibility:'hidden'}}>

          </motion.div>

        </motion.div>




        <motion.div whileHover={{rotateY:180}} style={{transformStyle:'preserve-3d', perspective:1000}} transition={{ease:easeInOut}} className='rounded-lg lg:w-1/4 w-full mt-5 lg:mt-0 lg:h-auto p-5 bg-gray-800 shadow-lg shadow-gray-950'>  

          <motion.div style={{backfaceVisibility:'hidden'}} className='lg:absolute' >
            <h3 className='text-xl lg:text-2xl text-slate-300 font-semibold text-center'>Salesforce AI Associate Certificate</h3>
            <p className='mb-3 mt-5'>Salesforce (March 2025)</p>
            <p>Certified as a Salesforce AI Associate, validating my understanding of AI fundamentals and Salesforce AI-powered tools.</p>
          </motion.div>

          <motion.div style={{transform:'rotateY(180deg)', backfaceVisibility:'hidden'}} className='h-full w-full'>
            <img src="Certificates/RSCITCertificate.jpg" className='absolute h-full w-full' alt="" />
            <button className='absolute w-full p-1 rounded border-none active:scale-75 bg-sky-500 text-white hover:bg-sky-600 lg:w-fit my-2 mx-2'><a href="Certificates/RSCITCertificate.jpg">View Full Certificate</a></button>
          </motion.div>

        </motion.div>
      </div>
    </div>
  )
}

export default Certificate


// {/* <div className='m-5 mt-10 p-5  text-slate-400 rounded-lg bg-gray-800'>

//         {/* Certificates Heading */}

//         <div>
//           <h2 className='text-2xl lg:text-3xl text-center text-slate-200 font-semibold mb-5'>Certificates</h2>
//         </div>

//         {/* Certificates Section */}

//         <div className='flex flex-col lg:justify-evenly lg:flex-row'>
//           <motion.div whileHover={{rotateY:180}} style={{transformStyle:'preserve-3d', perspective:1000}} transition={{ease:easeInOut}} className='relative lg:w-1/4 lg:h-[296px]'>
//             <motion.div style={{backfaceVisibility:'hidden'}} className='rounded-lg relative lg:absolute w-full lg:w-full lg:h-full p-5 bg-gray-800 shadow-lg shadow-gray-950'>
//               <h3 className='text-xl lg:text-2xl font-semibold text-slate-300 text-center'>RSCIT Certificate</h3>
//               <p className='mb-3 mt-5'>Vardhman Mahaveer Open University, Kota (March 2021)</p>
//               <p>Completed the Rajasthan State Certificate in Information Technology (RSCIT) with 80% marks. This certification provided me with a strong foundation in computer fundamentals, IT applications, and internet usage.</p>
//             </motion.div>
//             <motion.div style={{transform:'rotateY(180deg)', backfaceVisibility:'hidden'}} className=' shadow-lg shadow-gray-950 rounded-lg relative h-full w-full'>
//               <img src="Certificates/RSCITCertificate.jpg" className='rounded-lg absolute h-full w-full' alt="" />
//               <button className='w-full p-1 rounded border-none active:scale-75 bg-sky-500 text-white hover:bg-sky-600 lg:w-fit my-2 absolute mx-2'><a href="Certificates/RSCITCertificate.jpg">View Full Certificate</a></button>
//             </motion.div>
//           </motion.div>

//           <motion.div whileHover={{rotateY:180}} style={{transformStyle:'preserve-3d', perspective:1000}} transition={{ease:easeInOut}} className='lg:w-1/4 lg:h-[296px]'>
//             <motion.div style={{backfaceVisibility:'hidden'}} className='rounded-lg relative lg:absolute w-full lg:w-full lg:h-full p-5 bg-gray-800 shadow-lg shadow-gray-950'>
//               <h3 className='text-xl lg:text-2xl text-slate-300 font-semibold text-center '>Advanced Basic Computer Certificate</h3>
//               <p className='mb-3 mt-5'>KRS Academy, Beawar (April 2022)</p>
//               <p>Successfully completed a certified course in Advanced Basic Computer and was awarded Grade A+ for excellent performance. The course enhanced my practical knowledge of essential computer operations and applications.</p>
//             </motion.div>
//             <motion.div style={{transform:'rotateY(180deg)', backfaceVisibility:'hidden'}} className=' shadow-lg shadow-gray-950 rounded-lg absolute h-full w-full'>
//               <img src="Certificates/BasicComputer.jpg" className='rounded-lg absolute h-full w-full' alt="" />
//               <button className='w-full p-1 rounded border-none active:scale-75 bg-sky-500 text-white hover:bg-sky-600 lg:w-fit my-2 absolute mx-2'><a href="Certificates/BasicComputer.jpg">View Full Certificate</a></button>
//             </motion.div>
//           </motion.div>
      
//           <motion.div whileHover={{rotateY:180}} style={{transformStyle:'preserve-3d', perspective:1000}} transition={{ease:easeInOut}} className='lg:w-1/4 lg:h-[296px]'>
//             <motion.div style={{backfaceVisibility:'hidden'}} className='rounded-lg relative lg:absolute w-full lg:w-full lg:h-full p-5 bg-gray-800 shadow-lg shadow-gray-950'>
//               <h3 className='text-xl lg:text-2xl text-slate-300 font-semibold text-center'>Salesforce AI Associate Certificate</h3>
//               <p className='mb-3 mt-5'>Salesforce (March 2025)</p>
//               <p>Certified as a Salesforce AI Associate, validating my understanding of AI fundamentals and Salesforce AI-powered tools.</p>
//             </motion.div>
//             <motion.div style={{transform:'rotateY(180deg)', backfaceVisibility:'hidden'}} className=' shadow-lg shadow-gray-950 rounded-lg relative h-full w-full'>
//               <img src="Certificates/SalesforceCertificate.jpg" className='rounded-lg absolute h-full w-full' alt="" />
//               <button className='w-full p-1 rounded border-none active:scale-75 bg-sky-500 text-white hover:bg-sky-600 lg:w-fit my-2 absolute mx-2'><a href="Certificates/SalesforceCertificate.jpg">View Full Certificate</a></button>
//             </motion.div>
//           </motion.div>
//         </div>
//       </div> */}