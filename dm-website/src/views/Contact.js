
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
import LazyLoad from 'react-lazyload';

// Material Kit 2 React examples
import HorizontalTeamCard from "../components/TeamCard";

// Images
import OT1 from "../assets/images/RA.jpg";
import OT2 from "../assets/images/SF.jpg";
import OT3 from "../assets/images/MT.jpg";
import OT4 from "../assets/images/SW.jpg";
import OT5 from "../assets/images/AF.jpg";
import OT6 from "../assets/images/RD.jpg";
import OT7 from "../assets/images/CA.jpg";
import OT8 from "../assets/images/DG.jpg";
import OT9 from "../assets/images/BEANY.png";
import OT10 from "../assets/images/SL.jpg";
import OT11 from "../assets/images/LD.jpg";
import OT12 from "../assets/images/OK.jpg";
import OT13 from "../assets/images/DS.png";
import OT14 from "../assets/images/AD.jpg";
import OT15 from "../assets/images/CL.jpeg";
import OT16 from "../assets/images/AE.jpg";
import OT17 from "../assets/images/JW.jpg";
import OT18 from "../assets/images/CE.jpg";
import OT19 from "../assets/images/GC.jpg";
import OT20 from "../assets/images/AO.jpg";
import Footer from '../components/Footer';

