"use client";

import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/utils";

export default function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed right-6 z-[9999] group"
      style={{ bottom: "calc(1.5rem + env(safe-area-inset-bottom, 0px))" }}
      aria-label="Contactez-nous sur WhatsApp"
    >
      {/* Ripple effect */}
      <span className="absolute inset-0 rounded-full bg-whatsapp/30 animate-ping"></span>
      <span className="absolute inset-[-4px] rounded-full bg-whatsapp/20 animate-pulse"></span>

      {/* Button */}
      <div className="relative w-14 h-14 rounded-full bg-gradient-to-br from-whatsapp to-emerald-600 text-white flex items-center justify-center shadow-lg shadow-whatsapp/40 group-hover:shadow-xl group-hover:shadow-whatsapp/50 transition-all duration-300 group-hover:scale-110">
        <MessageCircle className="w-7 h-7 group-hover:scale-110 transition-transform duration-300" />
      </div>

      {/* Tooltip */}
      <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-primary-navy text-white text-sm font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap pointer-events-none translate-x-2 group-hover:translate-x-0">
        Chat WhatsApp
        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full border-8 border-transparent border-l-primary-navy"></div>
      </div>
    </a>
  );
}
