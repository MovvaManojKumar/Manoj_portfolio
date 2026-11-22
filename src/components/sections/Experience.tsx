import React, { useState } from 'react';
import { ArrowRight, ChevronDown, ChevronUp, Server, Database, Globe, Cpu, ShieldCheck } from 'lucide-react';
import styles from './Experience.module.css';
import { experiencesData } from '../../data/experience';
import { Reveal } from '../motion/Reveal';

export const Experience: React.FC = () => {
  const [expandedDetails, setExpandedDetails] = useState(false);
  const primaryExp = experiencesData[0]; // Linkfields Innovations
  const secondaryExps = experiencesData.slice(1); // Soarswell & Smart Internz

  return (
    <section id="experience" className={styles.experienceSection} aria-label="Professional Experience">
      <div className="container">
        {/* Section Header */}
        <div className={styles.sectionHeader}>
          <Reveal>
            <div className={styles.sectionLabel}>// 03. Production Engineering</div>
            <h2 className={styles.sectionTitle}>Professional Experience & Systems Architecture</h2>
          </Reveal>
        </div>

        {/* Primary Bento Card: Linkfields Innovations */}
        <Reveal delay={0.1}>
          <div className={styles.primaryCard}>
            <div className={styles.cardTopRow}>
              <div>
                <div className={styles.roleHeader}>
                  <h3 className={styles.roleTitle}>{primaryExp.role}</h3>
                  <span className={styles.productionBadge}>● PRODUCTION</span>
                </div>
                <div className={styles.companyMeta}>
                  <span className={styles.companyName}>{primaryExp.company}</span>
                  <span>·</span>
                  <span className={styles.tenureText}>{primaryExp.period}</span>
                  <span>·</span>
                  <span className={styles.locationText}>{primaryExp.location}</span>
                </div>
              </div>

              <div className={styles.domainTag}>
                Enterprise Insurance Platform
              </div>
            </div>

            <p className={styles.contextSummary}>
              {primaryExp.projectContext}
            </p>

            {/* 4 Icon-Led Responsibility Rows */}
            <div className={styles.responsibilityGrid}>
              {primaryExp.iconResponsibilities.map((item) => (
                <div key={item.badge} className={styles.respRow}>
                  <span className={styles.respBadge}>[{item.badge}]</span>
                  <span className={styles.respText}>{item.shortText}</span>
                </div>
              ))}
            </div>

            {/* Compact 4-Node Request Pipeline Visual */}
            <div className={styles.pipelineBox}>
              <div className={styles.pipelineHeader}>
                <span className={styles.pipelineTitle}>REQUEST PIPELINE FLOW</span>
                <span className={styles.pipelineStatus}>
                  <ShieldCheck size={13} color="var(--color-health)" />
                  4-TIER ARCHITECTURE
                </span>
              </div>

              <div className={styles.nodesTrack}>
                <div className={styles.nodeItem}>
                  <Globe size={16} color="var(--color-cyan)" />
                  <div className={styles.nodeLabel}>Client App</div>
                  <div className={styles.nodeSub}>Web / Broker Portal</div>
                </div>

                <div className={styles.nodeArrow}>
                  <ArrowRight size={16} />
                </div>

                <div className={styles.nodeItem}>
                  <Server size={16} color="var(--color-accent)" />
                  <div className={styles.nodeLabel}>ASP.NET Core API</div>
                  <div className={styles.nodeSub}>Auth & Routing</div>
                </div>

                <div className={styles.nodeArrow}>
                  <ArrowRight size={16} />
                </div>

                <div className={styles.nodeItem}>
                  <Cpu size={16} color="var(--color-health)" />
                  <div className={styles.nodeLabel}>Microservices</div>
                  <div className={styles.nodeSub}>Service Fabric Nodes</div>
                </div>

                <div className={styles.nodeArrow}>
                  <ArrowRight size={16} />
                </div>

                <div className={styles.nodeItem}>
                  <Database size={16} color="var(--color-accent)" />
                  <div className={styles.nodeLabel}>SQL Server DB</div>
                  <div className={styles.nodeSub}>Stored Procedures</div>
                </div>
              </div>
            </div>

            {/* Tech Chips */}
            <div className={styles.techRow}>
              {primaryExp.technologies.map((tech) => (
                <span key={tech} className={styles.expTechChip}>
                  {tech}
                </span>
              ))}
            </div>

            {/* Expandable Technical Details Button */}
            <div className={styles.detailsToggleRow}>
              <button
                type="button"
                onClick={() => setExpandedDetails(!expandedDetails)}
                className={styles.toggleBtn}
                aria-expanded={expandedDetails}
              >
                <span>{expandedDetails ? 'Hide Technical Details' : 'View Detailed Responsibilities & SDLC Highlights'}</span>
                {expandedDetails ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </button>
            </div>

            {/* Expandable Content Panel */}
            {expandedDetails && (
              <div className={styles.expandedPanel}>
                <ul className={styles.detailedList}>
                  {primaryExp.detailedResponsibilities.map((resp, rIdx) => (
                    <li key={rIdx} className={styles.detailedItem}>
                      <span className={styles.bulletCheck}>✓</span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </Reveal>

        {/* Secondary Experiences: Soarswell & Smart Internz */}
        <div className={styles.secondaryGrid}>
          {secondaryExps.map((exp, idx) => (
            <Reveal key={exp.id} delay={0.25 + idx * 0.1}>
              <div className={styles.secondaryCard}>
                <div className={styles.secondaryHeader}>
                  <div>
                    <h4 className={styles.secondaryRole}>{exp.role}</h4>
                    <div className={styles.secondaryCompany}>
                      {exp.company} · {exp.period}
                    </div>
                  </div>
                  <span className={styles.secondaryBadge}>{exp.statusTag}</span>
                </div>

                <p className={styles.secondaryDesc}>
                  {exp.projectContext}
                </p>

                <div className={styles.secondaryResponsibilities}>
                  {exp.iconResponsibilities.map((resp) => (
                    <div key={resp.badge} className={styles.secondaryResp}>
                      <span className={styles.respMiniBadge}>[{resp.badge}]</span>
                      <span>{resp.shortText}</span>
                    </div>
                  ))}
                </div>

                <div className={styles.secondaryTech}>
                  {exp.technologies.map((t) => (
                    <span key={t} className={styles.secondaryChip}>
                      {t}
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
