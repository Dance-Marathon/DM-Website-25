import * as React from "react";
import { useParams } from "react-router-dom";
import blogs from "../../data/blogData";
import { CssBaseline, Box, Container, Typography, Grid } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import AppAppBar from "../../components/AppAppBar";
import Footer from "../../components/Footer";
import ScrollToTop from "../../components/ScrollToTop";
import PageHero from "../../components/PageHero";
import getLPTheme from "../../getLPTheme";
import BlogNavigation from "../../components/BlogNavigation";

export default function BlogTemplate() {
  const { linkName } = useParams();
  const blog = blogs.find((b) => b.linkName === linkName);

  const [mode, setMode] = React.useState(
    localStorage.getItem("theme") || "light",
  );

  const LPtheme = createTheme(getLPTheme(mode));

  const toggleColorMode = () => {
    setMode((prev) => {
      const newMode = prev === "dark" ? "light" : "dark";
      localStorage.setItem("theme", newMode); // Store the new mode in localStorage
      return newMode;
    });
  };

  if (!blog) {
    return <Typography>Blog not found.</Typography>;
  }

  return (
    <ThemeProvider theme={LPtheme}>
      <ScrollToTop />
      <CssBaseline />
      <AppAppBar mode={mode} toggleColorMode={toggleColorMode} />

      <PageHero imageUrl={blog.heroImage} title={blog.title} />

      <Container
        sx={{
          pt: 6,
          pb: 8,
          width: { xs: "90%", md: "50%" },
          color: "white",
        }}
      >
        <Box>
          {blog.content.map((paragraph, index) => (
            <Typography
              key={index}
              variant="body1"
              color="text.secondary"
              paragraph
              paddingBottom={1}
            >
              {paragraph}
            </Typography>
          ))}

          <Grid container justifyContent="center" spacing={4}>
            {blog.images.map((img, i) => (
              <Grid
                item
                xs={12}
                sm={6}
                key={i}
                sx={{
                  display: "flex",
                  justifyContent: "center", // horizontal centering
                  alignItems: "center", // vertical centering
                }}
              >
                <Box
                  component="img"
                  src={img}
                  sx={{
                    width: "100%",
                    borderRadius: 4,
                  }}
                />
              </Grid>
            ))}
          </Grid>

          <Box sx={{ mt: 3 }}>
            <Typography
              variant="h6"
              sx={{
                fontStyle: "italic",
                color: "text.secondary",
              }}
            >
              {blog.author}
            </Typography>

            {blog.organization && (
              <Typography
                variant="subtitle1"
                sx={{
                  fontWeight: "bold",
                  color: "text.secondary",
                }}
              >
                {blog.organization}
              </Typography>
            )}

            {blog.role && (
              <Typography variant="body2" color="text.secondary">
                {blog.role}
              </Typography>
            )}
          </Box>
        </Box>

        <BlogNavigation />
      </Container>

      <Footer />
    </ThemeProvider>
  );
}
