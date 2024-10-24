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
import OrganizationsPic from "../assets/images/pagepics/Organizations.jpg";

export default function Organizations() {
  const [mode, setMode] = React.useState(() => {
    // Retrieve the stored theme from localStorage or default to 'dark'
    return localStorage.getItem('theme') || 'dark';
  });
  const LPtheme = createTheme(getLPTheme(mode));

  const toggleColorMode = () => {
    setMode((prev) => {
      const newMode = prev === 'dark' ? 'light' : 'dark';
      localStorage.setItem('theme', newMode); // Store the new mode in localStorage
      return newMode;
    });
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
    ['Alpha Gamma Rho', 'Delta Sigma Phi', 'Kappa Sigma', 'Alpha Omicron Pi'],
    ['Delta Tau Delta', 'Lambda Chi Alpha', 'Tau Epsilon Phi', 'Alpha Phi'],
    ['Delta Zeta', 'Sigma Alpha Epsilon', 'Tau Kappa Epsilon', 'Alpha Tau Omega'],
    ['Florida Cicerones', 'Phi Delta Theta', 'The Gator Aides', 'Beta Theta Pi'],
    ['Footprints: Buddy and Support Program', 'Phi Eta Sigma Honor Society', 'Gamma Eta', 'Phi Kappa Tau'],
    ['UF Innovation', 'Gamma Phi Beta', 'Phi Mu', 'Pi Beta Phi'],
    ['UF Honors Program', 'Chi Omega', 'Hispanic Student Association', 'Pi Kappa Alpha'],
    ['UF Pre-Professional Services Organization', 'Chi Phi', 'Innovation Academy', 'Kappa Alpha Order'],
    ['Zeta Beta Tau', 'Zeta Tau Alpha', 'William and Grace Dial Center Ambassador Leadership Program']
  ];

  return (
    <ThemeProvider theme={LPtheme}>
      <ScrollToTop />
      <CssBaseline />
      <AppAppBar mode={mode} toggleColorMode={toggleColorMode} />
      <PageHero imageUrl={OrganizationsPic} title='Organizations'/>
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
          <Typography variant="body1" gutterBottom sx={{ marginBottom: 2 }} color="text.secondary">
                A variety of University of Florida affiliated Organizations participate in Dance Marathon every year!
            </Typography>
            <Typography variant="body1" gutterBottom sx={{ marginBottom: 2 }} color="text.secondary">
                Organizations are the backbone of our philanthropy, and we are always looking for more people to join our family!
                If you would like to get your organization involved with Dance Marathon, please contact the Recruitment Overall, Ava Orlando, at{' '}
                <Link href="mailto:aorlando@floridadm.org" sx={{ color: '#1a73e8' }}>
                aorlando@floridadm.org
                </Link>.
            </Typography>

            <Typography variant="body1" gutterBottom sx={{ marginBottom: 4 }} color="text.secondary">
                Below are the Organizations currently involved in Dance Marathon at UF 2025:
            </Typography>

            <TableContainer component={Paper}>
                <Table aria-label="organizations table">
                <TableBody>
                    {organizations.map((row, rowIndex) => (
                    <StyledTableRow key={rowIndex}>
                        {row.map((org, colIndex) => (
                        <StyledTableCell key={colIndex}>
                            <Typography variant="body">{org}</Typography>
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
