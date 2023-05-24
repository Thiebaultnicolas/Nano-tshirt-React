import React, { useState } from "react";
import ReadRows from "../data/ReadRows";
import Dashboard from "./DashBoard.jsx";

function LoginPage() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [isConnect, setConnect] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    const response  =  await ReadRows('Admin');
    const userRequest = response[0].User
    const passwordRequest = response[0].Password
    if (userRequest === user && passwordRequest === password) {
      setConnect(true);
    } else {
      alert("Erreur lors de la connexion !");
    }
  };
  
  if (isConnect === true ) {
    return(<Dashboard/>)
  }

  return (  
    <form onSubmit={handleLogin}>
      <input  value={user} onChange={(e) => setUser(e.target.value)} />
      <input  value={password} onChange={(e) => setPassword(e.target.value)} />
      <button>Se connecter</button>
    </form>
  );
}


export default LoginPage;