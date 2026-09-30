import React from 'react';
import { LayoutDashboard, Server, Box, PlayCircle, Cloud, Code, Info } from 'lucide-react';

export const DevOpsDashboard: React.FC = () => {
  const cards = [
    {
      title: 'SYSTEM STATUS',
      value: 'Online',
      badge: 'Operational',
      badgeColor: 'text-emerald-400 bg-emerald-950/60 border-emerald-500/30',
      icon: Server,
      detail: 'Core Linux environment readiness & portfolio availability.'
    },
    {
      title: 'CONTAINERS',
      value: 'Ready',
      badge: 'Docker Stack',
      badgeColor: 'text-cyan-400 bg-cyan-950/60 border-cyan-500/30',
      icon: Box,
      detail: 'Isolated container image specifications & runtime manifests.'
    },
    {
      title: 'PIPELINE',
      value: 'Ready',
      badge: 'GitHub Actions',
      badgeColor: 'text-sky-400 bg-sky-950/60 border-sky-500/30',
      icon: PlayCircle,
      detail: 'Continuous delivery workflow models configured.'
    },
    {
      title: 'CLOUD PLATFORM',
      value: 'AWS Architecture',
      badge: 'Multi-AZ VPC',
      badgeColor: 'text-amber-400 bg-amber-950/60 border-amber-500/30',
      icon: Cloud,
      detail: 'Scalable cloud infrastructure design patterns.'
    },
    {
      title: 'AUTOMATION',
      value: 'Bash + Terraform',
      badge: 'IaC & Scripts',
      badgeColor: 'text-purple-400 bg-purple-950/60 border-purple-500/30',
      icon: Code,
      detail: 'Automated health monitors & infrastructure state definitions.'
    }
  ];

  return (
    <section id="dashboard" className="py-20 bg-[#060810] border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 font-mono text-xs uppercase tracking-widest">
            <LayoutDashboard className="w-3.5 h-3.5" />
            <span>Telemetry & Status</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Infrastructure Dashboard
          </h2>
          <p className="text-sm sm:text-base text-slate-400 font-mono">
            Conceptual status metrics highlighting project stack health and engineering readiness.
          </p>
        </div>

        {/* Disclaimer Banner */}
        <div className="max-w-4xl mx-auto mb-8 p-3 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-between text-xs font-mono text-slate-400">
          <div className="flex items-center gap-2">
            <Info className="w-4 h-4 text-cyan-400 shrink-0" />
            <span>Conceptual Portfolio Interface — UI telemetry indicators for demonstrative purposes.</span>
          </div>
          <span className="hidden sm:inline-block text-emerald-400 font-semibold">● Verified Spec</span>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-cyan-500/40 hover:bg-slate-900/90 transition-all duration-300 shadow-xl space-y-4 font-mono"
              >
                <div className="flex items-center justify-between">
                  <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-cyan-400">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className={`px-2.5 py-0.5 rounded text-[11px] font-semibold border ${card.badgeColor}`}>
                    {card.badge}
                  </span>
                </div>

                <div>
                  <div className="text-xs text-slate-400">{card.title}</div>
                  <div className="text-xl font-bold text-white mt-0.5">{card.value}</div>
                </div>

                <p className="text-xs text-slate-400 leading-relaxed pt-2 border-t border-slate-800/80">
                  {card.detail}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
