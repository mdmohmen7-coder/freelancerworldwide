import React from 'react';

export default function Logo({ className = "w-11 h-11" }) {
  return (
    <div className={`relative flex items-center justify-center ${className} group cursor-pointer`}>
      {/* Eye-catching Golden Luminous Outer Aura */}
      <div className="absolute -inset-1.5 rounded-2xl bg-gradient-to-tr from-amber-500 via-yellow-400 to-amber-200 opacity-60 blur-md group-hover:opacity-95 transition-all duration-500 animate-pulse" />

      {/* Main SVG Logo Badge */}
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full relative z-10 drop-shadow-[0_10px_20px_rgba(245,158,11,0.45)]"
      >
        <defs>
          {/* Ultra-Premium Metallic Gold Gradient */}
          <linearGradient id="fwwGoldMaster" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFF2A3" />
            <stop offset="25%" stopColor="#F5BE47" />
            <stop offset="50%" stopColor="#E59E15" />
            <stop offset="75%" stopColor="#FBDA61" />
            <stop offset="100%" stopColor="#F7971E" />
          </linearGradient>

          {/* Platinum / Bright Gold for Sharp Contrast */}
          <linearGradient id="fwwBrightGold" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#F6D365" />
            <stop offset="100%" stopColor="#FDA085" />
          </linearGradient>

          {/* Luxury Obsidian Base Background */}
          <linearGradient id="fwwCardBase" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#141824" />
            <stop offset="100%" stopColor="#080B12" />
          </linearGradient>

          {/* Gold Glow Filter */}
          <filter id="goldGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#F59E0B" floodOpacity="0.8" />
          </filter>
        </defs>

        {/* Shield Frame with Polished Gold Border */}
        <rect
          x="5"
          y="5"
          width="90"
          height="90"
          rx="22"
          fill="url(#fwwCardBase)"
          stroke="url(#fwwGoldMaster)"
          strokeWidth="2.8"
          className="transition-all duration-300 group-hover:stroke-yellow-300"
        />

        {/* Subtle Tech Cyber Grid Lines */}
        <path
          d="M18 50 H82 M50 18 V82"
          stroke="#332408"
          strokeWidth="1.2"
          strokeDasharray="3 3"
          opacity="0.8"
        />

        {/* --- LETTER 'F' (Dominant Master Gold) --- */}
        <path
          d="M24 30 H48 M24 30 V70 M24 49 H43"
          stroke="url(#fwwGoldMaster)"
          strokeWidth="6.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#goldGlow)"
        />

        {/* --- FIRST 'W' (Interlocked Mid Gold) --- */}
        <path
          d="M40 48 L48 70 L55 52 L62 70 L69 48"
          stroke="url(#fwwBrightGold)"
          strokeWidth="5.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* --- SECOND 'W' (Final Bold Global Wing) --- */}
        <path
          d="M58 48 L65 70 L72 52 L79 70 L86 48"
          stroke="url(#fwwGoldMaster)"
          strokeWidth="5.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#goldGlow)"
        />

        {/* Global Sparkle / Analytics Growth Node */}
        <circle cx="86" cy="33" r="5" fill="#FFE57F" className="animate-ping" opacity="0.75" />
        <circle cx="86" cy="33" r="3.5" fill="url(#fwwGoldMaster)" />
        <circle cx="86" cy="33" r="1.5" fill="#FFFFFF" />
      </svg>
    </div>
  );
}