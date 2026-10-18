import { style } from "@vanilla-extract/css";

import { section as sectionBase } from "../../styles/shared.css";

const MOBILE = "(max-width: 700px)";

export const section = style([
  sectionBase,
  {
    padding: "110px 5%",
    background:
      "linear-gradient(180deg, rgba(27, 23, 36, 0.12) 0%, rgba(11, 11, 13, 0) 58%)",
    "@media": {
      [MOBILE]: {
        paddingBlock: 72,
      },
    },
  },
]);

export const item = style({
  display: "grid",
  gridTemplateColumns: "220px minmax(0, 1fr)",
  gap: 48,
  padding: "40px 0",
  borderTop: "1px solid #29292d",
  "@media": {
    [MOBILE]: {
      gridTemplateColumns: "1fr",
      gap: 18,
    },
  },
});

export const meta = style({
  display: "flex",
  flexDirection: "column",
  gap: 8,
  color: "#9d9da9",
  fontSize: 13,
  "@media": {
    [MOBILE]: {
      flexDirection: "row",
      flexWrap: "wrap",
      gap: 12,
    },
  },
});

export const role = style({
  margin: "0 0 12px",
  fontSize: 25,
});

export const industry = style({
  color: "#b8a4ff",
  fontWeight: 600,
});

export const description = style({
  maxWidth: 740,
  marginTop: 16,
  color: "#babac4",
  lineHeight: 1.7,
  whiteSpace: "pre-line",
});

export const tags = style({
  display: "flex",
  flexWrap: "wrap",
  gap: 8,
  margin: "24px 0 0",
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

export const link = style({
  display: "flex",
  width: "fit-content",
  alignItems: "center",
  gap: 10,
  marginTop: 40,
  padding: 0,
  color: "#b8a4ff",
  fontSize: 14,
  fontWeight: 600,
  textDecoration: "none",
  ":hover": {
    color: "#fff",
    textDecoration: "underline",
  },
  ":focus-visible": {
    outline: "2px solid #b8a4ff",
    outlineOffset: 5,
    borderRadius: 2,
  },
});

export const note = style({
  marginTop: 48,
  padding: 32,
  border: "1px solid #37313f",
  borderRadius: 12,
  background: "rgba(126, 92, 210, 0.06)",
  "@media": {
    [MOBILE]: {
      padding: 24,
    },
  },
});

export const noteTitle = style({
  margin: "16px 0",
  fontSize: 28,
  letterSpacing: "-0.03em",
});

export const noteText = style({
  maxWidth: 780,
  margin: 0,
  fontSize: 18,
  lineHeight: 1.65,
  "@media": {
    [MOBILE]: {
      fontSize: 16,
    },
  },
});
