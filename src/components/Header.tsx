import {Box} from "@mui/system";
import {Container, Stack, Typography} from "@mui/material";
import {Logo} from "@/components/Logo";
import {IconLink} from "@/components/IconLink";
import {Indicator} from "@/components/Indicator";

export const Header = () => {
  return (
    <Box component="header">
      <Container>
        <Stack direction="row" justifyContent="space-between">
          <Stack direction="row" alignItems="center" gap={3}>
            <Logo />
            <IconLink href="#" variant="home">Home</IconLink>
          </Stack>
          <Stack direction="row" alignItems="center" gap={3}>
            <Stack direction="row" alignItems="center" gap={2}>
              <Typography>
                0/5 applications generated
              </Typography>
              <Indicator total={5} active={3} />
            </Stack>
            <IconLink href="#" variant="home">Home</IconLink>
          </Stack>
        </Stack>
      </Container>
    </Box>
  )
}
