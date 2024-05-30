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
  gray: "#98a2b3",
  lightGrayStroke: "#eaecf0",
  white: "#ffffff",
  green: "#087443",
  greenLight: "#73e2a3",
  greenVeryLight: "#d3f8df",
  grayPaper: "#f2f4f7",
  red: "#f04438",
  redLight: "#fda29b",
  redVeryLight: "#fee4e2",
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
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontSize: "0.75rem",
          marginBottom: "0.375rem",
          lineHeight: "1.25rem",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          padding: 0,
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: colors.greenLight,
            borderWidth: 1,
            boxShadow: `0 0 0 4px ${colors.greenVeryLight}`,
          },
          "&.Mui-error .MuiOutlinedInput-notchedOutline": {
            borderColor: colors.redLight,
            borderWidth: 1,
            boxShadow: `0 0 0 4px ${colors.redVeryLight}`,
          },
        },
        input: {
          padding: "0.5rem 0.75rem",
          fontSize: "1rem",
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          color: colors.darkGray,
          marginLeft: 0,
          fontSize: "0.875rem",
          "&.Mui-error": {
            color: colors.red,
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          boxSizing: "border-box",
          borderRadius: "12px",
          height: "100%",
        },
      },
      variants: [
        {
          props: { variant: "green" },
          style: {
            backgroundColor: colors.greenVeryLight,
            padding: "3.375rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "2rem",
            textAlign: "center",
          },
        },
        {
          props: { variant: "gray" },
          style: {
            backgroundColor: colors.grayPaper,
            padding: "1.5rem",
          },
        },
      ],
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: "6px",
          lineHeight: "1rem",
        },
      },
      variants: [
        {
          props: { size: "customSmall" },
          style: {
            color: "#ffffff",
            backgroundColor: colors.green,
            fontSize: "1rem",
            padding: "0.625rem 1.125rem 0.625rem 1.125rem",
            "&:hover": {
              backgroundColor: alpha(colors.green, 0.8),
            },
            "&.Mui-disabled": {
              color: colors.gray,
              backgroundColor: colors.lightGray,
            },
          },
        },
        {
          props: { size: "customLarge" },
          style: {
            color: "#ffffff",
            backgroundColor: colors.green,
            fontSize: "1.125rem",
            padding: "1rem 1.75rem 1rem 1.75rem",
            "&:hover": {
              backgroundColor: alpha(colors.green, 0.8),
            },
            "&.Mui-disabled": {
              color: colors.gray,
              backgroundColor: colors.lightGray,
            },
          },
        },
      ],
    },
  },
});
