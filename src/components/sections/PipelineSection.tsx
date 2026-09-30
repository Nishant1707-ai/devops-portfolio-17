import React, { useState } from 'react';
import { PlayCircle, UserCheck, GitBranch, Hammer, ShieldCheck, Box, CloudUpload, Server, Activity, Info } from 'lucide-react';
import { PIPELINE_STAGES } from '../../data/portfolioData';

const STAGE_ICONS: Record<string, React.ElementType> = {
  UserCheck,
  GitBranch,
  Hammer,
  ShieldCheck,
  Box,
  CloudUpload,
  Server,
  Activity
};

export const PipelineSection: React.FC = () => {
  const [activeStage, setActiveStage] = useState(PIPELINE_STAGES[4]); // Docker stage default

  return (
    <section id="pipeline" className="py-20 bg-[#060810] border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 font-mono text-xs uppercase tracking-widest">
            <PlayCircle className="w-3.5 h-3.5" />
            <span>CI/CD Workflow Blueprint</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Automated DevOps Pipeline Model
          </h2>
          <p className="text-sm sm:text-base text-slate-400 font-mono">
            Conceptual continuous delivery lifecycle model detailing code verification, containerization, and cloud deployment steps.
          </p>
        </div>

        {/* Pipeline Workflow Visual Container */}
        <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800 shadow-2xl space-y-8 relative overflow-hidden">
          {/* Conceptual Notice Banner */}
          <div className="p-3 rounded-xl bg-cyan-950/40 border border-cyan-500/30 flex items-center justify-between text-xs font-mono text-cyan-300">
            <div className="flex items-center gap-2">
              <Info className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>Conceptual DevOps Workflow Model — Target Deployment Pipeline</span>
            </div>
            <span className="hidden sm:inline-block text-[11px] text-slate-400">Automated Integration Blueprint</span>
          </div>

          {/* Interactive Pipeline Stages Horizontal Flow */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 relative z-10">
            {PIPELINE_STAGES.map((stage) => {
              const IconComponent = STAGE_ICONS[stage.icon] || PlayCircle;
              const isSelected = activeStage.step === stage.step;

              return (
                <div
                  key={stage.step}
                  onClick={() => setActiveStage(stage)}
                  onMouseEnter={() => setActiveStage(stage)}
                  className={`group p-3.5 rounded-xl border text-center cursor-pointer transition-all duration-300 flex flex-col items-center justify-between min-h-[140px] ${
                    isSelected
                      ? 'bg-cyan-950/70 border-cyan-400 shadow-[0_0_20px_rgba(0,240,255,0.25)] scale-105'
                      : 'bg-slate-950/70 border-slate-800/90 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between w-full text-[10px] font-mono text-slate-400 mb-2">
                    <span className="w-4 h-4 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center font-bold text-cyan-400">
                      {stage.step}
                    </span>
                    {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping"></span>}
                  </div>

                  <div className={`p-2.5 rounded-lg bg-slate-900 border ${isSelected ? 'border-cyan-400 text-cyan-300' : 'border-slate-800 text-slate-400'}`}>
                    <IconComponent className="w-5 h-5" />
                  </div>

                  <div className="mt-2">
                    <div className="text-xs font-mono font-bold text-slate-200 group-hover:text-cyan-300 leading-tight">
                      {stage.name}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Stage Details Inspector Box */}
          <div className="p-6 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-cyan-400 font-bold">
                <span>STAGE 0{activeStage.step}: {activeStage.name.toUpperCase()}</span>
              </div>
              <p className="text-slate-300 text-sm">{activeStage.detail}</p>
            </div>

            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 text-[11px] shrink-0">
              <span>Status:</span>
              <span className="text-emerald-400 font-bold">Automated Stage Spec</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
