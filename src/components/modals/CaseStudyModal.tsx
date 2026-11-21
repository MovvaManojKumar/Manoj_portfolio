import React, { useEffect } from 'react';
import { X, ExternalLink, Github } from 'lucide-react';
import styles from './CaseStudyModal.module.css';
import { ProjectCaseStudy } from '../../data/projects';

interface CaseStudyModalProps {
  project: ProjectCaseStudy | null;
  onClose: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className={styles.overlay} onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="modal-project-title">
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className={styles.modalHeader}>
          <div>
            <div className={styles.categoryTag}>{project.category} · ARCHITECTURAL DEEP DIVE</div>
            <h2 id="modal-project-title" className={styles.modalTitle}>{project.title}</h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className={styles.closeButton}
            aria-label="Close Case Study"
          >
            <X size={20} />
          </button>
        </div>

        {/* Problem Statement */}
        <div className={styles.sectionBlock}>
          <div className={styles.blockTitle}>// 01. The Problem & Requirements</div>
          <p className={styles.blockProse}>{project.problem}</p>
        </div>

        {/* Solution & Implementation */}
        <div className={styles.sectionBlock}>
          <div className={styles.blockTitle}>// 02. Architectural Solution</div>
          <p className={styles.blockProse}>{project.solution}</p>
          <ul className={styles.architectureList}>
            {project.architectureDetails.map((detail, idx) => (
              <li key={idx} className={styles.architectureItem}>
                <span className={styles.bullet}>▸</span>
                <span>{detail}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Key Endpoints / Microservice API Contracts */}
        <div className={styles.sectionBlock}>
          <div className={styles.blockTitle}>// 03. Core Service Contracts & Endpoints</div>
          <div className={styles.endpointsGrid}>
            {project.keyEndpointsOrFeatures.map((feat, idx) => (
              <div key={idx} className={styles.endpointCard}>
                <div className={styles.endpointName}>
                  {feat.name} {feat.badge && <span style={{ color: 'var(--color-accent)', fontWeight: 'normal', fontSize: '0.75rem' }}>({feat.badge})</span>}
                </div>
                <div className={styles.endpointDesc}>{feat.description}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Database Highlights if present */}
        {project.databaseHighlights && (
          <div className={styles.sectionBlock}>
            <div className={styles.blockTitle}>// 04. Database & Storage Architecture</div>
            <p className={styles.blockProse}>{project.databaseHighlights}</p>
          </div>
        )}

        {/* Lessons Learned */}
        <div className={styles.sectionBlock}>
          <div className={styles.blockTitle}>// 05. Engineering Takeaways</div>
          <p className={styles.blockProse}>{project.lessonsLearned}</p>
        </div>

        {/* Technology Pills */}
        <div className={styles.sectionBlock}>
          <div className={styles.blockTitle}>// 06. Verified Stack</div>
          <div className={styles.techPills}>
            {project.techStack.map((tech) => (
              <span key={tech} className={styles.techPill}>
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Footer Actions */}
        <div className={styles.modalFooter}>
          <div style={{ fontSize: '0.8rem', color: 'var(--text-tertiary)' }}>
            Verified Source: {project.isProfessional ? 'Enterprise Production Codebase' : 'Project Repository'}
          </div>

          <div className={styles.actionLinks}>
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.linkBtn}
              >
                <Github size={15} />
                <span>View GitHub</span>
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.linkBtn}
              >
                <ExternalLink size={15} />
                <span>Live System</span>
              </a>
            )}
            <button type="button" onClick={onClose} className={styles.linkBtn}>
              <span>Close Window</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
