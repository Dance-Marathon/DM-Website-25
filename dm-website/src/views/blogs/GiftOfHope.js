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

import Image1 from "../../assets/images/blogpics/GiftOfHope/GiftOfHope1.jpg";
import Image2 from "../../assets/images/blogpics/GiftOfHope/GiftOfHope2.jpg";
import Image3 from "../../assets/images/blogpics/GiftOfHope/GiftOfHope3.jpeg";

export default function GiftOfHope() {
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
      <PageHero imageUrl={Image1} title="Giving the Gift of Hope" />
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
            What is your favorite holiday gift you’ve ever received? Maybe it was a bike or that doll you wished for. Maybe it was your first art set or a soccer ball. Do you remember what it meant to you? To unwrap the gift, hoping it was exactly what you wished for?
          </Typography>
          <Typography variant="body1" color='text.secondary' paragraph>
          This gift might’ve allowed you to discover your passion, to pick up a new hobby, or to bond with your family. Regardless of its purpose in your life, you remember it vividly.           </Typography>
          <Typography variant="body1" color='text.secondary' paragraph>
          Today, there is a family that will spend their holiday season behind hospital walls. There is a mother who will decorate the door of their child’s room to make it just a little brighter. There is a child that will unwrap their gifts inside their hospital room          </Typography>
          <Typography variant="body1" color='text.secondary' paragraph>
          The greatest gift that these children could receive is not something in a box. It’s not something that can be shaken around with guesses of what it could be. It’s something that only we can provide – together. It’s the gift of more chapters, the gift of their next birthday, <i>the gift of hope</i>.           </Typography>
          <Typography variant="body1" color='text.secondary' paragraph>
          This year, Dance Marathon at the University of Florida encourages you to grant a child this gift. We encourage you to consider the children whose fights don’t stop when school does. This holiday season, we encourage you to give the gift of hope to these children and their families.           </Typography>
          <Typography variant="body1" color='text.secondary' paragraph>
          This is the season of giving, the season of miracles, and the season of hope. For these kids, we work year-round to make sure that they spend the rest of their holidays from the comfort of their homes.           </Typography>
          <Typography variant="body1" color='text.secondary' paragraph>
          No matter the size, the gift of hope changes lives. It ensures that no child spends their holiday season in a hospital bed, and we need your help to do it.           </Typography>
          <Typography variant="body1" color='text.secondary' paragraph>
          In the beginning, we asked you what your favorite gift you’d ever received was. It is our hope that years from now, a healthy <i>former</i> patient will be asked the same thing. Their answer? Hope.           </Typography>
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
            Rylie Pryor
          </Typography>

          <Typography
            variant="subtitle1"
            sx={{ fontWeight: "bold", mt: 1, color: "text.secondary" }}
          >
            Dance Marathon at The University of Florida
          </Typography>

          <Typography variant="body2" color='text.secondary'>
            Public Relations, Assistant Director of External Communication
          </Typography>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "left", mt: 4 }}>
          <Button
            variant="outlined"
            startIcon={<ArrowBackIcon />}
            onClick={() => window.location.href = "/blog/thankfulness"}
            sx={{
              color: "primary.main",
              borderColor: "white",
              "&:hover": { borderColor: "primary.main", color: "primary.main" },
            }}
          >
            Previous Blog
          </Button>
        </Box>
      </Container>
      <Footer />
    </ThemeProvider>
  );
}
