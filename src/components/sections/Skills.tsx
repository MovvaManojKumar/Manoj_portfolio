import React, { useState } from 'react';
import { Database } from 'lucide-react';
import styles from './Skills.module.css';
import { skillsData } from '../../data/skills';
import { Reveal } from '../motion/Reveal';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');

  const filteredGroups = selectedCategory === 'ALL'
    ? skillsData
    : skillsData.filter((g) => g.categoryCode === selectedCategory);

  const activeGroup = skillsData.find((g) => g.categoryCode === selectedCategory) || skillsData[0];

  return (
    <section id="skills" className={styles.skillsSection} aria-label="Technical Skills">
      <div className="container">
        <div className={styles.sectionHeader}>
          <Reveal>
            <div className={styles.sectionLabel}>// 03. Engine Capabilities</div>
            <h2 className={styles.sectionTitle}>Technical Skills & Distributed Stack</h2>
          </Reveal>
        </div>

        {/* SQL Query Metaphor Interface */}
        <Reveal delay={0.1}>
          <div className={styles.queryTerminal}>
            <div className={styles.terminalBar}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <Database size={14} color="var(--color-cyan)" />
                SSMS Query Execution — Master Schema
              </span>
              <span>ROWS RETURNED: {skillsData.reduce((acc, curr) => acc + curr.skills.length, 0)}</span>
            </div>

            <div style={{ lineHeight: 1.6 }}>
              <span className={styles.sqlKeyword}>SELECT</span> skill_name, proficiency, category_tags<br />
              <span className={styles.sqlKeyword}>FROM</span> sys.developer_competencies<br />
              <span className={styles.sqlKeyword}>{activeGroup.queryFilter}</span>;<br />
              <span className={styles.sqlComment}>-- Query executed in 1.4ms with 0 lock contention</span>
            </div>
          </div>
        </Reveal>

        {/* Category Tabs */}
        <div className={styles.tabsList}>
          <button
            type="button"
            className={`${styles.tabButton} ${selectedCategory === 'ALL' ? styles.tabButtonActive : ''}`}
            onClick={() => setSelectedCategory('ALL')}
          >
            ALL CATEGORIES
          </button>
          {skillsData.map((group) => (
            <button
              key={group.categoryCode}
              type="button"
              className={`${styles.tabButton} ${selectedCategory === group.categoryCode ? styles.tabButtonActive : ''}`}
              onClick={() => setSelectedCategory(group.categoryCode)}
            >
              {group.category.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className={styles.skillsGrid}>
          {filteredGroups.flatMap((group) =>
            group.skills.map((skill, sIdx) => (
              <div
                key={`${group.categoryCode}-${sIdx}`}
                className={`${styles.skillCard} ${skill.highlight ? styles.skillCardHighlight : ''}`}
              >
                <div className={styles.cardTop}>
                  <h3 className={styles.skillName}>{skill.name}</h3>
                  <span className={styles.levelBadge}>{skill.level}</span>
                </div>

                {skill.tags && (
                  <div className={styles.cardTags}>
                    {skill.tags.map((tag) => (
                      <span key={tag} className={styles.subTag}>
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};
