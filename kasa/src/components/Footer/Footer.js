import React from 'react'
import './Footer.css'
import logoFooter from '../../Assets/logo-footer.png'

export default function Footer() {
  return (
    <footer className='footer'>
      <img src={logoFooter} alt="" className='logo-footer'/>
      <p className="footer-txt">© 2020 Kasa. All rights reserved</p>
    </footer>
  )
}
