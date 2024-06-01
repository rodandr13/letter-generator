"use client";

import { useEffect } from "react";

import { Container, Stack } from "@mui/material";
import { Box } from "@mui/system";

import { useAppContext } from "@/app/providers/Context";
import { IconLink } from "@/components/IconLink";
import { Indicator } from "@/components/Indicator";
import { Logo } from "@/components/Logo";
import { TARGET_GENERATION } from "@/lib/constans";

export const Header = () => {
  const { letters, setLetters } = useAppContext();
  useEffect(() => {
    setLetters(JSON.parse(localStorage.getItem("letters") || "[]"));
  }, []);
  return (
    <Container>
      <Box component="header" marginBottom={4}>
        <Stack direction="row" justifyContent="space-between">
          <Stack direction="row" alignItems="center" gap={3}>
            <Logo />
            <IconLink href="/" variant="home">
              Home
            </IconLink>
          </Stack>
          <Stack direction="row" alignItems="center" gap={3}>
            <Stack direction="row" alignItems="center" gap={2}>
              <Indicator
                total={TARGET_GENERATION}
                active={letters.length}
                variant="circle"
                orientation="horizontal"
              />
            </Stack>
            <IconLink href="/" variant="home">
              Home
            </IconLink>
          </Stack>
        </Stack>
      </Box>
    </Container>
  );
};
