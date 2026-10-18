import React from 'react';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#04060A] border-t border-slate-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Footer Row */}
        <div className="flex flex-col md:flex-row items-center justify-between pb-8 border-b border-slate-900 gap-6">
          
          {/* Logo & Brand Identity */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-amber-500 to-yellow-400 p-[1px] shadow-lg shadow-amber-500/20">
              <div className="w-full h-full bg-[#080B12] rounded-[11px] flex items-center justify-center">
                <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-amber-500 text-xs font-mono">
                  FWW
                </span>
              </div>
            </div>
            <div className="flex flex-col text-left">
              <span className="font-bold text-white text-base tracking-wide">
                Freelancer <span className="text-amber-400">World Wide</span>
              </span>
              <span className="text-[10px] uppercase tracking-widest text-slate-400 font-semibold">
                USA • UK • Middle East
              </span>
            </div>
          </div>

          {/* Regional Hub Badges */}
          <div className="flex flex-wrap items-center justify-center gap-2 text-xs font-mono">
            <span className="px-2 py-1 rounded bg-[#0D121F] border border-slate-800 text-slate-300">🇺🇸 New York</span>
            <span className="px-2 py-1 rounded bg-[#0D121F] border border-slate-800 text-slate-300">🇬🇧 London</span>
            <span className="px-2 py-1 rounded bg-[#0D121F] border border-slate-800 text-slate-300">🇦🇪 Dubai</span>
            <span className="px-2 py-1 rounded bg-[#0D121F] border border-slate-800 text-slate-300">🇸🇦 Riyadh</span>
            <span className="px-2 py-1 rounded bg-[#0D121F] border border-slate-800 text-slate-300">🇶🇦 Doha</span>
            <span className="px-2 py-1 rounded bg-[#0D121F] border border-slate-800 text-slate-300">🇰🇼 Kuwait City</span>
          </div>

          {/* Scroll to Top */}
          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

        {/* Bottom Copyright & Legal Links */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-3">
          <p>© {new Date().getFullYear()} Freelancer World Wide (FWW). All rights reserved.</p>
          <div className="flex gap-4">
            <a href="/" className="hover:text-slate-300 transition">Privacy Policy</a>
            <a href="/" className="hover:text-slate-300 transition">Terms of Service</a>
            <a href="/" className="hover:text-slate-300 transition">Security Architecture</a>
          </div>
        </div>

      </div>
    </footer>
  );
}