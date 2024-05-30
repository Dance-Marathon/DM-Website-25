import * as React from 'react';

import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import AppAppBar from '../components/AppAppBar';
import Hero from '../components/Hero';
import getLPTheme from '../getLPTheme';
import LogoCollection from '../components/LogoCollection';
import { Typography } from '@mui/material';

export default function LandingPage() {
  const [mode, setMode] = React.useState('light');
  const LPtheme = createTheme(getLPTheme(mode));

  const toggleColorMode = () => {
    setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ThemeProvider theme={LPtheme}>
      <CssBaseline />
      <AppAppBar mode={mode} toggleColorMode={toggleColorMode} />
      <Hero />
      <Box sx={{ 
        bgcolor: 'background.paper',
        }}>
      <Box id="introText" sx={{ py: 6, maxWidth: '1000px', mx: 'auto',
          position: 'relative',
          zIndex: 1,
          pr: 1.5,
          pl: 1.5,}}>
      <Typography
        component="p"
        variant="subtitle2"
        align="center"
        color="text.secondary"
      >
        <i style={{ color: '#e2883c' }}>
          <b>Dance Marathon</b>
        </i>{' '}
        at the{' '}
        <i style={{ color: '#e2883c' }}>
          <b>University of Florida</b>
        </i>{' '}
        is the largest student-run and highest fundraising philanthropy in the Southeast United States. Our mission is to strive to bring together the campus and community to raise funds and awareness for our local Children's Miracle Network Hospital,{' '}
        <i style={{ color: '#233563' }}>
          <b>UF Health Shands Children's Hospital</b>
        </i>
        . We are going into our 31st year of{' '}
        <i style={{ color: '#e2883c' }}>
          <b>Dance Marathon</b>
        </i>{' '}
        at{' '}
        <i style={{ color: '#e2883c' }}>
          <b>UF</b>
        </i>
        , having fundraised over $31,000,000 thus far. This past year, we celebrated our 30th year by raising a historic{' '}
        <i style={{ color: '#233563' }}>
          <b>$1,531,518.24!</b>
        </i>
      </Typography>
      </Box>
      <Divider />
      <LogoCollection/>
      <Divider/>
      </Box>
    </ThemeProvider>
  );
}
