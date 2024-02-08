import React from 'react'
import "../styles/style.css"

import SD from "../Assets/SD.png"
import Android from "../Assets/Android.png"
import AR from "../Assets/AR.png"
import cloud from "../Assets/cloud.png"
import testing from "../Assets/testing.png"
import ui from "../Assets/ui.png"

function Service() {
    return (
        <>
            <div className="service-section" id='service'>
                <div className="service-layout">
                    <p className="service-title">
                        Our services
                    </p>
                    <div className="service-card">
                        <div className="scard">

                            <div className="scard-center">
                                <img src={SD} alt="Software Development" className="scard-img" />
                            </div>

                            <h2 className="service-title1">
                                Software Development
                            </h2>

                            <p className="scard-content">
                                Crafting tailored solutions with cutting-edge technologies, our software development services empower businesses to thrive in the digital landscape, delivering scalable and efficient applications.
                            </p>
                            <div className="slide"></div>
                        </div>

                        <div className="scard">
                            <div className="scard-center">
                                <img src={Android} alt="Android Development" className="scard-img" />
                            </div>
                            <h2 className="service-title1">
                                Android Development
                            </h2>
                            <p className="scard-content">
                                Elevate your mobile presence with our Android development expertise, creating feature-rich and user-friendly apps that seamlessly integrate with the Android ecosystem.
                            </p>
                            <div className="slide"></div>
                        </div>

                        <div className="scard">
                            <div className="scard-center">
                                <img src={ui} alt="User Interface/User Experience" className="scard-img" />
                            </div>
                            <h2 className="service-title1">
                                UI/UX Designing
                            </h2>
                            <p className="scard-content">
                                Bring your brand to life with our expert UI/UX designing, where aesthetics meet functionality, ensuring an intuitive and delightful user experience across all digital platforms.
                            </p>
                            <div className="slide"></div>
                        </div>

                        <div className="scard">
                            <div className="scard-center">
                                <img src={cloud} alt="Cloud service" className="scard-img" />
                            </div>
                            <h2 className="service-title1">
                                Cloud Services
                            </h2>
                            <p className="scard-content">
                                Transform your business operations with our comprehensive cloud services, enabling seamless scalability, enhanced security, and optimal performance for your applications and data.
                            </p>
                            <div className="slide"></div>
                        </div>

                        <div className="scard">
                            <div className="scard-center">
                                <img src={AR} alt="Augmented Reality" className="scard-img" />
                            </div>
                            <h2 className="service-title1">
                                AR/VR Development
                            </h2>
                            <p className="scard-content">
                                Immerse your audience in captivating experiences with our AR/VR development services, pushing the boundaries of innovation to create interactive and futuristic virtual worlds.
                            </p>
                            <div className="slide"></div>
                        </div>

                        <div className="scard">
                            <div className="scard-center">
                                <img src={testing} alt="Software Testing" className="scard-img" />
                            </div>
                            <h2 className="service-title1">
                                Software Testing
                            </h2>
                            <p className="scard-content">
                                Ensuring flawless performance, our software testing services meticulously evaluate and validate applications, guaranteeing the reliability, security, and optimal functionality of your software products.
                            </p>
                            <div className="slide"></div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="count-section">
                <div className="count-img">
                    <div className="count-color">
                        <div className="content">
                            <p className='content1'>15k</p>
                            <p className="content2">HAPPY CLIENTS</p>
                        </div>
                        <div className="content">
                            <p className='content1'>10k</p>
                            <p className="content2">PROJECTS</p>
                        </div>
                        <div className="content">
                            <p className='content1'>10+</p>
                            <p className="content2">AWARDS</p>
                        </div>
                    </div>
                    <div className="count-content"></div>
                </div>

            </div>
        </>
    )
}

export default Service