import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import AppAppBar from "../components/AppAppBar";
import getLPTheme from "../getLPTheme";
import Footer from "../components/Footer";
import { Container, Typography, Box, Link, Grid } from "@mui/material";
import ScrollToTop from "../components/ScrollToTop";
import PageHero from "../components/PageHero";
import SponsorshipPacket from "../assets/pdfs/SponsorshipPacket27.pdf";
import SponsorPic from "../assets/images/pagepics/PartnersHero.jpg";
import LazyLoad from "react-lazyload";

import Sponsor1 from "../assets/images/sponsors/Sponsor (1).png";
import Sponsor2 from "../assets/images/sponsors/Sponsor (2).png";
import Sponsor3 from "../assets/images/sponsors/Sponsor (3).png";
import Sponsor4 from "../assets/images/sponsors/Sponsor (4).png";
import Sponsor5 from "../assets/images/sponsors/Sponsor (5).png";
import Sponsor6 from "../assets/images/sponsors/Sponsor (6).png";
import Sponsor7 from "../assets/images/sponsors/Sponsor (7).png";
import Sponsor8 from "../assets/images/sponsors/Sponsor (8).png";
import Sponsor9 from "../assets/images/sponsors/Sponsor (9).png";
import Sponsor10 from "../assets/images/sponsors/Sponsor (10).png";
import Sponsor11 from "../assets/images/sponsors/Sponsor (11).png";
import Sponsor12 from "../assets/images/sponsors/Sponsor (12).png";
import Sponsor13 from "../assets/images/sponsors/Sponsor (13).png";
import Sponsor14 from "../assets/images/sponsors/Sponsor (14).png";
import Sponsor15 from "../assets/images/sponsors/Sponsor (15).png";
import Sponsor16 from "../assets/images/sponsors/Sponsor (16).png";
import Sponsor17 from "../assets/images/sponsors/Sponsor (17).png";
import Sponsor18 from "../assets/images/sponsors/Sponsor (18).png";
import Sponsor19 from "../assets/images/sponsors/Sponsor (19).png";
import Sponsor20 from "../assets/images/sponsors/Sponsor (20).png";
import Sponsor21 from "../assets/images/sponsors/Sponsor (21).png";
import Sponsor22 from "../assets/images/sponsors/Sponsor (22).png";
import Sponsor23 from "../assets/images/sponsors/Sponsor (23).png";
import Sponsor24 from "../assets/images/sponsors/Sponsor (24).png";
import Sponsor25 from "../assets/images/sponsors/Sponsor (25).png";
import Sponsor26 from "../assets/images/sponsors/Sponsor (26).png";
import Sponsor27 from "../assets/images/sponsors/Sponsor (27).png";
import Sponsor28 from "../assets/images/sponsors/Sponsor (28).png";
import Sponsor29 from "../assets/images/sponsors/Sponsor (29).png";
import Sponsor30 from "../assets/images/sponsors/Sponsor (30).png";
import Sponsor31 from "../assets/images/sponsors/Sponsor (31).png";
import Sponsor32 from "../assets/images/sponsors/Sponsor (32).png";
import Sponsor33 from "../assets/images/sponsors/Sponsor (33).png";
import Sponsor34 from "../assets/images/sponsors/Sponsor (34).png";
import Sponsor35 from "../assets/images/sponsors/Sponsor (35).png";
import Sponsor36 from "../assets/images/sponsors/Sponsor (36).png";
import Sponsor37 from "../assets/images/sponsors/Sponsor (37).png";
import Sponsor38 from "../assets/images/sponsors/Sponsor (38).png";
import Sponsor39 from "../assets/images/sponsors/Sponsor (39).png";
import Sponsor40 from "../assets/images/sponsors/Sponsor (40).png";
import Sponsor41 from "../assets/images/sponsors/Sponsor (41).png";
import Sponsor42 from "../assets/images/sponsors/Sponsor (42).png";
import Sponsor43 from "../assets/images/sponsors/Sponsor (43).png";
import Sponsor44 from "../assets/images/sponsors/Sponsor (44).png";
import Sponsor45 from "../assets/images/sponsors/Sponsor (45).png";
import Sponsor46 from "../assets/images/sponsors/Sponsor (46).png";

