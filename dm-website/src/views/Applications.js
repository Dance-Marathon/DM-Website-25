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
import ApplicationsPic from "../assets/images/Applications.jpg";

export default function Applications() {
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
      <PageHero imageUrl={ApplicationsPic} title='Applications'/>
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
            <Typography variant="body1" gutterBottom sx={{ color: '#000000', marginBottom: 2 }}>
                Thank you for your interest in Dance Marathon at the University of Florida 2025.
            </Typography>
            <Typography variant="body1" gutterBottom color="text.secondary">
                The online application forms are linked below. In order to be considered for a Captain, the Emerging Leaders Program, or Ambassador position, you must:
            </Typography>

            <ul>
                <li>
                <Typography variant="body1" color="text.secondary">Complete the online application form.</Typography>
                </li>
                <li>
                <Typography variant="body1" color="text.secondary">Create a DonorDrive personal fundraising page.</Typography>
                </li>
                <li>
                <Typography variant="body1" color="text.secondary">
                    Pay the $25 application fee. You only need to pay the application fee <strong>once</strong> even if you are applying for more than one position.
                    Instructions on how to complete both of these items can be found on the front page of either application.
                </Typography>
                </li>
            </ul>

            <Typography variant="body1" gutterBottom color="text.secondary">
                You can apply for both the Emerging Leaders Program and for Captain Teams. However, your Captain Application will take priority over your Emerging Leader Application.
                To be eligible to be an Ambassador, you <strong>cannot</strong> hold another position as well.
            </Typography>

            <Typography variant="body1" sx={{ fontWeight: 'bold', color: '#000000', marginTop: 4 }} gutterBottom>
                Manager Application
            </Typography>
            <Typography variant="body1" gutterBottom color="text.secondary">
                Now Closed
            </Typography>

            <Typography variant="body1" sx={{ fontWeight: 'bold', color: '#000000' }} gutterBottom>
                Overall Director Application
            </Typography>
            <Typography variant="body1" gutterBottom color="text.secondary">
                Now Closed
            </Typography>

            <Typography variant="body1" sx={{ fontWeight: 'bold', color: '#000000' }} gutterBottom>
                Assistant Director Application
            </Typography>
            <Typography variant="body1" gutterBottom color="text.secondary">
                Now Closed
            </Typography>

            <Typography variant="body1" sx={{ fontWeight: 'bold', color: '#000000' }} gutterBottom>
                Captain Application
            </Typography>
            <Typography variant="body1" gutterBottom color="text.secondary">
                Now Closed
            </Typography>

            <Typography variant="body1" sx={{ fontWeight: 'bold', color: '#000000' }} gutterBottom>
                Emerging Leaders Application
            </Typography>
            <Typography variant="body1" gutterBottom color="text.secondary">
                Now Closed
            </Typography>

            <Typography variant="body1" sx={{ fontWeight: 'bold', color: '#000000' }} gutterBottom>
                Ambassador Application
            </Typography>
            <Typography variant="body1" gutterBottom color="text.secondary">
                Now Closed
            </Typography>

            <Typography variant="body1" gutterBottom sx={{ color: '#000000', marginTop: 4 }}>
                If you have any questions regarding applications, please reach out to our Membership Manager, Abby Ferrell, at{' '}
                <Link href="mailto:aferrell@floridadm.org" sx={{ color: '#1a73e8' }}>
                aferrell@floridadm.org
                </Link>
                .
            </Typography>
        </Box>
      </Container>
      <Footer />
    </ThemeProvider>
  );
}
