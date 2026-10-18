import Header from "./components/Header/Header";
import "./App.css";
import { experience } from "./sections/Experience/experience.data";
import { skills } from "./sections/Skills/skills.data";
import { projects } from "./sections/Projects/projects.data";
import { DesignSystemDiagram } from "./sections/Projects/components/DesignSystemDiagram/DesignSystemDiagram";
import { CandidateManagementDiagram } from "./sections/Projects/components/CandidateManagementDiagram/CandidateManagementDiagram";

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
