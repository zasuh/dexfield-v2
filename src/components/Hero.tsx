import React from "react";
import { Chip, InputBase, Stack, Typography, useTheme } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  border: "1px solid black",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  marginLeft: 0,
  marginBottom: theme.spacing(1),
  width: 500,
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    width: 500,
  },
}));

function Hero() {
  const { spacing } = useTheme();
  return (
    <Stack
      direction={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      minHeight={550}
    >
      <Typography variant={"h1"}>Make A Special Brew.</Typography>
      <Typography variant={"h5"} sx={{ marginBottom: spacing(3) }}>
        We are a deckbuilding website for the Commander format.
      </Typography>
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search…"
          inputProps={{ "aria-label": "search" }}
        />
      </Search>
      <Stack direction={"column"} alignItems={"center"}>
        <Stack direction={"row"} alignItems={"center"}>
          <Chip label="NEW" />
          <Typography variant={"subtitle1"} sx={{ marginLeft: spacing(1) }}>
            New spoilers for a new set are out!
          </Typography>
        </Stack>
        <Stack direction={"row"} alignItems={"center"}>
          <Chip label="NEW" />
          <Typography variant={"subtitle1"} sx={{ marginLeft: spacing(1) }}>
            We now support this incredible new feature that you wanted to see!
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default Hero;
