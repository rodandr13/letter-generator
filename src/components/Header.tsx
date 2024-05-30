"use client";

import { Container, Stack, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Box } from "@mui/system";

import { IconLink } from "@/components/IconLink";
import { Indicator } from "@/components/Indicator";
import { Logo } from "@/components/Logo";

export const Header = () => {
  const theme = useTheme();
  return (
    <Box component="header" marginBottom={4}>
      <Stack direction="row" justifyContent="space-between">
        <Stack direction="row" alignItems="center" gap={3}>
          <Logo />
          <IconLink href="#" variant="home">
            Home
          </IconLink>
        </Stack>
        <Stack direction="row" alignItems="center" gap={3}>
          <Stack direction="row" alignItems="center" gap={2}>
            <Indicator
              total={5}
              active={3}
              variant="circle"
              orientation="horizontal"
            />
          </Stack>
          <IconLink href="#" variant="home">
            Home
          </IconLink>
        </Stack>
      </Stack>
    </Box>
  );
};
