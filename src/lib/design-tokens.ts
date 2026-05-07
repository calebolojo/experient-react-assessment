export const getDesignTokens = (mode: any) => ({
  palette: {
    mode,
    brand: { base: "#FF6E13", light: "#F4843E", dark: "#CA5811" },
    primary: {
      main: mode === "light" ? "#F8F8F6" : "#373734",
    },
    background: {
      default: mode === "light" ? "#F8F8F6" : "#373734",
      white: mode === "light" ? "#FFFFFF" : "#373734",
      secondary: mode === "light" ? "#FFFFFF" : "#555555",
      tertiary: mode === "light" ? "#FFFFFF" : "#4A4A4A",
    },
    text: {
      primary: mode === "light" ? "#373734 " : "#FFFFFF",
      secondary: mode === "light" ? "#585858 " : "#D7D7D7",
      tertiary: mode === "light" ? "#7F7F7F " : "#9A9A9A",
      muted: mode === "light" ? "#A7A7A7" : "#7E7E7E",
    },
    border: {
      primary: mode === "light" ? "#BFBFBF" : "#878785",
      secondary: mode === "light" ? "#D2D2D2" : "#555555",
    },
  },
});
