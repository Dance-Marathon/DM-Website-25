import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import AppAppBar from '../components/AppAppBar';
import getLPTheme from '../getLPTheme';
import Footer from '../components/Footer';
import { Container, Typography, Box, Link, Grid } from '@mui/material';
import ScrollToTop from "../components/ScrollToTop";
import PageHero from '../components/PageHero';

import HeroPic from "../assets/images/overalls/SW.jpg";
import SponsorshipPacket from "../assets/pdfs/SponsorshipPacket.pdf";
import SponsorPic from "../assets/images/Sponsors.jpg";

import Sponsor1 from "../assets/images/sponsors/Sponsor1.png";
import Sponsor2 from "../assets/images/sponsors/Sponsor2.png";
import Sponsor3 from "../assets/images/sponsors/Sponsor3.png";
import Sponsor4 from "../assets/images/sponsors/Sponsor4.png";
import Sponsor5 from "../assets/images/sponsors/Sponsor5.png";
import Sponsor6 from "../assets/images/sponsors/Sponsor6.png";
import Sponsor7 from "../assets/images/sponsors/Sponsor7.png";
import Sponsor8 from "../assets/images/sponsors/Sponsor8.png";
import Sponsor9 from "../assets/images/sponsors/Sponsor9.png";
import Sponsor10 from "../assets/images/sponsors/Sponsor10.png";
import Sponsor11 from "../assets/images/sponsors/Sponsor11.png";
import Sponsor12 from "../assets/images/sponsors/Sponsor12.png";
import Sponsor13 from "../assets/images/sponsors/Sponsor13.png";
import Sponsor14 from "../assets/images/sponsors/Sponsor14.png";
import Sponsor15 from "../assets/images/sponsors/Sponsor15.png";
import Sponsor16 from "../assets/images/sponsors/Sponsor16.png";
import Sponsor17 from "../assets/images/sponsors/Sponsor17.png";
import Sponsor18 from "../assets/images/sponsors/Sponsor18.png";
import Sponsor19 from "../assets/images/sponsors/Sponsor19.png";
import Sponsor20 from "../assets/images/sponsors/Sponsor20.png";
import Sponsor21 from "../assets/images/sponsors/Sponsor21.png";
import Sponsor22 from "../assets/images/sponsors/Sponsor22.png";
import Sponsor23 from "../assets/images/sponsors/Sponsor23.png";
import Sponsor24 from "../assets/images/sponsors/Sponsor24.png";
import Sponsor25 from "../assets/images/sponsors/Sponsor25.png";
import Sponsor26 from "../assets/images/sponsors/Sponsor26.png";
import Sponsor27 from "../assets/images/sponsors/Sponsor27.png";
import Sponsor28 from "../assets/images/sponsors/Sponsor28.png";
import Sponsor29 from "../assets/images/sponsors/Sponsor29.png";
import Sponsor30 from "../assets/images/sponsors/Sponsor30.png";
import Sponsor31 from "../assets/images/sponsors/Sponsor31.png";
import Sponsor32 from "../assets/images/sponsors/Sponsor32.png";
import Sponsor33 from "../assets/images/sponsors/Sponsor33.png";
import Sponsor34 from "../assets/images/sponsors/Sponsor34.png";
import Sponsor35 from "../assets/images/sponsors/Sponsor35.png";
import Sponsor36 from "../assets/images/sponsors/Sponsor36.png";
import Sponsor37 from "../assets/images/sponsors/Sponsor37.png";
import Sponsor38 from "../assets/images/sponsors/Sponsor38.png";
import Sponsor39 from "../assets/images/sponsors/Sponsor39.png";
import Sponsor40 from "../assets/images/sponsors/Sponsor40.png";
import Sponsor41 from "../assets/images/sponsors/Sponsor41.png";
import Sponsor42 from "../assets/images/sponsors/Sponsor42.png";
import Sponsor43 from "../assets/images/sponsors/Sponsor43.png";
import Sponsor44 from "../assets/images/sponsors/Sponsor44.png";
import Sponsor45 from "../assets/images/sponsors/Sponsor45.png";
import Sponsor46 from "../assets/images/sponsors/Sponsor46.png";
import Sponsor47 from "../assets/images/sponsors/Sponsor47.png";
import Sponsor48 from "../assets/images/sponsors/Sponsor48.png";
import Sponsor49 from "../assets/images/sponsors/Sponsor49.png";
import Sponsor50 from "../assets/images/sponsors/Sponsor50.png";
import Sponsor51 from "../assets/images/sponsors/Sponsor51.png";
import Sponsor52 from "../assets/images/sponsors/Sponsor52.png";
import Sponsor53 from "../assets/images/sponsors/Sponsor53.png";
import Sponsor54 from "../assets/images/sponsors/Sponsor54.png";
import Sponsor55 from "../assets/images/sponsors/Sponsor55.png";
import Sponsor56 from "../assets/images/sponsors/Sponsor56.png";
import Sponsor57 from "../assets/images/sponsors/Sponsor57.png";
import Sponsor58 from "../assets/images/sponsors/Sponsor58.png";
import Sponsor59 from "../assets/images/sponsors/Sponsor59.png";
import Sponsor60 from "../assets/images/sponsors/Sponsor60.png";


