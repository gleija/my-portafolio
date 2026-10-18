import { globalStyle, style } from "@vanilla-extract/css";

export const diagram = style({
  margin: 36,
  minWidth: 0,
  border: "1px solid #3a3147",
  borderRadius: 12,
  background:
    "linear-gradient(180deg, rgba(25, 21, 35, 0.95), rgba(15, 14, 20, 0.92))",
  "@media": {
    "screen and (max-width: 700px)": { margin: 24 },
  },
});

export const diagramHeader = style({
  display: "flex",
  justifyContent: "space-between",
  flexWrap: "wrap",
  gap: 12,
  padding: "18px 24px",
  borderBottom: "1px solid #302b38",
  color: "#9287a3",
  fontFamily: "ui-monospace, Consolas, monospace",
  fontSize: 10,
  letterSpacing: 1.5,
  "@media": {
    "screen and (max-width: 700px)": { padding: "16px 18px" },
  },
});

export const graphqlDiagram = style({
  maxWidth: 960,
  margin: "0 auto",
  padding: "30px 24px 24px",
  "@media": {
    "screen and (max-width: 700px)": { padding: "22px 18px 18px" },
  },
});

export const node = style({
  minWidth: 0,
  padding: 24,
  border: "1px solid #51406b",
  borderRadius: 12,
  background: "rgba(35, 27, 49, 0.48)",
  textAlign: "center",
});

export const mainNode = style([
  node,
  {
    maxWidth: 490,
    margin: "0 auto",
  },
]);

export const pathNode = style([
  node,
  {
    borderColor: "#3b3347",
  },
]);

globalStyle(`${node} h4`, {
  margin: "0 0 8px",
  color: "#f5f5f7",
  fontSize: 20,
  lineHeight: 1.35,
});

globalStyle(`${node} p`, {
  margin: 0,
  color: "#c8c2d4",
  fontSize: 14,
  lineHeight: 1.6,
});

export const nodeLabel = style({
  display: "inline-block",
  marginBottom: 10,
  color: "#b8a4ff",
  fontFamily: "ui-monospace, Consolas, monospace",
  fontSize: 11,
  fontWeight: 600,
  letterSpacing: 1.2,
  textTransform: "uppercase",
});

export const nodeNote = style({
  display: "block",
  marginTop: 12,
  color: "#9287a3",
  fontSize: 12,
  lineHeight: 1.5,
});

export const verticalArrow = style({
  padding: 10,
  color: "#b8a4ff",
  fontSize: 26,
  textAlign: "center",
});

export const branches = style({
  display: "grid",
  gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
  padding: "12px 0",
  color: "#b8a4ff",
  fontSize: 26,
  textAlign: "center",
  "@media": {
    "screen and (max-width: 700px)": {
      display: "block",
      padding: "8px 0",
    },
  },
});

globalStyle(`${branches} span:last-child`, {
  "@media": {
    "screen and (max-width: 700px)": { display: "none" },
  },
});

export const paths = style({
  display: "grid",
  gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
  gap: 20,
  "@media": {
    "screen and (max-width: 700px)": {
      gridTemplateColumns: "1fr",
      gap: 28,
    },
  },
});

export const path = style({ minWidth: 0 });

export const pathLabel = style({
  display: "block",
  marginBottom: 12,
  color: "#b8a4ff",
  fontFamily: "ui-monospace, Consolas, monospace",
  fontSize: 11,
  fontWeight: 600,
  letterSpacing: 1.2,
  textAlign: "center",
});

export const pathNote = style({
  margin: "18px 0 0",
  color: "#a9a3b3",
  fontSize: 13,
  lineHeight: 1.6,
  textAlign: "center",
});

export const feedback = style({
  margin: "30px 0 0",
  padding: "18px 20px",
  border: "1px dashed #544566",
  borderRadius: 10,
  background: "rgba(18, 16, 25, 0.8)",
  "@media": {
    "screen and (max-width: 700px)": { padding: 16 },
  },
});

export const feedbackLabel = style({
  display: "inline-block",
  marginBottom: 10,
  color: "#b8a4ff",
  fontFamily: "ui-monospace, Consolas, monospace",
  fontSize: 11,
  fontWeight: 600,
  letterSpacing: 1.3,
});

globalStyle(`${feedback} p`, {
  margin: 0,
  color: "#babac4",
  fontSize: 14,
  lineHeight: 1.75,
});
