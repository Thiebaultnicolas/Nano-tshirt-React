import React from 'react'
import '../styles/Header.css'
import imgfrog from '../assets/frog.jpg'

function Header() {

  return (
    <header id='masthead' className='site-header fiwex show' role='banner'>
        <div className="header-wrap">
            <div className="container">
                <a href='../pages/Home.jsx'>
                    <img src={imgfrog} alt="profil" className='imgfrog' />
                </a>
                <div className='list'>
                    <ul>
                        <li><a href="../pages/Home.jsx">Accueil</a></li>
                        <li><a href="../pages/Home.jsx">Shop</a></li>
                        <li><a href="../pages/Home.jsx">Contact</a></li>
                    </ul> 
                </div>
            </div>
        </div>
        
    </header>
  )
}

export default Header