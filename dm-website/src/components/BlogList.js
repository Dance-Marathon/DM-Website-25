// BlogList.js
import { Card, CardContent, CardMedia } from '@mui/material';
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import AppAppBar from '../components/AppAppBar';
import getLPTheme from '../getLPTheme';
import Footer from '../components/Footer';
import { Container, Typography, Grid} from '@mui/material';
import ScrollToTop from "../components/ScrollToTop";
import PageHero from '../components/PageHero';
import { useNavigate } from 'react-router-dom';

import HeroPic from "../assets/images/overalls/SW.jpg";



// Sample data for blogs
const blogs = [
  {
    id: 1,
    title: 'The Future of Technology',
    description: 'Exploring the advancements and innovations in tech.',
    author: 'John Doe',
    date: 'September 20, 2024',
    imageUrl: HeroPic // Image URL
  },
  {
    id: 2,
    title: 'The Power of AI',
    description: 'How AI is transforming industries across the world.',
    author: 'Jane Smith',
    date: 'August 14, 2024',
    imageUrl: 'https://via.placeholder.com/300x200?text=AI+Power', // Image URL
  },
  {
    id: 3,
    title: 'Sustainability in Business',
    description: 'Why companies are focusing more on green practices.',
    author: 'Michael Green',
    date: 'July 30, 2024',
    imageUrl: 'https://via.placeholder.com/300x200?text=Sustainability', // Image URL
  },
];

const BlogList = () => {

  const navigate = useNavigate(); // Use useNavigate for redirection

  const handleCardClick = (id) => {
    navigate(`/blog/${id}`); // Redirect to blog details on card click
  };

  const [mode, setMode] = React.useState('light');
  const LPtheme = createTheme(getLPTheme(mode));

  const toggleColorMode = () => {
    setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ThemeProvider theme={LPtheme}>
      <ScrollToTop />
      <CssBaseline />
      <AppAppBar mode={mode} toggleColorMode={toggleColorMode} />
      <PageHero imageUrl={HeroPic} title='Blogs' />
      <Container
        sx={{
          pt: { xs: 2, sm: 6 },
          pb: { xs: 2, sm: 8 },
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'left',
          gap: { xs: 2, sm: 3 },
        }}  
      ></Container>
 <Grid container spacing={3} sx={{ padding: 3 }} justifyContent="center">
      {blogs.map((blog) => (
        <Grid item xs={12} sm={6} md={3.5} key={blog.id}>
          <Card
            sx={{
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              cursor: 'pointer', // Make the card look clickable
              transition: 'transform 0.2s ease, box-shadow 0.2s ease',
              '&:hover': {
                transform: 'translateY(-4px)',
                boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
              },
            }}
            onClick={() => handleCardClick(blog.id)} // Navigate on click
          >
            <CardMedia
              component="img"
              height="200"
              image={blog.imageUrl}
              alt={blog.title}
            />
            <CardContent>
              <Typography variant="h5" component="div" gutterBottom>
                {blog.title}
              </Typography>
              <Typography variant="body2" color="text.secondary" gutterBottom>
                {blog.description}
              </Typography>
              <Typography variant="subtitle2" color="text.primary">
                Author: {blog.author}
              </Typography>
              <Typography variant="subtitle2" color="text.secondary">
                Published: {blog.date}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
      <Footer />
    </ThemeProvider>
  );
};

export default BlogList;
