import React from 'react'
import AboutMe from './components/AboutMe'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Certificate from './components/Certificate'
import Lottie from 'lottie-react'
import heroAnimation from './assets/animations/intro.json'

const App = () => {
  return (
    <div className='text-sm lg:text-base'>
      <span id='top'></span>
      <button className='z-50 p-2 border-none rounded-lg fixed top-3/4 right-5 active:scale-75 bg-sky-500 text-white hover:bg-sky-600 ' onClick={() => {
      document.querySelector("#top").scrollIntoView({behavior:'smooth'})
    }}>TOP</button>
      <div className='flex justify-between text-slate-400'>
        <div className='hidden m-auto w-60 lg:block'>
          <Lottie animationData={heroAnimation} loop={true} />
        </div>
      <div className='items-center m-5 mb-10 text-center rounded-lg p-5 flex flex-col-reverse w-fit bg-gray-800 lg:flex-row lg:text-left'>        
      <div id='heroSection'>        
        <h1 className=' text-white text-3xl font-bold mb-3 lg:text-4xl'>Hi, I'm Niranjan Barupal aka Nash</h1>
        <h3 className='text-slate-300 font-semibold text-lg mb-3 lg:text-xl'>Frontend Web Developer | Crafting Clean & Responsive Websites</h3>
        <p className='mb-3 text-sm lg:text-base'>I bring ideas to life with HTML, CSS and JavaScript - building fast, interactive and user-friendly web experiences.</p>
        <button className='mb-3 w-full p-1 border-none active:scale-75 rounded bg-sky-500 text-white hover:bg-sky-600 lg:w-fit lg:mr-2' onClick={() => {
          document.querySelector("#projects").scrollIntoView({behavior : "smooth"})
        }}>View My Work</button>
        <button className='w-full p-1 rounded border-none active:scale-75 bg-sky-500 text-white hover:bg-sky-600 lg:w-fit' onClick={() => {
          document.querySelector("#contactMe").scrollIntoView({behavior : "smooth"})
        }}>Contact Me</button>
      </div>
      <div className='mb-5 h-36 w-36 rounded-full shadow-xl shadow-gray-950 transform transition hover:scale-105 hover:border-4 border-gray-700 lg:ml-5 lg:w-44 lg:h-44 lg:mb-0'>
        <img src=".\Me\me.jpg" alt="" className='h-full w-full rounded-full'/>
      </div>
      </div>      
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