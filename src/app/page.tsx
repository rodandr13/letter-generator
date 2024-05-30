import { Box, Button, Container, Stack, Typography } from "@mui/material";

import { GoalBlock } from "@/components/GoalBlock";
import { PageTitle } from "@/components/PageTitle";

export default function Home() {
  return (
    <Container>
      <Box marginBottom={6}>
        <PageTitle title="Applications" showButton={true} />
      </Box>
      <GoalBlock />
    </Container>
  );
}
