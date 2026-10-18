import { style } from "@vanilla-extract/css";

import { section as sectionBase } from "../../styles/shared.css";

const TABLET = "(max-width: 1050px)";
const MOBILE = "(max-width: 700px)";
const ABOVE_MOBILE = "(min-width: 701px)";

const mono = "ui-monospace, Consolas, monospace";

export const section = style([
  sectionBase,
  {
    padding: "110px 5% 140px",
    background:
      "linear-gradient(180deg, rgba(27, 23, 36, 0.14) 0%, rgba(11, 11, 13, 0) 55%)",
    "@media": {
      [MOBILE]: {
        padding: "72px 5% 100px",
      },
    },
  },
]);

export const list = style({
  display: "grid",
  gap: 48,
  "@media": {
    [MOBILE]: {
      gap: 28,
    },
  },
});

export const card = style({
  minWidth: 0,
  overflow: "hidden",
  border: "1px solid #302b38",
  borderRadius: 14,
  background:
    "linear-gradient(135deg, rgba(42, 31, 62, 0.35), rgba(15, 14, 19, 0.5) 55%)",
});

export const cardTop = style({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-between",
  gap: 16,
  padding: "28px 36px",
  borderBottom: "1px solid #302b38",
  "@media": {
    [MOBILE]: {
      padding: 24,
    },
  },
});

export const number = style({
  color: "#b8a4ff",
  fontFamily: mono,
  fontSize: 12,
  fontWeight: 600,
  letterSpacing: "1.6px",
});

export const period = style({
  color: "#9d9da9",
  fontSize: 13,
});

export const intro = style({
  display: "grid",
  gridTemplateColumns: "1.1fr 0.9fr",
  alignItems: "end",
  gap: 48,
  padding: "56px 36px",
  "@media": {
    [TABLET]: {
      gridTemplateColumns: "1fr",
      gap: 28,
    },
    [MOBILE]: {
      padding: "36px 24px",
    },
  },
});

export const category = style({
  margin: "0 0 18px",
  color: "#a6a0b6",
  fontSize: 11,
  fontWeight: 600,
  letterSpacing: "2px",
});

export const title = style({
  maxWidth: 620,
  margin: 0,
  fontSize: "clamp(32px, 4vw, 52px)",
  lineHeight: 1.1,
  letterSpacing: "-0.045em",
});

export const subtitle = style({
  margin: "20px 0 0",
  color: "#b8a4ff",
  fontSize: 17,
  lineHeight: 1.6,
});

export const overview = style({
  maxWidth: 500,
  margin: 0,
  color: "#babac4",
  fontSize: 16,
  lineHeight: 1.8,
});

export const details = style({
  display: "grid",
  gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
  margin: "0 36px",
  borderTop: "1px solid #302b38",
  "@media": {
    [MOBILE]: {
      gridTemplateColumns: "1fr",
      margin: "0 24px",
    },
  },
});

export const detail = style({
  padding: "36px 28px 36px 0",
  borderBottom: "1px solid #302b38",
  "@media": {
    [ABOVE_MOBILE]: {
      selectors: {
        "&:nth-child(even)": {
          paddingLeft: 28,
          paddingRight: 0,
          borderLeft: "1px solid #302b38",
        },
      },
    },
    [MOBILE]: {
      padding: "26px 0",
    },
  },
});

export const detailLabel = style({
  margin: 0,
  color: "#b8a4ff",
  fontFamily: mono,
  fontSize: 11,
  fontWeight: 600,
  letterSpacing: "1.5px",
  textTransform: "uppercase",
});

export const detailText = style({
  maxWidth: 520,
  margin: "18px 0 0",
  color: "#babac4",
  fontSize: 15,
  lineHeight: 1.8,
});

export const footer = style({
  display: "flex",
  flexWrap: "wrap",
  alignItems: "flex-end",
  justifyContent: "space-between",
  gap: 24,
  padding: "0 36px 36px",
  "@media": {
    [MOBILE]: {
      padding: "0 24px 28px",
    },
  },
});

export const tags = style({
  display: "flex",
  flexWrap: "wrap",
  gap: 8,
  margin: 0,
  padding: 0,
  listStyle: "none",
});

export const tag = style({
  padding: "7px 12px",
  border: "1px solid #37313f",
  borderRadius: 5,
  color: "#c8c2d4",
  fontSize: 12,
});

export const confidentiality = style({
  margin: 0,
  color: "#898296",
  fontSize: 12,
});
