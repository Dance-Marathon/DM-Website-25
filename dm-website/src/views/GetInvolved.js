import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import AppAppBar from "../components/AppAppBar";
import getLPTheme from "../getLPTheme";
import Footer from "../components/Footer";
import { Container, Typography, Grid, Button } from "@mui/material";
import ScrollToTop from "../components/ScrollToTop";
import PageHero from "../components/PageHero";
import SquareCard from "../components/SquareCard";
import { Link } from "react-router-dom";

import GetInvolvedPic from "../assets/images/pagepics/GetInvolvedPic.jpg";
import AlumniBox from "../assets/images/miniboxpics/AlumniMini.jpg"
import AmbassadorsMiniPic from "../assets/images/miniboxpics/AmbassadorsMiniPic.jpg";
import ELPBox from "../assets/images/miniboxpics/ELPBox.jpg";
import CaptainsBox from "../assets/images/miniboxpics/CaptainTeamsBox.JPG";
import MMBox from "../assets/images/miniboxpics/MiracleMakerBox.JPG";
import OrgBox from "../assets/images/miniboxpics/OrgBox.JPG";

export default function GetInvolved() {
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
      <AppAppBar mode={mode} toggleColorMode={toggleColorMode} />
      <PageHero imageUrl={GetInvolvedPic} title="Get Involved" />
      <Container
        id="registertofundraise"
        sx={{
          pt: { xs: 2, sm: 6 },
          pb: { xs: 2, sm: 8 },
          display: "flex",
          flexDirection: "column",
          alignItems: "left",
          gap: { xs: 2, sm: 3 },
        }}
      >
        <Box
          sx={{
            width: { sm: "100%", md: "100%" },
            textAlign: { sm: "left", md: "left" },
          }}
        >
          <Typography variant="body1" color="text.secondary">
            Take a look at all of the different ways you can get involved with
            Dance Marathon at UF. Whether you are interested in becoming a
            Captain, Miracle Maker, Emerging Leader, Ambassador, Fundraiser, this page is your path to getting involved! There
            are so many ways to give back through DM at UF, and we would love
            for you to join our Dance Marathon family and help us make miracles.
          </Typography>
        </Box>

  <Box
    sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      maxWidth: "100%",
    }}
  >
  <Button
    component={Link}
    to="/applications"
    sx={{
      backgroundColor: "rgba(35, 53, 99, 0.85)",
      color: (theme) => theme.palette.primary.contrastText,
      borderRadius: '50px',
      transition: 'background-color 0.3s ease',
      width: '100%',
      height: '80px',
      '&:hover': {
        backgroundColor: "rgba(226, 136, 60, 0.85)",
      },
    }}
  >
    <Typography
      variant="h4"
      fontSize={40}
      paddingTop="10px"
      paddingBottom="10px"
      sx={{
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        display: 'block',
        //textShadow: '2px 2px 2px rgba(0, 0, 0, 0.5)',
        color: 'white', // Ensure the text is white
      }}
    >
      Apply Now!
    </Typography>
  </Button>
  </Box>
      
        {/* Centered Grid for SquareCards */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Grid
            container
            spacing={3}
            justifyContent="center"
            alignItems="center"
            sx={{ maxWidth: 1200, margin: "0 auto" }}
          >
            {[
              {
                image: AlumniBox,
                title: "Alumni",
                hoverText:
                  "Our Dance Marathon at UF Alumni continue to support our cause and spread our movement, even after they graduate.",
                link: "/alumni",
              },
              {
                image: AmbassadorsMiniPic,
                title: "Ambassadors",
                hoverText:
                  "Organization Ambassadors serve as a liaison between Dance Marathon and their respective organization.",
                link: "/ambassadors",
              },
              {
                image: CaptainsBox,
                title: "Captain Teams",
                hoverText:
                  "Captains belong to 1 of 15 teams and take on yearlong responsibilities specific to their respective teams, with the goal of supporting and promoting our organization.",
                link: "/captainteams",
              },
              {
                image: MMBox,
                title: "Miracle Makers",
                hoverText:
                  "Miracle Makers breathe life into all of our events, fundraising pushes, and ultimately the Main Event",
                link: "/miraclemakers",
              },
              {
                image: ELPBox,
                title: "Emerging Leaders",
                hoverText:
                  "Emerging Leaders Program members assist the Recruitment Team, support Captain Teams, and brainstorm ideas for our organization's future success.",
                link: "/emergingleaders",
              },
              {
                image: OrgBox,
                title: "Organizations",
                hoverText:
                  "A variety of University of Florida affiliated Organizations participate in Dance Marathon every year!",
                link: "/organizations",
              },
            ].map((card, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <SquareCard
                  {...card}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
      <Footer />
    </ThemeProvider>
  );
}
