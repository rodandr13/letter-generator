import Link from "next/link";
import { ReactNode } from "react";
import { Link as MuiLink } from "@mui/material";

interface Props {
  href: string;
  children?: ReactNode;
  variant?: "home";
}

const baseStyles = {
  borderRadius: "6px",
  border: "1px solid #D0D5DD",
  padding: "12.5px",
  display: "block",
  width: "40px",
  height: "40px",
  boxSizing: "border-box",
  fontSize: "0",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "50% 50%",
  transition: "background .2s ease",
  "&:hover": {
    backgroundColor: "#f6f6f6",
  }
};

const homeVariantStyles = {
  backgroundImage: "url('/home_icon.svg')",
};

export const IconLink = ({ href, children, variant }: Props) => {
  const sxStyles = variant === "home" ? { ...baseStyles, ...homeVariantStyles } : baseStyles;

  return (
    <MuiLink href={href} component={Link} sx={sxStyles}>
      {children}
    </MuiLink>
  );
};
