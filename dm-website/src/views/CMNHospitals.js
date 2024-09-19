import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import AppAppBar from '../components/AppAppBar';
import getLPTheme from '../getLPTheme';
import Footer from '../components/Footer';
import { Container, Typography, Box, Link } from '@mui/material';
import ScrollToTop from "../components/ScrollToTop";
import PageHero from '../components/PageHero';

import HeroPic from "../assets/images/SW.jpg";
import TriBrand from "../assets/images/TriBrandColors.png";

export default function CMNHospitals() {
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
      <PageHero imageUrl={HeroPic} title='CMN & UF Health'/>
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
            <Typography variant="body1" sx={{ color: '#000000', marginBottom: 2 }}>
                UF Health Shands Children’s Hospital is the local Children's Miracle Network participating hospital for the North Central Florida, South Georgia, and West Palm Beach areas. Children's Miracle Network is an international non-profit organization dedicated to raising funds and awareness for children's hospitals. CMN's founding pledge, to keep all donations in the area in which they were raised, remains at the core of its philosophy.
            </Typography>
            <Typography variant="body1" sx={{ color: '#000000', marginBottom: 2 }}>
                As the state's premier pediatric health center, UF Health Shands Children's Hospital provides innovative and comprehensive care at the highest standards of quality and service in partnership with patient families, healthcare teams, and communities. Community contributions support pediatric research and help to purchase the latest technology and equipment. Donations also help make hospital stays more comfortable and enjoyable for pediatric patients and their families.
            </Typography>

            <Typography variant="body1" sx={{ color: '#000000', marginBottom: 2 }}>
                Ranked one of the top 50 pediatric hospitals in the nation in seven categories, UF Health Shands Children's Hospital and Children's Miracle Network have created one of the greatest facilities of care for children and young adults.
            </Typography>

            <Typography variant="body1" sx={{ color: '#000000', marginBottom: 2 }}>
                For more information, please visit:{' '}
                <Link href="https://ufhealth.org/shands-hospital-children-uf" target="_blank" rel="noopener" sx={{ color: '#1a73e8' }}>
                https://ufhealth.org/shands-hospital-children-uf
                </Link>
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 4 }}>
                <img
                src={TriBrand}
                alt="UF Health Shands Children's Hospital"
                style={{ maxWidth: '100%', height: 'auto' }}
                />
            </Box>
            </Box>
        </Container>
      <Footer />
    </ThemeProvider>
  );
}
