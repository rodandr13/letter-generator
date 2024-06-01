"use client";

import { CircularProgress, Grid } from "@mui/material";

import { useAppContext } from "@/app/providers/Context";
import { LetterCard } from "@/components/LetterCard";

export const LetterCards = () => {
  const { isLoadingLetters, letters } = useAppContext();

  return (
    <Grid container rowSpacing={3} columnSpacing={2}>
      {isLoadingLetters ? (
        <Grid
          item
          xs={12}
          alignSelf="center"
          alignItems="center"
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <CircularProgress size={48} />
        </Grid>
      ) : (
        letters.map((letter, index) => (
          <Grid item xs={6} key={index}>
            <LetterCard letter={letter} />
          </Grid>
        ))
      )}
    </Grid>
  );
};
