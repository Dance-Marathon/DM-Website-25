import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import AppAppBar from "../components/AppAppBar";
import getLPTheme from "../getLPTheme";
import Footer from "../components/Footer";
import { Container, Typography, Box, Link, Grid } from "@mui/material";
import ScrollToTop from "../components/ScrollToTop";
import PageHero from "../components/PageHero";
import "../App.css";
import AmbassadorGuidelines from "../assets/pdfs/2026 Ambassador Guidelines.pdf";
import AmbassadorsPic from "../assets/images/pagepics/AmbassadorsHero.jpg";
import LazyLoad from "react-lazyload";

export default function Ambassadors() {
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

  const ambassadors = [
    {
      organization: "Alpha Chi Omega",
      names: [],
    },
    { organization: "Alpha Delta Pi", names: [] },
    { organization: "Alpha Epsilon Phi", names: [] },
    { organization: "Alpha Epsilon Pi ", names: [] },
    {
      organization: "Alpha Phi",
      names: [],
    },
    { organization: "AMSA", names: [] },
    { organization: "Catholic Gators", names: [] },
    { organization: "Chi Omega", names: [] },
    { organization: "Chi Phi", names: [] },
    { organization: "Delta Chi", names: [] },
    {
      organization: "Delta Delta Delta",
      names: [],
    },
    {
      organization: "Delta Gamma",
      names: [],
    },
    { organization: "Delta Nu Zeta", names: [] },
    {
      organization: "Delta Sigma Phi",
      names: [],
    },
    { organization: "Delta Tau Delta", names: [] },
    { organization: "Delta Zeta", names: [] },
    {
      organization: "Footprints",
      names: [],
    },
    { organization: "Gamma Eta", names: [] },
    {
      organization: "Gamma Phi Beta",
      names: [],
    },
    {
      organization: "Hispanic Student Association",
      names: [],
    },
    { organization: "Innovation Academy", names: [] },
    { organization: "Kappa Alpha Order", names: [] },
    {
      organization: "Kappa Alpha Theta",
      names: [],
    },
    {
      organization: "Kappa Delta",
      names: [],
    },
    {
      organization: "Kappa Kappa Gamma",
      names: [],
    },
    {
      organization: "Kappa Phi Epsilon",
      names: [],
    },
    {
      organization: "Kappa Sigma",
      names: [],
    },
    { organization: "Lambda Chi Alpha", names: [] },
    {
      organization: "Phi Delta Theta",
      names: [],
    },
    { organization: "Phi Gamma Delta", names: [] },
    { organization: "Phi Kappa Tau", names: [] },
    { organization: "Phi Mu", names: [] },
    { organization: "Pi Beta Phi", names: [] },
    { organization: "Pi Kappa Alpha", names: [] },
    { organization: "Sigma Alpha Epsilon", names: [] },
    { organization: "Sigma Kappa", names: [] },
    {
      organization: "Sigma Phi Epsilon",
      names: [],
    },
    { organization: "Tau Epsilon Phi", names: [] },
    { organization: "Tau Kappa Epsilon", names: [] },
    { organization: "Theta Chi Fraternity ", names: [] },
    { organization: "UF Honors Program", names: [] },
    { organization: "UF Law", names: [] },
    { organization: "UF PaCE", names: [] },
    { organization: "Zeta Beta Tau", names: [] },
    { organization: "Zeta Tau Alpha", names: [] },
  ];

  return (
    <ThemeProvider theme={LPtheme}>
      <ScrollToTop />
      <CssBaseline />
      <AppAppBar mode={mode} toggleColorMode={toggleColorMode} />
      <LazyLoad height={200} offset={100} once>
        <PageHero imageUrl={AmbassadorsPic} title="Ambassadors" />
      </LazyLoad>
      <Container
        maxWidth="lg"
        sx={{
          pt: { xs: 4, sm: 6 },
          pb: { xs: 4, sm: 8 },
          display: "flex",
          flexDirection: "column",
          //alignItems: 'center',
          gap: { xs: 2, sm: 3 },
        }}
      >
        <Typography variant="body1" color="text.secondary">
          <span style={{ color: mode === "dark" ? "#FFFFFF" : "#233563", fontWeight: "bold"}}>
            Organization Ambassadors
          </span>{" "}
          serve as a liaison between Dance Marathon and their respective
          organization.
        </Typography>
        <Typography variant="body1" color="text.secondary" marginTop={0}>
          Organization Ambassadors will attend weekly meetings to receive
          information to relay to their Organizations and to work on
          professional and personal development. These meetings will allow
          Ambassadors to think creatively and brainstorm together to create new
          ways to incentivize and engage their members in Dance Marathon. Each
          Organization will be assigned an Organization Relations Captain to
          work with on Organization involvement and fundraising throughout the
          year.
        </Typography>
        <Typography variant="body1" sx={{ color: "#000000" }} marginTop={0}>
          <Link href={AmbassadorGuidelines} sx={{ display: "inline" }}>
            View the 2026 Ambassador Guidelines (PDF)
          </Link>
        </Typography>

        <Typography
          component="h2"
          variant="h5"
          gutterBottom
          sx={{ color: mode === "dark" ? "#FFFFFF" : "#233563", fontWeight: "bold", pb: "0", mb: "0", mt: 2 }}
        >
          Responsibilities
        </Typography>
        <Typography
          variant="body1"
          component="span"
          sx={(theme) => ({
            color: theme.palette.mode === "dark" ? "#FFFFFF" : "#4965A6", mt: 2
          })}
          marginBottom={-2}
        >
          <b>Yearlong:</b>
        </Typography>
        <ul className="custom-bullet-points" style={{ margin: "0" }}>
          <li>
            <Typography
              variant="body1"
              component="span"
              color="text.secondary"
              sx={{ margin: 0 }}
            >
              Recruit and motivate members of their Organization to fundraise
              and participate
            </Typography>
          </li>
          <li>
            <Typography variant="body1" component="span" color="text.secondary">
              Encourage members to get involved with Dance Marathon
            </Typography>
          </li>
          <li>
            <Typography variant="body1" component="span" color="text.secondary">
              Inform all Organization members of events, registration dates,
              fundraising incentives, etc.
            </Typography>
          </li>
          <li>
            <Typography variant="body1" component="span" color="text.secondary">
              Work with the Family Relations Team to engage with their
              respective Miracle Family throughout the year
            </Typography>
          </li>
          <li>
            <Typography variant="body1" component="span" color="text.secondary">
              Host a minimum of one Hospitality Night or fundraising event
            </Typography>
          </li>
          <li>
            <Typography variant="body1" component="span" color="text.secondary">
              Be in attendance at various Dance Marathon events during the year
              (i.e. Miracles in Color 5K, Moralloween, Miracle Family Events,
              etc.)
            </Typography>
          </li>
        </ul>
        <Typography
          variant="body1"
          component="span"
          sx={(theme) => ({
            color: theme.palette.mode === "dark" ? "#FFFFFF" : "#4965A6", mt: 2
          })}
          marginBottom={-2}
        >
          <b>During the Main Event:</b>
        </Typography>
        <ul className="custom-bullet-points" style={{ margin: "0" }}>
          <li>
            <Typography
              variant="body1"
              component="span"
              color="text.secondary"
              sx={{ margin: 0 }}
            >
              Help assign Miracle Maker buddies prior to the Event for each
              Miracle Maker
            </Typography>
          </li>
          <li>
            <Typography variant="body1" component="span" color="text.secondary">
              Work with their Organization Relations Captain to encourage and
              help Miracle Makers fundraise at the Event
            </Typography>
          </li>
          <li>
            <Typography variant="body1" component="span" color="text.secondary">
              Relay important information to Miracle Makers throughout the Event
            </Typography>
          </li>
          <li>
            <Typography variant="body1" component="span" color="text.secondary">
              Be available for Miracle Makers in case of emergency
            </Typography>
          </li>
        </ul>

        <Typography component="h2" variant="h5" sx={(theme) => ({
    color: theme.palette.mode === "dark" ? "#FFFFFF" : "#233563", mt: 2
  })}>
          2026 Dance Marathon Ambassadors
        </Typography>
        <Grid
          container
          spacing={2}
          justifyContent="center"
          alignItems="center"
          sx={{ marginX: "auto" }}
        >
          {ambassadors.map((ambassador, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <Box
                sx={{
                  height: 125,
                  width: { xs: "100%", sm: 250 },
                  maxWidth: 250,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  border: "1px solid #ccc",
                  borderRadius: "8px",
                  padding: 2,
                  textAlign: "center",
                  margin: "0 auto",
                }}
              >
                <Typography
                  component="h3"
                  variant="h6"
                  color="text.secondary"
                  fontWeight={"bold"}
                >
                  {ambassador.organization}
                </Typography>
                {ambassador.names.map((name, idx) => (
                  <Typography color="text.secondary" key={idx}>
                    {name}
                  </Typography>
                ))}
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Footer />
    </ThemeProvider>
  );
}
