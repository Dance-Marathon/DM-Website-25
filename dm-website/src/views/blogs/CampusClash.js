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

import Image1 from "../../assets/images/blogpics/CampusClash/CampusClash1.jpg";
import Image2 from "../../assets/images/blogpics/CampusClash/CampusClash2.jpg";
import Image3 from "../../assets/images/blogpics/CampusClash/CampusClash3.jpg";

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
      <PageHero imageUrl={Image1} title="As Our Campuses Clash, Our Causes Unite" />
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
            Our campus will soon be buzzing with students of the University of Florida and the University of Central Florida as the Gators and Knights face off on the football field. No matter the result, our fight doesn’t end when the final whistle blows.
          </Typography>
          <Typography variant="body1" color='text.secondary' paragraph>
            While this football game may cause a rivalry on the field, our Dance Marathon organizations are undoubtedly united. United under the stadium lights, united on one campus, united in purpose. As our campuses clash, our causes unite.
          </Typography>

          <Typography variant="body1" color='text.secondary' paragraph>
            It’s important to remember, even as our students banter over a sports game, that we all fight for more children to continue their stories. Rylie Manning, second-year Marathon Relations Committee Member at the University of Central Florida, knows what it’s like to fight for both of our hospitals.
          </Typography>

          <Typography variant="body1" color='text.secondary' paragraph>
            Dance Marathon is no new concept for Rylie. In high school, she participated in DM and fundraised for UF Health Shands Children’s Hospital. “It’s really full circle,” she said, “it was really awesome to fight for Shands.” Now, she has the opportunity to make an impact on Orlando Health Arnold Palmer Hospital for Children every day.
          </Typography>

          <Typography variant="body1" color='text.secondary' paragraph>
            Thanks to DM at UF and Knight-Thon, both UF Health Shands Children’s Hospital and Orlando Health Arnold Palmer Hospital for Children are undergoing life-saving renovations this year. More than we realize, our causes unite — just as our students do.
          </Typography>

          <Typography variant="body1" color='text.secondary' paragraph>
            At DM at UF, we see this Campus Clash not as a rivalry, but a union of our causes. It serves as a reminder that each Children’s Miracle Network Hospital is working together for the next generation. “Getting to connect with other schools who fight for our same cause means so much,” Rylie explained, “it all goes back to the Miracle Kids we love.”
          </Typography>

          <Typography variant="body1" color='text.secondary' paragraph>
            This weekend at The Swamp, you will be surrounded by people working to help children continue to write their stories. We encourage you to think about the children watching this game behind hospital walls. Our fight doesn’t end when the last whistle blows in The Swamp. Our fight doesn’t end when the stadium lights turn off. Our fight doesn’t end until pediatric illness does.
          </Typography>

          <Typography variant="body1" color='text.secondary' paragraph>
            “When it comes to the future of children’s health, we’re all on the same team.”
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
                    maxHeight: 250,
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
                    maxHeight: 250,
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
                onClick={() => window.location.href = "/blog/findingyourdmfamily"}
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
                onClick={() => window.location.href = "/blog/childhealthday"}
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
