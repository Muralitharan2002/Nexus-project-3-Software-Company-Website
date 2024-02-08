import React, { useState } from 'react'
import "../styles/style.css"
import { Link } from 'react-scroll';

import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";

function Header() {
    const [Navbar, setNavbar] = useState(false)



    return (
        <>
            <div className="header-section" >
                <div className="header-line">
                    <div className="header-title">
                        <h3 className='header-title1'>Techy</h3>
                        <h3 className='header-title2'>Soft.</h3>
                    </div>

                    <div className={Navbar ? "nav-bar setNav" : "nav-bar"}>
                        <MdClose className='close-btn' onClick={() => setNavbar(false)} />

                        <div className=" nav-hide">
                            <h3 className='nav-title1'>Techy</h3>
                            <h3 className='nav-title2'>Soft.</h3>
                        </div>

                        <Link to="home" offset={-100} spy={true} smooth={true} duration={500} > <p className="nav-items" onClick={() => setNavbar(!Navbar)}> Home    </p></Link>
                        <Link to="about" offset={-100} spy={true} smooth={true} duration={500}> <p className="nav-items" onClick={() => setNavbar(!Navbar)}> About Us</p></Link>
                        <Link to="service" offset={-80} spy={true} smooth={true} duration={500}><p className="nav-items" onClick={() => setNavbar(!Navbar)}> Services</p> </Link>
                        <Link to="blog" offset={-80} spy={true} smooth={true} duration={500}>   <p className="nav-items" onClick={() => setNavbar(!Navbar)}>  Blog   </p> </Link>
                    </div>

                    <div className="header-btn">
                        <Link to="contact" offset={-50} spy={true} smooth={true} duration={500}>
                            <button className="contact">Contact</button>
                        </Link>

                        <GiHamburgerMenu className='hamburger-btn' onClick={() => setNavbar(true)} />
                    </div>

                </div>

            </div>


        </>
    )
}

export default Header