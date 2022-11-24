import React from "react";
import styled from "@emotion/styled";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { FaJenkins } from "react-icons/fa";
import { DialogTitle, Stack, Typography } from "@mui/material";
import SimpleDialog from "./common/Dialog";

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
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      justifyContent={"space-between"}
      sx={{
        padding: "20px 30px",
      }}
    >
      <Stack direction={"row"} alignItems={"center"} gap={5}>
        <Typography variant={"h5"}>DEXFIELD</Typography>
        <Stack direction={"row"} alignItems={"center"} gap={2}>
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
        </Stack>
      </Stack>
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
        width={220}
      >
        <AddIcon onClick={handleOpen} />
        <NotificationsActiveIcon />
        <FaJenkins />
        <SearchIcon />
        <DarkModeIcon />
      </Stack>
      <SimpleDialog open={open} onClose={handleClose}>
        <DialogTitle>Add deck</DialogTitle>
      </SimpleDialog>
    </Stack>
  );
}

const Separator = styled.div({
  height: 20,
  borderLeft: "1px solid black",
});

export default Navbar;
