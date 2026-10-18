import { useRef } from "react";

import { MAIN_CONTENT_ID, navigation, sections } from "./sections/sections";
import { profile, socialLinks } from "./profile/profile";
import * as styles from "./header.css";
import { useActiveSection } from "./useActiveSection";

const sectionIds = navigation.map(({ id }) => id);

export const Header = (): React.JSX.Element => {
  const headerRef = useRef<HTMLElement>(null);
  const activeSection = useActiveSection(headerRef, sectionIds);

  return (
    <header ref={headerRef} className={styles.siteHeader}>
      <a className={styles.skipLink} href={`#${MAIN_CONTENT_ID}`}>
        Skip to main content
      </a>

      <a className={styles.brand} href={`#${sections.about}`}>
        {profile.name}
      </a>

      <nav className={styles.nav} aria-label="Main">
        {navigation.map((item) => {
          const isActive = activeSection === item.id;

          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={
                isActive
                  ? `${styles.navLink} ${styles.navLinkActive}`
                  : styles.navLink
              }
              aria-current={isActive ? "location" : undefined}
            >
              {item.label}
            </a>
          );
        })}
      </nav>

      <div className={styles.headerActions}>
        <div
          className={styles.headerSocialLinks}
          role="group"
          aria-label="Social profiles"
        >
          {socialLinks.map((link) => (
            <a
              key={link.id}
              className={styles.socialIconLink}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${link.label} profile (opens in new tab)`}
            >
              <img
                className={styles.socialIcon}
                src={link.icon}
                alt=""
                width="20"
                height="20"
              />
            </a>
          ))}
        </div>

        <a className={styles.contactLink} href={`mailto:${profile.email}`}>
          Get in touch
        </a>
      </div>
    </header>
  );
};
