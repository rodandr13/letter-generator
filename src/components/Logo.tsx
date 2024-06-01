import { Link as MuiLink } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export const Logo = () => {
  const logo = {
    display: "flex",
    alignItems: "center",
  };

  return (
    <MuiLink href="/" component={Link} sx={logo}>
      <Image src="/logo.svg" alt="Logo" width={179} height={48} />
    </MuiLink>
  );
};
