import { ButtonPropsSizeOverrides } from "@mui/material/Button";
import { PaperPropsVariantOverrides } from "@mui/material/Paper";

declare module "@mui/material/Button" {
  interface ButtonPropsSizeOverrides {
    customSmall: true;
    customLarge: true;
  }
}

declare module "@mui/material/Paper" {
  interface PaperPropsVariantOverrides {
    green: true;
    gray: true;
  }
}
