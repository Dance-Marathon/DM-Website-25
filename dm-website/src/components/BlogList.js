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

import BlogPic from "../assets/images/pagepics/BlogsPic.png";

import BeyondThisMoment from "../assets/images/blogpics/DeBoerL_Closing-44.jpg";
import BeyondOurselves from "../assets/images/blogpics/Gemme_Madilyn_ME_9239.jpg";
import BeyondThisSummer from "../assets/images/blogpics/IMG_3478.jpg";
import BeyondThisGeneration from "../assets/images/blogpics/Gemme_Madilyn_ME_0951.jpg";
import FindingYourDMFamily from "../assets/images/blogpics/IMG_4402.jpg";
import CampusClash from "../assets/images/blogpics/CampusClashPic1.jpeg";
import ChildHealthDay from "../assets/images/blogpics/09C69520-7583-433B-894D-5D86EC5453FB.jpeg";
import MiracleMaker from "../assets/images/blogpics/miraclemaker.jpeg";

// Sample data for blogs
const blogs = [
  {
    id: 1,
    title: 'Beyond This Moment',
    author: 'Rylie Pryor',
    date: 'June 12, 2024',
    imageUrl: BeyondThisMoment,
    linkName: 'beyondthismoment',
  },
  {
    id: 2,
    title: 'Beyond Ourselves',
    author: 'Rylie Pryor',
    date: 'July 16, 2024',
    imageUrl: BeyondOurselves,
    linkName: 'beyondourselves',
  },
  {
    id: 3,
    title: 'Beyond This Summer',
    author: 'Lainey Shapiro',
    date: 'July 22, 2024',
    imageUrl: BeyondThisSummer,
    linkName: 'beyondthissummer',
  },
  {
    id: 4,
    title: 'Beyond This Generation',
    author: 'Anabella Fernandez',
    date: 'August 14, 2024',
    imageUrl: BeyondThisGeneration,
    linkName: 'beyondthisgeneration',
  },
  {
    id: 5,
    title: 'Finding Your DM Family',
    author: 'Rylie Pryor',
    date: 'September 6, 2024',
    imageUrl: FindingYourDMFamily,
    linkName: 'findingyourdmfamily',
  },
  {
    id: 6,
    title: 'As Our Campuses CLash, Our Causes Unite',
    author: 'Rylie Pryor',
    date: 'October 4, 2024',
    imageUrl: CampusClash,
    linkName: 'campusclash',
  },
  {
    id: 7,
    title: '#TheFirstChapters of Childhood',
    author: 'Sarah Abisror',
    date: 'October 11, 2024',
    imageUrl: ChildHealthDay,
    linkName: 'childhealthday',
  },
  {
    id: 8,
    title: 'What It Means To Be A Miracle Maker',
    author: 'Sofia Amoroso',
    date: 'October 16, 2024',
    imageUrl: MiracleMaker,
    linkName: 'miraclemaker',
  },
];

const reversedBlogs = [...blogs].reverse();

const BlogList = () => {

  const navigate = useNavigate(); // Use useNavigate for redirection

  const handleCardClick = (linkName) => {
    navigate(`/blog/${linkName}`); // Redirect to blog details on card click
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
      <PageHero imageUrl={BlogPic} title='Blog' />
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
      {reversedBlogs.map((blog) => (
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
            onClick={() => handleCardClick(blog.linkName)} // Navigate on click
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
