import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import AppAppBar from '../components/AppAppBar';
import getLPTheme from '../getLPTheme';
import Footer from '../components/Footer';
import { Container, Typography, Box, Link } from '@mui/material';
import ScrollToTop from "../components/ScrollToTop";
import PageHero from '../components/PageHero';
import FAQ from '../components/FAQ';

import HeroPic from "../assets/images/overalls/SW.jpg";
import MiracleMakersPic from "../assets/images/pagepics/MiracleMakersPic.jpg";

export default function MiracleMakers() {
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
      <PageHero imageUrl={MiracleMakersPic} title='Miracle Makers' />
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
      <Typography variant="body1" color="text.secondary" >
        Dance Marathon at the University of Florida is an annual event benefiting the patients of UF Health Shands Children's Hospital in Gainesville, Florida. Each year, students stay awake and on their feet, if able, to raise money and awareness for Children's Miracle Network Hospitals.
      </Typography>
      <Typography variant="body1" color="text.secondary" >
        As a Miracle Maker, you will experience one of UF’s most adored traditions. Throughout the duration of the Main Event, you will learn our Linedance, enjoy live entertainment, eat delicious food from our local Sponsors, and hear inspiring stories from our Miracle Families.
      </Typography>
      <Typography variant="body1" color="text.secondary" >
        In addition to standing, if able, for the duration of the Main Event, Miracle Makers will have year-long activities to take part in such as a Miracle Maker Retreat, Registered Miracle Maker Workshops, bonding with their internal Organization, and more!
      </Typography>
      <Typography variant="body1" color="text.secondary" >
        Please email Raegan DiRenzo, Dancer Engagement Overall Director, at 
        <Link href="mailto:rdirenzo@floridadm.org"> rdirenzo@floridadm.org</Link> with any questions!
      </Typography>

      <Typography variant="h5" color='#233563' sx={{ marginTop: 4 }}>
        Register to be a Miracle Maker
      </Typography>
      <Typography variant="body1" color="text.secondary">
        Follow the link and select “Buy Tickets!” Once you complete your registration, a Dance Marathon Captain will reach out to you with further details.
      </Typography>
      <Typography variant="body1" color="text.secondary" >
        To be a Miracle Maker, participants must be enrolled as students at the University of Florida during the spring semester. This includes students who are enrolled but may have an internship in place of classes.
      </Typography>
      <Typography variant="body1" color="text.secondary" >
        Registering to be a Miracle Maker is not the same thing as registering to fundraise. Miracle Maker Registration is only open for the two-week period in the Fall and in the Spring.
      </Typography>
      <Typography variant="body1" color="text.secondary" >
        You may register to be a Miracle Maker with an Organization team or as an individual.
      </Typography>
      <Typography variant="body1" color="text.secondary" >
        If you have any questions about Miracle Making as an individual or the Gator Aides team, please contact the Recruitment Overall Director, Ava Orlando, at 
        <Link href="mailto:aorlando@floridadm.org"> aorlando@floridadm.org</Link>.
      </Typography>
      
      <Typography variant="h4" color='#233563' sx={{marginTop: 4}}>
        FAQ
      </Typography>
      <Box component="ul" sx={{ pl: 3 }}>
        <FAQ 
          question="If I register to be a Miracle Maker, am I guaranteed a Miracle Maker spot at DM?" 
          answer="Not necessarily. Miracle Maker spots are allocated based on participation and fundraising goals set for each Organization and individual."
        />
        <FAQ 
          question="I already registered to fundraise, do I need to register to be a Miracle Maker?" 
          answer="Yes, registering to fundraise and registering to be a Miracle Maker are two separate things."
        />
        <FAQ 
          question="Do I have to be a UF student to be a Miracle Maker?" 
          answer="Yes, you must be enrolled as a student during the Spring semester in which Dance Marathon takes place."
        />
        <FAQ 
          question="I don’t have my DM shirt, can I still check in for spirit points?" 
          answer="You must be wearing a DM shirt to check in for spirit points."
        />
        <FAQ 
          question="How do I register to be a Miracle Maker?" 
          answer="Scroll down to 'Register to be a Miracle Maker' for instructions."
        />
        <FAQ 
          question="How do I register to fundraise?" 
          answer="See the Fundraising for instructions."
        />
        <FAQ 
          question="Can I still be a Miracle Maker if I am the Ambassador for my Organization’s team?" 
          answer="Yes!"
        />
        <FAQ 
          question="Who can come to the Event?" 
          answer="Anyone!"
        />
        <FAQ 
          question="What happens when someone registers to be a Miracle Maker and isn’t given a spot?" 
          answer="The money paid for the registration fee goes toward their Organization’s total amount raised."
        />
        <FAQ 
          question="What if I am not in an Organization and want to register as an individual?" 
          answer="You can register as an individual using the link under Miracle Maker Resources; individual Miracle Makers will be placed onto the Gator Aides team."
        />
      </Box>
      </Container>
      <Footer />
    </ThemeProvider>
  );
}
