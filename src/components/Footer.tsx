"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* SECTION 1 : LES 4 COLONNES DE LIENS */}
        <div className="footer-links-grid">
          
          {/* Colonne AIDE */}
          <div className="footer-col">
            <h3>Aide</h3>
            <ul>
              <li><Link href="#"><i className="fa-solid fa-location-dot icon-left"></i> Lieux</Link></li>
              <li><Link href="#"><i className="fa-regular fa-circle-question icon-left"></i> FAQ</Link></li>
              <li><Link href="#"><i className="fa-regular fa-envelope icon-left"></i> contact</Link></li>
              <li className="phone-line">
                <Link href="tel:+43190202">
                  <i className="fa-solid fa-phone icon-left"></i> +43190202
                </Link>
                <span>Du lundi au vendredi, de 8h à 18h</span>
              </li>
              <li><Link href="#"><i className="fa-solid fa-scale-balanced icon-left"></i> Bureau de l'Ombudsman</Link></li>
            </ul>
          </div>

          {/* Colonne APPLICATIONS */}
          <div className="footer-col">
            <h3>Applications</h3>
            <ul>
              <li><Link href="#"><span className="logo-badge mini-bank">bank<span>99</span></span> my99</Link></li>
              <li><Link href="#"><span className="logo-badge mini-okay">okay<span>99</span></span> ok99</Link></li>
              <li><Link href="#"><span className="logo-badge mini-wallet"><i className="fa-solid fa-wallet"></i></span> portefeuille99</Link></li>
            </ul>
          </div>

          {/* Colonne SÉCURITÉ */}
          <div className="footer-col">
            <h3>Sécurité</h3>
            <ul>
              <li><Link href="#">Carte de blocage</Link></li>
              <li><Link href="#">Paramètres des cookies</Link></li>
              <li><Link href="#">Protection des données</Link></li>
              <li><Link href="#">Dénonciation</Link></li>
              <li><Link href="#">Hameçonnage</Link></li>
            </ul>
          </div>

          {/* Colonne POURSUIVRE */}
          <div className="footer-col">
            <h3>Poursuivre</h3>
            <ul>
              <li><Link href="#">imprimer</Link></li>
              <li><Link href="#">Légal</Link></li>
              <li><Link href="#">À propos de nous</Link></li>
              <li><Link href="#">carrière</Link></li>
              <li><Link href="#">Accessibilité</Link></li>
            </ul>
          </div>

        </div>

        {/* BOUTON RETOUR EN HAUT (Flèche isolée en haut à droite) */}
        <button className="scroll-to-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Retour en haut">
          <i className="fa-solid fa-arrow-up"></i>
        </button>

        {/* SECTION 2 : BAS DU FOOTER (PARTENAIRES & RÉSEAUX) */}
        <div className="footer-bottom">
          
          {/* Bloc Partenaires à gauche */}
          <div className="footer-partners">
            <h4>Nos partenaires</h4>
            <div className="partners-logos">
              <img src="/img/log.png" alt="Nos partenaires" />
            </div>
          </div>

          {/* Bloc Réseaux Sociaux à droite */}
          <div className="footer-socials">
            <h4>Suivez-nous sur</h4>
            <div className="social-icons">
              <Link href="#" aria-label="Facebook"><i className="fa-brands fa-facebook-f"></i></Link>
              <Link href="#" aria-label="Instagram"><i className="fa-brands fa-instagram"></i></Link>
              <Link href="#" aria-label="YouTube"><i className="fa-brands fa-youtube"></i></Link>
              <Link href="#" aria-label="LinkedIn"><i className="fa-brands fa-linkedin-in"></i></Link>
            </div>
          </div>

        </div>

      </div>
    </footer>
  );
}