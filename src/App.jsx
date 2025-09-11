import React from 'react'
import AboutMe from './components/AboutMe'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Certificate from './components/Certificate'
import Lottie from 'lottie-react'
import heroAnimation from './assets/animations/intro.json'
import { motion, spring } from 'motion/react'

const App = () => {
  return (
    <div className='text-sm lg:text-base'>

      {/* Top Button */}

      <span id='top'></span>
      <motion.div initial={{x: -1500, zIndex:50}} animate={{x:0}} transition={{delay:4.5}} className='fixed top-3/4 right-5 animate-bounce'>
        <button className='p-2 border-none rounded-lg  active:scale-75 bg-sky-500 text-white hover:bg-sky-600 ' onClick={() => {document.querySelector("#top").scrollIntoView({behavior:'smooth'})}}>TOP</button>
      </motion.div>

      {/* Header */}

      <div className='flex mt-5 mb-10 justify-between mr-5 text-slate-400'>
        <div className='flex items-center justify-center'>

          {/* Animation */}

          <motion.div animate={{opacity:[0,1]}} transition={{delay:1.5, duration:4}} className='w-80 ml-14 hidden lg:block'>
            <Lottie animationData={heroAnimation} loop={true} />
          </motion.div>
        </div>

        {/* Hero Section */}

        <motion.div  className='flex flex-col-reverse lg:flex-row lg:text-left ml-5 lg:ml-0 items-center bg-gray-800 w-fit p-5 rounded-lg'>
          <div id='heroSection'>        
            <h1 animate={{scale:[1]}} className=' text-white text-3xl font-bold mb-3 lg:text-4xl'>Hi, I'm <motion.span animate={{opacity:[0,1]}} transition={{delay:2, duration:3}}>Niranjan Barupal</motion.span> aka
              <motion.span initial={{y:-500}} animate={{y:0}} transition={{delay:2.5}} style={{display:'inline-block'}} className='ml-2'>N</motion.span>
              <motion.span initial={{y:-500}} animate={{y:0}} transition={{delay:2.7}} style={{display:'inline-block'}}>a</motion.span>
              <motion.span initial={{y:-500}} animate={{y:0}} transition={{delay:2.9}} style={{display:'inline-block'}}>s</motion.span>
              <motion.span initial={{y:-500}} animate={{y:0}} transition={{delay:3.1}} style={{display:'inline-block'}}>h</motion.span>
            </h1>
            <h3 className='text-slate-300 font-semibold text-lg mb-3 lg:text-xl'>Frontend Web Developer | Crafting Clean & Responsive Websites</h3>
            <p className='mb-3 text-sm lg:text-base'>I bring ideas to life with HTML, CSS and JavaScript - building fast, interactive and user-friendly web experiences.</p>
            
            {/* Projects Button */}

            <div className='lg:flex'>
              <motion.div initial={{y:-500}} animate={{y:0}} transition={{delay:3.5}} className='w-full lg:w-fit lg:mr-2 mb-3 lg:mb-0'>
                <button className='p-1 border-none active:scale-75 rounded bg-sky-500 text-white hover:bg-sky-600 w-full' onClick={() => {document.querySelector("#projects").scrollIntoView({behavior : "smooth"})}}>View My Work</button>
              </motion.div>

              {/* Contact Button */}

              <motion.div initial={{y:-500}} animate={{y:0}} transition={{delay:4}} className='w-full lg:w-fit'>
                <button className='p-1 rounded border-none bg-sky-500 text-white hover:bg-sky-600 active:scale-75 w-full' onClick={() => {document.querySelector("#contactMe").scrollIntoView({behavior : "smooth"})}}>Contact Me</button>
              </motion.div>
            </div>
          </div>

          {/* Profile Photo */}

          <motion.div initial={{x:"-650%"}} transition={{duration:2, delay:0.5}} animate={{x:0,rotate:360, opacity:[0,1]}} className='h-36 w-36 relative mb-5  rounded-full shadow-xl shadow-gray-950 lg:ml-5 lg:w-44 lg:h-44 lg:mb-0'>
            <img src=".\Me\me.jpg" alt="" className='h-full w-full rounded-full'/>
          </motion.div>
        </motion.div>
      </div>

        <AboutMe />

        <Skills />

        <Projects />

        <Certificate />

        <Contact />

        <Footer />

    </div>
  )
}

export default App