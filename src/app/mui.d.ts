import { ButtonPropsSizeOverrides } from "@mui/material/Button";

declare module "@mui/material/Button" {
  interface ButtonPropsSizeOverrides {
    customSmall: true;
    customLarge: true;
  }
}
