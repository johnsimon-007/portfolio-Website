import React from 'react'
import "./About.css"
import CSS from "../assets/css-3.png"
import HTML from "../assets/html.png"
import DB from "../assets/data-server.png"
import JS from "../assets/js.png"
import REACTICON from "../assets/physics.png"
import NODE from "../assets/node-js.png"
import P1 from "../assets/p1.jpg"
import P2 from "../assets/p2.png"
import P3 from "../assets/p3.png"
import EasyMailLogo from "../assets/easymaillogo.png"
import souledstorelogo from "../assets/SouledStoreLogo.png"
import weatherApp from "../assets/weatherapplogo.png"
import BlogProfileImage from "../assets/portfolioProfile.jpeg"
import aboutProfile from "../assets/johnprofile.jpeg"
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function About() {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollToContact) {
      document
        .getElementById("contact")
        ?.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);
  return (
    <>
      <div className='section-1'>
        <h1>
          About me:
        </h1>
        <h1 className='name'>I'm John Simon</h1>
        <p className='about-text'>
          A BCA graduate and aspiring Full Stack Developer.<br></br>
          I specialize in building modern web applications using the MERN Stack (MongoDB, Express.js, React, and Node.js).<br></br>
          I enjoy turning ideas into real-world projects and continuously improving my development skills through hands-on learning and freelance projects.
        </p>
        <div>
          <div className='card1'>
            <h1>🎓 Education</h1>
            <h2>Bachelor of Computer Applications (BCA)</h2>
            <p>Vel Tech Ranga Sanku Arts College
              <br />
              Madras University
              <br />
              2023 - 2026</p>
          </div>
          <div className='card2'>
            <h1>💻 Development</h1>
            <h2> Focused on Full Stack Development</h2>

            Technologies:
            React,
            Node.js,
            Express.js,
            MongoDB,
            JavaScript.
          </div>
          <div className='card3'>
            <h1>🚀 Current Goal</h1>
            <p>
              Looking for opportunities as a Full Stack Developer while building freelance projects and expanding my portfolio.
            </p>
          </div>
        </div>
      </div>
      <div className='section-2'>
        <h1>Skills</h1>
        <div className='skills'>
          <img src={HTML}
            className="w-[50px] transition-all duration-300 hover:-translate-y-2 hover:scale-110 cursor-pointer"
            style={{ width: "50px" }} />
          <img src={CSS}
            className="w-[50px] transition-all duration-300 hover:-translate-y-2 hover:scale-110 cursor-pointer" style={{ width: "50px" }} />
          <img src={JS}
            className="w-[50px] transition-all duration-300 hover:-translate-y-2 hover:scale-110 cursor-pointer"
            style={{ width: "50px" }} />
          <img src={REACTICON}
            className="w-[50px] transition-all duration-300 hover:-translate-y-2 hover:scale-110 cursor-pointer"
            style={{ width: "50px" }} />
          <img src={DB}
            className="w-[50px] transition-all duration-300 hover:-translate-y-2 hover:scale-110 cursor-pointer"
            style={{ width: "50px" }} />
          <img src={NODE}
            className="w-[50px] transition-all duration-300 hover:-translate-y-2 hover:scale-110 cursor-pointer"
            style={{ width: "50px" }} />
        </div>

      </div>
      <div className='section-3'>
        <h1 className='title'>My Projects</h1>
        <div className='BulkmailProject'>
          <img src={EasyMailLogo} className='w-24 block' alt="Blog Profile Image" />
          <div>
            <h1 className='title'>BulkMail Project</h1>
            <p>I built this application for businesses to send emails to multiple people easily with our user-friendly interface.</p>
            <a
              href="https://bulk-mail-app-theta.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="checkout-btn"
            >
              Check Out
            </a>
          </div>
        </div>
        <div className='E-Comm-Store'>
          <img src={souledstorelogo} className='w-24 block' alt="Blog Profile Image" />
          <div>
            <h1 className='title'>MERN E-Commerce Store</h1>
            <p>
              Product listings, cart functionality,
              category filters, checkout page,
              responsive design.
            </p>
            <a
              href="https://e-commerce-project-one-phi.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="checkout-btn"
            >
              Check Out
            </a>
          </div>
        </div>
        <div className='weatherApp'>
          <img src={weatherApp} className='w-24 block' alt="Blog Profile Image" />
          <div>
            <h1 className='title'>Weather App</h1>
            <p>
              Responsive weather application that displays real-time w
              eather data using a weather API. Built with React and focused on A
              PI integration, state management, and responsive UI design. 🚀
            </p>
            <a
              href="https://react-weather-app-five-indol.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="checkout-btn"
            >
              Check Out
            </a>
          </div>
        </div>
        <h1 className='github'>Explore more projects and source code on my GitHub profile. </h1>
        <a
          href=" https://github.com/johnsimon-007"
          target="_blank"
          rel="noopener noreferrer"
          className="githublink"
        >
          GitHub Repository
        </a>
      </div>
      <div className='section-4'>
        <h1 className='section4-heading'>Let's Build Something Together</h1>
        <h2 className='section4-subheading'>Interested in working with me?</h2>
        <h2 className='contact-Title'>Contact Me Now</h2>
        <div className='contact-container'>
          <img src={aboutProfile} className="w-60 h-60 rounded-full object-cover  shadow-lg" alt="Blog Profile Image" />
          <div className='contact-info' id='contact'>
            <p>+91 8825643219</p>
            <a href="mailto:johnsimonjmj@gmail.com">
             johnsimonjmj@gmail.com
            </a><br/>
            <a href="https://github.com/johnsimon-007 " target="_blank">
              GitHub Profile
            </a>

          </div>
        </div>

      </div>
    </>
  )
}

export default About