import React from 'react'
import Navbar from './common/Navbar'
import BlogProfileImage from "../assets/portfolioProfile.jpeg"
import CSS from "../assets/css-3.png"
import HTML from "../assets/html.png"
import DB from "../assets/data-server.png"
import JS from "../assets/js.png"
import REACTICON from "../assets/physics.png"
import NODE from "../assets/node-js.png"
import P1 from "../assets/p1.jpg"
import P2 from "../assets/p2.png"
import P3 from "../assets/p3.png"
import BlogImage from "../assets/blogImage.png"
import { useNavigate } from 'react-router-dom';
import Footer from './common/Footer'
import { Link } from "react-router-dom";


function Home() {
    const navigate = useNavigate()
    return (
        <div>

            <div className='flex items-center justify-center'>
                <div className="w-full sm:w-1/2 flex-col justify-center">
                    <h2 className='text-3xl md:text-6xl font-bold pb-2'>Hy! I Am</h2>
                    <h2 className='text-4xl md:text-7xl font-bold text-orange-400 py-2'>John Simon</h2>
                    <img src={BlogProfileImage} className='w-60 block sm:hidden' alt="Blog Profile Image" />
                    <h2 className='text-2xl mt-5 '>Aspiring Full Stack Developer</h2>
                    <h2 className='font-bold text-2xl '>React • Node.js • Express • MongoDB</h2>
                    <p className='py-2'>Passionate MERN Stack Developer focused on building responsive and user-friendly web applications.</p>
                    <Link
                        to="/about"
                        state={{ scrollToContact: true }}
                    >
                        <button className='button-style mt-2'>Hire Me</button>
                    </Link>
                </div>
                <div className='justify-center hidden sm:block'>
                    <img src={BlogProfileImage} className='w-60 md:w-96 ' alt="Blog Profile Image" />

                </div>

            </div>


            <div className='flex justify-evenly py-6'>
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

            <div className='flex flex-col mt-10 items-center justify-around sm:flex-row'>
                <div className='flex-col'>
                    <div className='mt-4 rounded-lg p-5 border-t-0 w-60 flex-col items-center'>
                        <div className='rounded-full border-2 p-5 font-bold text-white text-center bg-gradient-to-br from-purple-200 to-purple-600'>15+</div>
                        <p className='text-center font-medium'>Projects Completed</p>
                    </div>
                    <div className='mt-4  rounded-lg p-5 border-t-0 w-60 flex-col items-center'>
                        <div className='rounded-full border-2 p-5 font-bold text-white text-center bg-gradient-to-br from-green-200 to-green-600'>6</div>

                        <p className='text-center font-medium'>Months of Experience</p>
                    </div>
                </div>

                <div className='ml-4 mt-4 sm:mt-0'>
                    <h2 className='text-3xl sm:text-7xl font-bold'>My Awesome</h2>
                    <h2 className='text-3xl sm:text-7xl font-bold text-orange-400'>Services</h2>
                    <p className='my-2'>I have attahed my Resume here for your Reference</p>
                    <a
                        href="/John-Simon-Resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="button-style mt-2 inline-block"
                    >
                        Download CV
                    </a>

                </div>
            </div>

            <div className='flex items-center justify-center my-14'>
                <div className='justify-center hidden sm:block'>
                    <img src={BlogImage} className='w-60 md:w-96 ' alt="Blog Profile Image" />

                </div>
                <div className="w-full sm:w-1/2 flex-col justify-center ml-6">
                    <h2 className='text-3xl md:text-6xl font-bold pb-2'>I like to Write</h2>
                    <h2 className='text-4xl md:text-7xl font-bold text-orange-400 py-2'>Blogs about tech</h2>

                    <p className='py-2'>You can know better about me by reading my blogs here. I share my expertise here.</p>
                    <button className='button-style mt-2' onClick={() => navigate("/blogs")}>Read My Blogs</button>
                </div>


            </div>


            <Footer />


        </div>
    )
}

export default Home