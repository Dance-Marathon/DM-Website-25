import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import AppAppBar from "../components/AppAppBar";
import getLPTheme from "../getLPTheme";
import Footer from "../components/Footer";
import { Container, Typography } from "@mui/material";
import ScrollToTop from "../components/ScrollToTop";
import PageHero from "../components/PageHero";
import SquareCard from "../components/SquareCard"; // Ensure this is your updated responsive SquareCard
import AboutPic from "../assets/images/pagepics/AboutPic.jpg";
import CMNBox from "../assets/images/miniboxpics/CMNUFHealthBox.jpg";
import MFBox from "../assets/images/miniboxpics/MiracleFamiliesBox.jpg";
import OurStoryBox from "../assets/images/miniboxpics/OurStoryBox.jpg";
import LazyLoad from "react-lazyload";

export default function About() {
  const [mode, setMode] = React.useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  const LPtheme = createTheme(getLPTheme(mode));

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
        <PageHero imageUrl={AboutPic} title="About Us" />
      </LazyLoad>
      <Container
        sx={{
          pt: { xs: 4, sm: 6 },
          pb: { xs: 4, sm: 8 },
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: { xs: 2, sm: 3 },
        }}
      >
        {/* ABOUT TEXT */}
        <Box
          sx={{
            width: "100%",
            textAlign: "left",
          }}
        >
          <Typography variant="body1" color="text.secondary" paragraph>
            Dance Marathon at the University of Florida is a yearlong
            philanthropic effort benefiting the patients of UF Health Shands
            Children's Hospital in Gainesville, Florida. Each year, students
            stay awake and on their feet at our annual 26.2 hour event to raise
            funds and awareness for Children's Miracle Network Hospitals for the
            duration of the event. In the 31 years of Dance Marathon at UF's
            existence, we have{" "}
            <b style={{ color: "#FFC46E" }}>raised more than $33 million</b>,
            making it{" "}
            <b style={{ color: "#7E31C8" }}>
              the most successful student-run philanthropy in the Southeastern
              United States
            </b>
            . In 2024, DM at UF raised a grand total of{" "}
            <b style={{ color: "#FFC46E" }}>$1,351,566.99</b> for UF Health
            Shands Children's Hospital, our local Children’s Miracle Network
            Hospital.
          </Typography>

          <Typography variant="body1" color="text.secondary" paragraph>
            In 2023, UF Health Shands Children's Hospital treated children from
            66 counties in Florida, 49 other states, and 7 other countries.
            There were 18,586 telehealth visits, 40,408 ER visits, and 359,419
            clinic visits.{" "}
            <b style={{ color: "#7E31C8" }}>
              All of the funds raised by DM at UF go directly to purchasing
              state-of-the-art medical equipment, enhancements to make the
              children’s stay at the hospital more enjoyable, and funding for
              research grants and educational programs
            </b>
            .
          </Typography>

          <Typography variant="body1" color="text.secondary" paragraph>
            Patient care funding provides necessities such as bandages and
            patient gowns, as well as equipment and hospital improvements to
            make hospital stays more enjoyable for children and their families.
            Research funding helps our doctors find solutions for incurable
            diseases such as cystic fibrosis and cancer, and it allows them to
            develop life-saving technology and enhanced processes that improve
            the daily lives of pediatric patients. Education funding supports
            programs such as Child Life Diversion therapy and goes toward
            raising funds and awareness for the Children’s Miracle Network.
          </Typography>

          <Typography variant="body1" color="text.secondary" paragraph>
            <b style={{ color: "#7E31C8" }}>
              As we head into our <b style={{ color: "#FFC46E" }}>32nd year</b>,
              Dance Marathon at UF is excited to make even more miracles!
            </b>
          </Typography>
        </Box>

        {/* CARDS ROW */}
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
                image: OurStoryBox,
                title: "Our Story",
                hoverText:
                  "As one of the five founding Dance Marathon programs, DM at UF has raised over $33 million for Miracle Families at UF Health Shands Children’s Hospital",
                link: "/ourstory",
              },
              {
                image: CMNBox,
                title: "CMN & UF Health",
                hoverText:
                  "Ranked among the nation’s top 50 pediatric hospitals, UF Health Shands and Children’s Miracle Network offer exceptional care for children and young adults",
                link: "/cmnhospitals",
              },
              {
                image: MFBox,
                title: "Miracle Families",
                hoverText:
                  "Meet the heart of our movement: 31 inspiring Miracle Families who are true inspirations to everyone involved and embody everything we stand for",
                link: "/miraclefamilies",
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
