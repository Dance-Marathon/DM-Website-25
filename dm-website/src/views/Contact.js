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
import OT1 from "../assets/images/OTHeadshots/AbbyFerrell-1.jpg";
import OT2 from "../assets/images/OTHeadshots/OliviaKnier-1.jpg";
import OT3 from "../assets/images/OTHeadshots/Copy of AlyssaFennen.jpg";
import OT4 from "../assets/images/OTHeadshots/Copy of MayaVaidya Headshot.jpg";
import OT5 from "../assets/images/OTHeadshots/SamanthaGurrerro.-Edit-2.jpg";
import OT6 from "../assets/images/OTHeadshots/Copy of SophiaAmaroso.png";
import OT7 from "../assets/images/OTHeadshots/Copy of marinamarketing.jpg";
import OT8 from "../assets/images/OTHeadshots/Copy of ashley paek editted.png";
import OT9 from "../assets/images/OTHeadshots/Copy of ADChloeClaxton-Edit.jpg";
import OT10 from "../assets/images/OTHeadshots/Copy of TylerBonnoront.-Edit.jpg";
import OT11 from "../assets/images/OTHeadshots/Copy of Emily Brundage Headshot.jpg";
import OT12 from "../assets/images/OTHeadshots/Copy of GabbyPetillo-Edit.jpg";
import OT13 from "../assets/images/OTHeadshots/Copy of Alexandra Polo (OUT)-Edit.jpg";
import OT14 from "../assets/images/OTHeadshots/abbythibodeau.jpg";
import OT15 from "../assets/images/OTHeadshots/Copy of KylieFinkelstein-Edit.jpg";
import OT16 from "../assets/images/OTHeadshots/Copy of RebeccaSalamon.png";
import OT17 from "../assets/images/OTHeadshots/Copy of Kelsey Reader.jpg";
import OT18 from "../assets/images/OTHeadshots/Copy of Jaxen Ranson Headshot.jpg";
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
  async function centerSectionWithMargins() {
    try {
      const section = document.querySelector('section.MuiBox-root.css-xl5k1b');
      if (section) {
        section.style.margin = '0 auto';
        console.log('Section centered using margin: 0 auto;');
      } else {
        console.error('Section not found.');
      }
    } catch (error) {
      console.error('An error occurred while centering the section:', error);
    }
  }
  
  centerSectionWithMargins();
  return (
    <ThemeProvider theme={LPtheme}>
      <ScrollToTop />
      <CssBaseline />
      <AppAppBar mode={mode} toggleColorMode={toggleColorMode}/>
      <LazyLoad height={200} offset={100} once>
      <PageHero imageUrl={ContactPic} title='Contact Us'/>
      </LazyLoad>
      <Box
        component="section"
        variant="gradient"
        bgColor="background.paper"
        position="relative"
        py={6}
        px={{ xs: 2, sm: 3, md: 4 }}
        mx="auto"
        width="100%"
        maxWidth={1200}
      >
        <Container>
          <Grid container>
            <Grid item xs={12} md={8} sx={{ mb: 3 }}>
              <Typography variant="h3" color="#7E31C8">
                The 2026 Overall Team
              </Typography>
              <Typography variant="body2" color="#FFC46E" opacity={0.8}>
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
                    name="Abby Ferrell"
                    position={{ color: "primary", label: "Executive Director" }}
                    email="aferrell@floridadm.org"
                  />
                </LazyLoad>
              </Box>
            </Grid>
            <Grid item xs={12} lg={6} md={4}>
              <Box mb={1}>
                <LazyLoad height={200} offset={100} once>
                  <HorizontalTeamCard
                    image={OT2}
                    name="Olivia Knier"
                    position={{ color: "info", label: "Finance Manager" }}
                    email="oknier@floridadm.org"
                  />
                </LazyLoad>
              </Box>
            </Grid>
            <Grid item xs={12} lg={6} md={4}>
              <Box mb={{ xs: 1, lg: 0 }}>
                <LazyLoad height={200} offset={100} once>
                  <HorizontalTeamCard
                    image={OT3}
                    name="Alyssa Fennen"
                    position={{ color: "primary-light", label: "Operations Manager" }}
                    email="afennen@floridadm.org"
                  />
                </LazyLoad>
              </Box>
            </Grid>
            <Grid item xs={12} lg={6} md={4}>
              <Box mb={{ xs: 1, lg: 0 }}>
                <LazyLoad height={200} offset={100} once>
                  <HorizontalTeamCard
                    image={OT4}
                    name="Maya Vaidya"
                    position={{ color: "info", label: "Marketing Manager" }}
                    email="mvaidya@floridadm.org"
                  />
                </LazyLoad>
              </Box>
            </Grid>
            <Grid item xs={12} lg={6} md={4}>
              <Box mb={1}>
                <LazyLoad height={200} offset={100} once>
                  <HorizontalTeamCard
                    image={OT5}
                    name="Samantha Guerrero"
                    position={{ color: "info", label: "Membership Manager" }}
                    email="sguerrero@floridadm.org"
                  />
                </LazyLoad>
              </Box>
            </Grid>
            <Grid item xs={12} lg={6} md={4}>
              <Box mb={1}>
                <LazyLoad height={200} offset={100} once>
                  <HorizontalTeamCard
                    image={OT6}
                    name="Sofia Amoroso"
                    position={{ color: "info", label: "Communications and Public Relations Overall" }}
                    email="samoroso@floridadm.org"
                  />
                </LazyLoad>
              </Box>
            </Grid>
            <Grid item xs={12} lg={6} md={4}>
              <Box mb={1}>
                <LazyLoad height={200} offset={100} once>
                  <HorizontalTeamCard
                    image={OT7}
                    name="Marina Cheema"
                    position={{ color: "info", label: "Digital Marketing Overall" }}
                    email="mcheema@floridadm.org"
                  />
                </LazyLoad>
              </Box>
            </Grid>
            <Grid item xs={12} lg={6} md={4}>
              <Box mb={1}>
                <LazyLoad height={200} offset={100} once>
                  <HorizontalTeamCard
                    image={OT8}
                    name="Ashley Paek"
                    position={{ color: "info", label: "Event Management Overall" }}
                    email="apaek@floridadm.org"
                  />
                </LazyLoad>
              </Box>
            </Grid>
            <Grid item xs={12} lg={6} md={4}>
              <Box mb={1}>
                <LazyLoad height={200} offset={100} once>
                  <HorizontalTeamCard
                    image={OT9}
                    name="Chloe Claxton"
                    position={{ color: "info", label: "Family Relations Overall" }}
                    email="cclaxton@floridadm.org"
                  />
                </LazyLoad>
              </Box>
            </Grid>
            <Grid item xs={12} lg={6} md={4}>
              <Box mb={1}>
                <LazyLoad height={200} offset={100} once>
                  <HorizontalTeamCard
                    image={OT10}
                    name="Tyler Bonnoront"
                    position={{ color: "info", label: "Finance Overall" }}
                    email="tbonnoront@floridadm.org"
                  />
                </LazyLoad>
              </Box>
            </Grid>
            <Grid item xs={12} lg={6} md={4}>
              <Box mb={1}>
                <LazyLoad height={200} offset={100} once>
                  <HorizontalTeamCard
                    image={OT11}
                    name="Emily Brundage"
                    position={{ color: "info", label: "Leadership Development Overall" }}
                    email="ebrundage@floridadm.org"
                  />
                </LazyLoad>
              </Box>
            </Grid>
            <Grid item xs={12} lg={6} md={4}>
              <Box mb={1}>
                <LazyLoad height={200} offset={100} once>
                  <HorizontalTeamCard
                    image={OT12}
                    name="Gabriella Petillo"
                    position={{ color: "info", label: "Marathon Relations Overall" }}
                    email="gpetillo@floridadm.org"
                  />
                </LazyLoad>
              </Box>
            </Grid>
            <Grid item xs={12} lg={6} md={4}>
              <Box mb={1}>
                <LazyLoad height={200} offset={100} once>
                  <HorizontalTeamCard
                    image={OT13}
                    name="Alexandra Polo"
                    position={{ color: "info", label: "Member Advancement Overall" }}
                    email="apolo@floridadm.org"
                  />
                </LazyLoad>
              </Box>
            </Grid>
            <Grid item xs={12} lg={6} md={4}>
              <Box mb={1}>
                <LazyLoad height={200} offset={100} once>
                  <HorizontalTeamCard
                    image={OT14}
                    name="Abby Thibodeau"
                    position={{ color: "info", label: "Merchandise Overall" }}
                    email="athibodeau@floridadm.org"
                  />
                </LazyLoad>
              </Box>
            </Grid>
            <Grid item xs={12} lg={6} md={4}>
              <Box mb={1}>
                <LazyLoad height={200} offset={100} once>
                  <HorizontalTeamCard
                    image={OT15}
                    name="Kylie Finkelstein"
                    position={{ color: "info", label: "Morale Overall" }}
                    email="kfinkelstein@floridadm.org"
                  />
                </LazyLoad>
              </Box>
            </Grid>
            <Grid item xs={12} lg={6} md={4}>
              <Box mb={1}>
                <LazyLoad height={200} offset={100} once>
                  <HorizontalTeamCard
                    image={OT16}
                    name="Rebecca Salamon"
                    position={{ color: "info", label: "Multimedia Overall" }}
                    email="rsalamon@floridadm.org"
                  />
                </LazyLoad>
              </Box>
            </Grid>
            <Grid item xs={12} lg={6} md={4}>
              <Box mb={1}>
                <LazyLoad height={200} offset={100} once>
                  <HorizontalTeamCard
                    image={OT17}
                    name="Kelsey Reader"
                    position={{ color: "info", label: "Organization Relations Overall" }}
                    email="kreader@floridadm.org"
                  />
                </LazyLoad>
              </Box>
            </Grid>
            <Grid item xs={12} lg={6} md={4}>
              <Box mb={1}>
                <LazyLoad height={200} offset={100} once>
                  <HorizontalTeamCard
                    image={OT18}
                    name="Jaxen Ranson"
                    position={{ color: "info", label: "Partnerships Overall" }}
                    email="jranson@floridadm.org"
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