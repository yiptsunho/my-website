import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/NavBar.css';

function NavBar() {

  const [click, setClick] = useState(false)
  function handleClick() {setClick(!click)}

  return (
    <div className="header">
      <Link to="/my-website">
        <h1>Jacky.</h1>
      </Link>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li> 
        <Link to="/my-website" onClick={handleClick}>Home</Link>
        </li>
        <li> 
        <Link to="/resume" onClick={handleClick}>Resume</Link>
        </li>
        <li className="nav-item dropdown show">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Projects
            </a>
            <ul className="dropdown-menu">
                <li><Link to="/projects" className="dropdown-item">
                    Overview
                </Link></li>
                <li>
                    <hr className="dropdown-divider" />
                </li>
                <li><Link to="/projects/tictactoe" className="dropdown-item">
                    Tic tac toe
                </Link></li>
                <li><Link to="/projects/calculator" className="dropdown-item">
                    Calculator
                </Link></li>
                <li><Link to="/projects/todolist" className="dropdown-item">
                    To do list
                </Link></li>
            </ul>
        </li>  
        <li className="nav-item hide">
        <Link to="/projects" onClick={handleClick}>Projects</Link>
        </li>
        <li>
        <Link to="/contact" onClick={handleClick}>Contact</Link>
        </li>
        <li className="nav-item">
          <a href="https://github.com/yiptsunho" target="_blank"><i className="fa-brands fa-github px-3" /></a>
          <a href="https://www.linkedin.com/in/jacky-yip-81953318b" target="_blank"><i className="fa-brands fa-linkedin px-3" /></a>
          <a href="https://www.facebook.com/jacky.yip.908" target="_blank"><i className="fa-brands fa-facebook px-3"/></a>
        </li>
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {click ? (
          <i className="fa-solid fa-xmark fa-2x" />
        ) : (
          <i className="fa-solid fa-bars fa-2x" />
        )
        } 
      </div>
    </div>
  )
};

export default NavBar;
