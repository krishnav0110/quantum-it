import React from "react";

import { Divider, InputAdornment, TextField as MuiTextField, TextFieldProps } from "@mui/material";

import { SvgIconComponent } from "@mui/icons-material";

const htmlInputColor = "#bac5d1";
const inputBgColor = "#4d5874";

export const TextField = (props: TextFieldProps & { icon: SvgIconComponent }) => {
  const { icon, ...muiProps } = props;
  const Icon = icon;

  return (
    <MuiTextField
      {...muiProps}
      variant="outlined"
      slotProps={{
        input: {
          startAdornment: (
            <InputAdornment position="start">
              <Icon sx={{ color: htmlInputColor }} />
              <Divider orientation="vertical" flexItem sx={{ ml: 1, bgcolor: htmlInputColor }} />
            </InputAdornment>
          ),
          sx: {
            borderRadius: 2,
            bgcolor: inputBgColor,
          },
        },
        htmlInput: {
          sx: {
            color: htmlInputColor,
            fontSize: 16,
            fontWeight: "medium",
          },
        },
      }}
    />
  );
};
