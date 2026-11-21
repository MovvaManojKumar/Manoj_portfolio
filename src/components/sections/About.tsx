import React from 'react';
import styles from './About.module.css';
import { profileData } from '../../data/profile';
import { Reveal } from '../motion/Reveal';

export const About: React.FC = () => {
  return (
    <section id="about" className={styles.aboutSection} aria-label="About Manoj Kumar Movva">
      <div className={`container ${styles.aboutGrid}`}>
        {/* Left Column: Narrative Introduction */}
        <div>
          <Reveal>
            <div className={styles.sectionLabel}>// 01. Telemetry & Overview</div>
            <h2 className={styles.sectionTitle}>
              Backend Reliability Engineered for Scale
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <div className={styles.bioProse}>
              <p>
                I am a <span className={styles.highlightText}>Software Developer</span> based in{' '}
                <span className={styles.highlightText}>{profileData.location}</span> with{' '}
                <span className={styles.highlightText}>{profileData.experienceYears} of professional experience</span>{' '}
                specializing in high-throughput backend services, RESTful API architecture, and enterprise SQL Server optimization.
              </p>
              <p>
                At <span className={styles.highlightText}>Linkfields Innovations</span>, I contribute as a backend engineer to{' '}
                <span className={styles.highlightText}>RMA’s Insurance Policy Administration System</span>—a critical enterprise
                platform operating continuously across South Africa since 2016. My day-to-day work centers on writing reliable
                business logic in <span className={styles.highlightText}>C# and ASP.NET Core</span>, tuning complex T-SQL stored
                procedures, deploying microservices to <span className={styles.highlightText}>Service Fabric</span> clusters, and
                investigating live production incidents to maintain 99.98% platform health.
              </p>
              <p>
                Beyond enterprise .NET, I have developed full-stack systems in Spring Boot and Java, explored machine learning
                and blockchain architectures in academic projects, and am actively expanding into{' '}
                <span className={styles.highlightText}>AI/ML Fundamentals, Microsoft Semantic Kernel, and RAG architectures</span>.
              </p>
            </div>
          </Reveal>
        </div>

        {/* Right Column: Vitals Cards */}
        <div>
          <Reveal delay={0.2}>
            <div className={styles.vitalsPanel}>
              {profileData.telemetryMetrics.map((vital, index) => (
                <div key={index} className={styles.vitalCard}>
                  <div className={styles.vitalLabel}>{vital.label}</div>
                  <div className={styles.vitalValue}>{vital.value}</div>
                  <div className={styles.vitalSub}>{vital.sublabel}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
