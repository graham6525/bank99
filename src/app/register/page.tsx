"use client";

import { useState } from "react";

export default function RegisterForm() {
  // Les étapes vont maintenant de 2 à 4 (2: Personnel, 3: Finances, 4: Aspects juridiques)
  const [currentStep, setCurrentStep] = useState<2 | 3 | 4>(2);

  // État de l'étape 2 : Données Personnelles
  const [personalData, setPersonalData] = useState({
    title1: "",
    title2: "",
    firstname: "",
    lastname: "",
    birthdate: "",
    birthCountry: "",
    nationality: "",
    otherNationalities: "Non",
    civilStatus: "",
    phonePassword: "",
    address: "",
    postalCode: "",
    city: "",
    mobile: "",
    email: "",
    agreePrecontractual: false,
    agreeContact: false
  });

  // État de l'étape 3 : Données Financières
  const [financialData, setFinancialData] = useState({
    monthlyNetIncome: "",
    monthlyDeposits: "",
    incomeSources: [] as string[],
    hasCar: "Non",
    housingStatus: "",
    dependentChildren: "",
    professionalGroup: "",
    industry: "",
    foreignPayments: "Non",
    openingReason: "",
    taxResidence: "Exclusivement Autriche",
    usLinks: "Non"
  });

  // État de l'étape 4 : Aspects Juridiques
  const [legalData, setLegalData] = useState({
    acceptTerms: false,
    pepStatus: "Non",
    fatcaDeclaration: false
  });

  const handleCheckboxChange = (source: string) => {
    const currentSources = [...financialData.incomeSources];
    if (currentSources.includes(source)) {
      setFinancialData({
        ...financialData,
        incomeSources: currentSources.filter((s) => s !== source)
      });
    } else {
      setFinancialData({
        ...financialData,
        incomeSources: [...currentSources, source]
      });
    }
  };

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentStep === 2) {
      setCurrentStep(3);
      window.scrollTo(0, 0);
    } else if (currentStep === 3) {
      setCurrentStep(4);
      window.scrollTo(0, 0);
    } else {
      // Étape 4 finale : Soumission de l'inscription
      console.log("Inscription finale validée :", { personalData, financialData, legalData });
    }
  };

  const handleBack = () => {
    if (currentStep === 3) {
      setCurrentStep(2);
    } else if (currentStep === 4) {
      setCurrentStep(3);
    }
    window.scrollTo(0, 0);
  };

  return (
    <div className="register-container">
      {/* 1. BARRE DE PROGRESSION VISUELLE AJUSTÉE (4 ÉTAPES) */}
      <div className="progress-stepper">
        <div className="step-item completed">
          <div className="step-circle"><i className="fa-solid fa-check"></i></div>
          <span>1. Sélection des produits</span>
        </div>
        <div className={`step-item ${currentStep === 2 ? "active" : "completed"}`}>
          <div className="step-circle">{currentStep > 2 ? <i className="fa-solid fa-check"></i> : null}</div>
          <span>2. Personnel</span>
        </div>
        <div className={`step-item ${currentStep === 3 ? "active" : currentStep > 3 ? "completed" : ""}`}>
          <div className="step-circle">{currentStep > 3 ? <i className="fa-solid fa-check"></i> : null}</div>
          <span>3. Finances</span>
        </div>
        <div className={`step-item ${currentStep === 4 ? "active" : ""}`}>
          <div className="step-circle"></div>
          <span>4. Aspects juridiques</span>
        </div>
      </div>

      {/* FORMULAIRE PRINCIPAL */}
      <form onSubmit={handleNext} className="register-card">
        
        {/* ==============================================
            ÉTAPE 2 : DONNÉES PERSONNELLES
            ============================================== */}
        {currentStep === 2 && (
          <div className="form-section animate-fade">
            <h2>Données personnelles</h2>
            
            <div className="form-group row-flex">
              <label className="main-label">titre</label>
              <div className="inputs-container split-2">
                <select 
                  value={personalData.title1} 
                  onChange={(e) => setPersonalData({...personalData, title1: e.target.value})}
                  required
                >
                  <option value="">Veuillez sélectionner un t...</option>
                  <option value="M.">M.</option>
                  <option value="Mme">Mme</option>
                  <option value="Prof.">Prof.</option>
                  <option value="DI Mag. (FH)">DI Mag. (FH)</option>
                </select>
                <select 
                  value={personalData.title2} 
                  onChange={(e) => setPersonalData({...personalData, title2: e.target.value})}
                >
                  <option value="">Veuillez sélectionner un t...</option>
                  <option value="MPS">MPS</option>
                </select>
              </div>
            </div>

            <div className="form-group row-flex">
              <label className="main-label">Prénom(s) *</label>
              <div className="inputs-container has-info">
                <input 
                  type="text" 
                  value={personalData.firstname} 
                  onChange={(e) => setPersonalData({...personalData, firstname: e.target.value})} 
                  required 
                />
                <i className="fa-solid fa-circle-info info-icon"></i>
              </div>
            </div>

            <div className="form-group row-flex">
              <label className="main-label">Nom de famille *</label>
              <div className="inputs-container has-info">
                <input 
                  type="text" 
                  value={personalData.lastname} 
                  onChange={(e) => setPersonalData({...personalData, lastname: e.target.value})} 
                  required 
                />
                <i className="fa-solid fa-circle-info info-icon"></i>
              </div>
            </div>

            <div className="form-group row-flex">
              <label className="main-label">date de naissance *</label>
              <div className="inputs-container has-info">
                <input 
                  type="date" 
                  value={personalData.birthdate} 
                  onChange={(e) => setPersonalData({...personalData, birthdate: e.target.value})} 
                  required 
                />
                <i className="fa-solid fa-circle-info info-icon"></i>
              </div>
            </div>

            <div className="form-group row-flex">
              <label className="main-label">Pays de naissance *</label>
              <div className="inputs-container has-info">
                <select 
                  value={personalData.birthCountry} 
                  onChange={(e) => setPersonalData({...personalData, birthCountry: e.target.value})}
                  required
                >
                  <option value="">Veuillez sélectionner</option>
                  <option value="Autriche">Autriche</option>
                  <option value="France">France</option>
                  <option value="Bénin">Bénin</option>
                </select>
                <i className="fa-solid fa-circle-info info-icon"></i>
              </div>
            </div>

            <div className="form-group row-flex">
              <label className="main-label">Ajouter d'autres nationalités ? *</label>
              <div className="inputs-container radio-group">
                <label>
                  <input 
                    type="radio" 
                    name="otherNationalities" 
                    value="Non" 
                    checked={personalData.otherNationalities === "Non"} 
                    onChange={(e) => setPersonalData({...personalData, otherNationalities: e.target.value})} 
                  /> Non
                </label>
                <label>
                  <input 
                    type="radio" 
                    name="otherNationalities" 
                    value="Et" 
                    checked={personalData.otherNationalities === "Et"} 
                    onChange={(e) => setPersonalData({...personalData, otherNationalities: e.target.value})} 
                  /> Et
                </label>
              </div>
            </div>

            <div className="form-group row-flex">
              <label className="main-label">État civil *</label>
              <div className="inputs-container">
                <select 
                  value={personalData.civilStatus} 
                  onChange={(e) => setPersonalData({...personalData, civilStatus: e.target.value})}
                  required
                >
                  <option value="">Veuillez sélectionner</option>
                  <option value="Célibataire">Célibataire</option>
                  <option value="Marié(e)">Marié(e)</option>
                  <option value="Divorcé(e)">Divorcé(e)</option>
                </select>
              </div>
            </div>

            <div className="form-group row-flex">
              <label className="main-label">Mot de passe du téléphone *</label>
              <div className="inputs-container vertical-stack">
                <input 
                  type="password" 
                  value={personalData.phonePassword} 
                  onChange={(e) => setPersonalData({...personalData, phonePassword: e.target.value})} 
                  required 
                />
                <div className="info-box-gray">
                  Le mot de passe téléphonique est requis pour l'identification lors des demandes de renseignements par téléphone.
                </div>
              </div>
            </div>

            <hr className="section-divider" />
            <h3>Adresse de signalement</h3>

            <div className="form-group row-flex">
              <label className="main-label">Rue, numéro de maison *</label>
              <div className="inputs-container has-info">
                <input 
                  type="text" 
                  value={personalData.address} 
                  onChange={(e) => setPersonalData({...personalData, address: e.target.value})} 
                  required 
                />
                <i className="fa-solid fa-circle-info info-icon"></i>
              </div>
            </div>

            <div className="form-group row-flex">
              <label className="main-label">Code postal Ville *</label>
              <div className="inputs-container split-zip">
                <input 
                  type="text" 
                  placeholder="CP" 
                  value={personalData.postalCode} 
                  onChange={(e) => setPersonalData({...personalData, postalCode: e.target.value})} 
                  required 
                />
                <input 
                  type="text" 
                  placeholder="Ville" 
                  value={personalData.city} 
                  onChange={(e) => setPersonalData({...personalData, city: e.target.value})} 
                  required 
                />
              </div>
            </div>

            <hr className="section-divider" />
            <h3>Coordonnées</h3>

            <div className="form-group row-flex">
              <label className="main-label">numéro de téléphone portable *</label>
              <div className="inputs-container has-info">
                <input 
                  type="tel" 
                  value={personalData.mobile} 
                  onChange={(e) => setPersonalData({...personalData, mobile: e.target.value})} 
                  required 
                />
                <i className="fa-solid fa-circle-info info-icon"></i>
              </div>
            </div>

            <div className="form-group row-flex">
              <label className="main-label">E-Mail Adresse *</label>
              <div className="inputs-container has-info">
                <input 
                  type="email" 
                  value={personalData.email} 
                  onChange={(e) => setPersonalData({...personalData, email: e.target.value})} 
                  required 
                />
                <i className="fa-solid fa-circle-info info-icon"></i>
              </div>
            </div>

            <div className="form-group row-flex alignment-top">
              <label className="main-label"></label>
              <div className="inputs-container checkbox-wrapper info-box-gray">
                <input 
                  type="checkbox" 
                  id="agreePrecontractual"
                  checked={personalData.agreePrecontractual}
                  onChange={(e) => setPersonalData({...personalData, agreePrecontractual: e.target.checked})}
                  required
                />
                <label htmlFor="agreePrecontractual">
                  Bank99 m'enverra les informations précontractuelles et contractuelles relatives au produit demandé à l'adresse électronique que j'ai fournie. Je confirme par la présente leur exactitude.
                </label>
              </div>
            </div>
          </div>
        )}

        {/* ==============================================
            ÉTAPE 3 : DONNÉES FINANCIÈRES
            ============================================== */}
        {currentStep === 3 && (
          <div className="form-section animate-fade">
            <h2>données financières</h2>

            <div className="form-group row-flex">
              <label className="main-label">Revenu net mensuel *</label>
              <div className="inputs-container input-with-unit has-info">
                <input 
                  type="number" 
                  value={financialData.monthlyNetIncome}
                  onChange={(e) => setFinancialData({...financialData, monthlyNetIncome: e.target.value})}
                  required
                />
                <span className="unit-label">EUR</span>
                <i className="fa-solid fa-circle-info info-icon"></i>
              </div>
            </div>

            <div className="form-group row-flex">
              <label className="main-label">Entrées mensuelles sur le compte *</label>
              <div className="inputs-container">
                <select 
                  value={financialData.monthlyDeposits}
                  onChange={(e) => setFinancialData({...financialData, monthlyDeposits: e.target.value})}
                  required
                >
                  <option value="">Veuillez sélectionner</option>
                  <option value="jusqu'à 1 000 EUR">jusqu'à 1 000 EUR</option>
                  <option value="1.001 EUR - 1.500 EUR">1.001 EUR - 1.500 EUR</option>
                  <option value="1.501 EUR - 2.000 EUR">1.501 EUR - 2.000 EUR</option>
                  <option value="2.001 EUR - 2.500 EUR">2.001 EUR - 2.500 EUR</option>
                  <option value="2.501 EUR - 3.000 EUR">2.501 EUR - 3.000 EUR</option>
                  <option value="3.001 EUR - 3.500 EUR">3.001 EUR - 3.500 EUR</option>
                  <option value="3.501 EUR - 4.000 EUR">3.501 EUR - 4.000 EUR</option>
                  <option value="4.001 EUR - 4.500 EUR">4.001 EUR - 4.500 EUR</option>
                  <option value="4.501 EUR - 5.000 EUR">4.501 EUR - 5.000 EUR</option>
                  <option value="plus de 5 000 EUR">plus de 5 000 EUR</option>
                </select>
              </div>
            </div>

            <div className="form-group row-flex alignment-top">
              <label className="main-label">D'où proviennent vos revenus actuels ?</label>
              <div className="inputs-container checkbox-list">
                {[
                  "Salaire (employé)", "Activités indépendantes", 
                  "Pension publique ou privée / revenus provenant d'indemnités d'assurance", 
                  "Revenus provenant des prestations sociales", "Revenus du (conjoint/partenaire)", 
                  "Règlement du divorce, pension alimentaire", "Rendement du capital / Rendement de l'investissement", 
                  "patrimoine", "Bourse", "Gain à la loterie", "Dons de fondations", "Aucun revenu"
                ].map((source) => (
                  <label key={source} className="checkbox-item">
                    <input 
                      type="checkbox" 
                      checked={financialData.incomeSources.includes(source)}
                      onChange={() => handleCheckboxChange(source)}
                    />
                    <span>{source}</span>
                  </label>
                ))}
              </div>
            </div>

            <hr className="section-divider" />
            <h3>Dépenses mensuelles</h3>

            <div className="form-group row-flex">
              <label className="main-label">Possédez-vous une voiture ?</label>
              <div className="inputs-container radio-group">
                <label>
                  <input 
                    type="radio" 
                    name="hasCar" 
                    value="Non"
                    checked={financialData.hasCar === "Non"}
                    onChange={(e) => setFinancialData({...financialData, hasCar: e.target.value})}
                  /> Non
                </label>
                <label>
                  <input 
                    type="radio" 
                    name="hasCar" 
                    value="Et"
                    checked={financialData.hasCar === "Et"}
                    onChange={(e) => setFinancialData({...financialData, hasCar: e.target.value})}
                  /> Et
                </label>
              </div>
            </div>

            <div className="form-group row-flex">
              <label className="main-label">Situation du logement</label>
              <div className="inputs-container">
                <select 
                  value={financialData.housingStatus}
                  onChange={(e) => setFinancialData({...financialData, housingStatus: e.target.value})}
                >
                  <option value="">Veuillez sélectionner</option>
                  <option value="Chez les parents">Chez les parents</option>
                  <option value="Possédé">Possédé</option>
                  <option value="Dans un appartement en copropriété">Dans un appartement en copropriété</option>
                  <option value="À louer">À louer</option>
                </select>
              </div>
            </div>

            <hr className="section-divider" />
            <h3>résidence fiscale</h3>

            <div className="form-group row-flex alignment-top">
              <label className="main-label">Résidence fiscale hors d'Autriche ?</label>
              <div className="inputs-container vertical-radio-list">
                <label>
                  <input 
                    type="radio" 
                    name="taxResidence" 
                    value="Exclusivement Autriche"
                    checked={financialData.taxResidence === "Exclusivement Autriche"}
                    onChange={(e) => setFinancialData({...financialData, taxResidence: e.target.value})}
                  /> Ils sont exclusivement résidents fiscaux en Autriche.
                </label>
                <label>
                  <input 
                    type="radio" 
                    name="taxResidence" 
                    value="Autriche et Autre"
                    checked={financialData.taxResidence === "Autriche et Autre"}
                    onChange={(e) => setFinancialData({...financialData, taxResidence: e.target.value})}
                  /> Ils sont résidents fiscaux en Autriche et dans au moins un autre pays.
                </label>
              </div>
            </div>
          </div>
        )}

        {/* ==============================================
            ÉTAPE 4 : ASPECTS JURIDIQUES (NOUVEAU)
            ============================================== */}
        {currentStep === 4 && (
          <div className="form-section animate-fade">
            <h2>Aspects juridiques</h2>

            <div className="form-group row-flex alignment-top">
              <label className="main-label">Personne politiquement exposée (PPE) *</label>
              <div className="inputs-container vertical-stack">
                <div className="radio-group">
                  <label>
                    <input 
                      type="radio" 
                      name="pepStatus" 
                      value="Non"
                      checked={legalData.pepStatus === "Non"}
                      onChange={(e) => setLegalData({...legalData, pepStatus: e.target.value})}
                    /> Non
                  </label>
                  <label>
                    <input 
                      type="radio" 
                      name="pepStatus" 
                      value="Oui"
                      checked={legalData.pepStatus === "Oui"}
                      onChange={(e) => setLegalData({...legalData, pepStatus: e.target.value})}
                    /> Oui
                  </label>
                </div>
                <div className="info-box-gray">
                  Êtes-vous, ou un membre de votre famille proche, une personne exerçant ou ayant exercé d'importantes fonctions publiques au cours de l'année écoulée ?
                </div>
              </div>
            </div>

            <hr className="section-divider" />

            <div className="form-group row-flex alignment-top">
              <label className="main-label">Conditions Générales de Vente *</label>
              <div className="inputs-container checkbox-wrapper info-box-gray">
                <input 
                  type="checkbox" 
                  id="acceptTerms"
                  checked={legalData.acceptTerms}
                  onChange={(e) => setLegalData({...legalData, acceptTerms: e.target.checked})}
                  required
                />
                <label htmlFor="acceptTerms">
                  <strong>Je confirme avoir lu et accepté sans réserve les Conditions Générales de Vente (CGV).</strong>
                  <p>Je reconnais également avoir pris connaissance des informations relatives à la protection des dépôts et à la politique de confidentialité des données personnelles de la banque.</p>
                </label>
              </div>
            </div>

            <div className="form-group row-flex alignment-top">
              <label className="main-label">Statut fiscal US (FATCA) *</label>
              <div className="inputs-container checkbox-wrapper info-box-gray">
                <input 
                  type="checkbox" 
                  id="fatcaDeclaration"
                  checked={legalData.fatcaDeclaration}
                  onChange={(e) => setLegalData({...legalData, fatcaDeclaration: e.target.checked})}
                  required
                />
                <label htmlFor="fatcaDeclaration">
                  Je déclare par la présente que je ne suis pas un citoyen américain et que je ne suis pas considéré comme un résident fiscal aux États-Unis aux fins de l'impôt fédéral (loi FATCA).
                </label>
              </div>
            </div>
          </div>
        )}

        {/* BOUTONS D'ACTION AVEC CONDITION D'INSCRIPTION FINALE */}
        <div className="form-actions">
          {currentStep > 2 && (
            <button type="button" className="btn-secondary" onClick={handleBack}>
              Retour
            </button>
          )}
          <button type="submit" className="btn-primary">
            {currentStep === 4 ? "S'inscrire" : "Suivant"}
          </button>
        </div>
      </form>
    </div>
  );
}