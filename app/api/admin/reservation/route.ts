import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

function parseCSVLine(line: string): string[] {
  const result: string[] = [];
  let current = "";
  let inQuotes = false;

  for (let i = 0; i < line.length; i++) {
    const char = line[i];

    if (char === '"') {
      if (inQuotes && line[i + 1] === '"') {
        current += '"';
        i++;
      } else {
        inQuotes = !inQuotes;
      }
    } else if (char === "," && !inQuotes) {
      result.push(current);
      current = "";
    } else {
      current += char;
    }
  }

  result.push(current);
  return result;
}

function escapeCSV(value: string): string {
  if (!value) return "";
  if (value.includes(",") || value.includes('"') || value.includes("\n")) {
    return `"${value.replace(/"/g, '""')}"`;
  }
  return value;
}

// DELETE - Remove a reservation
export async function DELETE(request: NextRequest) {
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

    const dataDir = path.join(process.cwd(), "data");
    const filePath = path.join(dataDir, `reservations_${type}.csv`);

    try {
      const content = await fs.readFile(filePath, "utf-8");
      const lines = content.trim().split("\n");

      if (lines.length <= 1) {
        return NextResponse.json({ error: "Aucune réservation trouvée" }, { status: 404 });
      }

      const header = lines[0];
      const dataLines = lines.slice(1);

      // Filter out the line with matching date_soumission (first column)
      const filteredLines = dataLines.filter((line) => {
        const parsed = parseCSVLine(line);
        return parsed[0] !== dateSubmission;
      });

      if (filteredLines.length === dataLines.length) {
        return NextResponse.json({ error: "Réservation non trouvée" }, { status: 404 });
      }

      // Write back to file
      const newContent = [header, ...filteredLines].join("\n") + "\n";
      await fs.writeFile(filePath, newContent, "utf-8");

      return NextResponse.json({ success: true, message: "Réservation supprimée" });
    } catch {
      return NextResponse.json({ error: "Fichier non trouvé" }, { status: 404 });
    }
  } catch (error) {
    console.error("Error deleting reservation:", error);
    return NextResponse.json({ error: "Erreur lors de la suppression" }, { status: 500 });
  }
}

// PATCH - Update reservation status (mark as done)
export async function PATCH(request: NextRequest) {
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

    const dataDir = path.join(process.cwd(), "data");
    const filePath = path.join(dataDir, `reservations_${type}.csv`);

    try {
      const content = await fs.readFile(filePath, "utf-8");
      const lines = content.trim().split("\n");

      if (lines.length <= 1) {
        return NextResponse.json({ error: "Aucune réservation trouvée" }, { status: 404 });
      }

      let header = lines[0];
      const headers = parseCSVLine(header);
      const dataLines = lines.slice(1);

      // Check if status column exists, if not add it
      let statusIndex = headers.indexOf("status");
      if (statusIndex === -1) {
        header = header + ",status";
        statusIndex = headers.length;
      }

      // Update the line with matching date_soumission
      let found = false;
      const updatedLines = dataLines.map((line) => {
        const parsed = parseCSVLine(line);
        if (parsed[0] === dateSubmission) {
          found = true;
          // Ensure the line has enough columns
          while (parsed.length <= statusIndex) {
            parsed.push("");
          }
          parsed[statusIndex] = status;
          return parsed.map(escapeCSV).join(",");
        }
        // Ensure consistent column count
        while (parsed.length <= statusIndex) {
          parsed.push("");
        }
        return parsed.map(escapeCSV).join(",");
      });

      if (!found) {
        return NextResponse.json({ error: "Réservation non trouvée" }, { status: 404 });
      }

      // Write back to file
      const newContent = [header, ...updatedLines].join("\n") + "\n";
      await fs.writeFile(filePath, newContent, "utf-8");

      return NextResponse.json({ success: true, message: "Statut mis à jour" });
    } catch {
      return NextResponse.json({ error: "Fichier non trouvé" }, { status: 404 });
    }
  } catch (error) {
    console.error("Error updating reservation:", error);
    return NextResponse.json({ error: "Erreur lors de la mise à jour" }, { status: 500 });
  }
}
