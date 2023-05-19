import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import signUpUser from "../utils/signUpUser";

function SignupPage() {
  // State pour les valeurs de l'e-mail et du mot de passe
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  const handleSignup = async (e) => {
    e.preventDefault();

    // Appel à la fonction signUpUser pour effectuer l'inscription
    const user = await signUpUser(email, password);

    if (user) {
      // Rediriger l'utilisateur vers la page de connexion ou autre page appropriée
      history.push("/login");
    } else {
      // Gérer l'erreur d'inscription
      alert("Erreur lors de l'inscription. Veuillez réessayer.");
    }
  };

  // Le reste du code de votre composant SignupPage
  // ...
}

export default SignupPage;