import React from 'react';
import logo from "../assets/images/img-logo.svg";
import { Link } from 'react-router-dom';
import '../App.css';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg">
        <a className="navbar-brand ms-5 mb-2 text-white">
            Jacky
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse me-auto" id="navbarTogglerDemo02">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/" className="nav-link text-white px-3 my-2">
                        Home
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/Resume" className="nav-link text-white px-3 my-2">
                        Resume
                    </Link>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle text-white px-3 my-2" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Projects
                    </a>
                    <ul className="dropdown-menu">
                        <li><Link to="/Projects" className="dropdown-item">
                            Overview
                        </Link></li>
                        <li>
                            <hr className="dropdown-divider" />
                        </li>
                        <li><Link to="/tic-tac-toe" className="dropdown-item">
                            Tic tac toe
                        </Link></li>
                        <li><Link to="/calculator" className="dropdown-item">
                            Calculator
                        </Link></li>
                        <li><Link to="/minesweeper" className="dropdown-item">
                            Minesweeper
                        </Link></li>
                    </ul>
                </li>   
                <li className="nav-item">
                    <Link to="/Contact" className="nav-link text-white px-3">
                        <button className="btn btn-outline-light" style={{fontWeight: "bold", borderRadius: "0.2rem"}}>Contact</button>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/OldTesting" className="nav-link text-white px-3 my-2">
                        OldTesting
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/Testing" className="nav-link text-white px-3 my-2">
                        Testing
                    </Link>
                </li>                
            </ul>
            <form className="justify-content-start fa-2x">
                <a href="https://www.facebook.com/jacky.yip.908" target="_blank"><i className="fa-brands fa-facebook px-3"/></a>
                <a href="https://www.linkedin.com/in/jacky-yip-81953318b" target="_blank"><i className="fa-brands fa-linkedin px-3" /></a>
            </form>
        </div>
    </nav>
  )
}

export default Navbar;
