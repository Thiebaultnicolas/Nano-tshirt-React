import React, { useState } from 'react';
import tshirtRouge from '../assets/t-shirt-Rouge.png';
import '../styles/Tshirt.css';

function Tshirt() {
  const [selectedSize, setSelectedSize] = useState('');

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  return (
    <div className="product-content">
      <div className="product-details">
        <div className="product-info">
          <h4>T-Shirt Rouge pour Homme Manche Courte</h4>
          <h5>Prix : 29.99 EUR</h5>
          <div className="size-select">
            <button onClick={() => handleSizeClick('')}>
              {selectedSize ? selectedSize : 'Taille'}
            </button>
            <div className={`size-options ${selectedSize ? 'visible' : ''}`}>
              <button onClick={() => handleSizeClick('XS')} className={selectedSize === 'XS' ? 'selected' : ''}>XS</button>
              <button onClick={() => handleSizeClick('S')} className={selectedSize === 'S' ? 'selected' : ''}>S</button>
              <button onClick={() => handleSizeClick('M')} className={selectedSize === 'M' ? 'selected' : ''}>M</button>
              <button onClick={() => handleSizeClick('L')} className={selectedSize === 'L' ? 'selected' : ''}>L</button>
              <button onClick={() => handleSizeClick('XL')} className={selectedSize === 'XL' ? 'selected' : ''}>XL</button>
              <button onClick={() => handleSizeClick('XXL')} className={selectedSize === 'XXL' ? 'selected' : ''}>XXL</button>
            </div>
          </div>
        </div>
        <div className="product-image">
          <img src={tshirtRouge} alt="T-shirt rouge" className='Red' />
        </div>
        <div className="product-description">
          <p>COMPOSITION & CARACTÈRISTIQUES <br />
           ENVIRONNEMENTALES</p>
          <p>COMPOSITION</p>
          <p>Nous travaillons avec des programmes de suivi pour<br /> 
          garantir le respect de nos standards sociaux, environnementaux,<br />
          et de sécurité et de santé. <br />
          Pour évaluer leur exécution, nous avons mis au point<br />
          un programme d'audits et des plans d'amélioration continue.</p>
        </div>
      </div>
    </div>
  );
}

export default Tshirt;