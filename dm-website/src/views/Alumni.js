import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import AppAppBar from '../components/AppAppBar';
import getLPTheme from '../getLPTheme';
import Footer from '../components/Footer';
import { Container, Typography, Box, Link } from '@mui/material';
import ScrollToTop from "../components/ScrollToTop";
import PageHero from '../components/PageHero';
import AlumniPic from "../assets/images/pagepics/AlumniPic.jpg";

export default function Alumni() {
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

  return (
    <ThemeProvider theme={LPtheme}>
      <ScrollToTop />
      <CssBaseline />
      <AppAppBar mode={mode} toggleColorMode={toggleColorMode} />
      <PageHero imageUrl={AlumniPic} title='Alumni' />
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

          {/* <Typography variant="h4" color='#233563' gutterBottom>About</Typography> */}
          <Typography variant="body1" color="text.secondary" paragraph>
            Since 1995, Dance Marathon at UF has raised over $31 million for UF Health Shands Children's Hospital, our local Children’s Miracle Network Hospital. Thanks to your dedication and support throughout your college years, we have become the most successful student-run philanthropy in the southeastern United States.
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            Dance Marathon at UF knows that the Gator Nation is everywhere. Formed in 2013, Dance Marathon at UF Alumni gives alumni across the country the opportunity to continue to give back and stay involved with their alma mater.
          </Typography>
        </Box>

        <Box mt={0}>
          <Typography variant="h5" color='#233563' gutterBottom>Get Involved!</Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            Dance Marathon at UF Alumni continue to support our cause and spread our movement, even after they graduate. 
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            Follow us on <Link href="https://www.instagram.com/dmatufalumni" target="_blank">Instagram</Link>, and be sure to like the official page for <Link href="https://www.facebook.com/dmatufalumni" target="_blank">Dance Marathon at UF Alumni on Facebook</Link> to stay connected with the rest of your DM at UF Alumni family.
          </Typography>
        </Box>

        <Box mt={0}>
          <Typography variant="body1" color="text.secondary" paragraph>
            Join or support the <Link href="https://events.dancemarathon.com/index.cfm?fuseaction=donorDrive.team&teamID=70397" target="_blank">Dance Marathon Alumni Fundraising Team</Link>.
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary', marginBottom: 2 }}>
          If you have any questions, please feel free to email them to {' '}
              <Link href="mailto:alumni@floridadm.org" sx={{ color: '#1a73e8' }}>
                alumni@floridadm.org
              </Link>.
            </Typography>
        </Box>

        {/* <Box mt={4}>
          <Typography variant="h4" color='#233563' gutterBottom>Lifetime DMA Membership</Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            This lifetime membership provides the following benefits for a one-time fee of $40. If you are signing up for the DMA for the first time, you will receive a complimentary Event Package outlined underneath the membership benefits.{' '}
            <Link href="https://dance-marathon-at-uf-510104.square.site/product/2022-dance-marathon-alumni-lifetime-membership/1?cs=true&cst=custom" target="_blank">Purchase the Lifetime DMA Miracle Membership here.</Link>
          </Typography>

          <Typography variant="h6" color='#e2883c' gutterBottom>Membership Benefits Include:</Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            - Monthly E-Newsletter updates <br />
            - Preferred Access at the event to the DMA VIP room <br />
            - Opportunity to participate as a DMA Dancer* at the event <br />
            - Voting and leadership opportunities for the DMA Board <br />
            - Inclusion and invites to regionally hosted DMA events <br />
            - First year members get a complimentary Event Package
          </Typography>
          <Typography variant="body2" color="text.secondary">*DMA Dancer registration fees apply.</Typography>
        </Box>

        <Box mt={4}>
          <Typography variant="h6" color='#e2883c' gutterBottom>Event Package:</Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            DMA members can purchase an exclusive event package to enhance their experience during the Dance Marathon weekend in spring. This package is ideal for those who plan to attend Dance Marathon at UF and can be purchased for $40 up to one month before the event. If this is your first year signing up for the DMA, you will automatically receive a complimentary Event Package included in your Lifetime Miracle Membership.{' '}
            <Link href="https://dance-marathon-at-uf-510104.square.site/product/2022-dance-marathon-alumni-lifetime-membership/1?cs=true&cst=custom" target="_blank">Purchase the DMA Event Package here.</Link>
          </Typography>

          <Typography variant="body1" color="text.secondary" paragraph>
            The Event Package includes:
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            - Opportunity to participate in a behind-the-scenes hospital tour <br />
            - Opt-in to receive the DMA event t-shirt** <br />
            - Discounted Miracle Gala tickets <br />
            - Tickets to the DMA Brunch during the event <br />
            - Ability to receive fundraising incentives during the event <br />
            - Access to the Family Room at the event
          </Typography>
          <Typography variant="body2" color="text.secondary">*DMA event t-shirt opt-in includes a direct mailing option for those members unable to attend the event.</Typography>
        </Box>


        <Typography variant="h4" color='#233563' sx={{marginTop: 4}}>
          FAQ
        </Typography>
        <FAQ
          question="I have never been a part of the DMA before and just registered for the first time. What membership do I have?"
          answer="As a first-time DMA member, your $40 fee makes you a Lifetime Miracle Member and provides you with a complimentary Event Package. The following year, you will have to pay $40 for the Event Package if you so choose."
        />
        <FAQ
          question="What if I registered for the DMA in a previous year (2015-2021) and never renewed?"
          answer={
            <>
              You are already a Lifetime Miracle Member! Should you want an Event Package, you will have to purchase one for $40. The link to purchase is available{' '}
              <Link href="https://www.link-to-purchase.com" target="_blank" rel="noopener noreferrer">
                here
              </Link>.
            </>
          }
        /> */}

      </Container>
      <Footer />
    </ThemeProvider>
  );
}
