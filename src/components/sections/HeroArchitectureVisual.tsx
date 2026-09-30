import React, { useState } from 'react';
import { 
  Globe, 
  Network, 
  Server, 
  Database, 
  HardDrive, 
  Zap, 
  FileSpreadsheet, 
  Activity, 
  GitBranch, 
  PlayCircle,
  Info,
  CheckCircle2
} from 'lucide-react';

interface NodeData {
  id: string;
  title: string;
  type: string;
  icon: React.ElementType;
  color: string;
  bgGlow: string;
  description: string;
  roleDetails: string;
}

const NODES: NodeData[] = [
  {
    id: 'client',
    title: 'CLIENT / USER',
    type: 'Frontend Entrypoint',
    icon: Globe,
    color: 'text-sky-400 border-sky-500/40',
    bgGlow: 'rgba(56, 189, 248, 0.25)',
    description: 'Web browser or API client sending HTTP/HTTPS requests.',
    roleDetails: 'Initiates traffic into the public cloud infrastructure boundary.'
  },
  {
    id: 'alb',
    title: 'AWS ALB',
    type: 'Application Load Balancer',
    icon: Network,
    color: 'text-cyan-400 border-cyan-500/50',
    bgGlow: 'rgba(6, 182, 212, 0.3)',
    description: 'Managed load balancer distributing traffic across target health checks.',
    roleDetails: 'Handles SSL termination, path routing, and high availability.'
  },
  {
    id: 'ec2',
    title: 'EC2 / CONTAINERS',
    type: 'Compute Nodes',
    icon: Server,
    color: 'text-indigo-400 border-indigo-500/50',
    bgGlow: 'rgba(99, 102, 241, 0.3)',
    description: 'Auto-scaled Linux EC2 instances running application workloads.',
    roleDetails: 'Executes core application logic inside secure private subnets.'
  },
  {
    id: 'database',
    title: 'AMAZON RDS',
    type: 'Relational Database',
    icon: Database,
    color: 'text-emerald-400 border-emerald-500/50',
    bgGlow: 'rgba(16, 185, 129, 0.3)',
    description: 'Managed PostgreSQL/MySQL instance in private database subnet.',
    roleDetails: 'Stores relational app state with automated backups and multi-AZ support.'
  },
  {
    id: 's3',
    title: 'AMAZON S3',
    type: 'Object Storage',
    icon: HardDrive,
    color: 'text-amber-400 border-amber-500/50',
    bgGlow: 'rgba(245, 158, 11, 0.25)',
    description: 'Highly durable object storage for uploads and assets.',
    roleDetails: 'Generates bucket event triggers on file upload.'
  },
  {
    id: 'lambda',
    title: 'AWS LAMBDA',
    type: 'Serverless Compute',
    icon: Zap,
    color: 'text-orange-400 border-orange-500/50',
    bgGlow: 'rgba(249, 115, 22, 0.25)',
    description: 'Event-driven serverless functions for asynchronous processing.',
    roleDetails: 'Processes image events and updates DynamoDB audit logs.'
  },
  {
    id: 'dynamodb',
    title: 'DYNAMODB',
    type: 'NoSQL Audit Logs',
    icon: FileSpreadsheet,
    color: 'text-teal-400 border-teal-500/50',
    bgGlow: 'rgba(20, 184, 166, 0.25)',
    description: 'Single-digit millisecond latency NoSQL metadata table.',
    roleDetails: 'Stores event logs, session metadata, and system tracking info.'
  },
  {
    id: 'cloudwatch',
    title: 'CLOUDWATCH',
    type: 'Observability & Metrics',
    icon: Activity,
    color: 'text-purple-400 border-purple-500/50',
    bgGlow: 'rgba(168, 85, 247, 0.25)',
    description: 'Centralized logging, alarms, and performance telemetry.',
    roleDetails: 'Monitors CPU, memory, HTTP status codes, and triggers alarms.'
  },
  {
    id: 'github',
    title: 'GITHUB REPO',
    type: 'Version Control',
    icon: GitBranch,
    color: 'text-slate-300 border-slate-600',
    bgGlow: 'rgba(203, 213, 225, 0.2)',
    description: 'Git code repository hosting infrastructure & app code.',
    roleDetails: 'Source of truth for Infrastructure as Code (Terraform) and App logic.'
  },
  {
    id: 'cicd',
    title: 'CI/CD PIPELINE',
    type: 'Automated Deployment',
    icon: PlayCircle,
    color: 'text-cyan-400 border-cyan-500/50',
    bgGlow: 'rgba(6, 182, 212, 0.3)',
    description: 'GitHub Actions / Jenkins pipeline automating test and deploy.',
    roleDetails: 'Validates code, builds Docker images, and updates EC2/K8s clusters.'
  }
];

