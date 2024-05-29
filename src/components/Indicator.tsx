"use client";

import { alpha, Box, Stack } from "@mui/material";
import { useTheme } from "@mui/material/styles";

interface Props {
  total: number;
  active: number;
}

export const Indicator = ({ total, active }: Props) => {
  const theme = useTheme();

  const circle = {
    width: theme.spacing(1),
    height: theme.spacing(1),
    borderRadius: "50%",
    backgroundColor: alpha(theme.palette.primary.dark, 0.24),
  };

  const activeCircle = {
    ...circle,
    backgroundColor: theme.palette.primary.dark,
  };
  return (
    <Stack direction="row" alignItems="center" gap={0.5}>
      {Array.from(Array(total)).map((_, i) => (
        <Box key={i} sx={i < active ? activeCircle : circle}></Box>
      ))}
    </Stack>
  );
};
