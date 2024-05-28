"use client";

import { Roboto } from "next/font/google";
import { createTheme } from "@mui/material/styles";

const roboto = Roboto({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "700"]
});

export const baseTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1120,
      xl: 1400,
    },
  },
  typography: {
    // fontSize: 16,
    fontFamily: `${roboto.style.fontFamily}, Arial, sans-serif`,
    // body1: {
    //   fontSize: "1rem",
    // },
  },
});

