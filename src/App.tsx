import Header from "./components/Header/Header";
import "./App.css";
import { experience } from "./sections/Experience/experience.data";
import { skills } from "./sections/Skills/skills.data";
import { projects } from "./sections/Projects/projects.data";

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
const App = (): React.JSX.Element => {
  return (
    <main className="portfolio">
      <Header />
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
};

export default App;
