import React from 'react';
import { User, Terminal, BookOpen, MapPin, CheckCircle } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-[#070a11] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 font-mono text-xs uppercase tracking-widest">
            <User className="w-3.5 h-3.5" />
            <span>Engineer Overview</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            About Me
          </h2>
          <p className="text-sm sm:text-base text-slate-400 font-mono">
            "I build, automate, deploy, and understand infrastructure."
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Bio Story Card */}
          <div className="lg:col-span-7 flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-slate-900/70 border border-slate-800 backdrop-blur-md shadow-xl">
            <div className="space-y-5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
                <div className="flex items-center gap-4">
                  <div className="relative group shrink-0">
                    <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl blur-md opacity-75 group-hover:opacity-100 transition duration-300"></div>
                    <img
                      src={PERSONAL_INFO.avatarUrl}
                      alt={PERSONAL_INFO.name}
                      className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl object-cover border-2 border-cyan-400/90 shadow-xl"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-100">{PERSONAL_INFO.name}</h3>
                    <div className="text-xs font-mono text-cyan-400 font-semibold">{PERSONAL_INFO.targetRole}</div>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400 bg-slate-800/60 px-3 py-1.5 rounded-lg border border-slate-700/60 self-start sm:self-center">
                  <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{PERSONAL_INFO.location}</span>
                </div>
              </div>

              {/* Strict Required Bio Text */}
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {PERSONAL_INFO.bio}
              </p>

              {/* Education Cards */}
              <div className="pt-2 space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-wider font-semibold">
                  <BookOpen className="w-4 h-4 text-cyan-400" />
                  <span>Academic Background</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {PERSONAL_INFO.education.map((edu, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800/90 space-y-1 hover:border-cyan-500/30 transition-all"
                    >
                      <div className="text-xs font-mono text-cyan-300 font-semibold">{edu.status}</div>
                      <div className="text-xs font-bold text-slate-200">{edu.degree}</div>
                      <div className="text-[11px] text-slate-400 font-mono">{edu.institution}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Philosophy Motto Footnote */}
            <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                <span>Practicing Continuous Learning & Build Automation</span>
              </span>
            </div>
          </div>

          {/* Right Column: Terminal "CURRENT FOCUS" Card */}
          <div className="lg:col-span-5 rounded-2xl bg-[#090e18] border border-slate-800 p-6 shadow-2xl flex flex-col justify-between font-mono">
            <div>
              {/* Terminal Window Header */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-cyan-400" />
                  <span className="text-xs font-bold text-cyan-300 uppercase tracking-wider">
                    CURRENT FOCUS
                  </span>
                </div>
                <span className="text-[10px] text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">
                  Active Sprint
                </span>
              </div>

              {/* Technology Focus List Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {PERSONAL_INFO.currentFocus.map((tech) => (
                  <div
                    key={tech}
                    className="p-3 rounded-lg bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 hover:bg-slate-900 transition-all flex items-center gap-2 text-xs text-slate-200"
                  >
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                    <span>{tech}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Pillars Badge Box */}
            <div className="mt-6 p-4 rounded-xl bg-slate-950/90 border border-slate-800/90 text-xs text-slate-400 space-y-2">
              <div className="text-cyan-400 font-semibold text-[11px] uppercase tracking-wider">
                Engineering Approach
              </div>
              <ul className="space-y-1.5 text-[12px] text-slate-300">
                <li className="flex items-center gap-2">
                  <span className="text-cyan-400">►</span> Infrastructure as Code & Automation
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-cyan-400">►</span> Hands-on Cloud Deployment & Networking
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-cyan-400">►</span> Detailed Technical Documentation
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
