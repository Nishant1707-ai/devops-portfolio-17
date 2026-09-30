import React, { useState } from 'react';
import { Mail, Copy, Check, Send, MessageSquare, ShieldCheck, MapPin } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../Icons';
import { PERSONAL_INFO } from '../../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.socials.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.email || !formState.message) return;
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormState({ name: '', email: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="py-20 bg-[#07090e] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 font-mono text-xs uppercase tracking-widest">
            <Mail className="w-3.5 h-3.5" />
            <span>Get in Touch</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Let's Build Something Reliable.
          </h2>
          <p className="text-sm sm:text-base text-slate-400 font-mono">
            Open for entry-level DevOps Engineer, Cloud Engineer, or Cloud Intern opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
          {/* Left Cards: Socials & Contact Copy */}
          <div className="lg:col-span-5 space-y-6">
            {/* Email Card with Copy Button */}
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4 hover:border-cyan-500/40 transition-all shadow-xl font-mono">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-cyan-950/80 border border-cyan-500/40 text-cyan-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">DIRECT EMAIL</div>
                    <div className="text-sm font-bold text-white">{PERSONAL_INFO.socials.email}</div>
                  </div>
                </div>
                <button
                  onClick={copyToClipboard}
                  className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 text-cyan-400 hover:border-cyan-500/50 hover:bg-slate-900 transition-all flex items-center gap-1.5 text-xs font-semibold"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* LinkedIn Card */}
            <a
              href={PERSONAL_INFO.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 transition-all shadow-xl font-mono flex items-center justify-between block"
            >
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-sky-400 group-hover:border-sky-500/50 transition-all">
                  <LinkedinIcon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400">LINKEDIN PROFILE</div>
                  <div className="text-sm font-bold text-slate-200 group-hover:text-cyan-300">
                    in/nishant-gomkale
                  </div>
                </div>
              </div>
              <span className="text-xs text-cyan-400 group-hover:translate-x-1 transition-transform">→</span>
            </a>

            {/* GitHub Card */}
            <a
              href={PERSONAL_INFO.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 transition-all shadow-xl font-mono flex items-center justify-between block"
            >
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-300 group-hover:border-cyan-500/50 transition-all">
                  <GithubIcon className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <div className="text-xs text-slate-400">GITHUB PROFILE</div>
                  <div className="text-sm font-bold text-slate-200 group-hover:text-cyan-300">
                    github.com/Nishant1707-ai
                  </div>
                </div>
              </div>
              <span className="text-xs text-cyan-400 group-hover:translate-x-1 transition-transform">→</span>
            </a>

            {/* Location Badge */}
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800/90 text-xs font-mono text-slate-400 flex items-center justify-between">
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span>Base Location</span>
              </span>
              <span className="text-slate-200">{PERSONAL_INFO.location}</span>
            </div>
          </div>

          {/* Right Form: Recruiter Message Form */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-slate-900/70 border border-slate-800 backdrop-blur-md shadow-2xl space-y-6">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase font-semibold">
                <MessageSquare className="w-4 h-4" />
                <span>Direct Message Form</span>
              </div>
              <h3 className="text-xl font-bold text-white">Send a Message</h3>
            </div>

            {formSubmitted ? (
              <div className="p-8 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-center space-y-3 font-mono">
                <ShieldCheck className="w-10 h-10 text-emerald-400 mx-auto" />
                <div className="text-lg font-bold text-emerald-300">Message Dispatched!</div>
                <p className="text-xs text-slate-300">
                  Thank you for connecting. I will review your message and reply promptly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 font-mono">
                <div>
                  <label className="block text-xs text-slate-400 mb-1.5">Your Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alex (Tech Recruiter / Engineering Manager)"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-xs text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-cyan-500/50"
                  />
                </div>

                <div>
                  <label className="block text-xs text-slate-400 mb-1.5">Your Email Address</label>
                  <input
                    type="email"
                    required
                    placeholder="alex@company.com"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-xs text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-cyan-500/50"
                  />
                </div>

                <div>
                  <label className="block text-xs text-slate-400 mb-1.5">Message / Opportunity Details</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Hi Nishant, we checked your DevOps portfolio and projects..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-xs text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-cyan-500/50"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold text-xs hover:from-cyan-400 hover:to-blue-500 transition-all shadow-[0_0_20px_rgba(0,240,255,0.3)] flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
