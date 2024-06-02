"use client";

import React, { useEffect, useState } from "react";

import ContentCopyOutlinedIcon from "@mui/icons-material/ContentCopyOutlined";
import {
  Box,
  Button,
  Container,
  Paper,
  Stack,
  Typography,
} from "@mui/material";

import { useAppContext } from "@/app/providers/Context";
import { ApplicationGenerateForm } from "@/components/ApplicationGenerateForm";
import { PageTitle } from "@/components/PageTitle";
import { generateText } from "@/lib/generateText";
import { template } from "@/lib/templates";

export default function Page() {
  const {
    isLoadingGenerate,
    setIsLoadingGenerate,
    generateValues,
    resetForm,
    setResetForm,
  } = useAppContext();
  const [hasGenerated, setHasGenerated] = useState<boolean>(false);
  const [text, setText] = useState<string>(
    "Your personalized job application will appear here..."
  );

  useEffect(() => {
    if (resetForm) {
      setText("Your personalized job application will appear here...");
      setResetForm(false);
      return;
    }
    setIsLoadingGenerate(false);
    setHasGenerated(true);
    if (generateValues) {
      setText(generateText(template, generateValues));
    } else {
      setText("Your personalized job application will appear here...");
    }
  }, [generateValues]);

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
            {isLoadingGenerate && hasGenerated ? (
              <Box
                sx={{
                  width: 80,
                  height: 80,
                  background:
                    "radial-gradient(circle at 50px 30px, white, #D0D5DD)",
                  borderRadius: "50%",
                  boxShadow: `0 0 50px 40px #ffffff, inset 0 0 20px 0px rgba(23, 23, 23, 0.08)`,
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  animation: "fade 1s ease-in infinite",
                  "@keyframes fade": {
                    "0%, 100%": {
                      opacity: 0.4,
                    },
                    "50%": {
                      opacity: 0.9,
                    },
                  },
                }}
              />
            ) : (
              <Typography paragraph whiteSpace="pre-line">
                {text}
              </Typography>
            )}
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
