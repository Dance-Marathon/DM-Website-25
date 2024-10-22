import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Container, Typography, Grid} from "@mui/material";
import AppAppBar from "../../components/AppAppBar";
import Footer from "../../components/Footer";
import ScrollToTop from "../../components/ScrollToTop";
import PageHero from "../../components/PageHero";
import getLPTheme from "../../getLPTheme";

import Image1 from "../../assets/images/blogpics/childhealthdayhero.jpeg";
import Image2 from "../../assets/images/blogpics/USE 1.jpeg";
import Image3 from "../../assets/images/blogpics/USE 2.jpeg";

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
      <PageHero imageUrl={Image1} title="@TheFirstChapters of Childhood" />

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
            Each day, students at the University of Florida wake up, attend classes, and go about their day. Members of Dance Marathon at UF choose to find time in their day to end pediatric illness. We choose to fundraise year-round. We choose to pack the O’Dome for 26.2 hours.        
          </Typography>
          <Typography variant="body1" color='text.secondary' paragraph>
            This is something that makes this organization so special. Each of our students makes an intentional choice to participate in Dance Marathon. This is a choice to immerse ourselves in a community of passion and hope. Today, we urge you to think about the choice that each of our students makes everyday. National Child Health Day is a time to look forward to the day that every child is able to continue to write their story.
          </Typography>

          <Typography variant="body1" color='text.secondary' paragraph>
            National Child Health Day is on the first Monday of October. This is a day of unity for all children and families affected by pediatric illness. It serves as a day to promote organizations that are dedicated to this cause.
          </Typography>

          <Typography variant="body1" color='text.secondary' paragraph>
            At Dance Marathon at the University of Florida, we are committed to assisting UF Health Shands Children’s Hospital in their efforts to provide the best care to children in need. In honor of Child Health Day, we are launching a new campaign, #TheFirstChapters. We can look back on our first few chapters and acknowledge how they’ve shaped who we have become. Our goal is to make a difference in every patient’s story, helping them write a new chapter full of endless possibilities.
          </Typography>

          <Typography variant="body1" color='text.secondary' paragraph>
            Every child deserves to live a life full of joyful chapters. Together, we can work to make sure they are able to do so. On this year’s National Child Health Day, we help to #WriteTheStory of children everywhere facing pediatric illness.      
          </Typography>

          <Typography variant="body1" color='text.secondary' paragraph>
            With our help, children will be able to turn the page and begin a new chapter. One where they feel empowered to look towards the future. One where they finally close their first chapter by celebrating their last treatment, and begin their next chapter by celebrating at their next birthday party.
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
                    maxHeight: 250,
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
                    maxHeight: 250,
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
            Sarah Abisror
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
      </Container>

      <Footer />
    </ThemeProvider>
  );
}
