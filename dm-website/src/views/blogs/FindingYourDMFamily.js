import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Container, Typography, Grid, Link, Divider } from "@mui/material";
import AppAppBar from "../../components/AppAppBar";
import Footer from "../../components/Footer";
import ScrollToTop from "../../components/ScrollToTop";
import PageHero from "../../components/PageHero";
import getLPTheme from "../../getLPTheme";

import Image1 from "../../assets/images/blogpics/IMG_4402.jpg";
import Image2 from "../../assets/images/blogpics/IMG_4403.jpg";
import Image3 from "../../assets/images/blogpics/IMG_4404.jpg";

export default function BeyondThisMoment() {
  const [mode, setMode] = React.useState("light");
  const LPtheme = createTheme(getLPTheme(mode));

  const toggleColorMode = () => {
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeProvider theme={LPtheme}>
      <ScrollToTop />
      <CssBaseline />
      <AppAppBar mode={mode} toggleColorMode={toggleColorMode} />
      <PageHero imageUrl={Image1} title="Finding Your DM Family" />

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
            Each individual who gets involved in Dance Marathon at UF has their own skills, their own inspiration, and their own story. As DM recruitment week begins, we encourage you to explore what is important to you. Whether this is your first time hearing about our cause, or you first got involved as a Miracle Maker, Captain, Emerging Leader, or Ambassador, you have found a home in Dance Marathon.
          </Typography>
          <Typography variant="body1" color='text.secondary' paragraph>
            This organization isn't just a philanthropy, but a family. One of our 2025 Assistant Directors, Maya Vaidya, shared her experience with her Dance Marathon family. Coming from out of state, Maya was unsure of what she wanted to get involved in, but she wanted to “be a part of something bigger” than herself. She first heard about DM through a conversation with a friend and eventually found the Emerging Leaders Program before becoming a Captain. Maya remembered, “Everyone was talking about DM and how it's changed their life,” and she had to be a part of it. “I heard about it, I applied, I interviewed, and then I fell in love,” she explained.
          </Typography>

          <Typography variant="body1" color='text.secondary' paragraph>
            She quickly realized that the Emerging Leader Program combined leadership with undertones of philanthropy - two of her passions. The program allowed her to be in a cohort with around 20 other people and four Captains guiding her through the process. She recalled, “A month in, I had 20 new best friends. I felt like I had met my platonic soulmates.”
          </Typography>

          <Typography variant="body1" color='text.secondary' paragraph>
            A year later, Maya returned to DM as a Leadership Development Captain. She explained, “I wanted my ELP's to fall in love with DM as much as I did.” She wanted to be the role model that her Leadership Development Captains were to her, and was successful at that. “The way that the ELP Captains are able to orchestrate this community between 20 strangers is just so cool,” Maya said.
          </Typography>

          <Typography variant="body1" color='text.secondary' paragraph>
            Going from a Freshman that had no idea what DM was or how much it would impact her life, Maya found her family in the Emerging Leader Program. She said, “You come out of it knowing you had a hand in doing something special. It's so special to have that connection and see everyone blossom.” This experience is something formative for so many future Captains, and our community is excited to see the next generation of ELP's this year.
          </Typography>

          <Typography variant="body1" color='text.secondary' paragraph>
            We encourage you, whether you're unsure about DM or the plethora of organizations that UF has to offer, to take a step back and consider the Emerging Leader Program. A group of 20 strangers may soon become your best friends, your family, future captains, and change makers.
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
                    maxHeight: 500,
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
                    maxHeight: 500,
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
