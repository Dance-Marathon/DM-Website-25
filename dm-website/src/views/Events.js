import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import AppAppBar from '../components/AppAppBar';
import getLPTheme from '../getLPTheme';
import Footer from '../components/Footer';
import { Container, Typography, Link, Grid } from '@mui/material';
import ScrollToTop from "../components/ScrollToTop";
import PageHero from '../components/PageHero';
import SquareCard from '../components/SquareCard';

import HeroPic from "../assets/images/overalls/SW.jpg";

export default function Events() {
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
      <PageHero imageUrl={HeroPic} title='Events'/>
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
          <Typography variant="h4" component="h1" gutterBottom sx={{ color: 'text.secondary' }}>
                A Yearlong Philanthropy
            </Typography>

            <Typography variant="body1" gutterBottom sx={{ color: 'text.secondary' }}>
                Dance Marathon is a{' '}
                <Typography component="span" sx={{ fontWeight: 'bold', color: 'orange' }}>
                yearlong commitment
                </Typography >{' '}
                that includes many fundraising events aimed at reaching University students, businesses, and Gainesville residents. These events help us create a fun and exciting atmosphere while raising awareness about DM, whether it is through social media or inspirational stories from our Miracle Children who speak at the events. DM at UF's community events are all highly anticipated as they build up throughout the year toward the main Event in the spring.
            </Typography>

            <Typography variant="body1" gutterBottom sx={{ color: 'text.secondary', fontWeight: 'bold', marginTop: 4 }}>
                Your involvement in these events is what makes them successful!
            </Typography>

            <Typography variant="body1" gutterBottom sx={{ color: 'text.secondary', marginTop: 4 }}>
                Reaching out for the support of the entire community is vital for the continued success of Gainesville's local Children's Miracle Network Hospital. For more information about how to get involved in these events, please contact us at{' '}
                <Link href="mailto:floridadm@floridadm.org" sx={{ color: '#1a73e8' }}>
                floridadm@floridadm.org
                </Link>
                .
            </Typography>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
          <Grid 
            container 
            spacing={3} 
            justifyContent="center" 
            alignItems="center"
            sx={{ maxWidth: 1200 }}
          >
            {[
              { image: HeroPic, title: 'Fall Kickoff', hoverText: "Our annual Fall Kickoff enjoyed by all internal and external memebers.", link: '/fallkickoff' },
              { image: HeroPic, title: 'Main Event', hoverText: "A celebration for all members and miracles made throughout the year.", link: '/mainevent' },
              { image: HeroPic, title: 'Mini-Marathons', hoverText: "High schools showing passion for Dance Marathon before their college years.", link: '/minimarathons' },
              { image: HeroPic, title: 'Miracles in Color 5k', hoverText: "5K benefiting UF Health Shands Children's Hospital, with some color in the mix.", link: '/miracles5k' },
              { image: HeroPic, title: 'Moralloween', hoverText: "A great way for everyone to get in the Halloween spirit!", link: '/moralloween' },
              { image: HeroPic, title: 'Transform Today', hoverText: "Our largest fall fundraising effort lasting 26.2 hours.", link: '/transformtoday' },
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
