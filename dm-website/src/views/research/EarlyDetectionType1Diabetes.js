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

import Image1 from "../../assets/images/researchpics/EarlyDetection/EarlyDetection1.jpg";
import Image2 from "../../assets/images/researchpics/EarlyDetection/EarlyDetection2.jpg";

export default function EarlyDetectionType1Diabetes() {
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
        <PageHero
          imageUrl={Image1}
          title="Early Detection of Type 1 Diabetes"
        />
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
            UF scientists have potentially found an early clue in how Type 1
            Diabetes begins. They found that small clusters of insulin-producing
            cells begin to stop functioning long before symptoms of Type 1
            Diabetes appear. This insight opens the door for earlier detection
            and the possibility of delaying or even preventing the disease,
            which is most often diagnosed in childhood.
          </Typography>

          <Link
            target="_blank"
            href="https://ufhealth.org/news/2025/researchers-find-vital-clue-in-the-progression-of-type-1-diabetes"
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
        <Box sx={{ display: "flex", justifyContent: "right", mt: 4 }}>
          <Button
            variant="outlined"
            endIcon={<ArrowForwardIcon />}
            onClick={() =>
              (window.location.href = "/research/new-hope-in-cancer-treatment")
            }
            sx={{
              color: "primary.main",
              borderColor: "white",
              "&:hover": { borderColor: "primary.main", color: "primary.main" },
            }}
          >
            Next Research Spotlight
          </Button>
        </Box>
      </Container>
      <Footer />
    </ThemeProvider>
  );
}