export const HeroArchitectureVisual: React.FC = () => {
  const [activeNode, setActiveNode] = useState<NodeData>(NODES[1]); // Default ALB selected

  return (
    <section className="py-12 bg-[#06080e] border-y border-slate-800/80 relative overflow-hidden">
      {/* Background subtle grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-wider mb-1">
              <Activity className="w-4 h-4" />
              <span>Interactive Infrastructure Topology</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Cloud & DevOps Architecture Map
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 max-w-xl">
              Hover over or click any node to explore its architectural responsibility within a multi-tier cloud environment.
            </p>
          </div>

          {/* Active Node Info Badge */}
          <div className="px-4 py-2.5 rounded-lg bg-slate-900/90 border border-slate-700/80 text-xs font-mono flex items-center gap-3">
            <div className={`p-1.5 rounded bg-slate-800 ${activeNode.color}`}>
              <activeNode.icon className="w-4 h-4" />
            </div>
            <div>
              <div className="text-slate-300 font-semibold">{activeNode.title}</div>
              <div className="text-cyan-400 text-[11px]">{activeNode.type}</div>
            </div>
          </div>
        </div>

        {/* Visual Map Grid Canvas */}
        <div className="relative rounded-2xl bg-[#080d17] border border-slate-800 p-6 md:p-8 shadow-2xl overflow-hidden">
          {/* Main Flow: Top row to bottom row connecting layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 relative z-10">
            {/* Primary Core Pipeline & Compute */}
            {NODES.slice(0, 4).map((node) => {
              const isSelected = activeNode.id === node.id;
              const Icon = node.icon;
              return (
                <div
                  key={node.id}
                  onClick={() => setActiveNode(node)}
                  onMouseEnter={() => setActiveNode(node)}
                  className={`group relative p-4 rounded-xl border transition-all duration-300 cursor-pointer ${
                    isSelected
                      ? `bg-slate-900/95 ${node.color} shadow-[0_0_20px_rgba(0,240,255,0.25)] scale-[1.02]`
                      : 'bg-slate-900/60 border-slate-800 hover:border-slate-700 text-slate-400'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className={`p-2 rounded-lg bg-slate-950 border border-slate-800 ${isSelected ? node.color : 'text-slate-400'}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-950 text-slate-400 border border-slate-800">
                      {node.type}
                    </span>
                  </div>
                  <h4 className="font-mono text-sm font-bold text-slate-200 group-hover:text-cyan-300">
                    {node.title}
                  </h4>
                  <p className="text-xs text-slate-400 mt-1 line-clamp-2">
                    {node.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Connection Divider Arrow Line */}
          <div className="my-6 flex items-center justify-center gap-2">
            <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent"></div>
            <div className="px-3 py-1 rounded-full bg-slate-900 border border-cyan-500/30 text-[11px] font-mono text-cyan-400 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping"></span>
              <span>Data & Event Flow Integrations</span>
            </div>
            <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent"></div>
          </div>

          {/* Secondary Auxiliary Cloud Services */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4 relative z-10">
            {NODES.slice(4).map((node) => {
              const isSelected = activeNode.id === node.id;
              const Icon = node.icon;
              return (
                <div
                  key={node.id}
                  onClick={() => setActiveNode(node)}
                  onMouseEnter={() => setActiveNode(node)}
                  className={`group p-3 rounded-lg border text-left transition-all duration-300 cursor-pointer ${
                    isSelected
                      ? `bg-slate-900/95 ${node.color} shadow-[0_0_15px_rgba(0,240,255,0.2)] scale-[1.02]`
                      : 'bg-slate-900/50 border-slate-800 hover:border-slate-700 text-slate-400'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-1.5">
                    <Icon className={`w-4 h-4 ${isSelected ? node.color : 'text-slate-400'}`} />
                    <span className="font-mono text-xs font-bold text-slate-200 group-hover:text-cyan-300">
                      {node.title}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-400 line-clamp-2">
                    {node.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Detailed Info Drawer Banner */}
          <div className="mt-6 p-4 rounded-xl bg-slate-900/90 border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-lg bg-cyan-950/60 border border-cyan-500/40 text-cyan-400 mt-0.5">
                <Info className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-mono font-bold text-sm text-slate-100">{activeNode.title}</span>
                  <span className="text-xs font-mono text-cyan-400">[{activeNode.type}]</span>
                </div>
                <p className="text-xs text-slate-300 mt-0.5">{activeNode.roleDetails}</p>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 bg-emerald-950/40 border border-emerald-500/30 px-3 py-1.5 rounded-lg shrink-0">
              <CheckCircle2 className="w-4 h-4" />
              <span>Verified AWS Pattern</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
