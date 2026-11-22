import React from 'react';
import { GraduationCap, Award, Sparkles } from 'lucide-react';
import styles from './Education.module.css';
import { educationData, achievementsData } from '../../data/education';
import { learningData } from '../../data/learning';
import { Reveal } from '../motion/Reveal';

export const Education: React.FC = () => {
  const primaryEdu = educationData[0]; // B.Tech PVPSIT

  return (
    <section id="education" className={styles.educationSection} aria-label="Education & Continuous Learning">
      <div className="container">
        {/* Section Header */}
        <div className={styles.sectionHeader}>
          <Reveal>
            <div className={styles.sectionLabel}>// 06. Credentials & Continuous Learning</div>
            <h2 className={styles.sectionTitle}>Education & Active Technical Exploration</h2>
          </Reveal>
        </div>

        {/* 2-Column Bento Split */}
        <div className={styles.bentoSplit}>
          {/* Left Column: Academic Credentials & Problem Solving Badges */}
          <Reveal delay={0.1}>
            <div className={styles.credentialCard}>
              <div className={styles.cardHeader}>
                <div className={styles.headerTitle}>
                  <GraduationCap size={16} color="var(--color-accent)" />
                  <span>ACADEMIC FOUNDATION</span>
                </div>
                <span className={styles.cgpaBadge}>CGPA: {primaryEdu.score} / 10</span>
              </div>

              <div className={styles.degreeBlock}>
                <h3 className={styles.degreeTitle}>{primaryEdu.degree}</h3>
                <div className={styles.institutionName}>
                  {primaryEdu.institution} · {primaryEdu.period}
                </div>
              </div>

              <div className={styles.achievementsBlock}>
                <div className={styles.subBlockTitle}>
                  <Award size={14} color="var(--color-health)" />
                  <span>VERIFIED COMPETITIVE ACHIEVEMENTS</span>
                </div>

                <div className={styles.achievementsList}>
                  {achievementsData.slice(0, 3).map((ach) => (
                    <div key={ach.title} className={styles.achItem}>
                      <span className={styles.achCheck}>✓</span>
                      <div>
                        <span className={styles.achTitle}>{ach.title}</span>
                        <span className={styles.achOrg}> ({ach.organization})</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          {/* Right Column: Active Learning & Modern AI Explorations */}
          <Reveal delay={0.2}>
            <div className={styles.learningCard}>
              <div className={styles.cardHeader}>
                <div className={styles.headerTitle}>
                  <Sparkles size={16} color="var(--color-cyan)" />
                  <span>ACTIVE EXPLORATION & LEARNING</span>
                </div>
                <span className={styles.inProgressBadge}>● EXPANDING</span>
              </div>

              <div className={styles.topicsGrid}>
                {learningData.map((item) => (
                  <div key={item.title} className={styles.topicRow}>
                    <div className={styles.topicHeader}>
                      <span className={styles.topicBullet}>•</span>
                      <span className={styles.topicTitle}>{item.title}</span>
                    </div>
                    <div className={styles.topicChips}>
                      {item.topicsCovered.slice(0, 3).map((sub) => (
                        <span key={sub} className={styles.topicChip}>
                          {sub}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className={styles.learningFooter}>
                <p className={styles.learningQuote}>
                  "Applied exploration focused on integrating intelligent LLM endpoints and function-calling plugins into enterprise ASP.NET Core services."
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
