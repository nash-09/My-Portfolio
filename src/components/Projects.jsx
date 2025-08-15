import React from 'react'

const Projects = () => {
  return (
    <div id='projects'>
      <h2 className='text-2xl text-slate-700 font-semibold mt-5 mb-3'>My Projects</h2>
      <p>A selection of my recent work showcasing my skills in frontend development.</p>

      {/* Project 1 */}

      <h3 className='text-xl font-semibold text-slate-700 mt-3 mb-3'>Project 1 - Personal Portfolio Website</h3>
        <p className='text-sky-600 font-semibold inline-block mb-3'>Tech Stack:</p> React.js | Tailwind CSS | HTML <br />

        <p className='text-sky-600 font-semibold inline-block mb-3'>Summary: </p> A responsive personal portfolio website to showcase my skills, projects, and contact details. <br />

        <p className='text-sky-600 font-semibold inline-block'>Description: </p> Designed and developed a clean, modern personal portfolio to highlight my frontend development skills. Built using React.js and Tailwind CSS for fast performance and a fully responsive design. Features smooth scrolling, call-to-action buttons, and well-structured project showcases. <br />

        <p className='text-sky-600 font-bold inline-block mb-3 mt-3'>Links Section:</p> <br />

        <p className='text-sky-600 font-semibold inline-block mb-3'>Live Demo:</p> <a href="https://nash-09.github.io/My-Portfolio/" className='text-sky-500 hover:text-sky-700'>View Portfolio</a> <br />

        <p className='text-sky-600 font-semibold inline-block mb-3'>GitHub Repository:</p> <a href="https://github.com/nash-09/My-Portfolio" className='text-sky-500 hover:text-sky-700'>View Code</a>
        <div className='w-full border-2 border-dashed border-sky-700 mt-5 mb-5'></div>
        

      {/* Project 2 */}

      <h3 className='text-xl font-semibold text-slate-700 mb-3'>Project 2 - Bike Showroom Website</h3>
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

      <p className='text-sky-600 font-bold mt-3 mb-3'>Links Section:</p>

      <ul>
        <li><p className='text-sky-600 font-semibold inline-block mb-3'>Live Demo:</p> <a href="https://nash-09.github.io/Bike-Showroom-Website/" className='text-sky-500 hover:text-sky-700'>View Project</a></li>
        <li><p className='text-sky-600 font-semibold inline-block mb-3'>GitHub Repository:</p> <a href="https://github.com/nash-09/Bike-Showroom-Website" className='text-sky-500 hover:text-sky-700'>View Code</a> </li>
      </ul>
      <div className='w-full border-2 border-dashed border-sky-700 mt-5 mb-5'></div>

      {/* project 3 */}

      <h3 className='text-xl font-semibold text-slate-700 mb-3'>Project 3 - Rock-Paper-Scissors Game</h3>

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


        <p className='text-sky-600 font-bold mt-3 mb-3'>Links Section:</p>

        <p className='text-sky-600 font-semibold mb-3 inline-block'>Live Demo:</p> <a href="https://nash-09.github.io/Rock-Paper-Scissors-Game/" className='text-sky-500 hover:text-sky-700'>Play the game here</a> <br />

        <p className='text-sky-600 font-semibold inline-block'>GitHub Repository:</p> <a href="https://github.com/nash-09/Rock-Paper-Scissors-Game?tab=readme-ov-file" className='text-sky-500 hover:text-sky-700'>View Code</a>
        <div className='w-full border-2 border-dashed border-sky-700 mt-5 mb-5'></div>

        
        {/* Project 4 */}

        <h3 className='text-xl font-semibold text-slate-700 mb-3'>Project 4 - Weather Forecast App</h3>
          <p className='text-sky-600 font-semibold inline-block mb-3'>Tech Stack:</p> HTML | CSS | JavaScript | OpenWeatherMap API <br />

          <p className='text-sky-600 font-semibold inline-block mb-3'>Summary:</p> A responsive weather application that fetches real-time weather data from the OpenWeatherMap API, with a clean and intuitive interface. <br />

          <p className='text-sky-600 font-semibold inline-block'>Description:</p> A sleek and responsive weather app that allows users to search any city and instantly get live weather information. It uses the OpenWeatherMap API to display current temperature, humidity, weather conditions, and date/time. The design is mobile-friendly and updates dynamically whenever a new location is searched, providing an accurate and smooth user experience. <br />

          <p className='text-sky-600 font-bold inline-block mt-3 mb-3'>Links Section:</p> <br />

          <p className='text-sky-600 font-semibold inline-block mb-3'>Live Demo:</p> <a href="https://nash-09.github.io/Weather-Forecast-App/" className='text-sky-500 hover:text-sky-700'>View Project</a> <br />

          <p className='text-sky-600 font-semibold inline-block'>GitHub Repository:</p> <a href="https://github.com/nash-09/Weather-Forecast-App" className='text-sky-500 hover:text-sky-700'>View Code</a>
          <div className='w-full border-2 border-sky-600 mb-5 mt-5'></div>
    </div>
  )
}

export default Projects