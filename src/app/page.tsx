import { LogoutButton } from "@/components/pages/home";
import { GridData } from "@/components/ui";

import { ColumnsDef } from "@/components/ui/GridData";
import { Box, Stack } from "@mui/material";

const data = [
  { id: 1, name: "Michael Holz", date: new Date(), role: "Admin", status: "Active" },
  { id: 2, name: "Michael Holz", date: new Date(), role: "Admin", status: "Suspended" },
  { id: 3, name: "Michael Holz", date: new Date(), role: "Publisher", status: "Active" },
  { id: 4, name: "Michael Holz", date: new Date(), role: "Admin", status: "Active" },
  { id: 5, name: "Michael Holz", date: new Date(), role: "Publisher", status: "Inactive" },
];

const columnsDef: ColumnsDef = [
  { header: "#", key: "id" },
  { header: "Name", key: "name" },
  { header: "Date Created", key: "date", type: "date" },
  { header: "Role", key: "role" },
  { header: "Status", key: "status" },
  { header: "Action", key: "actions", type: "actions" },
];

export default function Page() {
  return (
    <Stack spacing={2} sx={{ p: 2 }}>
      <Box sx={{ alignSelf: "start" }}>
        <LogoutButton />
      </Box>

      <Box sx={{ overflowX: "auto", scrollbarWidth: "thin" }}>
        <Box sx={{ minWidth: 100 * columnsDef.length }}>
          <GridData data={data} columnsDef={columnsDef} />
        </Box>
      </Box>
    </Stack>
  );
}
