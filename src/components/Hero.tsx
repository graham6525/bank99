"use client";

import { useState, useEffect } from "react";
import Link from "next/link"; // Importation du composant Link

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
  },
  {
    id: 2,
    title: "Investissez pendant 6 mois et recevez jusqu'à 90 € de bonus.",
    highlight: "",
    subtitle: "",
    warning: "Avertissement relatif aux risques : Les investissements dans des instruments financiers comportent des risques, y compris la perte possible du capital investi.",
    buttonText: "Concernant la campagne",
    buttonLink: "https://bank99.at/investieren", // Mets ton lien ici
    imageSrc: "/img/ACERNITROGAMINGHEADSET.png",
    imageAlt: "Investissement bonus"
  },
  {
    id: 3,
    title: "Pour tout le reste, vous avez besoin de :",
    highlight: "rundumkredit99",
    subtitle: "Des voitures neuves aux rénovations : avec rundumkredit99, vous pouvez financer tout ce dont vous avez besoin – rapidement, en toute transparence et facilement.",
    buttonText: "Calculer le prêt",
    buttonLink: "/calcul-pret", // Mets ton lien ici
    imageSrc: "/img/sofa.png",
    imageAlt: "Crédit rundumkredit99"
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

      </div>
    </section>
  );
}