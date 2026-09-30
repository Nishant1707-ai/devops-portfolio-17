import React, { useState, useEffect } from 'react';
import { ArrowRight, Send, Terminal as TerminalIcon, ShieldCheck, Server, Cloud } from 'lucide-react';
import { GithubIcon } from '../Icons';
import { PERSONAL_INFO } from '../../data/portfolioData';

export const HeroSection: React.FC = () => {
  const [terminalLineIndex, setTerminalLineIndex] = useState(0);

  const commandSequence = [
    { cmd: 'whoami', output: 'nishant' },
    { cmd: 'focus', output: 'devops + cloud' },
    { cmd: 'stack', output: 'linux | aws | git | docker | kubernetes | terraform' },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setTerminalLineIndex((prev) => (prev < commandSequence.length ? prev + 1 : prev));
    }, 1200);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero" className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      {/* Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-cyan-500/10 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute top-1/3 left-1/4 w-[350px] h-[250px] bg-blue-600/10 blur-[100px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Heading, Subtitle & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 text-xs font-mono text-cyan-300 shadow-[0_0_15px_rgba(0,240,255,0.15)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>DevOps Engine Status: Active & Building</span>
            </div>

            {/* Main Title with Profile Avatar */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
              <div className="relative group shrink-0">
                {/* Glowing Outer Aura */}
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-emerald-500 rounded-2xl blur-md opacity-75 group-hover:opacity-100 transition duration-500"></div>
                <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border-2 border-cyan-400/90 shadow-[0_0_25px_rgba(0,240,255,0.35)] bg-slate-900">
                  <img
                    src={PERSONAL_INFO.avatarUrl}
                    alt={PERSONAL_INFO.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-1 right-1 bg-slate-950/90 border border-emerald-500/60 rounded-full px-2 py-0.5 text-[9px] font-mono text-emerald-400 font-semibold flex items-center gap-1 shadow-md">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                    ACTIVE
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
                  Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-500">{PERSONAL_INFO.name}</span>
                </h1>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-slate-300">
                  {PERSONAL_INFO.title}
                </h2>
              </div>
            </div>

            {/* Tagline */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl font-normal leading-relaxed">
              {PERSONAL_INFO.tagline}
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-semibold text-sm hover:from-cyan-400 hover:to-blue-500 transition-all shadow-[0_0_20px_rgba(0,240,255,0.3)] hover:shadow-[0_0_30px_rgba(0,240,255,0.5)] focus:outline-none focus:ring-2 focus:ring-cyan-400"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={PERSONAL_INFO.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-slate-900 border border-slate-700/90 text-slate-200 font-mono text-sm hover:border-cyan-500/60 hover:text-cyan-400 hover:shadow-[0_0_15px_rgba(0,240,255,0.15)] transition-all"
              >
                <GithubIcon className="w-4 h-4 text-cyan-400" />
                <span>GitHub</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-slate-900/60 border border-slate-800 text-slate-400 font-mono text-sm hover:text-slate-200 hover:border-slate-700 transition-all"
              >
                <Send className="w-4 h-4" />
                <span>Let's Connect</span>
              </a>
            </div>

            {/* Sub Quick Badges */}
            <div className="pt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-mono text-slate-400">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Focused on Infrastructure & Automation</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Cloud className="w-4 h-4 text-cyan-400" />
                <span>AWS & Linux Hands-on</span>
              </div>
            </div>
          </div>

          {/* Right Column: Terminal Sequence Card */}
          <div className="lg:col-span-5">
            <div className="rounded-xl bg-[#0a0f19] border border-slate-800/90 shadow-2xl overflow-hidden font-mono text-xs sm:text-sm relative">
              {/* Terminal Window Header */}
              <div className="px-4 py-3 bg-[#0d1322] border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                </div>
                <div className="flex items-center gap-1.5 text-slate-400 text-xs">
                  <TerminalIcon className="w-3.5 h-3.5 text-cyan-400" />
                  <span>nishant@devops-node:~</span>
                </div>
                <div className="text-[10px] text-slate-500 font-mono">zsh</div>
              </div>

              {/* Terminal Body */}
              <div className="p-5 space-y-4 min-h-[220px] bg-[#070b12]/90">
                <div className="text-slate-500 text-xs pb-1 border-b border-slate-800/60 flex items-center justify-between">
                  <span>// Simulated DevOps Command Execution</span>
                  <span className="text-emerald-400 text-[11px]">TTY: /dev/pts/0</span>
                </div>

                {commandSequence.map((item, idx) => {
                  const isVisible = idx < terminalLineIndex;
                  return (
                    <div
                      key={item.cmd}
                      className={`transition-all duration-300 ${
                        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                      }`}
                    >
                      <div className="flex items-center gap-2 text-cyan-400">
                        <span className="text-emerald-400 font-bold">$</span>
                        <span className="text-slate-200 font-semibold">{item.cmd}</span>
                      </div>
                      {isVisible && (
                        <div className="mt-1 pl-4 text-teal-300 font-mono border-l-2 border-cyan-500/40">
                          {item.output}
                        </div>
                      )}
                    </div>
                  );
                })}

                {/* Cursor line */}
                <div className="flex items-center gap-2 text-cyan-400 pt-1">
                  <span className="text-emerald-400 font-bold">$</span>
                  <span className="w-2.5 h-4 bg-cyan-400 animate-cursor-blink"></span>
                </div>
              </div>

              {/* Terminal Footer */}
              <div className="px-4 py-2 bg-[#0d1322]/80 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                <span className="flex items-center gap-1">
                  <Server className="w-3 h-3 text-cyan-400" /> System: Online
                </span>
                <span>Nagpur, Maharashtra, IN</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
