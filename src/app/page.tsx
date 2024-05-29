import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import { Box, Button, Container, Stack, Typography } from "@mui/material";

import { Header } from "@/components/Header";

export default function Home() {
  return (
    <Container>
      <Header />
      <Box component="section">
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          paddingBottom={2}
          marginBottom={6}
          sx={{
            borderBottom: `1px solid #eaecf0`,
          }}
        >
          <Typography component="h1" variant="h1">
            Applications
          </Typography>
          <Button
            size="customSmall"
            color="primary"
            startIcon={<AddOutlinedIcon />}
          >
            Create New
          </Button>
        </Stack>
      </Box>
    </Container>
  );
}
