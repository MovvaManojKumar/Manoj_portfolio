import React from 'react';
import { GraduationCap, Award } from 'lucide-react';
import styles from './Education.module.css';
import { educationData, achievementsData } from '../../data/education';
import { Reveal } from '../motion/Reveal';

export const Education: React.FC = () => {
  return (
    <section id="education" className={styles.educationSection} aria-label="Education & Achievements">
      <div className="container">
        <div className={styles.sectionHeader}>
          <Reveal>
            <div className={styles.sectionLabel}>// 06. Credentials & Honors</div>
            <h2 className={styles.sectionTitle}>Education & Problem Solving Track Record</h2>
          </Reveal>
        </div>

        <div className={styles.gridSplit}>
          {/* Left Column: Academic Background */}
          <div>
            <div className={styles.columnTitle}>
              <GraduationCap size={18} />
              <span>Academic Foundation</span>
            </div>

            <div className={styles.academicList}>
              {educationData.map((edu, idx) => (
                <Reveal key={edu.degree} delay={idx * 0.1}>
                  <div className={styles.academicCard}>
                    <div className={styles.academicHeader}>
                      <h3 className={styles.degreeName}>{edu.degree}</h3>
                      <span className={styles.scoreBadge}>
                        {edu.scoreLabel}: {edu.score}
                      </span>
                    </div>

                    <div className={styles.institutionName}>
                      {edu.institution} · {edu.period}
                    </div>

                    <ul className={styles.highlightBullets}>
                      {edu.highlights.map((hl, hIdx) => (
                        <li key={hIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                          <span style={{ color: 'var(--color-health)' }}>✓</span>
                          <span>{hl}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Right Column: Achievements & Competitive Badges */}
          <div>
            <div className={styles.columnTitle}>
              <Award size={18} />
              <span>Verified Achievements & Competitive Coding</span>
            </div>

            <div className={styles.achievementList}>
              {achievementsData.map((ach, idx) => (
                <Reveal key={ach.title} delay={idx * 0.1}>
                  <div className={styles.achievementCard}>
                    <div className={styles.achievementHeader}>
                      <h4 className={styles.achievementTitle}>{ach.title}</h4>
                      <span className={styles.achievementOrg}>{ach.organization}</span>
                    </div>
                    <p className={styles.achievementDesc}>{ach.description}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
