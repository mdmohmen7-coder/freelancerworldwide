import React from 'react';
import ContactForm from '../components/ContactForm';
import { Layout, Smartphone, Monitor, Layers } from 'lucide-react';

export default function UiUxPage() {
  return (
    <div className="pt-28 bg-[#06080F]">
      <section className="py-16 text-center max-w-7xl mx-auto px-4">
        <span className="text-xs font-bold uppercase tracking-widest text-indigo-400 bg-indigo-950/60 px-3.5 py-1.5 rounded-full border border-indigo-800/40">
          USER PSYCHOLOGY FIRST
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white mt-4">
          Intuitive UI/UX Design Systems
        </h1>
        <p className="text-slate-400 text-sm mt-3 max-w-xl mx-auto">
          Tailored user flows, modern design systems, and conversion-focused wireframes designed for global audiences.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 text-left">
          <div className="glass-panel p-6 rounded-2xl border border-slate-800">
            <Monitor className="w-8 h-8 text-indigo-400 mb-4" />
            <h3 className="text-lg font-bold text-white mb-2">12-Column Desktop Grid</h3>
            <p className="text-xs text-slate-400 leading-relaxed">Visual balance with spacious typography engineered for luxury and corporate businesses.</p>
          </div>
          <div className="glass-panel p-6 rounded-2xl border border-slate-800">
            <Smartphone className="w-8 h-8 text-cyan-400 mb-4" />
            <h3 className="text-lg font-bold text-white mb-2">Mobile Touch Ergonomics</h3>
            <p className="text-xs text-slate-400 leading-relaxed">Thumb-friendly navigation and lightning-fast checkout interactions on mobile devices.</p>
          </div>
          <div className="glass-panel p-6 rounded-2xl border border-slate-800">
            <Layers className="w-8 h-8 text-amber-400 mb-4" />
            <h3 className="text-lg font-bold text-white mb-2">Bilingual RTL Support</h3>
            <p className="text-xs text-slate-400 leading-relaxed">Seamless design layouts supporting English and Arabic typography natively for GCC clients.</p>
          </div>
        </div>
      </section>
      <ContactForm />
    </div>
  );
}