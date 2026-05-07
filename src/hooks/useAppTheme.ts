import { useTheme } from "@mui/material/styles";
import { useColorMode } from "./useColorMode";

export const useAppTheme = () => {
  const theme = useTheme();
  const colorMode = useColorMode();
  return { theme, ...colorMode };
};
