import React from 'react'
import "../styles/style.css"

import { VscVerifiedFilled } from "react-icons/vsc";

import img1 from '../Assets/img1.jpg'

function About() {
    return (
        <>
            <div className="about-section" id='about'>
                <div className="about-left">
                    <div className="img-card">
                        <img src={img1} alt="Best software solution"
                            width="452px"
                            height="452px" />
                        <div className="ball1"></div>
                        <div className="ball2"></div>
                    </div>
                </div>
                <div className="about-right">
                    <div className="about-content">
                        <p className="about-title1">
                            Why Choose Us
                        </p>
                        <h2 className="about-title2">
                            Here is perfect Marketing <br /> Solution for you
                        </h2>
                        <p className="about-para">
                            We are helping you to solve your all the tech
                            related problem for boost your business. We have
                            a great supporting team to solve all the problem of
                            your business
                        </p>
                        <div className="about-list">
                            <p className="list">
                                <VscVerifiedFilled className="list-icon" />
                                <span>We provide Best Service.</span>
                            </p>
                            <p className="list">
                                <VscVerifiedFilled className="list-icon" /> <span> Internet without borders.</span>
                            </p>
                            <p className="list">
                                <VscVerifiedFilled className="list-icon" /><span> 24/7 Call Services</span>
                            </p>
                            <p className="list">
                                <VscVerifiedFilled className="list-icon" /><span>No specific time limits.</span>
                            </p>
                        </div>
                        <button className="home-btn1 about-btn">
                            Let's Talk
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About