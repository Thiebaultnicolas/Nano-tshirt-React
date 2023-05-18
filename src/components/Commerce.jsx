import React, { useEffect, useState } from "react";
import "../styles/Commerce.css";
import { Link } from "react-router-dom";
import ReadRows from "../data/ReadRows";

function Commerce() {
  const [Produits, setProduits] = useState([]);

  async function test() {
    // You can await here
    const response = await ReadRows();
    setProduits(response);
  }
  useEffect(() => {
    test();
  }, []);

  return (
    <>
      <h1 className="title-commerce">Top 3 des ventes !</h1>
      <div className="display-vente">
        {Produits.map((value) => {
          return (
            <div key={value} className="display-tshirt">
              <Link to={"/sale?id=" + value.id}>
                <div className="background-image">
                  <img src={value.Image} alt="Nike" className="Nike" />
                </div>
              </Link>
              <div className="legende">
                <p className="tshirt-title">{value.Title}</p>
                <p className="tshirt-price">{value.Price} EUR</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Commerce;
