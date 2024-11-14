import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import FacebookIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/X';
import getLPTheme from '../getLPTheme';

// Images
import Footer_Image from "../assets/images/TriBrand_White.png";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" mt={1}>
      {'Copyright © '}
      <Link href="https://floridadm.org/">Dance Marathon at The University of Florida&nbsp;</Link>
      {new Date().getFullYear()}
    </Typography>
  );
}

export default function Footer() {
  const [mode, setMode] = React.useState('light');
  const LPtheme = createTheme(getLPTheme(mode));
  const defaultTheme = createTheme({ palette: { mode } });

  return (
    <ThemeProvider theme={LPtheme}>
    <Box
      sx={{
        backgroundColor: '#E2883c',
      }}
    >
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: 4, sm: 4 },
        py: { xs: 8, sm: 8 },
        textAlign: { sm: 'center', md: 'left' },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          width: '100%',
          justifyContent: 'space-between',
          textAlign: { sm: 'center', md: 'center' },
        }}>
        <Typography variant="body2" color="white" fontWeight={500}>
          A copy of the official registration and financial information may be obtained from the division of consumer services by calling toll free 1-800-435-7352 within the state. Registration does not imply endorsement, approval or recommendation by the state. If you prefer not to be contacted for future fundraising activities, please notify us by calling 1-866-682-2372 or visiting: http://giving.ufhealth.org/opt-out
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { sm: 'row' },
          width: '80%',
          justifyContent: 'space-between',
        }}
      >
        <Box
          sx={{
            display: { xs: 'none', sm: 'flex' },
            flexDirection: 'row',
            gap: 1,
            width: '100%',
            justifyContent: 'space-between',
          }}
        >
          <Link color="white" href="https://ufhealth.org/myrx/disclaimer.shtml">
            Disclaimer & Permitted Use
          </Link>
          <Typography variant="body2" color="primary" fontWeight={400}>
            |
          </Typography>
          <Link color="white" href="https://disability.ufl.edu/">
            Disability Services
          </Link>
          <Typography variant="body2" color="primary" fontWeight={400}>
            |
          </Typography>
          <Link color="white" href="https://security.ufl.edu/">
            Security Policies
          </Link>
          <Typography variant="body2" color="primary" fontWeight={400}>
            |
          </Typography>
          <Link color="white" href="https://privacy.ufl.edu/privacy-policies-and-procedures/onlineinternet-privacy-statement/">
            UF Privacy Policy
          </Link>
          <Typography variant="body2" color="primary" fontWeight={400}>
            |
          </Typography>
          <Link color="white" href="#">
            Shands Privacy Policy
          </Link>
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          pt: { sm: 4 },
          width: '100%',
          borderTop: '1px solid',
          borderColor: 'white',
        }}
      >
        {/* <div>
          <Copyright />
        </div> */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            width: '100%',
          }}>
            <img src={Footer_Image} alt="Footer Image" style={{ width: '100%', maxWidth: '600px', height: 'auto' }} />
        </Box>      
        {/* <Stack
          direction="row"
          justifyContent="left"
          spacing={1}
          useFlexGap
          sx={{
            color: 'text.secondary',
          }}
        >
          <IconButton
            color="inherit"
            href="https://github.com/mui"
            aria-label="GitHub"
            sx={{ alignSelf: 'center' }}
          >
            <FacebookIcon />
          </IconButton>
          <IconButton
            color="inherit"
            href="https://twitter.com/MaterialUI"
            aria-label="X"
            sx={{ alignSelf: 'center' }}
          >
            <TwitterIcon />
          </IconButton>
          <IconButton
            color="inherit"
            href="https://www.linkedin.com/company/mui/"
            aria-label="LinkedIn"
            sx={{ alignSelf: 'center' }}
          >
            <LinkedInIcon />
          </IconButton>
        </Stack> */}
      </Box>
    </Container>
    </Box>
    </ThemeProvider>
  );
}
