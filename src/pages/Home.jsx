import React from 'react';
import Hero from '../components/Hero';
import TrustSection from '../components/TrustSection';
import Testimonials from '../components/Testimonials';
import ContactForm from '../components/ContactForm';
import { ArrowRight, Laptop, TrendingUp, Layout } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <Hero />
      <TrustSection />

      {/* Quick Services Gateway */}
      <section className="py-20 bg-[#06080F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-400 bg-blue-950/60 px-3.5 py-1.5 rounded-full border border-blue-800/40">
            OUR CORE EXPERTISE
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-4">
            Select Your Desired Growth Service
          </h2>
          <p className="text-slate-400 text-sm mt-2 max-w-xl mx-auto">
            Click on any discipline below to view specialized solutions, architecture, and live dashboards.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 text-left">
            {/* Card 1 */}
            <Link to="/web-development" className="glass-panel p-8 rounded-2xl border border-slate-800 hover:border-blue-500/60 transition group hover:-translate-y-1 block">
              <div className="w-12 h-12 rounded-xl bg-blue-600/20 text-blue-400 flex items-center justify-center mb-6 group-hover:scale-110 transition">
                <Laptop className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition">Web Development</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                React, Laravel, Node.js, and high-conversion e-commerce systems built for international markets.
              </p>
              <span className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-400">
                View Full Web Dev Page <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
              </span>
            </Link>

            {/* Card 2 */}
            <Link to="/digital-marketing" className="glass-panel p-8 rounded-2xl border border-slate-800 hover:border-cyan-500/60 transition group hover:-translate-y-1 block">
              <div className="w-12 h-12 rounded-xl bg-cyan-600/20 text-cyan-400 flex items-center justify-center mb-6 group-hover:scale-110 transition">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition">Digital Marketing</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Meta Ads, Google PPC, targeted Lead Generation, and high-intent CRO for USA, UK, and GCC brands.
              </p>
              <span className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-400">
                View Dedicated Marketing Page <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
              </span>
            </Link>

            {/* Card 3 */}
            <Link to="/ui-ux" className="glass-panel p-8 rounded-2xl border border-slate-800 hover:border-indigo-500/60 transition group hover:-translate-y-1 block">
              <div className="w-12 h-12 rounded-xl bg-indigo-600/20 text-indigo-400 flex items-center justify-center mb-6 group-hover:scale-110 transition">
                <Layout className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-400 transition">UI/UX Design</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Clean interactive wireframes, user journeys, responsive mobile flows, and native Arabic RTL typography.
              </p>
              <span className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-400">
                View UI/UX Showcase <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      <Testimonials />
      <ContactForm />
    </div>
  );
}