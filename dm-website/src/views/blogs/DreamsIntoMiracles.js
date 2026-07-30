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
import LazyLoad from "react-lazyload";

// How to Add a Blog
// 1. Change all comments in here with text from blog
// 2. Go to /src/index.js and add <Route> with path to the blog like the others
// 3. Go to /src/components/BlogList.js and add blog to list with same formatting as above
/// 4. Go to /src/data/blogData.js and add blog to list with same formatting as above

// Add all images to dm-website/src/assets/images/blogpics in a new folder with the title of the blog
// Import images here and add any more if needed
import Image1 from "../../assets/images/blogpics/DreamsIntoMiracles/DreamsIntoMiracles1.png";
import Image2 from "../../assets/images/blogpics/DreamsIntoMiracles/DreamsIntoMiracles2.jpeg";

// Change name to Blog Name
export default function DreamsIntoMiracles() {
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
        <PageHero imageUrl={Image1} title="Dreams Into Miracles" />{" "}
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
          Aviana Gonzalez started her year off with a bang. Having raised $530 over the duration of this summer, Aviana created 305 of those miracles in the span of just one week, during our summer challenge, How Far Can You #CarryTheDream? Aviana felt empowered during this push, as it showed her that every dollar raised means something bigger is happening outside of an individual fundraising goal. She aims to lead by example, and her passion for fundraising is just the start. Her favorite way to fundraise is to text and call donors, saying she loves not only to fundraise but “educate family and friends on how DM helps the patients at Shands Children’s Hospital.\"” 
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
          Starting as an Emerging Leader last year, Aviana learned to value connecting with others, educating them about our cause and pushed herself out of her comfort zone. This year, as the Hospitality Team’s Assistant Director of Internal Affairs, Aviana is wanting to start the year off by leading with energy and passion to #CarryTheDream long after the campaign ends. To her, #CarryTheDream means creating hope for those who need it most, and she loves working together with her team to make dreams come true every day. 
          </Typography>

          <Typography variant="body1" color="text.secondary" paragraph>
            {/* Insert Paragraph Here */}
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
                  alt="Dance Marathon participants supporting the #CarryTheDream campaign"
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
            variant="body1"
            sx={{ mt: 2, color: "text.secondary" }}
          >
            All The Right Reasons, {/* Change author name */}
          </Typography>

          <Typography
            component="h2"
            variant="h6"
            sx={{ fontStyle: "italic", mt: 2, mb: 0, color: "text.secondary" }}
          >
            Shae Helmer {/* Change author name */}
          </Typography>

          <Typography
            component="p"
            variant="subtitle1"
            sx={{ fontWeight: "bold", mt: 0, color: "text.secondary" }}
          >
            Dance Marathon at The University of Florida
          </Typography>

          <Typography variant="body2" color="text.secondary">
            Public Relations, Overall Director{" "}
            {/* Change position name */}
          </Typography>
        </Box>
        <Grid
          container
          alignItems="center"
          justifyContent="space-between"
          sx={{ mt: 4 }}
        >
          {/*<Grid item>
            <Button
              variant="outlined"
              startIcon={<ArrowBackIcon />}
              onClick={() =>
                (window.location.href = "/blog/ourpromise")
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
          </Grid> */}

          {/* If this is no longer most recent blog, uncomment below and change url to next blog */}

          <Grid item>
          <Button
            fullWidth
            variant="outlined"
            endIcon={<ArrowForwardIcon />}
            onClick={() =>
              (window.location.href = "/blog/carrythedream")
            }
            sx={{
              color: "#E2883C",
              borderColor: "#E2883C",
              backgroundColor: "rgba(198, 106, 26, 0.08)",
              "&:hover": {
                borderColor: "#E2883C",
                backgroundColor: "rgba(198, 106, 26, 0.2)",
                color: "#EB9F68",
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