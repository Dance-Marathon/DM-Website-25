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

import MoralloweenPic from "../assets/images/pagepics/MoralloweenHero.jpeg";
import MWeen1 from "../assets/images/pagepics/MWeen1.jpg";
import MWeen2 from "../assets/images/pagepics/MWeen2.jpg";
import MWeen3 from "../assets/images/pagepics/MWeen3.jpg";
import MWeen4 from "../assets/images/pagepics/MWeen4.jpg";

export default function Moralloween() {
  const [mode, setMode] = React.useState(() => {
    return localStorage.getItem('theme') || 'light';
  });
  const LPtheme = createTheme(getLPTheme(mode));

  const toggleColorMode = () => {
    setMode((prev) => {
      const newMode = prev === 'dark' ? 'light' : 'dark';
      localStorage.setItem('theme', newMode);
      return newMode;
    });
  };

  return (
    <ThemeProvider theme={LPtheme}>
      <ScrollToTop />
      <CssBaseline />
      <AppAppBar mode={mode} toggleColorMode={toggleColorMode} />
      <PageHero imageUrl={MoralloweenPic} title='Moralloween'/>
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
            <p><span style={{color: '#233563', fontWeight: 'bold'}}>Moralloween</span> is an annual fall fundraiser put on by Dance Marathon at UF, a student-run philanthropy that raises funds and awareness year-round at UF Health Shands Children’s Hospital! <span style={{color: '#e2883c', fontWeight: 'bold'}}>Organizations across campus participate by creating booths with activities, candy, and ways to bond with attendees and Miracle Families.</span> Moralloween has a DJ, great food, and is a great way for everyone to get in the Halloween spirit!</p>
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary' }}>
            For more information, please contact the Morale Overall Director, Dylan Siegel, at {' '}
              <Link href="mailto:dgeller@floridadm.org" sx={{ color: '#1a73e8' }}>
                dsiegel@floridadm.org
              </Link>.
            </Typography>
        </Box>
        <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', justifyContent: 'center' }}>
          {[MWeen1, MWeen2, MWeen3, MWeen4].map((image, index) => (
            <Box
              component="img"
              key={index}
              src={image}
              alt={`Moralloween ${index + 1}`}
              sx={{
                width: 275,
                height: 250,
                objectFit: 'cover',
                borderRadius: 2,
                boxShadow: 3,
              }}
            />
          ))}
        </Box>
      </Container>
      <Footer />
    </ThemeProvider>
  );
}
