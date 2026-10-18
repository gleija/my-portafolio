import { useEffect, useState } from "react";
import "./App.css";

const navigation = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
];

const experience = [
  {
    period: "2024 — 2026",
    location: "Tokyo, Japan",
    role: "Senior Software Engineer (Frontend)",
    industry: "Japan's Leading Enterprise Collaboration Software Provider",
    website: "https://cybozu.co.jp/",
    description:
      "Took primary engineering ownership of a React and TypeScript design system, working on component development, modernization, accessibility, and keeping components aligned with design requirements. Focused on reusable component APIs and improving the developer experience for product teams.",
    technologies: [
      "React",
      "TypeScript",
      "Design Systems",
      "Accessibility",
      "vanilla-extract",
    ],
  },
  {
    period: "2023",
    location: "Tokyo, Japan",
    role: "Senior Software Engineer (Frontend)",
    industry: "Global Internet Services & Digital Commerce Group",
    website: "https://www.rakuten.co.jp/",
    description:
      "Worked on a major checkout page revamp, improving the user experience and helping increase conversion rates. Also contributed to the development and maintenance of a React-based design system, building reusable components to support consistency across teams and applications.",
    technologies: ["React", "TypeScript", "CSS"],
  },
  {
    period: "2013 — 2023",
    location: "Melbourne, Australia",
    role: "Senior Software Engineer",
    industry:
      "Market-Leading Employment Technology Platform — Australia & APAC",
    website: "https://www.seek.com.au/",
    description:
      "Spent more than 10 years building and improving recruitment software, working across frontend development, backend integrations, and engineering practices.\n\nOver the years, I worked on a wide range of projects and initiatives. Some highlights include building candidate management applications, developing Role Requirements features that helped hirers filter and shortlist candidates, contributing to the migration from a monolithic architecture to AWS-based cloud services, and moving from REST APIs to GraphQL.\n\nI was also part of the engineering teams that transitioned from waterfall to agile development, experiencing firsthand how more collaborative and iterative ways of working changed the way we built and delivered software.",
    technologies: ["React", "TypeScript", "GraphQL", "AWS", "Node.js"],
  },
];

const skills = [
  {
    number: "01",
    title: "Frontend Engineering",
    description:
      "Building scalable, maintainable web applications with modern JavaScript and React architectures.",
    technologies: [
      "React",
      "TypeScript",
      "JavaScript",
      "Redux Toolkit",
      "React Router",
      "SSR / CSR",
      "State Management",
    ],
  },
  {
    number: "02",
    title: "Design Systems & UI Architecture",
    description:
      "Creating reusable component foundations that support consistency, accessibility, and developer experience.",
    technologies: [
      "Component Libraries",
      "Accessibility",
      "Storybook",
      "Design Tokens",
      "CSS Architecture",
      "vanilla-extract",
    ],
  },
  {
    number: "03",
    title: "Backend & Cloud",
    description:
      "Working with REST and GraphQL APIs, Node.js backend services, and AWS infrastructure. Experience with serverless architectures using Lambda, SQS, SNS, and DynamoDB for asynchronous processing, messaging, and data persistence, alongside S3 for cloud storage.",
    technologies: [
      "Node.js",
      "Express",
      "GraphQL",
      "REST APIs",
      "AWS Lambda",
      "DynamoDB",
      "SQS",
      "SNS",
      "S3",
    ],
  },
  {
    number: "04",
    title: "Testing & Engineering Quality",
    description:
      "Experience across unit, integration, and end-to-end testing using Jest, React Testing Library, and Cypress. Applying automated testing, code reviews, and continuous integration practices to improve software reliability and maintainability.",
    technologies: [
      "Jest",
      "React Testing Library",
      "Cypress",
      "Test Automation",
      "Code Reviews",
      "CI/CD",
    ],
  },
  {
    number: "05",
    title: "Developer Tooling & Delivery",
    description:
      "Experience with frontend build tools and development workflows using Webpack, Vite, and pnpm, alongside CI/CD pipelines using Buildkite and GitHub Actions. Also worked with Docker and AWS CDK to support application development, infrastructure configuration, and deployment processes.",
    technologies: [
      "Vite",
      "pnpm",
      "Webpack",
      "Docker",
      "GitHub Actions",
      "Jenkins",
      "Buildkite",
      "AWS CDK",
    ],
  },
  {
    number: "06",
    title: "AI-Augmented Engineering",
    description:
      "Exploring how AI-assisted tools can support software development, from understanding unfamiliar codebases and reviewing implementations to improving development workflows. Combining AI assistance with established engineering practices, critical thinking, and human validation.",
    technologies: [
      "AI-Assisted Development",
      "Prompt Engineering",
      "Structured AI Workflows",
      "LLM-Assisted Code Analysis",
    ],
  },
];

