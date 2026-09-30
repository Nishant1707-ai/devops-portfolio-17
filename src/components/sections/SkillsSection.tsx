import React, { useState } from 'react';
import { 
  Layers, 
  Cloud, 
  Terminal, 
  GitBranch, 
  Box, 
  FileCode, 
  PlayCircle, 
  Code, 
  Activity, 
  CheckSquare,
  Search
} from 'lucide-react';
import { SKILLS_DATA, type SkillItem } from '../../data/portfolioData';

const ICON_MAP: Record<string, React.ElementType> = {
  Cloud,
  Terminal,
  GitBranch,
  Github: GitBranch,
  Box,
  Layers,
  FileCode,
  PlayCircle,
  Cpu: PlayCircle,
  Code,
  Activity,
  BarChart3: Activity,
  CheckSquare
};

export const SkillsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', ...Array.from(new Set(SKILLS_DATA.map((s) => s.category)))];

  const filteredSkills = SKILLS_DATA.filter((skill) => {
    const matchesCategory = selectedCategory === 'All' || skill.category === selectedCategory;
    const matchesSearch =
      skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getStatusBadge = (status: SkillItem['statusLabel']) => {
    switch (status) {
      case 'Hands-on':
        return (
          <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-cyan-950/80 text-cyan-300 border border-cyan-500/40">
            ● Hands-on
          </span>
        );
      case 'Learning':
        return (
          <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-emerald-950/80 text-emerald-300 border border-emerald-500/40">
            ▲ Learning
          </span>
        );
      case 'Exploring':
        return (
          <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-amber-950/80 text-amber-300 border border-amber-500/40">
            ◆ Exploring
          </span>
        );
    }
  };

  return (
    <section id="skills" className="py-20 bg-[#060910] border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 font-mono text-xs uppercase tracking-widest">
            <Layers className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            DevOps & Cloud Tech Stack
          </h2>
          <p className="text-sm sm:text-base text-slate-400 font-mono">
            Practical skills categorized by operational domain with realistic experience indicators.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-1.5 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                  selectedCategory === cat
                    ? 'bg-cyan-500 text-slate-950 font-bold shadow-[0_0_12px_rgba(0,240,255,0.3)]'
                    : 'bg-slate-900/80 text-slate-400 border border-slate-800 hover:border-slate-700 hover:text-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search skill or topic..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-1.5 bg-slate-900/90 border border-slate-800 rounded-lg text-xs font-mono text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-cyan-500/50"
            />
          </div>
        </div>

        {/* Skill Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredSkills.map((skill) => {
            const IconComponent = ICON_MAP[skill.iconName] || Layers;
            return (
              <div
                key={skill.name}
                className="group p-5 rounded-xl bg-slate-900/70 border border-slate-800/90 hover:border-cyan-500/40 hover:bg-slate-900/90 transition-all duration-300 shadow-lg flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 text-cyan-400 group-hover:border-cyan-500/50 group-hover:shadow-[0_0_15px_rgba(0,240,255,0.2)] transition-all">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-mono text-base font-bold text-slate-100 group-hover:text-cyan-300">
                          {skill.name}
                        </h3>
                        <div className="text-[11px] font-mono text-slate-400">{skill.category}</div>
                      </div>
                    </div>
                    {getStatusBadge(skill.statusLabel)}
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed pt-1">
                    {skill.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>Domain Tag</span>
                  <span className="text-cyan-400/90">{skill.category.toLowerCase()}</span>
                </div>
              </div>
            );
          })}
        </div>

        {filteredSkills.length === 0 && (
          <div className="text-center py-12 text-slate-500 font-mono text-sm">
            No technologies found matching query "{searchQuery}".
          </div>
        )}
      </div>
    </section>
  );
};
