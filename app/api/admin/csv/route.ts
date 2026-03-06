import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import { isAdminAuthorized } from "@/lib/adminAuth";

const COLUMNS: Record<string, string[]> = {
  particuliers: [
    "date_soumission", "nom_complet", "telephone", "email",
    "service", "date_souhaitee", "message", "status",
  ],
  professionnels: [
    "date_soumission", "responsable", "entreprise", "ice", "adresse",
    "telephone", "email", "service", "frequence", "date_souhaitee", "message", "status",
  ],
};

export async function GET(request: NextRequest) {
  if (!isAdminAuthorized(request)) {
    return NextResponse.json({ error: "Non autorisé" }, { status: 401 });
  }

  try {
    const { searchParams } = new URL(request.url);
    const type = searchParams.get("type");

    if (!type || !["particuliers", "professionnels"].includes(type)) {
      return NextResponse.json({ error: "Type invalide" }, { status: 400 });
    }

    const columns = COLUMNS[type];

    const { data, error } = await supabase
      .from(`reservations_${type}`)
      .select(columns.join(","))
      .order("date_soumission", { ascending: false });

    if (error) throw error;

    const rows = (data || []).map((row) =>
      columns.map((col) => ((row as unknown as Record<string, unknown>)[col] as string) ?? "")
    );

    return NextResponse.json({ headers: columns, rows });
  } catch (error) {
    console.error("Error reading data:", error);
    return NextResponse.json(
      { error: "Erreur lors de la lecture des données" },
      { status: 500 }
    );
  }
}
