import React from "react";
import './Footer.scss'
import video from '../../Images/vdo.mp4'
import { FiSend } from 'react-icons/fi'
import { AiOutlineTwitter, AiFillYoutube, AiFillInstagram } from "react-icons/ai";
import { FaTripadvisor } from 'react-icons/fa'
const Footer = () => {
    return (
        <section className="footer">
            <div className="videoDiv">
                <video src={video} loop autoPlay muted typeof="video/mp4" />
            </div>

            <div className="secContent container">
                <div className="contactDiv flex">
                    <div className="text">
                        <small>KEEP IN TOUCH</small>
                        <h2>Travel with us.</h2>
                    </div>

                    <div className="inputDiv flex">
                        <input type="text" placeholder="Enter your email address" />
                        <button className="btn flex" type="submit">
                            SEND <FiSend className="icon" />
                        </button>
                    </div>
                </div>

                <div className="footerCard flex">
                    <div className="footerIntro flex">
                        <div className="logoDiv">
                            <a href="#" className="logo flex">Vacafly.
                            </a>
                        </div>

                        <div data-aos-easing="ease-in-back"
                            data-aos="fade-zoom-in"
                            data-aos-duration="1000"
                            className="footerParagraph">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias architecto sit culpa, in quas id deserunt reiciendis laudantium magni. Modi labore voluptatum incidunt hic assumenda sed, ratione natus libero! Placeat!
                        </div>

                        <div className="footerSocials">
                            <AiOutlineTwitter className="icon" />
                            <AiFillYoutube className="icon" />
                            <AiFillInstagram className="icon" />
                            <FaTripadvisor className="icon" />
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}
export default Footer