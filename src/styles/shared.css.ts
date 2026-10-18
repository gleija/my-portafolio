import { style } from "@vanilla-extract/css";

const MOBILE = "(max-width: 700px)";

export const eyebrow = style({
  color: "#a6a0b6",
  fontSize: 12,
  fontWeight: 600,
  letterSpacing: "3px",
});

export const section = style({
  position: "relative",
  maxWidth: 1400,
  margin: "0 auto",
  borderTop: "1px solid #4c405d",
  "::before": {
    position: "absolute",
    top: -2,
    left: "5%",
    width: "min(220px, 42%)",
    height: 3,
    borderRadius: 3,
    background:
      "linear-gradient(90deg, #b8a4ff 0%, #68538f 55%, transparent 100%)",
    content: '""',
    pointerEvents: "none",
  },
});

export const sectionHeading = style({
  position: "relative",
  maxWidth: 740,
  marginBottom: 64,
  "@media": {
    [MOBILE]: {
      marginBottom: 40,
    },
  },
});

export const sectionHeadingTitle = style({
  margin: "20px 0",
  fontSize: "clamp(36px, 5vw, 64px)",
  lineHeight: 1.1,
  letterSpacing: "-0.045em",
});

export const sectionHeadingLead = style({
  color: "#babac4",
  lineHeight: 1.75,
});

export const visuallyHidden = style({
  position: "absolute",
  width: 1,
  height: 1,
  margin: -1,
  padding: 0,
  border: 0,
  overflow: "hidden",
  clip: "rect(0, 0, 0, 0)",
  whiteSpace: "nowrap",
});
