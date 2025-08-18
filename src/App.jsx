import React from 'react'
import AboutMe from './components/AboutMe'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Certificate from './components/Certificate'

const App = () => {
  return (
    <div><button className='p-2 border-none rounded-lg fixed top-3/4 right-5 active:scale-75 bg-sky-500 text-white hover:bg-sky-600 ' onClick={() => {
      document.querySelector("#heroSection").scrollIntoView({behavior:'smooth'})
    }}>TOP</button>
      <div className='flex text-slate-400'>
      <div className='m-5 rounded-lg p-5 flex w-full justify-center bg-gray-800'>
      <div id='heroSection'>
        <h1 className=' text-white text-4xl font-bold mb-3'>Hi, I'm Niranjan Barupal</h1>
        <h3 className='text-slate-300 font-semibold text-xl mb-3'>Frontend Web Developer | Crafting Clean & Responsive Websites</h3>
        <p  className='mb-3'>I bring ideas to life with HTML, CSS and JavaScript - building fast, interactive and user-friendly web experiences.</p>
        <button className='p-1 mr-2 border-none active:scale-75 rounded bg-sky-500 text-white hover:bg-sky-600' onClick={() => {
          document.querySelector("#projects").scrollIntoView({behavior : "smooth"})
        }}>View My Work</button>
        <button className='p-1 rounded border-none active:scale-75 bg-sky-500 text-white hover:bg-sky-600' onClick={() => {
          document.querySelector("#contactMe").scrollIntoView({behavior : "smooth"})
        }}>Contact Me</button>
      </div>
      <div className='border-4 border-slate-400 ml-5 h-44 w-44 rounded-full transform transition duration-1000 hover:scale-[1.2]'>
        <img src="/Public/Me/me.jpg" alt="" className='h-full w-full rounded-full'/>
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