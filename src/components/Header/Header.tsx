import { useRef } from "react";

import * as styles from "./header.css";
import { useActiveSection } from "./useActiveSection";

const navigation = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
];

const sectionIds = navigation.map(({ id }) => id);

const Header = (): React.JSX.Element => {
  const headerRef = useRef<HTMLElement>(null);
  const activeSection = useActiveSection(headerRef, sectionIds);

  return (
    <header ref={headerRef} className={styles.siteHeader}>
      <a className={styles.brand} href="#about">
        Gary Leija
      </a>

      <nav className={styles.nav} aria-label="Main navigation">
        {navigation.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={
              activeSection === item.id
                ? `${styles.navLink} ${styles.navLinkActive}`
                : styles.navLink
            }
            aria-current={activeSection === item.id ? "location" : undefined}
          >
            {item.label}
          </a>
        ))}
      </nav>

      <div className={styles.headerActions}>
        <div
          className={styles.headerSocialLinks}
          role="group"
          aria-label="Social profiles"
        >
          <a
            className={styles.socialIconLink}
            href="https://github.com/gleija"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile (opens in new tab)"
            title="GitHub"
          >
            <img
              className={styles.socialIcon}
              src="/icons/github.svg"
              alt=""
              width="20"
              height="20"
            />
          </a>

          <a
            className={styles.socialIconLink}
            href="https://www.linkedin.com/in/edgar-leija"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile (opens in new tab)"
            title="LinkedIn"
          >
            <img
              className={styles.socialIcon}
              src="/icons/linkedin.svg"
              alt=""
              width="20"
              height="20"
            />
          </a>
        </div>

        <a className={styles.contactLink} href="mailto:edgarleija@gmail.com">
          Get in touch
        </a>
      </div>
    </header>
  );
};

export default Header;
