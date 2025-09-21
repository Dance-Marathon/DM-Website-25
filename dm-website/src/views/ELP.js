import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import AppAppBar from "../components/AppAppBar";
import getLPTheme from "../getLPTheme";
import Footer from "../components/Footer";
import { Container, Typography, Grid, Chip } from "@mui/material";
import ScrollToTop from "../components/ScrollToTop";
import PageHero from "../components/PageHero";
import LazyLoad from "react-lazyload";

import ELPPic from "../assets/images/pagepics/ELPPic.jpg";

export default function About() {
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

  const leaders = ["Thomas Cratem","Sarah Cornwell","Lyla Steinfink","Sasha Marcus","Sasha Vallabhaneni","Leah Aguilar","Caityln Baxter","Mallory Tarquinio","Alyssa Vega","Darcy Donnellan","Maddy Harse","Virginia Schaefer","Shreya Mehrotra","Mackenzie Levine","Valeria Scutaro","Daylan Haake","Sofia Torres","Colin Zadanosky","Reagan Neuhaus","Emma Corr","Shreya Singh","Valeria Franco","Sabina Nagy","Lea Jaffe","Jillian Haltiwanger","Amber Depasquale","Kate Koontz","Sydney Fanning","Alaina Pool","Alice Broadaway","Ricardo Carrero","Sammi Sklar","Alessandra Martinez","Maddi Schapiro","Liana Renfrow","Morgan Tartal","Jessica Wade","Madison Palomino","Marin O'Leary","Cassandra Jaramillo","Alexandria Schneider","Bergyn Baliton","Sydney Jacobson","Caterina Arner","Grace Dunton","Noel Lugo","Rafaella Hoffman","Lucia Herran","Alana Cross","Sophie Pastor","Leah Greenwell","Benanti Kaur","Ryan Seiden","Skylar Ross","Lily Suttlemyre","Emily Gilmore","Catherine Brew","Avery Halloran","Julia Schmidt","Linnea Watson","Alyssa Doyer","Charlotte Muratore","Daisy Stein","Riley Connors","Maggie Murray","Ellie Roisman","Andrea San Martin","Sara Goldenberg","Seyran Kepic","Roma Patel","Olivia Kwong","Gigi        Mobilio","Ardyn Wales","Elisabeth Skorupa","Savannah Nortelus","Bayla Hirsh","Peyton Elkind","Hana Hale","Rachel Boyette","Sydney Jacobson","Logan Bonn","Elizabeth Pritchett","Guiliana        Amorosa","Berkeley Morris","Christabel Ofori","Julia Andrade Xavier","Emma Martins","Siena Rustici","Jordyn Lustig","Piper Slogoff","Francesca Wisniew","Haylee Jackson","Kiera Blum","Samantha Oosterbaan","Isabella (Bella) Perez","Joslyn Moraski","Alyssa Lowenfish","Samantha (Sam) Brown","Ashley Sosa","Josie Myers","Sadie Alfano","Olivia Casas","Carrie Wahlfrid","Isabella Wilde","Liliana Dejesus","Samantha Taligiante","Alexus Blziti","Isabella Ugalde","Madison Lutz","Emily De La Paz","Catalina Mejia","Karsyn Heim","Kalee Matthews","Maya Leshane","Eden Bender","Lauren Alicea","Riley Barzakay","Liana (Lily) Quintero","Alexa Loventhal","Josie Busch-Vogel","Danielle        (Dani) Daddario","Rayna Santiago","Bella Taylor","Clara Weinberg","Alivia Grissom","Charlotte Nessmith","Angelina Nguyen","Aviana Gonzalez","Sidney Kamerman","Scarlett        Braun","Michelle Acosta","Julia Adkins","Nicole Krinickas","Keira Delamere","Camila Ruiz","Brianna Robaina","Paige Rogers","Maleena Patel","Valeria Fretz","Aidenn Hafez"];

  return (
    <ThemeProvider theme={LPtheme}>
      <ScrollToTop />
      <CssBaseline />
      <AppAppBar mode={mode} toggleColorMode={toggleColorMode} />
      <LazyLoad height={200} offset={100} once>
        <PageHero imageUrl={ELPPic} title="Emerging Leaders" />
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
          <Typography variant="body1" paragraph color="text.secondary">
            <span style={{ color: "#233563", fontWeight: "bold" }}>
              The Emerging Leaders Program
            </span>{" "}
            aims to cultivate the leadership skills of new members of the Dance
            Marathon community by providing hands-on activities, shadowing
            opportunities with other captain teams, and education about Dance
            Marathon at the University of Florida and Children's Miracle
            Network. The program strives to engage students who have a passion
            for helping others and who are passionate in our fight for a future
            without childhood illness.
          </Typography>
          <Typography variant="body1" paragraph color="text.secondary">
            Members of the Emerging Leaders Program will attend weekly small
            group meetings and semesterly general body meetings. Throughout
            their small group meetings, Emerging Leaders will focus on
            completing diverse projects that inspire the Dance Marathon
            community, expanding their knowledge, leadership, and personal
            fundraising efforts, and participating in bonding with like-minded
            peers. At general body meetings, Emerging Leaders will have the
            opportunity to learn more about the goals and efforts of Dance
            Marathon, hear inspiring stories from our Miracle Families, and gain
            exposure to prominent speakers from the University of Florida and
            the Gainesville community.
          </Typography>
          <Typography variant="body1" paragraph color="text.secondary">
            During the Main Event, Emerging Leaders will have the ability to use
            the skills they’ve learned throughout the year to participate in
            various leadership opportunities as well as enjoy the Main Event
            from different perspectives.
          </Typography>
        </Box>

        <Typography
          variant="h5"
          align="center"
          gutterBottom
          color="#233563"
          marginTop={2}
        >
          2026 Emerging Leaders
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
          <Grid container spacing={2} justifyContent="center">
            {leaders.map((leader, index) => (
              <Grid item xs={12} sm={8} md={6} lg={4} key={index}>
                <Chip
                  label={leader}
                  color="primary"
                  variant="outlined"
                  sx={{
                    padding: "8px", // Adjust padding for space
                    fontSize: "1rem", // Increase font size slightly
                    whiteSpace: "normal", // Allow text to wrap naturally
                    textAlign: "center", // Keep text centered
                    height: "auto", // Allow chip to expand vertically
                    width: "90%", // Allow the chip to fill the container
                    minWidth: "180px", // Set a minimum width for better spacing
                    wordWrap: "break-word", // Ensure word wrapping happens
                    display: "flex", // Use flexbox to allow content to expand
                    justifyContent: "center", // Center content in the chip
                    overflow: "hidden", // Hide overflow text if necessary
                    margin: "0 auto",
                    "&:hover": {
                      backgroundColor: "transparent", // Disable hover background change
                      boxShadow: "none", // Prevent shadow on hover
                    },
                  }}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
      <Footer />
    </ThemeProvider>
  );
}
