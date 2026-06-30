import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { db } from "@/db"; // Adapte le chemin selon ton projet
import { users } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function GET() {
  try {
    const cookieStore = await cookies();
    const userEmail = cookieStore.get("user_session")?.value;

    if (!userEmail) {
      return NextResponse.json({ authenticated: false }, { status: 401 });
    }

    // Récupérer les infos de l'utilisateur depuis Turso
    const foundUser = await db
      .select()
      .from(users)
      .where(eq(users.email, userEmail))
      .get();

    if (!foundUser) {
      return NextResponse.json({ authenticated: false }, { status: 401 });
    }

    // Retourne uniquement les infos nécessaires (pas le mot de passe haché)
    return NextResponse.json({
      authenticated: true,
      user: {
        firstname: foundUser.firstname,
        lastname: foundUser.lastname,
        email: foundUser.email,
        birthCountry: foundUser.birthCountry,
      },
    });
  } catch (error) {
    return NextResponse.json({ authenticated: false }, { status: 500 });
  }
}