import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Container, Typography, Grid, Button } from "@mui/material";
import AppAppBar from "../../components/AppAppBar";
import Footer from "../../components/Footer";
import ScrollToTop from "../../components/ScrollToTop";
import PageHero from "../../components/PageHero";
import getLPTheme from "../../getLPTheme";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import LazyLoad from 'react-lazyload';

import Image1 from "../../assets/images/blogpics/MiracleMaker/MM1.jpg";
import Image2 from "../../assets/images/blogpics/MiracleMaker/MM2.jpg";
import Image3 from "../../assets/images/blogpics/MiracleMaker/MM3.jpg";

export default function BeyondThisMoment() {
  const [mode, setMode] = React.useState(() => {
    // Retrieve the stored theme from localStorage or default to 'dark'
    return localStorage.getItem('theme') || 'dark';
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
      <PageHero imageUrl={Image1} title="What It Means To Be A Miracle Maker" />
      </LazyLoad>

      <Container
        sx={{
          pt: { xs: 2, sm: 6 },
          pb: { xs: 2, sm: 8 },
          width: "50%",
          display: "flex",
          flexDirection: "column",
          gap: { xs: 2, sm: 3 },
          color: "white",
        }}
      >
        <Box sx={{ textAlign: "left" }}>
          <Typography variant="body1" color='text.secondary' paragraph>
            With the help of the Miracle Makers here at The University of Florida, we are embarking on our 31st year of making miracles by supporting UF Health Shands Children's Hospital. Miracle Makers play a vital role in helping our organization #WriteTheStory. Our Miracle Makers help in fundraising, supporting, and raising awareness in our fight to end childhood illness.          
          </Typography>
          <Typography variant="body1" color='text.secondary' paragraph>
            As someone who started their journey in DM at UF as a Miracle Maker, I can certainly say that this role changed my life and helped me find my passion for this organization on a more personal level. At my first Main Event my freshman year, I was greeted by the most amazing and wonderful members who made me feel like I was a part of something much bigger than I could have ever imagined.
          </Typography>

          <Typography variant="body1" color='text.secondary' paragraph>
            I was able to be a Miracle Maker with one of my close friends, who made a huge impact on my experience during the year. She helped me discover my deeper connection with this organization. I continuously fight to end childhood illness in honor of those who have had to go through themselves and with their loved ones.
          </Typography>

          <Typography variant="body1" color='text.secondary' paragraph>
            Being a Miracle Maker gave me the chance to hear first-hand stories from our Miracle Families who were directly impacted by the funds we raised throughout our 31 years of DM at UF. The experiences I had throughout the year prior to the Main Event through fundraising, weekly check-ins, and social events paved the way for a life-changing Main Event experience.
          </Typography>

          <Typography variant="body1" color='text.secondary' paragraph>
            Your love and passion for DM at UF might be found in your first moments with this organization, or maybe it will grow over time. Each story is different, which is what makes our organization so special. . The name says it all – this position allows you to constantly  make miracles and impact the lives of families and children right down the street at UF Health Shands Children’s Hospital. From sharing our cause to impacting the individuals you encounter throughout your time, you are a storyteller, a trailblazer, and, most importantly, a Miracle Maker.
          </Typography>

          <Grid 
            container 
            alignItems="center"  // Aligns items vertically centered
            justifyContent="center"  // Pushes images to left and right
            sx={{ marginTop: 5, marginBottom: 5, gap: 10 }}  // Adjust gap and height
            >
            {/* Left Image */}
            <Grid item>
            <LazyLoad height={200} offset={100} once>
                <Box
                component="img"
                src={Image2}
                alt="Miracle Families"
                sx={{
                    maxWidth: 400, // Control image size
                    maxHeight: 400,
                    borderRadius: 4,
                    display: "block", // Ensures image behaves like a block element
                }}
                />
            </LazyLoad>
            </Grid>

            {/* Right Image */}
            <Grid item>
            <LazyLoad height={200} offset={100} once>
                <Box
                component="img"
                src={Image3}
                alt="Hospital Renovation"
                sx={{
                    maxWidth: 400, // Control image size
                    maxHeight: 400,
                    borderRadius: 4,
                    display: "block",
                }}
                />
            </LazyLoad>
            </Grid>
            </Grid>


          <Typography
            variant="h6"
            sx={{ fontStyle: "italic", mt: 2, color: "text.secondary" }}
          >
            Sofia Amoroso
          </Typography>

          <Typography
            variant="subtitle1"
            sx={{ fontWeight: "bold", mt: 1, color: "text.secondary" }}
          >
            Dance Marathon at The University of Florida
          </Typography>

          <Typography variant="body2" color='text.secondary'>
            Public Relations, Captain
          </Typography>
        </Box>
        <Grid
          container
          alignItems="center"
          justifyContent="space-between"
          sx={{ mt: 4 }}
        >
          <Grid item>
            <Button
              variant="outlined"
              startIcon={<ArrowBackIcon />}
              onClick={() => window.location.href = "/blog/childhealthday"}
              sx={{
                color: "primary.main",
                borderColor: "white",
                "&:hover": { borderColor: "primary.main", color: "primary.main" },
              }}
            >
              Previous Blog
            </Button>
          </Grid>

          <Grid item>
            <Button
              variant="outlined"
              endIcon={<ArrowForwardIcon />}
              onClick={() => window.location.href = "/blog/thankfulness"}
              sx={{
                color: "primary.main",
                borderColor: "white",
                "&:hover": { borderColor: "primary.main", color: "primary.main" },
              }}
            >
              Next Blog
            </Button>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </ThemeProvider>
  );
}
