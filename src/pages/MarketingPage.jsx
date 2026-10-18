import React, { useState } from 'react';
import { TrendingUp, Target, BarChart2, CheckCircle2, Megaphone, Search, Zap, DollarSign, Globe2, ArrowRight } from 'lucide-react';
import ContactForm from '../components/ContactForm';

export default function MarketingPage() {
  const [activeMetric, setActiveMetric] = useState('leads');

  const channels = [
    { title: 'Meta Ads (Facebook & Instagram)', desc: 'Advanced hyper-targeted campaigns for high-intent buyers in the USA, UK, and GCC (UAE, KSA, Qatar, Kuwait).' },
    { title: 'B2B Lead Generation', desc: 'Direct outreach funnels, automated CRM capture, and filtered executive pipeline building.' },
    { title: 'International Search Engine SEO', desc: 'Dominating competitive commercial keywords with technical on-page and authority link acquisition.' },
    { title: 'High-Impact Social Strategy', desc: 'Short-form video assets, Reels, TikTok advertising, and consistent corporate branding.' },
    { title: 'Conversion Rate Optimization (CRO)', desc: 'A/B testing landing page journeys to maximize return on ad spend (ROAS) and lower acquisition cost.' },
    { title: 'Campaign Analytics & Retargeting', desc: 'Pixel tracking, server-side CAPI integration, and multi-touch attribution reporting.' },
  ];

  return (
    <div className="pt-28 bg-[#06080F]">
      {/* Top Banner */}
      <section className="py-16 border-b border-slate-800/80 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800/60 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <TrendingUp className="w-3.5 h-3.5" /> DATA-DRIVEN ACQUISITION ARCHITECTURE
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Digital Marketing Solutions for High-Growth Brands
          </h1>
          <p className="text-slate-400 text-sm sm:text-base mt-4 max-w-2xl mx-auto leading-relaxed">
            We don't just generate clicks. We build predictable customer acquisition machines that scale businesses across the USA, UK, and Middle East.
          </p>
        </div>
      </section>

      {/* Live Sample Analytics Dashboard */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800 shadow-2xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
            <div>
              <span className="text-[11px] font-mono uppercase tracking-widest text-cyan-400">Cross-Border Ads Intelligence</span>
              <h2 className="text-xl sm:text-2xl font-bold text-white mt-1">Multi-Channel Performance Overview</h2>
            </div>
            <div className="flex gap-2">
              {['leads', 'roas', 'traffic'].map((m) => (
                <button
                  key={m}
                  onClick={() => setActiveMetric(m)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold uppercase font-mono transition ${
                    activeMetric === m ? 'bg-cyan-600 text-white' : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                  }`}
                >
                  {m}
                </button>
              ))}
            </div>
          </div>

          {/* Metric KPIs */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
            <div className="bg-[#04060C] p-4 rounded-xl border border-slate-800">
              <span className="text-slate-400 text-[10px] uppercase font-mono">Average ROAS</span>
              <p className="text-2xl font-extrabold text-emerald-400 font-mono mt-1">5.2x</p>
              <span className="text-[10px] text-slate-400 mt-1 block">Across USA / UAE Campaigns</span>
            </div>
            <div className="bg-[#04060C] p-4 rounded-xl border border-slate-800">
              <span className="text-slate-400 text-[10px] uppercase font-mono">Lead Qualified Rate</span>
              <p className="text-2xl font-extrabold text-cyan-400 font-mono mt-1">78.4%</p>
              <span className="text-[10px] text-slate-400 mt-1 block">Strict Filter Matching</span>
            </div>
            <div className="bg-[#04060C] p-4 rounded-xl border border-slate-800">
              <span className="text-slate-400 text-[10px] uppercase font-mono">Cost Per Acquisition</span>
              <p className="text-2xl font-extrabold text-white font-mono mt-1">-34%</p>
              <span className="text-[10px] text-slate-400 mt-1 block">Through Creative Iterations</span>
            </div>
            <div className="bg-[#04060C] p-4 rounded-xl border border-slate-800">
              <span className="text-slate-400 text-[10px] uppercase font-mono">Ad Creative Reach</span>
              <p className="text-2xl font-extrabold text-amber-400 font-mono mt-1">2.4M+</p>
              <span className="text-[10px] text-slate-400 mt-1 block">GCC & Western Impressions</span>
            </div>
          </div>

          {/* Simulated Graph */}
          <div className="h-44 w-full bg-[#03050A] rounded-2xl border border-slate-800/80 p-4 flex flex-col justify-end">
            <svg className="w-full h-full" viewBox="0 0 400 100" fill="none">
              <path
                d="M0 80 Q 70 70, 140 50 T 280 25 T 400 10"
                stroke="#06B6D4"
                strokeWidth="3.5"
                strokeLinecap="round"
                fill="none"
              />
              <path
                d="M0 80 Q 70 70, 140 50 T 280 25 T 400 10 L 400 100 L 0 100 Z"
                fill="url(#cyanGrad)"
                opacity="0.25"
              />
              <defs>
                <linearGradient id="cyanGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#06B6D4" />
                  <stop offset="100%" stopColor="#06B6D4" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
            <div className="flex justify-between text-[10px] font-mono text-slate-400 pt-2 border-t border-slate-900">
              <span>Week 1 (Audit & Creative)</span>
              <span>Week 2 (A/B Test)</span>
              <span>Week 3 (Scaling Winning Ads)</span>
              <span>Week 4 (Full Funnel Retargeting)</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Full-Funnel Capabilities</h2>
          <p className="text-slate-400 text-xs sm:text-sm mt-2">Everything engineered for maximum commercial conversion.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {channels.map((ch) => (
            <div key={ch.title} className="bg-[#0C1220] border border-slate-800 p-6 rounded-2xl hover:border-cyan-500/50 transition">
              <div className="flex items-center gap-2 mb-3">
                <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0" />
                <h3 className="text-sm font-bold text-white">{ch.title}</h3>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">{ch.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <ContactForm />
    </div>
  );
}