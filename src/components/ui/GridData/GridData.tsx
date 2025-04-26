import { Divider, Grid, Typography } from "@mui/material";

import { GridCell } from "./GridCell";
import { ColumnsDef } from "./types";

type Row = {
  [key: string]: unknown;
};

type Data = Row[];

export const GridData = ({ data, columnsDef }: { data: Data; columnsDef: ColumnsDef }) => {
  return (
    <Grid
      container
      columns={columnsDef.length}
      sx={{ alignItems: "center", borderWidth: 1, borderColor: "divider" }}
    >
      {columnsDef.map((item, index) => (
        <Grid key={index} size={1} sx={{ p: 2 }}>
          <Typography sx={{ fontWeight: "bolder" }}>{item.header}</Typography>
        </Grid>
      ))}

      <Grid size={columnsDef.length}>
        <Divider />
      </Grid>

      {data.map((row) =>
        columnsDef.map((columnDef, index) => (
          <GridCell key={index} data={row[columnDef.key] as string} type={columnDef.type} />
        ))
      )}
    </Grid>
  );
};
