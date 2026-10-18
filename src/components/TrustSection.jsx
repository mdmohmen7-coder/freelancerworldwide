import React from 'react';

export default function TrustSection() {
  const regions = [
    { country: 'USA', flag: '🇺🇸', hub: 'New York / SF', ping: '38ms' },
    { country: 'UK', flag: '🇬🇧', hub: 'London Tech Hub', ping: '24ms' },
    { country: 'UAE', flag: '🇦🇪', hub: 'Dubai Silicon Oasis', ping: '16ms' },
    { country: 'Saudi Arabia', flag: '🇸🇦', hub: 'Riyadh Vision 2030', ping: '21ms' },
    { country: 'Qatar', flag: '🇶🇦', hub: 'Doha Digital Hub', ping: '19ms' },
    { country: 'Kuwait', flag: '🇰🇼', hub: 'Kuwait City Tech Zone', ping: '22ms' },
  ];

  return (
    <section className="py-12 border-y border-slate-800/80 bg-[#080C16]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-8">
          <p className="text-xs uppercase tracking-widest text-blue-400 font-semibold">
            GLOBAL REACH &amp; CROSS-BORDER INFRASTRUCTURE
          </p>
          <h2 className="text-xl sm:text-2xl font-bold text-white mt-1">
            Helping Businesses Build a Stronger Digital Presence Worldwide
          </h2>
          <p className="text-xs text-slate-400 mt-2">
            Global Service • International Standards • Business-Focused Solutions
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {regions.map((reg) => (
            <div
              key={reg.country}
              className="bg-[#0B101D] hover:bg-slate-900 border border-slate-800/80 rounded-xl p-3.5 transition-all text-center group hover:border-blue-500/40"
            >
              <div className="text-2xl mb-1">{reg.flag}</div>
              <h3 className="text-sm font-bold text-slate-200 group-hover:text-white">{reg.country}</h3>
              <p className="text-[10px] text-slate-400 mt-0.5">{reg.hub}</p>
              <div className="mt-2 inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-950/60 border border-emerald-800/40 text-[10px] font-mono text-emerald-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                {reg.ping}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}