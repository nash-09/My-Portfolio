import React from 'react'
import AboutMe from './components/AboutMe'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Certificate from './components/Certificate'
import Lottie from 'lottie-react'
import heroAnimation from './assets/animations/intro.json'
import { motion } from 'motion/react'

const App = () => {
  return (
    <motion.div animate={{opacity:[0,1]}} transition={{duration:3}} className='text-sm lg:text-base'>
      <span id='top'></span>
      <motion.button initial={{x: -1500}} animate={{x:0}} transition={{delay:3.5}} className='z-50 p-2 border-none rounded-lg fixed top-3/4 right-5 active:scale-75 bg-sky-500 text-white hover:bg-sky-600 ' onClick={() => {
      document.querySelector("#top").scrollIntoView({behavior:'smooth'})
    }}>TOP</motion.button>

      <div className='flex mt-5 mb-10 justify-between mr-5 text-slate-400'>
        <div className='flex items-center justify-center'>
          <motion.div animate={{opacity:[0,1]}} transition={{delay:1.5, duration:3}} className='w-80 ml-14 hidden lg:block'>
            <Lottie animationData={heroAnimation} loop={true} />
          </motion.div>
        </div>
          <motion.div  className='flex flex-col-reverse lg:flex-row lg:text-left ml-5 lg:ml-0 items-center bg-gray-800 w-fit p-5 rounded-lg'>
            <div id='heroSection'>        
              <h1 animate={{scale:[1]}} className=' text-white text-3xl font-bold mb-3 lg:text-4xl'>Hi, I'm Niranjan Barupal aka Nash</h1>
              <h3 className='text-slate-300 font-semibold text-lg mb-3 lg:text-xl'>Frontend Web Developer | Crafting Clean & Responsive Websites</h3>
              <p className='mb-3 text-sm lg:text-base'>I bring ideas to life with HTML, CSS and JavaScript - building fast, interactive and user-friendly web experiences.</p>
              <motion.button initial={{y:-500}} animate={{y:0}} transition={{delay:3}} className='mb-3 w-full p-1 border-none active:scale-75 rounded bg-sky-500 text-white hover:bg-sky-600 lg:w-fit lg:mr-2' onClick={() => {
                document.querySelector("#projects").scrollIntoView({behavior : "smooth"})
              }}>View My Work</motion.button>
              <motion.button initial={{y:-500}} animate={{y:0}} transition={{delay:3.5}} className='w-full p-1 rounded border-none active:scale-75 bg-sky-500 text-white hover:bg-sky-600 lg:w-fit' onClick={() => {
                document.querySelector("#contactMe").scrollIntoView({behavior : "smooth"})
              }}>Contact Me</motion.button>
            </div>
            <motion.div initial={{x:"-650%"}} transition={{duration:2, delay:1}} animate={{x:0,rotate:360, opacity:[0,1]}} className='h-36 w-36 relative mb-5  rounded-full shadow-xl shadow-gray-950 lg:ml-5 lg:w-44 lg:h-44 lg:mb-0'>
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

    </motion.div>
  )
}

export default App