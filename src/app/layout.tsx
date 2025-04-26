import type { Metadata } from "next";

import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import "./globals.css";

import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";

import { theme } from "@/lib/theme";

export const metadata: Metadata = {
  title: "Quantum IT",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme} defaultMode="light">
            <CssBaseline />
            {children}
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
