import { Box } from "@mui/material";
import "../../App.css";
import { useAppTheme } from "../../hooks/useAppTheme";
import classnames from "classnames";

const UserSearchSkeleton = () => {
  const { mode } = useAppTheme();
  return (
    <Box
      className={classnames(
        "user-search-skeleton animate-pulse",
        mode === "dark" && "user-search-skeleton--dark",
      )}
    >
      <Box className="inner flex justify-between items-center animate-pulse">
        <Box className="placeholder-skeleton animate-pulse"></Box>
        <Box className="chevron-skeleton animate-pulse"></Box>
      </Box>
    </Box>
  );
};

export default UserSearchSkeleton;
