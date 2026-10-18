export type DiagramId = "design-system" | "candidate-management";

export type Project = {
  number: string;
  diagram: DiagramId;
  period: string;
  category: string;
  title: string;
  subtitle: string;
  overview: string;
  challenge: string;
  contribution: string;
  process: string;
  outcome: string;
  technologies: readonly string[];
};

export const projects: readonly Project[] = [
  {
    number: "01",
    diagram: "design-system",
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
    diagram: "candidate-management",
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
