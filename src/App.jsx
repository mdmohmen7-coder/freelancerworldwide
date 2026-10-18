import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import WebDevPage from './pages/WebDevPage';
import MarketingPage from './pages/MarketingPage';
import TechPage from './pages/TechPage';
import ProjectsPage from './pages/ProjectsPage';
import UiUxPage from './pages/UiUxPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#06080F] text-slate-100 flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/web-development" element={<WebDevPage />} />
            <Route path="/digital-marketing" element={<MarketingPage />} />
            <Route path="/technologies" element={<TechPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/ui-ux" element={<UiUxPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}