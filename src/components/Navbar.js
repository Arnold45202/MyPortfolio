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
            <Link to="/contacts" className="nav-link"> Contacts </Link>
        </div>
    </div>
  )
}

export default Navbar