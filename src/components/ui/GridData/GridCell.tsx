import { Grid, IconButton, Stack } from "@mui/material";

import { Cancel as CloseIcon, Settings as SettingsIcon } from "@mui/icons-material";

import { CellType } from "./types";

const GridContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <Grid size={1} sx={{ p: 2, borderWidth: 1, borderColor: "divider" }}>
      {children}
    </Grid>
  );
};

export const GridCell = ({ data, type }: { data: string; type?: CellType }) => {
  if (type === "actions") {
    return (
      <GridContainer>
        <Stack direction="row">
          <IconButton color="info">
            <SettingsIcon />
          </IconButton>
          <IconButton color="error">
            <CloseIcon />
          </IconButton>
        </Stack>
      </GridContainer>
    );
  }

  if (type === "date") {
    return <GridContainer>{new Date(data).toDateString()}</GridContainer>;
  }

  return <GridContainer>{data}</GridContainer>;
};
