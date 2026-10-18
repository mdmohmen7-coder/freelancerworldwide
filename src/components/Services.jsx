import React, { useState } from 'react';
import { Laptop, TrendingUp, Layout, CheckCircle, ArrowRight, Layers } from 'lucide-react';

export default function Services({ onOpenContact }) {
  const [activeMockup, setActiveMockup] = useState('ecommerce');

  const mockups = {
    saas: {
      title: 'Enterprise SaaS Dashboard',
      description: 'Built with React 18, Tailwind, Node.js microservices with multi-tenant auth and Stripe billing.',
      tech: ['React', 'Node.js', 'Tailwind', 'PostgreSQL'],
    },
    ecommerce: {
      title: 'High-Volume D2C Luxury Store',
      description: 'Sub-second checkout pipeline, headless architecture, dynamic currency for USD/GBP/AED.',
      tech: ['Next.js', 'Shopify Storefront API', 'Stripe', 'Redis'],
    },
    corporate: {
      title: 'Corporate Financial Portal',
      description: 'Built for GCC and European financial institutions with ISO 27001 data compliance and dual-language (EN/AR).',
      tech: ['Laravel 11', 'MySQL', 'Bootstrap 5', 'Tailwind'],
    }
  };

  return (
    <div id="services">
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-400 bg-blue-950/60 px-3.5 py-1.5 rounded-full border border-blue-800/40">
              CORE DISCIPLINES
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-4">
              Everything You Need to Build &amp; Grow Online
            </h2>
            <p className="text-slate-400 mt-3 text-sm sm:text-base">
              Engineered with obsessive attention to user psychology, load speed, and direct commercial return.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-panel p-8 rounded-2xl border border-slate-800 hover:border-blue-500/50 transition-all hover:-translate-y-1 group">
              <div className="w-12 h-12 rounded-xl bg-blue-600/20 text-blue-400 flex items-center justify-center mb-6 group-hover:scale-110 transition">
                <Laptop className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Web Development</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Modern, responsive and high-performance websites built for businesses, brands and high-growth startups across global markets.
              </p>
              <a href="#web-dev" className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-400 hover:text-blue-300">
                Explore Web Development <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="glass-panel p-8 rounded-2xl border border-slate-800 hover:border-cyan-500/50 transition-all hover:-translate-y-1 group">
              <div className="w-12 h-12 rounded-xl bg-cyan-600/20 text-cyan-400 flex items-center justify-center mb-6 group-hover:scale-110 transition">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Digital Marketing</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Data-driven digital marketing strategies designed to increase visibility, generate qualified leads and drive customer acquisition.
              </p>
              <a href="#marketing" className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-400 hover:text-cyan-300">
                Explore Digital Marketing <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="glass-panel p-8 rounded-2xl border border-slate-800 hover:border-indigo-500/50 transition-all hover:-translate-y-1 group">
              <div className="w-12 h-12 rounded-xl bg-indigo-600/20 text-indigo-400 flex items-center justify-center mb-6 group-hover:scale-110 transition">
                <Layout className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">UI/UX Design</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Clean, intuitive and conversion-focused digital experiences designed around your users, with native RTL support for Middle Eastern audiences.
              </p>
              <a href="#uiux" className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-400 hover:text-indigo-300">
                Explore UI/UX Design <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="web-dev" className="py-20 bg-[#090D18]/80 border-t border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-400">ENGINEERED FOR SCALE</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2 mb-4 leading-tight">
                Websites Built for Performance, Experience &amp; Growth.
              </h2>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                We combine modern frontend libraries with robust backend APIs to ensure sub-second response times, rock-solid security, and frictionless scalability.
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Node.js', 'PHP', 'Laravel', 'MySQL'].map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-slate-900 border border-slate-800 text-slate-300 text-xs font-mono rounded-lg">
                    {tech}
                  </span>
                ))}
              </div>

              <button
                onClick={onOpenContact}
                className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs rounded-xl shadow-lg shadow-blue-600/20 inline-flex items-center gap-2"
              >
                View Web Development Services <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="lg:col-span-7">
              <div className="glass-panel p-5 rounded-2xl border border-slate-700/80">
                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                  </div>
                  <div className="flex gap-2">
                    {['ecommerce', 'saas', 'corporate'].map((m) => (
                      <button
                        key={m}
                        onClick={() => setActiveMockup(m)}
                        className={`text-[11px] font-semibold uppercase px-2.5 py-1 rounded-md transition ${
                          activeMockup === m ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-slate-200'
                        }`}
                      >
                        {m}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mt-5 p-6 bg-[#05070D] rounded-xl border border-slate-800">
                  <h4 className="text-lg font-bold text-white mb-2">{mockups[activeMockup].title}</h4>
                  <p className="text-slate-400 text-xs mb-4 leading-relaxed">{mockups[activeMockup].description}</p>
                  
                  <div className="flex items-center gap-2 pt-4 border-t border-slate-900">
                    <span className="text-[10px] uppercase font-mono text-slate-400">Stack:</span>
                    {mockups[activeMockup].tech.map((t) => (
                      <span key={t} className="text-[11px] text-cyan-400 font-mono bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-800/40">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section id="marketing" className="py-24 relative border-t border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="glass-panel p-6 rounded-2xl border border-slate-800">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-xs font-mono uppercase text-slate-400">Demo Performance Campaign Dashboard</h4>
                  <span className="text-xs font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/40">
                    SAMPLE ANALYTICS
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-3 mb-6">
                  <div className="bg-[#05070D] p-3 rounded-xl border border-slate-800">
                    <span className="text-[10px] text-slate-400 uppercase">CTR</span>
                    <p className="text-lg font-bold text-white font-mono mt-0.5">4.82%</p>
                  </div>
                  <div className="bg-[#05070D] p-3 rounded-xl border border-slate-800">
                    <span className="text-[10px] text-slate-400 uppercase">Cost Per Lead</span>
                    <p className="text-lg font-bold text-cyan-400 font-mono mt-0.5">$18.40</p>
                  </div>
                  <div className="bg-[#05070D] p-3 rounded-xl border border-slate-800">
                    <span className="text-[10px] text-slate-400 uppercase">Avg. ROAS</span>
                    <p className="text-lg font-bold text-emerald-400 font-mono mt-0.5">5.2x</p>
                  </div>
                </div>

                <div className="h-36 w-full bg-[#05070D] rounded-xl border border-slate-800 p-2 flex items-end">
                  <svg className="w-full h-full" viewBox="0 0 300 100" fill="none">
                    <path
                      d="M0 80 Q 50 65, 100 70 T 200 30 T 300 10"
                      stroke="#06B6D4"
                      strokeWidth="3"
                      fill="none"
                    />
                    <path
                      d="M0 80 Q 50 65, 100 70 T 200 30 T 300 10 L 300 100 L 0 100 Z"
                      fill="url(#grad)"
                      opacity="0.2"
                    />
                    <defs>
                      <linearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#06B6D4" />
                        <stop offset="100%" stopColor="#06B6D4" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 order-1 lg:order-2">
              <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">DATA-DRIVEN ACQUISITION</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2 mb-4">
                Turn Traffic Into Customers.
              </h2>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Targeting buyers in high-purchasing power regions requires laser-focused creative, high intent keyword bidding, and conversion rate optimization (CRO).
              </p>

              <div className="grid grid-cols-2 gap-3 mb-8">
                {[
                  'Facebook & Instagram Ads',
                  'High-Intent Lead Generation',
                  'International SEO',
                  'Social Media Marketing',
                  'Full-Funnel Campaign Strategy',
                  'Conversion Rate Optimization'
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span className="text-xs text-slate-300 font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={onOpenContact}
                className="px-6 py-3 bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-xs rounded-xl shadow-lg shadow-cyan-600/20 inline-flex items-center gap-2"
              >
                Explore Digital Marketing <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>
      </section>

      <section id="uiux" className="py-20 bg-[#070A12] border-t border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-indigo-400">USER PSYCHOLOGY FIRST</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2">
              Designed for People. Built for Business.
            </h2>
            <p className="text-slate-400 text-sm mt-3">
              Flawless interfaces, intuitive navigation hierarchy, and tailored experiences engineered specifically for Western and Middle Eastern user behaviors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              { title: 'Desktop UI', desc: 'Optimized 12-column responsive layout' },
              { title: 'Mobile UI', desc: 'Thumb-friendly touch targets & gestures' },
              { title: 'Bilingual RTL', desc: 'Seamless English & Arabic typography' },
              { title: 'Design System', desc: 'Component tokens for rapid prototyping' }
            ].map((box) => (
              <div key={box.title} className="bg-slate-900/60 border border-slate-800 p-5 rounded-xl hover:border-indigo-500/40 transition">
                <Layers className="w-5 h-5 text-indigo-400 mb-3" />
                <h4 className="text-sm font-bold text-white">{box.title}</h4>
                <p className="text-xs text-slate-400 mt-1">{box.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}