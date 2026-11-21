import React from 'react';
import styles from './Learning.module.css';
import { learningData } from '../../data/learning';
import { Reveal } from '../motion/Reveal';

export const Learning: React.FC = () => {
  return (
    <section id="learning" className={styles.learningSection} aria-label="Continuous Learning & AI Exploration">
      <div className="container">
        <div className={styles.sectionHeader}>
          <Reveal>
            <div className={styles.sectionLabel}>// 05. Research & Modernization</div>
            <h2 className={styles.sectionTitle}>Currently Learning & AI Explorations</h2>
          </Reveal>
        </div>

        <div className={styles.learningGrid}>
          {learningData.map((item, idx) => (
            <Reveal key={item.title} delay={idx * 0.12}>
              <div className={styles.learningCard}>
                <div className={styles.cardHeader}>
                  <span className={styles.focusArea}>{item.focusArea}</span>
                  <span className={styles.statusPill}>● {item.status.toUpperCase()}</span>
                </div>

                <h3 className={styles.cardTitle}>{item.title}</h3>

                <p className={styles.cardDesc}>{item.description}</p>

                <div className={styles.topicsList}>
                  {item.topicsCovered.map((topic) => (
                    <span key={topic} className={styles.topicTag}>
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
