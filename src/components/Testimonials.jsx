import React from 'react';
import { Star } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      quote: "The web application delivered exactly the high-end professional experience our investment brand needed in London and the GCC.",
      name: "Marcus Vance",
      company: "Vance & Sterling Partners",
      country: "United Kingdom 🇬🇧",
      service: "Enterprise Portal & UI/UX"
    },
    {
      quote: "Our lead acquisition cost dropped significantly after restructuring our landing experiences and implementing targeted paid campaigns.",
      name: "Tariq Al-Mansoor",
      company: "Al-Mansoor Logistics Hub",
      country: "United Arab Emirates 🇦🇪",
      service: "Digital Marketing & CRO"
    },
    {
      quote: "Exceptional speed, clean React architecture, and effortless communication across different time zones. Highly recommended partner.",
      name: "David H. Miller",
      company: "Aether Cloud Systems",
      country: "United States 🇺🇸",
      service: "Full-Stack Web Development"
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-[#06080F] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">INTERNATIONAL FEEDBACK</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2">
            Trusted by Business Leaders
          </h2>
          <p className="text-slate-400 text-sm mt-3">
            Real experiences from founders, directors, and marketing managers who scaled with our solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((r) => (
            <div
              key={r.name}
              className="bg-[#0C1220] border border-slate-800 p-6 rounded-2xl relative flex flex-col justify-between"
            >
              <div>
                <div className="flex gap-1 text-amber-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <p className="text-sm text-slate-300 italic leading-relaxed mb-6">
                  "{r.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800/80">
                <h4 className="text-sm font-bold text-white">{r.name}</h4>
                <p className="text-xs text-blue-400 font-medium">{r.company}</p>
                <div className="flex items-center justify-between mt-2 text-[11px] text-slate-400">
                  <span>{r.country}</span>
                  <span className="font-mono text-[10px] text-slate-400">{r.service}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}