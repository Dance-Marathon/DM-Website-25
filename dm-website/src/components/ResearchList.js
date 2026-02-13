// BlogList.js
import { Card, CardContent, CardMedia } from "@mui/material";
import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import AppAppBar from "./AppAppBar";
import getLPTheme from "../getLPTheme";
import Footer from "./Footer";
import { Container, Typography, Grid } from "@mui/material";
import ScrollToTop from "./ScrollToTop";
import PageHero from "./PageHero";
import { useNavigate } from "react-router-dom";

import ResearchPic from "../assets/images/pagepics/ResearchPic.jpg";

import EarlyDetection from "../assets/images/researchpics/EarlyDetection/EarlyDetection1.jpg";
import NewHope from "../assets/images/researchpics/NewHope/NewHope1.jpg";
const research = [
  {
    id: 1,
    title: "Early Detection of Type 1 Diabetes",
    date: "February 10, 2026",
    imageUrl: EarlyDetection,
    linkName: "early-detection-of-type-1-diabetes",
  },
  {
    id: 2,
    title: "New Hope in Cancer Treatment",
    date: "February 10, 2026",
    imageUrl: NewHope,
    linkName: "new-hope-in-cancer-treatment",
  },
];

const reversedResearch = [...research].reverse();

const ResearchList = () => {
  const navigate = useNavigate(); // Use useNavigate for redirection

  const handleCardClick = (linkName) => {
    navigate(`/research/${linkName}`); // Redirect to blog details on card click
  };

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
      <PageHero imageUrl={ResearchPic} title="Research" />
      <Grid container spacing={3} sx={{ padding: 5 }} justifyContent="center">
        {reversedResearch.map((research) => (
          <Grid item xs={12} sm={6} md={3.5} key={research.id}>
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                cursor: "pointer", // Make the card look clickable
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
                "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
                },
              }}
              onClick={() => handleCardClick(research.linkName)} // Navigate on click
            >
              <CardMedia
                component="img"
                height="200"
                image={research.imageUrl}
                alt={research.title}
              />
              <CardContent>
                <Typography
                  variant="h5"
                  component="div"
                  color="primary"
                  gutterBottom
                >
                  {research.title}
                </Typography>
                <Typography variant="subtitle2" color="text.secondary">
                  Published: {research.date}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Footer />
    </ThemeProvider>
  );
};

export default ResearchList;
