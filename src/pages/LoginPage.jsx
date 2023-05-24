import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import ReadRows from "../data/ReadRows";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    const response  =  await ReadRows('Admin');
    const userRequest = response[0].User
    const passwordRequest = response[0].Password
    if (userRequest === email && passwordRequest === password) {
      navigate('/dashboard');
    } else {
      alert("Erreur lors de la connexion !");
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <input  value={email} onChange={(e) => setEmail(e.target.value)} />
      <input  value={password} onChange={(e) => setPassword(e.target.value)} />
      <button>Se connecter</button>
    </form>
  );
}

export default LoginPage;