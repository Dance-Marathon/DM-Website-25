
// @mui material components
import * as React from 'react'
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { Box, Typography } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import AppAppBar from '../components/AppAppBar';
import CssBaseline from '@mui/material/CssBaseline';
import getLPTheme from "../getLPTheme";
import { createTheme } from "@mui/material";
import LazyLoad from 'react-lazyload';
import PageHero from '../components/PageHero';

// Material Kit 2 React examples
import HorizontalTeamCard from "../components/TeamCard";

// Images
import OT1 from "../assets/images/OTHeadshots/RyanAthay-1.jpg";
import OT2 from "../assets/images/OTHeadshots/SkylarFinkel-1.jpg";
import OT3 from "../assets/images/OTHeadshots/MacyThompson-1.jpg";
import OT4 from "../assets/images/OTHeadshots/SydneyWall-1.jpg";
import OT5 from "../assets/images/OTHeadshots/AbbyFerrell-1.jpg";
import OT6 from "../assets/images/OTHeadshots/ReaganDiRenzo-1.jpg";
import OT7 from "../assets/images/OTHeadshots/CameronAppel-1.jpg";
import OT8 from "../assets/images/OTHeadshots/DawsonGeller-1.jpg";
import OT9 from "../assets/images/OTHeadshots/RyanBeany-1.jpg";
import OT10 from "../assets/images/OTHeadshots/SophieLinale-1.jpg";
import OT11 from "../assets/images/OTHeadshots/LexiDevescovi-1.jpg";
import OT12 from "../assets/images/OTHeadshots/OliviaKnier-1.jpg";
import OT13 from "../assets/images/OTHeadshots/DylanSiegel-1.jpg";
import OT14 from "../assets/images/OTHeadshots/AvaDinow-1.jpg";
import OT15 from "../assets/images/OTHeadshots/CarolineLee-1.jpg";
import OT16 from "../assets/images/OTHeadshots/AverieEngel-1.jpg";
import OT17 from "../assets/images/OTHeadshots/JessWinograd-1.jpg";
import OT18 from "../assets/images/OTHeadshots/CarolineEaton-1.jpg";
import OT19 from "../assets/images/OTHeadshots/GreyChapin-1.jpg";
import OT20 from "../assets/images/OTHeadshots/AvaOrlando-1.jpg";
import Footer from '../components/Footer';

import ScrollToTop from "../components/ScrollToTop";

import ContactPic from "../assets/images/pagepics/Contact Us.jpg";

function Contact() {
  const [mode, setMode] = React.useState(() => {
    // Retrieve the stored theme from localStorage or default to 'light'
    return localStorage.getItem('theme') || 'light';
  });
  const LPtheme = createTheme(getLPTheme(mode));

  const toggleColorMode = () => {
    setMode((prev) => {
      const newMode = prev === 'dark' ? 'light' : 'dark';
      localStorage.setItem('theme', newMode); // Store the new mode in localStorage
      return newMode;
    });
  };
  return (
    <ThemeProvider theme={LPtheme}>
      <ScrollToTop />
      <CssBaseline />
      <AppAppBar mode={mode} toggleColorMode={toggleColorMode}/>
      <PageHero imageUrl={ContactPic} title='Contact Us'/>
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