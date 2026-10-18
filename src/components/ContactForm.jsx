import React, { useState } from 'react';
import { Send, CheckCircle2, ShieldCheck, Mail, MapPin, Phone } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    company: '',
    email: '',
    country: 'USA',
    service: 'Web Development',
    budget: '$2,500 – $5,000',
    details: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('https://formspree.io/f/myekvyzo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        const data = await response.json();
        setError(data?.errors?.[0]?.message || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      setError('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-[#070A14] border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          <div className="lg:col-span-5">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-400">PROJECT INQUIRY</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2 mb-4 leading-tight">
              Have a Project in Mind? Let's Talk.
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed mb-8">
              We partner with forward-thinking businesses across North America, Europe, and the Middle East to deliver exceptional digital experiences.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold uppercase text-slate-400">Direct Inquiries</h4>
                  <p className="text-sm font-semibold text-white">freelancerworldwidefww@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold uppercase text-slate-400">Phone &amp; WhatsApp</h4>
                  <p className="text-sm font-semibold text-white">+8801877-016042</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold uppercase text-slate-400">Primary Hubs</h4>
                  <p className="text-sm font-semibold text-white">New York • London • Dubai • Riyadh</p>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-blue-950/40 border border-blue-900/50">
              <div className="flex items-center gap-2 text-xs font-semibold text-blue-300">
                <ShieldCheck className="w-4 h-4 text-blue-400" />
                <span>NDA &amp; Strict IP Protection Available Upon Request</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-slate-800">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-14 h-14 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Inquiry Received Successfully</h3>
                  <p className="text-slate-400 text-sm max-w-md mx-auto">
                    Thank you for reaching out. One of our technical directors will review your project brief and respond within 12 business hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {error && (
                    <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-xs text-center">
                      {error}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">Full Name *</label>
                      <input
                        type="text"
                        name="fullName"
                        required
                        placeholder="Enter Your Name"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-[#05070E] border border-slate-800 text-white text-sm focus:outline-none focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">Business / Company *</label>
                      <input
                        type="text"
                        name="company"
                        required
                        placeholder="Enter Your Company Name"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-[#05070E] border border-slate-800 text-white text-sm focus:outline-none focus:border-blue-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="Enter Your Mail"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-[#05070E] border border-slate-800 text-white text-sm focus:outline-none focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">Country / Market *</label>
                      <select
                        name="country"
                        value={formData.country}
                        onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-[#05070E] border border-slate-800 text-white text-sm focus:outline-none focus:border-blue-500"
                      >
                        <option value="USA">United States 🇺🇸</option>
                        <option value="UK">United Kingdom 🇬🇧</option>
                        <option value="UAE">United Arab Emirates 🇦🇪</option>
                        <option value="Saudi Arabia">Saudi Arabia 🇸🇦</option>
                        <option value="Qatar">Qatar 🇶🇦</option>
                        <option value="Kuwait">Kuwait 🇰🇼</option>
                        <option value="Other">Other International</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">Service Required</label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-[#05070E] border border-slate-800 text-white text-sm focus:outline-none focus:border-blue-500"
                      >
                        <option value="Web Development">Web Development</option>
                        <option value="React.js Development">New Web Design</option>
                        <option value="Digital Marketing">Digital Marketing</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">Estimated Budget (USD)</label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-[#05070E] border border-slate-800 text-white text-sm focus:outline-none focus:border-blue-500"
                      >
                        <option value="Under $500">Under $500</option>
                        <option value="$500 – $1,000">$500 – $1,000</option>
                        <option value="$1,000 – $2,500">$1,000 – $2,500</option>
                        <option value="$2,500 – $5,000">$2,500 – $5,000</option>
                        <option value="$5,000+">$5,000+</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">Project Details &amp; Objectives *</label>
                    <textarea
                      name="details"
                      rows={4}
                      required
                      placeholder="Briefly describe your goals, required timeline, and specific challenges..."
                      value={formData.details}
                      onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#05070E] border border-slate-800 text-white text-sm focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 bg-blue-600 hover:bg-blue-500 disabled:bg-blue-800 disabled:cursor-not-allowed text-white font-bold text-sm rounded-xl shadow-lg shadow-blue-600/30 transition flex items-center justify-center gap-2"
                  >
                    <span>{loading ? 'Sending Inquiry...' : 'Send Project Inquiry'}</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
