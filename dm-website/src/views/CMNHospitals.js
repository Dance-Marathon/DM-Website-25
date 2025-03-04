import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import AppAppBar from "../components/AppAppBar";
import getLPTheme from "../getLPTheme";
import Footer from "../components/Footer";
import { Container, Typography, Box, Link } from "@mui/material";
import ScrollToTop from "../components/ScrollToTop";
import PageHero from "../components/PageHero";
import LazyLoad from 'react-lazyload';

import CMNHero from "../assets/images/pagepics/CMNHero.jpg";
import TriBrand from "../assets/images/footer/TriBrand_Color.png";

export default function CMNHospitals() {
  const [mode, setMode] = React.useState(() => {
    // Retrieve the stored theme from localStorage or default to 'light'
    return localStorage.getItem('theme') || 'light';
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
      <PageHero imageUrl={CMNHero} title="CMN & UF Health" />
      </LazyLoad>
      <Container
        sx={{
          pt: { xs: 2, sm: 6 },
          pb: { xs: 2, sm: 8 },
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
            sx={{ color: "text.secondary", marginTop: {xs : 2, sm : 0}, marginBottom: 2 }}
          >
            <Box component="span" sx={{ color: "#e2883c", fontWeight: "Bold" }}>
              UF Health Shands Children’s Hospital
            </Box>{" "}
            is the local{" "}
            <Box component="span" sx={{ color: "#233563", fontWeight: "bold" }}>
              Children's Miracle Network
            </Box>{" "}
            participating hospital for the{" "}
            <Box component="span" sx={{ color: "#e2883c", fontWeight: "Bold" }}>
              North Central Florida and South Georgia areas
            </Box>{" "}
            areas. Children's Miracle Network is an international non-profit
            organization dedicated to raising funds and awareness for children's
            hospitals.{" "}
            <Box component="span" sx={{ fontStyle: "italic" }}>
              CMN Hospitals's founding pledge
            </Box>
            , to keep all donations in the area in which they were raised,
            remains at the core of its philosophy.
          </Typography>

          <Typography
            variant="body1"
            sx={{ color: "text.secondary", marginBottom: 2 }}
          >
            As the state's{" "}
            <Box component="span" sx={{ fontStyle: "italic" }}>
              premier pediatric health center
            </Box>
            ,{" "}
            <Box component="span" sx={{ color: "#e2883c", fontWeight: "Bold" }}>
              UF Health Shands Children's Hospital
            </Box>{" "}
            provides{" "}
            <Box component="span" sx={{ color: "#233563", fontWeight: "Bold" }}>
              innovative and comprehensive care
            </Box>{" "}
            at the highest standards of quality and service in partnership with
            patient families, healthcare teams, and communities.{" "}
            <Box component="span" sx={{ color: "#e2883c", fontWeight: "Bold" }}>
              Community contributions
            </Box>{" "}
            support{" "}
            <Box component="span" sx={{ fontStyle: "italic" }}>
              pediatric research
            </Box>{" "}
            and help to purchase the latest technology and equipment. Donations
            also help make hospital stays{" "}
            <Box component="span" sx={{ color: "#233563", fontWeight: "bold" }}>
              more comfortable and enjoyable
            </Box>{" "}
            for pediatric patients and their families.
          </Typography>

          <Typography
            variant="body1"
            sx={{ color: "text.secondary", marginBottom: 2 }}
          >
            Ranked one of the {" "}
            <Box component="span" sx={{ color: "#e2883c", fontWeight: "bold" }}>
            top pediatric hospitals in the nation in five categories
            </Box>
            <Box component="span" sx={{ fontStyle: "italic" }}>
              , UF Health Shands Children's Hospital
            </Box>{" "}
            and{" "}
            <Box component="span" sx={{ fontStyle: "italic" }}>
              Children's Miracle Network Hospitals
            </Box>{" "}
            have created one of the greatest facilities of care for children and
            young adults.
          </Typography>

          <Typography
            variant="body1"
            sx={{ color: "text.secondary", marginBottom: 2 }}
          >
            For more information, please visit:{" "}
            <Link
              href="https://ufhealth.org/shands-hospital-children-uf"
              target="_blank"
              rel="noopener"
              sx={{ color: "#1a73e8" }}
            >
              https://ufhealth.org/shands-hospital-children-uf
            </Link>
          </Typography>
          <LazyLoad height={200} offset={100} once>
          <Box sx={{ display: "flex", justifyContent: "center", marginTop: 4 }}>
            <img
              src={TriBrand}
              alt="UF Health Shands Children's Hospital"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </Box>
          </LazyLoad>
        </Box>
      </Container>
      <Footer />
    </ThemeProvider>
  );
}
