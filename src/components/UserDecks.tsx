import React from "react";
import { Card, CardContent, Stack, Typography, useTheme } from "@mui/material";

function UserDecks() {
  const { spacing } = useTheme();
  return (
    <Stack
      sx={{
        padding: "20px 30px",
      }}
    >
      <Stack
        direction={"row"}
        alignItems={"center"}
        sx={{ marginBottom: spacing(2) }}
      >
        <Typography variant={"h5"}>Your decks</Typography>
      </Stack>
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Card sx={{ minWidth: 475, minHeight: 200 }}>
          <CardContent>
            <Typography variant={"h5"}>My deck name</Typography>
          </CardContent>
        </Card>
        <Card sx={{ minWidth: 475, minHeight: 200 }}>
          <CardContent>
            <Typography variant={"h5"}>My deck name</Typography>
          </CardContent>
        </Card>
        <Card sx={{ minWidth: 475, minHeight: 200 }}>
          <CardContent>
            <Typography variant={"h5"}>My deck name</Typography>
          </CardContent>
        </Card>
      </Stack>
    </Stack>
  );
}

export default UserDecks;
