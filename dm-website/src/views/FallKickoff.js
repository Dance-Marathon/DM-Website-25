import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import AppAppBar from '../components/AppAppBar';
import getLPTheme from '../getLPTheme';
import Footer from '../components/Footer';
import { Container, Typography } from '@mui/material';
import ScrollToTop from "../components/ScrollToTop";
import PageHero from '../components/PageHero';
import YoutubeVid from '../components/YoutubeVid';

import HeroPic from "../assets/images/overalls/SW.jpg";
import FallKickoffPic from "../assets/images/pagepics/FallKickoffPic.jpg";

export default function FallKickoff() {
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
      <PageHero imageUrl={FallKickoffPic} title='Fall Kickoff'/>
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
          <Typography color="text.secondary" sx={{ marginBottom: 6 }}>
            <p>DM at UF hosted its first annual Kickoff Event in 2021! We are excited to continue this event for many years to come. It is the first event of the year for all of our internal and external members, Miracle Families, and more to enjoy. The event is held at Flavet Field including music, fun games, Miracle Stories, food, merchandise, and more!</p>
          </Typography>
          <YoutubeVid videoId="fTElQSBr9bU"/>
        </Box>
      </Container>
      <Footer />
    </ThemeProvider>
  );
}