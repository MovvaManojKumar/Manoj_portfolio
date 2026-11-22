import React from 'react';
import styles from './About.module.css';
import { profileData } from '../../data/profile';
import { Reveal } from '../motion/Reveal';

export const About: React.FC = () => {
  return (
    <section id="about" className={styles.aboutSection} aria-label="About Manoj Kumar Movva">
      <div className="container">
        {/* Section Header */}
        <div className={styles.sectionHeader}>
          <Reveal>
            <div className={styles.sectionLabel}>// 05. Engineering Foundation</div>
            <h2 className={styles.sectionTitle}>About & Verified Proof Tiles</h2>
          </Reveal>
        </div>

        {/* 34-Word Engineering Summary */}
        <Reveal delay={0.1}>
          <div className={styles.narrativeCard}>
            <p className={styles.shortBioText}>
              "{profileData.shortBio}"
            </p>
          </div>
        </Reveal>

        {/* 4 Verified Proof Tiles Grid */}
        <div className={styles.proofGrid}>
          {profileData.proofTiles.map((tile, idx) => (
            <Reveal key={tile.label} delay={0.15 + idx * 0.08}>
              <div className={styles.proofTile}>
                <div className={styles.proofLabel}>{tile.label}</div>
                <div className={styles.proofValue}>{tile.value}</div>
                <div className={styles.proofSub}>{tile.sublabel}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
