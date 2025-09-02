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
import LazyLoad from "react-lazyload";

import Image1 from "../../assets/images/blogpics/YesToMiracles/Yes1.jpg";
import Image2 from "../../assets/images/blogpics/YesToMiracles/Yes2.jpg";
import Image3 from "../../assets/images/blogpics/YesToMiracles/Yes3.jpg";

export default function YesToMiracles() {
  const [mode, setMode] = React.useState(() => {
    // Retrieve the stored theme from localStorage or default to 'dark'
    return localStorage.getItem("theme") || "light";
  });
  const LPtheme = createTheme(getLPTheme(mode));

  const toggleColorMode = () => {
    setMode((prev) => {
      const newMode = prev === "dark" ? "light" : "dark";
      localStorage.setItem("theme", newMode); // Store the new mode in localStorage
      return newMode;
    });
  };

  return (
    <ThemeProvider theme={LPtheme}>
      <ScrollToTop />
      <CssBaseline />
      <AppAppBar mode={mode} toggleColorMode={toggleColorMode} />
      <LazyLoad height={200} offset={100} once>
        <PageHero imageUrl={Image1} title="Say Yes to Making Miracles" />
      </LazyLoad>

      <Container
        sx={{
          pt: { xs: 4, sm: 6 },
          pb: { xs: 4, sm: 8 },
          width: "50%",
          display: "flex",
          flexDirection: "column",
          gap: { xs: 2, sm: 3 },
          color: "white",
        }}
      >
        <Box sx={{ textAlign: "left" }}>
          <Typography variant="body1" color="text.secondary" paragraph>
            Let’s face it, walking through Turlington is every UF student’s
            worst nightmare. No matter which corner you turn, you are met with
            an overwhelming amount of clubs, organizations, and events
            encouraging your participation. After a long day at class, you stare
            at the pile of flyers you collected along the way and consider your
            valuable free time wondering,{" "}
            <i>“Which organization should I take a chance on?”</i>
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            What if I told you that in just a few minutes, you could be part of
            something bigger than yourself? That’s exactly what Dance Marathon
            at the University of Florida is all about—giving you the chance to
            become a Miracle Maker and create a lasting impact on the lives of
            children at UF Health Shands Children’s Hospital.
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            As a Miracle Maker, you will have the opportunity to make a
            difference for the patients and families impacted by childhood
            illness at UF Health Shands Children’s Hospital. Through
            fundraising, hearing stories from Miracle Families, interacting with
            other members, and participating in the Main Event, being a Miracle
            Maker is truly life-changing.
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            Taking on the role of a Miracle Maker has left lasting impacts on
            thousands of students at UF. Ava Orlando, the Overall Director of
            Recruitment for DM at UF, started her journey as a Miracle Maker.
            “It was the best decision I have made so far in my collegiate
            career,” said Orlando, “and I couldn’t imagine not furthering my
            commitment to this organization.”
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            Every dollar raised, every step taken, and every story shared
            through DM at UF is a testament to the power of saying “yes” to a
            cause worth fighting for; a story in need of writing; a miracle
            waiting to happen.
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            Whether you’ve been involved with Dance Marathon before or you’re
            just learning about it, now is the perfect time to get involved and
            fight for a cause that changes lives. Register as a Miracle Maker
            today, and watch as you help write the next chapters of each child
            battling pediatric illness.
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            If you were to take a chance on anything, take a chance on being a
            Miracle Maker.
          </Typography>

          <Grid
            container
            alignItems="center" // Aligns items vertically centered
            justifyContent="center" // Pushes images to left and right
            sx={{ marginTop: 5, marginBottom: 5, gap: 10 }} // Adjust gap and height
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
            Taylor Dean
          </Typography>

          <Typography
            variant="subtitle1"
            sx={{ fontWeight: "bold", mt: 1, color: "text.secondary" }}
          >
            Dance Marathon at The University of Florida
          </Typography>

          <Typography variant="body2" color="text.secondary">
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
              onClick={() => (window.location.href = "/blog/behindthescenes")}
              sx={{
                color: "primary.main",
                borderColor: "white",
                "&:hover": {
                  borderColor: "primary.main",
                  color: "primary.main",
                },
              }}
            >
              Previous Blog
            </Button>
          </Grid>

          <Grid item>
            <Button
              variant="outlined"
              endIcon={<ArrowForwardIcon />}
              onClick={() =>
                (window.location.href = "/blog/lifelineoflaughter")
              }
              sx={{
                color: "primary.main",
                borderColor: "white",
                "&:hover": {
                  borderColor: "primary.main",
                  color: "primary.main",
                },
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
