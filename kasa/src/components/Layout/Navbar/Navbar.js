import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import logo from '../../../Assets/logo.png'

export default function Navbar() {
  return (

    <nav>
      <div className="nav-container">
        <img src={logo} alt="logo" />    
        <ul className="liste-nav">
          <Link to="/" className="items">Accueil</Link>
          <Link to="/apropos" className="items">A Propos</Link>
        </ul>
      </div>
    </nav>
  )
}
