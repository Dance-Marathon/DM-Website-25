import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import AppAppBar from '../components/AppAppBar';
import getLPTheme from '../getLPTheme';
import Footer from '../components/Footer';
import { Container, Typography, Grid, Link, } from '@mui/material';
import ScrollToTop from "../components/ScrollToTop";
import PageHero from '../components/PageHero';
import SquareCardSmall from '../components/SquareCardSmall';
import LazyLoad from 'react-lazyload';

import HowToGuide from "../assets/pdfs/how-to-guide.pdf"
import RegisterToFundraise from "../assets/images/pagepics/RegisterToFundraise.png";
import FundraisingGuideBox from "../assets/images/miniboxpics/FundraisingGuideMini.JPG";
import DDBox from "../assets/images/miniboxpics/DonorDriveBox.JPG";
import EmployeeBox from "../assets/images/miniboxpics/EmployeeMatchingBox.JPG";
import PartnersBox from "../assets/images/miniboxpics/PartnersBox.JPG";

export default function Fundraising() {
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
      <LazyLoad height={200} offset={100} once>
      <PageHero imageUrl={RegisterToFundraise} title='Register to Fundraise'/>
      </LazyLoad>
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
      <Typography variant="b1" color="text.secondary" paragraph>
        Registering to fundraise is pretty easy! Just follow the steps below:
      </Typography>
      <Typography variant="body1" color="text.secondary" paragraph>
        1. Follow this{' '}
        <Link href="https://events.dancemarathon.com/index.cfm?fuseaction=donorDrive.event&eventID=6292" target="_blank" rel="noopener noreferrer">
          link
        </Link>{' '}
        to register now!
      </Typography>
      <Typography variant="body1" color="text.secondary" paragraph>
        2. Select <span style={{ color: '#e2883c', fontWeight: 'bold' }}> 'Register Now'</span>
      </Typography>
      <Typography variant="body1" color="text.secondary" paragraph>
        3. If you have a DonorDrive account from DM at UF 2024, select <span style={{ color: '#e2883c', fontWeight: 'bold' }}> 'Login to your account'</span>.
      </Typography>
      <Typography variant="body1" color="text.secondary" paragraph>
        4. If you do not have a DonorDrive account, then create an account now.
      </Typography>
      <Typography variant="body1" color="text.secondary" paragraph>
        5. Next, select your role.
      </Typography>
      <Typography variant="body1" color="text.secondary" paragraph>
        6. Select ‘Participant’ then ‘Individual’ or join the team of your choosing!
      </Typography>
      <Typography variant="body1" color="text.secondary" paragraph>
        7. After, you will finalize your registration by answering the questions presented.
      </Typography>
      <Typography variant="body1" color="text.secondary" paragraph>
        8. Once you have registered on DonorDrive, you can customize your fundraising page by adding a profile picture, editing your story, and updating your fundraising goal. Use this {' '}
        <Link href={HowToGuide} target="_blank" rel="noopener noreferrer">
          How-To Guide
        </Link>{' '}
        for step by step instructions!
      </Typography>
      <Typography variant="body1" color="text.secondary" paragraph>
        9. From here, you can use the tools on DonorDrive to send emails from a template, track your fundraising, and share your fundraising link with others!
      </Typography>
      <Typography variant="b2"  color="text.secondary" paragraph sx={{ mt: 4 }}>
        If you have any questions about DonorDrive, contact the Finance Overall Director, 
        <Link href="mailto:rbeany@floridadm.org"> Ryan Beany</Link> at rbeany@floridadm.org.
      </Typography>
        </Box>
      
        {/* Centered Grid for SquareCards */}
        <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
        <LazyLoad height={200} offset={100} once>
          <Grid 
            container 
            spacing={3} 
            justifyContent="center" 
            alignItems="center"
            sx={{ maxWidth: 1200, margin: '0 auto'}}
          >
            {[
              { image: DDBox, title: 'DonorDrive', hoverText: "Learn how UF Health Shands Children's Hospital is using DonorDrive for fundraising.", link: '/donordrive' },
              { image: EmployeeBox, title: 'Employee Matching', hoverText: "See how your company can increase your contributions.", link: '/employeematching' },
              { image: FundraisingGuideBox, title: 'Fundraising Guide', hoverText: "Take a look at all the different ways you can fundraise with Dance Marathon at UF!", link: '/fundraisingguide' },
              { image: PartnersBox, title: 'Partners', hoverText: "Discover our partners!", link: '/partners' },
            ].map((card, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <SquareCardSmall {...card} />
              </Grid>
            ))}
          </Grid>
          </LazyLoad>
        </Box>
      </Container>
      <Footer />
    </ThemeProvider>
  );
}
