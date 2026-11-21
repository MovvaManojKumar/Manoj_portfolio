import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Experience } from './components/sections/Experience';
import { Skills } from './components/sections/Skills';
import { Projects } from './components/sections/Projects';
import { Learning } from './components/sections/Learning';
import { Education } from './components/sections/Education';
import { Contact } from './components/sections/Contact';
import { BackgroundTelemetry } from './components/effects/BackgroundTelemetry';
import { LiveTelemetryTicker } from './components/effects/LiveTelemetryTicker';

export const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const sectionIds = ['hero', 'about', 'experience', 'skills', 'projects', 'education', 'contact'];
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 180;
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      {/* Dynamic Animated Telemetry Canvas Background */}
      <BackgroundTelemetry />

      {/* Scroll Progress Bar */}
      <motion.div
        style={{
          scaleX,
          transformOrigin: '0%',
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '3px',
          backgroundColor: 'var(--color-accent)',
          zIndex: 1000,
          boxShadow: 'var(--shadow-glow-amber)'
        }}
      />

      {/* Live Incident Telemetry Realtime Ticker */}
      <LiveTelemetryTicker />

      {/* Sticky Telemetry Navbar */}
      <Navbar activeSection={activeSection} />

      {/* Main Flow Content */}
      <main>
        <Hero onExploreWorkClick={() => setActiveSection('projects')} />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Learning />
        <Education />
        <Contact />
      </main>

      {/* Incident Room Footer */}
      <Footer />
    </div>
  );
};

export default App;
