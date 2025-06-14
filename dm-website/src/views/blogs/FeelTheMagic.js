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

import Image1 from "../../assets/images/blogpics/FeelTheMagic/FTM1.jpg";
import Image2 from "../../assets/images/blogpics/FeelTheMagic/FTM2.jpg";

export default function FeelTheMagic() {
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
      <PageHero imageUrl={Image1} title="Feel The Magic" />
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
          What did it feel like when the numbers at the Main Event were raised?          </Typography>
          <Typography variant="body1" color='text.secondary' paragraph>
          The goosebumps. The tears. The happiness in knowing we changed the lives of so many children. The magic in knowing that we created miracles during those 26.2 hours. For many of us, we are going into summer experiencing moments of magic. But for others, the magic may be hearing the news of a new treatment working.           </Typography>
          <Typography variant="body1" color='text.secondary' paragraph>
          31 years ago, DM at UF started with a dream — a dream that students could create enough miracles to end pediatric illness. The dream that sparked within them 31 years ago was magical and is still felt through us each and every year.           </Typography>
          <Typography variant="body1" color='text.secondary' paragraph>
          So as we go through this summer, reflect on the feelings you experience as you walk along the coast, walk into the office for your internship or sit in your hometown coffee shop working. Wherever you are this summer, take that magic with you.           </Typography>
          <Typography variant="body1" color='text.secondary' paragraph>
          Dance Marathon at UF works towards this cause so that tomorrow could be the last day in a hospital bed. It could be the last day that mom sleeps on a pull-out couch, it could be the last day worrying about the next.
          </Typography>
          <Typography variant="body1" color='text.secondary' paragraph>
          #FeelTheMagic of knowing you’ve made a difference. Feel the change you continue to make in the lives of Miracle Families. Feel the dream that was achieved and surpassed over the last 31 years and counting. 
          </Typography>
          <Typography variant="body1" color='text.secondary' paragraph>
          We feel the passion we have for our organization through Dance Marathon at UF 2026, hoping that all children #FeeltheMagic beyond hospital walls.
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
                sx={{
                    maxWidth: 400, // Control image size
                    maxHeight: 400,
                    borderRadius: 4,
                    display: "block", // Ensures image behaves like a block element
                }}
                />
            </LazyLoad>
            </Grid>
            </Grid>


          <Typography
            variant="h6"
            sx={{ fontStyle: "italic", mt: 2, color: "text.secondary" }}
          >
            Tori Kitchens
          </Typography>

          <Typography
            variant="subtitle1"
            sx={{ fontWeight: "bold", mt: 1, color: "text.secondary" }}
          >
            Dance Marathon at The University of Florida
          </Typography>
          <Typography variant="body2" color='text.secondary'>
          Communications and Public Relations
          </Typography>
          <Typography variant="body2" color='text.secondary'>
            Assistant Director of Communications
          </Typography>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "left", mt: 4 }}>
          <Button
            variant="outlined"
            startIcon={<ArrowBackIcon />}
            onClick={() => window.location.href = "/blog/beyondtomorrow"}
            sx={{
              color: "primary.main",
              borderColor: "white",
              "&:hover": { borderColor: "primary.main", color: "primary.main" },
            }}
          >
            Previous Blog
          </Button>
        </Box>
      </Container>
      <Footer />
    </ThemeProvider>
  );
}