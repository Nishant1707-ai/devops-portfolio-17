import React, { useState } from 'react';
import { X, CheckCircle2 } from 'lucide-react';
import { type ArchitectureNodeInfo } from '../../data/portfolioData';

const ARCH_NODES_FULL: ArchitectureNodeInfo[] = [
  {
    id: 'route53',
    title: 'Amazon Route 53',
    role: 'Global DNS & Traffic Management',
    type: 'networking',
    description: 'Managed domain name system routing internet users to the cloud infrastructure.',
    techDetails: 'DNS Alias record pointing to Application Load Balancer DNS name with latency routing.'
  },
  {
    id: 'alb',
    title: 'Application Load Balancer (ALB)',
    role: 'Layer-7 Load Balancing & TLS Termination',
    type: 'networking',
    description: 'Receives external HTTP/HTTPS traffic in public subnets and distributes load.',
    techDetails: 'Configured across multiple Availability Zones with target group health checks on port 3000.'
  },
  {
    id: 'ec2',
    title: 'EC2 Auto Scaling Group',
    role: 'Scalable Application Compute Instances',
    type: 'compute',
    description: 'Stateless Node.js/Express web instances executing inside private subnets.',
    techDetails: 'Auto Scaling policy scales instance count dynamically based on average CPU target metrics.'
  },
  {
    id: 'rds',
    title: 'Amazon RDS (Relational DB)',
    role: 'Multi-AZ Database Layer',
    type: 'database',
    description: 'Managed PostgreSQL/MySQL database located in private database subnets.',
    techDetails: 'Isolated behind DB Security Group allowing incoming traffic only from EC2 app instances.'
  },
  {
    id: 's3',
    title: 'Amazon S3 Bucket',
    role: 'Object Storage for Media Attachments',
    type: 'storage',
    description: 'Stores user file uploads, note attachments, and static assets.',
    techDetails: 'Configured with bucket policy & S3 Event Notifications targeting AWS Lambda.'
  },
  {
    id: 'lambda',
    title: 'AWS Lambda (Event Handler)',
    role: 'Asynchronous Serverless Compute',
    type: 'serverless',
    description: 'Fires automatically upon S3 upload events to process image metadata.',
    techDetails: 'Node.js runtime executing image thumbnailing & dispatching notification payloads.'
  },
  {
    id: 'dynamodb',
    title: 'Amazon DynamoDB',
    role: 'NoSQL Audit & Session Logs',
    type: 'database',
    description: 'Stores upload audit trails, user activity logs, and serverless events.',
    techDetails: 'Provisioned on-demand capacity mode with millisecond read/write latencies.'
  },
  {
    id: 'sns',
    title: 'Amazon SNS (Simple Notification)',
    role: 'Push Notifications & Alerts',
    type: 'serverless',
    description: 'Publishes file upload events to administrator email and SMS endpoints.',
    techDetails: 'Standard SNS Topic receiving JSON payloads from Lambda processing function.'
  },
  {
    id: 'vpc',
    title: 'AWS VPC Architecture',
    role: 'Isolated Network Perimeter',
    type: 'networking',
    description: 'Custom Virtual Private Cloud with Public & Private Subnets and NAT Gateways.',
    techDetails: 'Strict Security Group rules and Network ACLs enforcing least-privilege ingress.'
  }
];

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const ArchitectureModal: React.FC<Props> = ({ isOpen, onClose }) => {
  const [selectedNode, setSelectedNode] = useState<ArchitectureNodeInfo>(ARCH_NODES_FULL[1]); // ALB default

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-5xl bg-[#090e18] border border-slate-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="px-6 py-4 bg-[#0c1220] border-b border-slate-800 flex items-center justify-between">
          <div>
            <div className="text-cyan-400 font-mono text-xs font-semibold uppercase tracking-wider">
              System Architecture Diagram
            </div>
            <h3 className="text-lg font-bold text-white">
              AWS Scalable Notes App Architecture
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-cyan-500/40 transition-all"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* Interactive Topology Graph Visual */}
          <div className="p-6 rounded-xl bg-slate-950 border border-slate-800 relative">
            <div className="text-center text-xs font-mono text-slate-400 mb-4">
              [Click any cloud node below to view detailed technical specifications]
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
              {ARCH_NODES_FULL.map((node) => {
                const isSelected = selectedNode.id === node.id;
                return (
                  <button
                    key={node.id}
                    onClick={() => setSelectedNode(node)}
                    className={`p-3 rounded-lg border text-left font-mono transition-all ${
                      isSelected
                        ? 'bg-cyan-950/70 border-cyan-400 text-cyan-200 shadow-[0_0_15px_rgba(0,240,255,0.3)] scale-105'
                        : 'bg-slate-900/80 border-slate-800 text-slate-300 hover:border-slate-700'
                    }`}
                  >
                    <div className="text-[10px] text-cyan-400 uppercase tracking-wider font-semibold">
                      {node.type}
                    </div>
                    <div className="text-xs font-bold mt-0.5 truncate">{node.title}</div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Node Technical Inspector Drawer */}
          <div className="p-6 rounded-xl bg-slate-900/90 border border-cyan-500/30 space-y-3 font-mono">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse"></span>
                <h4 className="text-base font-bold text-white">{selectedNode.title}</h4>
                <span className="px-2.5 py-0.5 rounded text-xs bg-slate-800 text-cyan-300 border border-slate-700">
                  {selectedNode.type}
                </span>
              </div>
              <span className="text-xs text-emerald-400 flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4" /> Production Blueprint
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="space-y-1">
                <div className="text-slate-400 text-[11px] uppercase">Architectural Role</div>
                <div className="text-slate-200 font-semibold">{selectedNode.role}</div>
                <div className="text-slate-300 pt-1">{selectedNode.description}</div>
              </div>

              <div className="space-y-1 bg-slate-950/80 p-3 rounded-lg border border-slate-800">
                <div className="text-cyan-400 text-[11px] uppercase">Implementation Details</div>
                <div className="text-slate-300 text-[11px] leading-relaxed">
                  {selectedNode.techDetails}
                </div>
              </div>
            </div>
          </div>

          {/* Subnet Topology Summary */}
          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1">
              <div className="text-cyan-400 font-bold">Public Subnet Zone</div>
              <div className="text-slate-400">Internet Gateway, ALB, NAT Gateway instances</div>
            </div>
            <div className="space-y-1">
              <div className="text-emerald-400 font-bold">Private Subnet Zone</div>
              <div className="text-slate-400">EC2 Auto Scaling Nodes, RDS Postgres, Lambda Security Group</div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-3 bg-[#0c1220] border-t border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-lg bg-cyan-500 text-slate-950 font-mono font-bold text-xs hover:bg-cyan-400 transition-all"
          >
            Close Diagram
          </button>
        </div>
      </div>
    </div>
  );
};
