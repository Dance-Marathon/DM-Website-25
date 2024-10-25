import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import AppAppBar from "../components/AppAppBar";
import getLPTheme from "../getLPTheme";
import Footer from "../components/Footer";
import { Container, Typography, Link } from "@mui/material";
import ScrollToTop from "../components/ScrollToTop";
import PageHero from "../components/PageHero";
import FAQ from "../components/FAQ";
import EventsPic from "../assets/images/pagepics/EventsPic.png";

export default function Miracles5k() {
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
      <PageHero
        imageUrl={EventsPic}
        sx={{
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          display: "block",
          maxWidth: "100%",
        }}
        title="Miracles In Color 5k"
      />

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
          <Typography color="text.secondary" sx={{ marginBottom: 4 }}>
            <p>
              Welcome to the Miracles in Color 5K benefiting UF Health Shands
              Children's Hospital! It is open to anyone who wants to support our
              cause and have a great time. We couldn't think of a better way for
              you to spend your Sunday morning than with paint and by supporting
              a hospital that is so prominent in our community!
            </p>
            <p>
              The course runs through the University of Florida campus and will
              have color stations throughout the course as well as at the finish
              line. At each color station, runners will be doused in color powder.*{" "}
              <u>
                All participants will be provided with a Miracles In Color 5k
                white shirt with registration.
              </u>
            </p>
            The 5k course will be split into 2 shifts. When registering, you
            will be able to choose which shift you would like to run at. Shift
            options include 8:00 a.m. or 9:00 a.m.{" "}
            <span style={{ color: '#e2883c', fontWeight: 'bold' }}> On the day of the event, please arrive at least 15 minutes prior to your start time.</span>
            <p>
              All proceeds will be donated to UF Health Shands Children's
              Hospital, our local Children's Miracle Network Hospital, from
              Dance Marathon at the University of Florida.
            </p>
            <p>
              *Don't want to be colored with powder? We will give you something
              to indicate to our color team that you want to stay clean.
            </p>
          </Typography>
          <Typography variant="body1" sx={{ color: "text.secondary" }}>
            For more information, please contact the Operations Manager, Macy
            Thompson, at{" "}
            <Link
              href="mailto:mthompson@floridadm.org"
              sx={{ color: "#1a73e8" }}
            >
              mthompson@floridadm.org
            </Link>
            .
          </Typography>
          <Typography
            variant="h5"
            component="h2"
            gutterBottom
            sx={{ marginTop: 4, color: '#233563' }}
          >
            Race Day Info
          </Typography>
          <Typography color="text.secondary" sx={{ marginBottom: 4 }}>
            <p>
              Please arrive 15 minutes before your scheduled run time to sign
              in. You must fill out the required{" "}
              <Link
                href="https://ufl.qualtrics.com/jfe/form/SV_3mA8svPgLNm2xMy"
              >
                Liability Waiver Form
              </Link>{" "}
              prior to arriving at our 5k. We recommend you fill out this form
              at the same time as registration and save/screenshot your results.
              You will be required to show proof of completion when checking in
              the day of.
            </p>
            <p>
              There is parking available at Flavet Field, but please arrive
              early to ensure you have time to sign in before your scheduled
              race.
            </p>
          </Typography>
          <Typography variant="body1" sx={{ color: "text.secondary", marginBottom: 4 }}>
            Check your email for more information, and email{" "}
            <Link
              href="mailto:mthompson@floridadm.org"
              sx={{ color: "#1a73e8" }}
            >
              mthompson@floridadm.org
            </Link>{" "}
            with any questions.
          </Typography>
          <FAQ question="What is a Color Run?" answer={<Typography color="text.secondary">
              A Color Run is a 5 kilometer race involving powder paint, inspired
              by the Hindu Festival of Holi. Participants wear white at the
              beginning of the race and are covered with color by the end. To
              learn more about Holi you can visit {" "}
              <Link
                href="https://www.holifestival.org/"
              >
                here
              </Link>
              .
            </Typography>} />
            <FAQ question="What if I don't want to be covered in colored powder?" answer={<Typography color="text.secondary">
                We will give you something to indicate to our color team that you
                want to stay clean.
            </Typography>} />
            <FAQ question="Will there be chip timing at the Miracles in Color 5K?" answer={<Typography color="text.secondary">
                No, there is no official timing system for the 5K.
            </Typography>} />
        </Box>
      </Container>
      <Footer />
    </ThemeProvider>
  );
}