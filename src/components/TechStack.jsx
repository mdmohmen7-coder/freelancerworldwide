import React from 'react';

export default function TechStack() {
  const stack = [
    { name: 'HTML5', desc: 'Semantic, SEO-ready structure' },
    { name: 'CSS3', desc: 'Modern animations & layouts' },
    { name: 'JavaScript', desc: 'ESNext interactive logic' },
    { name: 'React.js', desc: 'Component-driven frontends' },
    { name: 'Node.js', desc: 'Scalable backend runtime' },
    { name: 'PHP', desc: 'Stable server-side execution' },
    { name: 'Laravel', desc: 'Robust MVC backend framework' },
    { name: 'MySQL', desc: 'Relational data integrity' },
    { name: 'Bootstrap', desc: 'Rapid responsive UI' },
    { name: 'Git', desc: 'Distributed version control' },
    { name: 'GitHub', desc: 'CI/CD pipeline & collaboration' }
  ];

  return (
    <section id="technologies" className="py-24 bg-[#06080F] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-400">ENGINEERING EXCELLENCE</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2">
            Powered by Modern Technologies
          </h2>
          <p className="text-slate-400 text-sm mt-3">
            We use industry-standard languages, frameworks, and database architectures to ensure zero vendor lock-in and effortless long-term maintenance.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {stack.map((item) => (
            <div
              key={item.name}
              className="group bg-[#0C111E] hover:bg-[#11182B] border border-slate-800 hover:border-blue-500/50 p-4 rounded-xl transition duration-200 flex flex-col items-center text-center cursor-default"
            >
              <div className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center font-mono font-bold text-xs text-blue-400 mb-3 group-hover:scale-110 transition">
                {item.name.substring(0, 3)}
              </div>
              <h4 className="text-sm font-bold text-white group-hover:text-blue-400 transition">{item.name}</h4>
              <p className="text-[11px] text-slate-400 mt-1 leading-snug">{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}