import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const type = searchParams.get("type");

    if (!type || !["particuliers", "professionnels"].includes(type)) {
      return NextResponse.json(
        { error: "Type invalide" },
        { status: 400 }
      );
    }

    const dataDir = path.join(process.cwd(), "data");
    const filePath = path.join(dataDir, `reservations_${type}.csv`);

    try {
      const content = await fs.readFile(filePath, "utf-8");
      const lines = content.trim().split("\n");

      if (lines.length === 0) {
        return NextResponse.json({ headers: [], rows: [] });
      }

      const headers = parseCSVLine(lines[0]);
      const rows = lines.slice(1).map((line) => parseCSVLine(line));

      return NextResponse.json({ headers, rows });
    } catch (err) {
      // File doesn't exist yet
      return NextResponse.json({ headers: [], rows: [] });
    }
  } catch (error) {
    console.error("Error reading CSV:", error);
    return NextResponse.json(
      { error: "Erreur lors de la lecture des données" },
      { status: 500 }
    );
  }
}

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
