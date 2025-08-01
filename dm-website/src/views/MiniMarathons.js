import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import AppAppBar from "../components/AppAppBar";
import getLPTheme from "../getLPTheme";
import Footer from "../components/Footer";
import { Container, Typography, Link, Grid } from "@mui/material";
import ScrollToTop from "../components/ScrollToTop";
import PageHero from "../components/PageHero";
import YoutubeVid from "../components/YoutubeVid";
import "../App.css";
import MiniMarathonsPic from "../assets/images/pagepics/MiniMarathonsPic.jpg";
import LazyLoad from "react-lazyload";

export default function MiniMarathons() {
  const [mode, setMode] = React.useState(() => {
    // Retrieve the stored theme from localStorage or default to 'light'
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
        <PageHero imageUrl={MiniMarathonsPic} title="Mini Marathons" />
      </LazyLoad>
      <Container
        sx={{
          pt: { xs: 4, sm: 6 },
          pb: { xs: 4, sm: 8 },
          display: "flex",
          flexDirection: "column",
          alignItems: "left",
          gap: { xs: 2, sm: 3 },
        }}
      >
        <Box
          sx={{
            width: { sm: "100%", md: "100%" },
            textAlign: { sm: "left", md: "left" },
          }}
        >
          <Typography
            variant="body1"
            gutterBottom
            sx={{ color: "text.secondary", marginBottom: 2 }}
          >
            12 high schools around the state of Florida participate each year in
            our{" "}
            <span style={{ color: "#7E31C8", fontWeight: "bold" }}>
              Mini Marathon
            </span>{" "}
            program. High school students at these schools show an enthusiastic
            passion for Dance Marathon even before their college years begin and
            play a vital role in our movement. This past year, our Mini Marathon
            programs raised a total of{" "}
            <Typography
              component="span"
              sx={{ fontWeight: "bold", color: "#FFC46E" }}
            >
              $190,190.99
            </Typography>{" "}
            , proving that these students are truly one generation fighting for
            the next. All money raised by Mini Marathons goes toward DM at UF’s
            total amount raised, which directly benefits the children at UF
            Health Shands Children’s Hospital.
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: "text.secondary",
              marginBottom: { xs: 0, sm: 6 },
              marginTop: 2,
            }}
          >
            <Typography
              component="span"
              sx={{ fontWeight: "bold", color: "#FFC46E" }}
            >
              We are always looking for more high schools to join our Dance
              Marathon family.
            </Typography>{" "}
            If you would like to learn more about our Mini-Marathon Programs or
            would like to get involved, please contact our Marathon Relations
            Overall Director, Gabriella Petillo, at{" "}
            <Link
              href="mailto:gpetillo@floridadm.org"
              sx={{ color: "#1a73e8" }}
            >
              gpetillo@floridadm.org
            </Link>
            .
          </Typography>

          <Grid container alignItems="center">
            <Grid item xs={12} sm={4}>
              <Typography
                variant="h5"
                component="h2"
                gutterBottom
                sx={{ marginTop: 4, color: "#7E31C8" }}
              >
                Participating Schools
              </Typography>
              <ul className="custom-bullet-points">
                <li>
                  <Typography
                    variant="body1"
                    component="span"
                    color="text.secondary"
                  >
                    Belleview High School
                  </Typography>
                </li>
                <li>
                  <Typography
                    variant="body1"
                    component="span"
                    color="text.secondary"
                  >
                    East Ridge High School
                  </Typography>
                </li>
                <li>
                  <Typography
                    variant="body1"
                    component="span"
                    color="text.secondary"
                  >
                    Forest High School
                  </Typography>
                </li>
                <li>
                  <Typography
                    variant="body1"
                    component="span"
                    color="text.secondary"
                  >
                    F.W. Buchholz High School
                  </Typography>
                </li>
                <li>
                  <Typography
                    variant="body1"
                    component="span"
                    color="text.secondary"
                  >
                    Gainesville High School
                  </Typography>
                </li>
                <li>
                  <Typography
                    variant="body1"
                    component="span"
                    color="text.secondary"
                  >
                    Lake Minneola High School
                  </Typography>
                </li>
                <li>
                  <Typography
                    variant="body1"
                    component="span"
                    color="text.secondary"
                  >
                    Leesburg High School
                  </Typography>
                </li>
                <li>
                  <Typography
                    variant="body1"
                    component="span"
                    color="text.secondary"
                  >
                    Newberry High School
                  </Typography>
                </li>
                <li>
                  <Typography
                    variant="body1"
                    component="span"
                    color="text.secondary"
                  >
                    Oak Hall High School
                  </Typography>
                </li>
                <li>
                  <Typography
                    variant="body1"
                    component="span"
                    color="text.secondary"
                  >
                    Tavares High School
                  </Typography>
                </li>
                <li>
                  <Typography
                    variant="body1"
                    component="span"
                    color="text.secondary"
                  >
                    Vanguard High School
                  </Typography>
                </li>
                <li>
                  <Typography
                    variant="body1"
                    component="span"
                    color="text.secondary"
                  >
                    Villages Charter School
                  </Typography>
                </li>
              </ul>
            </Grid>
            <Grid item xs={12} sm={8}>
              <Box>
                <LazyLoad height={200} offset={100} once>
                  <YoutubeVid videoId="wDD1GzDla3c" />
                </LazyLoad>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <Footer />
    </ThemeProvider>
  );
}