const projects = [
  {
    number: "01",
    period: "2024 — 2026",
    category: "FRONTEND ARCHITECTURE / DESIGN SYSTEMS",
    title: "Enterprise Design System Modernization",
    subtitle:
      "Modernizing a shared component library for enterprise software products.",
    overview:
      "My work focused on developing reusable React and TypeScript components, migrating styling from Emotion to vanilla-extract, improving accessibility, and implementing approved design specifications across the component library.",
    challenge:
      "The component library needed to evolve alongside its design requirements while supporting existing product teams. This involved modernizing styling patterns, defining clearer component APIs, and ensuring visual and behavioral consistency.",
    contribution:
      "Took primary engineering responsibility for component modernization, including migrating components from Emotion to vanilla-extract, refining React and TypeScript APIs, implementing accessibility behavior, and documenting component usage in Storybook.",
    process:
      "Worked with Figma specifications and design guidance to implement component anatomy, variants, states, and responsive behavior. Used Storybook to document and review implementations, with iterative feedback and code review throughout development.",
    outcome:
      "Delivered and advanced reusable component implementations and documentation as part of the broader modernization effort, helping establish a clearer foundation for consistent UI development and future component adoption.",
    technologies: [
      "React",
      "TypeScript",
      "Figma",
      "Storybook",
      "vanilla-extract",
      "Emotion",
      "Accessibility",
      "Design Tokens",
    ],
  },
  {
    number: "02",
    period: "During 2013 — 2023",
    category: "FRONTEND ARCHITECTURE / GRAPHQL / CLOUD INTEGRATION",
    title: "Candidate Management Platform & GraphQL Integration",
    subtitle:
      "Building and improving a candidate management application used by recruitment teams.",
    overview:
      "My work focused on developing React and TypeScript features for candidate management, integrating GraphQL APIs for candidate retrieval, filtering, and status updates, and contributing to asynchronous backend processing using AWS services.",
    challenge:
      "Candidate management involves interconnected workflows: retrieving candidate profiles, filtering applications, managing statuses, and keeping the user interface consistent with backend data. Evolving these workflows required integrating modern frontend architecture with GraphQL services and asynchronous backend processing.",
    contribution:
      "Worked on a production React application using TypeScript, MobX-based state management, and GraphQL. Contributed to candidate data queries, filtering functionality, status management, frontend testing, and selected AWS Lambda changes in collaboration with backend engineers.",
    process:
      "Used GraphQL queries and mutations to integrate candidate management features with backend services. Developed GraphQL mocks to support isolated frontend development and test scenarios, including pagination, filtering, empty results, and error handling. Worked with asynchronous status processing and frontend refresh behavior to account for eventual consistency.",
    outcome:
      "Contributed to the ongoing evolution of a production candidate management platform, improving the implementation and test coverage of candidate-management workflows. Supported changes across frontend and backend boundaries while maintaining a clear division of responsibility with backend service owners.",
    technologies: [
      "React",
      "TypeScript",
      "GraphQL",
      "MobX",
      "AWS Lambda",
      "SQS",
      "DynamoDB",
      "Jest",
      "API Integration",
    ],
  },
];

