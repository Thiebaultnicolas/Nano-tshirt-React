import React from 'react'
import '../styles/Commerce.css'
import Nike from '../assets/t-shirt-Rouge.png';
import VIP from '../assets/t-shirt-Blanc.png';
import Adidas from '../assets/t-shirt-Orange.png';

 function Commerce() {
  return (
    <>
        <h1 className='title-commerce'>Top 3 des ventes !</h1>
        <div className='display-vente'>
          <div className='display-tshirt'>
            <a href='#'>
              <div className='background-image'>
                <img src={Nike} alt='Nike' className='Nike'/>
              </div>
            </a>
            <div className='legende'>
              <p>T-Shirt Homme Rouge</p>
              <p>29.99 EUR</p>
            </div>
          </div>

          <div className='display-tshirt'>
            <a href='#'>
              <div className='background-image'>
                <img src={VIP} alt='vip' className='Vip'/>
              </div>
            </a>
              <div className='legende'>
                <p>T-Shirt Homme VIP</p>
                <p>99.99 EUR</p>
              </div>
          </div>

          <div className='display-tshirt'>
            <a href='#'>
              <div className='background-image'>
                <img src={Adidas} alt='Adidas' className='Adidas'/>
              </div>
            </a>
            <div className='legende'>
              <p>T-Shirt Homme Orange</p>
              <p>29.99 EUR</p>
            </div>
          </div>
        </div> 

    </>
    
  )
}

export default Commerce