import * as React from 'react';

import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import AppAppBar from '../components/AppAppBar';
import getLPTheme from '../getLPTheme';
import Footer from '../components/Footer';
import GetInvolvedCard from '../components/GetInvolvedCard';
import { Container, Typography, Card, CardContent } from '@mui/material';
import ScrollToTop from "../components/ScrollToTop";
import PageHero from '../components/PageHero';

import HeroPic from "../assets/images/CA.jpg";

export default function GetInvolved() {
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
      <PageHero imageUrl={HeroPic} title='Get Involved'/>
      <Container
        id="registertofundraise"
        sx={{
          pt: { xs: 2, sm: 6 },
          pb: { xs: 2, sm: 8 },
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'left',
          gap: { xs: 2, sm: 3 },
        }}
      >
      <Box
        sx={{
          width: { sm: '100%', md: '60%' },
          textAlign: { sm: 'left', md: 'left' },
        }}
      >
        <Typography component="h2" variant="h4" color="primary">
          Get Involved
        </Typography>
        <Typography variant="body1" color="secondary">
          Take a look at all of the different ways you can get involved with Dance Marathon at UF. Whether you are interested in becoming a Captain, Dancer, Emerging Leader, Ambassador, Fundraiser, or member of Kirstyn’s Krew, this page is your path to getting involved! There are so many ways to give back through DM at UF, and we would love for you to join our Dance Marathon family and help us make miracles.
        </Typography>
      </Box>
            <Card
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                flexGrow: 1,
                p: 1,
              }}
            >
              <CardContent>
                <Typography variant="h6" color="primary">
                  Register to Fundraise
                </Typography>
                <Typography variant="body1" color="text.secondary" pt={1} pb={1}>
                Registering to fundraise is the first step to joining the Dance Marathon movement. Creating a fundraising page is quick and easy! Go to the Register to Fundraise page for instructions on how to sign up.
                </Typography>
                <Typography variant="h6" color="primary">
                  Get Involved with the Dance Marathon Family
                </Typography>
                <Typography variant="body1" color="text.secondary" pt={1}>
                  If you would like to get involved with our organization, check out the list of positions below!
                </Typography>
              </CardContent>

              <GetInvolvedCard name="Organization" description="Student Organizations work year-round to support our cause."/>
              <GetInvolvedCard name="Dancer" description="Dancers stand on their feet if able for the duration of our Main Event in April to raise funds and awareness for UF Health Shands Children’s Hospital."/>
              <GetInvolvedCard name="Emerging Leader" description="Members of our Emerging Leaders Program work alongside the Recruitment Team, providing support to Captain Teams and brainstorming new ideas to ensure a successful future for our organization."/>
              <GetInvolvedCard name="Captain" description="Captains belong to 1 of 15 teams and take on yearlong responsibilities specific to their respective teams, with the goal of supporting and promoting our organization."/>
              <GetInvolvedCard name="Assistant Director" description="Individuals who work all year with their respective Overall Directors to ensure steady growth and management within their Captain Teams."/>
              <GetInvolvedCard name="Overall Director" description="The 20 individuals who lead Dance Marathon efforts throughout the year. They are responsible for leading their respective Captain Teams to oversee, expand, and promote our organization."/>


            </Card>
    </Container>
      <Footer />
    </ThemeProvider>
  );
}
