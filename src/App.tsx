import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/sections/HeroSection';
import { HeroArchitectureVisual } from './components/sections/HeroArchitectureVisual';
import { AboutSection } from './components/sections/AboutSection';
import { SkillsSection } from './components/sections/SkillsSection';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { PipelineSection } from './components/sections/PipelineSection';
import { TerminalSection } from './components/sections/TerminalSection';
import { DevOpsDashboard } from './components/sections/DevOpsDashboard';
import { JourneySection } from './components/sections/JourneySection';
import { GitHubSection } from './components/sections/GitHubSection';
import { ContactSection } from './components/sections/ContactSection';
import { Footer } from './components/Footer';

export function App() {
  return (
    <div className="min-h-screen bg-[#07090e] text-slate-100 font-sans selection:bg-cyan-500/30 selection:text-cyan-200 relative">
      {/* Subtle Custom Cursor for Desktop */}
      <CustomCursor />

      {/* Background Radial Ambient Glows */}
      <div className="fixed inset-0 bg-radial-gradient pointer-events-none z-0"></div>
      <div className="fixed inset-0 bg-grid-pattern opacity-20 pointer-events-none z-0"></div>

      {/* Main Content Layout */}
      <div className="relative z-10">
        <Navbar />

        <main>
          {/* Hero & Interactive Architecture Visual */}
          <HeroSection />
          <HeroArchitectureVisual />

          {/* Core Sections */}
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <PipelineSection />
          <TerminalSection />
          <DevOpsDashboard />
          <JourneySection />
          <GitHubSection />
          <ContactSection />
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;
