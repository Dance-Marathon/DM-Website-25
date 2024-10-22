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

import Image1 from "../../assets/images/blogpics/DeBoerL_Closing-44.jpg";
import Image2 from "../../assets/images/blogpics/GonzalezS-3.jpg";
import Image3 from "../../assets/images/blogpics/Gemme_Madilyn_ME_6011.jpg";

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
      <PageHero imageUrl={Image1} title="Beyond This Moment" />

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
            Do you remember the moment when you first learned how to ride a bike?
          </Typography>
          <Typography variant="body1" color='text.secondary' paragraph>
            What about the moment when you met your best friend, got that job, got into college, or told someone that you loved them?
          </Typography>

          <Typography variant="body1" color='text.secondary' paragraph>
                Maybe the moment when you first felt true inspiration and passion? The moment when you faced hardship and prevailed? The moment where you fell down and got back up?
            </Typography>

          <Typography variant="body1" color='text.secondary' paragraph>
            Now, think of the moment, not so long ago, when our total reveal numbers were raised high - demonstrating how hard we fought all year. In those moments, passion and hope coursed through our organization, our campus, and our Miracle Families.
          </Typography>

          <Typography variant="body1" color='text.secondary' paragraph>
            These are the moments that surround us every day. These are the moments that will stick with us forever and become parts of our stories. These are the moments that remind us why we fight.
          </Typography>

          <Typography variant="body1" color='text.secondary' paragraph>
            This summer, as many college students are living “in the moment,” we encourage you to live #BeyondThisMoment.
          </Typography>

          <Typography variant="body1" color='text.secondary' paragraph>
            Living beyond the moment has been a part of our story at Dance Marathon at the University of Florida for over thirty-one years, and we will not stop now. The growth that this organization has experienced over these years has allowed us to make millions of miracles for the children at UF Health Shands Children's Hospital, including a hospital renovation that just broke ground.
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
