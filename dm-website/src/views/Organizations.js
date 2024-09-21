import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import AppAppBar from '../components/AppAppBar';
import getLPTheme from '../getLPTheme';
import Footer from '../components/Footer';
import { Typography, Box, Link, TableContainer, Table, TableBody, TableRow, TableCell, Paper, Container } from '@mui/material';
import ScrollToTop from "../components/ScrollToTop";
import PageHero from '../components/PageHero';
import { styled } from '@mui/material/styles';

import HeroPic from "../assets/images/overalls/SW.jpg";

export default function Organizations() {
  const [mode, setMode] = React.useState('light');
  const LPtheme = createTheme(getLPTheme(mode));

  const toggleColorMode = () => {
    setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    fontSize: 14,
    borderBottom: '1px solid rgba(224, 224, 224, 1)',
    borderRight: '1px solid rgba(224, 224, 224, 1)',
    color: '#000000',
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: '#f5f5f5',
    },
    '&:nth-of-type(even)': {
        backgroundColor: '#ffffff',
    },
    '&:last-child td, &:last-child th': {
        borderBottom: 0,
    },
  }));

  const organizations = [
    ['Alpha Chi Omega', 'Delta Delta Delta', 'Kappa Alpha Theta', 'Sigma Chi'],
    ['Alpha Delta Pi', 'Delta Gamma', 'Kappa Delta', 'Sigma Kappa'],
    ['Alpha Epsilon Phi', 'Delta Nu Zeta', 'Kappa Kappa Gamma', 'Sigma Nu'],
    ['Alpha Epsilon Pi', 'Delta Phi Epsilon', 'Kappa Phi Epsilon', 'Sigma Phi Epsilon'],
    ['Alpha Gamma Rho', 'Delta Sigma Phi', 'Kappa Sigma', 'Society of Women Engineers'],
    ['Alpha Omicron Pi', 'Delta Tau Delta', 'Lambda Chi Alpha', 'Tau Epsilon Phi'],
    ['Alpha Phi', 'Delta Zeta', 'Omega Phi Alpha', 'Tau Kappa Epsilon'],
    ['Alpha Tau Omega', 'Florida Cicerones', 'Phi Delta Theta', 'The Gator Aides'],
    ['Beta Theta Pi', 'Footprints: Buddy and Support Program', 'Phi Eta Sigma Honor Society', 'Theta Alpha'],
    ['Black Student Union', 'Gamma Eta', 'Phi Kappa Tau', 'Theta Chi'],
    ['Brazilian Student Association (BRASA)', 'Gamma Phi Beta', 'Phi Mu', 'Theta Tau'],
    ['Catholic Gators', 'Gator E Sports', 'Pi Beta Phi', 'UF Honors Program'],
    ['Chi Omega', 'Hispanic Student Association', 'Pi Kappa Alpha', 'UF Pre-Physician Assistant Association'],
    ['Chi Phi', 'Innovation Academy', 'Pi Lambda Phi', 'Zeta Beta Tau'],
    ['College of Pharmacy', 'Kappa Alpha Order', 'Pre-Legal Honor Society', 'Zeta Tau Alpha'],
  ];

  return (
    <ThemeProvider theme={LPtheme}>
      <ScrollToTop />
      <CssBaseline />
      <AppAppBar mode={mode} toggleColorMode={toggleColorMode} />
      <PageHero imageUrl={HeroPic} title='About Us'/>
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
          <Typography variant="body1" gutterBottom sx={{ color: '#000000', marginBottom: 2 }}>
                A variety of University of Florida affiliated Organizations participate in Dance Marathon every year!
            </Typography>
            <Typography variant="body1" gutterBottom sx={{ color: '#000000', marginBottom: 2 }}>
                Organizations are the backbone of our philanthropy, and we are always looking for more people to join our family!
                If you would like to get your organization involved with Dance Marathon, please contact the Recruitment Overall, Ava Orlando, at{' '}
                <Link href="mailto:aorlando@floridadm.org" sx={{ color: '#1a73e8' }}>
                aorlando@floridadm.org
                </Link>.
            </Typography>

            <Typography variant="body1" gutterBottom sx={{ color: '#000000', marginBottom: 4 }}>
                Below are the Organizations currently involved in Dance Marathon at UF 2023:
            </Typography>

            <TableContainer component={Paper}>
                <Table aria-label="organizations table">
                <TableBody>
                    {organizations.map((row, rowIndex) => (
                    <StyledTableRow key={rowIndex}>
                        {row.map((org, colIndex) => (
                        <StyledTableCell key={colIndex}>
                            <Typography variant="body2">{org}</Typography>
                        </StyledTableCell>
                        ))}
                    </StyledTableRow>
                    ))}
                </TableBody>
                </Table>
            </TableContainer>
        </Box>
      </Container>
      <Footer />
    </ThemeProvider>
  );
}
