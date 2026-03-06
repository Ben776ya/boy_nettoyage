import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

interface ParticulierData {
  type: "particulier";
  nom_complet: string;
  telephone: string;
  email: string;
  service: string;
  date_souhaitee: string;
  message?: string;
}

interface ProfessionnelData {
  type: "professionnel";
  responsable: string;
  entreprise: string;
  ice: string;
  adresse: string;
  telephone: string;
  email: string;
  service: string;
  frequence: string;
  date_souhaitee: string;
  message?: string;
}

type ReservationData = ParticulierData | ProfessionnelData;

export async function POST(request: NextRequest) {
  try {
    const data: ReservationData = await request.json();
    const dateSubmission = new Date().toISOString();

    if (data.type === "particulier") {
      const required = ["nom_complet", "telephone", "email", "service", "date_souhaitee"];
      for (const field of required) {
        if (!data[field as keyof ParticulierData]) {
          return NextResponse.json(
            { success: false, message: `Le champ ${field} est requis.` },
            { status: 400 }
          );
        }
      }

      const { error } = await supabase.from("reservations_particuliers").insert({
        date_soumission: dateSubmission,
        nom_complet: data.nom_complet,
        telephone: data.telephone,
        email: data.email,
        service: data.service,
        date_souhaitee: data.date_souhaitee,
        message: data.message || "",
        status: "",
      });

      if (error) throw error;
    } else if (data.type === "professionnel") {
      const required = [
        "responsable", "entreprise", "ice", "adresse",
        "telephone", "email", "service", "frequence", "date_souhaitee",
      ];
      for (const field of required) {
        if (!data[field as keyof ProfessionnelData]) {
          return NextResponse.json(
            { success: false, message: `Le champ ${field} est requis.` },
            { status: 400 }
          );
        }
      }

      const { error } = await supabase.from("reservations_professionnels").insert({
        date_soumission: dateSubmission,
        responsable: data.responsable,
        entreprise: data.entreprise,
        ice: data.ice,
        adresse: data.adresse,
        telephone: data.telephone,
        email: data.email,
        service: data.service,
        frequence: data.frequence,
        date_souhaitee: data.date_souhaitee,
        message: data.message || "",
        status: "",
      });

      if (error) throw error;
    } else {
      return NextResponse.json(
        { success: false, message: "Type de client invalide." },
        { status: 400 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Votre demande a été envoyée avec succès ! Nous vous contacterons sous 24h.",
    });
  } catch (error) {
    console.error("Error saving reservation:", error);
    return NextResponse.json(
      { success: false, message: "Une erreur est survenue. Veuillez réessayer." },
      { status: 500 }
    );
  }
}
