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
import EventsPic from "../assets/images/pagepics/EventsPic.png";
import TTBoxPic from "../assets/images/miniboxpics/TTBoxPic.png";
import MEBoxPic from "../assets/images/miniboxpics/MEBoxPicNew.png";
import KickoffBoxPic from "../assets/images/miniboxpics/Kickoff.jpeg";
import MMBox from "../assets/images/miniboxpics/MiniMarathonBox.JPG";
import MWeenBox from "../assets/images/miniboxpics/MWeenBox.JPG";

export default function Events() {
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
      <PageHero imageUrl={EventsPic} title='Events'/>
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


            <Typography variant="body1" gutterBottom sx={{ color: 'text.secondary' }}>
                Dance Marathon is a{' '}
                <Typography component="span" sx={{ fontWeight: 'bold', color: '#e2883c' }}>
                yearlong commitment
                </Typography >{' '}
                that includes many fundraising events aimed at reaching University students, businesses, and Gainesville residents. These events help us create a fun and exciting atmosphere while raising awareness about DM, whether it is through social media or inspirational stories from our Miracle Children who speak at the events. DM at UF's community events are all highly anticipated as they build up throughout the year toward the main Event in the spring.
            </Typography>

            <Typography variant="body1" gutterBottom sx={{ color: '#e2883c', fontWeight: 'bold', marginTop: 2 }}>
                Your involvement in these events is what makes them successful!
            </Typography>

            <Typography variant="body1" gutterBottom sx={{ color: 'text.secondary', marginTop: 2 }}>
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
              { image: KickoffBoxPic, title: 'Fall Kickoff', hoverText: "Our annual Fall Kickoff enjoyed by all internal and external memebers.", link: '/fallkickoff' },
              { image: MEBoxPic, title: 'Main Event', hoverText: "A 26.2-hour celebration for all members and miracles made throughout the year.", link: '/mainevent' },
              { image: MMBox, title: 'Mini-Marathons', hoverText: "High schools showing passion for Dance Marathon before their college years.", link: '/minimarathons' },
              { image: EventsPic, title: 'Miracles in Color 5k', hoverText: "5K benefiting UF Health Shands Children's Hospital, with some color in the mix.", link: '/miracles5k' },
              { image: MWeenBox, title: 'Moralloween', hoverText: "A great way for everyone to get in the Halloween spirit!", link: '/moralloween' },
              { image: TTBoxPic, title: 'Transform Today', hoverText: "Our largest fall fundraising effort lasting 26.2 hours.", link: '/transformtoday' },
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
