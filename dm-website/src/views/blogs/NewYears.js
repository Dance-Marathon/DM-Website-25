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

// How to Add a Blog
// 1. Change all comments in here with text from blog
// 2. Go to /src/index.js and add <Route> with path to the blog like the others
// 3. Go to /src/components/BlogList.js and add blog to list with same formatting as above

// Add all images to dm-website/src/assets/images/blogpics in a new folder with the title of the blog
// Import images here and add any more if needed
import Image1 from "../../assets/images/blogpics/NewYears/NewYears1.jpg";
import Image2 from "../../assets/images/blogpics/NewYears/NewYears2.jpg";

// Change name to Blog Name
export default function NewYears() {
  const [mode, setMode] = React.useState(() => {
    return localStorage.getItem("theme") || "light";
  });
  const LPtheme = createTheme(getLPTheme(mode));

  const toggleColorMode = () => {
    setMode((prev) => {
      const newMode = prev === "dark" ? "light" : "dark";
      localStorage.setItem("theme", newMode);
      return newMode;
    });
  };
  return (
    <ThemeProvider theme={LPtheme}>
      <ScrollToTop />
      <CssBaseline />
      <AppAppBar mode={mode} toggleColorMode={toggleColorMode} />
      <LazyLoad height={200} offset={100} once>
        <PageHero imageUrl={Image1} title="New Years" />{" "}
        {/* Change blog name here */}
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
            What is your New Year's resolution? To learn a new skill? To work
            harder in classes? To spend more time with your friends and family?
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            Every December 31st, we reflect on the year behind us and make goals
            for the year ahead. We stay up late and count down the minutes until
            the clock strikes twelve. It is in this time that we gain new
            motivation, energy and excitement to make this new year the best one
            yet.
          </Typography>

          <Typography variant="body1" color="text.secondary" paragraph>
            Oftentimes, our resolutions are filled with personal goals. Maybe to
            eat healthier, go outside more, or do better in school. This year we
            invite you to reflect on your time at Dance Marathon so far. Think
            of all you have accomplished, the miracle families, the friends and
            memories you have made along the way. How have you followed the
            promise?
          </Typography>

          <Typography variant="body1" color="text.secondary" paragraph>
            2025 has been an incredible year for DM at UF, but as we look
            towards 2026, there is so much more we can do! With the main event
            being just a few months away, what can you do this year to make a
            change? What are some new ways we can fundraise? And how can we help
            our miracle families' new year’s resolutions come true? Together, we
            can make this next year one that is unforgettable.
          </Typography>

          <Typography variant="body1" color="text.secondary" paragraph>
            This new year, we look into 2026 with renewed passion, purpose and
            drive to give these children and their families the resolutions they
            deserve. Whether you donate, fundraise or spread the messaging of DM
            at UF, you are helping to make a change.
          </Typography>

          <Typography variant="body1" color="text.secondary" paragraph>
            This year, at Dance Marathon at The University of Florida, our New
            Year's resolution is to #FollowThePromise we made and continue our
            fight to end childhood illness.
          </Typography>

          {/* Add additional <Typography> blocks as needed, or delete any unneeded ones */}

          <Grid
            container
            alignItems="center"
            justifyContent="center"
            sx={{ marginTop: 5, marginBottom: 5, gap: 10 }}
          >
            <Grid item>
              <LazyLoad height={200} offset={100} once>
                <Box
                  component="img"
                  src={Image2}
                  alt="Miracle Families"
                  sx={{
                    maxWidth: 400,
                    borderRadius: 4,
                    display: "block",
                  }}
                />
              </LazyLoad>
            </Grid>
          </Grid>

          {/* Add any additional Grids as needed for more images */}

          <Typography
            variant="h6"
            sx={{ fontStyle: "italic", mt: 2, color: "text.secondary" }}
          >
            Josephine Barsky {/* Change author name */}
          </Typography>

          <Typography
            variant="subtitle1"
            sx={{ fontWeight: "bold", mt: 1, color: "text.secondary" }}
          >
            Dance Marathon at The University of Florida
          </Typography>

          <Typography variant="body2" color="text.secondary">
            Public Relations, Captain {/* Change position name */}
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
              onClick={() =>
                (window.location.href = "/blog/thankyousom")
              } /* Complete Step 2 in list above and then change link to previous blog url from index.js ^*/
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

          {/* If this is no longer most recent blog, uncomment below and change url to next blog */}

          {/* <Grid item>
            <Button
              variant="outlined"
              endIcon={<ArrowForwardIcon />}
              onClick={() =>
                (window.location.href = "/blog/findingyourdmfamily")
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
          </Grid> */}
        </Grid>
      </Container>
      <Footer />
    </ThemeProvider>
  );
}
