import React, { useState } from 'react';
import { ArrowUpRight, Github, ShieldCheck, Cpu, Database, Server, UserCheck, Layers, GitBranch, ShoppingCart, Award } from 'lucide-react';
import styles from './Projects.module.css';
import { projectsData, ProjectCaseStudy } from '../../data/projects';
import { Reveal } from '../motion/Reveal';
import { CaseStudyModal } from '../modals/CaseStudyModal';

const renderProjectVisual = (type: ProjectCaseStudy['visualType']) => {
  switch (type) {
    case 'ARCH_PIPELINE':
      return (
        <div className={styles.visualArchBox}>
          <div className={styles.visualNode}><Server size={14} color="var(--color-accent)" /> API</div>
          <span className={styles.visualLine} />
          <div className={styles.visualNode}><Cpu size={14} color="var(--color-health)" /> SVC</div>
          <span className={styles.visualLine} />
          <div className={styles.visualNode}><Database size={14} color="var(--color-cyan)" /> DB</div>
        </div>
      );
    case 'KANBAN':
      return (
        <div className={styles.visualKanbanBox}>
          <div className={styles.kanbanCol}>
            <span className={styles.kanbanDot} />
            <div className={styles.kanbanCard}>Applied</div>
          </div>
          <div className={styles.kanbanCol}>
            <span className={styles.kanbanDotActive} />
            <div className={styles.kanbanCardActive}>Interview</div>
          </div>
          <div className={styles.kanbanCol}>
            <span className={styles.kanbanDot} />
            <div className={styles.kanbanCard}>Hired</div>
          </div>
        </div>
      );
    case 'LEDGER':
      return (
        <div className={styles.visualLedgerBox}>
          <div className={styles.ledgerStep}><UserCheck size={14} color="var(--color-health)" /> MTCNN</div>
          <span className={styles.visualLine} />
          <div className={styles.ledgerStep}><Layers size={14} color="var(--color-accent)" /> FaceNet</div>
          <span className={styles.visualLine} />
          <div className={styles.ledgerStep}><GitBranch size={14} color="var(--color-cyan)" /> Ledger</div>
        </div>
      );
    case 'MARKETPLACE':
      return (
        <div className={styles.visualMarketBox}>
          <div className={styles.marketChef}><ShoppingCart size={14} color="var(--color-accent)" /> Menu Catalog</div>
          <span className={styles.visualLine} />
          <div className={styles.marketOrder}>Order Dispatch</div>
        </div>
      );
    case 'WORKFLOW':
      return (
        <div className={styles.visualWorkflowBox}>
          <div className={styles.workflowStep}><Award size={14} color="var(--color-accent)" /> Eligibility</div>
          <span className={styles.visualLine} />
          <div className={styles.workflowStep}><ShieldCheck size={14} color="var(--color-health)" /> Verified</div>
        </div>
      );
    default:
      return null;
  }
};

export const Projects: React.FC = () => {
  const [activeModalProject, setActiveModalProject] = useState<ProjectCaseStudy | null>(null);

  return (
    <section id="projects" className={styles.projectsSection} aria-label="Engineered Projects">
      <div className="container">
        {/* Section Header */}
        <div className={styles.sectionHeader}>
          <Reveal>
            <div className={styles.sectionLabel}>// 04. System Implementations</div>
            <h2 className={styles.sectionTitle}>Featured Projects & Architectural Studies</h2>
          </Reveal>
        </div>

        {/* Bento Grid: 5 Projects */}
        <div className={styles.projectsGrid}>
          {projectsData.map((project, idx) => (
            <Reveal key={project.id} delay={idx * 0.08} className={project.isProfessional ? styles.flagshipWrapper : ''}>
              <div className={`${styles.bentoProjectCard} ${project.isProfessional ? styles.flagshipCard : ''}`}>
                {/* Visual Architecture Schematic Cover */}
                <div className={styles.visualCover}>
                  <div className={styles.visualHeader}>
                    <span className={styles.categoryBadge}>{project.category}</span>
                    {project.isProfessional && (
                      <span className={styles.flagshipBadge}>ENTERPRISE CORE</span>
                    )}
                  </div>
                  {renderProjectVisual(project.visualType)}
                </div>

                {/* Card Body */}
                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle}>{project.title}</h3>
                  <p className={styles.oneLinerText}>{project.oneLiner}</p>

                  <div className={styles.techChipsRow}>
                    {project.techStack.slice(0, 4).map((tech) => (
                      <span key={tech} className={styles.techChip}>
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 4 && (
                      <span className={styles.techChipMore}>+{project.techStack.length - 4}</span>
                    )}
                  </div>

                  <div className={styles.cardActions}>
                    <button
                      type="button"
                      onClick={() => setActiveModalProject(project)}
                      className={styles.viewStudyBtn}
                      aria-label={`View architectural case study for ${project.title}`}
                    >
                      <span>VIEW CASE STUDY</span>
                      <ArrowUpRight size={14} />
                    </button>

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.iconLink}
                        aria-label={`View GitHub repository for ${project.title}`}
                        title="GitHub Repository"
                      >
                        <Github size={16} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* 10-Part Standardized Case Study Modal */}
      <CaseStudyModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
};
