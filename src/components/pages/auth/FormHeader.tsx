"use client";
import { usePathname } from "next/navigation";

import { Box, Stack, Typography } from "@mui/material";

import { Person as AvatarIcon } from "@mui/icons-material";

const avatarSize = 96;
const headerOverflow = 2;
const avatarOverflow = 3;

export const FormHeader = () => {
  const pathname = usePathname();
  const title = pathname === "/login" ? "SIGN IN" : "SIGN UP";

  return (
    <Stack
      sx={{ alignItems: "center", background: "linear-gradient(0deg, #424c6b, #293859, #1d2c4f)" }}
    >
      <Box
        sx={{
          color: "primary.contrastText",
          bgcolor: "primary.main",
          width: 0.5,
          py: 3,
          mt: -headerOverflow,
          mb: 4,
        }}
      >
        <Typography variant="h6" textAlign="center">
          {title}
        </Typography>
      </Box>

      <Box
        sx={{
          width: avatarSize,
          height: avatarSize,
          overflow: "clip",
          display: "flex",
          justifyContent: "center",
          borderRadius: avatarSize,
          mb: -avatarOverflow,
          bgcolor: "transparent",
          color: "#78849e",
          borderColor: "#78849e",
          borderWidth: 6,
          borderStyle: "solid",
        }}
      >
        <AvatarIcon color="inherit" sx={{ fontSize: avatarSize + 10 }} />
      </Box>
    </Stack>
  );
};
