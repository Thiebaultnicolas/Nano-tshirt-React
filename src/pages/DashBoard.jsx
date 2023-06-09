import React, { useState, useEffect } from "react";
import ReadRows from "../data/ReadRows";
import { DasboardForm } from "../components/DasboardForm";


function Dashboard() {

  const [Produits, setProduits] = useState([]);

  async function test() {
    // You can await here
    const response = await ReadRows('Produit');
    setProduits(response);
  }
  useEffect(() => {
    test();
  }, []);

  return (
    <>
      <h1>Modification des produits : </h1>
      {Produits.map((value) => {
        return (
         <DasboardForm propsForm={value}/>
        );
      })}
    </>
  );
}

export default Dashboard;
