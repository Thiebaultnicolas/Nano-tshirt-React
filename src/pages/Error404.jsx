import React from "react";
import '../styles/Error404.css';
import { Link } from 'react-router-dom'


const Error404 = () => (
    <div className="Error404">
        <h1 className="Error404_code">404</h1>
        <p className="Error404_message">Oups! La page que vous demandez n'existe pas.</p>
        <Link to="/" className="Error404_link">Retourner sur la page d'accueil</Link>
    </div>
)

export default Error404