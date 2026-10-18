import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import Logo from '../Logo.jsx';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Web Development', href: '/web-development' },
    { label: 'Digital Marketing', href: '/digital-marketing' },
    { label: 'Technologies', href: '/technologies' },
    { label: 'Projects', href: '/projects' },
    { label: 'UI/UX', href: '/ui-ux' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'glass-nav py-3.5 shadow-2xl' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          <Link to="/" className="flex items-center gap-3.5 group">
            <Logo className="w-10 h-10 sm:w-11 sm:h-11" />
            <div className="flex flex-col text-left">
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold tracking-tight text-white text-base sm:text-lg">
                  Freelancer <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">World Wide</span>
                </span>
                <span className="px-1.5 py-0.5 bg-blue-900/60 border border-blue-500/40 text-[9px] font-mono text-cyan-300 rounded font-semibold">
                  FWW
                </span>
              </div>
              <span className="text-[10px] uppercase tracking-widest text-slate-400 font-semibold">
                USA • UK • Middle East
              </span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1 bg-[#0D121F]/70 p-1.5 rounded-full border border-slate-800/80 backdrop-blur-md">
            {navLinks.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-full transition-all ${
                  location.pathname === item.href
                    ? 'bg-blue-600 text-white font-semibold'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden sm:flex items-center gap-4">
            <Link
              to="/contact"
              className="relative inline-flex items-center justify-center px-5 py-2.5 text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 rounded-full shadow-lg shadow-blue-600/30 transition-all hover:scale-[1.02] active:scale-[0.98] group"
            >
              <span>Start Your Project</span>
              <ArrowUpRight className="w-3.5 h-3.5 ml-1.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 p-4 rounded-2xl bg-[#0D121F] border border-slate-800 shadow-2xl flex flex-col gap-2">
            {navLinks.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-xl text-sm font-medium text-slate-300 hover:bg-slate-800 hover:text-white transition"
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 w-full py-3 bg-blue-600 text-white font-bold text-sm rounded-xl flex items-center justify-center gap-2"
            >
              Start Your Project
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}