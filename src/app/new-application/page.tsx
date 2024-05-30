"use client";

import { ChangeEvent, useState } from "react";

import { FormControl } from "@mui/base";
import ContentCopyOutlinedIcon from "@mui/icons-material/ContentCopyOutlined";
import {
  Box,
  Button,
  Container,
  InputLabel,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import { PageTitle } from "@/components/PageTitle";

export default function Page() {
  const [details, setDetails] = useState("");
  const maxLength = 120;

  const handleDetailsChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setDetails(e.target.value);
  };

  return (
    <Container>
      <Stack direction="row" spacing={4}>
        <Box flex={1}>
          <Box marginBottom={2}>
            <PageTitle title="New application" />
          </Box>
          <Box component="form" noValidate>
            <Stack spacing={2}>
              <Stack direction="row" spacing={2}>
                <Box flex={1}>
                  <FormControl>
                    <InputLabel component="label">Job title</InputLabel>
                    <TextField
                      fullWidth
                      defaultValue=""
                      placeholder="Product manager"
                    />
                  </FormControl>
                </Box>
                <Box flex={1}>
                  <FormControl>
                    <InputLabel component="label">Company</InputLabel>
                    <TextField fullWidth defaultValue="" placeholder="Apple" />
                  </FormControl>
                </Box>
              </Stack>
              <FormControl>
                <InputLabel component="label">I am good at...</InputLabel>
                <TextField
                  fullWidth
                  defaultValue=""
                  placeholder="HTML, CSS and doing things in time"
                />
              </FormControl>
              <FormControl>
                <InputLabel component="label">Additional details</InputLabel>
                <TextField
                  multiline
                  error={details.length > maxLength}
                  value={details}
                  onChange={handleDetailsChange}
                  helperText={`${details.length}/${maxLength}`}
                  rows={8}
                  fullWidth
                  placeholder="Describe why you are a great fit or paste your bio"
                />
              </FormControl>
              <Button color="primary" size="customLarge" fullWidth disabled>
                Generate Now
              </Button>
            </Stack>
          </Box>
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
