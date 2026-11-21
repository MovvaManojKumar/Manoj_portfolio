import React, { useState } from 'react';
import { Mail, Check, Linkedin, Github, FileText, ArrowUpRight } from 'lucide-react';
import styles from './Contact.module.css';
import { profileData } from '../../data/profile';
import { Reveal } from '../motion/Reveal';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profileData.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2400);
    } catch {
      // Fallback
      window.location.href = `mailto:${profileData.email}`;
    }
  };

  return (
    <section id="contact" className={styles.contactSection} aria-label="Incident Dispatch / Contact">
      <div className="container">
        <Reveal>
          <div className={styles.contactBox}>
            <div className={styles.sectionLabel}>// 07. Incident Dispatch & Direct Line</div>

            <h2 className={styles.contactTitle}>
              Ready to Strengthen Your Backend & Distributed Systems?
            </h2>

            <p className={styles.contactDesc}>
              Available on a <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>1-month notice period</span>{' '}
              for Backend and Full Stack roles in Hyderabad, Bangalore, or Chennai. Let's discuss microservices, APIs, and high-performance SQL.
            </p>

            <div className={styles.dispatchCluster}>
              <button
                type="button"
                onClick={handleCopyEmail}
                className={styles.copyEmailBtn}
                aria-label="Copy Manoj Kumar Movva's email address"
              >
                {copied ? <Check size={18} /> : <Mail size={18} />}
                <span>{copied ? 'EMAIL COPIED TO CLIPBOARD' : 'COPY EMAIL ADDRESS'}</span>
              </button>

              <a
                href={profileData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.actionBtn}
                aria-label="Connect on LinkedIn"
              >
                <Linkedin size={18} />
                <span>LinkedIn</span>
                <ArrowUpRight size={14} />
              </a>

              <a
                href={profileData.github}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.actionBtn}
                aria-label="Inspect GitHub Repositories"
              >
                <Github size={18} />
                <span>GitHub</span>
                <ArrowUpRight size={14} />
              </a>

              <a
                href="/resume/Manoj_Kumar_Movva.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.actionBtn}
                aria-label="Download verified resume PDF"
              >
                <FileText size={18} />
                <span>Resume (PDF)</span>
              </a>
            </div>

            <div className={styles.statusNotice}>
              <span style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: 'var(--color-health)' }} />
              <span>Direct Endpoint: {profileData.email}</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
