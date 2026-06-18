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
              <li><Link href="https://bank99.at/kontakt"><i className="fa-regular fa-envelope icon-left"></i> contact</Link></li>
              <li className="phone-line">
                <Link href="tel:+43190202">
                  <i className="fa-solid fa-phone icon-left"></i> +43190202
                </Link>
                <span>Du lundi au vendredi, de 8h à 18h</span>
              </li>
              <li><Link href="https://bank99.at/kundenzufriedenheit"><i className="fa-solid fa-scale-balanced icon-left"></i> Bureau de l'Ombudsman</Link></li>
            </ul>
          </div>

          {/* Colonne APPLICATIONS */}
          <div className="footer-col">
            <h3>Applications</h3>
            <ul>
              <li><Link href="https://bank99.at/apps"><span className="logo-badge mini-bank">bank<span>99</span></span> my99</Link></li>
              <li><Link href="https://bank99.at/apps/okay99"><span className="logo-badge mini-okay">okay<span>99</span></span> ok99</Link></li>
              <li><Link href="https://bank99.at/apps/brieftasche99"><span className="logo-badge mini-wallet"><i className="fa-solid fa-wallet"></i></span> portefeuille99</Link></li>
            </ul>
          </div>

          {/* Colonne SÉCURITÉ */}
          <div className="footer-col">
            <h3>Sécurité</h3>
            <ul>
              <li><Link href="https://bank99.at/sicherheit-sperren">Carte de blocage</Link></li>
              <li><Link href="https://bank99.at/datenschutz/cookie-erklaerung#cookie-einstellungen">Paramètres des cookies</Link></li>
              <li><Link href="https://bank99.at/datenschutz">Protection des données</Link></li>
              <li><Link href="https://app.loupe.link/whistleblowing/51de7374-2e2e-408d-8bb3-66adeb57fde8">Dénonciation</Link></li>
              <li><Link href="https://bank99.at/phishing">Hameçonnage</Link></li>
            </ul>
          </div>

          {/* Colonne POURSUIVRE */}
          <div className="footer-col">
            <h3>Poursuivre</h3>
            <ul>
              <li><Link href="https://bank99.at/impressum">imprimer</Link></li>
              <li><Link href="https://bank99.at/rechtliches">Légal</Link></li>
              <li><Link href="https://bank99.at/ueber-uns">À propos de nous</Link></li>
              <li><Link href="https://bank99.at/karriere">carrière</Link></li>
              <li><Link href="https://bank99.at/barrierefreiheit">Accessibilité</Link></li>
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
              <img src="/img/cardcomplete.avif" alt="Nos partenaires" />
              <img src="/img/wuestenrot.avif" alt="Nos partenaires" />
              <img src="/img/ria.avif" alt="Nos partenaires" />
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