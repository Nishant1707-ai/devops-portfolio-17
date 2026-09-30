export interface SkillItem {
  name: string;
  category: string;
  statusLabel: 'Hands-on' | 'Learning' | 'Exploring';
  iconName: string;
  description: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  hasArchitectureDiagram?: boolean;
  hasTerminalPreview?: boolean;
  isPlaceholder?: boolean;
  features?: string[];
  architectureNodes?: {
    id: string;
    label: string;
    category: string;
    description: string;
  }[];
}

export interface TimelineStep {
  step: number;
  title: string;
  category: string;
  description: string;
  status: 'Completed' | 'In Progress' | 'Upcoming';
  keySkills: string[];
}

export interface ArchitectureNodeInfo {
  id: string;
  title: string;
  role: string;
  type: 'networking' | 'compute' | 'database' | 'storage' | 'serverless' | 'monitoring';
  description: string;
  techDetails: string;
}

export const PERSONAL_INFO = {
  name: "Nishant",
  title: "DevOps & Cloud Enthusiast",
  avatarUrl: "/profile.jpg",
  targetRole: "Aspiring DevOps Engineer / Cloud Engineer",
  tagline: "Building reliable infrastructure, automating workflows, and turning cloud concepts into real-world projects.",
  location: "Nagpur, Maharashtra, India",
  education: [
    {
      degree: "B.Tech in Computer Science & Engineering",
      institution: "RTMNU Nagpur University",
      status: "Currently Pursuing"
    },
    {
      degree: "Diploma in Computer Engineering",
      institution: "MSBTE (Maharashtra State Board of Technical Education)",
      status: "Completed"
    }
  ],
  bio: "I’m a Computer Science & Engineering student focused on DevOps and Cloud technologies. I enjoy working with Linux, AWS, Git, infrastructure, automation, containers, and deployment workflows. My approach is hands-on: I learn concepts by building practical systems and documenting what I build.",
  currentFocus: [
    "Linux System Administration",
    "AWS Core Infrastructure",
    "Git & GitHub Workflows",
    "Docker Containerization",
    "Kubernetes Orchestration",
    "Terraform (IaC)",
    "CI/CD Pipeline Automation",
    "Bash Shell Scripting"
  ],
  socials: {
    github: "https://github.com/Nishant1707-ai",
    githubUsername: "Nishant1707-ai",
    linkedin: "http://www.linkedin.com/in/nishant-gomkale",
    email: "nishantgomkale85@gmail.com"
  }
};

