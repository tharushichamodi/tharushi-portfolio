import React from "react";
import { ArrowUp } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/5 py-10 overflow-hidden">

      {/* Background Glow */}

      <div className="absolute inset-0 pointer-events-none">

        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[500px] h-[200px] bg-[#8EA4D2]/5 blur-[120px]" />

      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Left */}

        <p className="text-zinc-500 text-sm text-center md:text-left">

          © {currentYear} <span className="text-white font-medium">Tharushi Ranasingha</span>. All rights reserved.

        </p>

        {/* Right */}

        <div className="flex items-center gap-6">

          <p className="text-zinc-500 text-sm flex items-center gap-1">

            Designed & Built with

            <span className="text-[#8EA4D2] text-base">
              ♥
            </span>

         
          </p>

          {/* Back To Top */}

          <a
            href="#hero"
            className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:border-[#8EA4D2] hover:bg-[#8EA4D2]/10 transition-all duration-300"
          >
            <ArrowUp size={18} />
          </a>

        </div>

      </div>

    </footer>
  );
}