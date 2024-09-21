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

// Sample data (in a real-world app, you may fetch this from an API)
const blogData = [
  {
    id: 1,
    title: 'The Future of Technology',
    content: `
      The technology landscape is constantly evolving. From AI and blockchain to quantum computing, the future holds exciting possibilities.
      
      Image: Future technology predictions show us an interconnected world with AI assistants, self-driving cars, and more. Below, we explore the rise of these technologies.
    `,
    author: 'John Doe',
    date: 'September 20, 2024',
    images: [
      HeroPic,
      'https://via.placeholder.com/800x400?text=Future+Technology+2',
    ],
  },
  {
    id: 2,
    title: 'The Power of AI',
    content: `
      AI is reshaping industries from healthcare to finance. With the rise of machine learning and neural networks, AI continues to unlock new potential.
      
      Image: Robots and AI applications in day-to-day tasks show how far we've come in automating processes.
    `,
    author: 'Jane Smith',
    date: 'August 14, 2024',
    images: [
      'https://via.placeholder.com/800x400?text=AI+Power+1',
      'https://via.placeholder.com/800x400?text=AI+Power+2',
    ],
  },
  {
    id: 3,
    title: 'Sustainability in Business',
    content: `
      Sustainability is no longer a buzzword but a core part of business strategies. The shift to renewable energy and green practices is becoming a competitive advantage for many firms.
      
      Image: Solar panels, electric vehicles, and other green technologies are driving the future of business.
    `,
    author: 'Michael Green',
    date: 'July 30, 2024',
    images: [
      'https://via.placeholder.com/800x400?text=Sustainability+1',
      'https://via.placeholder.com/800x400?text=Sustainability+2',
    ],
  },
];

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
      
      {/* Dynamically setting the hero title to the blog's title */}
      <PageHero imageUrl={blog.images[0]} title={blog.title} />

      <Container
        maxWidth="lg"
        sx={{
          pt: { xs: 2, sm: 6 },
          pb: { xs: 2, sm: 8 },
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center', // Center the container itself
        }}  
      >
        <Box sx={{ my: 5, textAlign: 'left' }}> {/* Adjusting content to justify left */}
          <Typography variant="h3" gutterBottom>
            {blog.title}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            Author: {blog.author} | Published: {blog.date}
          </Typography>

          {/* Displaying Blog Content with inline Images */}
          <Typography
            variant="body1"
            sx={{
              mt: 4,
              textAlign: 'left', // Justifying text to the left
            }}
          >
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
                    <Typography variant="body2" color="text.secondary">
                      {text.replace('Image:', '')}
                    </Typography>
                  </>
                ) : (
                  <Typography variant="body1">{text}</Typography>
                )}
              </Box>
            ))}
          </Typography>
        </Box>
      </Container>

      <Footer />
    </ThemeProvider>
  );
};

export default BlogDetails;