function DesignSystemDiagram() {
  const steps = [
    {
      label: "Figma",
      title: "Design source of truth",
      icon: "✦",
      details: [
        "Component anatomy",
        "Variants and states",
        "Spacing and visual rules",
        "Design guidance",
      ],
    },
    {
      label: "React + TypeScript",
      title: "Component implementation",
      icon: "</>",
      details: [
        "Reusable APIs",
        "vanilla-extract styling",
        "Accessibility behavior",
        "State and interaction logic",
      ],
    },
    {
      label: "Storybook",
      title: "Documentation and review",
      icon: "□",
      details: [
        "Usage examples",
        "States and variants",
        "Review surface",
        "Developer reference",
      ],
    },
    {
      label: "Product Teams",
      title: "Consumption across products",
      icon: "◇",
      details: [
        "Shared UI foundations",
        "Consistent implementation",
        "Reusable components",
        "Developer experience",
      ],
    },
  ];

  return (
    <div
      className="project-diagram"
      aria-label="Conceptual design system workflow"
    >
      <div className="project-diagram-header">
        <span>DESIGN SYSTEM WORKFLOW</span>
        <span>CONCEPTUAL VIEW</span>
      </div>
      <div className="project-diagram-flow">
        {steps.map((step, index) => (
          <div className="diagram-step" key={step.label}>
            <div className="diagram-node">
              <div className="diagram-node-icon" aria-hidden="true">
                {step.icon}
              </div>
              <div className="diagram-node-content">
                <span className="diagram-node-label">{step.label}</span>
                <h4>{step.title}</h4>
                <ul>
                  {step.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              </div>
            </div>
            {index < steps.length - 1 && (
              <span className="diagram-connector" aria-hidden="true">
                →
              </span>
            )}
          </div>
        ))}
      </div>
      <div className="project-diagram-feedback">
        <span className="project-diagram-feedback-label">FEEDBACK LOOP</span>
        <p>
          Figma specifications informed component implementation, Storybook
          supported documentation and review, and product usage fed back into
          future refinement.
        </p>
      </div>
    </div>
  );
}

function CandidateManagementDiagram() {
  return (
    <div
      className="project-diagram"
      aria-label="Conceptual candidate management GraphQL architecture"
    >
      <div className="project-diagram-header">
        <span>CANDIDATE MANAGEMENT / GRAPHQL</span>
        <span>CONCEPTUAL VIEW</span>
      </div>
      <div className="graphql-diagram">
        <div className="graphql-node graphql-main-node">
          <span className="diagram-node-label">FRONTEND</span>
          <h4>Candidate Management UI</h4>
          <p>React · TypeScript · MobX</p>
          <span className="graphql-node-note">
            Candidate lists, filters, profiles and status actions
          </span>
        </div>
        <div className="graphql-vertical-arrow" aria-hidden="true">
          ↓
        </div>
        <div className="graphql-node graphql-main-node">
          <span className="diagram-node-label">API BOUNDARY</span>
          <h4>GraphQL API</h4>
          <p>Queries · Mutations · Typed responses</p>
          <span className="graphql-node-note">
            A single integration surface for frontend workflows
          </span>
        </div>
        <div className="graphql-branches" aria-hidden="true">
          <span>↓</span>
          <span>↓</span>
        </div>
        <div className="graphql-paths">
          <div className="graphql-path">
            <span className="graphql-path-label">QUERY PATH</span>
            <div className="graphql-node">
              <h4>Candidate retrieval</h4>
              <p>Profiles · Filtering · Pagination · Search</p>
            </div>
            <p className="graphql-path-note">
              Supports listing and finding candidate data
            </p>
          </div>
          <div className="graphql-path">
            <span className="graphql-path-label">STATUS UPDATE PATH</span>
            <div className="graphql-node">
              <h4>Asynchronous processing</h4>
              <p>Queue · Lambda · Persistence · Event publication</p>
            </div>
            <p className="graphql-path-note">
              Updates can complete downstream after a mutation
            </p>
          </div>
        </div>
        <div className="project-diagram-feedback graphql-note">
          <span className="project-diagram-feedback-label">
            ENGINEERING CONSIDERATION
          </span>
          <p>
            The query and status-update paths are shown separately to convey
            asynchronous processing and eventual consistency. This is a
            simplified illustration, not a reproduction of proprietary service
            boundaries.
          </p>
        </div>
      </div>
    </div>
  );
}

function App() {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const sections = navigation
      .map(({ id }) => document.getElementById(id))
      .filter((element): element is HTMLElement => element !== null);

    if (sections.length === 0) return;

    let frame = 0;
    const updateActiveSection = () => {
      const header = document.querySelector<HTMLElement>(".site-header");
      const headerHeight = header?.getBoundingClientRect().height ?? 0;
      const activationLine = headerHeight + 48;
      let currentSection = sections[0].id;

      for (const section of sections) {
        if (section.getBoundingClientRect().top <= activationLine) {
          currentSection = section.id;
        }
      }

      const atPageBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 4;

      if (atPageBottom) currentSection = sections[sections.length - 1].id;
      setActiveSection((previous) =>
        previous === currentSection ? previous : currentSection,
      );
    };

    const scheduleUpdate = () => {
      if (frame !== 0) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        updateActiveSection();
      });
    };

    updateActiveSection();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);

    return () => {
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      if (frame !== 0) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <main className="portfolio">
      <header className="site-header">
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

      <section className="hero" id="about">
        <p className="eyebrow">SOFTWARE ENGINEER / FRONTEND SPECIALIST</p>
        <h1>
          Software
          <br />
          <em>is craft.</em>
        </h1>
        <p className="introduction">
          I'm Gary, a software engineer with over 10 years of experience
          building web applications, design systems, and developer tools.
        </p>
        <a className="primary-button" href="#experience">
          Explore my work →
        </a>
      </section>

      <section className="experience-section" id="experience">
        <div className="section-heading">
          <p className="eyebrow">01 / PROFESSIONAL EXPERIENCE</p>
          <h2>Engineering across markets.</h2>
          <p>
            I've spent more than 10 years working as a software engineer, first
            in Australia and then in Japan. Most of my work has been around
            building web applications, improving the way they're put together,
            and making life a little easier for the developers working on them.
          </p>
        </div>
        <div className="experience-list">
          {experience.map((item) => (
            <article className="experience-item" key={item.industry}>
              <div className="experience-meta">
                <span>{item.period}</span>
                <span>{item.location}</span>
              </div>
              <div className="experience-details">
                <h3>{item.role}</h3>
                <p className="experience-industry">{item.industry}</p>
                <p>{item.description}</p>
                <div className="experience-tags" aria-label="Technologies used">
                  {item.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>
                <a
                  className="experience-link"
                  href={item.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Explore website for ${item.industry} (opens in new tab)`}
                >
                  Explore platform <span aria-hidden="true">↗</span>
                </a>
              </div>
            </article>
          ))}
        </div>
        <div className="international-note">
          <span className="eyebrow">INTERNATIONAL ENGINEERING EXPERIENCE</span>
          <h3>Australia → Japan · 2023</h3>
          <p>
            After spending more than 10 years working as a Software Engineer in
            Australia, I was recruited and sponsored to relocate to Tokyo. Since
            then, I've had the opportunity to work with engineering teams in
            Japan and experience different approaches to building software.
          </p>
        </div>
      </section>

      <section className="skills-section" id="skills">
        <div className="section-heading">
          <p className="eyebrow">02 / TECHNICAL EXPERTISE</p>
          <h2>Built on fundamentals. Focused on craft.</h2>
          <p>
            Most of my experience is in frontend engineering, particularly React
            and TypeScript, but I've never limited myself to just the frontend.
            Over the years, I've also worked with backend services, cloud
            infrastructure, testing, and the tools that developers rely on every
            day.
          </p>
        </div>
        <div className="skills-grid">
          {skills.map((skill) => (
            <article className="skill-card" key={skill.number}>
              <div className="skill-card-header">
                <span className="skill-card-number">{skill.number}</span>
                <span className="skill-card-symbol" aria-hidden="true">
                  {skill.number === "01" && "</>"}
                  {skill.number === "02" && "◇"}
                  {skill.number === "03" && "☁"}
                  {skill.number === "04" && "✓"}
                  {skill.number === "05" && "⚙"}
                  {skill.number === "06" && "✦"}
                </span>
              </div>
              <h3>{skill.title}</h3>
              <p className="skill-description">{skill.description}</p>
              <div className="skill-technologies">
                {skill.technologies.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="projects-section" id="projects">
        <div className="section-heading">
          <p className="eyebrow">03 / SELECTED ENGINEERING WORK</p>
          <h2>Real problems. Thoughtful solutions.</h2>
          <p>
            Selected case studies from production engineering work. Commercial
            source code and internal implementation details remain private;
            these examples focus on engineering challenges, contributions, and
            technical decisions.
          </p>
        </div>

        <div className="projects-list">
          {projects.map((project) => (
            <article className="project-card" key={project.number}>
              <div className="project-card-top">
                <span className="project-number">
                  FEATURED PROJECT / {project.number}
                </span>
                <span className="project-period">{project.period}</span>
              </div>
              <div className="project-intro">
                <div>
                  <p className="project-category">{project.category}</p>
                  <h3>{project.title}</h3>
                  <p className="project-subtitle">{project.subtitle}</p>
                </div>
                <p className="project-overview">{project.overview}</p>
              </div>
              <div className="project-content">
                <div className="project-detail">
                  <span className="project-detail-label">
                    01 / THE CHALLENGE
                  </span>
                  <p>{project.challenge}</p>
                </div>
                <div className="project-detail">
                  <span className="project-detail-label">
                    02 / MY CONTRIBUTION
                  </span>
                  <p>{project.contribution}</p>
                </div>
                <div className="project-detail">
                  <span className="project-detail-label">
                    03 / ENGINEERING PROCESS
                  </span>
                  <p>{project.process}</p>
                </div>
                <div className="project-detail">
                  <span className="project-detail-label">04 / OUTCOME</span>
                  <p>{project.outcome}</p>
                </div>
              </div>
              {project.number === "01" ? (
                <DesignSystemDiagram />
              ) : (
                <CandidateManagementDiagram />
              )}
              <div className="project-footer">
                <div className="project-tags">
                  {project.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>
                <span className="project-confidentiality">
                  Anonymized professional case study
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default App;