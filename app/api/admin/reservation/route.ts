import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import { isAdminAuthorized } from "@/lib/adminAuth";

export async function DELETE(request: NextRequest) {
  if (!isAdminAuthorized(request)) {
    return NextResponse.json({ error: "Non autorisé" }, { status: 401 });
  }

  try {
    const { searchParams } = new URL(request.url);
    const type = searchParams.get("type");
    const dateSubmission = searchParams.get("date_soumission");

    if (!type || !["particuliers", "professionnels"].includes(type)) {
      return NextResponse.json({ error: "Type invalide" }, { status: 400 });
    }

    if (!dateSubmission) {
      return NextResponse.json({ error: "Date de soumission requise" }, { status: 400 });
    }

    const { error } = await supabase
      .from(`reservations_${type}`)
      .delete()
      .eq("date_soumission", dateSubmission);

    if (error) throw error;

    return NextResponse.json({ success: true, message: "Réservation supprimée" });
  } catch (error) {
    console.error("Error deleting reservation:", error);
    return NextResponse.json({ error: "Erreur lors de la suppression" }, { status: 500 });
  }
}

export async function PATCH(request: NextRequest) {
  if (!isAdminAuthorized(request)) {
    return NextResponse.json({ error: "Non autorisé" }, { status: 401 });
  }

  try {
    const { searchParams } = new URL(request.url);
    const type = searchParams.get("type");
    const dateSubmission = searchParams.get("date_soumission");
    const body = await request.json();
    const { status } = body;

    if (!type || !["particuliers", "professionnels"].includes(type)) {
      return NextResponse.json({ error: "Type invalide" }, { status: 400 });
    }

    if (!dateSubmission) {
      return NextResponse.json({ error: "Date de soumission requise" }, { status: 400 });
    }

    const { error } = await supabase
      .from(`reservations_${type}`)
      .update({ status })
      .eq("date_soumission", dateSubmission);

    if (error) throw error;

    return NextResponse.json({ success: true, message: "Statut mis à jour" });
  } catch (error) {
    console.error("Error updating reservation:", error);
    return NextResponse.json({ error: "Erreur lors de la mise à jour" }, { status: 500 });
  }
}
