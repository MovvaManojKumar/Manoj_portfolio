import React from 'react';
import { ArrowRight, Server, Database, Globe, Cpu } from 'lucide-react';
import styles from './Experience.module.css';
import { experiencesData } from '../../data/experience';
import { Reveal } from '../motion/Reveal';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className={styles.experienceSection} aria-label="Professional Experience">
      <div className="container">
        <div className={styles.sectionHeader}>
          <Reveal>
            <div className={styles.sectionLabel}>// 02. Production Workflows</div>
            <h2 className={styles.sectionTitle}>Professional Experience & Systems Architecture</h2>
          </Reveal>
        </div>

        {/* Generic Architecture Journey Visualization */}
        <Reveal delay={0.1}>
          <div className={styles.architectureBox}>
            <div className={styles.architectureTitle}>
              <span>ENTERPRISE REQUEST PIPELINE ARCHITECTURE</span>
              <span style={{ color: 'var(--color-health)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                ● CLUSTER ACTIVE
              </span>
            </div>

            <div className={styles.architectureDiagram}>
              <div className={styles.archNode}>
                <Globe size={18} color="var(--color-cyan)" style={{ margin: '0 auto 0.25rem' }} />
                <div className={styles.nodeType}>01. CLIENT TIER</div>
                <div className={styles.nodeName}>Web & Portal Clients</div>
                <div className={styles.nodeDesc}>Policyholder & Broker Traffic</div>
              </div>

              <div className={styles.flowConnector}>
                <span className={styles.pulseSignal} />
                <ArrowRight size={20} />
              </div>

              <div className={styles.archNode}>
                <Server size={18} color="var(--color-accent)" style={{ margin: '0 auto 0.25rem' }} />
                <div className={styles.nodeType}>02. API GATEWAY</div>
                <div className={styles.nodeName}>ASP.NET Core 8 Web API</div>
                <div className={styles.nodeDesc}>Token Auth, Routing, Rate Limit</div>
              </div>

              <div className={styles.flowConnector}>
                <span className={styles.pulseSignal} />
                <ArrowRight size={20} />
              </div>

              <div className={styles.archNode}>
                <Cpu size={18} color="var(--color-health)" style={{ margin: '0 auto 0.25rem' }} />
                <div className={styles.nodeType}>03. SERVICE FABRIC</div>
                <div className={styles.nodeName}>Stateless Microservices</div>
                <div className={styles.nodeDesc}>Policy & Claims Business Logic</div>
              </div>

              <div className={styles.flowConnector}>
                <span className={styles.pulseSignal} />
                <ArrowRight size={20} />
              </div>

              <div className={styles.archNode}>
                <Database size={18} color="var(--color-accent)" style={{ margin: '0 auto 0.25rem' }} />
                <div className={styles.nodeType}>04. STORAGE TIER</div>
                <div className={styles.nodeName}>Microsoft SQL Server</div>
                <div className={styles.nodeDesc}>T-SQL Stored Procedures & SSMS</div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Experience Timeline */}
        <div className={styles.timeline}>
          {experiencesData.map((exp, idx) => (
            <Reveal key={exp.id} delay={idx * 0.15}>
              <article className={styles.timelineCard}>
                <div className={styles.cardHeader}>
                  <div>
                    <h3 className={styles.roleTitle}>{exp.role}</h3>
                    <div className={styles.companyRow}>
                      <span>{exp.company}</span>
                      <span>·</span>
                      <span style={{ color: 'var(--text-tertiary)' }}>{exp.location}</span>
                    </div>
                  </div>

                  <div className={styles.tenureBadge}>{exp.period}</div>
                </div>

                <div className={styles.projectContext}>
                  {exp.projectContext}
                </div>

                <ul className={styles.responsibilitiesList}>
                  {exp.responsibilities.map((resp, rIdx) => (
                    <li key={rIdx} className={styles.responsibilityItem}>
                      <span className={styles.bulletDot} />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>

                <div className={styles.techTags}>
                  {exp.technologies.map((tech) => (
                    <span key={tech} className={styles.techTag}>
                      {tech}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
