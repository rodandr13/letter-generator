"use client";

import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import { Button, Paper, Stack, Typography } from "@mui/material";
import Link from "next/link";

import { useAppContext } from "@/app/providers/Context";
import { Indicator } from "@/components/Indicator";
import { TARGET_GENERATION } from "@/lib/constans";

export const GoalBlock = () => {
  const { letters } = useAppContext();

  return (
    <Paper elevation={0} variant="green">
      <Stack spacing={2} maxWidth="480px" alignItems="center">
        <Typography variant="h2">Hit your goal</Typography>
        <Typography>
          Generate and send out couple more job applications today to get hired
          faster
        </Typography>
        <Button
          size="customLarge"
          color="primary"
          startIcon={<AddOutlinedIcon />}
          href="/new-application"
          component={Link}
        >
          Create New
        </Button>
      </Stack>
      <Indicator
        total={TARGET_GENERATION}
        active={letters.length}
        variant="square"
        orientation="vertical"
      />
    </Paper>
  );
};
