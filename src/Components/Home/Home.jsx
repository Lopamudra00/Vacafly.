import React, { useEffect } from "react";
import './Home.scss'
import { GrLocation } from 'react-icons/gr'
import { HiFilter } from 'react-icons/hi'
import { FiFacebook } from 'react-icons/fi'
import { SiTripadvisor } from 'react-icons/si'
import video1 from '../../Images/video.mp4'
import { AiOutlineInstagram } from 'react-icons/ai'
import { BsListTask } from 'react-icons/bs'
import { TbApps } from 'react-icons/tb'
import AOS from 'aos';

const Home = () => {

    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);

    return (
        <section className="home">
            <div className="overlay"></div>
            <video src={video1} loop autoPlay muted typeof="video/mp4" />

            <div className="homeContent container">
                <div className="textDiv">
                    <span
                        data-aos="fade-up"
                        className="smallText">
                        Our Packages
                    </span>
                    <h1 data-aos="fade-up"
                        className="homeTitle">
                        Search your Holiday
                    </h1>
                </div>

                <div data-aos="fade-up"
                    className="cardDiv grid">
                    <div className="destinationInput">
                        <label htmlFor="city">Search Your Destination</label>
                        <div className="input flex">
                            <input type="text" placeholder="Enter name" />
                            <GrLocation />
                        </div>
                    </div>

                    <div className="dateInput">
                        <label htmlFor="date">Select Your Date</label>
                        <div className="input flex">
                            <input type="date" />
                        </div>
                    </div>

                    <div className="priceInput">
                        <div className="label_total flex">
                            <label htmlFor="price">Max Price:</label>
                            <h3 className="total">$5000</h3>
                        </div>
                        <div className="input flex">
                            <input type="range" max="5000" min="1000" />
                        </div>
                    </div>

                    <div className="searchOptions flex">
                        <HiFilter className="icon" />
                        <span>MORE FILTERS</span>
                    </div>

                </div>

                <div data-aos="fade-up" className="homeFooterIcon flex">
                    <div className="leftIcons">
                        <FiFacebook className="icon" />
                        <AiOutlineInstagram className="icon" />
                        <SiTripadvisor className="icon" />

                    </div>
                    <div className="rightIcons">
                        <BsListTask className="icon" />
                        <TbApps className="icon" />
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Home