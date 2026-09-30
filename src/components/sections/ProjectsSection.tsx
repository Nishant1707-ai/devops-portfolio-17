import React, { useState } from 'react';
import { FolderGit2, Network, Terminal as TerminalIcon, Play, Server, AlertCircle } from 'lucide-react';
import { GithubIcon } from '../Icons';
import { PROJECTS_DATA } from '../../data/portfolioData';
import { ArchitectureModal } from './ArchitectureModal';

export const ProjectsSection: React.FC = () => {
  const [archModalOpen, setArchModalOpen] = useState(false);
  
  // Terminal execution state for Project 2 (Linux Health Analyzer)
  const [isRunningScript, setIsRunningScript] = useState(false);
  const [scriptStep, setScriptStep] = useState(0);

  const healthCheckSteps = [
    { label: "CPU usage", detail: "Average load: 0.42 [OK]" },
    { label: "Memory utilization", detail: "Used: 3.2GB / 8.0GB (40%) [OK]" },
    { label: "Disk utilization", detail: "/dev/sda1 mounted on / (32% used) [OK]" },
    { label: "Running/stopped services", detail: "nginx: active, sshd: active, docker: active" },
    { label: "Recent system error logs", detail: "0 critical kernel panics in journalctl" },
    { label: "Failed SSH login attempts", detail: "3 failed auth attempts logged from 192.168.1.45" }
  ];

  const runHealthCheck = () => {
    if (isRunningScript) return;
    setIsRunningScript(true);
    setScriptStep(0);

    let current = 0;
    const interval = setInterval(() => {
      current++;
      setScriptStep(current);
      if (current >= healthCheckSteps.length) {
        clearInterval(interval);
        setIsRunningScript(false);
      }
    }, 600);
  };

  return (
    <section id="projects" className="py-20 bg-[#070b13] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 font-mono text-xs uppercase tracking-widest">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Practical Infrastructure Builds</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Featured Projects
          </h2>
          <p className="text-sm sm:text-base text-slate-400 font-mono">
            Hands-on cloud architecture and Linux automation tools designed, built, and documented.
          </p>
        </div>

        {/* Project Cards List */}
        <div className="space-y-12">
          {PROJECTS_DATA.map((project, index) => {
            const isAwsProject = project.id === 'aws-notes-app';
            const isLinuxProject = project.id === 'linux-health-analyzer';
            const isPlaceholder = project.isPlaceholder;

            return (
              <div
                key={project.id}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden shadow-2xl ${
                  isPlaceholder
                    ? 'bg-slate-950/60 border-slate-800/80'
                    : 'bg-slate-900/75 border-slate-800 hover:border-cyan-500/40'
                }`}
              >
                <div className="p-6 sm:p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  {/* Left Specs */}
                  <div className="lg:col-span-7 space-y-6">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 font-mono text-xs text-cyan-400">
                        <span>PROJECT 0{index + 1}</span>
                        <span>//</span>
                        <span className="text-slate-400">{project.subtitle}</span>
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                        {project.title}
                      </h3>
                    </div>

                    <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                      {project.description}
                    </p>

                    {/* Features Bullet List */}
                    {project.features && (
                      <div className="space-y-2 pt-2">
                        <div className="text-xs font-mono text-slate-400 uppercase tracking-wider font-semibold">
                          Key Architecture Highlights:
                        </div>
                        <ul className="space-y-1.5 text-xs text-slate-300 font-mono">
                          {project.features.map((feat, fIdx) => (
                            <li key={fIdx} className="flex items-start gap-2">
                              <span className="text-cyan-400 mt-0.5">✔</span>
                              <span>{feat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Tech Stack Badges */}
                    <div className="pt-2 space-y-2">
                      <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                        Technologies Used:
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 rounded-md bg-slate-950 border border-slate-800 text-xs font-mono text-cyan-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="pt-4 flex flex-wrap items-center gap-4">
                      {!isPlaceholder && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-slate-950 border border-slate-700/80 font-mono text-xs text-slate-200 hover:text-cyan-300 hover:border-cyan-500/50 hover:shadow-[0_0_15px_rgba(0,240,255,0.2)] transition-all"
                        >
                          <GithubIcon className="w-4 h-4 text-cyan-400" />
                          <span>View on GitHub</span>
                        </a>
                      )}

                      {isAwsProject && (
                        <button
                          onClick={() => setArchModalOpen(true)}
                          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-cyan-500 text-slate-950 font-mono font-bold text-xs hover:bg-cyan-400 shadow-[0_0_15px_rgba(0,240,255,0.2)] transition-all"
                        >
                          <Network className="w-4 h-4" />
                          <span>Interactive Architecture</span>
                        </button>
                      )}

                      {isPlaceholder && (
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-slate-400">
                          <AlertCircle className="w-4 h-4 text-amber-400" />
                          <span>Building & Documenting in Public</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Right Interactive Preview Box */}
                  <div className="lg:col-span-5">
                    {isAwsProject && (
                      <div className="rounded-xl bg-[#090d16] border border-slate-800 p-6 space-y-4 font-mono text-xs">
                        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                          <span className="text-cyan-400 font-bold">AWS Cloud Blueprint</span>
                          <span className="text-[10px] text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded border border-emerald-500/30">
                            Multi-AZ VPC
                          </span>
                        </div>
                        <div className="space-y-2 text-slate-300 text-[11px]">
                          <div className="p-2 rounded bg-slate-950 border border-slate-800 flex justify-between">
                            <span>Ingress Routing</span>
                            <span className="text-cyan-400">Route 53 → ALB</span>
                          </div>
                          <div className="p-2 rounded bg-slate-950 border border-slate-800 flex justify-between">
                            <span>App Compute</span>
                            <span className="text-cyan-400">EC2 Auto Scaling</span>
                          </div>
                          <div className="p-2 rounded bg-slate-950 border border-slate-800 flex justify-between">
                            <span>Database Layer</span>
                            <span className="text-cyan-400">RDS PostgreSQL</span>
                          </div>
                          <div className="p-2 rounded bg-slate-950 border border-slate-800 flex justify-between">
                            <span>Media Storage</span>
                            <span className="text-cyan-400">S3 → Lambda Trigger</span>
                          </div>
                        </div>
                        <button
                          onClick={() => setArchModalOpen(true)}
                          className="w-full py-2.5 rounded-lg bg-slate-900 border border-cyan-500/30 text-cyan-400 hover:bg-cyan-950/40 text-xs font-bold transition-all"
                        >
                          Launch Full Architecture Inspector →
                        </button>
                      </div>
                    )}

                    {isLinuxProject && (
                      <div className="rounded-xl bg-[#070a11] border border-slate-800 overflow-hidden font-mono text-xs">
                        {/* Terminal Header */}
                        <div className="px-4 py-2.5 bg-[#0b101a] border-b border-slate-800 flex items-center justify-between">
                          <div className="flex items-center gap-1.5">
                            <TerminalIcon className="w-3.5 h-3.5 text-cyan-400" />
                            <span className="text-slate-300 font-bold">./health_analyzer.sh</span>
                          </div>
                          <button
                            onClick={runHealthCheck}
                            disabled={isRunningScript}
                            className="flex items-center gap-1 px-2.5 py-1 rounded bg-cyan-500 text-slate-950 text-[11px] font-bold hover:bg-cyan-400 disabled:opacity-50 transition-all"
                          >
                            <Play className="w-3 h-3 fill-slate-950" />
                            <span>{isRunningScript ? 'Executing...' : 'Run Diagnostics'}</span>
                          </button>
                        </div>

                        {/* Terminal Body */}
                        <div className="p-4 space-y-2 min-h-[220px] bg-[#05070d]">
                          <div className="text-cyan-400 font-bold">$ ./health_analyzer.sh</div>
                          <div className="text-slate-400 text-[11px]">
                            [+] Initializing system diagnostics report...
                          </div>

                          {healthCheckSteps.map((step, sIdx) => {
                            const isDone = sIdx < scriptStep;
                            return (
                              <div
                                key={step.label}
                                className={`transition-all duration-300 ${
                                  isDone ? 'opacity-100' : 'opacity-20'
                                }`}
                              >
                                <div className="flex items-center gap-2 text-emerald-400">
                                  <span>[✓]</span>
                                  <span className="text-slate-200 font-semibold">{step.label}</span>
                                </div>
                                {isDone && (
                                  <div className="pl-6 text-[11px] text-slate-400">
                                    → {step.detail}
                                  </div>
                                )}
                              </div>
                            );
                          })}

                          {scriptStep >= healthCheckSteps.length && (
                            <div className="pt-2 text-cyan-400 font-bold border-t border-slate-800 text-[11px]">
                              [✔] Health check complete. Summary report generated.
                            </div>
                          )}
                        </div>
                      </div>
                    )}

                    {isPlaceholder && (
                      <div className="rounded-xl bg-[#090d16] border border-slate-800 p-6 space-y-4 text-center font-mono">
                        <Server className="w-10 h-10 text-cyan-400 mx-auto" />
                        <div className="text-sm font-bold text-white">Active DevOps Roadmap</div>
                        <p className="text-xs text-slate-400">
                          Building Terraform AWS EKS module scripts, Prometheus node exporters, and GitOps pipelines.
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Architecture Modal Component */}
      <ArchitectureModal isOpen={archModalOpen} onClose={() => setArchModalOpen(false)} />
    </section>
  );
};
