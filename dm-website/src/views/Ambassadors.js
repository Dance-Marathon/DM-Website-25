import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import AppAppBar from '../components/AppAppBar';
import getLPTheme from '../getLPTheme';
import Footer from '../components/Footer';
import { Container, Typography, Box, Link, Grid, List, ListItem, ListItemText } from '@mui/material';
import ScrollToTop from "../components/ScrollToTop";
import PageHero from '../components/PageHero';
import "../App.css";

import HeroPic from "../assets/images/overalls/SW.jpg";
import AmbassadorGuidelines from "../assets/pdfs/2024 Ambassador Guidelines.pdf"
import AmbassadorsPic from "../assets/images/Ambassadors.jpg";

export default function Ambassadors() {
  const [mode, setMode] = React.useState('light');
  const LPtheme = createTheme(getLPTheme(mode));

  const toggleColorMode = () => {
    setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const ambassadors = [
    { organization: "Alpha Chi Omega", names: ["Louisina Morancy", "Hailey Hood"] },
    { organization: "Alpha Delta Pi", names: ["Lola Accardi"] },
    { organization: "Alpha Epsilon Phi", names: ["Maggie Goldenberg", "Sophie Gaer"] },
    { organization: "Alpha Epsilon Pi", names: ["Joshua Levin", "Jason Snytte"] },
    { organization: "Alpha Gamma Rho", names: ["Cole Verano"] },
    { organization: "Alpha Omicron Pi", names: ["Madison Baker", "Nicole Gigliotti"] },
    { organization: "Alpha Phi", names: ["Casey Strauss", "Kelsey Reader"] },
    { organization: "AMSA", names: ["Taylor Tompkins", "Hayley Makowski"] },
    { organization: "Alpha Tau Omega", names: ["Cameron Alvarez", "James Wachter"] },
    { organization: "Beta Theta Pi", names: ["Paul Kolsun"] },
    { organization: "Black Student Union", names: ["Louisina Morancy", "Desrae Morris"] },
    { organization: "Chi Omega", names: ["Riley Rhoden"] },
    { organization: "Chi Phi", names: ["Jacob Bravo", "Cole Carpinteri"] },
    { organization: "Delta Chi", names: ["Tor Moncrieff"] },
    { organization: "Delta Delta Delta", names: ["Jennifer Berthy", "Lainey Shapiro"] },
    { organization: "Delta Gamma", names: ["Gabriela Torres de Navarra", "Tyller Bauer"] },
    { organization: "Delta Nu Zeta", names: ["Kyra Kimball", "Sparsha Padi"] },
    { organization: "Delta Phi Epsilon", names: ["Emma Glech", "Rachel Lerner"] },
    { organization: "Delta Sigma Phi", names: ["Jack Ziegler", "Elijah Bloyer"] },
    { organization: "Delta Tau Delta", names: ["Michael Buzzeo"] },
    { organization: "Delta Zeta", names: ["Brielle Serovich", "Ariana Martinez"] },
    { organization: "Gamma Eta", names: ["Angelyn Castano Caicedo"] },
    { organization: "Gamma Phi Beta", names: ["Alexis Pullos", "Lauren Klein"] },
    { organization: "Gator Diplomats", names: ["Andrew Han"] },
    { organization: "Hispanic Student Association", names: ["Paula Gonzalez"] },
    { organization: "Innovation Academy", names: ["Amelia Enciso-Mesa", "Shreya Shah"] },
    { organization: "Kappa Alpha Order", names: ["Nolan Carpenter", "Robert Noble"] },
    { organization: "Kappa Alpha Theta", names: ["Alexa Diamond"] },
    { organization: "Kappa Delta", names: ["Kshama Shetty", "Madeline Browy"] },
    { organization: "Kappa Kappa Gamma", names: ["Ava Jones"] },
    { organization: "Kappa Phi Epsilon", names: ["Paul McKenzie", "Aidan Hall"] },
    { organization: "Kappa Sigma", names: ["Nolan Hensley"] },
    { organization: "Lambda Chi Alpha", names: ["Nickolas Powers"] },
    { organization: "Omega Phi Alpha", names: ["Rachel Farmer", "Kristen Rifenberg"] },
    { organization: "Phi Delta Theta", names: ["Answer Langer"] },
    { organization: "Phi Eta Sigma Honor Society", names: ["Cade Ferguson"] },
    { organization: "Phi Kappa Tau", names: ["Brian Beckman"] },
    { organization: "Phi Mu", names: ["Samantha Butler"] },
    { organization: "Pi Beta Phi", names: ["Elly Rogers", "Ashlyn Sullivan"] },
    { organization: "Pi Kappa Alpha", names: ["Noah Sastoque", "Kruze Peacock"] },
    { organization: "Pre-Legal Honor Society", names: ["Freedom Scholes"] },
    { organization: "Sigma Chi", names: ["Brogan Tagman", "William Galleher"] },
    { organization: "Sigma Kappa", names: ["Danielle DePaul"] },
    { organization: "Sigma Nu", names: ["Zachary Terwilliger"] },
    { organization: "Sigma Phi Epsilon", names: ["Benjamin Lang", "Liam Farrell"] },
    { organization: "Society of Women Engineers", names: ["Elena Rollins", "Alessandra Andreozzi"] },
    { organization: "The Gator Aides", names: ["Arianna Lowther"] },
    { organization: "Theta Alpha", names: ["Kyla Clewis"] },
    { organization: "Theta Chi", names: ["Sazzad Mabud"] },
    { organization: "Theta Tau", names: ["Rebecca Merwin", "Katherine Walsh"] },
    { organization: "UF Honors Program", names: ["Claudia Elena Johnson Cuellar"] },
    { organization: "UF Pre-Physician Assistant Association", names: ["Isabella Clem"] },
    { organization: "Zeta Beta Tau", names: ["Brendan Kligerman", "Coby Farhi"] },
    { organization: "Zeta Tau Alpha", names: ["Caitlin Gregory"] },
  ];

  return (
    <ThemeProvider theme={LPtheme}>
      <ScrollToTop />
      <CssBaseline />
      <AppAppBar mode={mode} toggleColorMode={toggleColorMode} />
      <PageHero imageUrl={AmbassadorsPic} title='Ambassadors' />
      <Container
        sx={{
          pt: { xs: 2, sm: 6 },
          pb: { xs: 2, sm: 8 },
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'left',
          gap: { xs: 2, sm: 3 },
        }}  
      >
      <Typography variant="body1" color="text.secondary" paragraph>
        Organization Ambassadors serve as a liaison between Dance Marathon and their respective organization.
      </Typography>
      <Typography variant="body1" color="text.secondary" paragraph>
        Organization Ambassadors will attend weekly meetings to receive information to relay to their Organizations and to work on professional and personal development. These meetings will allow Ambassadors to think creatively and brainstorm together to create new ways to incentivize and engage their members in Dance Marathon. Each Organization will be assigned a Fundraising & Organization Development Captain to work with on Organization involvement and fundraising throughout the year.
      </Typography>
      <Link href={AmbassadorGuidelines} target="_blank">
        Click here to view the 2024 Ambassador Guidelines
      </Link>
      
      <Typography variant="h6" gutterBottom sx={{ marginTop: 4, color: '#000000' }}>
        Responsibilities:
      </Typography>
      <ul className="custom-bullet-points">
        <li>
          <Typography variant="body1" component="span" color="text.secondary">
            <b>Yearlong:</b>
          </Typography>
        </li>
        <ul className="custom-bullet-points">
          <li>
            <Typography variant="body1" component="span" color="text.secondary">
              Recruit and motivate members of their Organization to fundraise and participate
            </Typography>
          </li>
          <li>
            <Typography variant="body1" component="span" color="text.secondary">
              Encourage members to get involved with Dance Marathon
            </Typography>
          </li>
          <li>
            <Typography variant="body1" component="span" color="text.secondary">
              Inform all Organization members of events, registration dates, fundraising incentives, etc.
            </Typography>
          </li>
          <li>
            <Typography variant="body1" component="span" color="text.secondary">
              Work with the Family Relations Team to engage with their respective Miracle Family throughout the year
            </Typography>
          </li>
          <li>
            <Typography variant="body1" component="span" color="text.secondary">
              Host a minimum of one Hospitality Night or fundraising event
            </Typography>
          </li>
          <li>
            <Typography variant="body1" component="span" color="text.secondary">
              Be in attendance at various Dance Marathon events during the year (i.e. Miracles in Color 5K, Moralloween, Miracle Family Events, etc.)
            </Typography>
          </li>
        </ul>
        <li>
          <Typography variant="body1" component="span" color="text.secondary">
            <b>During the Main Event:</b>
          </Typography>
        </li>
          <ul className="custom-bullet-points">
          <li>
            <Typography variant="body1" component="span" color="text.secondary">
              Help assign Miracle Maker buddies prior to the Event for each Miracle Maker
            </Typography>
          </li>
          <li>
            <Typography variant="body1" component="span" color="text.secondary">
              Work with their Fundraising and Organization Development Captain to encourage and help Miracle Makers fundraise at the Event
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
      </ul>

      <Typography variant="h6" color="text.secondary" sx={{ mt: 4 }}>
        2023 Dance Marathon Ambassadors
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        {ambassadors.map((ambassador, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <Box sx={{
                height: 100,
                width: 250,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                border: '1px solid #ccc',
                borderRadius: '8px',
                padding: 2,
                textAlign: 'center',
              }}>
              <Typography variant="h6" color="text.secondary">
                {ambassador.organization}
              </Typography>
              {ambassador.names.map((name, idx) => (
                <Typography color="text.secondary" key={idx}>{name}</Typography>
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
