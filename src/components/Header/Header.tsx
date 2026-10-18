import { useRef } from "react";

import { useActiveSection } from "./useActiveSection";
import "./Header.css";

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
    <header ref={headerRef} className="site-header">
      <a className="brand" href="#about">
        Gary Leija
      </a>

      <nav className="site-navigation" aria-label="Main navigation">
        {navigation.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={
              activeSection === item.id
                ? "nav-link nav-link-active"
                : "nav-link"
            }
            aria-current={activeSection === item.id ? "location" : undefined}
          >
            {item.label}
          </a>
        ))}
      </nav>

      <div className="header-actions">
        <div className="header-social-links" aria-label="Social profiles">
          <a
            className="social-icon-link"
            href="https://github.com/gleija"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile (opens in new tab)"
            title="GitHub"
          >
            <img src="/icons/github.svg" alt="" width="20" height="20" />
          </a>

          <a
            className="social-icon-link"
            href="https://www.linkedin.com/in/edgar-leija"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile (opens in new tab)"
            title="LinkedIn"
          >
            <img src="/icons/linkedin.svg" alt="" width="20" height="20" />
          </a>
        </div>

        <a className="contact-link" href="mailto:edgarleija@gmail.com">
          Get in touch
        </a>
      </div>
    </header>
  );
};

export default Header;
