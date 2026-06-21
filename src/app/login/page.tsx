"use client";


import { useState } from "react";
import Link from "next/link";

export default function LoginCard() {
  const [step, setStep] = useState<1 | 2>(1);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    if (username.trim() !== "") {
      setStep(2);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logique de connexion finale ici
    console.log("Connexion avec :", { username, password });
  };

  return (
    <div className="login-page-wrapper">
      <div className="login-card">
        
        {/* EN-TÊTE DE LA CARTE DE CONNEXION */}
<div className="card-header">
  
  {/* ÉTAPE 1 : Retour à la page d'accueil */}
  {step === 1 && (
    <Link href="/" className="back-button" aria-label="Retour à l'accueil">
      <i className="fa-solid fa-house"></i> {/* Tu peux remplacer par "fa-arrow-left" si tu préfères une flèche */}
    </Link>
  )}

  {/* ÉTAPE 2 : Retour à l'étape 1 du formulaire */}
  {step === 2 && (
    <button className="back-button" onClick={() => setStep(1)} aria-label="Retour">
      <i className="fa-solid fa-chevron-left"></i>
    </button>
  )}

  <h2>{step === 1 ? "Registre" : "Se connecter"}</h2>
</div>

        {/* CONTENU DE LA CARTE */}
        <div className="card-body">
          <p className="welcome-text">
            Bonjour de la part des services bancaires en ligne de bank99 ! :-)
          </p>

          {step === 1 ? (
            /* ÉTAPE 1 : NOM D'UTILISATEUR */
            <form onSubmit={handleNextStep} className="login-form">
              <div className="input-group-header">
                <label htmlFor="username">nom d'utilisateur</label>
                <div className="lang-links">
                  <a href="#">Accessible</a> | <a href="#">Anglais</a>
                </div>
              </div>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                autoFocus
                required
              />
              <button type="submit" className="btn-yellow-submit">
                Plus loin
              </button>
              <div className="form-footer-link">
                <a href="#">Vous avez oublié votre nom d'utilisateur ?</a>
              </div>
            </form>
          ) : (
            /* ÉTAPE 2 : MOT DE PASSE */
            <form onSubmit={handleSubmit} className="login-form">
              <div className="input-group-header">
                <label>nom d'utilisateur</label>
              </div>
              <div className="username-display">{username}</div>

              <div className="input-group-header" style={{ marginTop: "15px" }}>
                <label htmlFor="password">mot de passe</label>
              </div>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoFocus
                required
              />
              <button type="submit" className="btn-yellow-submit">
                Registre
              </button>
              <div className="form-footer-link">
                <a href="#">Mot de passe oublié ?</a>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
}