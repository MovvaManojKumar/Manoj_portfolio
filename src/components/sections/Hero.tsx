import React from 'react';
import { ArrowDown, FileText, MapPin, Clock, ShieldCheck, Terminal, CheckCircle2 } from 'lucide-react';
import styles from './Hero.module.css';
import { profileData } from '../../data/profile';
import { Reveal } from '../motion/Reveal';

interface HeroProps {
  onExploreWorkClick?: () => void;
}

const CORE_STACK_CHIPS = [
  'C#',
  '.NET 8 / ASP.NET Core',
  'SQL Server',
  'REST Web APIs',
  'Azure DevOps'
];

export const Hero: React.FC<HeroProps> = ({ onExploreWorkClick }) => {
  return (
    <section id="hero" className={styles.heroSection} aria-label="Candidate Overview">
      <div className={`container ${styles.heroGrid}`}>
        {/* Left Column: Recruiter Strip (H1) */}
        <div className={styles.contentColumn}>
          {/* Availability Status Badge */}
          <Reveal delay={0.05}>
            <div className={styles.availabilityBadge}>
              <span className={styles.badgePulse} />
              <span className={styles.badgeText}>AVAILABLE · 1-MONTH NOTICE</span>
            </div>
          </Reveal>

          {/* Name & Headline Role */}
          <Reveal delay={0.12}>
            <div className={styles.titleBlock}>
              <h1 className={styles.candidateName}>{profileData.name}</h1>
              <div className={styles.roleSubhead}>{profileData.headlineRole}</div>
            </div>
          </Reveal>

          {/* Strict 11-word Pitch */}
          <Reveal delay={0.18}>
            <p className={styles.pitchText}>
              {profileData.tagline}
            </p>
          </Reveal>

          {/* Vitals Bar: Location, Experience, Notice Period */}
          <Reveal delay={0.24}>
            <div className={styles.vitalsBar}>
              <div className={styles.vitalItem}>
                <MapPin size={14} className={styles.vitalIconAmber} />
                <span>{profileData.location}</span>
              </div>
              <div className={styles.vitalDivider}>•</div>
              <div className={styles.vitalItem}>
                <Clock size={14} className={styles.vitalIconGreen} />
                <span>{profileData.experienceYears} Experience</span>
              </div>
              <div className={styles.vitalDivider}>•</div>
              <div className={styles.vitalItem}>
                <ShieldCheck size={14} className={styles.vitalIconCyan} />
                <span>Notice: {profileData.noticePeriod}</span>
              </div>
            </div>
          </Reveal>

          {/* Core Technologies Chips (5 chips) */}
          <Reveal delay={0.3}>
            <div className={styles.chipsContainer}>
              <div className={styles.chipsLabel}>PRIMARY TECHNOLOGIES:</div>
              <div className={styles.chipsList}>
                {CORE_STACK_CHIPS.map((chip) => (
                  <span key={chip} className={styles.techChip}>
                    {chip}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Primary Action Buttons */}
          <Reveal delay={0.36}>
            <div className={styles.actionRow}>
              <a
                href="#projects"
                onClick={onExploreWorkClick}
                className={styles.btnPrimary}
                aria-label="View verified projects"
              >
                <span>View Projects</span>
                <ArrowDown size={15} />
              </a>

              <a
                href="/resume/Manoj_Kumar_Movva.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.btnSecondary}
                aria-label="Download verified resume PDF"
              >
                <FileText size={15} />
                <span>Download Resume</span>
              </a>
            </div>
          </Reveal>
        </div>

        {/* Right Column: Compact Incident Room System Card */}
        <div className={styles.schematicColumn}>
          <Reveal delay={0.2}>
            <div className={styles.schematicCard}>
              <div className={styles.cardHeader}>
                <div className={styles.systemStatus}>
                  <span className={styles.pulseGreen} />
                  <span>INCIDENT ROOM TELEMETRY</span>
                </div>
                <span className={styles.clusterTag}>ENV: PRODUCTION</span>
              </div>

              <div className={styles.profileSummaryRow}>
                <div className={styles.avatarPlaceholder}>
                  <Terminal size={24} color="var(--color-accent)" />
                </div>
                <div className={styles.profileMeta}>
                  <div className={styles.metaTitle}>Manoj Kumar Movva</div>
                  <div className={styles.metaSub}>Software Developer · Linkfields Innovations</div>
                  <div className={styles.metaDomain}>Domain: Enterprise Insurance Platform</div>
                </div>
              </div>

              <div className={styles.quickFactsGrid}>
                <div className={styles.factTile}>
                  <div className={styles.factLabel}>PRIMARY RUNTIME</div>
                  <div className={styles.factVal}>.NET 8 / C#</div>
                </div>
                <div className={styles.factTile}>
                  <div className={styles.factLabel}>DATA ENGINE</div>
                  <div className={styles.factVal}>SQL Server</div>
                </div>
                <div className={styles.factTile}>
                  <div className={styles.factLabel}>ORCHESTRATION</div>
                  <div className={styles.factVal}>Service Fabric</div>
                </div>
                <div className={styles.factTile}>
                  <div className={styles.factLabel}>STATUS</div>
                  <div className={styles.factValHealth}>Available</div>
                </div>
              </div>

              {/* Restrained Illustrative Telemetry (Explicitly labeled) */}
              <div className={styles.telemetryBox}>
                <div className={styles.telemetryHeader}>
                  <span>SESSION LOGS</span>
                  <span className={styles.illustrativeLabel}>[Illustrative Data]</span>
                </div>
                <div className={styles.logStream}>
                  <div className={styles.logLine}>
                    <span className={styles.logTime}>00:00.1</span>
                    <span className={styles.logOk}>[OK]</span>
                    <span>HTTP/2 TLS 1.3 handshake verified</span>
                  </div>
                  <div className={styles.logLine}>
                    <span className={styles.logTime}>00:00.3</span>
                    <span className={styles.logInfo}>[INFO]</span>
                    <span>ASP.NET Core Web API routes registered</span>
                  </div>
                  <div className={styles.logLine}>
                    <span className={styles.logTime}>00:00.6</span>
                    <span className={styles.logOk}>[OK]</span>
                    <span>SQL Server connection pool ready</span>
                  </div>
                </div>
                <div className={styles.telemetryFooter}>
                  <CheckCircle2 size={13} color="var(--color-health)" />
                  <span>Ready for backend engineering impact</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
