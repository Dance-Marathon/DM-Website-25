import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import AppAppBar from "../components/AppAppBar";
import getLPTheme from "../getLPTheme";
import Footer from "../components/Footer";
import { Container, Typography, Box, Link, Grid } from "@mui/material";
import ScrollToTop from "../components/ScrollToTop";
import PageHero from "../components/PageHero";
import SponsorshipPacket from "../assets/pdfs/SponsorshipPacket.pdf";
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
import Sponsor47 from "../assets/images/sponsors/Sponsor (47).png";
import Sponsor48 from "../assets/images/sponsors/Sponsor (48).png";
import Sponsor49 from "../assets/images/sponsors/Sponsor (49).png";
import Sponsor50 from "../assets/images/sponsors/Sponsor (50).png";
import Sponsor51 from "../assets/images/sponsors/Sponsor (51).png";
import Sponsor52 from "../assets/images/sponsors/Sponsor (52).png";
import Sponsor53 from "../assets/images/sponsors/Sponsor (53).png";
import Sponsor54 from "../assets/images/sponsors/Sponsor (54).png";
import Sponsor55 from "../assets/images/sponsors/Sponsor (55).png";
import Sponsor56 from "../assets/images/sponsors/Sponsor (56).png";
import Sponsor57 from "../assets/images/sponsors/Sponsor (57).png";
import Sponsor58 from "../assets/images/sponsors/Sponsor (58).png";
import Sponsor59 from "../assets/images/sponsors/Sponsor (59).png";
import Sponsor60 from "../assets/images/sponsors/Sponsor (60).png";
import Sponsor61 from "../assets/images/sponsors/Sponsor (61).png";
import Sponsor62 from "../assets/images/sponsors/Sponsor (62).png";
import Sponsor63 from "../assets/images/sponsors/Sponsor (63).png";
import Sponsor64 from "../assets/images/sponsors/Sponsor (64).png";
import Sponsor65 from "../assets/images/sponsors/Sponsor (65).png";
import Sponsor66 from "../assets/images/sponsors/Sponsor (66).png";
import Sponsor67 from "../assets/images/sponsors/Sponsor (67).png";
import Sponsor68 from "../assets/images/sponsors/Sponsor (68).png";
import Sponsor69 from "../assets/images/sponsors/Sponsor (69).png";
import Sponsor70 from "../assets/images/sponsors/Sponsor (70).png";
import Sponsor71 from "../assets/images/sponsors/Sponsor (71).png";
import Sponsor72 from "../assets/images/sponsors/Sponsor (72).png";
import Sponsor73 from "../assets/images/sponsors/Sponsor (73).png";

const sponsors = [
  { logo: Sponsor1 },
  { logo: Sponsor2 },
  { logo: Sponsor3 },
  { logo: Sponsor4 },
  { logo: Sponsor5 },
  { logo: Sponsor6 },
  { logo: Sponsor7 },
  { logo: Sponsor8 },
  { logo: Sponsor9 },
  { logo: Sponsor10 },
  { logo: Sponsor11 },
  { logo: Sponsor12 },
  { logo: Sponsor13 },
  { logo: Sponsor14 },
  { logo: Sponsor15 },
  { logo: Sponsor16 },
  { logo: Sponsor17 },
  { logo: Sponsor18 },
  { logo: Sponsor19 },
  { logo: Sponsor20 },
  { logo: Sponsor21 },
  { logo: Sponsor22 },
  { logo: Sponsor23 },
  { logo: Sponsor24 },
  { logo: Sponsor25 },
  { logo: Sponsor26 },
  { logo: Sponsor27 },
  { logo: Sponsor28 },
  { logo: Sponsor29 },
  { logo: Sponsor30 },
  { logo: Sponsor31 },
  { logo: Sponsor32 },
  { logo: Sponsor33 },
  { logo: Sponsor34 },
  { logo: Sponsor35 },
  { logo: Sponsor36 },
  { logo: Sponsor37 },
  { logo: Sponsor38 },
  { logo: Sponsor39 },
  { logo: Sponsor40 },
  { logo: Sponsor41 },
  { logo: Sponsor42 },
  { logo: Sponsor43 },
  { logo: Sponsor44 },
  { logo: Sponsor45 },
  { logo: Sponsor46 },
  { logo: Sponsor47 },
  { logo: Sponsor48 },
  { logo: Sponsor49 },
  { logo: Sponsor50 },
  { logo: Sponsor51 },
  { logo: Sponsor52 },
  { logo: Sponsor53 },
  { logo: Sponsor54 },
  { logo: Sponsor55 },
  { logo: Sponsor56 },
  { logo: Sponsor57 },
  { logo: Sponsor58 },
  { logo: Sponsor59 },
  { logo: Sponsor60 },
  { logo: Sponsor61 },
  { logo: Sponsor62 },
  { logo: Sponsor63 },
  { logo: Sponsor64 },
  { logo: Sponsor65 },
  { logo: Sponsor66 },
  { logo: Sponsor67 },
  { logo: Sponsor68 },
  { logo: Sponsor69 },
  { logo: Sponsor70 },
  { logo: Sponsor71 },
  { logo: Sponsor72 },
  { logo: Sponsor73 },
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
          title="Partners"
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
          <span style={{ color: "#e2883c", fontWeight: "bold" }}>
            Dance Marathon at UF is so thankful for the support of our generous
            Partners!
          </span>{" "}
          DM at UF offers many different ways to get involved as a Partner for
          our cause, each with various benefits to show our appreciation for
          your support.{" "}
          <span style={{ color: "#233563", fontWeight: "bold" }}>
            Our Partnerships Team will connect your company with our
            Organization
          </span>
          , along with access to an extensive network of supporters of all ages
          and demographics.
        </Typography>

        {/* Link to sponsorship opportunities */}
        <Typography variant="body1" color="text.secondary" marginTop={0}>
          For more information, view our partnership opportunities{" "}
          <Link href={SponsorshipPacket} underline="always">
            here
          </Link>
          .
        </Typography>

        {/* Contact Information */}
        <Typography variant="body1" color="text.secondary" marginTop={0}>
          If you have any questions, please contact our Partnership Overall
          Director,{" "}
          <Link href="mailto:jranson@floridadm.org" underline="always">
            Jaxen Ranson
          </Link>
          , at jranson@floridadm.org.
        </Typography>

        {/* Sponsors Section */}
        <Typography
          variant="h3"
          color="text.secondary"
          align="center"
          gutterBottom
          sx={{ marginTop: 4 }}
        >
          <span style={{ color: "#233563", fontWeight: "bold" }}>
            Our 2025 Partners
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
