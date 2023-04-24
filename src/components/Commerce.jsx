import React from 'react'
import '../styles/Commerce.css'
import Nike from '../assets/t-shirt-Nike.jpg';
import VIP from '../assets/t-shirt VIP.jpg';
import Adidas from '../assets/t-shirt-Adidas.jpg';

export default function Commerce() {
  return (
    <>
        <h1 className='title-commerce'>Top 3 des ventes !</h1>
        <div className='display-vente'>
          <div className='display-tshirt'>
            <img src={Nike} alt='Nike' className='Nike'/>
            <div className='legende'>
                <p>T-Shirt Homme Nike</p>
                <p>29.99 EUR</p>
            </div>
          </div>
          <div className='display-tshirt'>
            <img src={VIP} alt='vip' className='Vip'/>
            <div className='legende'>
              <p>T-Shirt Homme VIP</p>
              <p>99.99 EUR</p>
            </div>
          </div>
          <div className='display-tshirt'>
            <img src={Adidas} alt='Adidas' className='Adidas'/>
            <div className='legende'>
              <p>T-Shirt Homme Adidas</p>
              <p>29.99 EUR</p>
            </div>
          </div>
        </div> 
    </>
    
  )
}
