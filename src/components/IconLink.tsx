import { ReactNode } from "react";

import { alpha, Link as MuiLink } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Link from "next/link";

interface Props {
  href: string;
  children?: ReactNode;
  variant?: "home";
}

export const IconLink = ({ href, children, variant }: Props) => {
  const theme = useTheme();

  const baseStyles = {
    borderRadius: "6px",
    border: `1px solid ${theme.palette.primary.light}`,
    padding: "12.5px",
    display: "block",
    width: "40px",
    height: "40px",
    boxSizing: "border-box",
    fontSize: "0",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "50% 50%",
    transition: "background .2s ease",
    boxShadow: `0 1px 2px 0 ${alpha(theme.palette.primary.dark, 0.05)}`,
  };

  const homeVariantStyles = {
    backgroundImage: "url('/home_icon.svg')",
  };

  const sxStyles =
    variant === "home" ? { ...baseStyles, ...homeVariantStyles } : baseStyles;

  return (
    <MuiLink href={href} component={Link} sx={sxStyles}>
      {children}
    </MuiLink>
  );
};
