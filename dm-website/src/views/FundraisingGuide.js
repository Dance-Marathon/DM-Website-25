import React, { useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import AppAppBar from '../components/AppAppBar';
import getLPTheme from '../getLPTheme';
import Footer from '../components/Footer';
import { Container, Typography, Box, Link } from '@mui/material';
import ScrollToTop from "../components/ScrollToTop";
import PageHero from '../components/PageHero';
import HeroPic from "../assets/images/overalls/SW.jpg";
import FundraisingGuidePic from "../assets/images/Fundraising Guide.jpg";

export default function FundraisingGuide() {
  const [mode, setMode] = useState('light');
  const LPtheme = createTheme(getLPTheme(mode));

  const toggleColorMode = () => {
    setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const [visibleSection, setVisibleSection] = useState(null); // Track which item is visible
  const [selectedSection, setSelectedSection] = useState(null); // Track selected section

  const handleToggle = (sectionId) => {
    setVisibleSection((prev) => (prev === sectionId ? null : sectionId)); // Toggle visibility
    setSelectedSection(prev => (prev === sectionId ? null : sectionId)); // Toggle selected section
  };

  return (
    <ThemeProvider theme={LPtheme}>
      <ScrollToTop />
      <CssBaseline />
      <AppAppBar mode={mode} toggleColorMode={toggleColorMode} />
      <PageHero imageUrl={FundraisingGuidePic} title='Fundraising Guide' />
      <Container
        sx={{
          pt: { xs: 2, sm: 6 },
          pb: { xs: 2, sm: 8 },
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: { xs: 2, sm: 3 },
        }}
      >
        <Typography variant="body1" color="text.secondary" paragraph>
          Take a look at all the different ways you can fundraise with Dance Marathon at UF! Whether you ask friends and family to support you, showcase your passion on social media, participate in canning, or volunteer your time for donations, there are so many ways to fundraise for DM at UF. Read more about all of these options below!
        </Typography>

        <Box display="flex" flexDirection="row" justifyContent="space-between" gap={5} flexWrap="wrap">
          {[{
            id: 1,
            title: "Reaching Out",
            alt: "Reaching Out"
          },
          {
            id: 2,
            title: "Fundraising Tips",
            alt: "Fundraising Tips"
          },
          {
            id: 3,
            title: "Canning",
            alt: "Canning"
          }].map(({ id, title, alt }) => (
            <Box
              key={id}
              onClick={() => handleToggle(id)}
              sx={{
                cursor: 'pointer',
                textAlign: 'center',
                border: selectedSection === id ? '2px solid #e2883c' : '1px solid #e0e0e0',
                borderRadius: '5px',
                padding: 2,
                transition: 'border-color 0.3s',
                width: '30%',
                flexDirection: 'row'
              }}
            >
              <img
                src={HeroPic}
                alt={alt}
                width="100%"
                style={{ borderRadius: '5px', marginBottom: '8px' }}
              />
              <Typography variant="h5" color='#233563'>
                {title}
              </Typography>

            </Box>
          ))}
        </Box>

        {/* Conditional Content Display */}
        {visibleSection === 1 && (
          <Box
            marginTop={2}
            sx={{
              border: '1px solid #e0e0e0',
              borderRadius: '5px',
              padding: 2,
              width: '100%',
            }}
          >
            <Typography variant="h5" color='#233563' gutterBottom>
              Reaching Out
            </Typography>
            <Typography variant="h6" color='#e2883c' gutterBottom>
              Letters and Emails
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph>
              <span style={{ color: '#233563', fontWeight: 'bold' }}>Why?</span> - Adds a personal touch to your fundraising request.
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph>
              <span style={{ color: '#233563', fontWeight: 'bold' }}>Tips for a better response</span> - Personalize your message and tell the story that brought you into this organization. Follow up! Be persistent! You care about this cause and that devotion will shine through your efforts.
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph>
              A great way to say thanks for becoming part of the DM family!
            </Typography>
          </Box>
        )}
        {visibleSection === 2 && (
          <Box
            marginTop={2}
            sx={{
              border: '1px solid #e0e0e0',
              borderRadius: '5px',
              padding: 2,
              width: '100%',
            }}
          >
            <Typography variant="h5" color='#233563' gutterBottom>
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
          </Box>
        )}
        {visibleSection === 3 && (
          <Box
            marginTop={2}
            sx={{
              border: '1px solid #e0e0e0',
              borderRadius: '5px',
              padding: 2,
              width: '100%',
            }}
          >
            <Typography variant="h5" color='#233563' gutterBottom>
              Canning
            </Typography>
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
              First, obtain specially designed canning buckets from our Finance Team (contact{' '}
              <Link href="mailto:rbeany@floridadm.org">rbeany@floridadm.org</Link> for further information). Email, call, or go inside a local business in your hometown and request to speak to the General Manager regarding canning donations. They will inform you of all the necessary regulations, and allow you to coordinate a time that works for both you and the business.
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph>
              Be sure to show up promptly and dressed in Dance Marathon at UF attire to help spread your message! From there, talk to customers as they leave the business about donating to your cause. No donation is too small and every amount helps make miracles!
            </Typography>
          </Box>
        )}
      </Container>
      <Footer />
    </ThemeProvider>
  );
}
