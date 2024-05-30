import React from "react";

import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import { Button, Stack, Typography } from "@mui/material";

interface Props {
  title: string;
  showButton?: boolean;
}

export const PageTitle = ({ title, showButton = false }: Props) => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      paddingBottom={2}
      sx={{ borderBottom: `1px solid #eaecf0` }}
    >
      <Typography variant="h1">{title}</Typography>
      {showButton && (
        <Button
          size="customSmall"
          color="primary"
          startIcon={<AddOutlinedIcon />}
        >
          Create New
        </Button>
      )}
    </Stack>
  );
};
