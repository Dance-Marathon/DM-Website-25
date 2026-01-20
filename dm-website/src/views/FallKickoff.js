import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import AppAppBar from "../components/AppAppBar";
import getLPTheme from "../getLPTheme";
import Footer from "../components/Footer";
import { Container, Typography } from "@mui/material";
import ScrollToTop from "../components/ScrollToTop";
import PageHero from "../components/PageHero";
import YoutubeVid from "../components/YoutubeVid";
import FallKickoffPic from "../assets/images/pagepics/Kickoff25.jpg";
import LazyLoad from "react-lazyload";

export default function FallKickoff() {
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
        <PageHero imageUrl={FallKickoffPic} title="Fall Kickoff" />
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
          <Typography color="text.secondary" sx={{ marginBottom: 6 }}>
            <p>
              DM at UF’s{" "}
              <span style={{ color: "#233563", fontWeight: "bold" }}>
                Kickoff Event
              </span>{" "}
              is our annual start to the year, which brings together our members,
              Miracle Families and the UF community. It features music, games,
              Miracle Stories, merch and more as we launch into a new year of 
              making miracles happen.
            </p>
          </Typography>
          <LazyLoad height={200} offset={100} once>
            <YoutubeVid videoId="fTElQSBr9bU" />
          </LazyLoad>
        </Box>
      </Container>
      <Footer />
    </ThemeProvider>
  );
}
