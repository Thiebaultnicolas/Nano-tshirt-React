import React from 'react';
import '../styles/Header.css'
import imgfrog from '../assets/frog.jpg';
import useShowShopLink from '../Hook/useShowShopLink'; // Importation du Hook personnalisé
import { Link } from 'react-router-dom';

function Header() {

    // Utilisation du Hook pour déterminer si le lien "Shop" doit être affiché
    const showShopLink = useShowShopLink(); 

    // Ajout d'un écouteur d'événements qui change la classe CSS de l'élément header
    // en fonction de la position de défilement de la page
    window.addEventListener('scroll', function() {
      const header = document.querySelector('header');
      header.classList.toggle("sticky", window.scrollY > 0);
    });

    return (
        <header id='masthead' className='site-header fiwex show ' role='banner'>
            <div className='header-wrap'>
                <div className='container'>
                    <a href='../pages/Home.jsx'>
                        <img src={imgfrog} alt='profil' className='imgfrog' />
                    </a>
                    <div className='list'>
                        <ul>
                            <li>
                              {/* Utilisation de la balise Link de react-router-dom pour les liens internes */}
                              <Link to="/">Accueil</Link>
                            </li>
                            <li>
                              {/* Condition pour afficher ou non le lien "Shop" */}
                              {showShopLink && <a href="#scroll">Shop</a>}
                            </li>
                            <li>
                              <a href="#footer">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;