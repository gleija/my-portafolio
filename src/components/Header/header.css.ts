import { style } from "@vanilla-extract/css";

const colors = {
  white: "#fff",
  textMuted: "#a6a3ae",
  textSoft: "#d0d0d5",
  textStrong: "#f5f5f7",
  accent: "#b8a4ff",
  border: "#37313f",
} as const;

const MOBILE = "(max-width: 700px)";
const TABLET = "(max-width: 1050px)";
const REDUCED_MOTION = "(prefers-reduced-motion: reduce)";

const link = style({
  color: colors.textSoft,
  textDecoration: "none",
  ":hover": {
    color: colors.white,
  },
});

const focusRing = style({
  ":focus-visible": {
    outline: `2px solid ${colors.accent}`,
    outlineOffset: 5,
    borderRadius: 3,
  },
});

export const siteHeader = style({
  position: "sticky",
  top: 0,
  zIndex: 100,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: 24,
  minHeight: 80,
  padding: "16px 5%",
  borderBottom: `1px solid ${colors.border}`,
  background: "rgba(13, 12, 18, 0.88)",
  WebkitBackdropFilter: "blur(18px)",
  backdropFilter: "blur(18px)",
  "@media": {
    [TABLET]: {
      gap: 16,
    },
    [MOBILE]: {
      display: "grid",
      gridTemplateColumns: "minmax(0, 1fr) auto",
      gap: "4px 12px",
      minHeight: 0,
      padding: "10px 5% 0",
    },
  },
});

export const brand = style([
  link,
  focusRing,
  {
    flexShrink: 0,
    color: colors.white,
    fontSize: 18,
    fontWeight: 700,
    "@media": {
      [MOBILE]: {
        fontSize: 16,
      },
    },
  },
]);

export const nav = style({
  display: "flex",
  alignItems: "center",
  gap: 32,
  "::-webkit-scrollbar": {
    display: "none",
  },
  "@media": {
    [TABLET]: {
      gap: 20,
    },
    [MOBILE]: {
      gridColumn: "1 / -1",
      width: "100%",
      minWidth: 0,
      gap: 22,
      overflowX: "auto",
      flexWrap: "nowrap",
      paddingBottom: 2,
      scrollbarWidth: "none",
    },
  },
});

export const navLink = style([
  link,
  focusRing,
  {
    position: "relative",
    display: "inline-flex",
    alignItems: "center",
    minHeight: 44,
    padding: "9px 0",
    color: colors.textMuted,
    fontSize: 14,
    fontWeight: 500,
    whiteSpace: "nowrap",
    transition: "color 0.2s ease",
    ":hover": {
      color: colors.textStrong,
    },
    "::after": {
      position: "absolute",
      right: 0,
      bottom: 2,
      left: 0,
      height: 2,
      borderRadius: 2,
      background: colors.accent,
      content: '""',
      opacity: 0,
      transform: "scaleX(0.55)",
      transition: "opacity 0.2s ease, transform 0.2s ease",
    },
    "@media": {
      [MOBILE]: {
        minHeight: 42,
        fontSize: 13,
      },
      [REDUCED_MOTION]: {
        transition: "none",
        selectors: {
          "&::after": {
            transition: "none",
          },
        },
      },
    },
  },
]);

export const navLinkActive = style({
  color: colors.textStrong,
  "::after": {
    opacity: 1,
    transform: "scaleX(1)",
  },
});

export const headerActions = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  gap: 16,
  flexShrink: 0,
  "@media": {
    [TABLET]: {
      gap: 8,
    },
    [MOBILE]: {
      gap: 5,
    },
  },
});

export const headerSocialLinks = style({
  display: "flex",
  alignItems: "center",
  gap: 6,
  "@media": {
    [TABLET]: {
      gap: 0,
    },
  },
});

export const socialIconLink = style([
  link,
  {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: 40,
    height: 40,
    border: "1px solid transparent",
    borderRadius: 8,
    transition: "background-color 0.2s ease, border-color 0.2s ease",
    ":hover": {
      borderColor: "#51406b",
      background: "rgba(126, 92, 210, 0.15)",
    },
    ":focus-visible": {
      outline: `2px solid ${colors.accent}`,
      outlineOffset: 3,
    },
    "@media": {
      [MOBILE]: {
        width: 34,
        height: 34,
      },
    },
  },
]);

export const socialIcon = style({
  display: "block",
  width: 20,
  height: 20,
  filter: "invert(85%)",
  selectors: {
    [`${socialIconLink}:hover &`]: {
      filter: "invert(100%)",
    },
  },
  "@media": {
    [MOBILE]: {
      width: 18,
      height: 18,
    },
  },
});

export const contactLink = style([
  link,
  focusRing,
  {
    flexShrink: 0,
    border: "1px solid #44444c",
    borderRadius: 6,
    padding: "12px 18px",
    fontSize: 14,
    whiteSpace: "nowrap",
    "@media": {
      [MOBILE]: {
        padding: "8px 10px",
        fontSize: 12,
      },
    },
  },
]);
