import React from 'react'

const Projects = () => {
  return (
    <div id='projects' className='text-slate-400 rounded-lg bg-gray-800 m-5 p-5'>
      <div className='text-center pb-5'>
      <h2 className='text-3xl text-slate-200 font-semibold mb-5'>My Projects</h2>
      <p>A selection of my recent work showcasing my skills in frontend development.</p>
      </div>

      {/* Project 1 */}

    <div className='flex'>
      <div className='shadow-gray-950 rounded-lg p-5 w-1/2 bg-gray-800 transition transform ease-in-out hover:scale-105 shadow-2xl hover:shadow-none hover:border-2 border-gray-700'>
      <h3 className='text-2xl font-semibold text-slate-300 mb-3'><span className='text-sky-400'>Project 1 -</span> Personal Portfolio Website</h3>
        <p className='text-sky-600 font-semibold inline-block mb-3'>Tech Stack:</p> React.JS | Tailwind CSS <br />
        <p className='text-sky-600 font-semibold inline-block mb-3'>Summary: </p> A responsive personal portfolio website to showcase my skills, projects, and contact details. <br />
        <p className='text-sky-600 font-semibold inline-block'>Description: </p> Designed and developed a clean, modern personal portfolio to highlight my frontend development skills. Built using React.js and Tailwind CSS for fast performance and a fully responsive design. Features smooth scrolling, call-to-action buttons, and well-structured project showcases. <br />
        <p className='text-slate-300 text-2xl font-semibold inline-block mb-3 mt-5'>Links Section</p> <br />
        <p className='text-sky-600 font-semibold inline-block mb-3'>Live Demo:</p> <a href="https://nash-09.github.io/My-Portfolio/" className='text-sky-500 hover:text-sky-700'>View Portfolio</a> <br />
        <p className='text-sky-600 font-semibold inline-block'>GitHub Repository:</p> <a href="https://github.com/nash-09/My-Portfolio" className='text-sky-500 hover:text-sky-700'>View Code</a>
        </div>
        <div className='bg-gray-800 ml-5 h-auto rounded-lg w-1/2 flex flex-wrap  transition transform ease-in-out shadow-gray-950 hover:shadow-none hover:scale-105 shadow-2xl hover:border-2 border-gray-700'>
          <img src="public/Screenshots/Project1/S1.png" alt="" className='w-1/2 h-1/2 p-2'/>
          <img src="public/Screenshots/Project1/S2.png" alt="" className='w-1/2 h-1/2 p-2 rounded'/>
          <img src="public/Screenshots/Project1/S3.png" alt="" className='w-1/2 h-1/2 p-2'/>
          <img src="public/Screenshots/Project1/S4.png" alt="" className='w-1/2 h-1/2 p-2'/>
      </div> 
    </div>
 

      {/* Project 2 */}

    <div className='flex mt-10'>
      <div className='bg-gray-800 m-5 ml-0 mb-0 h-auto rounded-lg w-1/2 flex flex-wrap  transition transform ease-in-out hover:shadow-none hover:scale-105 shadow-gray-950 shadow-2xl hover:border-2 border-gray-700'>
          <img src="public/Screenshots/Project2/S1.jpg" alt="" className='w-1/2 h-1/2 p-2'/>
          <img src="public/Screenshots/Project2/S2.jpg" alt="" className='w-1/2 h-1/2 p-2 rounded'/>
          <img src="public/Screenshots/Project2/S3.jpg" alt="" className='w-1/2 h-1/2 p-2'/>
          <img src="public/Screenshots/Project2/S4.jpg" alt="" className='w-1/2 h-1/2 p-2'/>
      </div> 
      <div className='rounded-lg p-5 bg-gray-800 mt-5 w-1/2  transition transform ease-in-out hover:scale-105 hover:shadow-none shadow-gray-950 shadow-2xl hover:border-2 border-gray-700'>
      <h3 className='text-2xl font-semibold mb-3 text-slate-300'><span className='text-sky-400'>Project 2 -</span> Bike Showroom Website</h3>
      <p className='text-sky-600 font-semibold inline-block mb-3'>Tech Stack :</p> HTML5 | CSS3 | JavaScript <br />
      <p className='text-sky-600 font-semibold inline-block'>Summary: </p> A responsive and interactive multi-brand bike showroom website featuring brand pages, EMI calculator, login system, and a contact form. Built with HTML, CSS, and JavaScript to deliver a smooth browsing experience. <br />
      <p className='text-sky-600 font-semibold inline-block mt-3'>Description : </p> A modern, multi-brand bike showroom website designed with a clean and responsive layout. Visitors can explore dedicated pages for major bike brands like Ducati, BMW, Kawasaki, Triumph, and more. 
      <p className='text-sky-600 font-bold mt-3 mb-3'>The site includes a range of interactive features:</p>
      <ul className='list-disc pl-5'>
        <li className='text'>EMI Calculator to simulate payment plans</li>
        <li>Login System for user access</li>
        <li>Contact Form for quick inquiries</li>
        <li>Brand-wise bike comparisons for easy exploration</li>
        <li>All pages come with smooth scrolling, hover animations, and an intuitive user interface.</li>
      </ul>
      <p className='font-semibold text-2xl text-slate-300 mt-5 mb-3'>Links Section</p>
      <ul>
        <li><p className='text-sky-600 font-semibold inline-block mb-3'>Live Demo:</p> <a href="https://nash-09.github.io/Bike-Showroom-Website/" className='text-sky-500 hover:text-sky-700'>View Project</a></li>
        <li><p className='text-sky-600 font-semibold inline-block'>GitHub Repository:</p> <a href="https://github.com/nash-09/Bike-Showroom-Website" className='text-sky-500 hover:text-sky-700'>View Code</a> </li>
      </ul>
      </div>       
    </div>

      {/* project 3 */}

    <div className='flex mt-10'>
      <div className='rounded-lg p-5 bg-gray-800 mt-5 w-1/2  transition transform ease-in-out hover:scale-105 shadow-gray-950 shadow-2xl hover:border-2 border-gray-700 hover:shadow-none'>
      <h3 className='text-2xl font-semibold text-slate-300 mb-3'><span className='text-sky-400'>Project 3 -</span> Rock-Paper-Scissors Game</h3>
      <p className='text-sky-600 inline-block font-semibold mb-3'>Tech Stack:</p> HTML5 | CSS3 | JavaScript (ES6+) <br />
      <p className='text-sky-600 inline-block font-semibold  mb-3'>Summary: </p> A responsive and interactive Rock-Paper-Scissors game featuring score tracking, visual feedback animations, and intuitive gameplay. <br />
      <p className='text-sky-600 inline-block font-semibold mb-3'>Description:</p> An engaging, browser-based Rock-Paper-Scissors game built with HTML, CSS, and JavaScript. <br />
      <p className='text-sky-600 inline-block font-bold mb-3'>The app includes:</p> 
      <ul className='list-disc pl-5'>
        <li><p className='text-sky-600 font-semibold inline-block'>Interactive gameplay:</p> Choose between rock, paper, or scissors and see real-time results (Win, Lose, or Draw).</li>
        <li><p className='text-sky-600 font-semibold inline-block'>Score tracker:</p> Tracks both your score and the computer's in a playful interface.</li>
        <li><p className='text-sky-600 font-semibold inline-block'>Visual animations:</p> Adds satisfying visual feedback when a choice is made, enhancing UX.</li>
        <li><p className='text-sky-600 font-semibold inline-block'>Fully responsive design:</p> Works smoothly across mobile and desktop screens.</li>
        </ul>
        <p className='text-slate-300 text-2xl font-semibold mt-5 mb-3'>Links Section</p>
        <p className='text-sky-600 font-semibold mb-3 inline-block'>Live Demo:</p> <a href="https://nash-09.github.io/Rock-Paper-Scissors-Game/" className='text-sky-500 hover:text-sky-700'>Play the game here</a> <br />
        <p className='text-sky-600 font-semibold inline-block'>GitHub Repository:</p> <a href="https://github.com/nash-09/Rock-Paper-Scissors-Game?tab=readme-ov-file" className='text-sky-500 hover:text-sky-700'>View Code</a>
        </div>
        <div className='bg-gray-800 m-5 mr-0 mb-0 w-1/2 h-auto rounded-lg  transition transform ease-in-out hover:scale-105 shadow-gray-950 shadow-2xl hover:border-2 hover:shadow-none border-gray-700'>
          <img src="Public/Screenshots/Project3/S1.jpg" alt="" className='p-2'/>
        </div>
      </div>

        
        {/* Project 4 */}

      <div className='flex mt-10 '>
        <div className='m-5 w-1/2 bg-gray-800 h-auto rounded-lg ml-0 mb-0  transition transform ease-in-out hover:scale-105 shadow-gray-950 shadow-2xl hover:border-2 border-gray-700 hover:shadow-none'>
          <img src="/Screenshots/Project4/S1.jpg" alt="" className='p-2'/>
        </div>
        <div className='rounded-lg p-5 bg-gray-800 mt-5 w-1/2  transition transform ease-in-out hover:scale-105 shadow-gray-950 shadow-2xl hover:border-2 border-gray-700 hover:shadow-none'>
        <h3 className='text-2xl font-semibold text-slate-300 mb-3'><span className='text-sky-400'>Project 4 -</span> Weather Forecast App</h3>
          <p className='text-sky-600 font-semibold inline-block mb-3'>Tech Stack:</p> HTML | CSS | JavaScript | OpenWeatherMap API <br />
          <p className='text-sky-600 font-semibold inline-block mb-3'>Summary:</p> A responsive weather application that fetches real-time weather data from the OpenWeatherMap API, with a clean and intuitive interface. <br />
          <p className='text-sky-600 font-semibold inline-block'>Description:</p> A sleek and responsive weather app that allows users to search any city and instantly get live weather information. It uses the OpenWeatherMap API to display current temperature, humidity, weather conditions, and date/time. The design is mobile-friendly and updates dynamically whenever a new location is searched, providing an accurate and smooth user experience. <br />
          <p className='text-slate-300 font-semibold inline-block mt-5 text-2xl mb-3'>Links Section</p> <br />
          <p className='text-sky-600 font-semibold inline-block mb-3'>Live Demo:</p> <a href="https://nash-09.github.io/Weather-Forecast-App/" className='text-sky-500 hover:text-sky-700'>View Project</a> <br />
          <p className='text-sky-600 font-semibold inline-block'>GitHub Repository:</p> <a href="https://github.com/nash-09/Weather-Forecast-App" className='text-sky-500 hover:text-sky-700'>View Code</a>
        </div>
      </div>
    </div>
  )
}

export default Projects