const sponsors = [
  { logo: Sponsor1 },
  { logo: Sponsor2 },
  { logo: Sponsor3 },
  { logo: Sponsor4 },
  { logo: Sponsor5 },
  { logo: Sponsor6 },
  { logo: Sponsor7 },
  { logo: Sponsor8 },
  { logo: Sponsor9 },
  { logo: Sponsor10 },
  { logo: Sponsor11 },
  { logo: Sponsor12 },
  { logo: Sponsor13 },
  { logo: Sponsor14 },
  { logo: Sponsor15 },
  { logo: Sponsor16 },
  { logo: Sponsor17 },
  { logo: Sponsor18 },
  { logo: Sponsor19 },
  { logo: Sponsor20 },
  { logo: Sponsor21 },
  { logo: Sponsor22 },
  { logo: Sponsor23 },
  { logo: Sponsor24 },
  { logo: Sponsor25 },
  { logo: Sponsor26 },
  { logo: Sponsor27 },
  { logo: Sponsor28 },
  { logo: Sponsor29 },
  { logo: Sponsor30 },
  { logo: Sponsor31 },
  { logo: Sponsor32 },
  { logo: Sponsor33 },
  { logo: Sponsor34 },
  { logo: Sponsor35 },
  { logo: Sponsor36 },
  { logo: Sponsor37 },
  { logo: Sponsor38 },
  { logo: Sponsor39 },
  { logo: Sponsor40 },
  { logo: Sponsor41 },
  { logo: Sponsor42 },
  { logo: Sponsor43 },
  { logo: Sponsor44 },
  { logo: Sponsor45 },
  { logo: Sponsor46 },
  { logo: Sponsor47 },
  { logo: Sponsor48 },
  { logo: Sponsor49 },
  { logo: Sponsor50 },
  { logo: Sponsor51 },
  { logo: Sponsor52 },
  { logo: Sponsor53 },
  { logo: Sponsor54 },
  { logo: Sponsor55 },
  { logo: Sponsor56 },
  { logo: Sponsor57 },
  { logo: Sponsor58 },
  { logo: Sponsor59 },
  { logo: Sponsor60 },
];


export default function Sponsors() {
  const [mode, setMode] = React.useState('light');
  const LPtheme = createTheme(getLPTheme(mode));

  const toggleColorMode = () => {
    setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ThemeProvider theme={LPtheme}>
      <ScrollToTop />
      <CssBaseline />
      <AppAppBar mode={mode} toggleColorMode={toggleColorMode} />
      <PageHero imageUrl={SponsorPic} title='Partners' sx={{ fontFamily: "CasaPinada"}}/>
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
        <Box
          sx={{
            width: { sm: '100%', md: '100%' },
            textAlign: { sm: 'left', md: 'left' },
          }}
       >
      </Box>

      {/* Description */}
      <Typography variant="body1" color="text.secondary" paragraph>
        Dance Marathon at UF is so thankful for the support of our generous Sponsors! DM at UF offers many different ways to get involved as a Sponsor for our cause, each with various benefits to show our appreciation for your support. Our Partnership Team will connect your company with our Organization, along with access to an extensive network of supporters of all ages and demographics.
      </Typography>

      {/* Link to sponsorship opportunities */}
      <Typography variant="body1" color="text.secondary" paragraph>
        For more information, view our sponsorship opportunities{' '}
        <Link href={SponsorshipPacket} underline="always">
          here
        </Link>.
      </Typography>

      {/* Contact Information */}
      <Typography variant="body1" color="text.secondary" paragraph>
        If you have any questions, please contact our Partnership Overall Director,{' '}
        <Link href="mailto:jwinograd@floridadm.org" underline="always">
          Jessica Winograd
        </Link>, at jwinograd@floridadm.org.
      </Typography>

      {/* Sponsors Section */}
      <Typography variant="h3" color="text.secondary" align="center" gutterBottom sx={{marginTop: 4}}>
        <b>Our 2024 Sponsors</b>
      </Typography>

      {/* Grid of sponsor logos */}
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        {sponsors.map((sponsor, index) => (
          <Grid item xs={12} sm={6} md={3} key={index} sx={{ textAlign: 'center' }}>
            <Box
              component="img"
              src={sponsor.logo}
              sx={{ maxWidth: '75%', height: 'auto', mb: 2 }}
            />
          </Grid>
        ))}
      </Grid>
        </Container>
      <Footer />
    </ThemeProvider>
  );
}
