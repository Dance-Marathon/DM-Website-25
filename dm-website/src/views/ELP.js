import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import AppAppBar from '../components/AppAppBar';
import getLPTheme from '../getLPTheme';
import Footer from '../components/Footer';
import { Container, Typography, Grid, Chip } from '@mui/material';
import ScrollToTop from "../components/ScrollToTop";
import PageHero from '../components/PageHero';
import LazyLoad from 'react-lazyload';

import ELPPic from "../assets/images/pagepics/ELPPic.jpg";

export default function About() {
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

  const leaders = [
    "Abbie Grace Flohr",
    "Abby Chaiet",
    "Abigail Johnson",
    "Adam Ahmad",
    "Addie Sptaru",
    "Addison Barno",
    "Andrew Hamil",
    "Alexis Chenven",
    "Allison Schapiro",
    "Amanda DeMouey",
    "Amanda McBean",
    "Amelia Eipper",
    "Anabel Rodriguez",
    "Angela Montana",
    "Angelica Mir",
    "Arianna Hoffman",
    "Arissa Latif",
    "Arushi Maitreya",
    "Ashleigh Guenette",
    "Audrey Layton",
    "Avery Orinion",
    "Brady Reis",
    "Brooke Tuttle",
    "Caroline D'Alessandro",
    "Cecelia Oneid",
    "Charlie Irving",
    "Chloe Han",
    "Claire Fox",
    "Dana Schecter",
    "Daria Pfister",
    "Devan Adair",
    "Dylan Burkowsky",
    "Eden Gabbai",
    "Eden Rothstein",
    "Eliana Bacal",
    "Elizabeth Watson",
    "Elena Castelino",
    "Elle Klatzko",
    "Ellie Chartock",
    "Ellie Sadler",
    "Emma Stein",
    "Estefania Cerna",
    "Evan Jellett",
    "Emily Frost",
    "Gabriela Perez",
    "Gabriela Pirtea",
    "Gabriela Rubiano Rojas",
    "Gracie Applegate",
    "Hailey Rudman",
    "Isabella Bach",
    "Isabella Fernandez",
    "Isabella Jaffy",
    "Jacob Eisenberg",
    "Jacob Giambalvo",
    "Jamie Schlaen",
    "Janie Akers",
    "Jenna Washburn",
    "Jillian Doody",
    "Katherine Adams",
    "Kate Finfrock",
    "Katherine Mockler",
    "Kayleigh Kasinger",
    "Kayomi Shah",
    "Keira Boyd",
    "Keira Roy",
    "Keirra Holycross",
    "Kyle Jackson",
    "Laney Robbins",
    "Lanie Gardner",
    "Lara Fitch",
    "Lila Evans",
    "Lilia Silveira",
    "Lily Weissberg",
    "Luccia Lamb",
    "Lucia Contento Cortes",
    "Luna Llano",
    "Madison Slosberg",
    "Mallory Youngblood",
    "Marella Quesnell",
    "Marissa Stock",
    "Mary Grace Butler",
    "Maya sakellarios",
    "Meghan Shepp",
    "Mia Jimenez",
    "Mia Olivares",
    "Michayla Rinaldi",
    "Milani Carpenter",
    "Natalia Guzman-Manzano",
    "Natalia Lopez",
    "Natalie Biggs",
    "Natalie Fitzgerald",
    "Natalie Simonitsch",
    "Nicole Main",
    "Olivia Murphy",
    "Oriana Barradas",
    "Palak Desai",
    "Piper Miller",
    "Rachel Hipp",
    "Rachel Levy",
    "Rachel Shen",
    "Raustin Esfahanizadeh",
    "Rosselin Vera",
    "Rowan Griese",
    "Samantha Klein",
    "Samantha Nelson",
    "Samantha Orozco",
    "Samantha Puleio",
    "Samantha Schmid",
    "Sammi Leon",
    "Sara Sonnenblick",
    "Skylar Sewell",
    "Sofia Peralta",
    "Sophia Pablos",
    "Sophia Stavrou",
    "Stella Mclaney",
    "Sydney Carmichael",
    "Sydney Staat",
    "Sylvia Arguello",
    "Tanvi Bollepalli",
    "Taylor Mosely",
    "Victoria Seltzer",
    "Victoria Higuera",
    "Zoe Licata"
  ]  
  

  return (
    <ThemeProvider theme={LPtheme}>
      <ScrollToTop />
      <CssBaseline />
      <AppAppBar mode={mode} toggleColorMode={toggleColorMode} />
      <LazyLoad height={200} offset={100} once>
      <PageHero imageUrl={ELPPic} title='Emerging Leaders'/>
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
            <Typography variant="body1" paragraph color="text.secondary">
            <span style={{ color: '#233563', fontWeight: 'bold' }}>The Emerging Leaders Program</span> aims to cultivate the leadership skills of new members of the Dance Marathon community by providing hands-on activities, shadowing opportunities with other captain teams, and education about Dance Marathon at the University of Florida and Children's Miracle Network. The program strives to engage students who have a passion for helping others and who are passionate in our fight for a future without childhood illness.            
            </Typography>
            <Typography variant="body1" paragraph color="text.secondary">
              Members of the Emerging Leaders Program will attend weekly small group meetings and semesterly general body meetings. Throughout their small group meetings, Emerging Leaders will focus on completing diverse projects that inspire the Dance Marathon community, expanding their knowledge, leadership, and personal fundraising efforts, and participating in bonding with like-minded peers. At general body meetings, Emerging Leaders will have the opportunity to learn more about the goals and efforts of Dance Marathon, hear inspiring stories from our Miracle Families, and gain exposure to prominent speakers from the University of Florida and the Gainesville community.            
            </Typography>
            <Typography variant="body1" paragraph color="text.secondary">
              During the Main Event, Emerging Leaders will have the ability to use the skills they’ve learned throughout the year to participate in various leadership opportunities as well as enjoy the Main Event from different perspectives.            
            </Typography>
        </Box>
      
        <Typography variant="h5" align="center" gutterBottom color='#233563' marginTop={2}>
          2025 Emerging Leaders
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
        <Grid container spacing={2} justifyContent="center">
        {leaders.map((leader, index) => (
          <Grid item xs={12} sm={8} md={6} lg={4} key={index}>
            <Chip 
          label={leader}
          color="primary"
          variant="outlined"
          sx={{
            padding: '8px',  // Adjust padding for space
            fontSize: '1rem',  // Increase font size slightly
            whiteSpace: 'normal',  // Allow text to wrap naturally
            textAlign: 'center',  // Keep text centered
            height: 'auto',  // Allow chip to expand vertically
            width: '90%',  // Allow the chip to fill the container
            minWidth: '180px',  // Set a minimum width for better spacing
            wordWrap: 'break-word',  // Ensure word wrapping happens
            display: 'flex',  // Use flexbox to allow content to expand
            justifyContent: 'center',  // Center content in the chip
            overflow: 'hidden',  // Hide overflow text if necessary
            margin: '0 auto',
            '&:hover': {
            backgroundColor: 'transparent',  // Disable hover background change
            boxShadow: 'none',  // Prevent shadow on hover
          },
          }}
        />
          </Grid>
        ))}
      </Grid>
        </Box>
      </Container>
      <Footer />
    </ThemeProvider>
  );
}
