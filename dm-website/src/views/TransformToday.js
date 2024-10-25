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
import YoutubeVid from "../components/YoutubeVid";

import TTHero from "../assets/images/pagepics/TTHero.png";

export default function TransformToday() {
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
        imageUrl={TTHero}
        sx={{
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          display: "block",
          maxWidth: "100%",
        }}
        title="Transform Today"
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
              Transform Today is our largest fall fundraising effort which lasts
              26.2 hours and will take place during the fall this year! Our
              movement spread throughout our organization, campus and community
              as our different teams' colored polos flooded the University of
              Florida; our participants took the initiative to dedicate their
              day to raise funds and awareness for patients at UF Health Shands
              Children's Hospital.
            </p>
            <p>
              In efforts to boost engagement and encourage fundraising, we
              hosted programming at the Reitz Student Union in the Grand
              Ballroom and North Lawn. Throughout the day, merchandise,
              fundraising activities and Miracle Stories engaged and connected
              our members to our cause. We would like to extend a huge thank you
              to our participants, Alumni and donors for your continuous support
              throughout the day!
            </p>
            Our 2023 total, which was raised in just 26.2 hours for our
            hospital, was <span style={{ color: '#e2883c', fontWeight: 'bold' }}>$409,733.63!</span>
            <p>
              We are so eager to continue our efforts throughout this year and
              make miracles for the families who need it most! Please feel free
              to watch our Transform Today recap video from last year here.
            </p>
          </Typography>
          <YoutubeVid videoId="oI5xXmr9hDY" />
          <Typography
            variant="h5"
            component="h2"
            gutterBottom
            sx={{ marginTop: 4, color: '#233563' }}
          >
            Why?
          </Typography>
          <Typography color="text.secondary" sx={{ marginBottom: 4 }}>
            <p>
              For 26.2 hours, Dance Marathon at the University of Florida unites
              during this fundraising campaign to transform the lives of the
              patients at UF Health Shands Children's hospital. In only 26.2
              hours, our campus community rises to create as many miracles as
              possible for the children and families at Shands Children's
              Hospital.
            </p>
          </Typography>
          <Typography
            variant="h5"
            component="h2"
            gutterBottom
            sx={{ marginTop: 4, color: '#233563' }}
          >
            When?
          </Typography>
          <Typography color="text.secondary" sx={{ marginBottom: 4 }}>
            <p>October 29th - 30th</p>
          </Typography>
          <Typography
            variant="h5"
            component="h2"
            gutterBottom
            sx={{ marginTop: 4, color: '#233563' }}
          >
            What?
          </Typography>
          <Typography color="text.secondary" sx={{ marginBottom: 4 }}>
            <p>
              Transform Today is Dance Marathon at the University of Florida's
              Fall fundraising campaign. For 26.2 hours from 9 a.m. until 11:12
              a.m. the next day, Dance Marathon at UF compiles our efforts to
              raise funds and awareness to transform the lives of the children
              and families at UF Health Shands Children's Hospital.
            </p>
          </Typography>
          <Typography
            variant="h5"
            component="h2"
            gutterBottom
            sx={{ marginTop: 4, color: '#233563' }}
          >
            How Can I Get Involved?
          </Typography>
          <Typography color="text.secondary" sx={{ marginBottom: 4 }}>
            <p>
              Transform Today is Dance Marathon at the University of Florida's
              largest fundraising campaign in the Fall semester. There are a
              variety of different ways to join our movement and help us
              transform the lives of our student body, the lives of the children
              at UF Health Shands Children's Hospital, and the lives of each
              other.
            </p>
            <p>
              If you are looking to make a financial contribution to support our
              cause, you can donate using our DonorDrive, linked {" "}
              <a
                href="https://dancemarathon.childrensmiraclenetworkhospitals.org/?notification=error&key=message_invalideventid"
                target="_blank"
                rel="noopener noreferrer"
              >
                here
              </a>
              .
            </p>
          </Typography>
          <Typography
            variant="h5"
            component="h2"
            gutterBottom
            sx={{ marginTop: 4, color: '#233563' }}
          >
            Spirit Nights
          </Typography>
          <Typography color="text.secondary" sx={{ marginBottom: 4 }}>
            <p>
              Spirit Nights serve as an opportunity for the local
              Gainesville community can support Dance Marathon at UF's
              fundraising efforts. On Transform Today, hospitality nights will
              be occurring in select locations. Make sure to mention Dance
              Marathon at UF at check out and a portion of the proceeds will
              benefit the patients at UF Health Shands Children's Hospital!
            </p>
          </Typography>
        </Box>
      </Container>
      <Footer />
    </ThemeProvider>
  );
}