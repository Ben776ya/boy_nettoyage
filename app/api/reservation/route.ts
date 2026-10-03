import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import { Resend } from "resend";

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
    const resendApiKey = process.env.RESEND_API_KEY;

    if (!resendApiKey) {
      console.error("Missing RESEND_API_KEY");

      return NextResponse.json(
        {
          success: false,
          message: "Configuration email manquante.",
        },
        { status: 500 }
      );
    }

    const resend = new Resend(resendApiKey);

    const data: ReservationData = await request.json();
    const dateSubmission = new Date().toISOString();

    if (data.type === "particulier") {
      const required = [
        "nom_complet",
        "telephone",
        "email",
        "service",
        "date_souhaitee",
      ];

      for (const field of required) {
        if (!data[field as keyof ParticulierData]) {
          return NextResponse.json(
            {
              success: false,
              message: `Le champ ${field} est requis.`,
            },
            { status: 400 }
          );
        }
      }

      const { error } = await supabase
        .from("reservations_particuliers")
        .insert({
          date_soumission: dateSubmission,
          nom_complet: data.nom_complet,
          telephone: data.telephone,
          email: data.email,
          service: data.service,
          date_souhaitee: data.date_souhaitee,
          message: data.message || "",
          status: "",
        });

  //    if (error) throw error;
  if (error) {
  console.error("Supabase error:", error);
}

      const { error: emailError } = await resend.emails.send({
        from: "BOY Nettoyage <devis@boynettoyage.ma>",
        to: ["info.edenplaza@gmail.com"],
        replyTo: data.email,
        subject: `Nouvelle demande de devis - ${data.nom_complet}`,
        text: `
Nouvelle demande de devis - Particulier

Nom : ${data.nom_complet}
Téléphone : ${data.telephone}
Email : ${data.email}
Service : ${data.service}
Date souhaitée : ${data.date_souhaitee}

Message :
${data.message || "Aucun message"}
        `,
      });

      if (emailError) {
        console.error("Resend email error:", emailError);
      }
    } else if (data.type === "professionnel") {
      const required = [
        "responsable",
        "entreprise",
        "ice",
        "adresse",
        "telephone",
        "email",
        "service",
        "frequence",
        "date_souhaitee",
      ];

      for (const field of required) {
        if (!data[field as keyof ProfessionnelData]) {
          return NextResponse.json(
            {
              success: false,
              message: `Le champ ${field} est requis.`,
            },
            { status: 400 }
          );
        }
      }

      const { error } = await supabase
        .from("reservations_professionnels")
        .insert({
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

  //    if (error) throw error;
  if (error) {
  console.error("Supabase error:", error);
}

      const { error: emailError } = await resend.emails.send({
        from: "BOY Nettoyage <devis@boynettoyage.ma>",
        to: ["info.edenplaza@gmail.com"],
        replyTo: data.email,
        subject: `Nouvelle demande professionnelle - ${data.entreprise}`,
        text: `
Nouvelle demande de devis - Professionnel

Responsable : ${data.responsable}
Entreprise : ${data.entreprise}
ICE : ${data.ice}
Adresse : ${data.adresse}
Téléphone : ${data.telephone}
Email : ${data.email}
Service : ${data.service}
Fréquence : ${data.frequence}
Date souhaitée : ${data.date_souhaitee}

Message :
${data.message || "Aucun message"}
        `,
      });

      if (emailError) {
        console.error("Resend email error:", emailError);
      }
    } else {
      return NextResponse.json(
        {
          success: false,
          message: "Type de client invalide.",
        },
        { status: 400 }
      );
    }

    return NextResponse.json({
      success: true,
      message:
        "Votre demande a été envoyée avec succès ! Nous vous contacterons sous 24h.",
    });
  } catch (error) {
    console.error("Error saving reservation:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Une erreur est survenue. Veuillez réessayer.",
      },
      { status: 500 }
    );
  }
}