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
      window.location.href = `mailto:${profileData.email}`;
    }
  };

  return (
    <section id="contact" className={styles.contactSection} aria-label="Contact and Dispatch">
      <div className="container">
        <Reveal>
          <div className={styles.contactBox}>
            <div className={styles.sectionLabel}>// 07. Direct Connection</div>

            <h2 className={styles.contactTitle}>
              Let's Connect & Build Resilient Systems
            </h2>

            <p className={styles.contactDesc}>
              Available on a <span className={styles.highlightText}>1-month notice period</span> for Backend and Enterprise .NET roles in Hyderabad, Bangalore, or Remote. Let's discuss APIs, microservices, and database engineering.
            </p>

            {/* 4 Direct Action Buttons */}
            <div className={styles.dispatchCluster}>
              <button
                type="button"
                onClick={handleCopyEmail}
                className={styles.copyEmailBtn}
                aria-label="Copy email address"
              >
                {copied ? <Check size={16} /> : <Mail size={16} />}
                <span>{copied ? 'EMAIL COPIED TO CLIPBOARD' : 'COPY EMAIL ADDRESS'}</span>
              </button>

              <a
                href={profileData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.actionBtn}
                aria-label="Connect on LinkedIn"
              >
                <Linkedin size={16} />
                <span>LinkedIn</span>
                <ArrowUpRight size={13} />
              </a>

              <a
                href={profileData.github}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.actionBtn}
                aria-label="Inspect GitHub Repositories"
              >
                <Github size={16} />
                <span>GitHub</span>
                <ArrowUpRight size={13} />
              </a>

              <a
                href="/resume/Manoj_Kumar_Movva.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.resumeActionBtn}
                aria-label="Download verified resume PDF"
              >
                <FileText size={16} />
                <span>Download Resume</span>
              </a>
            </div>

            <div className={styles.endpointStatus}>
              <span className={styles.statusDot} />
              <span className={styles.endpointText}>Direct Endpoint: {profileData.email}</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
