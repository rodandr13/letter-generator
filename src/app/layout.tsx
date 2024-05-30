import { ReactNode } from "react";

import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import type { Metadata } from "next";

import { baseTheme } from "@/app/theme/base";
import { Header } from "@/components/Header";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={baseTheme}>
          <Box sx={{ paddingTop: 4, paddingBottom: 15 }}>
            <CssBaseline />
            <Header />
            {children}
          </Box>
        </ThemeProvider>
      </body>
    </html>
  );
}
