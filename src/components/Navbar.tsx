"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  // Stocke le nom du menu actuellement déroulé (ex: "Compte", "Sauvegarder", etc.) ou null
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  // Fonction pour basculer un sous-menu
  const toggleDropdown = (menuName: string, e: React.MouseEvent) => {
    e.preventDefault(); // Empêche la navigation immédiate
    if (activeDropdown === menuName) {
      setActiveDropdown(null); // Ferme si déjà ouvert
    } else {
      setActiveDropdown(menuName); // Ouvre le sous-menu ciblé
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
                {/* <i className="fa-solid fa-chevron-down arrow-pc-only"></i>
                <i className="fa-solid fa-chevron-right arrow-mobile-only"></i> */}
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
                {/* <i className="fa-solid fa-chevron-down arrow-pc-only"></i>
                <i className="fa-solid fa-chevron-right arrow-mobile-only"></i> */}
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
                {/* <i className="fa-solid fa-chevron-down arrow-pc-only"></i>
                <i className="fa-solid fa-chevron-right arrow-mobile-only"></i> */}
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
                {/* <i className="fa-solid fa-chevron-down arrow-pc-only"></i>
                <i className="fa-solid fa-chevron-right arrow-mobile-only"></i> */}
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
              <button className="btn-yellow">
                Devenez client 
                <i className="fa-solid fa-chevron-down chevron-pc-only"></i>
                <i className="fa-solid fa-arrow-right arrow-btn-mobile-only"></i>
              </button>
              <button className="btn-outline">
                Se connecter 
                <i className="fa-solid fa-chevron-down chevron-pc-only"></i>
                <i className="fa-solid fa-arrow-right arrow-btn-mobile-only"></i>
              </button>
            </div>
          </div>

        </div>

      </div>
    </nav>
  );
}