"use client";

import { alpha } from "@mui/material";
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
  lightGrayStroke: "#eaecf0",
  white: "#ffffff",
  green: "#087443",
  greenLight: "#EDFCF2",
  grayPaper: "#f2f4f7",
};

export const baseTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1168,
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
      color: colors.slateGray,
      fontSize: "1.125rem",
    },
    h1: {
      fontSize: "3rem",
      lineHeight: "3.75rem",
      fontWeight: 500,
      letterSpacing: "-0.02rem",
      color: colors.darkGray,
    },
    h2: {
      fontSize: "2rem",
      lineHeight: "2.75rem",
      fontWeight: 500,
      letterSpacing: "-0.02rem",
      color: colors.darkGray,
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          boxSizing: "border-box",
        },
      },
      variants: [
        {
          props: { variant: "green" },
          style: {
            backgroundColor: colors.greenLight,
            padding: "3.375rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "2rem",
            textAlign: "center",
            borderRadius: "12px",
          },
        },
        {
          props: { variant: "gray" },
          style: {
            backgroundColor: colors.grayPaper,
            padding: "3.375rem",
          },
        },
      ],
    },
    MuiButton: {
      styleOverrides: {
        root: {
          color: "#ffffff",
          backgroundColor: colors.green,
          textTransform: "none",
          borderRadius: "6px",
          lineHeight: "1rem",
          "&:hover": {
            backgroundColor: alpha(colors.green, 0.8),
          },
        },
      },
      variants: [
        {
          props: { size: "customSmall" },
          style: {
            fontSize: "1rem",
            padding: "0.625rem 1.125rem 0.625rem 1.125rem",
          },
        },
        {
          props: { size: "customLarge" },
          style: {
            fontSize: "1.125rem",
            padding: "1rem 1.75rem 1rem 1.75rem",
          },
        },
      ],
    },
  },
});