const sponsors = [
  { logo: Sponsor1, alt: "" },
  { logo: Sponsor2, alt: "" },
  { logo: Sponsor3, alt: "" },
  { logo: Sponsor4, alt: "" },
  { logo: Sponsor5, alt: "" },
  { logo: Sponsor6, alt: "" },
  { logo: Sponsor7, alt: "" },
  { logo: Sponsor8, alt: "" },
  { logo: Sponsor9, alt: "" },
  { logo: Sponsor10, alt: "" },
  { logo: Sponsor11, alt: "" },
  { logo: Sponsor12, alt: "" },
  { logo: Sponsor13, alt: "" },
  { logo: Sponsor14, alt: "" },
  { logo: Sponsor15, alt: "" },
  { logo: Sponsor16, alt: "" },
  { logo: Sponsor17, alt: "" },
  { logo: Sponsor18, alt: "" },
  { logo: Sponsor19, alt: "" },
  { logo: Sponsor20, alt: "" },
  { logo: Sponsor21, alt: "" },
  { logo: Sponsor22, alt: "" },
  { logo: Sponsor23, alt: "" },
  { logo: Sponsor24, alt: "" },
  { logo: Sponsor25, alt: "" },
  { logo: Sponsor26, alt: "" },
  { logo: Sponsor27, alt: "" },
  { logo: Sponsor28, alt: "" },
  { logo: Sponsor29, alt: "" },
  { logo: Sponsor30, alt: "" },
  { logo: Sponsor31, alt: "" },
  { logo: Sponsor32, alt: "" },
  { logo: Sponsor33, alt: "" },
  { logo: Sponsor34, alt: "" },
  { logo: Sponsor35, alt: "" },
  { logo: Sponsor36, alt: "" },
  { logo: Sponsor37, alt: "" },
  { logo: Sponsor38, alt: "" },
  { logo: Sponsor39, alt: "" },
  { logo: Sponsor40, alt: "" },
  { logo: Sponsor41, alt: "" },
  { logo: Sponsor42, alt: "" },
  { logo: Sponsor43, alt: "" },
  { logo: Sponsor44, alt: "" },
  { logo: Sponsor45, alt: "" },
  { logo: Sponsor46, alt: "" },
];

export default function Sponsors() {
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
        <PageHero
          imageUrl={SponsorPic}
          title="Sponsors"
          sx={{ fontFamily: "CasaPinada" }}
        />
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
        ></Box>

        {/* Description */}
        <Typography variant="body1" color="text.secondary" marginTop={-2}>
          <span style={{  color: mode === "dark" ? "#FFFFFF" : "#4965A6", fontWeight: "bold" }}>
            Dance Marathon at UF is so thankful for the support of our generous
            Sponsors!
          </span>{" "}
          DM at UF offers many different ways to get involved as a Sponsor for
          our cause, each with various benefits to show our appreciation for
          your support.{" "}
          <span style={{  color: mode === "dark" ? "#FFFFFF" : "#233563", fontWeight: "bold" }}>
            Our Sponsorships Team will connect your company with our
            Organization
          </span>
          , along with access to an extensive network of supporters of all ages
          and demographics.
        </Typography>

        {/* Link to sponsorship opportunities */}
        <Typography variant="body1" color="text.secondary" marginTop={0}>
          For more information, view our{" "}
          <Link href={SponsorshipPacket} underline="always">
            sponsorship opportunities (PDF)
          </Link>
          .
        </Typography>

        {/* Contact Information */}
        <Typography variant="body1" color="text.secondary" marginTop={0}>
          If you have any questions, please contact our Sponsorship Overall
          Director,{" "}
          <Link href="mailto:vcollins@floridadm.org" underline="always">
            Violet Collins
          </Link>
          , at vcollins@floridadm.org.
        </Typography>

        {/* Sponsors Section */}
        <Typography
          component="h2"
          variant="h3"
          color="text.secondary"
          align="center"
          gutterBottom
          sx={{ marginTop: 4 }}
        >
          <span style={{ color: mode === "dark" ? "#FFFFFF" : "#233563", fontWeight: "bold" }}>
            Our 2026 Sponsors
          </span>
        </Typography>
        <LazyLoad height={200} offset={100} once>
          {/* Grid of sponsor logos */}
          <Grid
            container
            spacing={2}
            justifyContent="center"
            alignItems="center"
          >
            {sponsors.map((sponsor, index) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={3}
                key={index}
                sx={{ textAlign: "center" }}
              >
                <Box
                  component="img"
                  src={sponsor.logo}
                  alt={sponsor.alt}
                  sx={{ maxWidth: "75%", height: "auto", mb: 2 }}
                />
              </Grid>
            ))}
          </Grid>
        </LazyLoad>
      </Container>
      <Footer />
    </ThemeProvider>
  );
}
