import { NavLink } from "react-router-dom";
import { HiMenu } from 'react-icons/hi'
import "../css/components-css/navbar.css"
import { useState } from "react";
import { CgFileDocument } from "react-icons/cg";
import logo from "../assets/CSTK_logo.png"
import {
    AiOutlineHome,
    AiOutlineFundProjectionScreen,
    AiOutlineUser,
} from "react-icons/ai";

export default function Navbar() {
    const [isExpanded, setIsExpanded] = useState(false)

    return (
        <nav className="navbar-top light-bg">
            <button className="burger-btn" onClick={() => setIsExpanded(!isExpanded)}><HiMenu /></button>
            <ul className={isExpanded ? "navbar-top-ul expanded-nav" : "navbar-top-ul"}>
                <img src={logo} style={{ marginTop: '3vh' }} alt="logo" />
                <li><NavLink className={"navbar-top-navlink"} to="/">
                    <AiOutlineHome style={{ marginRight: '0.5em' }} />
                    Home
                </NavLink></li>
                <li><NavLink className={"navbar-top-navlink"} to="/cv">
                    <CgFileDocument style={{ marginRight: "0.5em" }} />
                    Resume
                </NavLink></li>
                <li><NavLink className={"navbar-top-navlink"} to="/personal-projects"><AiOutlineFundProjectionScreen style={{ marginRight: "0.5em" }} />{" "}
                    Projects</NavLink></li>
                <li><NavLink className={"navbar-top-navlink"} to="/about">
                    <AiOutlineUser style={{ marginRight: "0.5em" }} />
                    Designs
                </NavLink></li>
            </ul>
        </nav>
    )
}