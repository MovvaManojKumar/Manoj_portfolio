import React from 'react';
import { Database, Check } from 'lucide-react';
import styles from './Skills.module.css';
import { skillDomains, additionalExposureSkills } from '../../data/skills';
import { Reveal } from '../motion/Reveal';

export const Skills: React.FC = () => {
  return (
    <section id="skills" className={styles.skillsSection} aria-label="Technical Skills">
      <div className="container">
        {/* Section Header */}
        <div className={styles.sectionHeader}>
          <Reveal>
            <div className={styles.sectionLabel}>// 02. Technical Competencies</div>
            <h2 className={styles.sectionTitle}>Skills Matrix & Engineering Stack</h2>
          </Reveal>
        </div>

        {/* SQL Query Bento Console */}
        <Reveal delay={0.1}>
          <div className={styles.queryTerminal}>
            <div className={styles.terminalBar}>
              <span className={styles.terminalBarLeft}>
                <Database size={14} color="var(--color-cyan)" />
                SSMS Query Execution — Master Schema
              </span>
              <span className={styles.terminalBarRight}>STATUS: 200 OK</span>
            </div>

            <div className={styles.sqlCodeBlock}>
              <span className={styles.sqlKeyword}>SELECT</span> skill_name, domain, proficiency<br />
              <span className={styles.sqlKeyword}>FROM</span> sys.developer_competencies<br />
              <span className={styles.sqlKeyword}>WHERE</span> status = <span className={styles.sqlLiteral}>'PRODUCTION_READY'</span>;
            </div>
          </div>
        </Reveal>

        {/* 3-Column Bento Domains */}
        <div className={styles.bentoGrid}>
          {skillDomains.map((domain, idx) => (
            <Reveal key={domain.id} delay={0.15 + idx * 0.1}>
              <div className={styles.domainCard}>
                <div className={styles.domainHeader}>
                  <div className={styles.domainTitle}>{domain.title}</div>
                  <span className={styles.domainBadge}>Verified</span>
                </div>

                <div className={styles.domainSql}>
                  <code>-- {domain.sqlWhere}</code>
                </div>

                <ul className={styles.skillList}>
                  {domain.skills.map((skill) => (
                    <li key={skill.name} className={styles.skillItem}>
                      <span className={styles.checkIcon}>
                        <Check size={13} />
                      </span>
                      <span className={skill.isCore ? styles.coreSkillText : styles.normalSkillText}>
                        {skill.name}
                      </span>
                      {skill.isCore && <span className={styles.coreTag}>CORE</span>}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Academic & Additional Exposure Strip */}
        <Reveal delay={0.35}>
          <div className={styles.additionalBox}>
            <div className={styles.additionalLabel}>
              ACADEMIC & ADDITIONAL EXPOSURE:
            </div>
            <div className={styles.additionalChips}>
              {additionalExposureSkills.map((tech) => (
                <span key={tech} className={styles.additionalChip}>
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
