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
import Image1 from "../../assets/images/blogpics/SOM/SOM1.jpg";
import Image2 from "../../assets/images/blogpics/SOM/SOM2.jpg";

// Change name to Blog Name
export default function SOM() {
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
        <PageHero imageUrl={Image1} title="Thank you SOM!" />{" "}
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
            As this year’s holiday season arrived, we saw the energy of our
            ever-so-buzzing campus begin to fade. Classes began to end, crowds
            of students began to thin and the lights across the University of
            Florida began to dim to signal the end of yet another fall semester.
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            But just across from our campus, the lights of UF Health Shands
            Children’s Hospital remained bright. While many students and
            families were able to travel home for the holidays and reunite with
            their loved ones, children continued their fight with childhood
            illness within those hospital walls.
          </Typography>

          <Typography variant="body1" color="text.secondary" paragraph>
            This Season of Miracles, we pledged to do the same. We pledged to
            continue to #FollowThePromise we made at the beginning of this
            semester to ourselves, those around us and the patients and families
            who need us most this holiday season. We pledged to remember that
            while we are able to rest and return to the comfort of our own
            homes, there are children who are not yet able to do the same.
          </Typography>

          <Typography variant="body1" color="text.secondary" paragraph>
            And so, we did. To every donor and member of our organization who
            followed their promise and continued their efforts during our Season
            of Miracles, thank you. Each contribution and act of support
            symbolizes a reminder to each child that if they could not take a
            break in their battles, neither would we.
          </Typography>

          <Typography variant="body1" color="text.secondary" paragraph>
            Because of you, the light of hope shined brighter than the lights at
            UF Health Shands Children’s Hospital and paved the way for brighter
            days ahead. Thank you for #FollowingThePromise to continue your
            efforts during the Season of Miracles and showing each child that no
            matter the season, they are never fighting alone.
          </Typography>

          {/* Add additional <Typography> blocks as needed, or delete any unneeded ones */}

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

          {/* Add any additional Grids as needed for more images */}

          <Typography
            variant="h6"
            sx={{ fontStyle: "italic", mt: 2, color: "text.secondary" }}
          >
            Molly Freeburg {/* Change author name */}
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
                (window.location.href = "/blog/tt25")
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

          <Grid item>
            <Button
              variant="outlined"
              endIcon={<ArrowForwardIcon />}
              onClick={() => (window.location.href = "/blog/newyears")}
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
