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

import Image1 from "../../assets/images/blogpics/Spark/Spark1.jpg";
import Image2 from "../../assets/images/blogpics/Spark/Spark2.jpg";
import Image3 from "../../assets/images/blogpics/Spark/Spark3.jpg";
import Image4 from "../../assets/images/blogpics/Spark/Spark4.jpg";

export default function Spark() {
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
        <PageHero imageUrl={Image1} title="A Spark: The Beginning for Olivia Knier" />
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
           For Olivia, our Finance Manager, one word that captures her Dance Marathon at UF experience is spark. It’s the word that describes how her involvement in our organization began, how it grew and how it has shaped her college experience and her future. Olivia first heard about Dance Marathon at the University of Florida during her freshman year while going through UF Panhellenic Recruitment. At the time, she was on the Pre-Med track, and almost every person she met told her how impactful DM at UF was, especially with its mission to support Children’s Miracle Network Hospitals, like UF Health Shands Children's Hospital. After hearing how perfectly our mission aligned with her dreams of helping others, a spark was lit. {" "}
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            Her involvement began as an Emerging Leader in Unit 44, where she discovered something special within our organization—one that was built on creativity, collaboration and purpose. As a sophomore and junior, she served as a Merchandise Captain, bringing ideas to life and transforming them into tangible symbols of the movement she loved. For her senior year, she was given the life-changing opportunity to serve as the Overall Director of the Merchandise Team. Olivia led her team with passion and dedication, and right after revealing the yearlong total at the Main Event, she remembers finding her team and seeing how much joy and pride they had on their faces. It was, in every sense, a “right reason” moment. {" "}
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            As her time as an Overall Director came to a close, Olivia was not ready to leave DM at UF behind. After being accepted into graduate school at UF, she knew she was able to continue to give back to the organization that had given her so much. Now, as Finance Manager, she’s continuing to share her passion for this organization. Along the way, she has grown into the leader she is today because of DM at UF; she leads with empathy, approaches challenges with creativity and commits herself wholeheartedly to something bigger than herself. {" "}
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            What began as a spark freshman year has grown into a clearer vision for her future: Olivia wants to pursue nonprofit management and one day work for Children’s Miracle Network, helping other Dance Marathon programs succeed. {" "}
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            If you are unsure about joining Dance Marathon at the University of Florida, “Just do it.” The friendships, skills and memories you create are unlike any other. For Olivia, DM at UF started off as a spark that has defined her time at UF and will continue to guide her far beyond.
          </Typography>
          <Grid
  container
  alignItems="center"
  justifyContent="center"
  sx={{ marginTop: 5, marginBottom: 5, gap: 3 }}
>
  <Grid item>
    <Box
      component="img"
      src={Image2}
      sx={{
        maxWidth: 400,
        maxHeight: 400,
        borderRadius: 4,
      }}
    />
  </Grid>
  <Grid item>
    <Box
      component="img"
      src={Image3}
      sx={{
        maxWidth: 400,
        maxHeight: 400,
        borderRadius: 4,
      }}
    />
  </Grid>
  <Grid item>
    <Box
      component="img"
      src={Image4}
      sx={{
        maxWidth: 400,
        maxHeight: 400,
        borderRadius: 4,
      }}
    />
  </Grid>
</Grid>


          <Typography
            variant="h6"
            sx={{ fontStyle: "italic", mt: 2, color: "text.secondary" }}
          >
            Tori Kitchens
          </Typography>

          <Typography
            variant="subtitle1"
            sx={{ fontWeight: "bold", mt: 1, color: "text.secondary" }}
          >
            Dance Marathon at The University of Florida
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Communications and Public Relations
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Assistant Director of Communications
          </Typography>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "left", mt: 4 }}>
          <Button
            variant="outlined"
            startIcon={<ArrowBackIcon />}
            onClick={() => (window.location.href = "/blog/feelthemagic")}
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
