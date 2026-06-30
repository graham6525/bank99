"use client";

import React from "react";
import { useAuth } from "@/context/AuthContext";

export default function DashboardPage() {
  const { user } = useAuth();

  return (
    <div className="b99-view-wrapper">
      
      {/* BLOC SALUTATION UTILISATEUR */}
      <section className="b99-user-hero-card desktop-only">
        <div className="hero-profile-avatar">
          <div className="avatar-placeholder"><i className="fa-regular fa-user"></i></div>
          <button className="btn-avatar-edit">modifier</button>
        </div>
        <div className="hero-search-area">
          <h1>Bonjour, {user ? `${user.firstname} ${user.lastname}` : "Cher Client"}</h1>
          <div className="hero-input-container">
            <i className="fa-solid fa-magnifying-glass"></i>
            <input type="text" placeholder="Rechercher un compte, un contact et plus..." />
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
                <p className="account-type-label">smartkonto99 / {user ? `${user.firstname} ${user.lastname}` : ""}</p>
                <strong className="account-iban-code">AT54 1912 0501 5178 6010</strong>
              </div>
            </div>

            {/* Sélecteur de Période Temporelle */}
            <div className="timeframe-selector-row">
              <span>Période : <strong>Les 30 derniers jours</strong></span>
              <i className="fa-solid fa-chevron-down"></i>
            </div>

            {/* Jauge d'Entrées d'Argent */}
            <div className="gauge-financial-container">
              <div className="gauge-text-metric">
                <span className="lbl-muted">Revenus / Entrées</span>
                <span className="val-bold text-green">7.825,00 EUR</span>
              </div>
              <div className="gauge-track">
                <div className="gauge-fill bg-green" style={{ width: "100%" }}></div>
              </div>
            </div>

            {/* Jauge de Sorties d'Argent */}
            <div className="gauge-financial-container">
              <div className="gauge-text-metric">
                <span className="lbl-muted">Dépenses / Sorties</span>
                <span className="val-bold text-red">-4.745,26 EUR</span>
              </div>
              <div className="gauge-track">
                <div className="gauge-fill bg-red" style={{ width: "62%" }}></div>
              </div>
            </div>

            {/* Lignes de Données Résumées Complètes */}
            <div className="financial-breakdown-summary">
              <div className="breakdown-item flex-row">
                <span className="lbl-muted">Différence</span>
                <span className="val-dark">3.079,74 EUR</span>
              </div>
              
              <div className="breakdown-item flex-row structural-highlight">
                <span className="lbl-muted">Solde actuel du compte</span>
                <span className="val-large text-green">3.079,74 EUR</span>
              </div>

              <div className="breakdown-item flex-row">
                <span className="lbl-muted">Montant disponible</span>
                <span className="val-small text-green-light">2.579,74 EUR</span>
              </div>
            </div>

          </div>
        </div>

        {/* COMPOSANT DE DROITE : MENU DE RACCOURCIS */}
        <div className="b99-card-panel no-padding-mobile">
          <div className="gray-header-strip-title">Mon Espace 99</div>
          
          <div className="action-navigation-list">
            <div className="action-list-row-item">
              <span>Nouvel Ordre de Virement</span>
              <i className="fa-solid fa-chevron-right text-muted"></i>
            </div>
            <div className="action-list-row-item">
              <span>Demander un relevé de compte électronique</span>
              <i className="fa-solid fa-chevron-right text-muted"></i>
            </div>
            <div className="action-list-row-item">
              <span>Mes Cartes Bancaires</span>
              <i className="fa-solid fa-chevron-right text-muted"></i>
            </div>
            <div className="action-list-row-item">
              <span>Personnaliser l'affichage</span>
              <i className="fa-solid fa-chevron-right text-muted"></i>
            </div>
            <div className="action-list-row-item">
              <span>Détails du compte</span>
              <i className="fa-solid fa-chevron-right text-muted"></i>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}