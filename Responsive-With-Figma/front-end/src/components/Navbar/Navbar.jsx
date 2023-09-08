import React from 'react'
import "./Navbar.css"

const Navbar = () => {
    return (
        <>
            <nav>
                <a href="#" className="logo">
                    Sound<span className="red">DZign</span>
                </a>

                <ul>
                    <li>
                        <a href="#topics">Course Details</a>
                    </li>

                    <li>
                        <a href="#info">About</a>
                    </li>

                    <li>
                        <a href="#blog">Blog</a>
                    </li>

                    <li>
                        <a href="#testimonials">Testimonials</a>
                    </li>
                </ul>

                {/* <div onClick={() => setIsActive(true)} className="menu-icon">
                    <img src={menuIcon} alt="" />
                </div> */}
            </nav>
        </>
    )
}

export default Navbar