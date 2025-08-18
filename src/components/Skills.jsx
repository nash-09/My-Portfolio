import React from 'react'
import Lottie from 'lottie-react'
import heroAnimation from '../assets/animations/hero.json'

const Skills = () => {
  return (
    <div id='skillsSection' className='flex'>
      <div className='rounded-lg bg-gray-800 text-slate-400 m-5 p-5 w-2/4'>
        <h2 className='text-3xl text-slate-200 font-semibold mb-5'>Skills</h2>
        <p className='mb-3'>I work with a mix of core web technologies and modern tools to create responsive and interactive websites.</p>
        <p className='font-bold mb-3 text-sky-600'>My current skill set includes:</p>

<ul className='list-disc pl-5'>
<li><span className='text-sky-600 font-semibold'>HTML5 -</span> Semantic, accessible, and SEO-friendly markup.</li>

<li><span className='text-sky-600 font-semibold'>CSS3 -</span> Flexbox, Grid, animations, and modern styling techniques.</li>

<li><span className='text-sky-600 font-semibold'>JavaScript (ES6+) -</span> Interactive features, DOM manipulation, and API integration.</li>

<li><span className='text-sky-600 font-semibold'>React.js (Learning) -</span> Building dynamic, component-based web applications.</li>

<li><span className='text-sky-600 font-semibold'>Tailwind CSS (Learning) -</span> Rapid UI development with utility-first styling.</li>

<li><span className='text-sky-600 font-semibold'>Responsive Web Design -</span> Mobile-first approach for all screen sizes.</li>

<li><span className='text-sky-600 font-semibold'>Version Control (Git & GitHub) -</span> Managing and sharing code efficiently.</li>
</ul>
</div>

<div className='m-5 ml-28 w-96'>
  <Lottie animationData={heroAnimation} loop={true} />
</div>
    </div>
  )
}

export default Skills