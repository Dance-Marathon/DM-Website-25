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

import Image1 from "../../assets/images/blogpics/LifelineOfLaughter/Lifeline1.jpg";
import Image2 from "../../assets/images/blogpics/LifelineOfLaughter/Lifeline2.jpg";

export default function LifelineOfLaughter() {
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
        <PageHero imageUrl={Image2} title="The Lifeline of Laughter" />
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
            Laughter is more than just a sound—it’s a lifeline. When your child
            or sibling is sick, hearing them laugh feels like a beacon of hope,
            a reminder that joy can still exist even in the darkest moments.
            It’s those small, precious laughs that remind us of what we’re
            fighting for: a world where every kid gets to simply be a kid.
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            This February, Dance Marathon at the University of Florida is
            focusing on the heart of our mission—to bring more laughter, more
            hope, and more light into the lives of families facing pediatric
            illness. Each of our members is dedicated to raising $300 this
            month, symbolizing the 300 times the average child laughs each day.
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            People always say that laughter is the best medicine, and it can
            truly be life-saving. Laughter is proven to reduce stress and boost
            immunity. DM at UF is committed to raising funds that lead to more
            laughter—through the Child Life program, Arts in Medicine, and
            renovated playrooms.
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            These initiatives make a child’s hospital stay just a little
            brighter. They allow kids to take their minds off of doctors and
            machines, and focus on their childhood—on singing along to their
            favorite song during music therapy, on making a new friend in a
            freshly renovated playroom, on laughing while painting their own
            masterpiece. These moments of joy may seem small, but to a family
            facing pediatric illness, they mean everything.
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            This February, we are fighting for more of those moments. More
            smiles lighting up playgrounds. More belly laughs echoing through
            homes. More chances for kids to feel like kids. By donating,
            sharing, and fundraising, you are bringing light to families who
            need it most. Join us as we turn laughter into healing, hope into
            action, and dollars into miracles.
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
                  src={Image1}
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
            Grey Chapin
          </Typography>

          <Typography
            variant="subtitle1"
            sx={{ fontWeight: "bold", mt: 1, color: "text.secondary" }}
          >
            Dance Marathon at The University of Florida
          </Typography>

          <Typography variant="body2" color="text.secondary">
            Public Relations, Overall Director
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
              onClick={() => (window.location.href = "/blog/yestomiracles")}
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
              onClick={() => (window.location.href = "/blog/beyondtomorrow")}
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
