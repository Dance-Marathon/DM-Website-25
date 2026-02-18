import * as React from "react";
import { useParams } from "react-router-dom";
import researchData from "../../data/researchData";

import {
  CssBaseline,
  Box,
  Container,
  Typography,
  Grid,
  Link,
} from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import AppAppBar from "../../components/AppAppBar";
import Footer from "../../components/Footer";
import ScrollToTop from "../../components/ScrollToTop";
import PageHero from "../../components/PageHero";
import getLPTheme from "../../getLPTheme";
import ResearchNavigation from "../../components/ResearchNavigation";

export default function ResearchTemplate() {
  const { linkName } = useParams();
  const research = researchData.find((r) => r.linkName === linkName);

  const [mode, setMode] = React.useState(
    localStorage.getItem("theme") || "light",
  );

  const LPtheme = createTheme(getLPTheme(mode));

  const toggleColorMode = () => {
    setMode((prev) => {
      const newMode = prev === "dark" ? "light" : "dark";
      localStorage.setItem("theme", newMode); // Store the new mode in localStorage
      return newMode;
    });
  };

  if (!research) {
    return <Typography>Research not found.</Typography>;
  }

  return (
    <ThemeProvider theme={LPtheme}>
      <ScrollToTop />
      <CssBaseline />
      <AppAppBar mode={mode} toggleColorMode={toggleColorMode} />

      <PageHero imageUrl={research.heroImage} title={research.title} />

      <Container
        sx={{
          pt: { xs: 4, sm: 6 },
          pb: { xs: 4, sm: 8 },
          width: { xs: "90%", sm: "75%", md: "50%" },
          display: "flex",
          flexDirection: "column",
          gap: { xs: 2, sm: 3 },
          color: "white",
        }}
      >
        <Box sx={{ textAlign: "left" }}>
          {research.content.map((paragraph, index) => (
            <Typography
              key={index}
              variant="body1"
              color="text.secondary"
              paragraph
            >
              {paragraph}
            </Typography>
          ))}

          {research.externalLink && (
            <Link
              target="_blank"
              href={research.externalLink}
              sx={{ color: "#1a73e8" }}
            >
              Learn more
            </Link>
          )}

          {research.images && research.images.length > 0 && (
            <Grid
              container
              spacing={4}
              sx={{ mt: 2, mb: 2 }}
              justifyContent="center"
            >
              {research.images.map((img, i) => (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  key={i}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Box
                    component="img"
                    src={img}
                    sx={{
                      width: "100%",
                      maxWidth: { xs: "100%", sm: 500, md: 600 },
                      borderRadius: 4,
                    }}
                  />
                </Grid>
              ))}
            </Grid>
          )}
        </Box>

        <ResearchNavigation />
      </Container>

      <Footer />
    </ThemeProvider>
  );
}
