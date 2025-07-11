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
import SquareCardSmall from "../components/SquareCardSmall"; // Your updated SquareCardSmall
import LazyLoad from "react-lazyload";

import HowToGuide from "../assets/pdfs/how-to-guide.pdf";
import RegisterToFundraise from "../assets/images/pagepics/RegisterToFundraisePic.jpg";
import FundraisingGuideBox from "../assets/images/miniboxpics/FundraisingGuideMini.jpg";
import DDBox from "../assets/images/miniboxpics/DonorDriveBox.jpg";
import EmployeeBox from "../assets/images/miniboxpics/EmployeeMatchingBox.jpg";
import PartnersBox from "../assets/images/miniboxpics/PartnersBox.jpg";
import CanningBox from "../assets/images/miniboxpics/CanningBox.jpg";

export default function Fundraising() {
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
        <PageHero
          imageUrl={RegisterToFundraise}
          title="Register to Fundraise"
        />
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
          <Typography variant="b1" color="text.secondary" paragraph>
            Registering to fundraise is pretty easy! Just follow the steps
            below:
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            1. Follow this{" "}
            <Link
              href="https://events.dancemarathon.com/index.cfm?fuseaction=register.start&eventID=6756"
              target="_blank"
              rel="noopener noreferrer"
            >
              link
            </Link>{" "}
            to register now!
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            2. Select{" "}
            <span style={{ color: "#FFC46E", fontWeight: "bold" }}>
              {" "}
              'Register Now'
            </span>
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            3. If you have a DonorDrive account from DM at UF 2025, select{" "}
            <span style={{ color: "#FFC46E", fontWeight: "bold" }}>
              {" "}
              'Login to your account'
            </span>
            .
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            4. If you do not have a DonorDrive account, then create an account
            now.
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            5. Next, select your role.
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            6. Select ‘Participant’ then ‘Individual’ or join the team of your
            choosing!
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            7. After, you will finalize your registration by answering the
            questions presented.
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            8. Once you have registered on DonorDrive, you can customize your
            fundraising page by adding a profile picture, editing your story,
            and updating your fundraising goal. Use this{" "}
            <Link href={HowToGuide} target="_blank" rel="noopener noreferrer">
              How-To Guide
            </Link>{" "}
            for step by step instructions!
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            9. From here, you can use the tools on DonorDrive to send emails
            from a template, track your fundraising, and share your fundraising
            link with others!
          </Typography>
          <Typography
            variant="b2"
            color="text.secondary"
            paragraph
            sx={{ mt: 4 }}
          >
            If you have any questions about DonorDrive, contact the Finance
            Overall Director, Tyler Bonnoront, at{" "}
            <Link href="mailto:tbonnoront@floridadm.org">
              tbonnoront@floridadm.org
            </Link>
            .
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center", // centers the row horizontally
            flexWrap: "wrap", // wraps on smaller screens
            gap: 4, // spacing between cards (32px)
            width: "100%",
            // Max width for the container of cards based on SquareCardSmall size
            // For desktop, 5 cards * 215px + 4 gaps * 32px = 1075 + 128 = 1203px
            // For mobile, we want 2 cards per row.
            maxWidth: { xs: "100%", sm: 462, md: 708, lg: 954, xl: 1200 }, // Adjusted max widths for responsive columns
            margin: "0 auto",
          }}
        >
          {[
            {
              image: DDBox,
              title: "DonorDrive",
              hoverText:
                "Learn how UF Health Shands Children's Hospital is using DonorDrive for fundraising.",
              link: "/donordrive",
            },
            {
              image: EmployeeBox,
              title: "Employee Matching",
              hoverText:
                "See how your company can increase your contributions.",
              link: "/employeematching",
            },
            {
              image: FundraisingGuideBox,
              title: "Fundraising Guide",
              hoverText:
                "Take a look at all the different ways you can fundraise with Dance Marathon at UF!",
              link: "/fundraisingguide",
            },
            {
              image: PartnersBox,
              title: "Partners",
              hoverText: "Discover our partners!",
              link: "/partners",
            },
            {
              image: CanningBox,
              title: "Canning",
              hoverText: "Learn how to can!",
              link: "/canning",
            },
          ].map((card, index) => (
            <Box
              key={index}
              sx={{
                // On mobile, the card itself will determine its width with vw units.
                // This flexBasis ensures the container allocates space for 2 cards.
                flexBasis: { xs: "calc(50% - 16px)", sm: "215px" }, // Accounts for gap: 4 (32px / 2 = 16px)
                display: "flex", // Ensure this box also acts as a flex container for the card
                justifyContent: "center", // Center the card if it's smaller than flexBasis
                // We no longer need maxWidth on this wrapper Box, as SquareCardSmall handles its own width
              }}
            >
              <SquareCardSmall {...card} />
            </Box>
          ))}
        </Box>
      </Container>
      <Footer />
    </ThemeProvider>
  );
}
