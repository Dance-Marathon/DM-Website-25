import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import AppAppBar from '../components/AppAppBar';
import getLPTheme from '../getLPTheme';
import Footer from '../components/Footer';
import GetInvolvedCard from '../components/GetInvolvedCard';
import { Container, Typography, Card, CardContent, Grid, Button } from '@mui/material';
import ScrollToTop from "../components/ScrollToTop";
import PageHero from '../components/PageHero';
import SquareCard from '../components/SquareCard';
import { Link } from 'react-router-dom';

import HeroPic from "../assets/images/CA.jpg";

export default function GetInvolved() {
  const [mode, setMode] = React.useState('light');
  const LPtheme = createTheme(getLPTheme(mode));

  const toggleColorMode = () => {
    setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ThemeProvider theme={LPtheme}>
      <ScrollToTop />
      <CssBaseline />
      <AppAppBar mode={mode} toggleColorMode={toggleColorMode} />
      <PageHero imageUrl={HeroPic} title='Get Involved'/>
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
          <Typography component="h2" variant="h4" color="primary">
            Get Involved
          </Typography>
          <Typography variant="body1" color="secondary">
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
            textShadow: '4px 4px 4px rgba(0, 0, 0, 0.5)',
          }}
        >
          Applications
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
            sx={{ maxWidth: 1200 }}
          >
            {[
              { image: HeroPic, title: 'Alumni', hoverText: "Our Dance Marathon at UF Alumni continue to support our cause and spread our movement, even after they graduate.", link: '/alumni' },
              { image: HeroPic, title: 'Ambassadors', hoverText: "Organization Ambassadors serve as a liaison between Dance Marathon and their respective organization.", link: '/ambassadors' },
              { image: HeroPic, title: 'Captain Teams', hoverText: "Members of our Emerging Leaders Program work alongside the Recruitment Team, providing support to Captain Teams and brainstorming new ideas to ensure a successful future for our organization.", link: '/captains' },
              { image: HeroPic, title: 'Dancers', hoverText: "Dancers stand on their feet if able for the duration of our Main Event in April to raise funds and awareness for UF Health Shands Children’s Hospital.", link: '/dancers' },
              { image: HeroPic, title: 'Emerging Leaders', hoverText: "Members of our Emerging Leaders Program work alongside the Recruitment Team, providing support to Captain Teams and brainstorming new ideas to ensure a successful future for our organization.", link: '/emerging-leaders' },
              { image: HeroPic, title: 'Organizations', hoverText: "Organization Ambassadors serve as a liaison between Dance Marathon and their respective organization.", link: '/organizations' },
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