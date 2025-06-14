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
import LazyLoad from 'react-lazyload';

import Image1 from "../../assets/images/blogpics/BeyondTomorrow/BT1.jpg";
import Image2 from "../../assets/images/blogpics/BeyondTomorrow/BT2.jpg";
import Image3 from "../../assets/images/blogpics/BeyondTomorrow/BT3.jpg";

export default function BeyondTomorrow() {
  const [mode, setMode] = React.useState(() => {
    // Retrieve the stored theme from localStorage or default to 'dark'
    return localStorage.getItem('theme') || 'dark';
  });
  const LPtheme = createTheme(getLPTheme(mode));

  const toggleColorMode = () => {
    setMode((prev) => {
      const newMode = prev === 'dark' ? 'light' : 'dark';
      localStorage.setItem('theme', newMode); // Store the new mode in localStorage
      return newMode;
    });
  };

  return (
    <ThemeProvider theme={LPtheme}>
      <ScrollToTop />
      <CssBaseline />
      <AppAppBar mode={mode} toggleColorMode={toggleColorMode} />
      <LazyLoad height={200} offset={100} once>
      <PageHero imageUrl={Image1} title="Beyond Tomorrow" />
      </LazyLoad>

      <Container
        sx={{
          pt: { xs: 2, sm: 6 },
          pb: { xs: 2, sm: 8 },
          width: "50%",
          display: "flex",
          flexDirection: "column",
          gap: { xs: 2, sm: 3 },
          color: "white",
        }}
      >
        <Box sx={{ textAlign: "left" }}>
          <Typography variant="body1" color='text.secondary' paragraph>
          Most of you reading this are probably worried about your next exam, about that homework assignment due tonight, or about what time you need to go to work. These everyday tasks and responsibilities are the very ones that we take for granted.
          </Typography>
          <Typography variant="body1" color='text.secondary' paragraph>
          Families and patients at UF Health Shands Children’s Hospital are worried about another kind of tomorrow. For some, tomorrow will bring chemo treatment, surgery, or new medicine. We have the ability to ensure that this is not an everyday occurrence.  It is up to us to look Beyond Tomorrow for those that are unable to. It is up to us to continue to provide hope beyond another hospital night.
          </Typography>
          <Typography variant="body1" color='text.secondary' paragraph>
          We look Beyond Tomorrow for the mother who sleeps on a pull-out couch next to her child, for the father who holds her hand along the way, for the sibling who distracts themself with coloring books, and for the patient who smiles through it all.
          </Typography>
          <Typography variant="body1" color='text.secondary' paragraph>
          For the 31st year, we are filling our tomorrows with the hope of one more donation, of one more Miracle Maker registration, or of one more person inspired. We work to make sure that the yellow balloon representing Children’s Miracle Network is on one more piece of life-saving equipment. We work to make sure that these kids are the ones who come back 10 years from now to see the organization that helped save their lives.
          </Typography>
          <Typography variant="body1" color='text.secondary' paragraph>
          Dance Marathon at UF works towards this cause so that tomorrow could be the last day in a hospital bed. It could be the last day that mom sleeps on a pull-out couch, it could be the last day worrying about the next.
          </Typography>
          <Typography variant="body1" color='text.secondary' paragraph>
          We are able to look Beyond Tomorrow because although our students may be worried about homework, exams, and work, our hearts and minds lie just down the street from us. We finish the homework so we can make one more phone call for a donation. We pass the exams so we can talk to our classmates about joining our cause. We keep pushing Beyond Tomorrow so our Miracle Families never have to spend their tomorrow in a hospital room.
          </Typography>
          <Typography variant="body1" color='text.secondary' paragraph>
          We pledge to keep looking beyond the next laugh, beyond the next chemo treatment, beyond the next hospital visit. We are writing the story of Beyond Tomorrow, and we urge you to pick up the pen.
          </Typography>
          <Grid 
            container 
            alignItems="center"  // Aligns items vertically centered
            justifyContent="center"  // Pushes images to left and right
            sx={{ marginTop: 5, marginBottom: 5, gap: 10 }}  // Adjust gap and height
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
            <Grid item>
            <LazyLoad height={200} offset={100} once>
                <Box
                component="img"
                src={Image3}
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
            Rylie Pryor
          </Typography>

          <Typography
            variant="subtitle1"
            sx={{ fontWeight: "bold", mt: 1, color: "text.secondary" }}
          >
            Dance Marathon at The University of Florida
          </Typography>

          <Typography variant="body2" color='text.secondary'>
            Assistant Director of External Communications
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
              onClick={() => window.location.href = "/blog/lifelineoflaughter"}
              sx={{
                color: "primary.main",
                borderColor: "white",
                "&:hover": { borderColor: "primary.main", color: "primary.main" },
              }}
            >
              Previous Blog
            </Button>
          </Grid>

           <Grid item>
            <Button
              variant="outlined"
              endIcon={<ArrowForwardIcon />}
              onClick={() => window.location.href = "/blog/feelthemagic"}
              sx={{
                color: "primary.main",
                borderColor: "white",
                "&:hover": { borderColor: "primary.main", color: "primary.main" },
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