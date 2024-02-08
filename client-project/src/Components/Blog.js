import React from 'react'
import "../styles/style.css"

import delivery from "../Assets/delivery.jpg"
import ERP from "../Assets/ERP.jpg"
import ECOM from "../Assets/Ecommerce.jpg"
import logo from "../Assets/logo.jpg"
import parking from "../Assets/Parking-sys.jpg"

function Blog() {
    return (
        <>
            <div className="blog-section" id='blog'>
                <div className="blog-title">
                    Blogs
                </div>
                <div className="grid-container">
                    <div className="vertical-image">
                        <img src={ECOM} alt="Ecommerce Web development" className='blog-img' />
                        <div className="overlay">
                            <p className="overlay-text">Ecommerce Web Store</p>
                        </div>
                    </div>
                    <div className="squared-image">
                        <img src={delivery} alt="Food Delivery Application" className='blog-img' />
                        <div className="overlay">
                            <p className="overlay-text">Delivery App</p>
                        </div>
                    </div>
                    <div className="squared-image">
                        <img src={ERP} alt="ERP Application Development" className='blog-img' />
                        <div className="overlay">
                            <p className="overlay-text">ERP Software</p>
                        </div>
                    </div>
                    <div className="squared-image">
                        <img src={logo} alt="User Interface Designing" className='blog-img' />
                        <div className="overlay">
                            <p className="overlay-text">Logo Design</p>
                        </div>
                    </div>
                    <div className="squared-image">
                        <img src={parking} alt="Parking Management System Application" className='blog-img' />
                        <div className="overlay">
                            <p className="overlay-text">Parking Web System</p>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Blog