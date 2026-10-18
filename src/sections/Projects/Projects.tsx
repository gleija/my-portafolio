import type { ComponentType } from "react";
import { projects, type DiagramId, type Project } from "./projects.data";

import { sections } from "../../components/Header/sections/sections";
import {
  eyebrow,
  sectionHeading,
  sectionHeadingLead,
  sectionHeadingTitle,
} from "../../styles/shared.css";
import { CandidateManagementDiagram } from "./components/CandidateManagementDiagram/CandidateManagementDiagram";
import { DesignSystemDiagram } from "./components/DesignSystemDiagram/DesignSystemDiagram";
import * as styles from "./projects.css";

const HEADING_ID = `${sections.projects}-heading`;

const diagrams = {
  "design-system": DesignSystemDiagram,
  "candidate-management": CandidateManagementDiagram,
} satisfies Record<DiagramId, ComponentType>;

type Detail = {
  key: keyof Pick<
    Project,
    "challenge" | "contribution" | "process" | "outcome"
  >;
  label: string;
};

const details: readonly Detail[] = [
  { key: "challenge", label: "The challenge" },
  { key: "contribution", label: "My contribution" },
  { key: "process", label: "Engineering process" },
  { key: "outcome", label: "Outcome" },
];

export const Projects = (): React.JSX.Element => {
  return (
    <section
      className={styles.section}
      id={sections.projects}
      aria-labelledby={HEADING_ID}
    >
      <div className={sectionHeading}>
        <p className={eyebrow}>03 / SELECTED ENGINEERING WORK</p>
        <h2 className={sectionHeadingTitle} id={HEADING_ID}>
          Real problems. Thoughtful solutions.
        </h2>
        <p className={sectionHeadingLead}>
          Selected case studies from production engineering work. Commercial
          source code and internal implementation details remain private; these
          examples focus on engineering challenges, contributions, and technical
          decisions.
        </p>
      </div>

      <div className={styles.list}>
        {projects.map((project) => {
          const titleId = `project-${project.number}-title`;
          const Diagram = diagrams[project.diagram];

          return (
            <article
              className={styles.card}
              key={project.title}
              aria-labelledby={titleId}
            >
              <div className={styles.cardTop}>
                <span className={styles.number}>
                  FEATURED PROJECT / {project.number}
                </span>
                <span className={styles.period}>{project.period}</span>
              </div>

              <div className={styles.intro}>
                <div>
                  <p className={styles.category}>{project.category}</p>
                  <h3 className={styles.title} id={titleId}>
                    {project.title}
                  </h3>
                  <p className={styles.subtitle}>{project.subtitle}</p>
                </div>
                <p className={styles.overview}>{project.overview}</p>
              </div>

              <dl className={styles.details}>
                {details.map(({ key, label }, index) => (
                  <div className={styles.detail} key={key}>
                    <dt className={styles.detailLabel}>
                      <span aria-hidden="true">
                        {String(index + 1).padStart(2, "0")} /{" "}
                      </span>
                      {label}
                    </dt>
                    <dd className={styles.detailText}>{project[key]}</dd>
                  </div>
                ))}
              </dl>

              <Diagram />

              <div className={styles.footer}>
                <ul
                  className={styles.tags}
                  aria-label={`Technologies used in ${project.title}`}
                >
                  {project.technologies.map((technology) => (
                    <li className={styles.tag} key={technology}>
                      {technology}
                    </li>
                  ))}
                </ul>
                <p className={styles.confidentiality}>
                  Anonymized professional case study
                </p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};
