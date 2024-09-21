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

import HeroPic from "../assets/images/overalls/SW.jpg";

export default function MainEvent() {
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
      <PageHero imageUrl={HeroPic} title='Main Event'/>
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
          <Typography color="text.secondary" sx={{ marginBottom: 4 }}>
            <p>Our Main Event is a 26.2-hour event held in the Stephen O’Connell Center, or as we like to call it, the O’Dome! During the Main Event, we celebrate all of our members and miracles made throughout the year. It is jam-packed full of entertainment, fundraising pushes, stories from Miracle Families, ceremonies, theme hours, a rave, and of course, the Linedance! Our Dancers will stand for the entire duration to symbolize our cause and the impact that we are making on the lives of children with pediatric illnesses at UF Health Shands Children’s Hospital. At the end of our event we will get to witness the reveal of the total amount raised by Dance Marathon over the whole year.</p>
          </Typography>
          <Typography color="text.secondary" sx={{ marginBottom: 4 }}>
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
