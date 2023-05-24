import React, { useEffect, useState } from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from '../pages/Home'
import { Sale } from '../pages/Sale'
import Error404 from '../pages/Error404'
import LoginPage from '../pages/LoginPage'; // Importer le composant LoginPage

function Path() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sale" element={<Sale />} />
        <Route path="/login" element={<LoginPage />} /> 
        <Route path="/*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Path;