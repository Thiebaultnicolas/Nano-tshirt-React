import React, { useState, useEffect } from 'react';
import '../styles/Tshirt.css';
import { useSearchParams } from 'react-router-dom';
import ReadRows from '../data/ReadRows';

async function DisplayData(Url, setProduit) {
  const response = await ReadRows('Produit');
  const Filtrage = response.find(response => parseInt(response.id) === parseInt(Url))
  setProduit(Filtrage);
}

function Tshirt() {
  const [selectedSize, setSelectedSize] = useState('');
  const [showSizes, setShowSizes] = useState(false);

  const handleSizeClick = (size) => {
    setSelectedSize(size);
    setShowSizes(false);
  };

  const [searchParams] = useSearchParams();
  const Url = searchParams.get('id')

  const [Produit, setProduit] = useState([]);

  useEffect(() => {
    DisplayData(Url, setProduit);
  }, [Url]);

  return (
    <div className="product-content">
      <div className="product-details">
        <div className="product-info">
          <h4>{Produit.Title}</h4>
          <h5>{Produit.Price} EUR</h5>
          <div className="size-select">
            <button onClick={() => setShowSizes(!showSizes)}>
              {selectedSize ? selectedSize : 'Taille'}
            </button>
            <div className={`size-options ${showSizes ? 'visible' : ''}`}>
              {showSizes && (
                <>
                  <button onClick={() => handleSizeClick('XS')} className={selectedSize === 'XS' ? 'selected' : ''}>XS</button>
                  <button onClick={() => handleSizeClick('S')} className={selectedSize === 'S' ? 'selected' : ''}>S</button>
                  <button onClick={() => handleSizeClick('M')} className={selectedSize === 'M' ? 'selected' : ''}>M</button>
                  <button onClick={() => handleSizeClick('L')} className={selectedSize === 'L' ? 'selected' : ''}>L</button>
                  <button onClick={() => handleSizeClick('XL')} className={selectedSize === 'XL' ? 'selected' : ''}>XL</button>
                  <button onClick={() => handleSizeClick('XXL')} className={selectedSize === 'XXL' ? 'selected' : ''}>XXL</button>
                </>
              )}
            </div>
          </div>
          <div className="add-to-cart">
            <button className="add-to-cart-btn" disabled>Ajouter au panier</button>
          </div>
        </div>
        <div className="product-image">
          <img src={Produit.Image}  alt="T-shirt rouge" className='Red' />
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