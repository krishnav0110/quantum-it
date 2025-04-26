"use client";

import { Inter } from "next/font/google";
import { createTheme } from "@mui/material/styles";

const themeFont = Inter({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const primary = { main: "#00f4e2", dark: "#04aead", contrastText: "#04aead" };

export const theme = createTheme({
  cssVariables: { colorSchemeSelector: "class" },
  palette: {
    primary: primary,
    background: { paper: "#1e2c4f" },
  },

  typography: {
    fontSize: 13,
    fontFamily: themeFont.style.fontFamily,
  },

  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          color: primary.dark,
          textDecoration: "none",
        },
      },
    },
  },
});
