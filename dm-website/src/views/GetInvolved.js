import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import AppAppBar from '../components/AppAppBar';
import getLPTheme from '../getLPTheme';
import Footer from '../components/Footer';
import { Container, Typography, Grid, Button } from '@mui/material';
import ScrollToTop from "../components/ScrollToTop";
import PageHero from '../components/PageHero';
import SquareCard from '../components/SquareCard';
import { Link } from 'react-router-dom';

import HeroPic from "../assets/images/overalls/CA.jpg";
import GetInvolvedPic from "../assets/images/pagepics/GetInvolvedPic.jpg";
import AmbassadorsMiniPic from "../assets/images/pagepics/AmbassadorsMiniPic.jpg";
import ELPBox from "../assets/images/ELPBox.jpg";
import CaptainsBox from "../assets/images/miniboxpics/CaptainTeamsBox.JPG";
import MMBox from "../assets/images/miniboxpics/MiracleMakerBox.JPG";
import OrgBox from "../assets/images/miniboxpics/OrgBox.JPG";

export default function GetInvolved() {
  const [mode, setMode] = React.useState(() => {
    // Retrieve the stored theme from localStorage or default to 'dark'
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
      <PageHero imageUrl={GetInvolvedPic} title='Get Involved'/>
      <Container
        id="registertofundraise"
        sx={{
          pt: { xs: 2, sm: 6 },
          pb: { xs: 2, sm: 8 },
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'left',
          gap: { xs: 2, sm: 3 },
        }}
      >
        <Box
          sx={{
            width: { sm: '100%', md: '100%' },
            textAlign: { sm: 'left', md: 'left' },
          }}
        >
          <Typography component="h2" variant="h4" color='#233563'>
            Get Involved
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Take a look at all of the different ways you can get involved with Dance Marathon at UF. Whether you are interested in becoming a Captain, Dancer, Emerging Leader, Ambassador, Fundraiser, or member of Kirstyn’s Krew, this page is your path to getting involved! There are so many ways to give back through DM at UF, and we would love for you to join our Dance Marathon family and help us make miracles.
          </Typography>
        </Box>

        <Link to="/applications">
        <Button
          sx={{
            backgroundColor: (theme) => theme.palette.primary.main,
            color: (theme) => theme.palette.primary.contrastText,
            transition: 'background-color 0.3s ease',
            width: "95%",
            height: "50px",
            '&:hover': {
              backgroundColor: (theme) => theme.palette.secondary.main,
            },
          }}
          >
        <Typography
          variant="h4"
          color="white"
          fontSize={28}
          paddingTop="10px"
          paddingBottom="10px"
          sx={{
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: 'block',
            textShadow: '2px 2px 2px rgba(0, 0, 0, 0.5)',
          }}
        >
          Apply Now!
        </Typography>
        </Button>
        </Link>
      
        {/* Centered Grid for SquareCards */}
        <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
          <Grid 
            container 
            spacing={3} 
            justifyContent="center" 
            alignItems="center"
            sx={{ maxWidth: 1200, margin: '0 auto'}}
          >
            {[
              { image: HeroPic, title: 'Alumni', hoverText: "Our Dance Marathon at UF Alumni continue to support our cause and spread our movement, even after they graduate.", link: '/alumni' },
              { image: AmbassadorsMiniPic, title: 'Ambassadors', hoverText: "Organization Ambassadors serve as a liaison between Dance Marathon and their respective organization.", link: '/ambassadors' },
              { image: CaptainsBox, title: 'Captain Teams', hoverText: "Members of our Emerging Leaders Program work alongside the Recruitment Team, providing support to Captain Teams and brainstorming new ideas to ensure a successful future for our organization.", link: '/captains' },
              { image: MMBox, title: 'Miracle Makers', hoverText: "Dancers stand on their feet if able for the duration of our Main Event in April to raise funds and awareness for UF Health Shands Children’s Hospital.", link: '/miraclemakers' },
              { image: ELPBox, title: 'Emerging Leaders', hoverText: "Members of our Emerging Leaders Program work alongside the Recruitment Team, providing support to Captain Teams and brainstorming new ideas to ensure a successful future for our organization.", link: '/emergingleaders' },
              { image: OrgBox, title: 'Organizations', hoverText: "A variety of University of Florida affiliated Organizations participate in Dance Marathon every year!", link: '/organizations' },
            ].map((card, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <SquareCard {...card} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
      <Footer />
    </ThemeProvider>
  );
}
