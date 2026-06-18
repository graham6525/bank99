"use client";

import React, { useRef, useState } from 'react';
import Hero from '@/components/Hero';

export default function Page() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth } = scrollContainerRef.current;
      const index = Math.round(scrollLeft / clientWidth);
      setActiveIndex(index);
    }
  };

  return (
    <div>
      <Hero />

      {/* SECTION : 3 BONNES RAISONS */}
      <section className="reasons-section">
        <div className="reasons-container">
          
          <h2 className="reasons-main-title">
            3 bonnes raisons de choisir Bank99
          </h2>

          {/* Grille sur PC / Slider horizontal sur Mobile */}
          <div 
            className="reasons-grid" 
            ref={scrollContainerRef}
            onScroll={handleScroll}
          >
            
            {/* CARTE 1 */}
            <div className="reason-card">
              <div className="reason-image-box">
                <img src="/img/icon-location.avif" alt="Fermer / Proximité" />
              </div>
              <div className="reason-content">
                <h3>Fermer</h3>
                <p>Avec environ 1 700 agences réparties dans toute l'Autriche, il y en a toujours une à proximité de chez vous.</p>
              </div>
            </div>

            {/* CARTE 2 */}
            <div className="reason-card">
              <div className="reason-image-box">
                <img src="/img/icon-snap.avif" alt="Simplement" />
              </div>
              <div className="reason-content">
                <h3>Simplement</h3>
                <p>Notre objectif : rendre les opérations bancaires plus faciles que jamais et le prouver chaque jour davantage.</p>
              </div>
            </div>

            {/* CARTE 3 */}
            <div className="reason-card">
              <div className="reason-image-box">
                <img src="/img/icon-affordable.avif" alt="Abordable" />
              </div>
              <div className="reason-content">
                <h3>Abordable</h3>
                <p>Notre objectif est d'offrir à nos clients un rapport qualité-prix exceptionnel.</p>
              </div>
            </div>

          </div>

          {/* Indicateurs (Dots) - Uniquement visibles sur Mobile */}
          <div className="reasons-mobile-dots">
            {[0, 1, 2].map((index) => (
              <span 
                key={index} 
                className={`reasons-dot ${index === activeIndex ? 'active' : ''}`}
              />
            ))}
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
      <h2>rundumkredit99 : Un taux d’intérêt annuel effectif fixe de 8,12 % est une bonne affaire.</h2>
      <p>
        Avec un taux d’intérêt fixe, vous bénéficiez du taux d’intérêt actuel pour toute la durée du prêt et connaissez donc le coût du prêt dès le départ.
      </p>
      <button className="btn-yellow-pill">
        Accédez au calculateur de prêt ➔
      </button>
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
      <button className="btn-yellow-pill">
        À wohnkredit99 ➜
      </button>
    </div>
     {/* COLONNE GAUCHE : IMAGE */}
    <div className="credit-image-box">
      <img src="/img/wohnhome.png" alt="logo" />
    </div>
  </div>
</section>


<section className="news-section">
  <div className="news-container">
    
    {/* TITRE PRINCIPAL AVEC LIGNE NOIRE */}
    <div className="news-header">
      <div className="news-accent-line"></div>
      <h2 className="news-title">Quoi de neuf?</h2>
    </div>

    {/* GRILLE DES CARTES */}
    <div className="news-grid">
      
      {/* CARTE 1 */}
      <div className="news-card">
        <div className="news-image-box">
          <img src="/img/news-costs.avif" alt="Réduire les coûts fixes" />
        </div>
        <div className="news-content">
          <h3>Réduire les coûts fixes</h3>
          <p>Que comprennent exactement les coûts fixes et comment pouvez-vous économiser de l'argent à ce niveau ?</p>
          <button className="btn-yellow-news">Plus d'informations</button>
        </div>
      </div>

      {/* CARTE 2 */}
      <div className="news-card">
        <div className="news-image-box">
          <img src="/img/news-banking.avif" alt="Opérations bancaires" />
        </div>
        <div className="news-content">
          <h3>Opérations bancaires e...</h3>
          <p>Services bancaires numériques avec les applications meine99 et okay99.</p>
          <button className="btn-yellow-news">Plus d'informations</button>
        </div>
      </div>

      {/* CARTE 3 */}
      <div className="news-card">
        <div className="news-image-box">
          <img src="/img/news-money.avif" alt="Gagnez de l'argent" />
        </div>
        <div className="news-content">
          <h3>Gagnez de l'argent rapi...</h3>
          <p>Pourquoi la stabilité financière à long terme est bien plus importante.</p>
          <button className="btn-yellow-news">Plus d'informations</button>
        </div>
      </div>

    </div>

  </div>
</section>


<section className="ing-services-section">
  <div className="ing-services-container">
    
    {/* COLONNE GAUCHE : IMAGE */}
    <div className="ing-services-image-box">
      <img src="/img/Bank99_Handy_alpha-blk_mitBadge.png" alt="Services bancaires sur smartphone" />
    </div>

    {/* COLONNE DROITE : CONTENU TEXTUEL */}
    <div className="ing-services-content">
      <div className="ing-accent-line"></div>
      <h2>Plus d'infos !<br />Plus de services bancaires.</h2>
      
      <div className="ing-text-block">
        <h3>À tous les anciens clients d'ING :</h3>
        <p>
          Vous y trouverez davantage d'informations. Toutes les informations sont disponibles <a href="#" className="ing-link">ici</a>.
        </p>
      </div>
    </div>

  </div>
</section>


    </div>
  );
}