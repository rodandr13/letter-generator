"use client";

import { Box, Container, Stack } from "@mui/material";

import { useAppContext } from "@/app/providers/Context";
import { GoalBlock } from "@/components/GoalBlock";
import { LetterCards } from "@/components/LetterCards";
import { PageTitle } from "@/components/PageTitle";

export default function Home() {
  const { letters } = useAppContext();

  return (
    <Container>
      <Stack rowGap={3}>
        <PageTitle title="Applications" showButton={true} />
        <LetterCards />
        {letters.length < 5 && (
          <Box marginTop={3}>
            <GoalBlock />
          </Box>
        )}
      </Stack>
    </Container>
  );
}
