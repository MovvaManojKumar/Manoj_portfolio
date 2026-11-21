import React, { useState, useEffect } from 'react';
import { ArrowDown, FileText, CheckCircle2, MapPin, Clock, ShieldCheck, Copy, Check, Filter } from 'lucide-react';
import styles from './Hero.module.css';
import { profileData } from '../../data/profile';
import { Reveal } from '../motion/Reveal';
import { MagneticButton } from '../motion/MagneticButton';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { KineticTitle, ShimmerSpan, ScrambleText } from '../effects/AnimatedText';

interface HeroProps {
  onExploreWorkClick?: () => void;
}

interface TraceLog {
  id: number;
  time: string;
  level: 'INFO' | 'WARN' | 'DIAGNOSTIC' | 'OK';
  category: 'ALL' | 'SYSTEM' | 'TRAFFIC' | 'DATABASE';
  message: string;
}

const TRACE_LOGS: TraceLog[] = [
  { id: 1, time: '00:00.12', level: 'INFO', category: 'SYSTEM', message: 'Session opened: HTTP/2 TLS 1.3 handshake ok' },
  { id: 2, time: '00:00.45', level: 'INFO', category: 'SYSTEM', message: 'Service Fabric cluster: RMA Policy Engine nodes online' },
  { id: 3, time: '00:01.10', level: 'WARN', category: 'TRAFFIC', message: 'High throughput: 1,420 claims/sec routed to API Gateway' },
  { id: 4, time: '00:01.85', level: 'DIAGNOSTIC', category: 'DATABASE', message: 'Optimizing SQL Server execution plans: 0 deadlocks, latency < 42ms' },
];

