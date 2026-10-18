import { globalStyle } from "@vanilla-extract/css";

globalStyle(":root", {
  fontFamily:
    "Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  color: "#f5f5f7",
  background: "#0b0b0d",
  colorScheme: "dark",
  fontSynthesis: "none",
  textRendering: "optimizeLegibility",
  WebkitFontSmoothing: "antialiased",
  MozOsxFontSmoothing: "grayscale",
});

globalStyle("*, *::before, *::after", {
  boxSizing: "border-box",
});

globalStyle("html", {
  scrollBehavior: "smooth",
});

globalStyle("body", {
  margin: 0,
  minWidth: "320px",
  minHeight: "100vh",
});

globalStyle("#root", {
  minHeight: "100vh",
});

globalStyle("button, input, textarea", {
  font: "inherit",
});

globalStyle("a", {
  color: "inherit",
});

globalStyle("h1, h2, h3, p", {
  marginTop: 0,
});

globalStyle("::selection", {
  background: "#6250bd",
  color: "#fff",
});
