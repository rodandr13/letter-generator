import { Box, Container, Stack } from "@mui/material";

import { GoalBlock } from "@/components/GoalBlock";
import { LetterCards } from "@/components/LetterCards";
import { PageTitle } from "@/components/PageTitle";

export default function Home() {
  return (
    <Container>
      <Stack rowGap={3}>
        <PageTitle title="Applications" showButton={true} />
        <LetterCards />
        <Box marginTop={3}>
          <GoalBlock />
        </Box>
      </Stack>
    </Container>
  );
}
