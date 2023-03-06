import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'
import logo from '../../Assets/Logo/logo.png'

export default function Navbar() {
  return (

    <header className="header">
      <nav className="nav-container">
        <img src={logo} alt="logo" className='logo-header'/>    
        <ul className="liste-nav">
          <NavLink to="/" className="items">Accueil</NavLink>
          <NavLink to="/apropos" className="items">A Propos</NavLink>
        </ul>
      </nav>
    </header>
  )
}
