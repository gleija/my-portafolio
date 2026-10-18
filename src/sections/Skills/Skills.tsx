import { sections } from "../../components/Header/sections/sections";
import {
  eyebrow,
  sectionHeading,
  sectionHeadingLead,
  sectionHeadingTitle,
} from "../../styles/shared.css";
import * as styles from "./skills.css";
import { skills } from "./skills.data";

const HEADING_ID = `${sections.skills}-heading`;

export const Skills = (): React.JSX.Element => {
  return (
    <section
      className={styles.section}
      id={sections.skills}
      aria-labelledby={HEADING_ID}
    >
      <div className={sectionHeading}>
        <p className={eyebrow}>02 / TECHNICAL EXPERTISE</p>
        <h2 className={sectionHeadingTitle} id={HEADING_ID}>
          Built on fundamentals. Focused on craft.
        </h2>
        <p className={sectionHeadingLead}>
          Most of my experience is in frontend engineering, particularly React
          and TypeScript, but I've never limited myself to just the frontend.
          Over the years, I've also worked with backend services, cloud
          infrastructure, testing, and the tools that developers rely on every
          day.
        </p>
      </div>

      <ul className={styles.grid}>
        {skills.map((skill) => (
          <li className={styles.card} key={skill.title}>
            {/* The number and icon are purely decorative, so they're hidden
                from assistive tech and the card reads as title, description,
                technologies. */}
            <div className={styles.cardHeader} aria-hidden="true">
              <span className={styles.cardNumber}>{skill.number}</span>
              <span className={styles.cardSymbol}>{skill.icon}</span>
            </div>

            <h3 className={styles.title}>{skill.title}</h3>
            <p className={styles.description}>{skill.description}</p>

            <ul
              className={styles.technologies}
              aria-label={`${skill.title} technologies`}
            >
              {skill.technologies.map((technology) => (
                <li className={styles.technology} key={technology}>
                  {technology}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  );
};
