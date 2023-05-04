import React from 'react';
import '../styles/Header.css'
import imgfrog from '../assets/frog.jpg';
import useShowShopLink from '../Hook/useShowShopLink'; // Importation du Hook personnalisé
import { Link } from 'react-router-dom';

function Header() {

    // Utilisation du Hook pour déterminer si le lien "Shop" doit être affiché
    const showShopLink = useShowShopLink(); 

    return (
        <header id='masthead' className='site-header fiwex show ' role='banner'>
            <div className='header-wrap'>
                <div className='container'>
                    <Link to="/" onClick={() => window.scrollTo(0, 0)}>
                        <img src={imgfrog} alt='profil' className='imgfrog' />
                    </Link>
                    <div className='list'>
                        <ul>
                            <li>
                              {/* Utilisation de la balise Link de react-router-dom pour les liens internes */}
                              {/* Au clic, la page est ramenée en haut de la fenêtre grâce à la fonction scrollTo() de l'objet window */}
                              {/* en utilisant l'option behavior pour une transition douce et animée */}
                              <Link to="/" onClick={() => window.scrollTo(0, 0)}>Accueil</Link>
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