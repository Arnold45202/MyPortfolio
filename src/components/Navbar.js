import React from 'react'
import { Link } from 'react-router-dom'
import '../styleSheets/Navbar.css';

function Navbar() {
  return (
    <div className='navbar'>
        <div className='buttons'>

        </div>
        <div className='links'>
            <Link to="/MyPortfolio" className="nav-link"> Home </Link>
            <Link to="/about" className="nav-link"> About Me </Link>
            <Link to="/projects" className="nav-link"> Projects </Link>
            <a href='https://drive.google.com/file/d/1jbZEj_w5e9sRa_FmcJ4vIXJWZuDcylv-/view?usp=sharing' className="nav-link" target="_blank" rel="noopener noreferrer"> Resume </a>
        </div>
    </div>
  )
}

export default Navbar