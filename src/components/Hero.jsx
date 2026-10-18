import React from 'react';
import { ArrowRight, Sparkles, Award } from 'lucide-react';
// আপনার ফাইলের সঠিক এক্সটেনশন অনুযায়ী সরাসরি ইমপোর্ট
import profileImg from '../assets/images/mohmen.jpg.jfif';

export default function Hero() {
  return (
    <section id="home" className="relative pt-28 pb-16 md:pt-36 md:pb-24 lg:pt-40 lg:pb-28 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] bg-blue-600/15 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-4 sm:right-10 w-[250px] sm:w-[450px] h-[250px] sm:h-[450px] bg-cyan-500/10 rounded-full blur-[90px] sm:blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">

          {/* Left Column: Headlines & Call to Actions */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-950/80 border border-blue-800/60 text-blue-400 text-[11px] sm:text-xs font-semibold uppercase tracking-wider mb-5">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              WEB ARCHITECTURE • UI/UX • GROWTH MARKETING
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12] mb-5">
              We Build Digital Experiences That Help{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-300">
                Businesses Grow.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 font-medium mb-3 leading-relaxed">
              High-Performance Websites, Modern UI/UX Design &amp; Digital Marketing Solutions for Ambitious Businesses.
            </p>

            <p className="text-xs sm:text-sm text-slate-400 mb-6 max-w-xl leading-relaxed">
              We help businesses in the <strong>USA, UK and Middle East</strong> build powerful digital experiences that attract customers, generate qualified leads and drive sustainable commercial growth.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
              <a
                href="/contact"
                className="px-6 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs sm:text-sm rounded-xl shadow-xl shadow-blue-600/30 flex items-center justify-center gap-2 transition hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="/web-development"
                className="px-6 py-3.5 bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 text-slate-200 font-semibold text-xs sm:text-sm rounded-xl transition flex items-center justify-center"
              >
                Explore Services
              </a>
            </div>

            {/* Regional Trust Marks with Clean Flags & Badges */}
            <div className="mt-8 pt-5 border-t border-slate-800/80 w-full flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-xs font-mono text-slate-200">🇺🇸 USA</span>
                <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-xs font-mono text-slate-200">🇬🇧 UK</span>
                <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-xs font-mono text-slate-200">🇦🇪 UAE</span>
                <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-xs font-mono text-slate-200">🇸🇦 KSA</span>
                <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-xs font-mono text-slate-200">🇶🇦 QAT</span>
                <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-xs font-mono text-slate-200">🇰🇼 KWT</span>
              </div>
              <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-slate-400">
                Serving Businesses Worldwide • International Standards
              </span>
            </div>
          </div>

          {/* Right Column: Premium Responsive Executive Profile Card */}
          <div className="lg:col-span-5 relative flex justify-center w-full">
            <div className="relative w-full max-w-[340px] sm:max-w-[400px] lg:max-w-[430px]">

              {/* Outer Glow Aura */}
              <div className="absolute -inset-1 rounded-[28px] bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-400 opacity-40 blur-xl group-hover:opacity-70 transition duration-500" />

              {/* Card Container */}
              <div className="relative rounded-2xl glass-panel p-2.5 sm:p-3 border border-slate-700/80 shadow-2xl bg-[#090D18]/90 overflow-hidden">

                {/* Responsive Image Wrap with aspect-ratio */}
                <div className="relative w-full aspect-[4/5] overflow-hidden rounded-xl bg-slate-950">
                  <img
                    src={profileImg}
                    alt="Md Mohmen - Lead Digital Architect"
                    className="w-full h-full object-cover object-top hover:scale-[1.03] transition-transform duration-700 ease-out"
                    loading="eager"
                  />

                  {/* Subtle bottom gradient shadow over image */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090D18] via-transparent to-transparent opacity-60" />

                  {/* Top-Right Floating Experience Badge */}
                  <div className="absolute top-3 right-3 px-3 py-1.5 rounded-full bg-slate-900/85 backdrop-blur-md border border-slate-700/70 shadow-lg flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5 text-amber-400" />
                    <span className="text-[10px] font-bold text-slate-200 tracking-wide uppercase">International Lead</span>
                  </div>
                </div>

                {/* Bottom Identity Block */}
                <div className="mt-3 p-3 sm:p-3.5 bg-slate-900/90 rounded-xl border border-slate-800 flex items-center justify-between gap-2">
                  <div>
                    <h3 className="text-sm font-bold text-white flex items-center gap-1.5">
                      Md Mohmen <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                    </h3>
                    <p className="text-[11px] text-slate-400 font-medium">Lead Web Architect &amp; Growth Strategist</p>
                  </div>

                  <div className="shrink-0 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-950/80 border border-emerald-800/40 text-[10px] font-mono text-emerald-400 font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                    ACTIVE
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}