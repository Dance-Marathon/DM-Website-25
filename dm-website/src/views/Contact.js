// @mui material components
import * as React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { Box, Typography } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import AppAppBar from "../components/AppAppBar";
import CssBaseline from "@mui/material/CssBaseline";
import getLPTheme from "../getLPTheme";
import { createTheme } from "@mui/material";
import LazyLoad from "react-lazyload";
import PageHero from "../components/PageHero";

// Material Kit 2 React examples
import HorizontalTeamCard from "../components/TeamCard";

// Images
import OT1 from "../assets/images/OTHeadshots/AP.jpg";
import OT2 from "../assets/images/OTHeadshots/Joshua Yaciuk.jpg";
import OT3 from "../assets/images/OTHeadshots/MC.jpg";
import OT4 from "../assets/images/OTHeadshots/Lucy Eichler.jpg";
import OT5 from "../assets/images/OTHeadshots/Vivian Lopez.jpg";
import OT6 from "../assets/images/OTHeadshots/Sydney Barnett.jpg";
import OT7 from "../assets/images/OTHeadshots/Kristina Guerra.jpg";
import OT8 from "../assets/images/OTHeadshots/Gabriella Paredes.jpg";
import OT9 from "../assets/images/OTHeadshots/Zachary Myton.jpg";
import OT10 from "../assets/images/OTHeadshots/Courtney Carter.jpg";
import OT11 from "../assets/images/OTHeadshots/Surleen Sahni.jpg";
import OT12 from "../assets/images/OTHeadshots/Grace Nelson.jpg";
import OT13 from "../assets/images/OTHeadshots/Rebekah Zuckerman.jpg";
import OT14 from "../assets/images/OTHeadshots/Maizy Sadlo.jpg";
import OT15 from "../assets/images/OTHeadshots/Anna Timko.jpg";
import OT16 from "../assets/images/OTHeadshots/Kathryn Burke.jpg";
import OT17 from "../assets/images/OTHeadshots/Shae Helmer.jpg";
import OT18 from "../assets/images/OTHeadshots/Bruna Pereira.jpg";
import OT19 from "../assets/images/OTHeadshots/Violet Collins.jpg";
import Footer from "../components/Footer";

import ScrollToTop from "../components/ScrollToTop";

import ContactPic from "../assets/images/pagepics/Contact Us.jpg";

function Contact() {
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
  async function centerSectionWithMargins() {
    try {
      const section = document.querySelector("section.MuiBox-root.css-xl5k1b");
      if (section) {
        section.style.margin = "0 auto";
        console.log("Section centered using margin: 0 auto;");
      } else {
        console.error("Section not found.");
      }
    } catch (error) {
      console.error("An error occurred while centering the section:", error);
    }
  }

  const teamMembers = [
    {
      image: OT1,
      name: "Ashley Paek",
      position: { color: "primary", label: "Executive Director" },
      email: "apaek@floridadm.org",
    },
    {
      image: OT2,
      name: "Joshua Yaciuk",
      position: { color: "info", label: "Finance Manager" },
      email: "jyaciuk@floridadm.org",
    },
    {
      image: OT3,
      name: "Marina Cheema",
      position: { color: "info", label: "Marketing Manager" },
      email: "mcheema@floridadm.org",
    },
    {
      image: OT4,
      name: "Lucy Eichler",
      position: { color: "info", label: "Membership Manager" },
      email: "leichler@floridadm.org",
    },
    {
      image: OT5,
      name: "Vivian Lopez",
      position: { color: "primary-light", label: "Operations Manager" },
      email: "vlopez@floridadm.org",
    },
    {
      image: OT6,
      name: "Sydney Barnett",
      position: { color: "info", label: "Digital Marketing Overall" },
      email: "sbarnett@floridadm.org",
    },
    {
      image: OT7,
      name: "Kristina Guerra",
      position: { color: "info", label: "Event Management Overall" },
      email: "kguerra@floridadm.org",
    },
    {
      image: OT8,
      name: "Gabriella Paredes",
      position: { color: "info", label: "Family Relations Overall" },
      email: "gparedes@floridadm.org",
    },
    {
      image: OT9,
      name: "Zachary Myton",
      position: { color: "info", label: "Finance Overall" },
      email: "zmyton@floridadm.org",
    },
    {
      image: OT10,
      name: "Courtney Carter",
      position: { color: "info", label: "Hospitality Overall" },
      email: "ccarter@floridadm.org",
    },
    {
      image: OT11,
      name: "Surleen Sahni",
      position: { color: "info", label: "Leadership Development Overall" },
      email: "ssahni@floridadm.org",
    },
    {
      image: OT12,
      name: "Grace Nelson",
      position: { color: "info", label: "Marathon Relations Overall" },
      email: "gnelson@floridadm.org",
    },
    {
      image: OT13,
      name: "Rebekah Zuckerman",
      position: { color: "info", label: "Member Development Overall" },
      email: "rzuckerman@floridadm.org",
    },
    {
      image: OT14,
      name: "Maizy Sadlo",
      position: { color: "info", label: "Merchandise Overall" },
      email: "msadlo@floridadm.org",
    },
    {
      image: OT15,
      name: "Anna Timko",
      position: { color: "info", label: "Morale Overall" },
      email: "atimko@floridadm.org",
    },
    {
      image: OT16,
      name: "Kathryn Burke",
      position: { color: "info", label: "Multimedia Overall" },
      email: "kburke@floridadm.org",
    },
    {
      image: OT17,
      name: "Shae Helmer",
      position: {
        color: "info",
        label: "Public Relations Overall",
      },
      email: "shelmer@floridadm.org",
    },
    {
      image: OT18,
      name: "Bruna Pereira",
      position: { color: "info", label: "Recruitment Overall" },
      email: "bpereira@floridadm.org",
    },
    {
      image: OT19,
      name: "Violet Collins",
      position: { color: "info", label: "Sponsorships Overall" },
      email: "vcollins@floridadm.org",
    },
  ];

  centerSectionWithMargins();
  return (
    <ThemeProvider theme={LPtheme}>
      <ScrollToTop />
      <CssBaseline />
      <AppAppBar mode={mode} toggleColorMode={toggleColorMode} />
      <LazyLoad height={200} offset={100} once>
        <PageHero imageUrl={ContactPic} title="Contact Us" />
      </LazyLoad>
      <Box
        component="section"
        variant="gradient"
        bgColor="background.paper"
        position="relative"
        py={6}
        px={{ xs: 2, sm: 3, md: 4 }}
        mx="auto"
        width="100%"
        maxWidth={1200}
      >
        <Container>
          <Grid container spacing={2} justifyContent="center" alignItems="stretch">
            {teamMembers.map((member, index) => (
              <Grid
                key={index}
                item
                xs={6}
                sm={6}
                md={4}
                lg={3}
                sx={{ display: "flex", flexDirection: "column" }}
              >
                <Box sx={{ flex: 1, display: "flex" }}>
                  <LazyLoad height={200} offset={100} once>
                    <HorizontalTeamCard
                      image={member.image}
                      name={member.name}
                      position={member.position}
                      email={member.email}
                    />
                  </LazyLoad>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
      <Footer />
    </ThemeProvider>
  );
}
export default Contact;
