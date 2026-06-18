"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        
        {/* LE BANDEAU DU HAUT (TOUJOURS VISIBLE) */}
        <div className="nav-header">
          <div className="nav-brand">
            {/* <div className="logo-bank">bank<br/><span>99</span></div>
            <div className="logo-post">
              <i className="fa-solid fa-envelope-open-text"></i>
            </div> */}
            <img src="/img/log.png" alt="" />
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

        {/* LE MENU (SUR PC: EN LIGNE ET APPLAT / SUR MOBILE: FULLSCREEN) */}
        <div className={`nav-content ${isOpen ? "open" : ""}`}>
          
          <ul className="nav-links">
            <li>
              <Link href="#" onClick={() => setIsOpen(false)}>
                <span>Compte</span>
                <i className="fa-solid fa-chevron-right arrow-mobile-only"></i>
              </Link>
            </li>
            <li>
              <Link href="#" onClick={() => setIsOpen(false)}>
                <span>Sauvegarder</span>
                <i className="fa-solid fa-chevron-right arrow-mobile-only"></i>
              </Link>
            </li>
            <li>
              <Link href="#" onClick={() => setIsOpen(false)}>
                <span>Finance</span>
                <i className="fa-solid fa-chevron-right arrow-mobile-only"></i>
              </Link>
            </li>
            <li>
              <Link href="#" onClick={() => setIsOpen(false)}>
                <span>Investir</span>
                <i className="fa-solid fa-chevron-right arrow-mobile-only"></i>
              </Link>
            </li>
            {/* <li>
              <Link href="#" onClick={() => setIsOpen(false)}>
                <span>Prenez des précautions</span>
                <i className="fa-solid fa-chevron-right arrow-mobile-only"></i>
              </Link>
            </li> */}
            <li>
              <Link href="#" onClick={() => setIsOpen(false)}>
                <span>Blog</span>
                <i className="fa-solid fa-chevron-right arrow-mobile-only"></i>
              </Link>
            </li>
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