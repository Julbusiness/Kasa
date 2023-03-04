import React from 'react'
import { Link } from 'react-router-dom'
import './NotFound.css'


export default function Error() {
  return (
    <div className="container container-notfound">
      <h1 className="title-notfound">404</h1>
      <p className="txt-notfound">Oups! La page que vous demandez n'existe pas.</p>
      <Link to="/" className="link-notfound">Retourner sur la page d'accueil</Link>
    </div>
  )
}
