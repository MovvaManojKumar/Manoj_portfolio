import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { Skills } from './components/sections/Skills';
import { Experience } from './components/sections/Experience';
import { Projects } from './components/sections/Projects';
import { About } from './components/sections/About';
import { Education } from './components/sections/Education';
import { Contact } from './components/sections/Contact';
import { BackgroundTelemetry } from './components/effects/BackgroundTelemetry';

export const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const sectionIds = ['hero', 'skills', 'experience', 'projects', 'about', 'education', 'contact'];
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
      {/* Subtle Incident Room Background Grid */}
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

      {/* Sticky Recruiter Navbar */}
      <Navbar activeSection={activeSection} />

      {/* Recruiter-First Bento Main Flow */}
      <main>
        <Hero onExploreWorkClick={() => setActiveSection('projects')} />
        <Skills />
        <Experience />
        <Projects />
        <About />
        <Education />
        <Contact />
      </main>

      {/* Incident Room Footer */}
      <Footer />
    </div>
  );
};

export default App;
