import React, { useState } from 'react';
import { Laptop, Code2, Server, Database, ShieldCheck, ArrowRight, Zap, Layers } from 'lucide-react';
import ContactForm from '../components/ContactForm';

export default function WebDevPage() {
  const [activeTab, setActiveTab] = useState('ecommerce');

  const prototypes = {
    ecommerce: {
      name: 'High-Volume D2C Global Store',
      features: ['Headless Shopify / Custom Node Backend', 'Multi-Currency (USD, GBP, AED, SAR)', '0.5s Turbo Checkout Flow', 'Automated Inventory & Abandoned Cart Recovery']
    },
    saas: {
      name: 'Enterprise Cloud Dashboard & SaaS',
      features: ['React 18 + Tailwind CSS Component Tokens', 'Role-Based Authentication & Permissions', 'Stripe Billing & Subscription Invoicing', 'Real-Time WebSockets for Live Analytics']
    },
    corporate: {
      name: 'Corporate & Government Financial Portal',
      features: ['Laravel 11 MVC / PHP 8.3 Enterprise Architecture', 'Dual-Language (English & Arabic RTL Support)', 'Strict ISO 27001 Data Encryption & Compliance', 'Fast MySQL Relational Query Optimization']
    }
  };

  return (
    <div className="pt-28 bg-[#06080F]">
      <section className="py-16 border-b border-slate-800/80 text-center relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/80 border border-blue-800/60 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Laptop className="w-3.5 h-3.5" /> ARCHITECTED FOR SPEED &amp; HIGH TRAFFIC
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Full-Stack Web Development &amp; Software Engineering
          </h1>
          <p className="text-slate-400 text-sm sm:text-base mt-4 max-w-2xl mx-auto leading-relaxed">
            Modern, secure, and blazingly fast websites built for brands and businesses across North America, Europe, and the Middle East.
          </p>
        </div>
      </section>

      {/* Interactive Web Preview Terminal */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 border-b border-slate-800 gap-4">
            <div>
              <span className="text-[11px] font-mono uppercase tracking-widest text-blue-400">Interactive Architecture Viewer</span>
              <h2 className="text-xl sm:text-2xl font-bold text-white mt-1">{prototypes[activeTab].name}</h2>
            </div>
            <div className="flex gap-2">
              {['ecommerce', 'saas', 'corporate'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold uppercase transition ${
                    activeTab === tab ? 'bg-blue-600 text-white' : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 items-center">
            <div className="space-y-4">
              <h3 className="text-sm font-bold text-slate-300 uppercase tracking-wider font-mono">Engineered Capabilities:</h3>
              {prototypes[activeTab].features.map((feat) => (
                <div key={feat} className="flex items-start gap-3 bg-[#0A0F1D] p-3.5 rounded-xl border border-slate-800">
                  <Zap className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <span className="text-xs text-slate-300 font-medium">{feat}</span>
                </div>
              ))}
            </div>

            <div className="bg-[#03060E] p-6 rounded-2xl border border-slate-800 font-mono text-xs text-slate-300">
              <div className="text-slate-400 mb-2">// Architecture Metrics &amp; SLAs</div>
              <p className="text-emerald-400">&gt; Core Web Vitals: 98/100 (Google Lighthouse)</p>
              <p className="text-cyan-400 mt-1">&gt; Server TTFB: &lt; 85ms on Global Edge CDN</p>
              <p className="text-amber-400 mt-1">&gt; Database: Indexed MySQL &amp; Redis Cache Pool</p>
              <p className="text-blue-400 mt-1">&gt; Deployment: Automated GitHub Actions CI/CD</p>
            </div>
          </div>
        </div>
      </section>

      <ContactForm />
    </div>
  );
}