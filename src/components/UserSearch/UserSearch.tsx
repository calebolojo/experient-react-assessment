import { useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { getSearchOptions } from "../../utils/getSearchOptions";
import Avatar from "@mui/material/Avatar";
import { deepOrange } from "@mui/material/colors";
import { getNameInitials } from "../../utils/transformNameText";
import type { User } from "../../types/UserType";
import UserCard from "../UserCard/UserCard";
import { Alert, Typography } from "@mui/material";
import { useAppTheme } from "../../hooks/useAppTheme";
import UserSearchSkeleton from "./UserSearchSkeleton";

function UserSearch() {
  const [selected, setSelected] = useState<User | null>(null);
  const [inputValue, setInputValue] = useState("");
  const { data, isPending, error } = useQuery({
    useQuery: ["users"],
    queryFn: () =>
      fetch("https://jsonplaceholder.typicode.com/users").then((res) =>
        res.json(),
      ),
  });
  const { theme } = useAppTheme();

  const users = useMemo(() => getSearchOptions(data || []), [data]);

  return (
    <div className="user-search">
      <Typography
        variant="h3"
        align="center"
        sx={{ mb: "60px", color: theme.palette.text.primary }}
      >
        Find A User
      </Typography>
      {isPending ? (
        <UserSearchSkeleton />
      ) : !isPending && !error ? (
        <>
          <Autocomplete
            value={selected}
            onChange={(_: any, _selected: User | null) => {
              setSelected(_selected);
            }}
            inputValue={inputValue}
            onInputChange={(_: any, newInputValue) => {
              setInputValue(newInputValue);
            }}
            id="user-search-select"
            sx={{
              width: 500,
              backgroundColor: theme.palette.background.tertiary,
              borderRadius: "8px",
              height: "64px",
            }}
            options={users}
            autoHighlight
            getOptionKey={(option) => option.id}
            getOptionLabel={(option) => {
              const label = option.name;
              return label || "";
            }}
            renderOption={(props, option) => {
              const { key, ...optionProps } = props;
              return (
                <Box
                  key={key}
                  component="li"
                  sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                  {...optionProps}
                >
                  <Avatar
                    sx={{
                      bgcolor: theme.palette.brand.base,
                      marginRight: "16px",
                    }}
                  >
                    {getNameInitials(option.name)}
                  </Avatar>
                  {option.name}
                </Box>
              );
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                label=""
                placeholder="Search by name"
                sx={{
                  backgroundColor: theme.palette.background.tertiary,
                  borderRadius: "8px",
                  height: "64px",
                }}
                className="search-text-field"
              />
            )}
          />

          {selected && (
            <div className="mt-6">
              <UserCard {...selected} />
            </div>
          )}
        </>
      ) : null}

      {!isPending && error && (
        <Alert severity="error">
          Server encountered error getting users. Plase try again.
        </Alert>
      )}
      {/* <Alert severity="error">
        Server encountered error getting users. Plase try again.
      </Alert> */}
    </div>
  );
}

export default UserSearch;
