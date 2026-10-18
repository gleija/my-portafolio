import * as styles from "./designSystemDiagram.css";

type WorkflowStep = {
  label: string;
  title: string;
  icon: string;
  details: readonly string[];
};

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
] satisfies readonly WorkflowStep[];

export const DesignSystemDiagram = (): React.JSX.Element => {
  return (
    <div
      className={styles.root}
      aria-label="Conceptual design system workflow"
    >
      <div className={styles.header}>
        <span>DESIGN SYSTEM WORKFLOW</span>
        <span>CONCEPTUAL VIEW</span>
      </div>

      <div className={styles.flow}>
        {steps.map((step, index) => (
          <div className={styles.step} key={step.label}>
            <div className={styles.node}>
              <div className={styles.nodeIcon} aria-hidden="true">
                {step.icon}
              </div>

              <div className={styles.nodeContent}>
                <span className={styles.nodeLabel}>{step.label}</span>
                <h4>{step.title}</h4>

                <ul>
                  {step.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              </div>
            </div>

            {index < steps.length - 1 && (
              <span className={styles.connector} aria-hidden="true">
                →
              </span>
            )}
          </div>
        ))}
      </div>

      <div className={styles.feedback}>
        <span className={styles.feedbackLabel}>FEEDBACK LOOP</span>

        <p>
          Figma specifications informed component implementation, Storybook
          supported documentation and review, and product usage fed back into
          future refinement.
        </p>
      </div>
    </div>
  );
};