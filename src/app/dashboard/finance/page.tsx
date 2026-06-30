"use client";

import React, { useState } from "react";

export default function FinancePage() {
  const [achatValue, setAchatValue] = useState(322000);
  const [detteValue, setDetteValue] = useState(87200);
  const [duree, setDuree] = useState(10);
  const [isFixe, setIsFixe] = useState(true);

  return (
    <div className="b99-view-wrapper">
      {/* BANNIÈRE EN-TÊTE DE LA PAGE */}
      <div className="b99-finance-banner">
        <h2>Notre prêt immobilier wohnkredit99</h2>
        <p>
          Notre prêt <strong>wohnkredit99</strong> vous permet d'emprunter entre 50 000 € et 1 000 000 € 
          pour financer l'acquisition de votre bien immobilier idéal. Vous pouvez choisir une durée de 
          remboursement de 5 à 35 ans et différentes options de taux d'intérêt : fixe, variable ou mixte.
        </p>
      </div>

      {/* ZONE DE SIMULATION EN GRILLE RESPONSIVE */}
      <div className="b99-finance-split-layout">
        
        {/* BLOC DE GAUCHE : FORMULAIRE ET CURSEURS */}
        <div className="b99-card-panel">
          <div className="b99-simulator-tabs">
            <button className="tab-trigger">Achat immobilier</button>
            <button className="tab-trigger active-tab">
              <i className="fa-solid fa-arrows-rotate"></i> Restructuration de dettes
            </button>
          </div>

          <div className="panel-inner-padding b99-form-gap">
            {/* PREMIER CURSEUR : PRIX D'ACHAT */}
            <div className="simulator-input-group">
              <div className="simulator-label-row">
                <label>Prix d'achat initial <i className="fa-regular fa-circle-question label-hint"></i></label>
                <div className="currency-box-input">
                  <span>€</span>
                  <input 
                    type="text" 
                    value={achatValue.toLocaleString("fr-FR")} 
                    onChange={(e) => setAchatValue(Number(e.target.value.replace(/\s/g, "")))}
                  />
                </div>
              </div>
              <input 
                type="range" 
                min="57000" 
                max="2000000" 
                step="1000"
                value={achatValue} 
                onChange={(e) => setAchatValue(Number(e.target.value))}
                className="b99-custom-range-slider"
              />
              <div className="slider-bounds-text">
                <span>57 000 €</span>
                <span>2 000 000 €</span>
              </div>
            </div>

            {/* DEUXIÈME CURSEUR : RESTRUCTURATION DETTE */}
            <div className="simulator-input-group">
              <div className="simulator-label-row">
                <label>Montant de la restructuration <i className="fa-regular fa-circle-question label-hint"></i></label>
                <div className="currency-box-input">
                  <span>€</span>
                  <input 
                    type="text" 
                    value={detteValue.toLocaleString("fr-FR")} 
                    onChange={(e) => setDetteValue(Number(e.target.value.replace(/\s/g, "")))}
                  />
                </div>
              </div>
              <input 
                type="range" 
                min="45200" 
                max="172200" 
                step="100"
                value={detteValue} 
                onChange={(e) => setDetteValue(Number(e.target.value))}
                className="b99-custom-range-slider"
              />
              <div className="slider-bounds-text">
                <span>45 200 €</span>
                <span>172 200 €</span>
              </div>
            </div>

            {/* SÉLECTEUR TYPE D'INTÉRÊT */}
            <div className="simulator-input-group">
              <label className="input-section-title">Type d'intérêt <i className="fa-regular fa-circle-question label-hint"></i></label>
              <div className="toggle-grid-selection">
                <button 
                  className={`choice-button ${isFixe ? "selected-brand-yellow" : ""}`}
                  onClick={() => setIsFixe(true)}
                >
                  Taux fixe
                </button>
                <button 
                  className={`choice-button ${!isFixe ? "selected-brand-yellow" : ""}`}
                  onClick={() => setIsFixe(false)}
                >
                  Taux variable
                </button>
              </div>
            </div>

            {/* SÉLECTEUR ANNÉES */}
            <div className="simulator-input-group">
              <label className="input-section-title">Durée du taux fixe (en années) <i className="fa-regular fa-circle-question label-hint"></i></label>
              <div className="years-grid-selection">
                {[5, 10, 15, 20].map((year) => (
                  <button 
                    key={year} 
                    className={`year-cell-button ${duree === year ? "selected-brand-yellow" : ""}`}
                    onClick={() => setDuree(year)}
                  >
                    {year} ans
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* BLOC DE DROITE : RÉSULTATS DE L'ESTIMATION */}
        <div className="b99-card-panel b99-result-flex-panel">
          <div className="panel-inner-padding flex-column-grow">
            <h3>Votre résultat</h3>
            
            <div className="result-metrics-stack">
              <div className="metric-row-line">
                <span>Montant du financement <i className="fa-regular fa-circle-question label-hint"></i></span>
                <strong>89 000,00 €</strong>
              </div>
              <div className="metric-row-line">
                <span>Montant total dû</span>
                <strong>110 878,12 €</strong>
              </div>
              <div className="metric-row-line">
                <span>Taux d'intérêt fixe pendant {duree} ans</span>
                <strong>4,04 % nominal p.a.</strong>
              </div>
              <div className="metric-row-line">
                <span>Taux d'intérêt effectif</span>
                <strong>4,79 % TAEG p.a.</strong>
              </div>
              <div className="metric-row-line">
                <span>Durée totale du prêt</span>
                <span>11 ans (jusqu'en juin 2037)</span>
              </div>
            </div>

            <hr className="dashed-separator-line" />

            <div className="monthly-display-block">
              <span className="monthly-badge-label">Mensualité</span>
              <div className="monthly-price-alignment">
                <h2>840,22 €</h2>
                <p>taux d'intérêt fixe pendant {duree} ans</p>
              </div>
            </div>

            <div className="finance-action-buttons">
              <button className="primary-action-yellow-btn">
                Prendre rendez-vous <i className="fa-solid fa-arrow-down"></i>
              </button>
              <button className="outline-action-dark-btn">
                Enregistrer la simulation <i className="fa-solid fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}