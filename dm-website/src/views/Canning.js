import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import AppAppBar from "../components/AppAppBar";
import getLPTheme from "../getLPTheme";
import Footer from "../components/Footer";
import { Container, Typography, Link } from "@mui/material";
import ScrollToTop from "../components/ScrollToTop";
import PageHero from "../components/PageHero";
import LazyLoad from "react-lazyload";

import CanningPic from "../assets/images/pagepics/CanningPic.jpg";

export default function Canning() {
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
        <PageHero imageUrl={CanningPic} title="Canning" />
      </LazyLoad>
      <Container
        sx={{
          pt: { xs: 4, sm: 6 },
          pb: { xs: 4, sm: 8 },
          display: "flex",
          flexDirection: "column",
          alignItems: "left",
        }}
      >
        <Typography variant="h6" color="#e2883c" gutterBottom>
          What is it?
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          Soliciting loose change and small dollar donations outside of public
          places or businesses to benefit Dance Marathon at the University of
          Florida and UF Health Shands Children’s Hospital.
        </Typography>
        <Typography variant="h6" color="#e2883c" gutterBottom>
          How can I benefit?
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          The money you raise via these efforts can be credited to your personal
          fundraising page as you look to raise more money and awareness!
        </Typography>
        <Typography variant="h6" color="#e2883c" gutterBottom>
          How to do it?
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          First, obtain specially designed canning buckets from our Partnerships
          Team (contact{" "}
          <Link href="mailto:jranson@floridadm.org">jranson@floridadm.org</Link>{" "}
          for further information). Email, call, or go inside a local business
          in your hometown and request to speak to the General Manager regarding
          canning donations. They will inform you of all the necessary
          regulations, and allow you to coordinate a time that works for both
          you and the business.
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          Be sure to show up promptly and dressed in Dance Marathon at UF attire
          to help spread your message! From there, talk to customers as they
          leave the business about donating to your cause. No donation is too
          small and every amount helps make miracles!
        </Typography>
        <Typography variant="h6" color="#e2883c" gutterBottom>
          What's next?
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          Check out our{" "}
          <Link href="https://drive.google.com/drive/folders/1xxH_1OT0Y7XDnLcXFz3Q9_ez-_z7hpVN">
            Canning Resources
          </Link>
          !
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          Fill out our{" "}
          <Link href="https://forms.gle/3nBuQXBxRBtvXwUs5">
            Canning Interest Form
          </Link>
          !
        </Typography>
        <Typography
          variant="b2"
          color="text.secondary"
          paragraph
          sx={{ mt: 2 }}
        >
          If you have any questions about canning, contact the Finance Overall
          Director, Tyler Bonnoront at{" "}
          <Link href="mailto:tbonnoront@floridadm.org">
            tbonnoront@floridadm.org.
          </Link>
        </Typography>
      </Container>
      <Footer />
    </ThemeProvider>
  );
}
