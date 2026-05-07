import { useContext } from "react";
import { ColorModeContext } from "../context/AppThemeContext";

export const useColorMode = () => useContext(ColorModeContext);
