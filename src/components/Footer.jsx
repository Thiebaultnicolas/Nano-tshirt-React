import React from 'react'
import '../styles/Footer.css'

function Footer({ isSalePage }) {

     // Ajout de la classe conditionnellement
  const footerClass = isSalePage ? 'pieddepage footerSalePage' : 'pieddepage';

  return (

     <footer className={footerClass}>
                <div class="tableau"> 
                    <h3>A propos</h3>     
                    <a href="#">Fonctionnement du site </a>
                    <a href="#">Conditions générales de vente </a>
                    <a href="#">Données et confidentialité</a>
                </div>
                <div class="tableau" id="nos_hebergements">
                    <h3> Nos meilleurs ventes</h3>       
                    <a href="#">Charte qualité</a>
                    <a href="#">Soumettre vos offres</a>
                </div>
                <div class="tableau" id="assistance">
                    <h3>Assistance</h3>       
                    <a href="#">Centre d'aide</a>
                    <a href="#">Nous contacter</a>
                </div>
            </footer>  
  )
}

export default Footer