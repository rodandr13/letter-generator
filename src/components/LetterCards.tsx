"use client";

import { useEffect, useState } from "react";

import { Grid } from "@mui/material";

import { LetterCard } from "@/components/LetterCard";

export const LetterCards = () => {
  const [letters, setLetters] = useState([]);

  useEffect(() => {
    setLetters(JSON.parse(localStorage.getItem("letters") || "[]"));
  }, []);

  return (
    <Grid container rowSpacing={3} columnSpacing={2}>
      {letters.map((letter, index) => (
        <Grid item xs={6} key={index}>
          <LetterCard letter={letter} />
        </Grid>
      ))}
    </Grid>
  );
};
