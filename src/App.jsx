import React from 'react'
import AboutMe from './components/AboutMe'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Certificate from './components/Certificate'

const App = () => {
  return (
    <div className='bg-sky-50 text-slate-600'>
      <div id='heroSection'>
        <h1 className=' text-slate-900 text-3xl font-bold mb-3'>Hi, I'm Niranjan Barupal</h1>
        <h3 className='text-slate-700 font-semibold text-xl mb-3'>Frontend Web Developer | Crafting Clean & Responsive Websites</h3>
        <p  className='mb-3'>I bring ideas to life with HTML, CSS and JavaScript - building fast, interactive and user-friendly web experiences.</p>
        <button className='p-1 mr-2 rounded bg-sky-500 text-white hover:bg-sky-600' onClick={() => {
          document.querySelector("#projects").scrollIntoView({behavior : "smooth"})
        }}>View My Work</button>
        <button className='p-1 rounded bg-sky-500 text-white hover:bg-sky-600' onClick={() => {
          document.querySelector("#contactMe").scrollIntoView({behavior : "smooth"})
        }}>Contact Me</button>
      </div>
      <div className='w-full border-2 border-sky-600 mb-5 mt-5'></div>

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