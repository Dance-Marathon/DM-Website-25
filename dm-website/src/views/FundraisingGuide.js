import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import AppAppBar from '../components/AppAppBar';
import getLPTheme from '../getLPTheme';
import Footer from '../components/Footer';
import { Container, Typography, Link } from '@mui/material';
import ScrollToTop from "../components/ScrollToTop";
import PageHero from '../components/PageHero';
import FundraisingGuidePic from "../assets/images/pagepics/Fundraising Guide.jpg";
import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LazyLoad from 'react-lazyload';

export default function FundraisingGuide() {
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
      <PageHero imageUrl={FundraisingGuidePic} title='Fundraising Guide' />
      </LazyLoad>
      <Container
        sx={{
          pt: { xs: 2, sm: 6 },
          pb: { xs: 2, sm: 8 },
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography variant="body1" color="text.secondary" paragraph>
          Take a look at all the different ways you can fundraise with Dance Marathon at UF! <span style={{ color: '#e2883c', fontWeight: 'bold' }}>Whether you ask friends and family to support you, showcase your passion on social media, participate in canning, or volunteer your time for donations, there are so many ways to fundraise for DM at UF.</span> Read more about all of these options below!
        </Typography>

        <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography variant="h5" color='#233563' gutterBottom marginTop={1}>
          Reaching Out
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography variant="h6" color='#e2883c' gutterBottom >
          Letters and Emails
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
        <span style={{ color: '#233563', fontWeight: 'bold' }}>Why?</span> - Adds a personal touch to your fundraising request.
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
        <span style={{ color: '#233563', fontWeight: 'bold' }}>Tips to a better response</span> - Personalize your message and tell the story that brought you into this organization. Follow up! Be persistent! You care about this cause and that devotion will shine through your efforts.
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
        <span style={{ color: '#233563', fontWeight: 'bold' }}>A great way to say thanks for becoming part of the DM family!</span>
        </Typography>
      </AccordionDetails>
    </Accordion>
<Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography variant="h5" color='#233563' gutterBottom marginTop={1}>
          Fundraising Tips
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography variant="body1" color="text.secondary" paragraph>
          <ul>
            <li>Showcase your passion for the cause</li>
            <li>Make your messages personal</li>
            <li>Share videos and photos that help convey the incredible impact you help make</li>
            <li>Offline donations in the form of checks are accepted. Be sure to fill out your name in the memo and make the check out to Children’s Miracle Network.</li>
          </ul>
        </Typography>
      </AccordionDetails>
    </Accordion>
<Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography variant="h5" color='#233563' gutterBottom marginTop={1}>
          Canning
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography variant="h6" color='#e2883c' gutterBottom>
          What is it?
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          Soliciting loose change and small dollar donations outside of public places or businesses to benefit Dance Marathon at the University of Florida and UF Health Shands Children’s Hospital.
        </Typography>
        <Typography variant="h6" color='#e2883c' gutterBottom>
          How can I benefit?
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          The money you raise via these efforts can be credited to your personal fundraising page as you look to raise more money and awareness!
        </Typography>
        <Typography variant="h6" color='#e2883c' gutterBottom>
          How to do it?
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          First, obtain specially designed canning buckets from our Partnerships Team (contact{' '}
          <Link href="mailto:jwinograd@floridadm.org">jwinograd@floridadm.org</Link> for further information). Email, call, or go inside a local business in your hometown and request to speak to the General Manager regarding canning donations. They will inform you of all the necessary regulations, and allow you to coordinate a time that works for both you and the business.
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          Be sure to show up promptly and dressed in Dance Marathon at UF attire to help spread your message! From there, talk to customers as they leave the business about donating to your cause. No donation is too small and every amount helps make miracles!
        </Typography>
      </AccordionDetails>
    </Accordion>
      </Container>
      <Footer />
    </ThemeProvider>
  );
}
