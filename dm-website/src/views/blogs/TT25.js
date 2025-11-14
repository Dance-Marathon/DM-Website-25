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
import Image1 from "../../assets/images/blogpics/TT25/TT251.jpg";
import Image2 from "../../assets/images/blogpics/TT25/TT252.jpg";

// Change name to Blog Name
export default function TT25() {
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
        <PageHero
          imageUrl={Image1}
          title="Transform Today 2025: A Promise Transformed
"
        />{" "}
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
            Every member of Dance Marathon at UF has a different promise they
            followed this Transform Today. For some, it was to keep fighting for
            a future where no child has to wear a hospital band; for others, it
            was to reach out to every single donor and follow up. But on the
            night of October 21st, around 12 hours into Transform Today, I
            witnessed a promise that changed my entire perspective about Dance
            Marathon and what it means to fight childhood illness.
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            At the end of Day 1, members of DM at UF completed an exercise that
            involved writing our promise on a paper bag, and lighting that
            promise with a tea candle. We set our bags down on the platform on
            the Reitz Union North Lawn, and as I set mine down, I examined the
            promises lining the wall.
          </Typography>

          <Typography variant="body1" color="text.secondary" paragraph>
            The promise that caught my eye read, “So no kid has to fight alone.”
          </Typography>

          <Typography variant="body1" color="text.secondary" paragraph>
            This promise was so blunt, so unique, that I couldn’t help but be
            taken aback. I re-examined my “Why DM.” Previously, I was thinking I
            was simply doing a good deed and getting involved on campus.
            Truthfully, I have many friends who are in DM that convinced me to
            join this year as a sophomore.
          </Typography>

          <Typography variant="body1" color="text.secondary" paragraph>
            After seeing that promise, it is so much easier for me to envision
            who I do this for. I do not do this for myself or for my friends,
            rather I know that I fundraise, work and advocate for the children
            at UF Health Shands Children’s Hospital. Transform Today not only
            transformed the lives of so many children fighting childhood
            illness, but also the lives of those participating in it. Transform
            Today changed my “Why,” and my relationship with DM. Forever.
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
            Shae Helmer {/* Change author name */}
          </Typography>

          <Typography
            variant="subtitle1"
            sx={{ fontWeight: "bold", mt: 1, color: "text.secondary" }}
          >
            Dance Marathon at The University of Florida
          </Typography>

          <Typography variant="body2" color="text.secondary">
            Communications and Public Relations Captain{" "}
            {/* Change position name */}
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
                (window.location.href = "/blog/followthepromise")
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
