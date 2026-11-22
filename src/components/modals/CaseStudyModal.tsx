import React, { useEffect } from 'react';
import { X, Github, CheckCircle2, ShieldAlert, Cpu, Wrench, Lightbulb } from 'lucide-react';
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
        {/* Modal Header */}
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

        {/* 10-Part Standardized Case Study Body */}
        <div className={styles.modalBody}>
          {/* 1. Problem Statement */}
          <div className={styles.sectionBlock}>
            <div className={styles.blockTitle}>// 01. The Problem & Requirements</div>
            <p className={styles.blockProse}>{project.problem}</p>
          </div>

          {/* 2. My Contribution */}
          <div className={styles.sectionBlock}>
            <div className={styles.blockTitle}>// 02. Personal Contribution & Ownership</div>
            <div className={styles.contributionBox}>
              <Cpu size={16} color="var(--color-accent)" className={styles.blockIcon} />
              <p className={styles.blockProse}>{project.myContribution}</p>
            </div>
          </div>

          {/* 3. System Architecture */}
          <div className={styles.sectionBlock}>
            <div className={styles.blockTitle}>// 03. System Architecture & Topology</div>
            <ul className={styles.architectureList}>
              {project.architectureDetails.map((detail, idx) => (
                <li key={idx} className={styles.archItem}>
                  <span className={styles.bulletNumber}>0{idx + 1}.</span>
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 4. Verified Technology Stack */}
          <div className={styles.sectionBlock}>
            <div className={styles.blockTitle}>// 04. Verified Technology Stack</div>
            <div className={styles.techPillGrid}>
              {project.techStack.map((tech) => (
                <span key={tech} className={styles.techPill}>
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* 5. Key Backend Features */}
          <div className={styles.sectionBlock}>
            <div className={styles.blockTitle}>// 05. Key Features & Workflows</div>
            <div className={styles.endpointsList}>
              {project.keyEndpointsOrFeatures.map((feat, idx) => (
                <div key={idx} className={styles.endpointCard}>
                  <div className={styles.endpointTop}>
                    <span className={styles.endpointName}>{feat.name}</span>
                    {feat.badge && <span className={styles.endpointBadge}>{feat.badge}</span>}
                  </div>
                  <p className={styles.endpointDesc}>{feat.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 6. Engineering Decisions */}
          {project.engineeringDecisions && project.engineeringDecisions.length > 0 && (
            <div className={styles.sectionBlock}>
              <div className={styles.blockTitle}>// 06. Engineering Decisions & Trade-Offs</div>
              <div className={styles.decisionsList}>
                {project.engineeringDecisions.map((dec, idx) => (
                  <div key={idx} className={styles.decisionCard}>
                    <div className={styles.decisionTitle}>
                      <Wrench size={14} color="var(--color-accent)" />
                      <span>{dec.title}</span>
                    </div>
                    <p className={styles.decisionText}>{dec.decision}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 7. Challenges & Debugging */}
          <div className={styles.sectionBlock}>
            <div className={styles.blockTitle}>// 07. Production Challenges & Debugging</div>
            <div className={styles.challengeBox}>
              <ShieldAlert size={16} color="var(--color-incident)" className={styles.blockIcon} />
              <p className={styles.blockProse}>{project.challenges}</p>
            </div>
          </div>

          {/* 8. Measurable Outcomes */}
          <div className={styles.sectionBlock}>
            <div className={styles.blockTitle}>// 08. Verified Outcomes & Reliability</div>
            <div className={styles.outcomeBox}>
              <CheckCircle2 size={16} color="var(--color-health)" className={styles.blockIcon} />
              <p className={styles.blockProse}>{project.measurableOutcomes}</p>
            </div>
          </div>

          {/* 9. Verified Links */}
          <div className={styles.sectionBlock}>
            <div className={styles.blockTitle}>// 09. Repository & Demonstration Links</div>
            <div className={styles.linksRow}>
              {project.githubUrl ? (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.linkButton}
                >
                  <Github size={16} />
                  <span>GitHub Repository ↗</span>
                </a>
              ) : (
                <div className={styles.confidentialNotice}>
                  <span>Client Restricted: Proprietary Enterprise Codebase (Protected)</span>
                </div>
              )}
            </div>
          </div>

          {/* 10. Lessons Learned */}
          <div className={styles.sectionBlock}>
            <div className={styles.blockTitle}>// 10. Engineering Reflection & Lessons Learned</div>
            <div className={styles.lessonsBox}>
              <Lightbulb size={16} color="var(--color-accent)" className={styles.blockIcon} />
              <p className={styles.blockProse}>{project.lessonsLearned}</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className={styles.modalFooter}>
          <button
            type="button"
            onClick={onClose}
            className={styles.modalCloseFooterBtn}
          >
            Dismiss Case Study
          </button>
        </div>
      </div>
    </div>
  );
};
