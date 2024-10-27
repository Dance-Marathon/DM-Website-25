import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import AppAppBar from '../components/AppAppBar';
import getLPTheme from '../getLPTheme';
import Footer from '../components/Footer';
import { Container, Typography, Link } from '@mui/material';
import ScrollToTop from "../components/ScrollToTop";
import PageHero from '../components/PageHero';
import YoutubeVid from "../components/YoutubeVid";

import MainEventPic from "../assets/images/pagepics/MainEventPic.jpg";

export default function MainEvent() {
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
      <PageHero imageUrl={MainEventPic} title='Main Event'/>
      <Container
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
          <Typography color="text.secondary" sx={{ marginBottom: 2 }}>
            <p>Our <span style={{color: '#233563', fontWeight: 'bold'}}>Main Event is a 26.2-hour event held in the Stephen O’Connell Center, or as we like to call it, the O’Dome!</span> During the Main Event, we celebrate all of our members and miracles made throughout the year. It is jam-packed full of entertainment, fundraising pushes, stories from Miracle Families, ceremonies, theme hours, a rave, and of course, the Linedance! <span style={{color: '#e2883c', fontWeight: 'bold'}}>Our Dancers will stand for the entire duration to symbolize our cause and the impact that we are making on the lives of children with pediatric illnesses at UF Health Shands Children’s Hospital.</span> At the end of our event we will get to witness the reveal of the total amount raised by Dance Marathon over the whole year.</p>
          </Typography>
          <Typography color="text.secondary" sx={{ marginBottom: 2 }}>
            <p>We’re excited to keep building on our efforts this year, creating meaningful miracles for the families who need them most. Catch a glimpse of last year’s impact by watching our <span style={{ color: '#e2883c', fontWeight: 'bold' }}>Main Event closing ceremonies video</span> here!</p>
          </Typography>
          <YoutubeVid videoId="BlBmUrjDoMw" />
          <Typography color="text.secondary" sx={{ marginBottom: 2 }}>
            <p>Follow us on social media for event updates!</p>
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary' }}>
          For additional questions, email {' '}
              <Link href="mailto:dgeller@floridadm.org" sx={{ color: '#1a73e8' }}>
                mainevent@floridadm.org
              </Link>.
            </Typography>
        </Box>
      </Container>
      <Footer />
    </ThemeProvider>
  );
}
