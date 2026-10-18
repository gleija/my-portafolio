import * as styles from "./about.css";

export const About = (): React.JSX.Element => {
  return (
    <section
      className={styles.hero}
      id="about"
      aria-labelledby="about-heading"
    >
      <p className={styles.eyebrow}>SOFTWARE ENGINEER / FRONTEND SPECIALIST</p>
      <h1 className={styles.heading} id="about-heading">
        Software
        <br />
        <em className={styles.headingAccent}>is craft.</em>
      </h1>
      <p className={styles.introduction}>
        I'm Gary, a software engineer with over 10 years of experience building
        web applications, design systems, and developer tools.
      </p>
      <a className={styles.primaryButton} href="#experience">
        Explore my work <span aria-hidden="true">→</span>
      </a>
    </section>
  );
};