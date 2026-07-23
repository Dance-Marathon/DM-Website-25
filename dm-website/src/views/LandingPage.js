import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import AppAppBar from "../components/AppAppBar";
import Hero from "../components/Hero";
import getLPTheme from "../getLPTheme";
import { Typography, Container, Grid, Button } from "@mui/material";
import { Link } from "react-router-dom";
import LandingCarousel from "../components/LandingCarousel";
import LazyLoad from "react-lazyload";

import BookIcon from "../assets/icons/BookIcon.png";
import LocalHospitalIcon from "../assets/icons/PlusIcon.png";
import FavoriteIcon from "../assets/icons/HeartIconDark.png";
import RegisterIcon from "../assets/icons/PeopleIcon.png";

export const brand = {
  accentNavy: "#4965A6", // accent DM navy (light)
  primaryNavy: "#233563", // primary DM navy (main)
};

export default function LandingPage() {
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
      <CssBaseline />
      <AppAppBar mode={mode} toggleColorMode={toggleColorMode} />
      <LazyLoad height={200} offset={100} once>
        <Hero />
      </LazyLoad>
      <Box
        sx={{
          bgcolor: "background.paper",
        }}
      >
        <Box
          id="introText"
          sx={{
            py: 6,
            maxWidth: "1000px",
            mx: "auto",
            position: "relative",
            zIndex: 1,
            pr: 1.5,
            pl: 1.5,
          }}
        >
          <Typography
            component="p"
            variant="subtitle2"
            align="center"
            color="text.secondary"
          >
            <i style={{ color: mode === "dark" ? "#FFFFFF" : "#4965A6" }}>
              <b>Dance Marathon</b>
            </i>{" "}
            at the{" "}
            <i style={{ color: mode === "dark" ? "#FFFFFF" : "#4965A6", }}>
              <b>University of Florida</b>
            </i>{" "}
            is the largest student-run and highest fundraising philanthropy on campus. Our mission is to strive to bring
            together the campus and community to raise funds and awareness for
            our local Children's Miracle Network hospital,{" "}
            <i style={{ color: mode === "dark" ? "#FFFFFF" : "#233563", }}>
              <b>UF Health Shands Children's Hospital</b>
            </i>
            . We are going into our 33rd year of{" "}
            <i style={{ color: mode === "dark" ? "#FFFFFF" : "#4965A6", }}>
              <b>Dance Marathon</b>
            </i>{" "}
            at{" "}
            <i style={{ color: mode === "dark" ? "#FFFFFF" : "#4965A6", }}>
              <b>UF</b>
            </i>
            , having fundraised over $34,000,000 thus far. This past year, we
            celebrated our 32nd year by raising{" "}
            <i style={{ color: mode === "dark" ? "#FFFFFF" : "#233563", }}>
              <b>$1,152,326.32!</b>
            </i>
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            maxWidth: "100%",
          }}
        >
                  <Button
                    href="https://docs.google.com/forms/d/e/1FAIpQLSfeJKWSa49Set5O2twZ_0kGOH-mhE3IkLGjgnW8kpPRwfgMZw/viewform"
                      aria-label="Google Form"
                    sx={{
                      backgroundColor: "rgba(35, 53, 99, 0.85)",
                      color: (theme) => theme.palette.primary.contrastText,
                      borderRadius: "50px",
                      transition: "background-color 0.3s ease",
                      width: "80%",
                      height: "80px",
                      "&:hover": {
                        backgroundColor: "rgba(226, 136, 60, 0.85)",
                      },
                    }}
                  >
                    <Typography
                      component="h2"
                      variant="h4"
                      fontSize={30}
                      paddingTop="10px"
                      paddingBottom="10px"
                      sx={{
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        display: "block",
                        color: "white",
                      }}
                    >
                      Subscribe to Our Newsletter!
                    </Typography>
                  </Button>
                </Box>
        <Container>
          <Grid
            container
            spacing={10}
            justifyContent="center"
            paddingTop={8}
            paddingBottom={8}
          >
            <Grid item xs={12} sm={6} md={3}>
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
                alignItems="center"
                height="100%"
                textAlign="center"
              >
                <Box mb={2}>
                <img
                  src={BookIcon}
                  alt="Book icon"
                  style={{
                    width: 50,
                    height: 50,
                    objectFit: "contain",
                  }}
                />
                  <Typography component="h2" variant="h5" gutterBottom sx={(theme) => ({
    color: theme.palette.mode === "dark" ? "#FFFFFF" : "#4965A6",
  })}>
                    Our Story
                  </Typography>
                  <Typography variant="body1" paragraph sx={(theme) => ({
    color: theme.palette.mode === "dark" ? "#FFFFFF" : "#4965A6",
  })}>
                    DM at UF is one of the five founding Dance Marathon programs
                    in the nation. Since our start, we have raised more than $33
                    million for the Miracle Families at UF Health Shands
                    Children’s Hospital, our local Children’s Miracle Network
                    hospital.
                  </Typography>
                </Box>
                <Button
                  variant="outlined"
                  component={Link}
                  to="/ourstory"
                  sx={{
                    color: "#E2883C",
                    borderColor: "#E2883C",
                    backgroundColor: "rgba(198, 106, 26, 0.08)",
                    "&:hover": {
                      borderColor: "#E2883C",
                      backgroundColor: "rgba(198, 106, 26, 0.2)",
                      color: "#EB9F68",
                    },
                  }}
                >
                  Learn More
                </Button>
              </Box>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
                alignItems="center"
                height="100%"
                textAlign="center"
              >
                <Box mb={2}>
                <img
                  src={LocalHospitalIcon}
                  alt="Plus icon"
                  style={{
                    width: 50,
                    height: 50,
                    objectFit: "contain",
                  }}
                />
                  <Typography component="h2" variant="h5" gutterBottom sx={(theme) => ({
    color: theme.palette.mode === "dark" ? "#FFFFFF" : "#4965A6",
  })}>
                    CMN & UF Health
                  </Typography>
                  <Typography variant="body1" paragraph sx={(theme) => ({
    color: theme.palette.mode === "dark" ? "#FFFFFF" : "#4965A6",
  })}>
                    Ranked one of the top 50 pediatric hospitals in the nation
                    in seven categories, UF Health Shands Children’s Hospital
                    and Children’s Miracle Network have created one of the
                    greatest facilities of care for children and young adults.
                  </Typography>
                </Box>
                <Button
                  variant="outlined"
                  component={Link}
                  to="/cmnhospitals"
                  sx={{
                    color: "#E2883C",
                    borderColor: "#E2883C",
                    backgroundColor: "rgba(198, 106, 26, 0.08)",
                    "&:hover": {
                      borderColor: "#E2883C",
                      backgroundColor: "rgba(198, 106, 26, 0.2)",
                      color: "#EB9F68",
                    },
                  }}
                >
                  Learn More
                </Button>
              </Box>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
                alignItems="center"
                height="100%"
                textAlign="center"
              >
                <Box mb={2}>
                <img
                  src={FavoriteIcon}
                  alt="Heart icon"
                  style={{
                    width: 50,
                    height: 50,
                    objectFit: "contain",
                  }}
                />
                  <Typography component="h2" variant="h5" gutterBottom sx={(theme) => ({
    color: theme.palette.mode === "dark" ? "#FFFFFF" : "#4965A6",
  })}>
                    Miracle Families
                  </Typography>
                  <Typography variant="body1" paragraph sx={(theme) => ({
    color: theme.palette.mode === "dark" ? "#FFFFFF" : "#4965A6",
  })}>
                    Take a moment to meet the heart and soul of our movement. We
                    are very fortunate to have 31 Miracle Families who are true
                    inspirations to everyone involved in the organization and
                    are the pinnacle for what we stand for.
                  </Typography>
                </Box>
                <Button
                  variant="outlined"
                  component={Link}
                  to="/miraclefamilies"
                  sx={{
                    color: "#E2883C",
                    borderColor: "#E2883C",
                    backgroundColor: "rgba(198, 106, 26, 0.08)",
                    "&:hover": {
                      borderColor: "#E2883C",
                      backgroundColor: "rgba(198, 106, 26, 0.2)",
                      color: "#EB9F68",
                    },
                  }}
                >
                  Learn More
                </Button>
              </Box>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
                alignItems="center"
                height="100%"
                textAlign="center"
              >
                <Box mb={2}>
                <img
                  src={RegisterIcon}
                  alt="People icon"
                  style={{
                    width: 50,
                    height: 50,
                    objectFit: "contain",
                  }}
                />
                  <Typography component="h2" variant="h5" gutterBottom sx={(theme) => ({
    color: theme.palette.mode === "dark" ? "#FFFFFF" : "#4965A6",
  })}>
                    Register to Fundraise
                  </Typography>
                  <Typography variant="body1" paragraph sx={(theme) => ({
    color: theme.palette.mode === "dark" ? "#FFFFFF" : "#4965A6",
  })}>
                    Join our fight against pediatric illness. Every dollar
                    raised is another miracle for the patients at UF Health
                    Shands Children’s Hospital. By registering to fundraise on
                    DonorDrive, you are taking the first steps to changing the
                    world and Changing Kids’ Health.
                  </Typography>
                </Box>
                <Button
                  variant="outlined"
                  component={Link}
                  to="/register"
                  sx={{
                    color: "#E2883C",
                    borderColor: "#E2883C",
                    backgroundColor: "rgba(198, 106, 26, 0.08)",
                    "&:hover": {
                      borderColor: "#E2883C",
                      backgroundColor: "rgba(198, 106, 26, 0.2)",
                      color: "#EB9F68",
                    },
                  }}
                >
                  Learn More
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>

        <Divider />
        {/* <Typography variant="h3" color="primary" align="center" gutterBottom sx={{marginTop: 4}}>Our 2025 Partners</Typography> */}
        <LazyLoad height={200} offset={100} once>
          <LandingCarousel />
        </LazyLoad>
        <Divider />
      </Box>
    </ThemeProvider>
  );
}
