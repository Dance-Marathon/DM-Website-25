import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import AppAppBar from "../components/AppAppBar";
import getLPTheme from "../getLPTheme";
import Footer from "../components/Footer";
import { Container, Typography, Link } from "@mui/material";
import ScrollToTop from "../components/ScrollToTop";
import PageHero from "../components/PageHero";
import FundraisingGuidePic from "../assets/images/pagepics/Fundraising Guide.jpg";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import LazyLoad from "react-lazyload";
import Box from "@mui/material/Box";

import SummerIncentives1 from "../assets/images/pagepics/SummerIncentives1.png";
import SummerIncentives2 from "../assets/images/pagepics/SummerIncentives2.png";

import SummerSpellbook1 from "../assets/images/pagepics/SummerSpellbook1.png";
import SummerSpellbook2 from "../assets/images/pagepics/SummerSpellbook2.png";

export default function FundraisingGuide() {
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
        <PageHero imageUrl={FundraisingGuidePic} title="Fundraising Guide" />
      </LazyLoad>
      <Container
        sx={{
          pt: { xs: 4, sm: 6 },
          pb: { xs: 4, sm: 8 },
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* <Box mt={2} width="100%" display="flex" justifyContent="center"> */}
          {/* Desktop Image */}
          {/* <Box
            component="img"
            src={SummerSpellbook1}
            alt="Summer Spellbook Desktop"
            sx={{
              display: { xs: "none", sm: "block" },
              maxWidth: "100%",
              height: "auto",
              mb: 2,
            }}
          /> */}

          {/* Mobile Image */}
          {/* <Box
            component="img"
            src={SummerSpellbook2}
            alt="Summer Spellbook Mobile"
            sx={{
              display: { xs: "block", sm: "none" },
              maxWidth: "100%",
              height: "auto",
              mb: 2,
            }}
          />
        </Box> */}
        <Typography variant="body1" color="text.secondary" paragraph>
          Take a look at all the different ways you can fundraise with Dance
          Marathon at UF!{" "}
          <span style={{ color: "#e2883c", fontWeight: "bold" }}>
            Whether you ask friends and family to support you, showcase your
            passion on social media, participate in canning, or volunteer your
            time for donations, there are so many ways to fundraise for DM at
            UF.
          </span>{" "}
          Read more about all of these options below!
        </Typography>
        <Box sx={{ width: "100%" }}>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography
                variant="h5"
                color="#233563"
                gutterBottom
                marginTop={1}
              >
                Fundraising Resources
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                variant="body1"
                color="text.secondary"
                paragraph
                gutterBottom
              >
                <ul>
                  <li>
                    <Typography variant="body1" color="text.secondary">
                      <Link
                        href="https://drive.google.com/drive/folders/1qODxnR53iNFmyaHQnDKLQKH3f8jWaEKL"
                        target="_blank"
                      >
                        Fundraising Templates
                      </Link>
                    </Typography>
                  </li>
                  <ul>
                    <li>
                      <Typography variant="body1" color="text.secondary">
                        <Link
                          href="https://drive.google.com/drive/folders/1CyXuSdcAVVwfSlbltYCR93x4RuHmeRSc"
                          target="_blank"
                        >
                          Venmo Templates
                        </Link>
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="body1" color="text.secondary">
                        <Link
                          href="https://drive.google.com/drive/folders/1LbiBMjb5LAY4DTqhZ_AA0wel1uEh4UG-"
                          target="_blank"
                        >
                          Social Media Templates
                        </Link>
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="body1" color="text.secondary">
                        <Link
                          href="https://drive.google.com/drive/folders/1XyjXVPzqoCScsErEg7Cmq-_qxqQ9LzVX"
                          target="_blank"
                        >
                          Text Templates
                        </Link>
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="body1" color="text.secondary">
                        <Link
                          href="https://drive.google.com/drive/folders/1bt5lsmfIug9MC4TRCCErGOJJN3AEDcTc"
                          target="_blank"
                        >
                          Email Templates
                        </Link>
                      </Typography>
                    </li>
                  </ul>
                  <li>
                    <Typography variant="body1" color="text.secondary">
                      <Link
                        href="https://docs.google.com/document/d/1gPUv6U76dLloYqeJ6Gn5-xaJTiB60GR351ZNSSWe-rM/edit?tab=t.0"
                        target="_blank"
                      >
                        Ways to Fundraise
                      </Link>
                    </Typography>
                  </li>
                </ul>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h5" color="#233563" gutterBottom>
                Reaching Out
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="h6" color="#e2883c" gutterBottom>
                Letters and Emails
              </Typography>
              <Typography variant="body1" color="text.secondary" paragraph>
                <span style={{ color: "#233563", fontWeight: "bold" }}>
                  Why?
                </span>{" "}
                - Adds a personal touch to your fundraising request.
              </Typography>
              <Typography variant="body1" color="text.secondary" paragraph>
                <span style={{ color: "#233563", fontWeight: "bold" }}>
                  Tips to a better response
                </span>{" "}
                - Personalize your message and tell the story that brought you
                into this organization. Follow up! Be persistent! You care about
                this cause and that devotion will shine through your efforts.
              </Typography>
              <Typography variant="body1" color="text.secondary" paragraph>
                <span style={{ color: "#233563", fontWeight: "bold" }}>
                  A great way to say thanks for becoming part of the DM family!
                </span>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography
                variant="h5"
                color="#233563"
                gutterBottom
                marginTop={1}
              >
                Fundraising Tips
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1" color="text.secondary" paragraph>
                <ul>
                  <li>Showcase your passion for the cause</li>
                  <li>Make your messages personal</li>
                  <li>
                    Share videos and photos that help convey the incredible
                    impact you help make
                  </li>
                  <li>
                    Offline donations in the form of checks are accepted. Be
                    sure to fill out your name in the memo and make the check
                    out to Children’s Miracle Network.
                  </li>
                </ul>
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Box>
        {/* <Box mt={2} width="100%" display="flex" justifyContent="center"> */}
          {/* Desktop Image */}
          {/* <Box
            component="img"
            src={SummerIncentives1}
            alt="Summer Incentives Desktop"
            sx={{
              display: { xs: "none", sm: "block" },
              maxWidth: "100%",
              height: "auto",
            }}
          /> */}

          {/* Mobile Image */}
          {/* <Box
            component="img"
            src={SummerIncentives2}
            alt="Summer Incentives Mobile"
            sx={{
              display: { xs: "block", sm: "none" },
              maxWidth: "100%",
              height: "auto",
            }}
          />
        </Box> */}
      </Container>
      <Footer />
    </ThemeProvider>
  );
}
