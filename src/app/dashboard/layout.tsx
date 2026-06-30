"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./dashboard.css";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="b99-master-container">
      
      {/* HEADER VERSION DESKTOP (Inspiré de online-banking-laptop_2.png) */}
      <header className="b99-desktop-header desktop-only">
        <div className="b99-top-utility-bar">
          <div className="b99-brand-logo-zone">
            <div className="b99-logo-yellow-box">
              <span className="logo-bank">bank</span>
              <span className="logo-num">99</span>
            </div>
            <div className="b99-post-horn-logo">
              <i className="fa-solid fa-envelope-open-text"></i>
            </div>
          </div>
          
          <div className="b99-top-right-actions">
            <button className="utility-link"><i className="fa-solid fa-magnifying-glass"></i> Suche</button>
            <button className="utility-link">
              <span className="badge-wrapper">
                <i className="fa-solid fa-bell"></i>
                <span className="blue-counter-badge">3</span>
              </span>
              Mitteilungen
            </button>
            <div className="user-profile-pill">
              <i className="fa-regular fa-circle-user text-large"></i>
              <span>Rosemarie Musterfrau</span>
            </div>
            <button className="logout-action-btn"><i className="fa-solid fa-power-off"></i> Logout</button>
          </div>
        </div>

        {/* BANDEAU DE NAVIGATION JAUNE */}
        <nav className="b99-desktop-navbar">
          <Link href="/dashboard" className={pathname === "/dashboard" ? "nav-item active" : "nav-item"}>
            <i className="fa-solid fa-house"></i> Meine Startseite
          </Link>
          <Link href="/dashboard/finance" className={pathname === "/dashboard/finance" ? "nav-item active" : "nav-item"}>
            <i className="fa-solid fa-wallet"></i> Finanzen
          </Link>
          <Link href="/dashboard/auftraege" className="nav-item">
            <i className="fa-solid fa-file-invoice-dollar"></i> Aufträge <span className="blue-counter-badge inline">4</span>
          </Link>
          <Link href="/dashboard/service" className="nav-item">
            <i className="fa-solid fa-gears"></i> Service <span className="blue-counter-badge inline">4</span>
          </Link>
        </nav>
      </header>

      {/* HEADER VERSION MOBILE (Inspiré de WhatsApp Image 2026-06-20 at 13.30.29_2.jpeg) */}
      <header className="b99-mobile-header mobile-only">
        <div className="mobile-header-left">
          <button className="mobile-action-trigger"><i className="fa-solid fa-chevron-left"></i></button>
          <button className="mobile-action-trigger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <i className={`fa-solid ${isMenuOpen ? "fa-xmark" : "fa-bars"}`}></i>
          </button>
        </div>
        
        <div className="mobile-header-right">
          <button className="mobile-icon-btn"><i className="fa-solid fa-magnifying-glass"></i></button>
          <button className="mobile-icon-btn"><i className="fa-solid fa-bell"></i></button>
          <button className="mobile-icon-btn"><i className="fa-regular fa-circle-user"></i></button>
          <button className="mobile-icon-btn"><i className="fa-solid fa-power-off"></i></button>
        </div>

        {/* TIROIR DE NAVIGATION MOBILE DISGRESSE */}
        <nav className={`b99-mobile-drawer ${isMenuOpen ? "drawer-open" : ""}`}>
          <Link href="/dashboard" onClick={() => setIsMenuOpen(false)}>Meine Startseite</Link>
          <Link href="/dashboard/finance" onClick={() => setIsMenuOpen(false)}>Finanzen</Link>
          <Link href="#" onClick={() => setIsMenuOpen(false)}>Aufträge (4)</Link>
          <Link href="#" onClick={() => setIsMenuOpen(false)}>Service (4)</Link>
        </nav>
      </header>

      {/* SOUS-BARRE D'ONGLETS SUB-NAV MOBILE */}
      <div className="b99-mobile-sub-tabs mobile-only">
        <span className="sub-tab-link muted">Verlauf</span>
        <span className="sub-tab-link active-yellow">Girokonto</span>
      </div>

      {/* ZONE CENTRALE DU CONTENU */}
      <main className="b99-main-viewport">
        {children}
      </main>
    </div>
  );
}