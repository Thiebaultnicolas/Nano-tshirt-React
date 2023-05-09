import React from 'react';
import Header from '../components/Header';
import Tshirt from '../components/Tshirt-blanc';
import Footer from '../components/Footer';
import "../styles/Global.css";

export const SaleOrange = () => {
  return (
    <>
      <div className="sale-page">
        <Header salePage={true} />
        <div className="main-content">
          <Tshirt />
        </div>
        <Footer isSalePage={true} />
      </div>
    </>
  );
};