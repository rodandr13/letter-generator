"use client";

import CheckIcon from "@mui/icons-material/Check";
import {
  alpha,
  Avatar,
  Box,
  CircularProgress,
  Stack,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

import { TARGET_GENERATION } from "@/lib/constans";

interface Props {
  total: number;
  active: number;
  isLoading: boolean;
  variant?: "circle" | "square";
  orientation?: "horizontal" | "vertical";
}

export const Indicator = ({
  total,
  active,
  variant = "circle",
  orientation = "horizontal",
  isLoading,
}: Props) => {
  const theme = useTheme();

  if (isLoading) {
    return <CircularProgress size={18} />;
  }

  const count = active > TARGET_GENERATION ? 5 : active;

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
            ...(i < count && activeStyle),
            ...shapeStyle,
          }}
        ></Box>
      ))}
    </Stack>
  );

  const textContent =
    orientation === "horizontal"
      ? `${count}/${total} applications generated`
      : `${count} out of ${total}`;

  return (
    <Stack
      direction={orientation === "horizontal" ? "row" : "column-reverse"}
      spacing={orientation === "horizontal" ? 2 : 1}
      alignItems="center"
    >
      <Typography color={theme.palette.text.secondary}>
        {textContent}
      </Typography>
      {count >= 5 ? (
        <Avatar
          sx={{
            backgroundColor: theme.palette.success.light,
            width: "1.5rem",
            height: "1.5rem",
          }}
        >
          <CheckIcon
            sx={{ color: theme.palette.success.dark, width: "0.875rem" }}
          />
        </Avatar>
      ) : (
        indicatorContent
      )}
    </Stack>
  );
};
