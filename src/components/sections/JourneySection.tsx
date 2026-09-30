import React from 'react';
import { Route } from 'lucide-react';
import { JOURNEY_STEPS } from '../../data/portfolioData';

export const JourneySection: React.FC = () => {
  return (
    <section id="journey" className="py-20 bg-[#070a12] border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 font-mono text-xs uppercase tracking-widest">
            <Route className="w-3.5 h-3.5" />
            <span>Learning Progression</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Building My DevOps Journey
          </h2>
          <p className="text-sm sm:text-base text-slate-400 font-mono">
            A continuous progression from Linux administration fundamentals to advanced cloud engineering & automation.
          </p>
        </div>

        {/* Timeline Line Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Central Vertical Connector Line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-blue-500 to-slate-800 -translate-x-1/2 hidden sm:block"></div>

          <div className="space-y-8 sm:space-y-12 relative">
            {JOURNEY_STEPS.map((step, idx) => {
              const isEven = idx % 2 === 0;
              const isCompleted = step.status === 'Completed';
              const isInProgress = step.status === 'In Progress';

              return (
                <div
                  key={step.step}
                  className={`relative flex flex-col sm:flex-row items-center ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Badge Node */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-slate-950 border-2 border-cyan-400 flex items-center justify-center font-mono text-xs font-bold text-cyan-300 z-10 shadow-[0_0_15px_rgba(0,240,255,0.4)]">
                    {step.step}
                  </div>

                  {/* Content Box */}
                  <div className={`w-full sm:w-1/2 ${isEven ? 'sm:pl-12' : 'sm:pr-12'} pl-12 sm:pl-0`}>
                    <div
                      className={`p-6 rounded-2xl bg-slate-900/80 border transition-all duration-300 space-y-3 shadow-xl ${
                        isInProgress
                          ? 'border-cyan-500/50 shadow-[0_0_20px_rgba(0,240,255,0.15)] bg-slate-900/95'
                          : 'border-slate-800 hover:border-slate-700'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider font-semibold">
                          {step.category}
                        </span>
                        <span
                          className={`px-2.5 py-0.5 rounded text-[10px] font-mono font-bold border ${
                            isCompleted
                              ? 'text-cyan-300 bg-cyan-950/80 border-cyan-500/40'
                              : isInProgress
                              ? 'text-emerald-300 bg-emerald-950/80 border-emerald-500/40'
                              : 'text-amber-300 bg-amber-950/80 border-amber-500/40'
                          }`}
                        >
                          {step.status}
                        </span>
                      </div>

                      <h3 className="text-lg font-bold text-white font-mono">
                        {step.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                        {step.description}
                      </p>

                      {/* Key Skills Tags */}
                      <div className="pt-2 flex flex-wrap gap-1.5">
                        {step.keySkills.map((sk) => (
                          <span
                            key={sk}
                            className="px-2.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-[11px] font-mono text-slate-300"
                          >
                            #{sk}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
