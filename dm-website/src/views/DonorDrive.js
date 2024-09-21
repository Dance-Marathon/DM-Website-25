import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import AppAppBar from '../components/AppAppBar';
import getLPTheme from '../getLPTheme';
import Footer from '../components/Footer';
import { Container, Typography, Box, Link } from '@mui/material';
import ScrollToTop from "../components/ScrollToTop";
import PageHero from '../components/PageHero';
import AccordionFAQ from '../components/AccordionFAQ';
import FAQ from '../components/FAQ';

import HeroPic from "../assets/images/SW.jpg";

export default function DonorDrive() {
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
      <PageHero imageUrl={HeroPic} title='DonorDrive'/>
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
          <Typography variant="body1" gutterBottom sx={{ color: '#000000' }}>
          UF Health Shands Children’s Hospital is continuing to use DonorDrive, an online fundraising platform used widely by Children’s Miracle Network Hospitals, for its Dance Marathon programs. Dance Marathon at the University of Florida’s Fundraisers will be creating DonorDrive accounts to begin fundraising for DM at UF 2024. DonorDrive is safe and easy to use, and was utilized by UF Health Shands Children’s Hospital this past year. To create a fundraising page, register using this {''}
            <Link href="https://events.dancemarathon.com/index.cfm?fuseaction=donorDrive.event&eventID=6292" target="_blank" rel="noopener noreferrer">
            link
          </Link>
          .
          </Typography>
            </Box>
            <AccordionFAQ />
      <FAQ 
        question="If I had a fundraising page last year, do I need to create a new account with DonorDrive and a new fundraising page this year?" 
        answer="Yes! Each year that you choose to participate with Dance Marathon, you will need to create a fundraising page."
      />
      <FAQ 
        question="What should my billing statement list as the donation charge after I donate online?" 
        answer="Children's Miracle Network - Salt Lake City, UT" 
      />
      <Typography variant="b2"  color="black" paragraph sx={{ mt: 4 }}>
      If you have any further questions, please contact our Finance Manager
        <Link href="mailto:sfinkel@floridadm.org."> Skylar Finkel</Link> at sfinkel@floridadm.org.
      </Typography>
        </Container>
      <Footer />
    </ThemeProvider>
  );
}
