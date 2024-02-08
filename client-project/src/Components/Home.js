import React from 'react'
import home_img from "../Assets/home-img.jpg"

import { IoPlay, IoListOutline } from "react-icons/io5";
import { IoIosGitBranch } from "react-icons/io";
import { MdGroups } from "react-icons/md";
import { PiCodeBold } from "react-icons/pi";

function Home() {
    return (
        <>
            <div className="home-section" id='home'>

                <div className="home-container">
                    <div className="home-left">
                        <p className="home-subtitle">Welcome to Our Company</p>
                        <h2 className='home-title'>
                            Clear Thinking<br />
                            Makes  Bright Future!
                        </h2>
                        <p className="home-para">
                            Effective was created with the idea of bringing you multipurpose and flexible IT Solutions. We use various innovative technologies that make your work not only easier but more productive without unnecessary coding.
                        </p>
                        <div className="home-btn">
                            <button className="home-btn1">
                                Get Started
                            </button>

                            <IoPlay className='play-btn' />

                        </div>
                    </div>
                    <div className="home-right">
                        <div className="img-card">
                            <img src={home_img} alt="software solution"
                                width="452px"
                                height="452px" />
                            <div className="ball1"></div>
                            <div className="ball2"></div>
                        </div>
                    </div>
                </div>

                <div className="home-cardsection">
                    <div className="home-card">
                        <IoIosGitBranch className='icon1' />
                        <h2 className="homecard-title">Access Control</h2>
                        <p className="homecard-para">Ensure data integrity with robust access controls, empowering to manage user permissions seamlessly.
                        </p>
                    </div>
                    <div className="home-card">
                        <MdGroups className='icon2' />
                        <h2 className="homecard-title">Team Management</h2>
                        <p className="homecard-para">Streamline collaboration and boost productivity with intuitive team management tools, fostering a cohesive and efficient workflow.</p>
                    </div>
                    <div className="home-card">
                        <PiCodeBold className='icon3' />
                        <h2 className="homecard-title">Code Security</h2>
                        <p className="homecard-para">Safeguard your digital assets with state of the art code security measures, providing peace of mind for your development projects.</p>
                    </div>
                    <div className="home-card">
                        <IoListOutline className='icon4' />
                        <h2 className="homecard-title">Zero Configuration</h2>
                        <p className="homecard-para"> Experience hassle free deployment and optimization with our zero-configuration solutions, simplifying your software setup.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home