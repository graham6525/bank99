"use client";

import React from "react";

export default function DashboardPage() {
  return (
    <div className="b99-view-wrapper">
      
      {/* BLOC SALUTATION UTILSATEUR (Desktop Only) */}
      <section className="b99-user-hero-card desktop-only">
        <div className="hero-profile-avatar">
          <div className="avatar-placeholder"><i className="fa-regular fa-user"></i></div>
          <button className="btn-avatar-edit">ändern</button>
        </div>
        <div className="hero-search-area">
          <h1>Hallo, Rosemarie Musterfrau</h1>
          <div className="hero-input-container">
            <i className="fa-solid fa-magnifying-glass"></i>
            <input type="text" placeholder="Durchsuche Konto, Kontakte und mehr" />
          </div>
        </div>
      </section>

      {/* GRILLE ADAPTATIVE DE L'INTERFACE PRINCIPALE */}
      <div className="b99-dashboard-grid">
        
        {/* COMPOSANT DE GAUCHE : DÉTAIL DU COMPTE SMARTKONTO99 */}
        <div className="b99-card-panel">
          <div className="panel-inner-padding">
            
            {/* Boîtier Header de Carte de Crédit */}
            <div className="credit-card-info-box">
              <div className="mock-card-graphic">
                <div className="yellow-stripe-mini"></div>
              </div>
              <div className="card-text-details">
                <p className="account-type-label">smartkonto99 / Irene Franziska Körper</p>
                <strong className="account-iban-code">AT54 1912 0501 5178 6010</strong>
              </div>
            </div>

            {/* Sélecteur de Période Temporelle */}
            <div className="timeframe-selector-row">
              <span>Zeitraum: <strong>Die letzten 30 Tage</strong></span>
              <i className="fa-solid fa-chevron-down"></i>
            </div>

            {/* Jauge d'Entrées d'Argent (Vert) */}
            <div className="gauge-financial-container">
              <div className="gauge-text-metric">
                <span className="lbl-muted">Eingänge</span>
                <span className="val-bold text-green">7.825 EUR</span>
              </div>
              <div className="gauge-track">
                <div className="gauge-fill bg-green" style={{ width: "100%" }}></div>
              </div>
            </div>

            {/* Jauge de Sorties d'Argent (Rouge) */}
            <div className="gauge-financial-container">
              <div className="gauge-text-metric">
                <span className="lbl-muted">Ausgänge</span>
                <span className="val-bold text-red">-4.745,26 EUR</span>
              </div>
              <div className="gauge-track">
                <div className="gauge-fill bg-red" style={{ width: "62%" }}></div>
              </div>
            </div>

            {/* Lignes de Données Résumées Complètes */}
            <div className="financial-breakdown-summary">
              <div className="breakdown-item flex-row">
                <span className="lbl-muted">Differenz</span>
                <span className="val-dark">3.079,74 EUR</span>
              </div>
              
              <div className="breakdown-item flex-row structural-highlight">
                <span className="lbl-muted">Aktueller Kontostand</span>
                <span className="val-large text-green">3.079,74 EUR</span>
              </div>

              <div className="breakdown-item flex-row">
                <span className="lbl-muted">Verfügbarer Betrag</span>
                <span className="val-small text-green-light">2.579,74 EUR</span>
              </div>
            </div>

          </div>
        </div>

        {/* COMPOSANT DE DROITE : MENU DE RACCOURCIS BANCAIRES ET ACTIONS DE COMPTE */}
        <div className="b99-card-panel no-padding-mobile">
          <div className="gray-header-strip-title">meine99</div>
          
          <div className="action-navigation-list">
            <div className="action-list-row-item">
              <span>Neuer Auftrag</span>
              <i className="fa-solid fa-chevron-right text-muted"></i>
            </div>
            <div className="action-list-row-item">
              <span>e-Kontoauszug anfordern</span>
              <i className="fa-solid fa-chevron-right text-muted"></i>
            </div>
            <div className="action-list-row-item">
              <span>Meine Karten</span>
              <i className="fa-solid fa-chevron-right text-muted"></i>
            </div>
            <div className="action-list-row-item">
              <span>Darstellung anpassen</span>
              <i className="fa-solid fa-chevron-right text-muted"></i>
            </div>
            <div className="action-list-row-item">
              <span>Kontodetails</span>
              <i className="fa-solid fa-chevron-right text-muted"></i>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}