export const SKILLS_DATA: SkillItem[] = [
  // Cloud
  { name: "AWS", category: "Cloud", statusLabel: "Hands-on", iconName: "Cloud", description: "VPC, EC2, S3, RDS, Lambda, DynamoDB, ALB, Auto Scaling, Route 53, IAM" },
  // OS
  { name: "Linux", category: "Operating Systems", statusLabel: "Hands-on", iconName: "Terminal", description: "Kernel fundamentals, shell scripting, permission management, service control, process monitoring" },
  // Version Control
  { name: "Git", category: "Version Control", statusLabel: "Hands-on", iconName: "GitBranch", description: "Branching strategies, commit hygiene, rebase, merge conflict resolution" },
  { name: "GitHub", category: "Version Control", statusLabel: "Hands-on", iconName: "Github", description: "Repository administration, pull request reviews, organization security, webhooks" },
  // Containers
  { name: "Docker", category: "Containers", statusLabel: "Hands-on", iconName: "Box", description: "Multi-stage Dockerfile creation, container isolation, volume mounts, image optimization" },
  { name: "Kubernetes", category: "Containers", statusLabel: "Hands-on", iconName: "Layers", description: "Pods, Deployments, Services, ConfigMaps, Secrets, Ingress controllers" },
  // IaC
  { name: "Terraform", category: "Infrastructure as Code", statusLabel: "Hands-on", iconName: "FileCode", description: "HCL configuration syntax, state management, provider declarations, modular blueprints" },
  // CI/CD
  { name: "GitHub Actions", category: "CI/CD", statusLabel: "Hands-on", iconName: "PlayCircle", description: "Workflow YAML automation, automated testing triggers, container build and push" },
  { name: "Jenkins", category: "CI/CD", statusLabel: "Hands-on", iconName: "Cpu", description: "Freestyle & Declarative Pipelines, build nodes, webhook triggers" },
  // Automation
  { name: "Bash Scripting", category: "Automation", statusLabel: "Hands-on", iconName: "Code", description: "Automated server health monitors, log parsing, automated backup routines" },
  // Monitoring
  { name: "Prometheus", category: "Monitoring & Observability", statusLabel: "Exploring", iconName: "Activity", description: "Metric collection, node exporter setup, PromQL queries" },
  { name: "Grafana", category: "Monitoring & Observability", statusLabel: "Exploring", iconName: "BarChart3", description: "Infrastructure metrics dashboard creation and alert threshold configuration" },
  // Project Management
  { name: "Jira", category: "Collaboration", statusLabel: "Hands-on", iconName: "CheckSquare", description: "Agile task tracking, sprint planning, issue workflow management" }
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "aws-notes-app",
    title: "AWS Notes Application — Cloud Deployment",
    subtitle: "Scalable Full-Stack Architecture on AWS",
    description: "A full-stack notes application deployed on AWS using a custom cloud architecture involving networking, compute, database, storage, serverless components, load balancing and autoscaling.",
    technologies: ["AWS", "VPC", "EC2", "RDS", "S3", "DynamoDB", "Lambda", "SNS", "ALB", "Auto Scaling", "Route 53", "Node.js", "Express"],
    githubUrl: "https://github.com/Nishant1707-ai/aws-scalable-notes-application.git",
    hasArchitectureDiagram: true,
    features: [
      "Multi-AZ VPC architecture with separated public and private subnets",
      "Application Load Balancer (ALB) distributing traffic to EC2 Auto Scaling group",
      "Relational Database Service (RDS) in private subnets for secure persistent data",
      "Amazon S3 bucket configured for file attachments with upload events",
      "S3 Event notification triggering AWS Lambda for background processing & DynamoDB/SNS logging"
    ],
    architectureNodes: [
      { id: "route53", label: "Route 53", category: "DNS & Routing", description: "Global DNS service routing user requests to the Application Load Balancer." },
      { id: "alb", label: "Application Load Balancer", category: "Networking", description: "Distributes incoming HTTP/HTTPS traffic across healthy EC2 targets." },
      { id: "asg", label: "Auto Scaling Group", category: "Compute", description: "Dynamically scales EC2 instances up or down based on CPU & traffic metrics." },
      { id: "ec2", label: "EC2 Instances (Node.js)", category: "Compute", description: "Runs the Express backend application within private application subnets." },
      { id: "rds", label: "Amazon RDS (PostgreSQL/MySQL)", category: "Database", description: "Managed relational database storing note records in isolated private subnets." },
      { id: "s3", label: "Amazon S3", category: "Storage", description: "Object storage for user note image attachments and static assets." },
      { id: "lambda", label: "AWS Lambda", category: "Serverless", description: "Serverless event handler triggered by S3 uploads for image processing." },
      { id: "dynamodb", label: "Amazon DynamoDB", category: "Database", description: "NoSQL database capturing metadata logs and audit trails." },
      { id: "sns", label: "Amazon SNS", category: "Messaging", description: "Notification service dispatching upload alerts to administrator topics." },
      { id: "vpc", label: "VPC Networking", category: "Network Isolation", description: "Isolated cloud network with public/private subnets, NAT Gateway, & Security Groups." }
    ]
  },
  {
    id: "linux-health-analyzer",
    title: "Linux Server Health & Log Analyzer",
    subtitle: "Automated Shell Scripting & Security Diagnostics",
    description: "A Bash-based Linux automation tool that performs server health and security checks and generates a structured report.",
    technologies: ["Linux", "Bash", "Shell Scripting", "Cron", "Systemd"],
    githubUrl: "https://github.com/Nishant1707-ai/linux-server-health-analyzer.git",
    hasTerminalPreview: true,
    features: [
      "Real-time CPU and Memory utilization evaluation with threshold alerts",
      "Disk partition storage space monitoring",
      "Active system service (systemd) status inspection",
      "Recent system error log extraction (/var/log/syslog & journalctl)",
      "Security audit for failed SSH login attempts (/var/log/auth.log)",
      "Automated summary report generation with colorized terminal output"
    ]
  },
  {
    id: "more-projects",
    title: "More Infrastructure Projects",
    subtitle: "Active Learning & Building Pipeline",
    description: "Currently working on upcoming DevOps and Cloud projects, focusing on Kubernetes cluster management, GitOps workflows with ArgoCD, and Infrastructure as Code using Terraform modules.",
    technologies: ["Kubernetes", "Terraform", "GitHub Actions", "Docker Compose", "Prometheus"],
    githubUrl: "https://github.com/Nishant1707-ai",
    isPlaceholder: true,
    features: [
      "Terraform AWS VPC & EKS Module blueprints in progress",
      "Dockerized microservice stack deployments",
      "Prometheus & Grafana local monitoring stack configuration"
    ]
  }
];

export const PIPELINE_STAGES = [
  { step: 1, name: "Developer", icon: "UserCheck", detail: "Code written locally with Git commits" },
  { step: 2, name: "GitHub Repository", icon: "GitBranch", detail: "Version control trigger on main branch push" },
  { step: 3, name: "Build Stage", icon: "Hammer", detail: "Artifact compilation & dependency verification" },
  { step: 4, name: "Automated Testing", icon: "ShieldCheck", detail: "Unit and integration tests executed" },
  { step: 5, name: "Docker Containerization", icon: "Box", detail: "Container image built & tagged for registry" },
  { step: 6, name: "Deploy Stage", icon: "CloudUpload", detail: "Zero-downtime deployment to target environment" },
  { step: 7, name: "Cloud Infrastructure", icon: "Server", detail: "EC2 / K8s runtime environment execution" },
  { step: 8, name: "Observability", icon: "Activity", detail: "Health checks & telemetry collection" }
];

