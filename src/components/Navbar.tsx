"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  // Stocke le nom du menu principal actuellement déroulé
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  // Stocke le nom du sous-menu imbriqué actuellement déroulé
  const [activeSubDropdown, setActiveSubDropdown] = useState<string | null>(null);

  // Fonction pour basculer un menu principal
  const toggleDropdown = (menuName: string, e: React.MouseEvent) => {
    e.preventDefault();
    if (activeDropdown === menuName) {
      setActiveDropdown(null);
      setActiveSubDropdown(null); // Ferme aussi les sous-menus si le parent se ferme
    } else {
      setActiveDropdown(menuName);
    }
  };

  // Fonction pour basculer un sous-menu imbriqué (sans fermer le parent)
  const toggleSubDropdown = (subMenuName: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation(); // Empêche la propagation du clic vers le bouton parent
    if (activeSubDropdown === subMenuName) {
      setActiveSubDropdown(null);
    } else {
      setActiveSubDropdown(subMenuName);
    }
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        
        {/* LE BANDEAU DU HAUT (TOUJOURS VISIBLE) */}
        <div className="nav-header">
          <div className="nav-brand">
            <Link href="/">
              <img src="/img/log.png" alt="Logo" style={{ cursor: "pointer" }} />
            </Link>
          </div>

          {/* Barre de recherche ovale : UNIQUEMENT VISIBLE SUR MOBILE */}
          <div className="mobile-search">
            <i className="fa-solid fa-location-dot"></i>
            <span>Trouver l'emplacement</span>
          </div>

          {/* Bouton Burger / Croix pour ouvrir le menu sur mobile */}
          <button className="burger-menu" onClick={() => setIsOpen(!isOpen)} aria-label="Menu">
            <i className={isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i>
          </button>
        </div>

        {/* LE MENU */}
        <div className={`nav-content ${isOpen ? "open" : ""}`}>
          
          <ul className="nav-links">
            
            {/* LIEN 1 : COMPTE */}
            <li className={`has-dropdown ${activeDropdown === "Compte" ? "active" : ""}`}>
              <a href="#" onClick={(e) => toggleDropdown("Compte", e)}>
                <span>Compte</span>
              </a>
              <ul className="dropdown-menu">
                <li><Link href="#" onClick={() => setIsOpen(false)}>Compte courant</Link></li>
                <li><Link href="#" onClick={() => setIsOpen(false)}>Compte étudiant</Link></li>
                <li><Link href="#" onClick={() => setIsOpen(false)}>Cartes bancaires</Link></li>
              </ul>
            </li>

            {/* LIEN 2 : SAUVEGARDER */}
            <li className={`has-dropdown ${activeDropdown === "Sauvegarder" ? "active" : ""}`}>
              <a href="#" onClick={(e) => toggleDropdown("Sauvegarder", e)}>
                <span>Sauvegarder</span>
              </a>
              <ul className="dropdown-menu">
                <li><Link href="#" onClick={() => setIsOpen(false)}>Livret d'épargne</Link></li>
                <li><Link href="#" onClick={() => setIsOpen(false)}>Épargne logement</Link></li>
              </ul>
            </li>

            {/* LIEN 3 : FINANCE */}
            <li className={`has-dropdown ${activeDropdown === "Finance" ? "active" : ""}`}>
              <a href="#" onClick={(e) => toggleDropdown("Finance", e)}>
                <span>Finance</span>
              </a>
              <ul className="dropdown-menu">
                <li><Link href="#" onClick={() => setIsOpen(false)}>Prêt personnel</Link></li>
                <li><Link href="#" onClick={() => setIsOpen(false)}>Financement immobilier</Link></li>
              </ul>
            </li>

            {/* LIEN 4 : INVESTIR */}
            <li className={`has-dropdown ${activeDropdown === "Investir" ? "active" : ""}`}>
              <a href="#" onClick={(e) => toggleDropdown("Investir", e)}>
                <span>Investir</span>
              </a>
              <ul className="dropdown-menu">
                <li><Link href="#" onClick={() => setIsOpen(false)}>Actions & ETF</Link></li>
                <li><Link href="#" onClick={() => setIsOpen(false)}>Fonds d'investissement</Link></li>
              </ul>
            </li>

            {/* LIEN 5 : BLOG */}
            <li>
              <Link href="#" onClick={() => setIsOpen(false)}>
                <span>Blog</span>
                <i className="fa-solid fa-chevron-right arrow-mobile-only"></i>
              </Link>
            </li>

            {/* LIEN 6 : À PROPOS */}
            <li>
              <Link href="#" onClick={() => setIsOpen(false)}>
                <span>À propos de nous</span>
                <i className="fa-solid fa-chevron-right arrow-mobile-only"></i>
              </Link>
            </li>

          </ul>

          {/* ZONE EN BAS SUR MOBILE / À DROITE SUR PC */}
          <div className="nav-buttons-container">
            <div className="nav-buttons">
              
              {/* BOUTON DEVENEZ CLIENT AVEC MENU DÉROULANT COMPLET */}
              <div className={`has-dropdown btn-dropdown-wrapper ${activeDropdown === "DevenezClient" ? "active" : ""}`}>
                <button className="btn-yellow" onClick={(e) => toggleDropdown("DevenezClient", e)}>
                  <span>Devenez client</span>
                  <i className="fa-solid fa-chevron-down chevron-pc-only"></i>
                  <i className="fa-solid fa-arrow-right arrow-btn-mobile-only"></i>
                </button>
                
                <ul className="dropdown-menu button-dropdown">
                  <li>
                    <Link href="#" onClick={() => setIsOpen(false)}>
                      <strong>compte99</strong>
                      <p>Des services bancaires à votre image. Personnalisés, simples et abordables.</p>
                    </Link>
                  </li>
                  <li>
                    <Link href="#" onClick={() => setIsOpen(false)}>
                      <strong>flexsparen99</strong>
                      <p>Épargnez en toute flexibilité grâce à votre compte d’épargne à accès quotidien.</p>
                    </Link>
                  </li>
                  
                  {/* OPTION AVEC SOUS-OPTIONS DÉROULANTES */}
                  <li className={`has-sub-dropdown ${activeSubDropdown === "OuvrirCompteOptions" ? "sub-active" : ""}`}>
                    <a href="#" onClick={(e) => toggleSubDropdown("OuvrirCompteOptions", e)} className="sub-dropdown-trigger">
                      <div>
                        <strong>Ouvrir un compte</strong>
                        <p>Entrez dans le monde des investissements avec le compte de courtage gratuit.</p>
                      </div>
                      <i className="fa-solid fa-chevron-right arrow-mobile-only"></i>
                    </a>
                    
                    {/* LE SOUS-MENU DE DEUXIÈME NIVEAU */}
                    <ul className="sub-dropdown-menu">
                      <li>
                        <Link href="#" onClick={() => setIsOpen(false)}>
                          Compte de courtage gratuit
                        </Link>
                      </li>
                      <li>
                        <Link href="#" onClick={() => setIsOpen(false)}>
                          Option d'investissement 99
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <Link href="#" onClick={() => setIsOpen(false)}>
                      <strong>prêt rond99</strong>
                      <p>Réalisez vos rêves grâce à un prêt à la consommation allant jusqu’à 50 000 €.</p>
                    </Link>
                  </li>
                  <li>
                    <Link href="#" onClick={() => setIsOpen(false)}>
                      <strong>économies réalisées grâce à la construction 99</strong>
                      <p>Épargnez régulièrement de petites sommes grâce à un contrat d’épargne-logement.</p>
                    </Link>
                  </li>
                </ul>
              </div>

              {/* BOUTON SE CONNECTER CHANGÉ EN LINK POUR LA REDIRECTION */}
<Link href="/login" className="btn-outline" onClick={() => setIsOpen(false)}>
  Se connecter 
  <i className="fa-solid fa-chevron-down chevron-pc-only"></i>
  <i className="fa-solid fa-arrow-right arrow-btn-mobile-only"></i>
</Link>
            </div>
          </div>

        </div>

      </div>
    </nav>
  );
}