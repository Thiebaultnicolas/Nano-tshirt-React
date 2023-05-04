import React from 'react'
import '../styles/Commerce.css'
import Nike from '../assets/t-shirt-Rouge.png';
import VIP from '../assets/t-shirt-Blanc.png';
import Adidas from '../assets/t-shirt-Orange.png';
import { Link } from 'react-router-dom';



function Commerce() {
  return (
    <>
        <h1 className='title-commerce'>Top 3 des ventes !</h1>
        <div className='display-vente'>
          <div className='display-tshirt'>
            <Link to="/sale">  
              <div className='background-image'>
                <img src={Nike} alt='Nike' className='Nike'/>
              </div>
            </Link>
            <div className='legende'>
              <p className='tshirt-title'>T-Shirt Homme Rouge</p>
              <p className='tshirt-price'>29.99 EUR</p>
            </div>
          </div>

          <div className='display-tshirt'>
            <a href='../pages/sale.jsx'>
              <div className='background-image'>
                <img src={VIP} alt='vip' className='Vip'/>
              </div>
            </a>
              <div className='legende'>
                <p className='tshirt-title'>T-Shirt Homme VIP</p>
                <p className='tshirt-price'>99.99 EUR</p>
              </div>
          </div>

          <div className='display-tshirt'>
            <a href='../pages/sale.jsx'>
              <div className='background-image'>
                <img src={Adidas} alt='Adidas' className='Adidas'/>
              </div>
            </a>
            <div className='legende'>
              <p className='tshirt-title'>T-Shirt Homme Orange</p>
              <p className='tshirt-price'>29.99 EUR</p>
            </div>
          </div>
        </div> 

    </>
    
  )
}

export default Commerce