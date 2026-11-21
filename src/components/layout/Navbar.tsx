import React, { useState } from 'react';
import { Sun, Moon, Zap, ZapOff, Menu, X, ArrowUpRight } from 'lucide-react';
import styles from './Navbar.module.css';
import { useTheme } from '../../hooks/useTheme';
import { useReducedMotion } from '../../hooks/useReducedMotion';

interface NavbarProps {
  activeSection?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection = 'hero' }) => {
  const { theme, toggleTheme } = useTheme();
  const { reducedMotion, toggleReducedMotion } = useReducedMotion();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Experience', href: '#experience', id: 'experience' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Education', href: '#education', id: 'education' },
    { label: 'Contact', href: '#contact', id: 'contact' }
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={`container ${styles.navContainer}`}>
        <a href="#hero" className={styles.brand} aria-label="Manoj Kumar Movva Portfolio Home">
          <div className={styles.monogram}>MK</div>
          <div className={styles.statusIndicator}>
            <span className={styles.pulseDot} />
            <span>SYS_ONLINE: 99.98%</span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav aria-label="Primary Navigation">
          <ul className={styles.navLinks}>
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  className={`${styles.navLink} ${
                    activeSection === item.id ? styles.navLinkActive : ''
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Action & Accessibility Controls */}
        <div className={styles.actionControls}>
          <button
            type="button"
            onClick={toggleTheme}
            className={styles.controlButton}
            aria-label={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Theme`}
            title={`Toggle Theme (${theme === 'dark' ? 'Light' : 'Dark'})`}
          >
            {theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
            <span className="font-mono">{theme === 'dark' ? 'LIGHT' : 'DARK'}</span>
          </button>

          <button
            type="button"
            onClick={toggleReducedMotion}
            className={styles.controlButton}
            aria-label={reducedMotion ? 'Enable Animations' : 'Reduce Motion'}
            title={reducedMotion ? 'Enable Animations' : 'Reduce Motion'}
          >
            {reducedMotion ? <ZapOff size={15} color="#FF5D5D" /> : <Zap size={15} color="#3DD68C" />}
            <span className="font-mono">{reducedMotion ? 'MOTION: OFF' : 'MOTION: ON'}</span>
          </button>

          <button
            type="button"
            className={styles.mobileMenuToggle}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`${styles.mobileDrawer} ${mobileMenuOpen ? styles.mobileDrawerOpen : ''}`}
        aria-hidden={!mobileMenuOpen}
      >
        <ul className={styles.mobileLinks}>
          {navItems.map((item) => (
            <li key={item.id}>
              <a href={item.href} className={styles.mobileLink} onClick={handleLinkClick}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          <a
            href="/resume/Manoj_Kumar_Movva.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.controlButton}
            style={{ padding: '0.8rem', justifyContent: 'center', backgroundColor: 'var(--color-accent)', color: '#0E1620', fontWeight: 600 }}
          >
            <span>View Resume (PDF)</span>
            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </header>
  );
};
