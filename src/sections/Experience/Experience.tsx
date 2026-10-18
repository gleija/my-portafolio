import { sections } from "../../components/Header/sections/sections";
import { experience } from "./experience.data";
import {
  eyebrow,
  sectionHeading,
  sectionHeadingLead,
  sectionHeadingTitle,
  visuallyHidden,
} from "../../styles/shared.css";
import * as styles from "./experience.css";

const HEADING_ID = `${sections.experience}-heading`;

export const Experience = (): React.JSX.Element => {
  return (
    <section
      className={styles.section}
      id={sections.experience}
      aria-labelledby={HEADING_ID}
    >
      <div className={sectionHeading}>
        <p className={eyebrow}>01 / PROFESSIONAL EXPERIENCE</p>
        <h2 className={sectionHeadingTitle} id={HEADING_ID}>
          Engineering across markets.
        </h2>
        <p className={sectionHeadingLead}>
          I've spent more than 10 years working as a software engineer, first in
          Australia and then in Japan. Most of my work has been around building
          web applications, improving the way they're put together, and making
          life a little easier for the developers working on them.
        </p>
      </div>

      <div>
        {experience.map((item) => (
          <article className={styles.item} key={item.website}>
            <div className={styles.meta}>
              <span>{item.period}</span>
              <span>{item.location}</span>
            </div>

            <div>
              <h3 className={styles.role}>{item.role}</h3>
              <p className={styles.industry}>{item.industry}</p>
              <p className={styles.description}>{item.description}</p>

              <ul className={styles.tags} aria-label="Technologies used">
                {item.technologies.map((technology) => (
                  <li className={styles.tag} key={technology}>
                    {technology}
                  </li>
                ))}
              </ul>

              <a
                className={styles.link}
                href={item.website}
                target="_blank"
                rel="noopener noreferrer"
              >
                Explore platform
                <span className={visuallyHidden}>
                  {" "}
                  for {item.industry}, opens in new tab
                </span>
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </article>
        ))}
      </div>

      <div className={styles.note}>
        <span className={eyebrow}>INTERNATIONAL ENGINEERING EXPERIENCE</span>
        <h3 className={styles.noteTitle}>Australia → Japan · 2023</h3>
        <p className={styles.noteText}>
          After spending more than 10 years working as a Software Engineer in
          Australia, I was recruited and sponsored to relocate to Tokyo. Since
          then, I've had the opportunity to work with engineering teams in Japan
          and experience different approaches to building software.
        </p>
      </div>
    </section>
  );
};
