import React from 'react'
import './Footer.css'
import logoFooter from '../../../Assets/logo-footer.png'

export default function Footer() {
  return (
    <div className="footer-container">
      <img src={logoFooter} alt="" className='logo-footer'/>
      <p className="footer-txt">© 2020 Kasa. All rights reserved</p>
    </div>
  )
}
