import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import AppAppBar from "../components/AppAppBar";
import getLPTheme from "../getLPTheme";
import Footer from "../components/Footer";
import { Container, Typography, Link } from "@mui/material"; // Removed Grid as it's not directly used for card layout
import ScrollToTop from "../components/ScrollToTop";
import PageHero from "../components/PageHero";
import SquareCard from "../components/SquareCard"; // Ensure this is your updated responsive SquareCard
import EventsPic from "../assets/images/pagepics/EventsPic.jpg";
import TTBoxPic from "../assets/images/miniboxpics/TTBox.jpg";
import MEBoxPic from "../assets/images/miniboxpics/MEBox.jpg";
import KickoffBoxPic from "../assets/images/miniboxpics/KickoffBox.jpg";
import MMBox from "../assets/images/miniboxpics/MiniMarathonsBox.jpg";
import MWeenBox from "../assets/images/miniboxpics/MWeenBox.jpg";
import LazyLoad from "react-lazyload";

export default function Events() {
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
        <PageHero imageUrl={EventsPic} title="Events" />
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
            sx={{ color: "text.secondary" }}
          >
            Dance Marathon is a{" "}
            <Typography
              component="span"
              sx={{ fontWeight: "bold", color: "#FFC46E" }}
            >
              yearlong commitment
            </Typography>{" "}
            that includes many fundraising events aimed at reaching University
            students, businesses, and Gainesville residents. These events help
            us create a fun and exciting atmosphere while raising awareness
            about DM, whether it is through social media or inspirational
            stories from our Miracle Children who speak at the events. DM at
            UF's community events are all highly anticipated as they build up
            throughout the year toward the main Event in the spring.
          </Typography>

          <Typography
            variant="body1"
            gutterBottom
            sx={{ color: "#FFC46E", fontWeight: "bold", marginTop: 2 }}
          >
            Your involvement in these events is what makes them successful!
          </Typography>

          <Typography
            variant="body1"
            gutterBottom
            sx={{ color: "text.secondary", marginTop: 2 }}
          >
            Reaching out for the support of the entire community is vital for
            the continued success of Gainesville's local Children's Miracle
            Network Hospital. For more information about how to get involved in
            these events, please contact us at{" "}
            <Link
              href="mailto:floridadm@floridadm.org"
              sx={{ color: "#1a73e8" }}
            >
              floridadm@floridadm.org
            </Link>
            .
          </Typography>
        </Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: 3, // This is 24px
              width: "100%",
              // Max width for the container of cards.
              // On mobile, let the cards define their own fluid width.
              // On desktop, keep it to 3 cards (3*300px + 2*24px gap = 948px)
              maxWidth: { xs: "100%", sm: 648, md: 948 },
              margin: "0 auto",
            }}
          >
            {[
              {
                image: KickoffBoxPic,
                title: "Fall Kickoff",
                hoverText:
                  "Our annual Fall Kickoff enjoyed by all internal and external memebers.",
                link: "/fallkickoff",
              },
              {
                image: MEBoxPic,
                title: "Main Event",
                hoverText:
                  "A 26.2-hour celebration for all members and miracles made throughout the year.",
                link: "/mainevent",
              },
              {
                image: MMBox,
                title: "Mini-Marathons",
                hoverText:
                  "High schools showing passion for Dance Marathon before their college years.",
                link: "/minimarathons",
              },
              {
                image: EventsPic,
                title: "Miracles in Color 5k",
                hoverText:
                  "5K benefiting UF Health Shands Children's Hospital, with some color in the mix.",
                link: "/miracles5k",
              },
              {
                image: MWeenBox,
                title: "Moralloween",
                hoverText:
                  "A great way for everyone to get in the Halloween spirit!",
                link: "/moralloween",
              },
              {
                image: TTBoxPic,
                title: "Transform Today",
                hoverText:
                  "Our largest fall fundraising effort lasting 26.2 hours.",
                link: "/transformtoday",
              },
            ].map((card, index) => (
              <Box
                key={index}
                sx={{
                  // On mobile, the card itself will determine its width with vw units.
                  // This flexBasis ensures the container allocates space for 2 cards.
                  flexBasis: { xs: "calc(50% - 12px)", sm: "300px" },
                  display: "flex", // Ensure this box also acts as a flex container for the card
                  justifyContent: "center", // Center the card if it's smaller than flexBasis
                }}
              >
                <SquareCard {...card} />
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
      <Footer />
    </ThemeProvider>
  );
}
