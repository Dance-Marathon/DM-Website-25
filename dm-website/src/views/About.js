import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import AppAppBar from '../components/AppAppBar';
import getLPTheme from '../getLPTheme';
import Footer from '../components/Footer';
import { Container, Typography, Grid } from '@mui/material';
import ScrollToTop from "../components/ScrollToTop";
import PageHero from '../components/PageHero';
import SquareCard from '../components/SquareCard';
import AboutPic from "../assets/images/pagepics/AboutPicNew.jpg";
import CMNBox from "../assets/images/miniboxpics/CMNUFHealthBox.jpg";
import MFBox from "../assets/images/miniboxpics/MiracleFamiliesBox.jpg";
import OurStoryBox from "../assets/images/miniboxpics/OurStoryBox.jpg";
import LazyLoad from 'react-lazyload';

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

  return (
    <ThemeProvider theme={LPtheme}>
      <ScrollToTop />
      <CssBaseline />
      <AppAppBar mode={mode} toggleColorMode={toggleColorMode} />
      <LazyLoad height={200} offset={100} once>
      <PageHero imageUrl={AboutPic} title='About Us'/>
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
          <Typography variant="b1" color="text.secondary">
            <p>Dance Marathon at the University of Florida is a yearlong philanthropic effort benefiting the patients of UF Health Shands Children's Hospital in Gainesville, Florida. Each year, students stay awake and on their feet at our annual 26.2 hour event to raise funds and awareness for Children's Miracle Network Hospitals for the duration of the event. In the 30 years of Dance Marathon at UF's existence, we have <b style={{ color: '#e2883c' }}>raised more than $32 million</b>, making it <b style={{ color: '#233563' }}>the most successful student-run philanthropy in the Southeastern United States</b>. In 2024, DM at UF raised a grand total of <b style={{ color: '#e2883c' }}>$1,531,518.24</b> for UF Health Shands Children's Hospital, our local Children’s Miracle Network Hospital.</p>
            <p>In 2023, UF Health Shands Children's Hosptial treated children from 66 counties in Florida, 49 other states, and 7 other countries. There were 18,586 telehealth visits, 40,408 ER visits, and 359,419 clinic visits. <b style={{ color: '#233563' }}>All of the funds raised by DM at UF go directly to purchasing state-of-the-art medical equipment, enhancements to make the children’s stay at the hospital more enjoyable, and funding for research grants and educational programs</b>.</p>
            <p>Patient care funding provides necessities such as bandages and patient gowns, as well as equipment and hospital improvements to make hospital stays more enjoyable for children and their families. Research funding helps our doctors find solutions for incurable diseases such as cystic fibrosis and cancer, and it allows them to develop life-saving technology and enhanced processes that improve the daily lives of pediatric patients. Education funding supports programs such as Child Life Diversion therapy and goes toward raising funds and awareness for the Children’s Miracle Network.</p>
            <p><b style={{ color: '#233563' }}>As we head into our <b style={{ color: '#e2883c' }}>31st year</b>, Dance Marathon at UF is excited to make even more miracles!</b></p>
          </Typography>
        </Box>
      
        {/* Centered Grid for SquareCards */}
        <LazyLoad height={200} offset={100} once>
        <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
          <Grid 
            container 
            spacing={3} 
            justifyContent="center" 
            alignItems="center"
            sx={{ maxWidth: 1200, margin: '0 auto' }}
          >
            {[
              { image: OurStoryBox, title: 'Our Story', hoverText: "As one of the five founding Dance Marathon programs, DM at UF has raised over $32 million for Miracle Families at UF Health Shands Children’s Hospital", link: '/ourstory' },
              { image: CMNBox, title: 'CMN & UF Health', hoverText: "Ranked among the nation’s top 50 pediatric hospitals, UF Health Shands and Children’s Miracle Network offer exceptional care for children and young adults", link: '/cmnhospitals' },
              { image: MFBox, title: 'Miracle Families', hoverText: "Meet the heart of our movement: 31 inspiring Miracle Families who are true inspirations to everyone involved and embody everything we stand for", link: '/miraclefamilies' },
            ].map((card, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <SquareCard {...card} />
              </Grid>
            ))}
          </Grid>
        </Box>
        </LazyLoad>
      </Container>
      <Footer />
    </ThemeProvider>
  );
}
