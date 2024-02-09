import React, { useState } from 'react'
import axios from "axios";
import "../styles/style.css"

import { validate } from './Validate'

import { Bounce, toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

import contact from "../Assets/contact.svg"



function Contact() {

    const [loader, setloader] = useState(false)

    const [Name, setName] = useState("")
    const [Email, setEmail] = useState("")
    const [Mobile, setMobile] = useState("")
    const [Subject, setSubject] = useState("")
    const [Message, setMessage] = useState("")

    const [Error, setError] = useState({})


    const OnSubmit = async (e) => {
        e.preventDefault();
        const Error = validate(Name, Email, Mobile, Subject, Message)
        setError(Error)

        const inName = document.querySelector(".name")
        const inEmail = document.querySelector(".email")
        const inMobile = document.querySelector(".Mobile")
        const inSubject = document.querySelector(".Subject")
        const inMessage = document.querySelector(".Message")
        if (Error.name) {
            inName.classList.add("invalid")
        } else {
            inName.classList.remove("invalid")
        }
        if (Error.email) {
            inEmail.classList.add("invalid")
        } else {
            inEmail.classList.remove("invalid")
        }
        if (Error.mobile) {
            inMobile.classList.add("invalid")
        } else {
            inMobile.classList.remove("invalid")
        }
        if (Error.subject) {
            inSubject.classList.add("invalid")
        } else {
            inSubject.classList.remove("invalid")
        }
        if (Error.message) {
            inMessage.classList.add("invalid")
        } else {
            inMessage.classList.remove("invalid")
        }

        if (Object.keys(Error).length === 0) {
            setloader(true)

            try {

                await axios.post("https://nexus-project-3-software-company-website.onrender.com/router/userData", { Name, Email, Mobile, Subject, Message }, { withCredentials: true })

                    .then((res) => {

                        if (res.data.status === "success") {
                            toast.success("Message Sent")
                            setName("");
                            setEmail("");
                            setMobile("");
                            setSubject("");
                            setMessage("");
                        } else {
                            toast.success("Send failed!")
                        }
                    })
                    .catch((err) => {
                        console.log("Message Sending process failed", err)
                    })
            } catch (error) {
                console.log(' form submitting process failed:', error);
            } finally {
                setloader(false)
            }

        }

    }

    return (
        <>
            <div className="contact-section" id='contact'>

                <img src={contact} alt="contant me for business Development" className="contact-img" />

                <div className="contact-right">
                    <h2 className="contact-title">Send us a Message:</h2>
                    <form className='form' onSubmit={OnSubmit} autoComplete="on" noValidate >
                        <div className="top">
                            <div className="error-box">
                                <input className='name' type="text" placeholder='Your Name' value={Name} onChange={(e) => { setName(e.target.value) }} />
                                <p className="error">{Error.name}</p>
                            </div>
                            <div className="error-box">
                                <input className='email' type="email" placeholder='Your Email' value={Email} onChange={(e) => { setEmail(e.target.value) }} />
                                <p className="error">{Error.email}</p>
                            </div>

                        </div>

                        <div className="bottom">
                            <div className="error-box">
                                <input className='Mobile' type="text" placeholder='Mobile Number' value={Mobile} onChange={(e) => { setMobile(e.target.value) }} />
                                <p className="error">{Error.mobile}</p>
                            </div>
                            <div className="error-box">
                                <input className='Subject' type="text" placeholder='Subject' value={Subject} onChange={(e) => { setSubject(e.target.value) }} />
                                <p className="error">{Error.subject}</p>
                            </div>
                        </div>
                        <div className="error-box">
                            <textarea className='Message' name="" id="" cols="40" rows="10" placeholder='Type Your Message' value={Message} onChange={(e) => { setMessage(e.target.value) }}></textarea>
                            <p className="error">{Error.message}</p>
                        </div>

                        <div className='center'>
                            <button className={loader ? ` contact-btn contact-animation` : `contact-btn`}>
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <ToastContainer
                position='top-right'
                autoClose={2000}
                pauseOnFocusLoss={false}
                pauseOnHover={false}
                draggable={false}
                transition={Bounce}
            />
        </>
    )
}

export default Contact