import { style } from "@vanilla-extract/css";

import { section as sectionBase } from "../../styles/shared.css";

const TABLET = "(max-width: 1050px)";
const MOBILE = "(max-width: 700px)";
const MOTION_OK = "(prefers-reduced-motion: no-preference)";

const mono = "ui-monospace, Consolas, monospace";

export const section = style([
  sectionBase,
  {
    padding: "110px 5%",
    background:
      "linear-gradient(180deg, rgba(35, 27, 49, 0.26) 0%, rgba(23, 19, 31, 0.15) 55%, rgba(11, 11, 13, 0.04) 100%)",
    "@media": {
      [MOBILE]: {
        paddingBlock: 72,
      },
    },
  },
]);

export const grid = style({
  display: "grid",
  gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
  gap: 20,
  margin: 0,
  padding: 0,
  listStyle: "none",
  "@media": {
    [TABLET]: {
      gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
    },
    [MOBILE]: {
      gridTemplateColumns: "1fr",
      gap: 16,
    },
  },
});

export const card = style({
  display: "flex",
  flexDirection: "column",
  minWidth: 0,
  padding: 32,
  border: "1px solid #302b38",
  borderRadius: 12,
  background: "rgba(22, 19, 29, 0.7)",
  ":hover": {
    borderColor: "#665487",
    background: "rgba(35, 27, 49, 0.85)",
  },
  "@media": {
    [MOBILE]: {
      padding: 26,
    },
    [MOTION_OK]: {
      transition:
        "border-color 0.2s ease, background-color 0.2s ease, transform 0.2s ease",
      selectors: {
        "&:hover": {
          transform: "translateY(-3px)",
        },
      },
    },
  },
});

export const cardHeader = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginBottom: 32,
  "@media": {
    [MOBILE]: {
      marginBottom: 24,
    },
  },
});

export const cardNumber = style({
  color: "#898296",
  fontFamily: mono,
  fontSize: 12,
  letterSpacing: "2px",
});

export const cardSymbol = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: 38,
  height: 38,
  border: "1px solid #40364f",
  borderRadius: 9,
  background: "rgba(126, 92, 210, 0.09)",
  color: "#b8a4ff",
  fontSize: 19,
  fontWeight: 700,
  lineHeight: 1,
});

export const title = style({
  margin: "0 0 16px",
  color: "#f5f5f7",
  fontSize: 22,
  fontWeight: 650,
  lineHeight: 1.25,
  letterSpacing: "-0.025em",
});

export const description = style({
  margin: 0,
  color: "#babac4",
  fontSize: 15,
  lineHeight: 1.75,
});

export const technologies = style({
  display: "flex",
  flexWrap: "wrap",
  gap: 8,
  margin: "auto 0 0",
  padding: "32px 0 0",
  listStyle: "none",
  "@media": {
    [MOBILE]: {
      margin: 0,
      paddingTop: 24,
    },
  },
});

export const technology = style({
  display: "inline-flex",
  alignItems: "center",
  padding: "7px 10px",
  border: "1px solid #37313f",
  borderRadius: 5,
  background: "rgba(255, 255, 255, 0.02)",
  color: "#c8c2d4",
  fontSize: 12,
  lineHeight: 1.4,
});
