"use client";

import { useState, useEffect } from "react";
import Link from "next/link"; // Importation du composant Link
import LoanCalculator from "@/components/LoanCalculator";

interface Slide {
  id: number;
  title: string;
  highlight: string;
  subtitle: string;
  warning?: string;
  badge?: string;
  buttonText: string;
  buttonLink: string; // Ajout du type pour le lien
  imageSrc: string;
  imageAlt: string;
}

const slides: Slide[] = [
  
  {
    id: 1,
    title: "Lancez votre projet de maison de rêve :",
    highlight: "wohnkredit99",
    subtitle: "Vous rêvez de devenir propriétaire ? Notre prêt immobilier vous le permet.",
    buttonText: "Calculateur de prêt en ligne",
    buttonLink: "/calcul-pret", // Mets ton lien ici
    imageSrc: "/img/wohnhome.png",
    imageAlt: "Projet de maison de rêve wohnkredit99"
  }
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  // Défilement automatique toutes les 7 secondes
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  return (
    <section className="hero-section">

      <div className="hero-container">

        <LoanCalculator />
        {/* AFFICHAGE DES CARDS DU SLIDER */}
        <div className="hero-slider">
          {slides.map((slide, index) => (
            <div 
              key={slide.id} 
              className={`hero-slide ${index === current ? "active" : ""}`}
            >
              {/* CÔTÉ GAUCHE : TEXTES & BOUTONS */}
              <div className="hero-content">
                <h1 className="hero-title">
                  {slide.title} {slide.highlight && <span className="hero-highlight"><br/>{slide.highlight}</span>}
                </h1> 
                
                {slide.subtitle && <p className="hero-subtitle">{slide.subtitle}</p>}
                {slide.warning && <p className="hero-warning">{slide.warning}</p>}
                
                {/* Le bouton devient un Link pour la redirection de Next.js */}
                <Link href={slide.buttonLink} className="hero-btn">
                  {slide.buttonText} <i className="fa-solid fa-arrow-right"></i>
                </Link>
              </div>

              {/* CÔTÉ DROIT : IMAGE + BADGE OPTIONNEL */}
              <div className="hero-image-wrapper">
                {slide.badge && <div className="hero-badge">{slide.badge}</div>}
                <img src={slide.imageSrc} alt={slide.imageAlt} className="hero-img" />
              </div>
            </div>
          ))}
        </div>
        <section className="calc-intro-section">
  <div className="calc-intro-container">
    <p className="calc-intro-text">
      Notre prêt <strong>wohnkredit99</strong> vous permet d’emprunter entre 50 000 € et 1 000 000 € pour financer 
      l’acquisition de votre bien immobilier idéal. Vous pouvez choisir une durée de remboursement de 5 à 35 
      ans et différentes options de taux d’intérêt : fixe, variable ou mixte.
    </p>
  </div>
</section>

        {/* NAVIGATION / DOTS EN BAS */}
        <div className="hero-navigation">
          <div className="hero-dots">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`hero-dot ${index === current ? "active" : ""}`}
                onClick={() => setCurrent(index)}
                aria-label={`Aller à la diapositive ${index + 1}`}
              />
            ))}
          </div>
          <button className="hero-next-arrow" onClick={nextSlide} aria-label="Diapositive suivante">
            <i className="fa-solid fa-play"></i>
          </button>
        </div>

<section className="news-section">
  <div className="news-container">
    
    {/* TITRE PRINCIPAL AVEC LIGNE NOIRE */}
    <div className="news-header">
      <div className="news-accent-line"></div>
      <h2 className="news-title">En savoir plus...</h2>
    </div>

    {/* GRILLE DES CARTES */}
    <div className="news-grid">
      
      {/* CARTE 1 */}
      <div className="news-card">
        <div className="news-image-box">
          <img src="/img/finant1.avif" alt="Réduire les coûts fixes" />
        </div>
        <div className="news-content">
          <h3>Financement immobilier</h3>
          <p>Vous êtes-vous récemment demandé combien d'argent vous devez à votre propriétaire ?</p>
          <a style={{textDecoration: "none"}} href='https://bank99.at/blog/wohnfinanzierung-suchen-und-finden' className="btn-yellow-news">Plus d'informations</a>
        </div>
      </div>

      {/* CARTE 2 */}
      <div className="news-card">
        <div className="news-image-box">
          <img src="/img/finant2.avif" alt="Opérations bancaires" />
        </div>
        <div className="news-content">
          <h3>Restructuration de la dette</h3>
          <p>Quels sont les facteurs clés d'un refinancement ? Voici deux exemples.</p>
          <a style={{textDecoration: "none"}}  href='https://bank99.at/blog/eine-umschuldung-ueber-wirkungen-und-positive-nebenwirkungen' className="btn-yellow-news">Plus d'informations</a>
        </div>
      </div>

      {/* CARTE 3 */}
      <div className="news-card">
        <div className="news-image-box">
          <img src="/img/finant3.avif" alt="Gagnez de l'argent" />
        </div>
        <div className="news-content">
          <h3>Construction de logement</h3>
          <p>Tout sur le plan de relance économique « Offensive logement et construction ».</p>
          <a style={{textDecoration: "none"}}  href='https://bank99.at/blog/wohn-und-baupaket-2024' className="btn-yellow-news">Plus d'informations</a>
        </div>
      </div>

    </div>

  </div>
</section>


 <section className="credit-section">
  <div className="credit-container">
    
    {/* COLONNE GAUCHE : IMAGE */}
    <div className="credit-image-box">
      <img src="/img/sofa.png" alt="logo" />
    </div>

    {/* COLONNE DROITE : CONTENU */}
    <div className="credit-content">
      <div className="credit-accent-line"></div>
      <h2>Notre priorité : une consultation personnalisée sans conditions.</h2>
      <p>
        Vous bénéficierez d'un accompagnement personnalisé tout au long du processus de consultation. Nous sommes à votre disposition par téléphone, en visioconférence ou en personne.
Nos experts en financement immobilier travailleront avec vous pour trouver la solution de financement idéale.
À Vienne, nous vous accueillons en plein cœur de la ville, dans notre centre de construction résidentielle situé sur la Fleischmarkt. La prise de rendez-vous est obligatoire.
Vous pouvez compter sur notre meilleure offre, sans renégociation, sans frais supplémentaires liés à votre solvabilité et sans coûts cachés.
      </p>
      <a style={{textDecoration: "none"}} href='https://bank99.at/kredit' className="btn-yellow-pill">
        Accédez au calculateur de prêt ➔
      </a>
    </div>

  </div>
  <div className="credit-container">
    
   

    {/* COLONNE DROITE : CONTENU */}
    <div className="credit-content">
      <div className="credit-accent-line"></div>
      <h2>wohnkredit99 : Lance la construction de votre maison de rêve. </h2>
      <p>
        Avec nous, vous bénéficiez des meilleures conditions, sans frais cachés, et de conseils compétents et fiables dès la première consultation.
      </p>
      <a style={{textDecoration: "none"}} href='https://bank99.at/wohnfinanzierung/wohnkredit99' className="btn-yellow-pill">
        À wohnkredit99 ➜
      </a>
    </div>
     {/* COLONNE GAUCHE : IMAGE */}
    <div className="credit-image-box">
      <img src="/img/wohnhome.png" alt="logo" />
    </div>
  </div>
</section>
      </div>
    </section>

    
  );
}