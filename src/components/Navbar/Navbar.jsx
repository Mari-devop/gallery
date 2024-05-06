import React from 'react'
import { NavbarContainer } from './NavbarStyled'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <NavbarContainer>
        <nav className='navbar-container container'>
            <div className='navbar-logo'>
                <h1><Link to="/">galleria.</Link></h1>
            </div>
            <div className='navbar-link'>
                <ul>
                    <li><Link to="/slideshow">start slideshow</Link></li>
                </ul>
            </div>
        </nav>
    </NavbarContainer>
  )
}

export default Navbar
