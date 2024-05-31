import ContentCopyOutlinedIcon from "@mui/icons-material/ContentCopyOutlined";
import {
  Box,
  Button,
  Container,
  Paper,
  Stack,
  Typography,
} from "@mui/material";

import { ApplicationGenerateForm } from "@/components/ApplicationGenerateForm";
import { PageTitle } from "@/components/PageTitle";

export default function Page() {
  return (
    <Container>
      <Stack direction="row" spacing={4}>
        <Box flex={1}>
          <Box marginBottom={2}>
            <PageTitle title="New application" />
          </Box>
          <ApplicationGenerateForm />
        </Box>
        <Box flex={1}>
          <Paper elevation={3} variant="gray" sx={{ position: "relative" }}>
            {
              <Typography paragraph>
                Your personalized job application will appear here...
              </Typography>
            }
            <Button
              variant="text"
              sx={{ position: "absolute", bottom: "1.5rem", right: "1.5rem" }}
            >
              <Stack direction="row" spacing={1}>
                <Typography fontSize="1rem">Copy to clipboard</Typography>
                <ContentCopyOutlinedIcon />
              </Stack>
            </Button>
          </Paper>
        </Box>
      </Stack>
    </Container>
  );
}
