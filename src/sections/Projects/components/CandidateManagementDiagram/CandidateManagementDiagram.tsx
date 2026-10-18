import * as styles from "./candidateManagementDiagram.css";

export const CandidateManagementDiagram = (): React.JSX.Element => {
  return (
    <div
      className={styles.diagram}
      aria-label="Conceptual candidate management GraphQL architecture"
    >
      <div className={styles.diagramHeader}>
        <span>CANDIDATE MANAGEMENT / GRAPHQL</span>
        <span>CONCEPTUAL VIEW</span>
      </div>

      <div className={styles.graphqlDiagram}>
        <div className={styles.mainNode}>
          <span className={styles.nodeLabel}>FRONTEND</span>
          <h4>Candidate Management UI</h4>
          <p>React · TypeScript · MobX</p>
          <span className={styles.nodeNote}>
            Candidate lists, filters, profiles and status actions
          </span>
        </div>

        <div className={styles.verticalArrow} aria-hidden="true">
          ↓
        </div>

        <div className={styles.mainNode}>
          <span className={styles.nodeLabel}>API BOUNDARY</span>
          <h4>GraphQL API</h4>
          <p>Queries · Mutations · Typed responses</p>
          <span className={styles.nodeNote}>
            A single integration surface for frontend workflows
          </span>
        </div>

        <div className={styles.branches} aria-hidden="true">
          <span>↓</span>
          <span>↓</span>
        </div>

        <div className={styles.paths}>
          <div className={styles.path}>
            <span className={styles.pathLabel}>QUERY PATH</span>
            <div className={styles.pathNode}>
              <h4>Candidate retrieval</h4>
              <p>Profiles · Filtering · Pagination · Search</p>
            </div>
            <p className={styles.pathNote}>
              Supports listing and finding candidate data
            </p>
          </div>

          <div className={styles.path}>
            <span className={styles.pathLabel}>STATUS UPDATE PATH</span>
            <div className={styles.pathNode}>
              <h4>Asynchronous processing</h4>
              <p>Queue · Lambda · Persistence · Event publication</p>
            </div>
            <p className={styles.pathNote}>
              Updates can complete downstream after a mutation
            </p>
          </div>
        </div>

        <div className={styles.feedback}>
          <span className={styles.feedbackLabel}>ENGINEERING CONSIDERATION</span>
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
};
