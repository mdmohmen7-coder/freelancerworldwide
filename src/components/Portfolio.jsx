import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';

export default function Portfolio({ onOpenContact }) {
  const [filter, setFilter] = useState('All');

  const projects = [
    {
      name: 'OmniTrade GCC',
      category: 'Web Development',
      industry: 'Fintech / Trading',
      tech: ['React.js', 'Node.js', 'MySQL'],
      desc: 'Real-time multi-asset liquidity trading terminal for GCC private investment firms.',
    },
    {
      name: 'Aura Luxury Apparel',
      category: 'UI/UX',
      industry: 'Fashion D2C',
      tech: ['React.js', 'Tailwind', 'Figma'],
      desc: 'Minimalist high-fashion storefront serving discerning clientele in Dubai, London and Riyadh.',
    },
    {
      name: 'HealthBridge MENA',
      category: 'Laravel',
      industry: 'Healthcare',
      tech: ['Laravel', 'MySQL', 'Bootstrap'],
      desc: 'Telemedicine and appointment scheduler compliant with Saudi Ministry of Health regulations.',
    },
    {
      name: 'TransAtlantic B2B Lead Engine',
      category: 'Digital Marketing',
      industry: 'Logistics',
      tech: ['Meta Ads', 'SEO', 'Conversion Funnel'],
      desc: 'Multi-channel acquisition system generating qualified freight forwarder leads across the US and UK.',
    },
    {
      name: 'Apex Capital Hub',
      category: 'React',
      industry: 'Private Equity',
      tech: ['React.js', 'Vite', 'Node.js'],
      desc: 'Investor reporting portal with automated yield distribution graphs and bank verification.',
    },
    {
      name: 'SmartLogistics Gulf',
      category: 'Web Development',
      industry: 'Supply Chain',
      tech: ['PHP', 'Laravel', 'MySQL'],
      desc: 'Fleet management tracking platform connecting Kuwait, Bahrain, and UAE distribution centers.',
    }
  ];

  const categories = ['All', 'Web Development', 'UI/UX', 'React', 'Laravel', 'Digital Marketing'];

  const filtered = filter === 'All' ? projects : projects.filter(p => p.category === filter || p.tech.includes(filter));

  return (
    <section id="projects" className="py-24 bg-[#070B14] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-blue-400">PROVEN TRACK RECORD</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2">
              Selected Digital Experiences
            </h2>
            <p className="text-slate-400 text-sm mt-2">
              A curated selection of modern digital products built for international businesses.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 mt-6 md:mt-0">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition ${
                  filter === c
                    ? 'bg-blue-600 text-white font-semibold'
                    : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item) => (
            <div
              key={item.name}
              className="bg-[#0C1220] border border-slate-800/90 rounded-2xl p-6 hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-blue-400 bg-blue-950/60 px-2.5 py-0.5 rounded border border-blue-900/40">
                    {item.industry}
                  </span>
                  <span className="text-xs text-slate-400">{item.category}</span>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition mb-2">
                  {item.name}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed mb-6">
                  {item.desc}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-800/80 mb-4">
                  {item.tech.map((t) => (
                    <span key={t} className="text-[10px] font-mono text-slate-300 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                      {t}
                    </span>
                  ))}
                </div>

                <button
                  onClick={onOpenContact}
                  className="w-full py-2 bg-slate-900 hover:bg-blue-600 text-slate-300 hover:text-white text-xs font-semibold rounded-xl border border-slate-800 hover:border-transparent transition flex items-center justify-center gap-1.5"
                >
                  <span>View Project Details</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}