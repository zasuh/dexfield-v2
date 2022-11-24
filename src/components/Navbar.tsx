import React from "react";
import styled from "@emotion/styled";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { FaJenkins } from "react-icons/fa";
import { Stack, Typography, useTheme } from "@mui/material";

const LINKS = [
  {
    label: "Home",
  },
  {
    label: "Explore",
  },
  {
    label: "Guides",
  },
  {
    label: "Your Decks",
  },
  {
    label: "Collection",
  },
  {
    label: "Wish List",
  },
];

function Navbar() {
  const theme = useTheme();
  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      justifyContent={"space-between"}
      sx={{
        backgroundColor: theme.palette.background.default,
        padding: "20px 30px",
      }}
    >
      <LeftWrapper>
        <Typography variant={"h5"}>DEXFIELDS</Typography>
        <LeftLinksWrapper>
          {LINKS.slice(0, 3).map((link) => (
            <Typography variant={"body1"} key={link.label}>
              {link.label}
            </Typography>
          ))}
          <Separator />
          {LINKS.slice(3, 6).map((link) => (
            <Typography variant={"body1"} key={link.label}>
              {link.label}
            </Typography>
          ))}
        </LeftLinksWrapper>
      </LeftWrapper>
      <RightWrapper>
        <AddIcon />
        <NotificationsActiveIcon />
        <FaJenkins />
        <SearchIcon />
        <DarkModeIcon />
      </RightWrapper>
    </Stack>
  );
}

const Wrapper = styled.div({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  maxWidth: "100%",
  backgroundColor: "deeppink",
  boxShadow: "0 4px 2px -2px gray",
  color: "white",
  padding: "20px 30px",
});

const LeftWrapper = styled.div({
  width: 600,
  display: "flex",
  alignItems: "center",
  gap: 20,
});

const RightWrapper = styled.div({
  width: 120,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: 10,
});

const LeftLinksWrapper = styled.div({
  height: 15,
  width: 400,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

const Separator = styled.div({
  height: "100%",
  width: 1,
  backgroundColor: "white",
});

export default Navbar;
