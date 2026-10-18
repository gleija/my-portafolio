import { style } from "@vanilla-extract/css";

const MOBILE = "(max-width: 700px)";

export const hero = style({
  maxWidth: 1400,
  margin: "0 auto",
  padding: "140px 5% 130px",
  "@media": {
    [MOBILE]: {
      paddingBlock: 100,
    },
  },
});

export const eyebrow = style({
  color: "#a6a0b6",
  fontSize: 12,
  fontWeight: 600,
  letterSpacing: "3px",
});

export const heading = style({
  margin: "32px 0",
  fontSize: "clamp(64px, 8vw, 116px)",
  fontWeight: 750,
  lineHeight: 0.98,
  letterSpacing: "-0.065em",
});

export const headingAccent = style({
  fontWeight: 650,
});

export const introduction = style({
  maxWidth: 610,
  color: "#babac4",
  fontSize: 19,
  lineHeight: 1.75,
  "@media": {
    [MOBILE]: {
      fontSize: 16,
    },
  },
});

export const primaryButton = style({
  display: "inline-block",
  marginTop: 32,
  padding: "18px 28px",
  background: "#426cf5",
  borderRadius: 5,
  color: "#fff",
  fontSize: 13,
  fontWeight: 700,
  letterSpacing: "1px",
  textDecoration: "none",
  ":hover": {
    background: "#5c82ff",
  },
  ":focus-visible": {
    outline: "2px solid #b8a4ff",
    outlineOffset: 5,
    borderRadius: 3,
  },
});
