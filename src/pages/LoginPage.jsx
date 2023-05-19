import React, { useState } from "react";
import { useHistory } from "react-router-dom"; // Importer useHistory de react-router-dom
import ConnectDB from "../data/ConnectDB";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory(); // Créer une instance de useHistory
  const supabase = ConnectDB();

  const handleLogin = async (e) => {
    e.preventDefault();

    const { user, error } = await supabase.auth.signIn({
      email: email,
      password: password,
    });

    if (error) {
      alert("Erreur lors de la connexion !");
    } else {
      history.push('/dashboard'); // Redirigez l'utilisateur vers le tableau de bord
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">Se connecter</button>
    </form>
  );
}

export default LoginPage;
