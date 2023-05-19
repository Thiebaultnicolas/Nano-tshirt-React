import React, { useEffect, useState } from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from '../pages/Home'
import { Sale } from '../pages/Sale'
import Error404 from '../pages/Error404'
import Dashboard from '../pages/DashBoard'
import ConnectDB from '../data/ConnectDB'; // Importer ConnectDB
import LoginPage from '../pages/LoginPage'; // Importer le composant LoginPage

function Path() {
  // Créer une instance de Supabase
  const supabase = ConnectDB();
  
  // Définir un état pour l'utilisateur
  const [user, setUser] = useState(supabase.auth.user || null);

  // Mettre à jour l'utilisateur lorsque l'état d'authentification change
  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        setUser(session?.user || null);
      }
    );
    
    // Supprimer l'écouteur d'événement lors du démontage du composant
    return () => {
      // Vérifiez si la méthode unsubscribe existe avant de l'appeler
      if (typeof authListener.unsubscribe === 'function') {
        authListener.unsubscribe();
      }
    };
  }, [supabase]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sale" element={<Sale />} />
        <Route path="/dashboard" element={user ? <Dashboard /> : <Home />} />
        <Route path="/login" element={<LoginPage />} /> 
        <Route path="/*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Path;