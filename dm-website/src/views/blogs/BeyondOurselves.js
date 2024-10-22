import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Container, Typography, Grid } from "@mui/material";
import AppAppBar from "../../components/AppAppBar";
import Footer from "../../components/Footer";
import ScrollToTop from "../../components/ScrollToTop";
import PageHero from "../../components/PageHero";
import getLPTheme from "../../getLPTheme";

import Image1 from "../../assets/images/blogpics/Gemme_Madilyn_ME_9239.jpg";
import Image2 from "../../assets/images/blogpics/SydneyC_Closing-7.jpg";
import Image3 from "../../assets/images/blogpics/AD_Buchholz-106.jpg";

export default function BeyondThisMoment() {
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
      <PageHero imageUrl={Image1} title="Beyond Ourselves" />

      <Container
        sx={{
          pt: { xs: 2, sm: 6 },
          pb: { xs: 2, sm: 8 },
          width: "50%",
          display: "flex",
          flexDirection: "column",
          gap: { xs: 2, sm: 3 },
          color: "white",
        }}
      >
        <Box sx={{ textAlign: "left" }}>
          <Typography variant="body1" color='text.secondary' paragraph>
            The founding members of Dance Marathon at The University of Florida came together thirty-one years ago with a common purpose of fighting pediatric illness. Each of these students shared the same passion that our students share today. For thirty-one years, we have been looking #BeyondOurselves. We encouraged others to look beyond themselves, and we've broken barriers to continue this fight to end pediatric illness for over three decades.
          </Typography>
          <Typography variant="body1" color='text.secondary' paragraph>
            There are countless reasons why we choose to make a difference; why we stand for 26.2 hours, why thousands of people receive texts, emails, and phone calls from us. We have many things in common with one another, with the most important reason being our purpose. Every student at Dance Marathon at UF joined this organization to experience these moments that support something #BeyondOurselves.
          </Typography>

          <Typography variant="body1" color='text.secondary' paragraph>
            Our team is wholeheartedly fueled by passion for our cause. Fighting beyond ourselves doesn’t just mean learning a 7 minute line dance or posting graphics on social media. Fighting beyond ourselves means more birthdays, more graduations, and more moments for children battling pediatric illness.
          </Typography>

          <Typography variant="body1" color='text.secondary' paragraph>
            We encouraged you to live #BeyondThisMoment during the summer. We now encourage you to reminisce for a second. Chances are, most of these moments involve your closest friends, your family, or other loved ones. The truth is that none of these moments would be possible without thinking #BeyondOurselves. We look beyond ourselves so more children have moments like the ones you recalled just now, the ones that you hold so close to your heart. 
          </Typography>

          <Typography variant="body1" color='text.secondary' paragraph>
            This summer, we invite you to imagine the future generations. We urge you to think of someone you fight for. We welcome you to search beyond yourself, and join the family at Dance Marathon at the University of Florida. We look #BeyondOurselves, will you?
          </Typography>

          <Grid 
            container 
            alignItems="center"  // Aligns items vertically centered
            justifyContent="center"  // Pushes images to left and right
            sx={{ marginTop: 5, marginBottom: 5, gap: 10 }}  // Adjust gap and height
            >
            {/* Left Image */}
            <Grid item>
                <Box
                component="img"
                src={Image2}
                alt="Miracle Families"
                sx={{
                    maxWidth: 400, // Control image size
                    borderRadius: 4,
                    display: "block", // Ensures image behaves like a block element
                }}
                />
            </Grid>

            {/* Right Image */}
            <Grid item>
                <Box
                component="img"
                src={Image3}
                alt="Hospital Renovation"
                sx={{
                    maxWidth: 400, // Control image size
                    borderRadius: 4,
                    display: "block",
                }}
                />
            </Grid>
            </Grid>


          <Typography
            variant="h6"
            sx={{ fontStyle: "italic", mt: 2, color: "text.secondary" }}
          >
            Rylie Pryor
          </Typography>

          <Typography
            variant="subtitle1"
            sx={{ fontWeight: "bold", mt: 1, color: "text.secondary" }}
          >
            Dance Marathon at The University of Florida
          </Typography>

          <Typography variant="body2" color='text.secondary'>
            Public Relations, Assistant Director of External Communication
          </Typography>
        </Box>
      </Container>

      <Footer />
    </ThemeProvider>
  );
}
