import ContentCopyOutlinedIcon from "@mui/icons-material/ContentCopyOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

interface Props {
  letter: string;
}

export const LetterCard = ({ letter }: Props) => {
  const theme = useTheme();

  const letterCard = {
    border: "none",
    backgroundColor: theme.palette.background.paper,
    boxSizing: "border-box",
    maxHeight: "240px",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    padding: theme.spacing(3),
    paddingBottom: theme.spacing(2),
  };

  const letterContent = {
    overflow: "hidden",
    padding: 0,
  };

  const letterActions = {
    height: "40px",
    minHeight: "40px",
    display: "flex",
    justifyContent: "space-between",
    padding: 0,
    alignItems: "flex-end",
  };

  return (
    <Card sx={letterCard} variant="outlined">
      <CardContent sx={letterContent}>
        <Typography whiteSpace="pre-line">{letter}</Typography>
      </CardContent>
      <CardActions sx={letterActions}>
        <Button variant="text">
          <Stack direction="row" spacing={1}>
            <DeleteOutlinedIcon />
            <Typography fontSize="1rem">Delete</Typography>
          </Stack>
        </Button>
        <Button variant="text">
          <Stack direction="row" spacing={1}>
            <Typography fontSize="1rem">Copy to clipboard</Typography>
            <ContentCopyOutlinedIcon />
          </Stack>
        </Button>
      </CardActions>
    </Card>
  );
};