export const JOURNEY_STEPS: TimelineStep[] = [
  {
    step: 1,
    title: "Linux System Administration",
    category: "Foundation",
    description: "Mastered Linux CLI fundamentals, file systems, permissions, process management, and Bash automation scripting.",
    status: "Completed",
    keySkills: ["Linux CLI", "Bash Scripting", "Cron Jobs", "File Permissions", "Systemd"]
  },
  {
    step: 2,
    title: "AWS Cloud Fundamentals & Core Services",
    category: "Cloud",
    description: "Explored cloud architecture, VPC networking, EC2 compute, RDS databases, S3 storage, IAM security policies, and serverless Lambda.",
    status: "Completed",
    keySkills: ["VPC", "EC2", "RDS", "S3", "IAM", "Lambda", "ALB"]
  },
  {
    step: 3,
    title: "Version Control & Git Workflows",
    category: "DevOps Core",
    description: "Practiced branching strategies, repository hygiene, code reviews, and remote repository integration on GitHub.",
    status: "Completed",
    keySkills: ["Git", "GitHub", "Branching Strategy", "Pull Requests"]
  },
  {
    step: 4,
    title: "Containerization with Docker",
    category: "Containers",
    description: "Learned container isolation, writing production Dockerfiles, managing multi-container stacks with Docker Compose, and image optimization.",
    status: "Completed",
    keySkills: ["Docker", "Docker Compose", "Multi-stage Builds", "Container Networking"]
  },
  {
    step: 5,
    title: "Container Orchestration with Kubernetes",
    category: "Orchestration",
    description: "Mastered Kubernetes concepts including Pods, Deployments, Services, ConfigMaps, Secrets, Ingress, and cluster architecture.",
    status: "Completed",
    keySkills: ["Kubernetes", "Pods", "Deployments", "Services", "kubectl", "Ingress"]
  },
  {
    step: 6,
    title: "Infrastructure as Code (IaC)",
    category: "Automation",
    description: "Mastered Terraform state management, HCL syntax, provider declarations, and reproducible cloud infrastructure provisioning.",
    status: "Completed",
    keySkills: ["Terraform", "HCL", "State Management", "Provider Modules"]
  },
  {
    step: 7,
    title: "CI/CD Automation Pipelines",
    category: "Automation",
    description: "Built automated continuous integration and continuous deployment pipelines using GitHub Actions and Jenkins workflows.",
    status: "Completed",
    keySkills: ["GitHub Actions", "Jenkins", "Pipeline Security", "Automated Testing"]
  },
  {
    step: 8,
    title: "Advanced DevOps & Cloud Engineering",
    category: "Target Horizon",
    description: "Aiming to deepen expertise in observability (Prometheus/Grafana), GitOps (ArgoCD), and enterprise SRE reliability practices.",
    status: "Upcoming",
    keySkills: ["Prometheus", "Grafana", "GitOps", "SRE Concepts", "Cloud Security"]
  }
];

export const TERMINAL_COMMANDS: Record<string, string> = {
  help: `Available Predefined Commands:
  - whoami    : Print current engineer profile summary
  - focus     : List primary technology focus areas
  - skills    : Display key DevOps & Cloud technical stack
  - projects  : List featured infrastructure projects
  - github    : Display GitHub profile link
  - contact   : Display direct contact information
  - clear     : Clear the terminal screen`,
  whoami: `Nishant — DevOps & Cloud Enthusiast / Aspiring DevOps Engineer
  Education: Computer Science & Engineering (B.Tech student, Computer Diploma graduate)
  Location: Nagpur, Maharashtra, India
  Philosophy: "I build, automate, deploy, and understand infrastructure."`,
  focus: `Primary Focus Areas:
  [✓] AWS Cloud Architecture (VPC, EC2, RDS, S3, ALB, Auto Scaling, Lambda)
  [✓] Linux Administration & Security Automation
  [✓] Docker Containerization & Kubernetes Orchestration
  [✓] Infrastructure as Code (Terraform)
  [✓] CI/CD Pipeline Automation (GitHub Actions, Jenkins)
  [✓] Bash Scripting & System Tooling`,
  skills: `Technical Stack:
  - Cloud Platform : AWS
  - OS             : Linux (Ubuntu/RHEL)
  - Containers     : Docker, Kubernetes
  - IaC            : Terraform
  - CI/CD          : GitHub Actions, Jenkins
  - Version Control: Git, GitHub
  - Automation     : Bash Scripting
  - Observability  : Prometheus, Grafana (Exploring)`,
  projects: `Featured Projects:
  1. AWS Notes Application — Scalable AWS Cloud Deployment
     Repo: https://github.com/Nishant1707-ai/aws-scalable-notes-application.git
  2. Linux Server Health & Log Analyzer — Bash Automation Tool
     Repo: https://github.com/Nishant1707-ai/linux-server-health-analyzer.git`,
  github: `GitHub Profile: https://github.com/Nishant1707-ai`,
  contact: `Direct Contact:
  - Email    : nishantgomkale85@gmail.com
  - LinkedIn : http://www.linkedin.com/in/nishant-gomkale
  - GitHub   : https://github.com/Nishant1707-ai`
};
