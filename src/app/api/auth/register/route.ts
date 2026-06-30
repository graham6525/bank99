import { NextResponse } from "next/server";
import { db } from "@/db"; // Ajuste le chemin selon ton architecture
import { users } from "@/db/schema";
import bcrypt from "bcryptjs";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { personalData, financialData, legalData } = body;

    if (!personalData?.email || !personalData?.phonePassword) {
      return NextResponse.json({ error: "Champs obligatoires manquants" }, { status: 400 });
    }

    // 1. Chiffrer le mot de passe téléphonique
    const hashedPhonePassword = await bcrypt.hash(personalData.phonePassword, 10);

    // 2. Insérer les données fusionnées dans Turso via Drizzle
    await db.insert(users).values({
      email: personalData.email.toLowerCase().trim(),
      phonePassword: hashedPhonePassword,
      title1: personalData.title1,
      title2: personalData.title2 || null,
      firstname: personalData.firstname,
      lastname: personalData.lastname,
      birthdate: personalData.birthdate,
      birthCountry: personalData.birthCountry,
      otherNationalities: personalData.otherNationalities,
      civilStatus: personalData.civilStatus,
      address: personalData.address,
      postalCode: personalData.postalCode,
      city: personalData.city,
      mobile: personalData.mobile,
      agreePrecontractual: personalData.agreePrecontractual,

      monthlyNetIncome: Number(financialData.monthlyNetIncome) || 0,
      monthlyDeposits: financialData.monthlyDeposits,
      // Conversion du tableau d'options cochées en chaîne de caractères JSON pour le format SQLite
      incomeSources: JSON.stringify(financialData.incomeSources),
      hasCar: financialData.hasCar,
      housingStatus: financialData.housingStatus,
      taxResidence: financialData.taxResidence,

      pepStatus: legalData.pepStatus,
      acceptTerms: legalData.acceptTerms,
      fatcaDeclaration: legalData.fatcaDeclaration,
      createdAt: new Date().toISOString(),
    });

    return NextResponse.json({ success: true, message: "Inscription réussie" });
  } catch (error: any) {
    console.error("Erreur lors de l'inscription:", error);
    if (error.code === "SQLITE_CONSTRAINT" || error.message?.includes("UNIQUE")) {
      return NextResponse.json({ error: "Cette adresse e-mail est déjà associée à un compte." }, { status: 400 });
    }
    return NextResponse.json({ error: "Une erreur interne est survenue." }, { status: 500 });
  }
}