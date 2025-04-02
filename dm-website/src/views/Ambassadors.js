import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import AppAppBar from '../components/AppAppBar';
import getLPTheme from '../getLPTheme';
import Footer from '../components/Footer';
import { Container, Typography, Box, Link, Grid } from '@mui/material';
import ScrollToTop from "../components/ScrollToTop";
import PageHero from '../components/PageHero';
import "../App.css";
import AmbassadorGuidelines from "../assets/pdfs/2024 Ambassador Guidelines.pdf"
import AmbassadorsPic from "../assets/images/pagepics/AmbassadorsHero.JPG";
import LazyLoad from 'react-lazyload';


export default function Ambassadors() {
  const [mode, setMode] = React.useState(() => {
    // Retrieve the stored theme from localStorage or default to 'light'
    return localStorage.getItem('theme') || 'light';
  });
  const LPtheme = createTheme(getLPTheme(mode));

  const toggleColorMode = () => {
    setMode((prev) => {
      const newMode = prev === 'dark' ? 'light' : 'dark';
      localStorage.setItem('theme', newMode); // Store the new mode in localStorage
      return newMode;
    });
  };

  const ambassadors = [
    { organization: "Alpha Chi Omega", names: ["Kayla Maher", "Jordan Guarneri"] },
    { organization: "Alpha Delta Pi", names: ["Emma Geohagan", "Ava Avera"] },
    { organization: "Alpha Epsilon Phi", names: ["Jordyn Klein", "Leah King"] },
    { organization: "Alpha Omicron Pi", names: ["Olivia Torre"] },
    { organization: "Alpha Phi", names: ["Lilly Daxon", "Samantha Elmer"] },
    { organization: "Alpha Tau Omega", names: ["Ryan McCracken"] },
    { organization: "AMSA", names: ["Jimmy Davis"] },
    { organization: "Beta Theta Pi", names: ["Jackson Driggers", "Parker Ayer"] },
    { organization: "Chi Omega", names: ["Louise Vann"] },
    { organization: "Chi Phi", names: ["Owen McAdams", "Mark Michna"] },
    { organization: "Delta Chi", names: ["Andrew Salk", "Drew Bartram"] },
    { organization: "Delta Delta Delta", names: ["Ella Martin", "Kylah Hill"] },
    { organization: "Delta Gamma", names: ["Chiara Bell", "Anabel De la Hoz"] },
    { organization: "Delta Nu Zeta", names: ["Adriana Figueroa"] },
    { organization: "Delta Phi Epsilon", names: ["Emma Gelch", "Michelle Anders"] },
    { organization: "Delta Sigma Phi", names: ["Jason Drucker", "Julian Morgan"] },
    { organization: "Delta Tau Delta", names: ["Eric Ewalt", "James Malone"] },
    { organization: "Delta Upsilon", names: ["Oden Dillenkoffer"] },
    { organization: "Delta Zeta", names: ["Ellen Mulgrew", "Lauren Prangley"] },
    { organization: "Footprints", names: ["Nadia Shahin", "Desiree Haghgoo"] },
    { organization: "Gamma Eta", names: ["Daniela Martinez", "Lianny Propest"] },
    { organization: "Gamma Phi Beta", names: ["Madeline Walsh", "Aishwarya Nagpal"] },
    { organization: "Hispanic Student Association", names: ["Vianca Gonzalez", "Johanna Rizo"] },
    { organization: "Kappa Alpha Order", names: ["Brian Schlidt"] },
    { organization: "Kappa Alpha Theta", names: ["Gabrielle Condon", "Logan Freiberg"] },
    { organization: "Kappa Delta", names: ["Melody McAfee", "Macy Meis"] },
    { organization: "Kappa Kappa Gamma", names: ["Anna Timko", "Sarah Watson"] },
    { organization: "Kappa Phi Epsilon", names: ["Anthony Soehnlein", "Carson Sumner"] },
    { organization: "Kappa Sigma", names: ["Leandro Rodriguez"] },
    { organization: "Phi Delta Theta", names: ["Mason Wong", "Ethan Schwartz"] },
    { organization: "Phi Eta Sigma Honor Society", names: ["Sherry Habib", "Tamara Bhardwaj"] },
    { organization: "Phi Kappa Tau", names: ["Alex Paul", "Lucian Yodh"] },
    { organization: "Phi Mu", names: ["Ansley Reeves", "Abby McCaskill"] },
    { organization: "Pi Beta Phi", names: ["Ashley Camargo", "Lily DiFranco"] },
    { organization: "Pi Kappa Alpha", names: ["Amor Agic", "Rocco Tammone"] },
    { organization: "Pi Kappa Phi", names: ["Alex De Dios", "Willem Kelley"] },
    { organization: "Sigma Alpha Epsilon", names: ["Jack Pryor", "Jacob Zager"] },
    { organization: "Sigma Chi", names: ["Ryan Tucci"] },
    { organization: "Sigma Kappa", names: ["Sydney Ramsey"] },
    { organization: "Sigma Nu", names: ["Sebastian Botero"] },
    { organization: "Sigma Phi Epsilon", names: ["Matthew Anderson", "Luis Carranza"] },
    { organization: "Tau Kappa Epsilon", names: ["Matthew Carmona"] },
    { organization: "UF Honors Program", names: ["Claudia Elena Johnson Cuellar"] },
    { organization: "UF Innovation Academy", names: ["Seth Haber"] },
    { organization: "UF Pre-Professional Services Organization", names: ["Sophia Magdalein"] },
    { organization: "UFAA: Florida Cicerones", names: ["MB Garrison"] },
    { organization: "William and Grace Dial Center Ambassador Leadership Program", names: ["Layah Singh"] },
    { organization: "Zeta Beta Tau", names: ["Zack Bogis", "Nicholas Lysek"] },
    { organization: "Zeta Tau Alpha", names: ["Roselyn Almora", "Alexa Orozco"] },
  ];


  return (
    <ThemeProvider theme={LPtheme}>
      <ScrollToTop />
      <CssBaseline />
      <AppAppBar mode={mode} toggleColorMode={toggleColorMode} />
      <LazyLoad height={200} offset={100} once>
      <PageHero imageUrl={AmbassadorsPic} title='Ambassadors' />
      </LazyLoad>
      <Container
        maxWidth="lg"
        sx={{
          pt: { xs: 2, sm: 6 },
          pb: { xs: 2, sm: 8 },
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: { xs: 2, sm: 3 },
        }}  
      >
      <Typography variant="body1" color="text.secondary">
      <span style={{color: '#233563', fontWeight: 'bold'}}>Organization Ambassadors</span> serve as a liaison between Dance Marathon and their respective organization.
      </Typography>
      <Typography variant="body1" color="text.secondary" marginTop={0}>
        Organization Ambassadors will attend weekly meetings to receive information to relay to their Organizations and to work on professional and personal development. These meetings will allow Ambassadors to think creatively and brainstorm together to create new ways to incentivize and engage their members in Dance Marathon. Each Organization will be assigned an Organization Relations Captain to work with on Organization involvement and fundraising throughout the year.
      </Typography>
      <Typography variant="body1" sx={{ color: '#000000'}}  marginTop={0}>
                <Link href={AmbassadorGuidelines} sx={{ display: 'inline' }}>
                Click here to view the 2025 Ambassador Guidelines
                </Link>
            </Typography>
      
      <Typography variant="h5" gutterBottom sx={{color: '#233563', pb: "0", mb: "0", mt: 2}}>
        Responsibilities
      </Typography>
          <Typography variant="body1" component="span" color='#e2883c' marginBottom={-2}>
          <b>Yearlong:</b>
          </Typography>
        <ul className="custom-bullet-points" style={{ margin: '0' }}>
          <li>
            <Typography variant="body1" component="span" color="text.secondary" sx={{ margin: 0 }}>
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
          <Typography variant="body1" component="span" color='#e2883c' marginBottom={-2}>
            <b>During the Main Event:</b>
          </Typography>
          <ul className="custom-bullet-points" style={{ margin: '0' }}>
          <li>
            <Typography variant="body1" component="span" color="text.secondary" sx={{ margin: 0 }}>
              Help assign Miracle Maker buddies prior to the Event for each Miracle Maker
            </Typography>
          </li>
          <li>
            <Typography variant="body1" component="span" color="text.secondary">
              Work with their Organization Relations Captain to encourage and help Miracle Makers fundraise at the Event
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
      

      <Typography variant="h5" color='#233563' sx={{ mt: 2 }}>
        2025 Dance Marathon Ambassadors
      </Typography>
      <Grid
        container
        spacing={2}
        justifyContent="center"
        alignItems="center"
        sx={{ marginX: 'auto' }}
      >
        {ambassadors.map((ambassador, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <Box sx={{
                height: 125,
                width: { xs: '100%', sm: 250 },
                maxWidth: 250,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                border: '1px solid #ccc',
                borderRadius: '8px',
                padding: 2,
                textAlign: 'center',
              }}>
              <Typography variant="h6" color="text.secondary" fontWeight={'bold'}>
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
