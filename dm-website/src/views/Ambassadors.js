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
import AmbassadorsPic from "../assets/images/pagepics/AmbassadorsHero.JPG";
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
      names: ["Reese Van Hoecke", "Anahi Lopez"],
    },
    { organization: "Alpha Delta Pi", names: ["Ava Pierzynski"] },
    { organization: "Alpha Epsilon Phi", names: ["Molly Marcus"] },
    { organization: "Alpha Epsilon Pi ", names: ["Zachary El-Assad"] },
    {
      organization: "Alpha Phi",
      names: ["Juliana Buckley", "Isabella Colosimo"],
    },
    { organization: "AMSA", names: ["Isabella Fernandez"] },
    { organization: "Catholic Gators", names: ["Angela Trinh"] },
    { organization: "Chi Omega", names: ["Kylie Godino", "Katelyn Slaveski"] },
    { organization: "Delta Chi", names: ["Will Curran"] },
    {
      organization: "Delta Delta Delta",
      names: ["Sophia Stavrou", "Logan Mills"],
    },
    {
      organization: "Delta Gamma",
      names: ["Madeline Clark", "Avery Donaghue"],
    },
    { organization: "Delta Nu Zeta", names: ["Nina Hughes", "Sarah Nalley"] },
    {
      organization: "Delta Sigma Phi",
      names: ["Jason Benezra", "Damir Karimov"],
    },
    { organization: "Delta Tau Delta", names: ["Trace Movic"] },
    { organization: "Delta Zeta", names: ["Talya Moorman", "Sophie Roland"] },
    {
      organization: "Footprints",
      names: ["Yadelin Lopez", "Vansh Devarashetty"],
    },
    { organization: "Gamma Eta", names: ["Lianny Propest", "Valeria Palacio"] },
    {
      organization: "Gamma Phi Beta",
      names: ["Rena Eberhardt", "Peyton Ressler"],
    },
    {
      organization: "Hispanic Student Association",
      names: ["Adrianna Lizana", "Mia Martinez"],
    },
    { organization: "Innovation Academy", names: ["Seth Haber"] },
    { organization: "Kappa Alpha Order", names: ["Edward Neff"] },
    {
      organization: "Kappa Alpha Theta",
      names: ["Orli Clarin", "Lana Kostic"],
    },
    {
      organization: "Kappa Delta",
      names: ["Rachel Carter", "Gabrielle Mackenzie"],
    },
    {
      organization: "Kappa Kappa Gamma",
      names: ["Kaylie Strom", "Sadie Steuterman"],
    },
    {
      organization: "Kappa Phi Epsilon",
      names: ["Zachary Quattrocchi", "Robert Howland"],
    },
    {
      organization: "Kappa Sigma",
      names: ["Christian Labellman", "Gonzalo Cabeza"],
    },
    { organization: "Lambda Chi Alpha", names: ["Christian Tardivo"] },
    {
      organization: "Phi Delta Theta",
      names: ["Alejandro Fernandez", "Eduardo Cabrera"],
    },
    { organization: "Phi Kappa Tau", names: ["Beckett Papa"] },
    { organization: "Phi Mu", names: ["Sarah Abreu", "Kiera Blum"] },
    { organization: "Pi Beta Phi", names: ["Emi Varghese"] },
    { organization: "Pi Kappa Alpha", names: ["Robert Schuckel"] },
    { organization: "Sigma Kappa", names: ["Emily DiPeri"] },
    {
      organization: "Sigma Phi Epsilon",
      names: ["Taylor Ciolek", "Matthew Anderson"],
    },
    { organization: "Tau Epsilon Phi", names: ["Benjamin Cheser"] },
    { organization: "Tau Kappa Epsilon", names: ["Zavier Hanson"] },
    { organization: "Theta Chi Fraternity ", names: ["Austin Lessmann"] },
    { organization: "UF Honors Program", names: ["Sofia Plata Delgado"] },
    { organization: "UF Law", names: ["Bailey Hershinow"] },
    { organization: "UF PaCE", names: ["Kiara Becerra Reymundo"] },
    { organization: "Zeta Beta Tau", names: ["Ryan Shimony", "Tyler Bellew"] },
    { organization: "Zeta Tau Alpha", names: ["Kate Bjorn"] },
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
          <span style={{ color: "#233563", fontWeight: "bold" }}>
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
            Click here to view the 2026 Ambassador Guidelines
          </Link>
        </Typography>

        <Typography
          variant="h5"
          gutterBottom
          sx={{ color: "#233563", pb: "0", mb: "0", mt: 2 }}
        >
          Responsibilities
        </Typography>
        <Typography
          variant="body1"
          component="span"
          color="#e2883c"
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
          color="#e2883c"
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

        <Typography variant="h5" color="#233563" sx={{ mt: 2 }}>
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
