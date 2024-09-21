import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import AppAppBar from '../components/AppAppBar';
import getLPTheme from '../getLPTheme';
import Footer from '../components/Footer';
import { Container, Typography, Link } from '@mui/material';
import ScrollToTop from "../components/ScrollToTop";
import PageHero from '../components/PageHero';
import YoutubeVid from '../components/YoutubeVid';

import HeroPic from "../assets/images/overalls/SW.jpg";

export default function MiniMarathons() {
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
      <PageHero imageUrl={HeroPic} title='Mini-Marathons'/>
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
          <Typography variant="body1" gutterBottom sx={{ color: 'text.secondary', marginBottom: 6 }}>
          10 high schools around the state of Florida participate each year in our Mini Marathon program. High school students at these schools show an enthusiastic passion for Dance Marathon even before their college years begin and play a vital role in our movement. This past year, our Mini Marathon programs raised a total of {' '}
                <Typography component="span" sx={{ fontWeight: 'bold', color: 'primary' }}>
                $205,897.99
                </Typography >{' '}
                , proving that these students are truly one generation fighting for the next. All money raised by Mini Marathons goes toward DM at UF’s total amount raised, which directly benefits the children at UF Health Shands Children’s Hospital.
            </Typography>
          <YoutubeVid videoId="wDD1GzDla3c"/>
          <Typography variant="body1" sx={{ color: '#000000', marginBottom: 2, marginTop: 6 }}>
            We are always looking for more high schools to join our Dance Marathon family. If you would like to learn more about our Mini-Marathon Programs or would like to get involved, please contact our Marathon Relations Overall Director, Lexi Devescovi, at {' '}
              <Link href="mailto:dgeller@floridadm.org" sx={{ color: '#1a73e8' }}>
                adevescovi@floridadm.org
              </Link>.
            </Typography>

            <Typography variant="h5" component="h2" gutterBottom sx={{  marginTop: 4, color: 'text.secondary' }}>
                Participating Schools
            </Typography>
                <ul>
                    <li>
                    <Typography variant="body1" component="span" color="text.secondary">
                        Belleview High School
                    </Typography>
                    </li>
                    <li>
                    <Typography variant="body1" component="span" color="text.secondary">
                        East Ridge High School
                    </Typography>
                    </li>
                    <li>
                    <Typography variant="body1" component="span" color="text.secondary">
                        Forest High School
                    </Typography>
                    </li>
                    <li>
                    <Typography variant="body1" component="span" color="text.secondary">
                        F.W. Buchholz High School
                    </Typography>
                    </li>
                    <li>
                    <Typography variant="body1" component="span" color="text.secondary">
                        Gainesville High School
                    </Typography>
                    </li>
                    <li>
                    <Typography variant="body1" component="span" color="text.secondary">
                        Leesburg High School
                    </Typography>
                    </li>
                    <li>
                    <Typography variant="body1" component="span" color="text.secondary">
                        Newberry High School
                    </Typography>
                    </li>
                    <li>
                    <Typography variant="body1" component="span" color="text.secondary">
                        Oak Hall High School
                    </Typography>
                    </li>
                    <li>
                    <Typography variant="body1" component="span" color="text.secondary">
                        Tavares High School
                    </Typography>
                    </li>
                    <li>
                    <Typography variant="body1" component="span" color="text.secondary">
                        Vanguard High School
                    </Typography>
                    </li>
                    <li>
                    <Typography variant="body1" component="span" color="text.secondary">
                        Villages Charter School
                    </Typography>
                    </li>
                </ul>
        </Box>
      </Container>
      <Footer />
    </ThemeProvider>
  );
}
