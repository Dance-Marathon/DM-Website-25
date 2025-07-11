import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import AppAppBar from "../components/AppAppBar";
import getLPTheme from "../getLPTheme";
import Footer from "../components/Footer";
import { Container, Typography, Box, Link } from "@mui/material";
import ScrollToTop from "../components/ScrollToTop";
import PageHero from "../components/PageHero";
import ShandsW9 from "../assets/pdfs/W-9_Shands_HealthCare.pdf";
import CMNW9 from "../assets/pdfs/CMNW-9.pdf";
import EmployeeMatchingPic from "../assets/images/pagepics/Employee Matching.jpg";
import LazyLoad from "react-lazyload";

export default function EmployeeMatching() {
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
        <PageHero imageUrl={EmployeeMatchingPic} title="Employee Matching" />
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
          <Typography color="text.secondary" paragraph>
            Have you considered that your company might match your donation and
            multiply your contribution?
          </Typography>
          <Typography color="text.secondary" paragraph>
            Every company has its own guidelines for matching. To find out if
            your company has a matching program, visit{" "}
            <Link
              href="https://www.matchinggifts.com/uff"
              target="_blank"
              rel="noopener"
            >
              https://www.matchinggifts.com/uff
            </Link>
            .
          </Typography>
          <Typography color="text.secondary" paragraph>
            If your company matches contributions to Shands Teaching Hospital
            and Clinics, Inc. locally (preferred) OR Children’s Miracle Network
            nationally, here are two ways to match your contribution:
          </Typography>
          <Typography color="text.secondary" paragraph>
            1. If your company uses an online platform for gift matching, submit
            an online gift matching verification form through your company’s
            portal and use the information listed below as the destination for
            your contribution. To be appropriately matched in the most efficient
            manner, we encourage matching through our preferred donation
            location listed below. Shands Teaching Hospital and Clinics, Inc. is
            our local Children’s Miracle Network Hospital and it is easiest to
            complete your employee match through this local option.
          </Typography>
          <Typography color="text.secondary" paragraph>
            2. Obtain a matching gift verification form from your Human
            Resources Department. Complete the form and list our organization
            name below. If you directed your donation to Children’s Miracle
            Network, please email our Executive Director, Abby Ferrell, at{" "}
            <Link href="mailto:aferrell@floridadm.org">
              aferrell@floridadm.org
            </Link>{" "}
            with a copy of the matching gift verification form.
          </Typography>
          <Typography color="#7E31C8" variant="h5" gutterBottom marginTop={4}>
            Primary Donation Location
          </Typography>
          <Typography color="#FFC46E" paragraph>
            <strong>
              UF Health Shands - Your Local Children's Miracle Network Hospital
            </strong>
          </Typography>
          <Typography color="text.secondary" paragraph>
            <span style={{ color: "#FFC46E", fontWeight: "bold" }}>
              EIN/TIN:
            </span>{" "}
            59-1943502
          </Typography>
          <Typography color="text.secondary" paragraph>
            <span style={{ color: "#FFC46E", fontWeight: "bold" }}>
              Charitable Organization Section:
            </span>
            <br />
            Shands Teaching Hospital and Clinics, Inc. d/b/a Children’s Miracle
            Network at Shands
            <br />
            ATTN: Dance Marathon at the University of Florida
          </Typography>
          <Typography color="text.secondary" paragraph>
            <span style={{ color: "#FFC46E", fontWeight: "bold" }}>
              Address Field:
            </span>
            <br />
            PO BOX 100386
            <br />
            Gainesville, FL 32610-0386
          </Typography>
          <Typography color="text.secondary" paragraph>
            * PLEASE NOTE: If you are selecting this preferred donation
            location, please do not list Dance Marathon at the University of
            Florida or CMN Hospital(s) as the matching entity. Many companies
            will not accept this request, as our tax-exempt status is included
            under the larger umbrella of Shands Teaching Hospital and Clinics,
            Inc. If you have any questions about this process, please reach out
            to Tara Tovkach, Development Associate for Children’s Miracle
            Network, for clarification at{" "}
            <Link href="mailto:ttov0002@shands.ufl.edu">
              ttov0002@shands.ufl.edu
            </Link>
            .
          </Typography>
          <Typography variant="h5" color="#7E31C8" gutterBottom marginTop={4}>
            Alternative Donation Location
          </Typography>
          <Typography color="text.secondary" paragraph>
            <span style={{ color: "#FFC46E", fontWeight: "bold" }}>
              Children's Miracle Network National Office
            </span>
          </Typography>
          <Typography color="text.secondary" paragraph>
            <span style={{ color: "#FFC46E", fontWeight: "bold" }}>
              EIN/TIN:
            </span>{" "}
            87-0387205
          </Typography>
          <Typography color="text.secondary" paragraph>
            <span style={{ color: "#FFC46E", fontWeight: "bold" }}>
              Charitable Organization Section:
            </span>
            <br />
            Children's Miracle Network
            <br />
            ATTN: Dance Marathon at the University of Florida
          </Typography>
          <Typography color="text.secondary" paragraph>
            <span style={{ color: "#FFC46E", fontWeight: "bold" }}>
              Address Field:
            </span>
            <br />
            205 W 700 S<br />
            Salt Lake City, Utah 84101-2715
          </Typography>
          <Typography color="text.secondary" paragraph>
            If your company requires verification by a W9 form, please visit
            these links:
          </Typography>
          <Typography color="text.secondary" paragraph>
            <Link href={ShandsW9} target="_blank" rel="noopener">
              Shands Teaching Hospital and Clinics, Inc.
            </Link>
            <br />
            <Link href={CMNW9} target="_blank" rel="noopener">
              Children's Miracle Network
            </Link>
          </Typography>
          <Typography color="text.secondary" paragraph>
            <span style={{ color: "#FFC46E", fontWeight: "bold" }}>
              PLEASE NOTE:
            </span>{" "}
            Notify our Finance Manager, Olivia Knier, at{" "}
            <Link href="mailto:oknier@floridadm.org">oknier@floridadm.org</Link>{" "}
            whenever a matching gift request has been submitted. The matching
            gift will be attributed to the individual who received the original
            donation. Please allow 60 days for the Office of Development to
            process your donor match before further inquiry as it can often be a
            lengthy process. Thank you for multiplying your miracles!
          </Typography>
          <Typography
            color="text.secondary"
            variant="h5"
            gutterBottom
            marginTop={4}
          >
            <span style={{ color: "#7E31C8", fontWeight: "bold" }}>
              Important
            </span>
          </Typography>
          <Typography color="text.secondary" paragraph>
            Please do not fill out any forms sent with checks; instead, turn
            them in directly into the Finance Manager, reachable at{" "}
            <Link href="mailto:oknier@floridadm.org">oknier@floridadm.org</Link>
            .
          </Typography>
        </Box>
      </Container>
      <Footer />
    </ThemeProvider>
  );
}
