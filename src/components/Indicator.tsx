"use client";

import {Box, Stack} from "@mui/material";
import { useTheme } from '@mui/material/styles';

interface Props {
  total: number;
  active: number;
}

export const Indicator = ({total, active}: Props) => {

  const theme = useTheme();

  const circle = {
    width: theme.spacing(1),
    height: theme.spacing(1),
    borderRadius: "50%",
    backgroundColor: "#eee",
  }

  const activeCircle = {
    ...circle,
    backgroundColor: "#000",
  };
  return (
    <Stack direction="row" alignItems="center" gap={0.5}>
      {Array.from(Array(5)).map((_, i) => (
        <Box key={i} sx={i < active ? activeCircle : circle}>
        </Box>
      ))}
    </Stack>
  )
}
