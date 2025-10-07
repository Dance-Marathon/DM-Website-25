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
import Image1 from "../../assets/images/blogpics/TogetherWe/TogetherWe1.jpg";
import Image2 from "../../assets/images/blogpics/TogetherWe/TogetherWe2.jpg";

// Change name to Blog Name
export default function TogetherWe() {
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
        <PageHero imageUrl={Image1} title="Together We" />{" "}
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
            #TogetherWe can make a difference in the lives of all who are
            affected by pediatric cancer.
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            Last year, 15,000 kids were diagnosed with cancer in the United
            States. Although pediatric cancers are one of the leading causes of
            death in this country, childhood cancer research is consistently
            underfunded. September is Childhood Cancer Awareness Month, and DM
            at UF is committed to honoring those currently fighting against
            their disease, those who lost their battle too soon and the loved
            ones who stand alongside them. 
          </Typography>

          <Typography variant="body1" color="text.secondary" paragraph>
            UF Health Shands Children’s Hospital is ranked among the top 50
            hospitals for pediatric cancer programs nationwide, according to the
            2024-2025 U.S. News & World Report Rankings. While many families
            travel great distances to access the life saving care it provides,
            we are fortunate to have such an incredible resource just minutes
            from campus. Every dollar raised by Dance Marathon at UF supports
            Children’s Miracle Network Hospitals, funding pediatric research and
            meeting hospitals’ areas of greatest need. A significant portion of
            these funds also supports Child Life initiatives, Arts in Medicine
            and other non-billable services that give children comfort and a
            sense of normalcy during treatment. These programs create
            opportunities for joy through laughter, music and playing,
            especially on days that are otherwise filled with doctors and
            medicine. What may seem like simple activities can have a profound
            impact. They lift children’s spirits, strengthen their quality of
            life and bring hope to families during their most difficult
            moments. 
          </Typography>

          <Typography variant="body1" color="text.secondary" paragraph>
            The Pediatric Hematology and Oncology Unit, Unit 42, was renovated
            using Children’s Miracle Network funding. Thanks to advances in
            treatment and technology across the country, about 85% of children
            diagnosed with cancer are now alive five years after their
            diagnosis. This is a remarkable improvement from the 1970s, when the
            five-year survival rate was as low as 58%.
          </Typography>

          <Typography variant="body1" color="text.secondary" paragraph>
            This month, take time to help those who need it most. #TogetherWe
            will fight for a future filled with miracles and milestones because
            every child deserves the chance to thrive. Whether big or small,
            every gesture can make an impact beyond imagination.
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
            Sarah Abisror {/* Change author name */}
          </Typography>

          <Typography
            variant="subtitle1"
            sx={{ fontWeight: "bold", mt: 1, color: "text.secondary" }}
          >
            Dance Marathon at The University of Florida
          </Typography>

          <Typography variant="body2" color="text.secondary">
            Communications and Public Relations, Assistant Director of Internal
            Affairs {/* Change position name */}
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
                (window.location.href = "/blog/spark")
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
              onClick={() => (window.location.href = "/blog/followthepromise")}
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