function Contact() {
  const [mode, setMode] = React.useState('light');
  const [showCustomTheme, setShowCustomTheme] = React.useState(true);
  const LPtheme = createTheme(getLPTheme(mode));
  const defaultTheme = createTheme({ palette: { mode } });

  const toggleColorMode = () => {
    setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ThemeProvider theme={showCustomTheme ? LPtheme : defaultTheme}>
      <CssBaseline />
      <AppAppBar mode={mode} toggleColorMode={toggleColorMode}/>
      <Hero />
      <Box
        component="section"
        variant="gradient"
        bgColor="background.paper"
        position="relative"
        py={6}
        px={{ xs: 2, lg: 0 }}
        mx={-2}
        maxWidth="100%"
      >
        <Container>
          <Grid container>
            <Grid item xs={12} md={8} sx={{ mb: 3 }}>
              <Typography variant="h3" color="primary">
                The 2025 Overall Team
              </Typography>
              <Typography variant="body2" color="secondary" opacity={0.8}>
                <i>Meet the Overalls</i>
              </Typography>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={12} lg={6} md={4}>
              <Box mb={1}>
                <LazyLoad height={200} offset={100} once>
                  <HorizontalTeamCard
                    image={OT1}
                    name="Ryan Athay"
                    position={{ color: "primary", label: "Executive Director" }}
                    email="rathay@floridadm.org"
                  />
                </LazyLoad>
              </Box>
            </Grid>
            <Grid item xs={12} lg={6} md={4}>
              <Box mb={1}>
                <LazyLoad height={200} offset={100} once>
                  <HorizontalTeamCard
                    image={OT2}
                    name="Skylar Finkel"
                    position={{ color: "info", label: "Finance Manager" }}
                    email="sfinkel@floridadm.org"
                  />
                </LazyLoad>
              </Box>
            </Grid>
            <Grid item xs={12} lg={6} md={4}>
              <Box mb={{ xs: 1, lg: 0 }}>
                <LazyLoad height={200} offset={100} once>
                  <HorizontalTeamCard
                    image={OT3}
                    name="Macy Thompson"
                    position={{ color: "primary-light", label: "Operations Manager" }}
                    email="mthompson@floridadm.org"
                  />
                </LazyLoad>
              </Box>
            </Grid>
            <Grid item xs={12} lg={6} md={4}>
              <Box mb={{ xs: 1, lg: 0 }}>
                <LazyLoad height={200} offset={100} once>
                  <HorizontalTeamCard
                    image={OT4}
                    name="Sydney Wall"
                    position={{ color: "info", label: "Marketing Manager" }}
                    email="swall@floridadm.org"
                  />
                </LazyLoad>
              </Box>
            </Grid>
            <Grid item xs={12} lg={6} md={4}>
              <Box mb={1}>
                <LazyLoad height={200} offset={100} once>
                  <HorizontalTeamCard
                    image={OT5}
                    name="Abby Ferrell"
                    position={{ color: "info", label: "Membership Manager" }}
                    email="aferrell@floridadm.org"
                  />
                </LazyLoad>
              </Box>
            </Grid>
            <Grid item xs={12} lg={6} md={4}>
              <Box mb={1}>
                <LazyLoad height={200} offset={100} once>
                  <HorizontalTeamCard
                    image={OT6}
                    name="Raegan DiRenzo"
                    position={{ color: "info", label: "Dancer Engagement Overall" }}
                    email="rdirenzo@floridadm.org"
                  />
                </LazyLoad>
              </Box>
            </Grid>
            <Grid item xs={12} lg={6} md={4}>
              <Box mb={1}>
                <LazyLoad height={200} offset={100} once>
                  <HorizontalTeamCard
                    image={OT7}
                    name="Cameron Appel"
                    position={{ color: "info", label: "Digital Marketing Overall" }}
                    email="cappel@floridadm.org"
                  />
                </LazyLoad>
              </Box>
            </Grid>
            <Grid item xs={12} lg={6} md={4}>
              <Box mb={1}>
                <LazyLoad height={200} offset={100} once>
                  <HorizontalTeamCard
                    image={OT8}
                    name="Dawson Geller"
                    position={{ color: "info", label: "Family Relations Overall" }}
                    email="dgeller@floridadm.org"
                  />
                </LazyLoad>
              </Box>
            </Grid>
            <Grid item xs={12} lg={6} md={4}>
              <Box mb={1}>
                <LazyLoad height={200} offset={100} once>
                  <HorizontalTeamCard
                    image={OT9}
                    name="Ryan Beany"
                    position={{ color: "info", label: "Finance Overall" }}
                    email="rbeany@floridadm.org"
                  />
                </LazyLoad>
              </Box>
            </Grid>
            <Grid item xs={12} lg={6} md={4}>
              <Box mb={1}>
                <LazyLoad height={200} offset={100} once>
                  <HorizontalTeamCard
                    image={OT10}
                    name="Sophie Linale"
                    position={{ color: "info", label: "Leadership Development Overall" }}
                    email="slinale@floridadm.org"
                  />
                </LazyLoad>
              </Box>
            </Grid>
            <Grid item xs={12} lg={6} md={4}>
              <Box mb={1}>
                <LazyLoad height={200} offset={100} once>
                  <HorizontalTeamCard
                    image={OT11}
                    name="Lexi Devescovi"
                    position={{ color: "info", label: "Marathon Relations Overall" }}
                    email="adevescovi@floridadm.org"
                  />
                </LazyLoad>
              </Box>
            </Grid>
            <Grid item xs={12} lg={6} md={4}>
              <Box mb={1}>
                <LazyLoad height={200} offset={100} once>
                  <HorizontalTeamCard
                    image={OT12}
                    name="Olivia Knier"
                    position={{ color: "info", label: "Merchandise Overall" }}
                    email="oknier@floridadm.org"
                  />
                </LazyLoad>
              </Box>
            </Grid>
            <Grid item xs={12} lg={6} md={4}>
              <Box mb={1}>
                <LazyLoad height={200} offset={100} once>
                  <HorizontalTeamCard
                    image={OT13}
                    name="Dylan Siegel"
                    position={{ color: "info", label: "Morale Overall" }}
                    email="dsiegel@floridadm.org"
                  />
                </LazyLoad>
              </Box>
            </Grid>
            <Grid item xs={12} lg={6} md={4}>
              <Box mb={1}>
                <LazyLoad height={200} offset={100} once>
                  <HorizontalTeamCard
                    image={OT14}
                    name="Ava Dinow"
                    position={{ color: "info", label: "Multimedia Overall" }}
                    email="adinow@floridadm.org"
                  />
                </LazyLoad>
              </Box>
            </Grid>
            <Grid item xs={12} lg={6} md={4}>
              <Box mb={1}>
                <LazyLoad height={200} offset={100} once>
                  <HorizontalTeamCard
                    image={OT15}
                    name="Caroline Lee"
                    position={{ color: "info", label: "Organization Relations Overall" }}
                    email="clee@floridadm.org"
                  />
                </LazyLoad>
              </Box>
            </Grid>
            <Grid item xs={12} lg={6} md={4}>
              <Box mb={1}>
                <LazyLoad height={200} offset={100} once>
                  <HorizontalTeamCard
                    image={OT16}
                    name="Averie Engel"
                    position={{ color: "info", label: "Outreach Overall" }}
                    email="aengel@floridadm.org"
                  />
                </LazyLoad>
              </Box>
            </Grid>
            <Grid item xs={12} lg={6} md={4}>
              <Box mb={1}>
                <LazyLoad height={200} offset={100} once>
                  <HorizontalTeamCard
                    image={OT17}
                    name="Jessica Winograd"
                    position={{ color: "info", label: "Partnerships Overall" }}
                    email="jwinograd@floridadm.org"
                  />
                </LazyLoad>
              </Box>
            </Grid>
            <Grid item xs={12} lg={6} md={4}>
              <Box mb={1}>
                <LazyLoad height={200} offset={100} once>
                  <HorizontalTeamCard
                    image={OT18}
                    name="Caroline Eaton"
                    position={{ color: "info", label: "Productions Overall" }}
                    email="ceaton@floridadm.org"
                  />
                </LazyLoad>
              </Box>
            </Grid>
            <Grid item xs={12} lg={6} md={4}>
              <Box mb={1}>
                <LazyLoad height={200} offset={100} once>
                  <HorizontalTeamCard
                    image={OT19}
                    name="Grey Chapin"
                    position={{ color: "info", label: "Public Relations Overall" }}
                    email="gchapin@floridadm.org"
                  />
                </LazyLoad>
              </Box>
            </Grid>
            <Grid item xs={12} lg={6} md={4}>
              <Box mb={1}>
                <LazyLoad height={200} offset={100} once>
                  <HorizontalTeamCard
                    image={OT20}
                    name="Ava Orlando"
                    position={{ color: "info", label: "Recruitment Overall" }}
                    email="aorlando@floridadm.org"
                  />
                </LazyLoad>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Footer />
    </ThemeProvider>
  );
}
export default Contact;