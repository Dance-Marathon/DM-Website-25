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
import MN from "../assets/images/miraclenetwork_dm.png";

const logoStyle = {
  width: '140px',
  height: 'auto',
};

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" mt={1}>
      {'Copyright © '}
      <Link href="https://mui.com/">Sitemark&nbsp;</Link>
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
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: 4, sm: 8 },
        py: { xs: 8, sm: 10 },
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
        <Typography variant="body2" color="primary" fontWeight={500}>
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
          <Link color="#4965A6" href="https://ufhealth.org/myrx/disclaimer.shtml">
            Disclaimer & Permitted Use
          </Link>
          <Typography variant="body2" color="primary" fontWeight={400}>
            |
          </Typography>
          <Link color="#4965A6" href="https://disability.ufl.edu/">
            Disability Services
          </Link>
          <Typography variant="body2" color="primary" fontWeight={400}>
            |
          </Typography>
          <Link color="#4965A6" href="https://security.ufl.edu/">
            Security Policies
          </Link>
          <Typography variant="body2" color="primary" fontWeight={400}>
            |
          </Typography>
          <Link color="#4965A6" href="https://privacy.ufl.edu/privacy-policies-and-procedures/onlineinternet-privacy-statement/">
            UF Privacy Policy
          </Link>
          <Typography variant="body2" color="primary" fontWeight={400}>
            |
          </Typography>
          <Link color="#4965A6" href="#">
            Shands Privacy Policy
          </Link>
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          pt: { xs: 4, sm: 8 },
          width: '100%',
          borderTop: '1px solid',
          borderColor: 'divider',
        }}
      >
        <div>
          <Copyright />
        </div>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
          }}>  
          <Box
            sx={{
              display: 'flex',
              width: '50px',
              height: '50px',
            }}>
              {/* Add images here */}
          </Box>      
        </Box>
        <Stack
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
        </Stack>
      </Box>
    </Container>
    </ThemeProvider>
  );
}
