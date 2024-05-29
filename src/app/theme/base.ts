"use client";

import { createTheme } from "@mui/material/styles";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "700"],
});

const colors = {
  darkGray: "#101828",
  slateGray: "#667085",
  lightGray: "#d0d5dd",
};

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
  palette: {
    primary: {
      main: colors.slateGray,
      light: colors.lightGray,
      dark: colors.darkGray,
    },
    text: {
      primary: colors.darkGray,
      secondary: colors.slateGray,
    },
  },
  typography: {
    fontFamily: `${roboto.style.fontFamily}, Arial, sans-serif`,
    body1: {
      color: colors.darkGray,
    },
  },
});
