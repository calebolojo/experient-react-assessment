import "@mui/material/styles";

interface ShadeType {
  base?: string;
  light?: string;
  dark?: string;
}

declare module "@mui/material/styles" {
  interface Palette {
    border?: TypeBorder;
    brand?: ShadeType;
  }
  interface PaletteOptions {
    border?: TypeBorder;
    brand?: ShadeType;
  }

  interface TypeText {
    tertiary: string;
    muted: string;
  }
  interface TypeBackground {
    white: string;
    secondary: string;
    tertiary: string;
  }

  interface TypeBorder {
    primary: string;
    secondary: string;
  }
}
