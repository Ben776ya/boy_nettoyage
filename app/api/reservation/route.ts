import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

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

function escapeCSV(value: string): string {
  if (!value) return "";
  // Escape quotes and wrap in quotes if contains comma, quote, or newline
  if (value.includes(",") || value.includes('"') || value.includes("\n")) {
    return `"${value.replace(/"/g, '""')}"`;
  }
  return value;
}

export async function POST(request: NextRequest) {
  try {
    const data: ReservationData = await request.json();
    const dateSubmission = new Date().toISOString();

    // Validate required fields based on type
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
            { success: false, message: `Le champ ${field} est requis.` },
            { status: 400 }
          );
        }
      }
    } else {
      return NextResponse.json(
        { success: false, message: "Type de client invalide." },
        { status: 400 }
      );
    }

    // Determine file path
    const dataDir = path.join(process.cwd(), "data");
    const fileName =
      data.type === "particulier"
        ? "reservations_particuliers.csv"
        : "reservations_professionnels.csv";
    const filePath = path.join(dataDir, fileName);

    // Ensure data directory exists
    try {
      await fs.access(dataDir);
    } catch {
      await fs.mkdir(dataDir, { recursive: true });
    }

    // Build CSV row
    let csvRow: string;
    if (data.type === "particulier") {
      csvRow = [
        escapeCSV(dateSubmission),
        escapeCSV(data.nom_complet),
        escapeCSV(data.telephone),
        escapeCSV(data.email),
        escapeCSV(data.service),
        escapeCSV(data.date_souhaitee),
        escapeCSV(data.message || ""),
      ].join(",");
    } else {
      csvRow = [
        escapeCSV(dateSubmission),
        escapeCSV(data.responsable),
        escapeCSV(data.entreprise),
        escapeCSV(data.ice),
        escapeCSV(data.adresse),
        escapeCSV(data.telephone),
        escapeCSV(data.email),
        escapeCSV(data.service),
        escapeCSV(data.frequence),
        escapeCSV(data.date_souhaitee),
        escapeCSV(data.message || ""),
      ].join(",");
    }

    // Check if file exists and has content
    let fileExists = false;
    try {
      const stats = await fs.stat(filePath);
      fileExists = stats.size > 0;
    } catch {
      fileExists = false;
    }

    // If file doesn't exist or is empty, add header
    if (!fileExists) {
      const header =
        data.type === "particulier"
          ? "date_soumission,nom_complet,telephone,email,service,date_souhaitee,message"
          : "date_soumission,responsable,entreprise,ice,adresse,telephone,email,service,frequence,date_souhaitee,message";
      await fs.writeFile(filePath, header + "\n" + csvRow + "\n", "utf-8");
    } else {
      // Append to existing file
      await fs.appendFile(filePath, csvRow + "\n", "utf-8");
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
