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

import Image1 from "../../assets/images/blogpics/Gemme_Madilyn_ME_0951.jpg";
import Image2 from "../../assets/images/blogpics/IMG_0291.jpg";
import Image3 from "../../assets/images/blogpics/Gemme_Madilyn_ME_0836.jpg";

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
      <PageHero imageUrl={Image1} title="Beyond This Generation" />
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
            When reflecting on what makes Dance Marathon at the University of Florida unique, one word should instinctively come to mind — “Generational.” An organization that has been standing for over three decades and that will, without a doubt, continue to stand #BeyondThisGeneration.        
          </Typography>
          <Typography variant="body1" color='text.secondary' paragraph>
            As we begin Year 31, let's take a moment to look back at the generations that came before us. We will find ourselves appreciating the life-changing impacts that have been made by past members of DM at UF, who paved the way for us to be standing here right now fighting for this cause.        
          </Typography>

          <Typography variant="body1" color='text.secondary' paragraph>
            The beauty of our organization ultimately lies in being able to use the sum of our efforts for the greater good — that is, a life free from pediatric illness, where no child is forced to face a battle they did not choose to fight.
          </Typography>

          <Typography variant="body1" color='text.secondary' paragraph>
            Whether you are fulfilling your “Why DM” in high school, college, or as an alum, each of these generations remain connected to the profound nature of this cause as they have one thing in common: being the heartbeat of our organization.            
          </Typography>

          <Typography variant="body1" color='text.secondary' paragraph>
            Past, present, and future DM at UF members, be proud of yourselves for having already made an immense difference in the lives of our pediatric patients by raising over 31 million dollars for UF Health Shands Children's Hospital. Your generational efforts have contributed to the saving of so many lives and will continue to do so #BeyondThisGeneration.
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
            Anabella Fernandez
          </Typography>

          <Typography
            variant="subtitle1"
            sx={{ fontWeight: "bold", mt: 1, color: "text.secondary" }}
          >
            Dance Marathon at The University of Florida
          </Typography>

          <Typography variant="body2" color='text.secondary'>
            Public Relations, Assistant Director of Internal Communications
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
                onClick={() => window.location.href = "/blog/beyondthissummer"}
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
                onClick={() => window.location.href = "/blog/findingyourdmfamily"}
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
