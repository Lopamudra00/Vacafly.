import React, { useState } from 'react'
import { CgMoveDown } from "react-icons/cg";
import { AiOutlineCloseCircle } from "react-icons/ai";

import './Navbar.scss'
const Navbar = () => {
    const [active, setActive] = useState('navBar')
    const showNav = () => {
        setActive('navBar activeNavbar')
    }

    const removeNavbar = () => {
        setActive('navBar')
    }
    return (
        <div>
            <section className='navBar'>
                <header className='header flex'>

                    <div className='logoDiv'>
                        <a href="#" className='logo flex'>
                            <h1>Vacafly.</h1>
                        </a>
                    </div>

                    <div className={active}>
                        <ul className='navList'>
                            <li className='navItem'>
                                <a href='#' className='navLink'>Home</a>
                            </li>
                            <li className='navItem'>
                                <a href='#' className='navLink'>Packages</a>
                            </li>
                            <li className='navItem'>
                                <a href='#' className='navLink'>Shop</a>
                            </li>
                            <li className='navItem'>
                                <a href='#' className='navLink'>Contact</a>
                            </li>
                            <button className='btn'>
                                <a href='#'>BOOK NOW</a>
                            </button>
                        </ul>

                        <div onClick={removeNavbar} className='closeNavbar'>
                            <AiOutlineCloseCircle />
                        </div>

                    </div>

                    <div onClick={showNav} className='toggleNavbar'>
                        <CgMoveDown />
                    </div>
                </header>

            </section>
        </div>
    )
}
export default Navbar