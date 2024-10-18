// BlogDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';
import { Typography, Container, Box, CardMedia } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import AppAppBar from '../components/AppAppBar';
import getLPTheme from '../getLPTheme';
import Footer from '../components/Footer';
import ScrollToTop from "../components/ScrollToTop";
import PageHero from '../components/PageHero';
import HeroPic from "../assets/images/overalls/SW.jpg"

const blogData = [];

const BlogDetails = () => {
  const [mode, setMode] = React.useState('light');
  const LPtheme = createTheme(getLPTheme(mode));

  const toggleColorMode = () => {
    setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const { id } = useParams();
  const blog = blogData.find((blog) => blog.id === parseInt(id));

  if (!blog) {
    return <Typography variant="h5">Blog not found</Typography>;
  }

  return (
    <ThemeProvider theme={LPtheme}>
      <ScrollToTop />
      <CssBaseline />
      <AppAppBar mode={mode} toggleColorMode={toggleColorMode} />

      {/* Hero Section */}
      <PageHero imageUrl={blog.images[0]} title={blog.title} />

      <Container
        maxWidth="lg"
        sx={{
          pt: { xs: 2, sm: 6 },
          pb: { xs: 2, sm: 8 },
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Box sx={{ my: 5, textAlign: 'left' }}>
          <Typography variant="h3" gutterBottom>
            {blog.title}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            Author: {blog.author} | Published: {blog.date}
          </Typography>

          {/* Render Content Dynamically */}
          {blog.content.split('\n').map((text, index) => (
            <Box key={index} sx={{ mb: 2 }}>
              {text.includes('Image:') ? (
                <>
                  <CardMedia
                    component="img"
                    height="400"
                    image={blog.images[index] || blog.images[0]}
                    alt={blog.title}
                    sx={{ my: 2 }}
                  />
                </>
              ) : (
                <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                  {text}
                </Typography>
              )}
            </Box>
          ))}
        </Box>
      </Container>

      <Footer />
    </ThemeProvider>
  );
};

export default BlogDetails;