import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import styles from './Projects.module.css';
import { projectsData, ProjectCaseStudy } from '../../data/projects';
import { Reveal } from '../motion/Reveal';
import { TiltCard } from '../motion/TiltCard';
import { CaseStudyModal } from '../modals/CaseStudyModal';

export const Projects: React.FC = () => {
  const [activeModalProject, setActiveModalProject] = useState<ProjectCaseStudy | null>(null);

  return (
    <section id="projects" className={styles.projectsSection} aria-label="Engineered Projects">
      <div className="container">
        <div className={styles.sectionHeader}>
          <Reveal>
            <div className={styles.sectionLabel}>// 04. System Implementations</div>
            <h2 className={styles.sectionTitle}>Featured Projects & Architectural Studies</h2>
          </Reveal>
        </div>

        <div className={styles.projectsGrid}>
          {projectsData.map((project, idx) => (
            <Reveal key={project.id} delay={idx * 0.1} className={styles.projectCardWrapper}>
              <TiltCard className={styles.projectCard}>
                <div className={styles.cardTop}>
                  <span className={styles.categoryBadge}>{project.category}</span>
                  {project.isProfessional && (
                    <span className={styles.proBadge}>ENTERPRISE CORE</span>
                  )}
                </div>

                <h3 className={styles.cardTitle}>{project.title}</h3>

                <p className={styles.cardSummary}>{project.summary}</p>

                <div className={styles.stackList}>
                  {project.techStack.slice(0, 5).map((tech) => (
                    <span key={tech} className={styles.stackTag}>
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 5 && (
                    <span className={styles.stackTag}>+{project.techStack.length - 5} more</span>
                  )}
                </div>

                <div className={styles.cardFooter}>
                  <button
                    type="button"
                    onClick={() => setActiveModalProject(project)}
                    className={styles.caseStudyBtn}
                    aria-label={`View architectural case study for ${project.title}`}
                  >
                    <span>View Case Study</span>
                    <ArrowUpRight size={15} />
                  </button>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Case Study Modal */}
      <CaseStudyModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
};
