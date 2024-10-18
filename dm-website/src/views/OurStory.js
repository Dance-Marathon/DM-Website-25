import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import AppAppBar from '../components/AppAppBar';
import getLPTheme from '../getLPTheme';
import Footer from '../components/Footer';
import { Container, Typography, Box } from '@mui/material';
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

import HeroPic from "../assets/images/overalls/SW.jpg";
import '../App.css';

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
          <Typography variant="h5" component="h2" gutterBottom style={{color: '#233563'}}>
            Where The Money Goes
          </Typography>
          <Typography variant="body1" paragraph color="text.secondary">
          <span style={{ color: '#e2883c', fontWeight: 'bold' }}>100%</span> of the funds raised by DM at UF go directly to UF Health Shands Children's Hospital, our local Children Miracle Network Hospital. Of these funds, most recently, <span style={{ color: '#e2883c', fontWeight: 'bold' }}>48%</span> goes to research, <span style={{ color: '#e2883c', fontWeight: 'bold' }}>10%</span> to education and <span style={{ color: '#e2883c', fontWeight: 'bold' }}>42%</span> to patient care.
          </Typography>
          <Typography variant="body1" paragraph color="text.secondary">
            Patient care funding provides necessities such as bandages and patient gowns, as well as life-saving equipment and hospital improvements including the recent expansion of the Neonatal Intensive Care Unit. These funds also provide sleeper sofas for parents, playrooms for children, and Child Life programs, in an effort to make hospital stays more enjoyable for children and their families.
          </Typography>
          <Typography variant="body1" paragraph color="text.secondary">
            Research funding helps our doctors find solutions for incurable diseases such as diabetes, cystic fibrosis, and cancer, and it allows them to develop new technology and enhanced processes that improve the daily lives of pediatric patients. Education funding supports programs such as Child Life Diversion therapy and goes toward raising funds and awareness for the Children’s Miracle Network.
          </Typography>

          <Typography variant="h5" component="h2" gutterBottom
      style={{ color: '#233563', marginTop: '20px', marginBottom: '5px' }}>
            Participants
          </Typography>
          <ul className="custom-bullet-points">
            <li>
              <Typography variant="body1" component="span" color="text.secondary">
                Number of Registered Miracle Makers in 2024: <span style={{ color: '#e2883c', fontWeight: 'bold' }}>483</span>
              </Typography>
            </li>
            <li>
              <Typography variant="body1" component="span" color="text.secondary">
                Number of Captains: <span style={{ color: '#e2883c', fontWeight: 'bold' }}>395</span>
              </Typography>
            </li>
            <li>
              <Typography variant="body1" component="span" color="text.secondary">
                Number of Emerging Leaders: <span style={{ color: '#e2883c', fontWeight: 'bold' }}>176</span>
              </Typography>
            </li>
            <li>
              <Typography variant="body1" component="span" color="text.secondary">
                Number of Miracle Families: <span style={{ color: '#e2883c', fontWeight: 'bold' }}>32</span>
              </Typography>
            </li>
            <li>
              <Typography variant="body1" component="span" color="text.secondary">
                Number of Sponsors: <span style={{ color: '#e2883c', fontWeight: 'bold' }}>74</span>
              </Typography>
            </li>
            <li>
              <Typography variant="body1" component="span" color="text.secondary">
                Most Years as a Dancer: <span style={{ color: '#e2883c', fontWeight: 'bold' }}>4 years</span>
              </Typography>
            </li>
          </ul>

          <Typography variant="h5" component="h2" gutterBottom
      style={{ color: '#233563', marginTop: '20px', marginBottom: '5px' }}>
            Fundraising
          </Typography>
          <ul className="custom-bullet-points">
            <li>
              <Typography variant="body1" component="span" color="text.secondary">
              <span style={{ color: '#e2883c', fontWeight: 'bold' }}>26,147</span> donations on DonorDrive
              </Typography>
            </li>
            <li>
              <Typography variant="body1" component="span" color="text.secondary">
              <span style={{ color: '#e2883c', fontWeight: 'bold' }}>1,363</span> fundraisers raised at least $1
              </Typography>
            </li>
            <li>
              <Typography variant="body1" component="span" color="text.secondary">
                Amount raised in 2024: <span style={{ color: '#e2883c', fontWeight: 'bold' }}>$1,531,518.24</span>
              </Typography>
            </li>
            <li>
              <Typography variant="body1" component="span" color="text.secondary">
                Total amount raised in past 31 years: over <span style={{ color: '#e2883c', fontWeight: 'bold' }}>32 million dollars</span>
              </Typography>
            </li>
            <li>
              <Typography variant="body1" component="span" color="text.secondary">
                Alumni Contribution: <span style={{ color: '#e2883c', fontWeight: 'bold' }}>$124,904.76</span>
              </Typography>
            </li>
          </ul>
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
            <Box sx={{ width: { sm: '100%', md: '100%' }, textAlign: { sm: 'left', md: 'left' }}}>

              {/* <Typography variant="h5" component="h2" gutterBottom
      style={{ color: '#233563', marginBottom: '1px' }}>
                Event Title
              </Typography>
              <Typography variant="body1" color="text.secondary">
                First Reference: Dance Marathon at the University of Florida
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Second Reference: Dance Marathon at UF
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Social Media and Marketing Reference: DM at UF
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Not Acceptable: DM UF, UF DM, DM @ UF
              </Typography> */}

              {/* Hospital Title Section */}
              <Typography variant="h5" component="h2" gutterBottom
      style={{ color: '#233563', marginTop: '25px', marginBottom: '1px' }}>
                Hospital Title
              </Typography>
              <Typography variant="body1" color="text.secondary">
                First Reference: UF Health Shands Children’s Hospital
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Second Reference: UF Health Shands
              </Typography>

              {/* Children and their Families Section */}
              <Typography variant="h5" component="h2" gutterBottom
      style={{ color: '#233563', marginTop: '25px', marginBottom: '1px' }}>
                Children and their Families
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Miracle Family
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Miracle Children
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Miracle Child (0-12)
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Miracle Teen (13+)
              </Typography>
              <Typography variant="body1" color="text.secondary">
                CMN Ambassador (18+)
              </Typography>

              <Typography variant="h5" component="h2" gutterBottom
      style={{ color: '#233563', marginTop: '25px', marginBottom: '1px' }}>
                Positions
              </Typography>
              <ul className="custom-bullet-points">
                <li>
                  <Typography variant="body1" sx={{ fontWeight: 'bold', color: '#e2883c' }}>
                    Overall Directors
                  </Typography>
                  <ul style={{ paddingLeft: '20px' }}>
                    <li>
                      <Typography variant="body1" component="span" color="text.secondary">
                        Executive Director
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="body1" component="span" color="text.secondary">
                        Operations Manager
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="body1" component="span" color="text.secondary">
                        Marketing Manager
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="body1" component="span" color="text.secondary">
                        Membership Manager
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="body1" component="span" color="text.secondary">
                        Finance Manager
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="body1" component="span" color="text.secondary">
                        Dancer Engagement
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="body1" component="span" color="text.secondary">
                        Digital Marketing
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="body1" component="span" color="text.secondary">
                        Family Relations
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="body1" component="span" color="text.secondary">
                        Finance
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="body1" component="span" color="text.secondary">
                        Leadership Development
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="body1" component="span" color="text.secondary">
                        Marathon Relations
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="body1" component="span" color="text.secondary">
                        Merchandise
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="body1" component="span" color="text.secondary">
                        Morale
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="body1" component="span" color="text.secondary">
                        Multimedia
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="body1" component="span" color="text.secondary">
                        Organization Relations
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="body1" component="span" color="text.secondary">
                        Outreach
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="body1" component="span" color="text.secondary">
                        Partnerships
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="body1" component="span" color="text.secondary">
                        Productions
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="body1" component="span" color="text.secondary">
                        Public Relations
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="body1" component="span" color="text.secondary">
                        Recruitment
                      </Typography>
                    </li>
                  </ul>
                </li>

                <li>
                  <Typography variant="body1" sx={{ fontWeight: 'bold', color: '#e2883c', marginTop: 2 }}>
                    Assistant Directors & Captains
                  </Typography>
                  <ul style={{ paddingLeft: '20px' }}>
                  <li>
                      <Typography variant="body1" component="span" color="text.secondary">
                        Dancer Engagement
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="body1" component="span" color="text.secondary">
                        Digital Marketing
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="body1" component="span" color="text.secondary">
                        Family Relations
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="body1" component="span" color="text.secondary">
                        Finance
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="body1" component="span" color="text.secondary">
                        Leadership Development
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="body1" component="span" color="text.secondary">
                        Marathon Relations
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="body1" component="span" color="text.secondary">
                        Merchandise
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="body1" component="span" color="text.secondary">
                        Morale
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="body1" component="span" color="text.secondary">
                        Multimedia
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="body1" component="span" color="text.secondary">
                        Organization Relations
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="body1" component="span" color="text.secondary">
                        Outreach
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="body1" component="span" color="text.secondary">
                        Partnerships
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="body1" component="span" color="text.secondary">
                        Productions
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="body1" component="span" color="text.secondary">
                        Public Relations
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="body1" component="span" color="text.secondary">
                        Recruitment
                      </Typography>
                    </li>
                  </ul>
                </li>

                <li>
                  <Typography variant="body1" sx={{ fontWeight: 'bold', color: '#233563', marginTop: 2 }}>
                    Emerging Leaders
                  </Typography>
                </li>
                <li>
                  <Typography variant="body1" sx={{ fontWeight: 'bold', color: '#233563' }}>
                    Kirstyn's Krew
                  </Typography>
                </li>
                <li>
                  <Typography variant="body1" sx={{ fontWeight: 'bold', color: '#233563' }}>
                    Ambassadors
                  </Typography>
                </li>
                <li>
                  <Typography variant="body1" sx={{ fontWeight: 'bold', color: '#233563' }}>
                    Miracle Makers
                  </Typography>
                </li>
                <li>
                  <Typography variant="body1" sx={{ fontWeight: 'bold', color: '#233563' }}>
                    Fundraisers
                  </Typography>
                </li>
                <li>
                  <Typography variant="body1" sx={{ fontWeight: 'bold', color: '#233563' }}>
                    Dance Marathon Alumni (DMA)
                  </Typography>
                </li>
              </ul>
            </Box>
        </Container>
      <Footer />
    </ThemeProvider>
  );
}
