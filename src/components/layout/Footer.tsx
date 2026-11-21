import React from 'react';
import styles from './Footer.module.css';

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer} aria-label="Portfolio Footer">
      <div className={`container ${styles.footerContainer}`}>
        <div className={styles.leftGroup}>
          <span className={styles.monogramSmall}>MK</span>
          <span>© {new Date().getFullYear()} Manoj Kumar Movva. Engineered in Hyderabad, IN.</span>
        </div>

        <div className={styles.rightGroup}>
          <div className={styles.telemetryPing}>
            <span className={styles.dot} />
            <span>INCIDENT ROOM TELEMETRY: 99.98% HEALTHY</span>
          </div>

          <a href="#hero" className={styles.footerLink}>
            Return to Top ↑
          </a>
        </div>
      </div>
    </footer>
  );
};