export const Hero: React.FC<HeroProps> = ({ onExploreWorkClick }) => {
  const { reducedMotion } = useReducedMotion();
  const [traceStep, setTraceStep] = useState<number>(() => (reducedMotion ? 4 : 0));
  const [isSkipped, setIsSkipped] = useState<boolean>(() => reducedMotion);
  const [selectedFilter, setSelectedFilter] = useState<'ALL' | 'SYSTEM' | 'TRAFFIC' | 'DATABASE'>('ALL');
  const [copiedTrace, setCopiedTrace] = useState(false);

  useEffect(() => {
    if (reducedMotion || isSkipped) {
      setTraceStep(4);
      return;
    }

    const timer1 = setTimeout(() => setTraceStep(1), 350);
    const timer2 = setTimeout(() => setTraceStep(2), 850);
    const timer3 = setTimeout(() => setTraceStep(3), 1500);
    const timer4 = setTimeout(() => setTraceStep(4), 2200);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, [reducedMotion, isSkipped]);

  const handleSkip = () => {
    setIsSkipped(true);
    setTraceStep(4);
  };

  const handleCopyLogs = async () => {
    const text = TRACE_LOGS.map((l) => `[${l.time}] [${l.level}] ${l.message}`).join('\n') +
      '\n[OK 200] Resolved to Manoj Kumar Movva (Backend .NET Developer)';
    try {
      await navigator.clipboard.writeText(text);
      setCopiedTrace(true);
      setTimeout(() => setCopiedTrace(false), 2000);
    } catch {
      // Fallback
    }
  };

  const filteredLogs = TRACE_LOGS.filter(
    (l) => selectedFilter === 'ALL' || l.category === selectedFilter
  );

  return (
    <section id="hero" className={styles.heroSection} aria-label="Incident Room Hero">
      <div className={`container ${styles.heroGrid}`}>
        {/* Left Column: Core Identity & Technical Pitch */}
        <div className={styles.contentColumn}>
          <Reveal delay={0.05}>
            <div className={styles.telemetryBadge}>
              <span className={styles.badgePulse} />
              <ScrambleText text="INCIDENT ROOM ACTIVE · LIVE STATUS" />
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <h1 className={styles.title}>
              <KineticTitle text={profileData.name} />
              <span className={styles.accentRole}>
                <ShimmerSpan>{profileData.headlineRole}</ShimmerSpan>
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.25}>
            <p className={styles.pitch}>
              {profileData.tagline}
            </p>
          </Reveal>

          <Reveal delay={0.35}>
            <div className={styles.metaRow}>
              <div className={styles.metaItem}>
                <MapPin size={15} color="var(--color-accent)" />
                <span>{profileData.location}</span>
              </div>
              <div className={styles.metaItem}>
                <Clock size={15} color="var(--color-health)" />
                <span>{profileData.experienceYears} Experience</span>
              </div>
              <div className={styles.metaItem}>
                <ShieldCheck size={15} color="var(--color-cyan)" />
                <span>Notice: {profileData.noticePeriod}</span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.45}>
            <div className={styles.actionCluster}>
              <MagneticButton
                as="a"
                href="#projects"
                onClick={onExploreWorkClick}
                className={styles.btnPrimary}
                aria-label="View verified backend projects"
              >
                <span>View My Work</span>
                <ArrowDown size={16} />
              </MagneticButton>

              <MagneticButton
                as="a"
                href="/resume/Manoj_Kumar_Movva.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.btnSecondary}
                aria-label="Download verified resume PDF"
              >
                <FileText size={16} />
                <span>Download Resume</span>
              </MagneticButton>
            </div>
          </Reveal>
        </div>

        {/* Right Column: Impeccable Interactive Telemetry Console */}
        <div className={styles.consoleColumn}>
          <Reveal delay={0.2}>
            <div className={styles.traceCard}>
              <div className={styles.traceHeader}>
                <div className={styles.trafficLights}>
                  <span className={`${styles.trafficDot} ${styles.dotRed}`} />
                  <span className={`${styles.trafficDot} ${styles.dotYellow}`} />
                  <span className={`${styles.trafficDot} ${styles.dotGreen}`} />
                  <span className={styles.traceTitle}>sys_telemetry.trace</span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <button
                    type="button"
                    onClick={handleCopyLogs}
                    className={styles.toolBtn}
                    aria-label="Copy incident trace logs"
                    title="Copy Trace Logs"
                  >
                    {copiedTrace ? <Check size={13} color="var(--color-health)" /> : <Copy size={13} />}
                    <span>{copiedTrace ? 'COPIED' : 'COPY'}</span>
                  </button>

                  {!isSkipped && traceStep < 4 && (
                    <button
                      type="button"
                      onClick={handleSkip}
                      className={styles.skipButton}
                      aria-label="Skip Trace Animation"
                    >
                      Skip ⏩
                    </button>
                  )}
                </div>
              </div>

              {/* Interactive Telemetry Log Filters */}
              <div className={styles.filterBar}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', color: 'var(--text-tertiary)', fontSize: '0.7rem' }}>
                  <Filter size={11} /> FILTER:
                </span>
                {(['ALL', 'SYSTEM', 'TRAFFIC', 'DATABASE'] as const).map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setSelectedFilter(cat)}
                    className={`${styles.filterChip} ${selectedFilter === cat ? styles.filterChipActive : ''}`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              <div className={styles.traceBody} aria-live="polite">
                {filteredLogs.map((log) => {
                  if (traceStep < log.id - 1) return null;
                  let levelClass = styles.logLevelInfo;
                  if (log.level === 'WARN') levelClass = styles.logLevelWarn;
                  if (log.level === 'DIAGNOSTIC') levelClass = styles.logLevelInfo;

                  return (
                    <div key={log.id} className={styles.logEntry}>
                      <span className={styles.logTime}>{log.time}</span>
                      <span className={levelClass}>[{log.level}]</span>
                      <span>{log.message}</span>
                    </div>
                  );
                })}

                {traceStep >= 4 && (
                  <div className={styles.resolvedResolution}>
                    <div className={styles.resolvedHeader}>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                        <CheckCircle2 size={16} />
                        SYSTEM STABLE · RESOLVED
                      </span>
                      <span>200 OK</span>
                    </div>
                    <div className={styles.resolvedName}>Manoj Kumar Movva</div>
                    <div className={styles.resolvedStack}>
                      Core Backend: C# · ASP.NET Core 8 · SQL Server · Service Fabric · REST APIs
                    </div>
                  </div>
                )}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
