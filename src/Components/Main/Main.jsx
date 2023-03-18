import React, { useEffect } from "react";
import './Main.scss'

import image from '../../Images/img.jpg'
import image2 from '../../Images/img2.jpg'
import image3 from '../../Images/img3.jpg'
import image4 from '../../Images/img4.jpg'
import image5 from '../../Images/img5.jpg'
import image6 from '../../Images/img6.jpg'
import { HiOutlineLocationMarker, HiOutlineClipboardCheck } from "react-icons/hi";
import 'aos/dist/aos.css';
import AOS from 'aos';

const Data = [
    {
        id: 1,
        imgSrc: image,
        destTitle: 'Bora Bora',
        location: 'New Zealand',
        grade: 'CULTURAL RELAX',
        fees: '$700',
        description: 'The epitome of romance,Bora Bora is one of the best travel destinations in the world.This place is known for its luxurious stays and adventurous activities.'
    },

    {
        id: 2,
        imgSrc: image2,
        destTitle: 'Bora Bora',
        location: 'New Zealand',
        grade: 'CULTURAL RELAX',
        fees: '$400',
        description: 'The epitome of romance,Bora Bora is one of the best travel destinations in the world.This place is known for its luxurious stays and adventurous activities.'
    },

    {
        id: 3,
        imgSrc: image3,
        destTitle: 'Bora Bora',
        location: 'New Zealand',
        grade: 'CULTURAL RELAX',
        fees: '$1700',
        description: 'The epitome of romance,Bora Bora is one of the best travel destinations in the world.This place is known for its luxurious stays and adventurous activities.'
    },

    {
        id: 4,
        imgSrc: image4,
        destTitle: 'Bora Bora',
        location: 'New Zealand',
        grade: 'CULTURAL RELAX',
        fees: '$2700',
        description: 'The epitome of romance,Bora Bora is one of the best travel destinations in the world.This place is known for its luxurious stays and adventurous activities.'
    },

    {
        id: 5,
        imgSrc: image5,
        destTitle: 'Bora Bora',
        location: 'New Zealand',
        grade: 'CULTURAL RELAX',
        fees: '$3700',
        description: 'The epitome of romance,Bora Bora is one of the best travel destinations in the world.This place is known for its luxurious stays and adventurous activities.'
    },

    {
        id: 6,
        imgSrc: image6,
        destTitle: 'Bora Bora',
        location: 'New Zealand',
        grade: 'CULTURAL RELAX',
        fees: '$6700',
        description: 'The epitome of romance,Bora Bora is one of the best travel destinations in the world.This place is known for its luxurious stays and adventurous activities.'
    }
]




const Main = () => {

    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, [])

    return (
        <section className="main container section">
            <div className="secTitle">
                <h3 data-aos="fade-right" data-aos-duration="5000"
                    className="title">
                    Most visited destinations
                </h3>
            </div>


            <div className="secContent grid">
                {
                    Data.map(({ id, imgSrc, destTitle, location, grade, fees, description }) => {

                        return (
                            <div key={id}
                                data-aos="fade-up"
                                className="singleDestination"
                            >
                                <div className="imageDiv">
                                    <img src={imgSrc} alt={destTitle} />
                                </div>

                                <div className="cardInfo">
                                    <h4 className="destTitle">{destTitle}</h4>
                                    <span className="continent flex">
                                        <HiOutlineLocationMarker className="icon" />
                                        <span className="name">{location}</span>

                                    </span>

                                    <div className="fees flex">
                                        <div className="grade">
                                            <span>{grade} <small>+1</small> </span>

                                        </div>
                                        <div className="price">
                                            <h5>{fees}</h5>
                                        </div>

                                    </div>

                                    <div className="desc">
                                        <p>{description}</p>
                                    </div>

                                    <button className="btn flex">
                                        DETAILS <HiOutlineClipboardCheck />
                                    </button>
                                </div>
                            </div>
                        )
                    })
                }

            </div>



        </section>
    )
}
export default Main