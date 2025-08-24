import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import { ThemeProvider, createTheme } from "@mui/material/styles"; // Removed useTheme as it's not needed here anymore
import AppAppBar from "../components/AppAppBar";
import getLPTheme from "../getLPTheme";
import Footer from "../components/Footer";
import { Container, Typography, Button } from "@mui/material";
import ScrollToTop from "../components/ScrollToTop";
import PageHero from "../components/PageHero";
import SquareCard from "../components/SquareCard"; // Your updated SquareCard
import { Link } from "react-router-dom";
import LazyLoad from "react-lazyload";

import GetInvolvedPic from "../assets/images/pagepics/GetInvolvedPic.jpg";
import AlumniBox from "../assets/images/miniboxpics/AlumniBox.jpg";
import AmbassadorsMiniPic from "../assets/images/miniboxpics/AmbassadorsBox.jpg";
import ELPBox from "../assets/images/miniboxpics/ELPBox.jpg";
import CaptainsBox from "../assets/images/miniboxpics/CaptainTeamsBox.jpg";
import MMBox from "../assets/images/miniboxpics/MiracleMakersBox.jpg";
import OrgBox from "../assets/images/miniboxpics/OrgBox.jpg";

export default function GetInvolved() {
  const [mode, setMode] = React.useState(() => {
    return localStorage.getItem("theme") || "light";
  });
  const LPtheme = createTheme(getLPTheme(mode));
  // const theme = useTheme(); // No longer needed here as SquareCard handles its own sizing based on breakpoints

  const toggleColorMode = () => {
    setMode((prev) => {
      const newMode = prev === "dark" ? "light" : "dark";
      localStorage.setItem("theme", newMode);
      return newMode;
    });
  };

  return (
    <ThemeProvider theme={LPtheme}>
      <ScrollToTop />
      <CssBaseline />
      <AppAppBar mode={mode} toggleColorMode={toggleColorMode} />
      <LazyLoad height={200} offset={100} once>
        <PageHero imageUrl={GetInvolvedPic} title="Get Involved" />
      </LazyLoad>
      <Container
        id="registertofundraise"
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
          <Typography variant="body1" color="text.secondary">
            Take a look at all of the different ways you can get involved with
            Dance Marathon at UF. Whether you are interested in becoming a
            Captain, Miracle Maker, Emerging Leader, Ambassador, Fundraiser,
            this page is your path to getting involved! There are so many ways
            to give back through DM at UF, and we would love for you to join our
            Dance Marathon family and help us make miracles.
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
            component={Link}
            to="/applications"
            sx={{
              backgroundColor: "rgba(35, 53, 99, 0.85)",
              color: (theme) => theme.palette.primary.contrastText,
              borderRadius: "50px",
              transition: "background-color 0.3s ease",
              width: "100%",
              height: "80px",
              "&:hover": {
                backgroundColor: "rgba(226, 136, 60, 0.85)",
              },
            }}
          >
            <Typography
              variant="h4"
              fontSize={40}
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
              Apply Now!
            </Typography>
          </Button>
        </Box>

        {/* Centered Grid for SquareCards */}
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
              gap: 3,
              width: "100%",
              // Max width for the container of cards.
              // On mobile, let the cards define their own fluid width.
              // On desktop, keep it to 3 cards (3*300px + 2*24px gap = 948px)
              maxWidth: { xs: "100%", sm: 648, md: 948 }, // Adjusted max width for desktop
              margin: "0 auto",
            }}
          >
            {[
              {
                image: AlumniBox,
                title: "Alumni",
                hoverText:
                  "Our Dance Marathon at UF Alumni continue to support our cause and spread our movement, even after they graduate.",
                link: "/alumni",
              },
              {
                image: AmbassadorsMiniPic,
                title: "Ambassadors",
                hoverText:
                  "Organization Ambassadors serve as a liaison between Dance Marathon and their respective organization.",
                link: "/ambassadors",
              },
              {
                image: CaptainsBox,
                title: "Captain Teams",
                hoverText:
                  "Captains belong to 1 of 15 teams and take on yearlong responsibilities specific to their respective teams, with the goal of supporting and promoting our organization.",
                link: "/captainteams",
              },
              {
                image: MMBox,
                title: "Miracle Makers",
                hoverText:
                  "Miracle Makers breathe life into all of our events, fundraising pushes, and ultimately the Main Event",
                link: "/miraclemakers",
              },
              {
                image: ELPBox,
                title: "Emerging Leaders",
                hoverText:
                  "Emerging Leaders Program members assist the Recruitment Team, support Captain Teams, and brainstorm ideas for our organization's future success.",
                link: "/emergingleaders",
              },
              {
                image: OrgBox,
                title: "Organizations",
                hoverText:
                  "A variety of University of Florida affiliated Organizations participate in Dance Marathon every year!",
                link: "/organizations",
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
