import "./App.css";
import UserSearch from "./components/UserSearch/UserSearch";
import { Box, IconButton, Link, Typography } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import logoWhite from "./assets/user-search-logo-white.svg";
import logoBlack from "./assets/user-search-logo-black.svg";
import { useAppTheme } from "./hooks/useAppTheme";
import classnames from "classnames";

function App() {
  const { theme, mode, toggle } = useAppTheme();

  return (
    <Box
      className={classnames(
        "app",
        mode === "light" ? "app--light" : "app--dark",
      )}
      sx={{ backgroundColor: theme.palette.background.default }}
    >
      <Box
        className="app-header flex items-center"
        sx={{
          backgroundColor: theme.palette.background?.white,
          borderBottom: "1px solid",
          borderBottomColor: theme.palette.border?.secondary,
        }}
      >
        <div className="container mx-auto flex justify-between items-center">
          <div>
            <img
              src={mode === "light" ? logoBlack : logoWhite}
              alt="UserSearch"
            />
          </div>
          <div>
            <IconButton onClick={toggle} color="inherit">
              {mode === "dark" ? (
                <Brightness7Icon sx={{ color: theme.palette.text.primary }} />
              ) : (
                <Brightness4Icon />
              )}
            </IconButton>
          </div>
        </div>
      </Box>
      <Box className="app-main">
        <div className="container mx-auto ">
          <div className="search-wrap">
            <UserSearch />
          </div>
        </div>
      </Box>
      <Box className="app-footer">
        <div className="container mx-auto">
          <Typography
            align="center"
            sx={{
              fontSize: 12,
              color: theme.palette.text.tertiary,
              fontWeight: "regular",
            }}
          >
            © {new Date().getFullYear()}. An{" "}
            <Link
              href="https://experient.com/"
              target="_blank"
              sx={{ color: theme.palette.brand?.base }}
            >
              Experient
            </Link>{" "}
            hiring assessment project. Designed & Developed by{" "}
            <Link
              href="mailto:calebolojo1@gmail.com"
              sx={{ color: theme.palette.brand?.base }}
            >
              Caleb Olojo
            </Link>
            .
          </Typography>
        </div>
      </Box>
    </Box>
  );
}

export default App;
