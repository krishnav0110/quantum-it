import { Box, Container, Paper, Stack } from "@mui/material";

import { FormHeader } from "@/components/pages/auth";

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        py: 4,
        background: "linear-gradient(0deg, #00c3bb, #00767b)",
      }}
    >
      <Container maxWidth="xs">
        <Paper elevation={0}>
          <Stack spacing={4}>
            <FormHeader />

            <Box sx={{ p: 4 }}>{children}</Box>
          </Stack>
        </Paper>
      </Container>
    </Box>
  );
}
