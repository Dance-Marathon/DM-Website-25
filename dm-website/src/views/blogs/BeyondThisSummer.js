import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Container, Typography, Grid, Link, Divider } from "@mui/material";
import AppAppBar from "../../components/AppAppBar";
import Footer from "../../components/Footer";
import ScrollToTop from "../../components/ScrollToTop";
import PageHero from "../../components/PageHero";
import getLPTheme from "../../getLPTheme";

import Image1 from "../../assets/images/blogpics/IMG_3478.jpg";
import Image2 from "../../assets/images/blogpics/MadilynGTTFB4-17.jpg";
import Image3 from "../../assets/images/blogpics/MW1-11.jpg";

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
      <PageHero imageUrl={Image1} title="Beyond This Summer" />

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
            This summer, you may have graduated, studied abroad, worked a job or an internship, or relaxed and read a book. Summer is a time to reset. For Dance Marathon at the University of Florida, we view summer as a transition period. We have returning members reflecting on the past year and how they can take the best moments and make them even better. We have newly promoted members lending their skills and talents to the team, helping over the summer to plan for the year ahead. Incoming freshmen begin to think about what they want their UF experience to look like. Some have been involved in Dance Marathon at their high schools or heard of it through older siblings and friends. And many more will learn about Dance Marathon for the first time as they enter college.
          </Typography>
          <Typography variant="body1" color='text.secondary' paragraph>
            As you take the time this season to reset, think about how you want your year to look #BeyondThisSummer. What are your goals? Learn a new skill? Make more friends? Help more people? 
          </Typography>

          <Typography variant="body1" color='text.secondary' paragraph>
            By joining Dance Marathon, you become part of a community that can give you all of this and even more than you can imagine. It is a place where you can find your best friends and make memories that last a lifetime. Use or learn a new skill while working with friends to raise money to change children’s lives. Your efforts, no matter how small, contribute to our collective goal of helping as many families as possible. 
          </Typography>

          <Typography variant="body1" color='text.secondary' paragraph>
            Our Miracle Families continue their fight every single day. While we may take a break from school, pediatric illness doesn’t take vacations. We must think about them while we take our time off of school and know that in the Fall semester, our efforts go beyond, with big moments such as Transform Today. Our Miracle Families continue to inspire us as our ongoing efforts and triumphs make an impact #BeyondThisSummer. 
          </Typography>

          <Grid 
            container 
            alignItems="center"  // Aligns items vertically centered
            justifyContent="center"  // Pushes images to left and right
            sx={{ marginTop: 5, marginBottom: 5, gap: 10 }}  // Adjust gap and height
            >
            {/* Left Image */}
            <Grid item>
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
            </Grid>

            {/* Right Image */}
            <Grid item>
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
            </Grid>
            </Grid>


          <Typography
            variant="h6"
            sx={{ fontStyle: "italic", mt: 2, color: "text.secondary" }}
          >
            Lainey Shapiro
          </Typography>

          <Typography
            variant="subtitle1"
            sx={{ fontWeight: "bold", mt: 1, color: "text.secondary" }}
          >
            Dance Marathon at The University of Florida
          </Typography>

          <Typography variant="body2" color='text.secondary'>
            Public Relations, Assistant Director of Social Media
          </Typography>
        </Box>
      </Container>

      <Footer />
    </ThemeProvider>
  );
}
