import React from 'react'
import logo from '../../../assets/Tasky-logo.png'
import './navbar.css'
import Button from '@mui/material/Button'

const Navbar = () => {
  return (
    <div className="container">
      <img id="nav-logo" src={logo} alt="Logo" />
      <nav className='nav-bar'>
        <Button className="nav-button" variant='contained'>Home</Button>
        <Button className="nav-button" variant='contained'>FAQ</Button>
        <Button className="nav-button" variant='contained'>Contact Us</Button>
      </nav>
    </div>
  )
}

export default Navbar
