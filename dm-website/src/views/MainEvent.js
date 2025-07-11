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
import LazyLoad from "react-lazyload";
import FAQ from "../components/FAQ";

import MainEventPic from "../assets/images/pagepics/MainEventPic.jpg";

export default function MainEvent() {
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
        <PageHero imageUrl={MainEventPic} title="Main Event" />
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
          <Typography color="text.secondary" sx={{ marginBottom: 2 }}>
            <p>
              Our{" "}
              <span style={{ color: "#7E31C8", fontWeight: "bold" }}>
                Main Event is a 26.2-hour event held in the Stephen O’Connell
                Center, or as we like to call it, the O’Dome!
              </span>{" "}
              During the Main Event, we celebrate all of our members and
              miracles made throughout the year. It is jam-packed full of
              entertainment, fundraising pushes, stories from Miracle Families,
              ceremonies, theme hours, a rave, and of course, the Linedance!{" "}
              <span style={{ color: "#FFC46E", fontWeight: "bold" }}>
                Our Miracle Makers are encouraged to stand for the entire
                duration to symbolize our cause and the impact that we are
                making on the lives of children with pediatric illnesses at UF
                Health Shands Children’s Hospital.
              </span>{" "}
              At the end of our event we will get to witness the reveal of the
              total amount raised by Dance Marathon over the whole year.
            </p>
          </Typography>
          <Typography color="text.secondary" sx={{ marginBottom: 2 }}>
            <p>
              We’re excited to keep building on our efforts this year, creating
              meaningful miracles for the families who need them most. Catch a
              glimpse of last year’s impact by watching our{" "}
              <span style={{ color: "#FFC46E", fontWeight: "bold" }}>
                Main Event closing ceremonies video
              </span>{" "}
              here!
            </p>
          </Typography>
          <LazyLoad height={200} offset={100} once>
            <YoutubeVid videoId="DF0LQNO86Bc" />
          </LazyLoad>
          <Typography color="text.secondary" sx={{ marginBottom: 2 }}>
            <p>Follow us on social media for event updates!</p>
          </Typography>

          <Typography variant="h4" sx={{ color: "#FFC46E", marginBottom: 2 }}>
            FAQ
          </Typography>
          <FAQ
            question="Where is Dance Marathon?"
            answer={
              <Typography color="text.secondary">
                Dance Marathon will be taking place in the Stephen O’Connell
                Center on UF’s Campus, you can enter our event through Gate 1.
              </Typography>
            }
          />
          <FAQ
            question="Where do I park if visiting?"
            answer={
              <Typography color="text.secondary">
                Parking will be available in the O’Connell Center Parking Lot
                and Garage
              </Typography>
            }
          />
          <FAQ
            question="Who is allowed to be a visitor at the Main Event?"
            answer={
              <Typography color="text.secondary">
                Anyone! Just make sure to Check In at Gate 1 and get a wristband
                to visit our event!
              </Typography>
            }
          />
          <FAQ
            question="What can I do as a visitor?"
            answer={
              <Typography color="text.secondary">
                You can receive a tour of our event from our Recruitment Team
                and have the opportunity to join Miracle Makers on the floor for
                programming like the Linedance, Miracle Stories, and even
                Dueling Pianos.
              </Typography>
            }
          />
          <FAQ
            question="Can I visit outside of visitor hours?"
            answer={
              <Typography color="text.secondary">
                You can pay to attend our Rave, but that is the only time
                outside of visiting hours that outside guests are allowed in.
                You can purchase{" "}
                <a
                  href="https://dance-marathon-at-uf-510104.square.site/product/2025-rave-ticket/808"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  HERE!
                </a>
                .
              </Typography>
            }
          />
          <FAQ
            question="I cannot attend the Main Event in person, how can I still be a supporter?"
            answer={
              <Typography color="text.secondary">
                You can follow our Instagram, @dmatuf, for real time updates on
                our Main Event, you can also support us using the link to our{" "}
                <a
                  href="https://events.dancemarathon.com/index.cfm?fuseaction=donorDrive.event&eventID=6292"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  DonorDrive
                </a>
                .
              </Typography>
            }
          />
          <FAQ
            question="What is the Happy Hour for Hope?"
            answer={
              <Typography color="text.secondary">
                The Happy Hour for Hope is an opportunity for Alumni, Parents,
                and friends of Dance Marathon to join us for a celebratory
                evening, light bites and drinks provided. Happy Hour for Hope
                will be hosted Saturday, April 5th from 6-9pm in the Center
                Court Club of the Stephen O’Connell Center, tickets can be
                purchased{" "}
                <a
                  href="https://dance-marathon-at-uf-510104.square.site/product/happy-hour-for-hope/807"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  HERE!
                </a>
                .
              </Typography>
            }
          />
          <FAQ
            question="What is the Rave?"
            answer={
              <Typography color="text.secondary">
                The Rave is an opportunity to come into the O’Dome and rave with
                DM at UF and our amazing guest DJ’s.
              </Typography>
            }
          />

          <Typography variant="body1" sx={{ color: "text.secondary" }}>
            For additional questions, email{" "}
            <Link href="mailto:dgeller@floridadm.org" sx={{ color: "#1a73e8" }}>
              mainevent@floridadm.org
            </Link>
            .
          </Typography>
        </Box>
      </Container>
      <Footer />
    </ThemeProvider>
  );
}
