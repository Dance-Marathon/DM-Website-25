import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import AppAppBar from '../components/AppAppBar';
import getLPTheme from '../getLPTheme';
import Footer from '../components/Footer';
import { Container, Typography } from '@mui/material';
import ScrollToTop from "../components/ScrollToTop";
import PageHero from '../components/PageHero';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

import HeroPic from "../assets/images/SW.jpg";

export default function OurStory() {
  const [mode, setMode] = React.useState('light');
  const LPtheme = createTheme(getLPTheme(mode));

  const StyledTableHeadCell = styled(TableCell)(({ theme }) => ({
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: '#ffffff', // White background for the header
    color: '#000000', // Black text for the header
    borderBottom: '2px solid rgba(224, 224, 224, 1)', // Light border for the header
  }));

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    fontSize: 14,
    borderBottom: '1px solid rgba(224, 224, 224, 1)',
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
        border: 0,
    },
  }));

  const toggleColorMode = () => {
    setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  function createData(year, total) {
    return { year, total };
  }
  
  const rows = [
    createData('1995', '$12,424.66'),
    createData('1996', '$23,783.27'),
    createData('1997', '$57,057.02'),
    createData('1998', '$75,938.18'),
    createData('1999', '$114,511.81'),
    createData('2000', '$158,603.56'),
    createData('2001', '$195,148.15'),
    createData('2002', '$217,945.10'),
    createData('2003', '$247,941.04'),
    createData('2004', '$250,012.48'),
    createData('2005', '$319,842.78'),
    createData('2006', '$361,454.68'),
    createData('2007', '$370,317.00'),
    createData('2008', '$435,560.89'),
    createData('2009', '$416,485.27'),
    createData('2010', '$520,871.79'),
    createData('2011', '$713,053.68'),
    createData('2012', '$886,726.15'),
    createData('2013', '$1,169,722.16'),
    createData('2014', '$1,528,330.16'),
    createData('2015', '$2,015,307.17'),
    createData('2016', '$2,434,315.18'),
    createData('2017', '$2,724,324.19'),
    createData('2018', '$3,026,420.19'),
    createData('2019', '$3,230,025.23'),
    createData('2020', '$2,526,418.24'),
    createData('2021', '$2,270,311.40'),
    createData('2022', '$2,334,217.21'),
    createData('2023', '$2,007,079.05'),
    createData('2024', '$1,531,518.24')
  ];

  return (
    <ThemeProvider theme={LPtheme}>
      <ScrollToTop />
      <CssBaseline />
      <AppAppBar mode={mode} toggleColorMode={toggleColorMode} />
      <PageHero imageUrl={HeroPic} title='Our Story'/>
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
          <Typography variant="b1" color="black">
            <p>Dance Marathon at UF is a yearlong philanthropic effort that culminates in our Main Event each spring where students remain awake and on their feet for 26.2 hours to represent the hardships faced by children battling pediatric illness. DM at UF is one of the five founding Dance Marathon programs in the nation, and since our start we have raised more than $31 million for the Miracle Children at UF Health Shands Children’s Hospital, our local CMN Hospital. Today, Dance Marathon at UF involves hundreds of internal members and a variety of sponsors and community partners.</p>
          </Typography>
        </Box>
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <StyledTableHeadCell>Year</StyledTableHeadCell>
                        <StyledTableHeadCell >Total Raised</StyledTableHeadCell>
                    </TableRow>
                </TableHead>
                    <TableBody>
                    {rows.map((row) => (
                        <StyledTableRow 
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        <StyledTableCell component="th" scope="row">
                            {row.year}
                        </StyledTableCell>
                        <StyledTableCell >{row.total}</StyledTableCell>
                        </StyledTableRow >
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
      <Footer />
    </ThemeProvider>
  );
}
