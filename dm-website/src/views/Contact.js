
// @mui material components
import * as React from 'react'
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { Box, Typography } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import AppAppBar from '../components/AppAppBar';
import Hero from '../components/Hero';
import CssBaseline from '@mui/material/CssBaseline';
import getLPTheme from "../getLPTheme";
import { createTheme } from "@mui/material";
import ToggleColorMode from '../components/ToggleColorMode';

// Material Kit 2 React examples
import HorizontalTeamCard from "../components/TeamCard";

// Images
import team1 from "../assets/images/team-5.jpg";
import team2 from "../assets/images/team-5.jpg";
import team3 from "../assets/images/team-5.jpg";
import team4 from "../assets/images/team-5.jpg";

function Contact() {
  const [mode, setMode] = React.useState('light');
  const [showCustomTheme, setShowCustomTheme] = React.useState(true);
  const LPtheme = createTheme(getLPTheme(mode));
  const defaultTheme = createTheme({ palette: { mode } });

  return (
    <ThemeProvider theme={showCustomTheme ? LPtheme : defaultTheme}>
      <CssBaseline />
      <AppAppBar/>
      <Hero />
    <Box
      component="section"
      variant="gradient"
      bgColor="dark"
      position="relative"
      py={6}
      px={{ xs: 2, lg: 0 }}
      mx={-2}
    >
      <Container>
        <Grid container>
          <Grid item xs={12} md={8} sx={{ mb: 6 }}>
            <Typography variant="h3" color="white">
              The Executive Team
            </Typography>
            <Typography variant="body2" color="white" opacity={0.8}>
              There&apos;s nothing I really wanted to do in life that I wasn&apos;t able to get good
              at. That&apos;s my skill.
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={6}>
            <Box mb={1}>
              <HorizontalTeamCard
                image={team1}
                name="Emma Roberts"
                position={{ color: "info", label: "UI Designer" }}
                description="Artist is a term applied to a person who engages in an activity deemed to be an art."
              />
            </Box>
          </Grid>
          <Grid item xs={12} lg={6}>
            <Box mb={1}>
              <HorizontalTeamCard
                image={team2}
                name="William Pearce"
                position={{ color: "info", label: "Boss" }}
                description="Artist is a term applied to a person who engages in an activity deemed to be an art."
              />
            </Box>
          </Grid>
          <Grid item xs={12} lg={6}>
            <Box mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image={team3}
                name="Ivana Flow"
                position={{ color: "info", label: "Athlete" }}
                description="Artist is a term applied to a person who engages in an activity deemed to be an art."
              />
            </Box>
          </Grid>
          <Grid item xs={12} lg={6}>
            <Box mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image={team4}
                name="Marquez Garcia"
                position={{ color: "info", label: "JS Developer" }}
                description="Artist is a term applied to a person who engages in an activity deemed to be an art."
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
    </ThemeProvider>
  );
}

export default Contact;