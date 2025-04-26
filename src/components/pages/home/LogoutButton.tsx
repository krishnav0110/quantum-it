"use client";

import { Button } from "@mui/material";

import { logout } from "@/actions/auth";

export const LogoutButton = () => {
  return (
    <Button variant="contained" onClick={logout}>
      Logout
    </Button>
  );
};
