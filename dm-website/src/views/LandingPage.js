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

import BookIcon from "@mui/icons-material/MenuBook";
import LocalHospitalIcon from "@mui/icons-material/LocalHospitalOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import RegisterIcon from "@mui/icons-material/EscalatorWarning";

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
            <i style={{ color: "#e2883c" }}>
              <b>Dance Marathon</b>
            </i>{" "}
            at the{" "}
            <i style={{ color: "#e2883c" }}>
              <b>University of Florida</b>
            </i>{" "}
            is the largest student-run and highest fundraising philanthropy in
            the Southeast United States. Our mission is to strive to bring
            together the campus and community to raise funds and awareness for
            our local Children's Miracle Network Hospital,{" "}
            <i style={{ color: "#233563" }}>
              <b>UF Health Shands Children's Hospital</b>
            </i>
            . We are going into our 32nd year of{" "}
            <i style={{ color: "#e2883c" }}>
              <b>Dance Marathon</b>
            </i>{" "}
            at{" "}
            <i style={{ color: "#e2883c" }}>
              <b>UF</b>
            </i>
            , having fundraised over $33,000,000 thus far. This past year, we
            celebrated our 31st year by raising{" "}
            <i style={{ color: "#233563" }}>
              <b>$1,351,566.99!</b>
            </i>
          </Typography>
        </Box>
        <Divider />
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
                  <BookIcon style={{ fontSize: 50, color: "#e2883c" }} />
                  <Typography variant="h5" color="secondary" gutterBottom>
                    Our Story
                  </Typography>
                  <Typography variant="body1" color="primary" paragraph>
                    DM at UF is one of the five founding Dance Marathon programs
                    in the nation. Since our start, we have raised more than $33
                    million for the Miracle Families at UF Health Shands
                    Children’s Hospital, our local Children’s Miracle Network
                    hospital.
                  </Typography>
                </Box>
                <Button
                  variant="outlined"
                  color="primary"
                  component={Link}
                  to="/ourstory"
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
                  <LocalHospitalIcon
                    style={{ fontSize: 50, color: "#e2883c" }}
                  />
                  <Typography variant="h5" color="secondary" gutterBottom>
                    CMN Hospitals & UF Health
                  </Typography>
                  <Typography variant="body1" color="primary" paragraph>
                    Ranked one of the top 50 pediatric hospitals in the nation
                    in seven categories, UF Health Shands Children’s Hospital
                    and Children’s Miracle Network have created one of the
                    greatest facilities of care for children and young adults.
                  </Typography>
                </Box>
                <Button
                  variant="outlined"
                  color="primary"
                  component={Link}
                  to="/cmnhospitals"
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
                  <FavoriteIcon style={{ fontSize: 50, color: "#e2883c" }} />
                  <Typography variant="h5" color="secondary" gutterBottom>
                    Miracle Families
                  </Typography>
                  <Typography variant="body1" color="primary" paragraph>
                    Take a moment to meet the heart and soul of our movement. We
                    are very fortunate to have 31 Miracle Families who are true
                    inspirations to everyone involved in the organization and
                    are the pinnacle for what we stand for.
                  </Typography>
                </Box>
                <Button
                  variant="outlined"
                  color="primary"
                  component={Link}
                  to="/miraclefamilies"
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
                  <RegisterIcon style={{ fontSize: 50, color: "#e2883c" }} />
                  <Typography variant="h5" color="secondary" gutterBottom>
                    Register to Fundraise
                  </Typography>
                  <Typography variant="body1" color="primary" paragraph>
                    Join our fight against pediatric illness. Every dollar
                    raised is another miracle for the patients at UF Health
                    Shands Children’s Hospital. By registering to fundraise on
                    DonorDrive, you are taking the first steps to changing the
                    world and Changing Kids’ Health.
                  </Typography>
                </Box>
                <Button
                  variant="outlined"
                  color="primary"
                  component={Link}
                  to="/register"
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
