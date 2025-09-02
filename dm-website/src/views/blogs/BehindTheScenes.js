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

import Image1 from "../../assets/images/blogpics/BehindTheScenes/BehindTheScenes1.jpg";
import Image2 from "../../assets/images/blogpics/BehindTheScenes/BehindTheScenes2.jpg";
import Image3 from "../../assets/images/blogpics/BehindTheScenes/BehindTheScenes3.jpg";

export default function GiftOfHope() {
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
          title="Behind the Scenes Magic: How Miracles Happen"
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
            While some may attribute the magic of December to the holiday
            season, members of Dance Marathon at the University of Florida would
            likely attribute this magic to the hope that is created during
            Season of Miracles.
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            This fundraising push celebrates the power of bringing together
            students, families, and the community to support the children and
            families at UF Health Shands Children’s Hospital, during all
            seasons.
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            For most families, it is hard to imagine that the magic of the
            holiday season could be dimmed by the heartbreaking reality of
            spending it inside of a hospital room. DM at UF, however,
            understands this very real reality, recognizing that the kids at our
            hospital can’t wait. In response to this, these students spend their
            holiday break organizing team fundraisers that will benefit the
            children and families who need it most.
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            From gingerbread grams to study edge raffles, our internal teams
            have worked collectively to organize creative and personalized
            fundraisers to continue the fight for the children at our hospital.
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            These examples are just a glimpse at the miracles that are being
            made within the organization. Each of the fifteen teams in DM at UF
            have created a fundraiser specific to their team, symbolizing their
            decision to join in the fight for the children in need.
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            While some children ask for fun toys and games they’ll soon grow out
            of, the children at UF Health Shands Children's Hospital are in need
            of <b>life-saving gifts</b>, such as{" "}
            <b>
              vital research and medicine, that will impact their lives forever
            </b>
            . The funds raised by the fundraisers during the Season of Miracles
            will provide these invaluable gifts, offering hope and healing that
            lasts far beyond the holiday season.
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            As we come together for the Season of Miracles,{" "}
            <b>
              we are not just raising funds; we are giving the children and
              families a chance to use the holiday magic to write their next
              chapters
            </b>
            . Every dollar raised during this season helps these children get
            one chapter closer to hope, healing, and a brighter future—one where
            life-saving treatments, research, and care are available when they
            need it most. One where pediatric illness ends here.
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            To all of the teams that are sacrificially working over the break,
            thank you for the magic that you are bringing to this chapter of so
            many children’s lives.
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
                  sx={{
                    maxWidth: 400, // Control image size
                    maxHeight: 400,
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
              onClick={() => (window.location.href = "/blog/giftofhope")}
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
              Next Blog
            </Button>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </ThemeProvider>
  );
}
