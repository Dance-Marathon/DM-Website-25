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
import Link from "@mui/material/Link";

import Image1 from "../../assets/images/researchpics/NewHope/NewHope1.jpg";
import Image2 from "../../assets/images/researchpics/NewHope/NewHope2.jpg";

export default function NewHope() {
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
        <PageHero imageUrl={Image1} title="New Hope in Cancer Treatment" />
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
            UF researchers found that mRNA vaccine technology may help the
            immune system fight cancer better. In a study they conducted, they
            found that cancer patients who received an mRNA vaccine soon after
            starting treatment had better outcomes than those who did not. The
            vaccine appeared to help “wake up” the immune system so it could
            better find and attack cancer cells. These early findings suggest
            this approach could one day help treat many types of cancer,
            including childhood cancers.
          </Typography>

          <Link
            target="_blank"
            href="https://ufhealth.org/news/2025/study-finds-covid-19-mrna-vaccine-sparks-immune-response-to-fight-cancer"
            sx={{ color: "#1a73e8" }}
          >
            Learn more
          </Link>

          <Typography
            variant="body1"
            color="text.secondary"
            paragraph
          ></Typography>

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
            {/* <Grid item>
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
            </Grid> */}
          </Grid>
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
                (window.location.href =
                  "/research/early-detection-of-type-1-diabetes")
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
              Previous Research Spotlight
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
