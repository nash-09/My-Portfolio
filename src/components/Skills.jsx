import React from 'react'
import Lottie from 'lottie-react'
import heroAnimation from '../assets/animations/hero.json'

const Skills = () => {
  return (

    // Skills Section

    <div id='skillsSection' className='flex text-sm lg:text-base'>
      <div className='rounded-lg bg-gray-800 text-slate-400 m-5 p-5 w-full lg:w-2/4'>
        <h2 className='text-2xl text-slate-200 font-semibold mb-5 text-center lg:text-left lg:text-3xl'>Skills</h2>
        <p className='mb-3'>I work with a strong foundation in core web technologies along with modern tools to build responsive, interactive, and high-performance web applications.</p>
        <p className='font-bold mb-3 text-sky-600'>My current skill set includes:</p>

        <ul className='list-disc pl-5'>
          <li><span className='text-sky-600 font-semibold'>HTML5 -</span> Writing semantic, accessible, and SEO-friendly markup</li>
          <li><span className='text-sky-600 font-semibold'>CSS3 -</span> Flexbox, Grid, animations, and modern UI styling</li>
          <li><span className='text-sky-600 font-semibold'>JavaScript (ES6+) -</span> DOM manipulation, interactive features, and API integration</li>
          <li><span className='text-sky-600 font-semibold'>React.js -</span> Building dynamic, component-based user interfaces</li>
          <li><span className='text-sky-600 font-semibold'>Tailwind CSS -</span> Utility-first styling for fast and consistent UI development</li>
          <li><span className='text-sky-600 font-semibold'>Responsive Web Design -</span> Mobile-first layouts optimized for all screen sizes</li>
          <li><span className='text-sky-600 font-semibold'>Version Control (Git & GitHub) -</span> Efficient code management and collaboration</li>
        </ul>
      </div>

      {/* Animation */}

      <div className='hidden m-5 ml-28 w-96 lg:block'>
        <Lottie animationData={heroAnimation} loop={true} />
      </div>
    </div>
  )
}

export default Skills