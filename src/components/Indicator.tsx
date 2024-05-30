"use client";

import { alpha, Box, Stack, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

interface Props {
  total: number;
  active: number;
  variant?: "circle" | "square";
  orientation?: "horizontal" | "vertical";
}

export const Indicator = ({
  total,
  active,
  variant = "circle",
  orientation = "horizontal",
}: Props) => {
  const theme = useTheme();

  const shapeStyle =
    variant === "circle"
      ? { borderRadius: "50%" }
      : { borderRadius: "4px", width: "2rem" };

  const baseStyle = {
    width: theme.spacing(1),
    height: theme.spacing(1),
    backgroundColor: alpha(theme.palette.primary.dark, 0.24),
  };

  const activeStyle = {
    ...baseStyle,
    backgroundColor: theme.palette.primary.dark,
  };

  const indicatorContent = (
    <Stack
      direction="row"
      alignItems="center"
      gap={variant === "circle" ? 0.5 : 1}
    >
      {Array.from(Array(total)).map((_, i) => (
        <Box
          key={i}
          sx={{
            ...baseStyle,
            ...(i < active && activeStyle),
            ...shapeStyle,
          }}
        ></Box>
      ))}
    </Stack>
  );

  const textContent =
    orientation === "horizontal"
      ? `${active}/${total} applications generated`
      : `${active} out of ${total}`;

  return (
    <Stack
      direction={orientation === "horizontal" ? "row" : "column-reverse"}
      spacing={orientation === "horizontal" ? 2 : 1}
      alignItems="center"
    >
      <Typography color={theme.palette.text.secondary}>
        {textContent}
      </Typography>
      {indicatorContent}
    </Stack>
  );
};
