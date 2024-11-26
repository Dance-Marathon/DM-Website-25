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

import Image1 from "../../assets/images/blogpics/KM Album 1-200_cropped.jpg";
import Image2 from "../../assets/images/blogpics/IMG_1005.JPG";
import Image3 from "../../assets/images/blogpics/IMG_1006.JPG";

export default function BeyondThisMoment() {
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
      <PageHero imageUrl={Image1} title="Thankfulness in Times of Transformation" />
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
            As our world constantly evolves, it’s so important that we take moments to express gratitude for the invaluable power of transformation. During the holiday season, a time filled with thankfulness, we reflect on <i>Transform Today</i> and the profound impact our Dance Marathon community had on UF Health Shands Children’s Hospital. Together, we helped turn $365,131.19 pages in just 26.2 hours, transforming today to give hope for tomorrow.
          </Typography>
          <Typography variant="body1" color='text.secondary' paragraph>
            Reflecting on this year’s <i>Transform Today</i>, we felt a deep appreciation for each other and for the shared commitment to be “all in” for those 26.2 hours. Being surrounded by this community—especially during busy school schedules—filled us all with a renewed sense of purpose. 
          </Typography>
          <Typography variant="body1" color='text.secondary' paragraph>
            <i>Transform Today</i> is a powerful reminder of how often we take the little things for granted, especially our ability to make a difference. We’re so grateful for the inspiring Miracle Stories that deepened our connection to DM at UF’s mission and reminded us to carry this gratitude forward, especially during the holiday season.
          </Typography>
          <Typography variant="body1" color='text.secondary' paragraph>
            Through teamwork, we were able to help #TurnThePage and offer children the gift of more tomorrows. This organization’s dedication helped us change lives and strengthen our shared passion for giving back to something much bigger than ourselves.
          </Typography>
          <Typography variant="body1" color='text.secondary' paragraph>
            The impact of <i>Transform Today</i> is immeasurable. It is enabling hospital renovations, funding critical research, and continuing the stories of our Miracle Families. Every hour we spent fundraising at the Reitz Union became a beacon of hope for UF Health Shands Children’s Hospital, showing that in just one day, we can transform a child’s journey.
          </Typography>
          <Typography variant="body1" color='text.secondary' paragraph>
            The Dance Marathon community is continuously inspired by the bravery and strength of these children, especially as we carry these stories with us through this season of gratitude. <i>Transform Today</i> reminds us that thankfulness is a powerful force for creating meaningful, intentional change. In every way, Transform Today was a testament to the power of gratitude to inspire transformation, and we could not be more blessed to have been a part of it.
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
            <Grid item>
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
            </Grid>
            </Grid>


          <Typography
            variant="h6"
            sx={{ fontStyle: "italic", mt: 2, color: "text.secondary" }}
          >
            Elizabeth Mallard
          </Typography>

          <Typography
            variant="subtitle1"
            sx={{ fontWeight: "bold", mt: 1, color: "text.secondary" }}
          >
            Dance Marathon at The University of Florida
          </Typography>

          <Typography variant="body2" color='text.secondary'>
            Public Relations, Captain
          </Typography>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "left", mt: 4 }}>
          <Button
            variant="outlined"
            startIcon={<ArrowBackIcon />}
            onClick={() => window.location.href = "/blog/miraclemaker"}
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
