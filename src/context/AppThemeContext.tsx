import { createContext, useState, useMemo } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { getDesignTokens } from "../lib/design-tokens";

export const ColorModeContext = createContext({
  toggle: () => {},
  mode: "light",
});

export const AppThemeProvider = ({ children }: any) => {
  const [mode, setMode] = useState("light");

  const colorMode = useMemo(
    () => ({
      toggle: () => setMode((m) => (m === "light" ? "dark" : "light")),
      mode,
    }),
    [mode],
  );

  const theme = useMemo(
    () => createTheme(getDesignTokens(mode), [mode]),
    [mode],
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default AppThemeProvider;
