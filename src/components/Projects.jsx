import React from 'react'

const Projects = () => {
  return (
    <div id='projects' className='text-slate-400 rounded-lg bg-gray-800 m-5 p-5'>
      <div className='text-center'>
        <h2 className='text-2xl text-slate-200 font-semibold mb-5 lg:text-3xl'>My Projects</h2>
        <p>A selection of my recent work showcasing my skills in frontend development.</p>
      </div>

      {/* Project 1 */}

      <div className='flex flex-col-reverse mt-10 lg:flex-row'>
        <div className='bg-gray-800 m-5 ml-0 mb-0 h-auto rounded-lg w-full lg:w-1/2 flex flex-wrap  transition transform ease-in-out hover:shadow-none hover:scale-105 shadow-gray-950 shadow-2xl hover:border-2 border-gray-700'>
          <img src="./Screenshots/Project2/S1.jpg" alt="" className='w-1/2 h-1/2 p-2'/>
          <img src="./Screenshots/Project2/S2.jpg" alt="" className='w-1/2 h-1/2 p-2 rounded'/>
          <img src="./Screenshots/Project2/S3.jpg" alt="" className='w-1/2 h-1/2 p-2'/>
          <img src="./Screenshots/Project2/S4.jpg" alt="" className='w-1/2 h-1/2 p-2'/>
        </div> 
        <div className='rounded-lg p-5 bg-gray-800 mt-5 w-full lg:w-1/2  transition transform ease-in-out hover:scale-105 hover:shadow-none shadow-gray-950 shadow-2xl hover:border-2 border-gray-700'>
          <h3 className='text-xl lg:text-2xl text-center lg:text-left font-semibold mb-5 text-slate-300'><span className='text-sky-400'>Project 1 -</span> Employee Task Management System</h3>
          <p className='text-sky-600 font-semibold inline-block'>Tech Stack :</p> React.Vite | Context API | LocalStorage | Tailwind CSS <br />
          <p className='text-sky-600 font-semibold inline-block mt-3'>Summary: </p> A role-based employee task management system that allows admins to assign tasks and employees to manage their work efficiently. The application supports real-time task status updates with persistent data storage using the browser's LocalStorage. <br />
          <p className='text-sky-600 font-semibold inline-block mt-3'>Description : </p> Designed and developed a modern task management web application to simulate a real-world admin-employee workflow. The project focuses on state management, data persistence and clean UI design. <br/> Admins can create and assign tasks to employees, while employees can accept tasks, mark them as completed or mark them as failed. All task updates are reflected instantly across dashboards and are stored persistently using LocalStorage. <br/> Built using React Context API to manage global state and Tailwind CSS for a responsive and clean user interface.
          <p className='text-sky-600 font-bold mt-3 mb-3'>Key Features:</p>
          <ul className='list-disc pl-5'>
            <li>Role-based Authentication (Admin & Employee)</li>
            <li>Global State Management using Context API</li>
            <li>Persistent Data Storage with LocalStorage</li>
            <li>Real-time Task Count Updates</li>
            <li>Separate Dashboards for Admin & Employees</li>
            <li>Fully Responsive UI using Tailwind CSS</li>
            <li>Fast Performance powered by Vite</li>
          </ul>
          <p className='font-semibold text-xl lg:text-2xl text-slate-300 mt-5 mb-3'>Links Section</p>
          <ul>
            <li><p className='text-sky-600 font-semibold inline-block mb-3'>Live Demo:</p> <a href="https://nash-09.github.io/Bike-Showroom-Website/" target='_blank' rel='noopener noreferrer' className='text-sky-500 hover:text-sky-700'>View Project</a></li>
            <li><p className='text-sky-600 font-semibold inline-block'>GitHub Repository:</p> <a href="https://github.com/nash-09/Bike-Showroom-Website" target='_blank' rel='noopener noreferrer' className='text-sky-500 hover:text-sky-700'>View Code</a> </li>
          </ul>
        </div>       
      </div>

      {/* Project 2 */}

      <div className='flex flex-col lg:flex-row mt-5'>
        <div className='shadow-gray-950 rounded-lg p-5 w-full lg:w-1/2 bg-gray-800 transition transform ease-in-out hover:scale-105 shadow-2xl hover:shadow-none hover:border-2 border-gray-700'>
          <h3 className='text-xl lg:text-2xl font-semibold text-slate-300 mb-5 text-center lg:text-left'><span className='text-sky-400'>Project 2 -</span> Personal Portfolio Website</h3>
          <p className='text-sky-600 font-semibold inline-block mb-3'>Tech Stack:</p> React.JS | Tailwind CSS <br />
          <p className='text-sky-600 font-semibold inline-block'>Summary: </p> A responsive personal portfolio website to showcase my skills, projects, and contact details. <br />
          <p className='text-sky-600 font-semibold inline-block mt-3'>Description: </p> Designed and developed a clean, modern personal portfolio to highlight my frontend development skills. Built using React.js and Tailwind CSS for fast performance and a fully responsive design. Features smooth scrolling, call-to-action buttons, and well-structured project showcases. <br />
          <p className='text-slate-300 text-xl lg:text-2xl font-semibold inline-block mb-3 mt-5'>Links Section</p> <br />
          <p className='text-sky-600 font-semibold inline-block mb-3'>Live Demo:</p> <a href="https://nash-09.github.io/My-Portfolio/" target='_blank' rel='noopener noreferrer' className='text-sky-500 hover:text-sky-700'>View Portfolio</a> <br />
          <p className='text-sky-600 font-semibold inline-block'>GitHub Repository:</p> <a href="https://github.com/nash-09/My-Portfolio" target='_blank' rel='noopener noreferrer' className='text-sky-500 hover:text-sky-700'>View Code</a>
        </div>
        <div className=' bg-gray-800 mt-5 lg:mt-0 lg:ml-5 h-auto rounded-lg w-full lg:w-1/2 flex flex-wrap  transition transform ease-in-out shadow-gray-950 hover:shadow-none hover:scale-105 shadow-2xl hover:border-2 border-gray-700'>
          <img src="./Screenshots/Project1/S1.png" alt="" className='w-1/2 h-1/2 p-2'/>
          <img src="./Screenshots/Project1/S2.png" alt="" className='w-1/2 h-1/2 p-2 rounded'/>
          <img src="./Screenshots/Project1/S3.png" alt="" className='w-1/2 h-1/2 p-2'/>
          <img src="./Screenshots/Project1/S4.png" alt="" className='w-1/2 h-1/2 p-2'/>
        </div> 
      </div>
 

      {/* Project 3 */}

      <div className='flex flex-col-reverse mt-10 lg:flex-row'>
        <div className='bg-gray-800 m-5 ml-0 mb-0 h-auto rounded-lg w-full lg:w-1/2 flex flex-wrap  transition transform ease-in-out hover:shadow-none hover:scale-105 shadow-gray-950 shadow-2xl hover:border-2 border-gray-700'>
          <img src="./Screenshots/Project2/S1.jpg" alt="" className='w-1/2 h-1/2 p-2'/>
          <img src="./Screenshots/Project2/S2.jpg" alt="" className='w-1/2 h-1/2 p-2 rounded'/>
          <img src="./Screenshots/Project2/S3.jpg" alt="" className='w-1/2 h-1/2 p-2'/>
          <img src="./Screenshots/Project2/S4.jpg" alt="" className='w-1/2 h-1/2 p-2'/>
        </div> 
        <div className='rounded-lg p-5 bg-gray-800 mt-5 w-full lg:w-1/2  transition transform ease-in-out hover:scale-105 hover:shadow-none shadow-gray-950 shadow-2xl hover:border-2 border-gray-700'>
          <h3 className='text-xl lg:text-2xl text-center lg:text-left font-semibold mb-5 text-slate-300'><span className='text-sky-400'>Project 3 -</span> Bike Showroom Website</h3>
          <p className='text-sky-600 font-semibold inline-block'>Tech Stack :</p> HTML5 | CSS3 | JavaScript <br />
          <p className='text-sky-600 font-semibold inline-block mt-3'>Summary: </p> A responsive and interactive multi-brand bike showroom website featuring brand pages, EMI calculator, login system, and a contact form. Built with HTML, CSS, and JavaScript to deliver a smooth browsing experience. <br />
          <p className='text-sky-600 font-semibold inline-block mt-3'>Description : </p> A modern, multi-brand bike showroom website designed with a clean and responsive layout. Visitors can explore dedicated pages for major bike brands like Ducati, BMW, Kawasaki, Triumph, and more. 
          <p className='text-sky-600 font-bold mt-3 mb-3'>The site includes a range of interactive features:</p>
          <ul className='list-disc pl-5'>
            <li className='text'>EMI Calculator to simulate payment plans</li>
            <li>Login System for user access</li>
            <li>Contact Form for quick inquiries</li>
            <li>Brand-wise bike comparisons for easy exploration</li>
            <li>All pages come with smooth scrolling, hover animations, and an intuitive user interface.</li>
          </ul>
          <p className='font-semibold text-xl lg:text-2xl text-slate-300 mt-5 mb-3'>Links Section</p>
          <ul>
            <li><p className='text-sky-600 font-semibold inline-block mb-3'>Live Demo:</p> <a href="https://nash-09.github.io/Bike-Showroom-Website/" target='_blank' rel='noopener noreferrer' className='text-sky-500 hover:text-sky-700'>View Project</a></li>
            <li><p className='text-sky-600 font-semibold inline-block'>GitHub Repository:</p> <a href="https://github.com/nash-09/Bike-Showroom-Website" target='_blank' rel='noopener noreferrer' className='text-sky-500 hover:text-sky-700'>View Code</a> </li>
          </ul>
        </div>       
      </div>

      {/* project 4 */}

      <div className='flex mt-10 flex-col lg:flex-row'>
        <div className='rounded-lg p-5 bg-gray-800 mt-5 w-full lg:w-1/2  transition transform ease-in-out hover:scale-105 shadow-gray-950 shadow-2xl hover:border-2 border-gray-700 hover:shadow-none'>
          <h3 className='text-xl lg:text-2xl text-center lg:text-left font-semibold text-slate-300 mb-5'><span className='text-sky-400'>Project 4 -</span> Rock-Paper-Scissors Game</h3>
          <p className='text-sky-600 inline-block font-semibold'>Tech Stack:</p> HTML5 | CSS3 | JavaScript (ES6+) <br />
          <p className='text-sky-600 inline-block font-semibold  mt-3'>Summary: </p> A responsive and interactive Rock-Paper-Scissors game featuring score tracking, visual feedback animations, and intuitive gameplay. <br />
          <p className='text-sky-600 inline-block font-semibold mt-3'>Description:</p> An engaging, browser-based Rock-Paper-Scissors game built with HTML, CSS, and JavaScript. <br />
          <p className='text-sky-600 inline-block font-bold mt-3 mb-3'>The app includes:</p> 
          <ul className='list-disc pl-5'>
            <li><p className='text-sky-600 font-semibold inline-block'>Interactive gameplay:</p> Choose between rock, paper, or scissors and see real-time results (Win, Lose, or Draw).</li>
            <li><p className='text-sky-600 font-semibold inline-block'>Score tracker:</p> Tracks both your score and the computer's in a playful interface.</li>
            <li><p className='text-sky-600 font-semibold inline-block'>Visual animations:</p> Adds satisfying visual feedback when a choice is made, enhancing UX.</li>
            <li><p className='text-sky-600 font-semibold inline-block'>Fully responsive design:</p> Works smoothly across mobile and desktop screens.</li>
          </ul>
            <p className='text-slate-300 text-xl lg:text-2xl font-semibold mt-5 mb-3'>Links Section</p>
            <p className='text-sky-600 font-semibold mb-3 inline-block'>Live Demo:</p> <a href="https://nash-09.github.io/Rock-Paper-Scissors-Game/" target='_blank' rel='noopener noreferrer' className='text-sky-500 hover:text-sky-700'>Play the game here</a> <br />
            <p className='text-sky-600 font-semibold inline-block'>GitHub Repository:</p> <a href="https://github.com/nash-09/Rock-Paper-Scissors-Game?tab=readme-ov-file" target='_blank' rel='noopener noreferrer' className='text-sky-500 hover:text-sky-700'>View Code</a>
        </div>
          <div className='bg-gray-800 m-5 ml-0 lg:ml-5 mb-0 w-full lg:w-1/2 h-auto rounded-lg  transition transform ease-in-out hover:scale-105 shadow-gray-950 shadow-2xl hover:border-2 hover:shadow-none border-gray-700'>
            <img src="./Screenshots/Project3/S1.jpg" alt="" className='p-2'/>
          </div>
      </div>

        
        {/* Project 5 */}

      <div className='flex mt-5 flex-col-reverse lg:mt-10 lg:flex-row'>
        <div className='m-5 mb-0 w-full lg:w-1/2 bg-gray-800 h-auto rounded-lg ml-0  transition transform ease-in-out hover:scale-105 shadow-gray-950 shadow-2xl hover:border-2 border-gray-700 hover:shadow-none'>
          <img src="./Screenshots/Project4/S1.jpg" alt="" className='p-2'/>
        </div>
        <div className='rounded-lg p-5 bg-gray-800 mt-5 w-full lg:w-1/2  transition transform ease-in-out hover:scale-105 shadow-gray-950 shadow-2xl hover:border-2 border-gray-700 hover:shadow-none'>
          <h3 className='text-xl lg:text-2xl font-semibold text-slate-300 text-center lg:text-left mb-5'><span className='text-sky-400'>Project 5 -</span> Weather Forecast App</h3>
            <p className='text-sky-600 font-semibold inline-block'>Tech Stack:</p> HTML | CSS | JavaScript | OpenWeatherMap API <br />
            <p className='text-sky-600 font-semibold inline-block mt-3'>Summary:</p> A responsive weather application that fetches real-time weather data from the OpenWeatherMap API, with a clean and intuitive interface. <br />
            <p className='text-sky-600 font-semibold inline-block mt-3'>Description:</p> A sleek and responsive weather app that allows users to search any city and instantly get live weather information. It uses the OpenWeatherMap API to display current temperature, humidity, weather conditions, and date/time. The design is mobile-friendly and updates dynamically whenever a new location is searched, providing an accurate and smooth user experience. <br />
            <p className='text-slate-300 font-semibold inline-block mt-5 text-xl lg:text-2xl mb-3'>Links Section</p> <br />
            <p className='text-sky-600 font-semibold inline-block mb-3'>Live Demo:</p> <a href="https://nash-09.github.io/Weather-Forecast-App/" target='_blank' rel='noopener noreferrer' className='text-sky-500 hover:text-sky-700'>View Project</a> <br />
            <p className='text-sky-600 font-semibold inline-block'>GitHub Repository:</p> <a href="https://github.com/nash-09/Weather-Forecast-App" target='_blank' rel='noopener noreferrer' className='text-sky-500 hover:text-sky-700'>View Code</a>
        </div>
      </div>
    </div>
  )
}

export default Projects
