import { globalStyle, style } from "@vanilla-extract/css";

const borderColor = "#2a2433";
const surfaceColor = "rgba(20, 20, 24, 0.88)";
const mutedText = "#babac4";
const subtleText = "#a6a0b6";
const accent = "#b8a4ff";
const strongText = "#f5f5f7";

export const root = style({
  marginTop: "32px",
  border: `1px solid ${borderColor}`,
  borderRadius: "18px",
  overflow: "hidden",
  background: "rgba(14, 14, 18, 0.88)",
});

export const header = style({
  display: "flex",
  justifyContent: "space-between",
  gap: "16px",
  padding: "16px 20px",
  borderBottom: `1px solid ${borderColor}`,
  background: "rgba(184, 164, 255, 0.04)",
  color: subtleText,
  fontSize: "11px",
  fontWeight: 700,
  letterSpacing: "2px",
  textTransform: "uppercase",
});

export const flow = style({
  display: "flex",
  alignItems: "stretch",
  gap: "18px",
  padding: "28px 24px",
  overflowX: "auto",

  "@media": {
    "(max-width: 900px)": {
      flexDirection: "column",
      gap: "14px",
      padding: "24px 20px",
      overflowX: "visible",
    },
  },
});

export const step = style({
  display: "flex",
  alignItems: "center",
  gap: "18px",
  flex: "1 1 0",

  "@media": {
    "(max-width: 900px)": {
      flexDirection: "column",
      alignItems: "stretch",
      gap: "12px",
    },
  },
});

export const node = style({
  display: "flex",
  gap: "16px",
  flex: "1 1 auto",
  minWidth: "0",
  padding: "20px",
  border: `1px solid ${borderColor}`,
  borderRadius: "16px",
  background: surfaceColor,
  boxShadow: "0 10px 28px rgba(0, 0, 0, 0.18)",

  "@media": {
    "(max-width: 700px)": {
      padding: "18px",
      gap: "14px",
    },
  },
});

export const nodeIcon = style({
  flexShrink: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "44px",
  height: "44px",
  borderRadius: "12px",
  border: `1px solid ${borderColor}`,
  background: "rgba(184, 164, 255, 0.08)",
  color: accent,
  fontSize: "20px",
  fontWeight: 700,
  lineHeight: 1,
});

export const nodeContent = style({
  minWidth: 0,
  flex: 1,
});

export const nodeLabel = style({
  display: "inline-block",
  marginBottom: "8px",
  color: accent,
  fontSize: "11px",
  fontWeight: 700,
  letterSpacing: "1.8px",
  textTransform: "uppercase",
});

globalStyle(`${nodeContent} h4`, {
  margin: "0 0 12px",
  color: strongText,
  fontSize: "20px",
  lineHeight: 1.2,
  letterSpacing: "-0.02em",
});

globalStyle(`${nodeContent} ul`, {
  margin: 0,
  paddingLeft: "18px",
  color: mutedText,
});

globalStyle(`${nodeContent} li`, {
  marginBottom: "8px",
  lineHeight: 1.6,
});

globalStyle(`${nodeContent} li:last-child`, {
  marginBottom: 0,
});

export const connector = style({
  flexShrink: 0,
  color: accent,
  fontSize: "26px",
  lineHeight: 1,
  alignSelf: "center",

  "@media": {
    "(max-width: 900px)": {
      alignSelf: "center",
      transform: "rotate(90deg)",
    },
  },
});

export const feedback = style({
  margin: "0 24px 24px",
  padding: "20px 22px",
  border: `1px solid ${borderColor}`,
  borderRadius: "14px",
  background: "rgba(184, 164, 255, 0.05)",

  "@media": {
    "(max-width: 900px)": {
      margin: "0 20px 20px",
      padding: "18px",
    },
  },
});

export const feedbackLabel = style({
  display: "inline-block",
  marginBottom: "10px",
  color: accent,
  fontSize: "11px",
  fontWeight: 700,
  letterSpacing: "1.8px",
  textTransform: "uppercase",
});

globalStyle(`${feedback} p`, {
  margin: 0,
  color: mutedText,
  lineHeight: 1.7,
});