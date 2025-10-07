import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Container, Typography, Grid, Button } from "@mui/material";
import AppAppBar from "../../components/AppAppBar";
import Footer from "../../components/Footer";
import ScrollToTop from "../../components/ScrollToTop";
import PageHero from "../../components/PageHero";
import getLPTheme from "../../getLPTheme";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import LazyLoad from "react-lazyload";

// How to Add a Blog
// 1. Change all comments in here with text from blog
// 2. Go to /src/index.js and add <Route> with path to the blog like the others
// 3. Go to /src/components/BlogList.js and add blog to list with same formatting as above

// Add all images to dm-website/src/assets/images/blogpics in a new folder with the title of the blog
// Import images here and add any more if needed
import Image1 from "../../assets/images/blogpics/FollowThePromise/FollowThePromise1.jpg";

// Change name to Blog Name
export default function FollowThePromise() {
  const [mode, setMode] = React.useState(() => {
    return localStorage.getItem("theme") || "light";
  });
  const LPtheme = createTheme(getLPTheme(mode));

  const toggleColorMode = () => {
    setMode((prev) => {
      const newMode = prev === "dark" ? "light" : "dark";
      localStorage.setItem("theme", newMode);
      return newMode;
    });
  };
  return (
    <ThemeProvider theme={LPtheme}>
      <ScrollToTop />
      <CssBaseline />
      <AppAppBar mode={mode} toggleColorMode={toggleColorMode} />
      <LazyLoad height={200} offset={100} once>
        <PageHero imageUrl={Image1} title="@FollowThePromise" />{" "}
        {/* Change blog name here */}
      </LazyLoad>

      <Container
        sx={{
          pt: { xs: 4, sm: 6 },
          pb: { xs: 4, sm: 8 },
          width: "50%",
          display: "flex",
          flexDirection: "column",
          gap: { xs: 2, sm: 3 },
          color: "white",
        }}
      >
        <Box sx={{ textAlign: "left" }}>
          <Typography variant="body1" color="text.secondary" paragraph>
            What moves us forward can’t always be measured or defined. It’s a
            quiet pull, a reason that lives deep inside us. It’s one that asks
            for more than we thought we could give yet somehow makes us want to
            give all we can anyway. A promise.
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            What’s unique about a promise is that each one is personal.
            Powerful, perhaps even all-consuming, but entirely yours. You carry
            it in your decisions: in the way you show up and in the things you
            choose to fight for. A promise gives you a reason to take the next
            step, even when the way forward isn’t clear.
          </Typography>

          <Typography variant="body1" color="text.secondary" paragraph>
            Promises aren’t made lightly. They are built in moments of
            commitment, held together by shared belief and carried by action.
            For us, the action of showing up in every conversation, every event
            and every push to make a difference moves us closer to the change
            we’re walking toward.
          </Typography>

          <Typography variant="body1" color="text.secondary" paragraph>
            Every step we take, we take together. The moments we create, the
            impact we build and the lives we stand beside are grounded in a
            shared journey.
          </Typography>

          <Typography variant="body1" color="text.secondary" paragraph>
            We all made a promise—to ourselves, to each other and to the
            patients and families who need us.
          </Typography>

          <Typography variant="body1" color="text.secondary" paragraph>
            Keeping a promise isn’t about choosing the easy road. Moving through
            the turns we didn’t see coming, the stretches that feel endless and
            the moments that ask us to dig deeper strengthens the thread that
            holds us together across roles, space and time.
          </Typography>

          <Typography variant="body1" color="text.secondary" paragraph>
            No one walks this road alone. We follow together, building on the
            work of those who came before us and creating a path for those who
            will follow next.
          </Typography>

          <Typography variant="body1" color="text.secondary" paragraph>
            This year, we will keep that promise. We’ll show up. We’ll fight for
            progress. We’ll walk the hard roads.
          </Typography>

          <Typography variant="body1" color="text.secondary" paragraph>
            <b>We will #FollowThePromise. </b>
          </Typography>

          <Typography variant="body1" color="text.secondary" paragraph>
            Together.
          </Typography>

          <Grid
            container
            alignItems="center"
            justifyContent="center"
            sx={{ marginTop: 5, marginBottom: 5, gap: 10 }}
          >
            <Grid item>
              <LazyLoad height={200} offset={100} once>
                <Box
                  component="img"
                  src={Image1}
                  alt="Follow The Promise"
                  sx={{
                    maxWidth: 400,
                    borderRadius: 4,
                    display: "block",
                  }}
                />
              </LazyLoad>
            </Grid>
          </Grid>

          {/* Add any additional Grids as needed for more images */}

          <Typography
            variant="h6"
            sx={{ fontStyle: "italic", mt: 2, color: "text.secondary" }}
          >
            Sofia Amoroso {/* Change author name */}
          </Typography>

          <Typography
            variant="subtitle1"
            sx={{ fontWeight: "bold", mt: 1, color: "text.secondary" }}
          >
            Dance Marathon at The University of Florida
          </Typography>

          <Typography variant="body2" color="text.secondary">
            Communications and Public Relations, Overall Director{" "}
            {/* Change position name */}
          </Typography>
        </Box>
        <Grid
          container
          alignItems="center"
          justifyContent="space-between"
          sx={{ mt: 4 }}
        >
          <Grid item>
            <Button
              variant="outlined"
              startIcon={<ArrowBackIcon />}
              onClick={() =>
                (window.location.href = "/blog/togetherwe")
              } /* Complete Step 2 in list above and then change link to previous blog url from index.js ^*/
              sx={{
                color: "primary.main",
                borderColor: "white",
                "&:hover": {
                  borderColor: "primary.main",
                  color: "primary.main",
                },
              }}
            >
              Previous Blog
            </Button>
          </Grid>

          {/* If this is no longer most recent blog, uncomment below and change url to next blog */}

          {/* <Grid item>
            <Button
              variant="outlined"
              endIcon={<ArrowForwardIcon />}
              onClick={() =>
                (window.location.href = "/blog/findingyourdmfamily")
              }
              sx={{
                color: "primary.main",
                borderColor: "white",
                "&:hover": {
                  borderColor: "primary.main",
                  color: "primary.main",
                },
              }}
            >
              Next Blog
            </Button>
          </Grid> */}
        </Grid>
      </Container>
      <Footer />
    </ThemeProvider>
  );
}
