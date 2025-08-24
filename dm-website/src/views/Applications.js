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
import LazyLoad from "react-lazyload";

import ManagerApplication from "../assets/pdfs/2026 Manager Application.pdf";
import OverallApplication from "../assets/pdfs/2026 Overall Director Application.pdf";
import CaptainApplication from "../assets/pdfs/2026 Captain Application.pdf"

import ApplicationsPic from "../assets/images/pagepics/Applications.jpg";

export default function Applications() {
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
        <PageHero imageUrl={ApplicationsPic} title="Applications" />
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
          <Typography
            variant="body1"
            gutterBottom
            sx={{ color: "#e2883c", fontWeight: "bold", marginBottom: 2 }}
          >
            Thank you for your interest in Dance Marathon at the University of
            Florida 2026!
          </Typography>
          <Typography variant="body1" gutterBottom color="text.secondary">
            The online application forms are linked below. In order to be
            considered for a Captain, the Emerging Leaders Program, or
            Ambassador position, you must:
          </Typography>

          <ul>
            <li>
              <Typography variant="body1" color="text.secondary">
                Complete the online application form.
              </Typography>
            </li>
            <li>
              <Typography variant="body1" color="text.secondary">
                Create a DonorDrive personal fundraising page.
              </Typography>
            </li>
            <li>
              <Typography variant="body1" color="text.secondary">
                Pay the $25 application fee. You only need to pay the
                application fee{" "}
                <span style={{ color: "#e2883c", fontWeight: "bold" }}>
                  once
                </span>{" "}
                even if you are applying for more than one position.
                Instructions on how to complete both of these items can be found
                on the front page of either application.
              </Typography>
            </li>
          </ul>

          <Typography variant="body1" gutterBottom color="text.secondary">
            You can apply for both the Emerging Leaders Program and for Captain
            Teams. However, your Captain Application will take priority over
            your Emerging Leader Application. To be eligible to be an
            Ambassador, you{" "}
            <span style={{ color: "#e2883c", fontWeight: "bold" }}>cannot</span>{" "}
            hold another position as well.
          </Typography>

          <Typography
            variant="body1"
            sx={{ fontWeight: "bold", color: "#233563", marginTop: 4 }}
            gutterBottom
          >
            Manager Application
          </Typography>
          <Typography
            variant="body1"
            gutterBottom
            color="text.secondary"
            marginBottom={3.5}
          >
            Closed
          </Typography>

          <Typography
            variant="body1"
            sx={{ fontWeight: "bold", color: "#233563" }}
            gutterBottom
          >
            Overall Director Application
          </Typography>
          <Typography
            variant="body1"
            gutterBottom
            color="text.secondary"
            marginBottom={3.5}
          >
            Closed
          </Typography>

          <Typography
            variant="body1"
            sx={{ fontWeight: "bold", color: "#233563" }}
            gutterBottom
          >
            Assistant Director Application
          </Typography>
          <Typography
            variant="body1"
            gutterBottom
            color="text.secondary"
            marginBottom={3.5}
          >
            Closed
          </Typography>

          <Typography
            variant="body1"
            sx={{ fontWeight: "bold", color: "#233563" }}
            gutterBottom
          >
            Captain Application
          </Typography>
         <Typography
            variant="body1"
            gutterBottom
            color="text.secondary"
            marginBottom={3.5}
          >
            Apply{" "}
            <Link href="https://ufl.qualtrics.com/jfe/form/SV_3R9Ww4ZdgfkIqaO" target="_blank">
              here
            </Link>
            ! Applications are open until September 6th at 5pm.
            <Typography paddingTop={1}>
            See{" "}
            <Link href={CaptainApplication} target="_blank">
              here 
            </Link>
             {" "} for application questions.
            </Typography>
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontWeight: "bold", color: "#233563" }}
            gutterBottom
          >
            Emerging Leaders Application
          </Typography>
          <Typography
            variant="body1"
            gutterBottom
            color="text.secondary"
            marginBottom={3.5}
          >
            Apply{" "}
            <Link href="https://ufl.qualtrics.com/jfe/form/SV_6RPQoQv67KBdFFc" target="_blank">
              here
            </Link>
            ! Applications are open until September 13th at 5pm.
          </Typography>

          <Typography
            variant="body1"
            sx={{ fontWeight: "bold", color: "#233563" }}
            gutterBottom
          >
            Ambassador Application
          </Typography>
          {/* <Typography
            variant="body1"
            gutterBottom
            color="text.secondary"
            marginBottom={3.5}
          >
            If you are interested in becoming an Ambassador, you can join the
            organization at any time! For more information, please contact our
            Organization Relations Overall Director, Kelsey Reader, at{" "}
            <Link href="mailto:kreader@floridadm.org" sx={{ color: "#1a73e8" }}>
              kreader@floridadm.org
            </Link>
            .
          </Typography> */}
          <Typography
            variant="body1"
            gutterBottom
            color="text.secondary"
            marginBottom={3.5}
          >
            Apply{" "}
            <Link href="https://ufl.qualtrics.com/jfe/form/SV_afwHoRhmLToPESa">
              here
            </Link>
            ! Applications are open until September 13th at 5pm.
          </Typography>
          {/* <Typography
            variant="body1"
            gutterBottom
            color="text.secondary"
            marginBottom={3.5}
          >
            Closed
          </Typography> */}

          <Typography
            variant="body1"
            sx={{ fontWeight: "bold", color: "#233563" }}
            gutterBottom
          >
            Miracle Maker Application
          </Typography>
          <Typography variant="body1" color="text.secondary" gutterBottom>
            No formal application, you can sign up to be a Miracle Maker{" "}
            <Link
              href="https://events.dancemarathon.com/index.cfm?fuseaction=donorDrive.event&eventID=6292"
              target="_blank"
            >
              here
            </Link>
            , and someone from Member Advancement will reach out to you.
          </Typography>

          <Typography
            variant="body1"
            gutterBottom
            sx={{ marginTop: 4 }}
            color="text.secondary"
          >
            If you have any questions regarding applications, please reach out
            to our Membership Manager, Samantha Guerrero, at{" "}
            <Link
              href="mailto:sguerrero@floridadm.org"
              sx={{ color: "#1a73e8" }}
            >
              sguerrero@floridadm.org
            </Link>
            .
          </Typography>
        </Box>
      </Container>
      <Footer />
    </ThemeProvider>
  );
}
