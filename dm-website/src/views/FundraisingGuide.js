import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import AppAppBar from '../components/AppAppBar';
import getLPTheme from '../getLPTheme';
import Footer from '../components/Footer';
import { Container, Typography, Box, Link } from '@mui/material';
import ScrollToTop from "../components/ScrollToTop";
import PageHero from '../components/PageHero';

import HeroPic from "../assets/images/overalls/SW.jpg";

export default function FundraisingGuide() {
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
      <PageHero imageUrl={HeroPic} title='Fundraising Guide'/>
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

      {/* Introduction */}
      <Typography variant="body1" color="text.secondary" paragraph>
        Take a look at all the different ways you can fundraise with Dance Marathon at UF! Whether you ask friends and family to support you, showcase your passion on social media, participate in canning, or volunteer your time for donations, there are so many ways to fundraise for DM at UF. Read more about all of these options below!
      </Typography>

      {/* Section: Reaching Out */}
      <Typography variant="h5" color="text.secondary" gutterBottom>
        Reaching Out
      </Typography>
      <Typography variant="h6" color="text.secondary" gutterBottom>
        Letters and Emails
      </Typography>
      <Typography variant="body1" color="text.secondary" paragraph>
        <strong>Why?</strong> - Adds a personal touch to your fundraising request.
      </Typography>
      <Typography variant="body1" color="text.secondary" paragraph>
        <strong>Tips to a better response</strong> - Personalize your message and tell the story that brought you into this organization. Follow up! Be persistent! You care about this cause and that devotion will shine through your efforts.
      </Typography>
      <Typography variant="body1" color="text.secondary" paragraph>
        A great way to say thanks for becoming part of the DM family!
      </Typography>

      {/* Section: Fundraising Tips */}
      <Typography variant="h5" color="text.secondary" gutterBottom>
        Fundraising Tips
      </Typography>
      <Typography variant="body1" color="text.secondary" paragraph>
        <ul>
          <li>Showcase your passion for the cause</li>
          <li>Make your messages personal</li>
          <li>Share videos and photos that help convey the incredible impact you help make</li>
          <li>Offline donations in the form of checks are accepted. Be sure to fill out your name in the memo and make the check out to Children’s Miracle Network.</li>
        </ul>
      </Typography>

      {/* Section: Canning */}
      <Typography variant="h5" color="text.secondary" gutterBottom>
        Canning
      </Typography>
      <Typography variant="h6" color="text.secondary" gutterBottom>
        What is it?
      </Typography>
      <Typography variant="body1" color="text.secondary" paragraph>
        Soliciting loose change and small dollar donations outside of public places or businesses to benefit Dance Marathon at the University of Florida and UF Health Shands Children’s Hospital.
      </Typography>
      <Typography variant="h6" color="text.secondary" gutterBottom>
        How can I benefit?
      </Typography>
      <Typography variant="body1" color="text.secondary" paragraph>
        The money you raise via these efforts can be credited to your personal fundraising page as you look to raise more money and awareness!
      </Typography>
      <Typography variant="h6" color="text.secondary" gutterBottom>
        How to do it?
      </Typography>
      <Typography variant="body1" color="text.secondary" paragraph>
        First, obtain specially designed canning buckets from our Partnerships Team (contact{' '}
        <Link href="mailto:jwinograd@floridadm.org">jwinograd@floridadm.org</Link> for further information). Email, call, or go inside a local business in your hometown and request to speak to the General Manager regarding canning donations. They will inform you of all the necessary regulations, and allow you to coordinate a time that works for both you and the business.
      </Typography>
      <Typography variant="body1" color="text.secondary" paragraph>
        Be sure to show up promptly and dressed in Dance Marathon at UF attire to help spread your message! From there, talk to customers as they leave the business about donating to your cause. No donation is too small and every amount helps make miracles!
      </Typography>
            </Box>
        </Container>
      <Footer />
    </ThemeProvider>
  );
}
