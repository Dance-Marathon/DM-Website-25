import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import AppAppBar from "../components/AppAppBar";
import getLPTheme from "../getLPTheme";
import Footer from "../components/Footer";
import { Typography, Box, Link, Container, Grid, Chip } from "@mui/material";
import ScrollToTop from "../components/ScrollToTop";
import PageHero from "../components/PageHero";
import OrganizationsPic from "../assets/images/pagepics/Organizations.jpg";
import LazyLoad from "react-lazyload";

export default function Organizations() {
  const [mode, setMode] = React.useState(() => {
    return localStorage.getItem("theme") || "light";
  });
  const LPtheme = createTheme(getLPTheme(mode));

  const toggleColorMode = () => {
    setMode((prev) => {
      const newMode = prev === "dark" ? "light" : "dark";
      localStorage.setItem("theme", newMode);
      return newMode;
    });
  };

  // Updated organizations array with longer names at the bottom
  const organizations = [
    // Organizations with shorter names
    "Alpha Chi Omega",
    "Delta Delta Delta",
    "Kappa Alpha Theta",
    "Alpha Delta Pi",
    "Delta Gamma",
    "Kappa Delta",
    "Sigma Kappa",
    "Alpha Epsilon Phi",
    "Delta Nu Zeta",
    "Kappa Kappa Gamma",
    "Alpha Epsilon Pi",
    "Sigma Phi Epsilon",
    "Delta Sigma Phi",
    "Kappa Sigma",
    "Delta Tau Delta",
    "Lambda Chi Alpha",
    "Tau Epsilon Phi",
    "Alpha Phi",
    "Delta Zeta",
    "Sigma Alpha Epsilon",
    "Tau Kappa Epsilon",
    "Phi Delta Theta",
    "Gamma Eta",
    "Phi Kappa Tau",
    "Gamma Phi Beta",
    "Phi Mu",
    "Pi Beta Phi",
    "UF Honors Program",
    "Chi Omega",
    "Pi Kappa Alpha",
    "Chi Phi",
    "Innovation Academy",
    "Kappa Alpha Order",
    "Zeta Beta Tau",
    "Zeta Tau Alpha",
    "AMSA",
    "Catholic Gators",
    "Chi Omega",
    "Delta Chi",
    "Kappa Phi Epsilon",
    "Phi Gamma Delta",
    "Theta Chi",
    "UF Law",
    "UF PaCE",

    // Organizations with longer names moved to the bottom
    "Footprints: Buddy and Support Program",
    "Hispanic Student Association",
  ];

  return (
    <ThemeProvider theme={LPtheme}>
      <ScrollToTop />
      <CssBaseline />
      <AppAppBar mode={mode} toggleColorMode={toggleColorMode} />
      <LazyLoad height={200} offset={100} once>
        <PageHero imageUrl={OrganizationsPic} title="Organizations" />
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
            sx={{ marginBottom: 2 }}
            color="text.secondary"
          >
            A variety of University of Florida affiliated{" "}
            <span style={{ color: "primary", fontWeight: "bold" }}>
              Organizations
            </span>{" "}
            participate in Dance Marathon every year!
          </Typography>
          <Typography
            variant="body1"
            gutterBottom
            sx={{ marginBottom: 2 }}
            color="text.secondary"
          >
            Organizations are the backbone of our philanthropy, and we are
            always looking for more people to join our family! If you would like
            to get your organization involved with Dance Marathon, please
            contact the Member Advancement Overall, Alexandra Polo, at{" "}
            <Link
              href="mailto:aorlando@floridadm.org"
              sx={{ color: "#1a73e8" }}
            >
              apolo@floridadm.org
            </Link>
            .
          </Typography>
          <Typography
            variant="body1"
            gutterBottom
            sx={{ marginBottom: 4 }}
            color="text.secondary"
          >
            Below are the Organizations currently involved in Dance Marathon at
            UF 2025:
          </Typography>

          {/* Adjusted Box and Grid */}
          <Box
            sx={{ display: "flex", justifyContent: "center", width: "100%" }}
          >
            <Grid
              container
              spacing={2}
              justifyContent="flex-start"
              sx={{ maxWidth: 1200 }}
            >
              {organizations.map((org, index) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                  <Chip
                    label={org}
                    color="primary"
                    variant="outlined"
                    sx={{
                      padding: "8px",
                      fontSize: "1rem",
                      textAlign: "center",
                      height: "auto",
                      width: "100%",
                      maxWidth: "none",
                      display: "flex",
                      justifyContent: "center",
                      "&:hover": {
                        backgroundColor: "transparent",
                        boxShadow: "none",
                      },
                      // Override the label styles
                      "& .MuiChip-label": {
                        whiteSpace: "normal",
                        overflow: "visible",
                        textOverflow: "clip",
                        display: "block",
                        paddingLeft: "12px",
                        paddingRight: "12px",
                      },
                    }}
                  />
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
      </Container>
      <Footer />
    </ThemeProvider>
  );
}
