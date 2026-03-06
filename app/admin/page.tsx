"use client";

import { useState } from "react";
import { Download, RefreshCw, Lock, LogOut, FileText, Users, Building2, Check, Trash2, AlertTriangle } from "lucide-react";


interface CSVData {
  headers: string[];
  rows: string[][];
}

interface DeleteConfirmation {
  isOpen: boolean;
  type: "particuliers" | "professionnels";
  dateSubmission: string;
  name: string;
}

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [particuliersData, setParticuliersData] = useState<CSVData | null>(null);
  const [professionnelsData, setProfessionnelsData] = useState<CSVData | null>(null);
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState<"particuliers" | "professionnels">("particuliers");
  const [deleteConfirm, setDeleteConfirm] = useState<DeleteConfirmation | null>(null);
  const [actionLoading, setActionLoading] = useState<string | null>(null);

  const handleLogin = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    const res = await fetch("/api/admin/auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });
    if (res.ok) {
      setIsAuthenticated(true);
      setError("");
      loadData();
    } else {
      setError("Mot de passe incorrect");
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setPassword("");
    setParticuliersData(null);
    setProfessionnelsData(null);
  };

  const loadData = async () => {
    setLoading(true);
    try {
      const authHeaders = { "Authorization": `Bearer ${password}` };
      const [partRes, proRes] = await Promise.all([
        fetch("/api/admin/csv?type=particuliers", { headers: authHeaders }),
        fetch("/api/admin/csv?type=professionnels", { headers: authHeaders }),
      ]);

      if (partRes.ok) {
        const data = await partRes.json();
        setParticuliersData(data);
      }

      if (proRes.ok) {
        const data = await proRes.json();
        setProfessionnelsData(data);
      }
    } catch (err) {
      console.error("Error loading data:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleToggleDone = async (type: "particuliers" | "professionnels", dateSubmission: string, currentStatus: string) => {
    const newStatus = currentStatus === "done" ? "" : "done";
    setActionLoading(dateSubmission);

    try {
      const res = await fetch(
        `/api/admin/reservation?type=${type}&date_soumission=${encodeURIComponent(dateSubmission)}`,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json", "Authorization": `Bearer ${password}` },
          body: JSON.stringify({ status: newStatus }),
        }
      );

      if (res.ok) {
        await loadData();
      }
    } catch (err) {
      console.error("Error updating status:", err);
    } finally {
      setActionLoading(null);
    }
  };

  const handleDelete = async () => {
    if (!deleteConfirm) return;

    setActionLoading(deleteConfirm.dateSubmission);

    try {
      const res = await fetch(
        `/api/admin/reservation?type=${deleteConfirm.type}&date_soumission=${encodeURIComponent(deleteConfirm.dateSubmission)}`,
        { method: "DELETE", headers: { "Authorization": `Bearer ${password}` } }
      );

      if (res.ok) {
        await loadData();
      }
    } catch (err) {
      console.error("Error deleting reservation:", err);
    } finally {
      setActionLoading(null);
      setDeleteConfirm(null);
    }
  };

  const downloadCSV = (type: "particuliers" | "professionnels") => {
    const data = type === "particuliers" ? particuliersData : professionnelsData;
    if (!data) return;

    // Properly escape CSV values
    const escapeValue = (val: string) => {
      if (!val) return "";
      if (val.includes(",") || val.includes('"') || val.includes("\n")) {
        return `"${val.replace(/"/g, '""')}"`;
      }
      return val;
    };

    const csvContent = [
      data.headers.map(escapeValue).join(","),
      ...data.rows.map((row) => row.map(escapeValue).join(",")),
    ].join("\r\n");

    // Add BOM for Excel compatibility
    const BOM = "\uFEFF";
    const blob = new Blob([BOM + csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", `reservations_${type}_${new Date().toISOString().split("T")[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-light-bg pt-20">
        <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
          <div className="text-center mb-6">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary-navy/10 flex items-center justify-center">
              <Lock className="w-8 h-8 text-primary-navy" />
            </div>
            <h1 className="text-2xl font-bold text-primary-navy">
              Administration
            </h1>
            <p className="text-text-gray text-sm mt-1">
              Accès réservé aux administrateurs
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-text-gray mb-1">
                Mot de passe
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary-teal/20 focus:border-primary-teal"
                placeholder="Entrez le mot de passe"
              />
            </div>

            {error && (
              <p className="text-red-500 text-sm text-center">{error}</p>
            )}

            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-primary-navy text-white font-medium hover:bg-primary-teal transition-colors"
            >
              Se connecter
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-light-bg pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <div>
            <h1 className="text-2xl font-bold text-primary-navy">
              Tableau de bord
            </h1>
            <p className="text-text-gray text-sm">
              Gestion des réservations
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={loadData}
              disabled={loading}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-border text-primary-navy hover:bg-light-bg transition-colors disabled:opacity-50"
            >
              <RefreshCw className={`w-4 h-4 ${loading ? "animate-spin" : ""}`} />
              Actualiser
            </button>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-red-50 text-red-600 hover:bg-red-100 transition-colors"
            >
              <LogOut className="w-4 h-4" />
              Déconnexion
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-white rounded-xl p-6 border border-border">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                <Users className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-text-gray">Particuliers</p>
                <p className="text-2xl font-bold text-primary-navy">
                  {particuliersData?.rows.length || 0}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 border border-border">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center">
                <Building2 className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-text-gray">Professionnels</p>
                <p className="text-2xl font-bold text-primary-navy">
                  {professionnelsData?.rows.length || 0}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 border border-border">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center">
                <FileText className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <p className="text-sm text-text-gray">Total</p>
                <p className="text-2xl font-bold text-primary-navy">
                  {(particuliersData?.rows.length || 0) +
                    (professionnelsData?.rows.length || 0)}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Tab Switcher */}
        <div className="bg-white rounded-t-xl border border-b-0 border-border">
          <div className="flex">
            <button
              onClick={() => setActiveTab("particuliers")}
              className={`flex-1 py-4 text-sm font-medium border-b-2 transition-colors ${
                activeTab === "particuliers"
                  ? "border-primary-teal text-primary-teal"
                  : "border-transparent text-text-gray hover:text-primary-navy"
              }`}
            >
              Particuliers ({particuliersData?.rows.length || 0})
            </button>
            <button
              onClick={() => setActiveTab("professionnels")}
              className={`flex-1 py-4 text-sm font-medium border-b-2 transition-colors ${
                activeTab === "professionnels"
                  ? "border-primary-teal text-primary-teal"
                  : "border-transparent text-text-gray hover:text-primary-navy"
              }`}
            >
              Professionnels ({professionnelsData?.rows.length || 0})
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-b-xl border border-border overflow-hidden">
          <div className="p-4 border-b border-border flex justify-end">
            <button
              onClick={() => downloadCSV(activeTab)}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary-teal text-white hover:bg-primary-navy transition-colors"
            >
              <Download className="w-4 h-4" />
              Télécharger CSV
            </button>
          </div>

          <div>
            {loading ? (
              <div className="p-8 text-center text-text-gray">
                Chargement...
              </div>
            ) : (
              <DataTable
                data={
                  activeTab === "particuliers"
                    ? particuliersData
                    : professionnelsData
                }
                type={activeTab}
                onToggleDone={handleToggleDone}
                onDelete={(dateSubmission, name) =>
                  setDeleteConfirm({
                    isOpen: true,
                    type: activeTab,
                    dateSubmission,
                    name,
                  })
                }
                actionLoading={actionLoading}
              />
            )}
          </div>
        </div>
      </div>

      {/* Delete Confirmation Modal */}
      {deleteConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setDeleteConfirm(null)}
          />
          <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 animate-in fade-in zoom-in duration-200">
            <div className="flex items-center justify-center w-14 h-14 mx-auto mb-4 rounded-full bg-red-100">
              <AlertTriangle className="w-7 h-7 text-red-600" />
            </div>
            <h3 className="text-xl font-bold text-primary-navy text-center mb-2">
              Confirmer la suppression
            </h3>
            <p className="text-text-gray text-center mb-6">
              Êtes-vous sûr de vouloir supprimer la réservation de{" "}
              <span className="font-semibold text-primary-navy">{deleteConfirm.name}</span> ?
              Cette action est irréversible.
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setDeleteConfirm(null)}
                className="flex-1 px-4 py-3 rounded-xl border border-border text-primary-navy font-medium hover:bg-light-bg transition-colors"
              >
                Annuler
              </button>
              <button
                onClick={handleDelete}
                disabled={actionLoading === deleteConfirm.dateSubmission}
                className="flex-1 px-4 py-3 rounded-xl bg-red-600 text-white font-medium hover:bg-red-700 transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {actionLoading === deleteConfirm.dateSubmission ? (
                  <RefreshCw className="w-4 h-4 animate-spin" />
                ) : (
                  <Trash2 className="w-4 h-4" />
                )}
                Supprimer
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

interface DataTableProps {
  data: CSVData | null;
  type: "particuliers" | "professionnels";
  onToggleDone: (type: "particuliers" | "professionnels", dateSubmission: string, currentStatus: string) => void;
  onDelete: (dateSubmission: string, name: string) => void;
  actionLoading: string | null;
}

function DataTable({ data, type, onToggleDone, onDelete, actionLoading }: DataTableProps) {
  if (!data || data.rows.length === 0) {
    return (
      <div className="p-8 text-center text-text-gray">
        Aucune réservation pour le moment.
      </div>
    );
  }

  // Find the status column index
  const statusIndex = data.headers.indexOf("status");
  // Name column is index 1 for particuliers (nom_complet) and professionnels (responsable)
  const nameIndex = 1;
  // Phone is index 2 for particuliers, index 5 for professionnels
  const phoneIndex = type === "particuliers" ? 2 : 5;
  // Email is index 3 for particuliers, index 6 for professionnels
  const emailIndex = type === "particuliers" ? 3 : 6;
  // Service is index 4 for particuliers, index 7 for professionnels
  const serviceIndex = type === "particuliers" ? 4 : 7;

  return (
    <div className="divide-y divide-border">
      {data.rows.map((row, rowIndex) => {
        const dateSubmission = row[0];
        const name = row[nameIndex] || "Inconnu";
        const phone = row[phoneIndex] || "-";
        const email = row[emailIndex] || "-";
        const service = row[serviceIndex] || "-";
        const status = statusIndex !== -1 ? row[statusIndex] : "";
        const isDone = status === "done";
        const isLoading = actionLoading === dateSubmission;

        // Extra info for professionnels
        const entreprise = type === "professionnels" ? row[2] || "-" : null;

        return (
          <div
            key={rowIndex}
            className={`p-4 transition-colors ${isDone ? "bg-green-50/50" : "hover:bg-light-bg/50"}`}
          >
            <div className="flex items-start gap-3">
              {/* Done Checkbox */}
              <button
                onClick={() => onToggleDone(type, dateSubmission, status)}
                disabled={isLoading}
                className={`flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-lg border-2 transition-all duration-200 ${
                  isDone
                    ? "bg-green-500 border-green-500 text-white"
                    : "border-gray-300 hover:border-green-500 hover:bg-green-50"
                } ${isLoading ? "opacity-50 cursor-wait" : "cursor-pointer"}`}
                title={isDone ? "Marquer comme non traité" : "Marquer comme traité"}
              >
                {isLoading ? (
                  <RefreshCw className="w-4 h-4 animate-spin text-gray-400" />
                ) : (
                  <Check
                    className={`w-4 h-4 transition-all duration-200 ${
                      isDone
                        ? "opacity-100"
                        : "opacity-0 group-hover:opacity-50 text-green-500"
                    }`}
                  />
                )}
              </button>

              {/* Main Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <h3 className={`font-semibold truncate ${isDone ? "text-text-gray line-through" : "text-primary-navy"}`}>
                    {name}
                    {entreprise && (
                      <span className="font-normal text-text-gray ml-1">({entreprise})</span>
                    )}
                  </h3>
                  <span className="text-xs text-text-gray whitespace-nowrap">
                    {new Date(dateSubmission).toLocaleDateString("fr-FR", {
                      day: "2-digit",
                      month: "2-digit",
                      year: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </span>
                </div>

                <div className={`flex flex-wrap gap-x-4 gap-y-1 text-sm ${isDone ? "text-text-gray" : "text-text-gray"}`}>
                  <span className="flex items-center gap-1">
                    <span className="font-medium">Tél:</span> {phone}
                  </span>
                  <span className="flex items-center gap-1 truncate">
                    <span className="font-medium">Email:</span> {email}
                  </span>
                </div>

                <div className={`mt-1 text-sm ${isDone ? "text-text-gray line-through" : "text-primary-teal font-medium"}`}>
                  {service}
                </div>
              </div>

              {/* Delete Button */}
              <button
                onClick={() => onDelete(dateSubmission, name)}
                disabled={isLoading}
                className={`flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-lg text-red-500 hover:bg-red-100 transition-colors ${
                  isLoading ? "opacity-50 cursor-wait" : "cursor-pointer"
                }`}
                title="Supprimer"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
