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

import HeroPic from "../assets/images/overalls/SW.jpg";
import HowToGuide from "../assets/pdfs/how-to-guide.pdf"

export default function Fundraising() {
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
      <PageHero imageUrl={HeroPic} title='Register to Fundraise'/>
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
      <Typography variant="b1" color="black" paragraph>
        Registering to fundraise is pretty easy! Just follow the steps below:
      </Typography>
      <Typography variant="body1" color="black" paragraph>
        1. Follow this{' '}
        <Link href="https://events.dancemarathon.com/index.cfm?fuseaction=donorDrive.event&eventID=6292" target="_blank" rel="noopener noreferrer">
          link
        </Link>{' '}
        to register now!
      </Typography>
      <Typography variant="body1" color="black" paragraph>
        2. Select <b>'Register Now'</b>
      </Typography>
      <Typography variant="body1" color="black" paragraph>
        3. If you have a DonorDrive account from DM at UF 2024, select <b>‘Login to your account’</b>.
      </Typography>
      <Typography variant="body1" color="black" paragraph>
        4. If you do not have a DonorDrive account, then create an account now.
      </Typography>
      <Typography variant="body1" color="black" paragraph>
        5. Next, select your role.
      </Typography>
      <Typography variant="body1" color="black" paragraph>
        6. Select ‘Participant’ then ‘Individual’ or join the team of your choosing!
      </Typography>
      <Typography variant="body1" color="black" paragraph>
        7. After, you will finalize your registration by answering the questions presented.
      </Typography>
      <Typography variant="body1" color="black" paragraph>
        8. Once you have registered on DonorDrive, you can customize your fundraising page by adding a profile picture, editing your story, and updating your fundraising goal. Use this {' '}
        <Link href={HowToGuide} target="_blank" rel="noopener noreferrer">
          How-To Guide
        </Link>{' '}
        for step by step instructions!
      </Typography>
      <Typography variant="body1" color="black" paragraph>
        9. From here, you can use the tools on DonorDrive to send emails from a template, track your fundraising, and share your fundraising link with others!
      </Typography>
      <Typography variant="b2"  color="black" paragraph sx={{ mt: 4 }}>
        If you have any questions about DonorDrive, contact the Finance Overall Director, 
        <Link href="mailto:rbeany@floridadm.org"> Ryan Beany</Link> at rbeany@floridadm.org.
      </Typography>
        </Box>
      
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
              { image: HeroPic, title: 'DonorDrive', hoverText: "", link: '/donordrive' },
              { image: HeroPic, title: 'Employee Matching', hoverText: "", link: '/employeematching' },
              { image: HeroPic, title: 'Fundraising Guide', hoverText: "", link: '/fundraisingguide' },
              { image: HeroPic, title: 'Sponsors', hoverText: "", link: '/sponsors' },
            ].map((card, index) => (
              <Grid item xs={6} sm={3} md={3} key={index}>
                <SquareCardSmall {...card} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
      <Footer />
    </ThemeProvider>
  );
}
