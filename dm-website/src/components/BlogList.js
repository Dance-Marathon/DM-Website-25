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
import BlogPic from "../assets/images/pagepics/BlogsPic.png";

// Sample data for blogs
const blogs = [
  {
    id: 1,
    title: 'Finding Your DM Family',
    author: 'Rylie Pryor',
    date: 'September 6, 2024',
    imageUrl: HeroPic
  },
  {
    id: 2,
    title: 'Beyond This Generation',
    author: 'Anabella Fernandez',
    date: 'August 14, 2024',
    imageUrl: HeroPic,
  },
  {
    id: 3,
    title: 'Beyond This Summer',
    author: 'Lainey Shapiro',
    date: 'July 22, 2024',
    imageUrl: HeroPic,
  },
  {
    id: 4,
    title: 'Beyond Ourselves',
    author: 'Rylie Pryor',
    date: 'July 16, 2024',
    imageUrl: HeroPic,
  },
  {
    id: 5,
    title: 'Beyond This Moment',
    author: 'Rylie Pryor',
    date: 'June 12, 2024',
    imageUrl: HeroPic,
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
      <PageHero imageUrl={BlogPic} title='Blogs' />
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
              <Typography variant="h5" component="div" color="primary" gutterBottom>
                {blog.title}
              </Typography>
              <Typography variant="subtitle2" color="text.secondary">
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
