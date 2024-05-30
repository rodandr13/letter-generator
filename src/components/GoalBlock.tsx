import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import { Button, Paper, Stack, Typography } from "@mui/material";

import { Indicator } from "@/components/Indicator";

export const GoalBlock = () => {
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
        >
          Create New
        </Button>
      </Stack>
      <Indicator total={5} active={3} variant="square" orientation="vertical" />
    </Paper>
  );
};
