// BlogList.js
import { Card, CardContent, CardMedia } from "@mui/material";
import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import AppAppBar from "../components/AppAppBar";
import getLPTheme from "../getLPTheme";
import Footer from "../components/Footer";
import { Container, Typography, Grid } from "@mui/material";
import ScrollToTop from "../components/ScrollToTop";
import PageHero from "../components/PageHero";
import { useNavigate } from "react-router-dom";

import BlogPic from "../assets/images/pagepics/BlogsPic.jpg";

import BeyondThisMoment from "../assets/images/blogpics/BeyondThisMoment/BeyondThisMoment1.jpg";
import BeyondOurselves from "../assets/images/blogpics/BeyondOurselves/BeyondOurselves1.jpg";
import BeyondThisSummer from "../assets/images/blogpics/BeyondThisSummer/BeyondSummer1.jpg";
import BeyondThisGeneration from "../assets/images/blogpics/BeyondThisGeneration/BeyondThisGen1.jpg";
import FindingYourDMFamily from "../assets/images/blogpics/DMFamily/DMFamily1.jpg";
import CampusClash from "../assets/images/blogpics/CampusClash/CampusClash1.jpg";
import ChildHealthDay from "../assets/images/blogpics/ChildHealthDay/CHDBox.jpg";
import MiracleMaker from "../assets/images/blogpics/MiracleMaker/MMBox.jpg";
import Thankfulness from "../assets/images/blogpics/Thankfulness/ThankfulnessBox.jpg";
import GiftOfHope from "../assets/images/blogpics/GiftOfHope/GiftOfHope1.jpg";
import BehingTheScenes from "../assets/images/blogpics/BehindTheScenes/BehindTheScenesBox.jpg";
import YesToMiracles from "../assets/images/blogpics/YesToMiracles/Yes1.jpg";
import LifelineOfLaughter from "../assets/images/blogpics/LifelineOfLaughter/LifelineBox.jpg";
import BeyondTomorrow from "../assets/images/blogpics/BeyondTomorrow/BT1.jpg";
import FeelTheMagic from "../assets/images/blogpics/FeelTheMagic/FTM1.jpg";
import Spark from "../assets/images/blogpics/Spark/Spark1.jpg";

const blogs = [
  {
    id: 1,
    title: "Beyond This Moment",
    author: "Rylie Pryor",
    date: "June 12, 2024",
    imageUrl: BeyondThisMoment,
    linkName: "beyondthismoment",
  },
  {
    id: 2,
    title: "Beyond Ourselves",
    author: "Rylie Pryor",
    date: "July 16, 2024",
    imageUrl: BeyondOurselves,
    linkName: "beyondourselves",
  },
  {
    id: 3,
    title: "Beyond This Summer",
    author: "Lainey Shapiro",
    date: "July 22, 2024",
    imageUrl: BeyondThisSummer,
    linkName: "beyondthissummer",
  },
  {
    id: 4,
    title: "Beyond This Generation",
    author: "Anabella Fernandez",
    date: "August 14, 2024",
    imageUrl: BeyondThisGeneration,
    linkName: "beyondthisgeneration",
  },
  {
    id: 5,
    title: "Finding Your DM Family",
    author: "Rylie Pryor",
    date: "September 6, 2024",
    imageUrl: FindingYourDMFamily,
    linkName: "findingyourdmfamily",
  },
  {
    id: 6,
    title: "As Our Campuses Clash, Our Causes Unite",
    author: "Rylie Pryor",
    date: "October 4, 2024",
    imageUrl: CampusClash,
    linkName: "campusclash",
  },
  {
    id: 7,
    title: "#TheFirstChapters of Childhood",
    author: "Sarah Abisror",
    date: "October 11, 2024",
    imageUrl: ChildHealthDay,
    linkName: "childhealthday",
  },
  {
    id: 8,
    title: "What It Means To Be A Miracle Maker",
    author: "Sofia Amoroso",
    date: "October 16, 2024",
    imageUrl: MiracleMaker,
    linkName: "miraclemaker",
  },
  {
    id: 9,
    title: "Thankfulness in Times of Transformation",
    author: "Elizabeth Mallard",
    date: "November 26, 2024",
    imageUrl: Thankfulness,
    linkName: "thankfulness",
  },
  {
    id: 10,
    title: "Giving the Gift Of Hope",
    author: "Rylie Pryor",
    date: "December 4, 2024",
    imageUrl: GiftOfHope,
    linkName: "giftofhope",
  },
  {
    id: 11,
    title: "Behind the Scenes Magic: How Miracles Happen",
    author: "Taylor Dean",
    date: "December 16, 2024",
    imageUrl: BehingTheScenes,
    linkName: "behindthescenes",
  },
  {
    id: 12,
    title: "Say Yes to Making Miracles",
    author: "Taylor Dean",
    date: "January 28, 2025",
    imageUrl: YesToMiracles,
    linkName: "yestomiracles",
  },
  {
    id: 13,
    title: "The Lifeline of Laughter",
    author: "Grey Chapin",
    date: "February 4, 2025",
    imageUrl: LifelineOfLaughter,
    linkName: "lifelineoflaughter",
  },
  {
    id: 14,
    title: "Beyond Tomorrow",
    author: "Rylie Pryor",
    date: "February 18, 2025",
    imageUrl: BeyondTomorrow,
    linkName: "beyondtomorrow",
  },
  {
    id: 15,
    title: "Feel The Magic",
    author: "Tori Kitchens",
    date: "June 14, 2025",
    imageUrl: FeelTheMagic,
    linkName: "feelthemagic",
  },
  {
    id: 16,
    title: "A Spark: The Beginning for Olivia Knier",
    author: "Tori Kitchens",
    date: "September 2, 2025",
    imageUrl: Spark,
    linkName: "a-spark",
  },

];

const reversedBlogs = [...blogs].reverse();

const BlogList = () => {
  const navigate = useNavigate(); // Use useNavigate for redirection

  const handleCardClick = (linkName) => {
    navigate(`/blog/${linkName}`); // Redirect to blog details on card click
  };

  const [mode, setMode] = React.useState(() => {
    // Retrieve the stored theme from localStorage or default to 'dark'
    return localStorage.getItem("theme") || "light";
  });
  const LPtheme = createTheme(getLPTheme(mode));

  const toggleColorMode = () => {
    setMode((prev) => {
      const newMode = prev === "dark" ? "light" : "dark";
      localStorage.setItem("theme", newMode); // Store the new mode in localStorage
      return newMode;
    });
  };

  return (
    <ThemeProvider theme={LPtheme}>
      <ScrollToTop />
      <CssBaseline />
      <AppAppBar mode={mode} toggleColorMode={toggleColorMode} />
      <PageHero imageUrl={BlogPic} title="Blog" />
      <Grid container spacing={3} sx={{ padding: 5 }} justifyContent="center">
        {reversedBlogs.map((blog) => (
          <Grid item xs={12} sm={6} md={3.5} key={blog.id}>
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                cursor: "pointer", // Make the card look clickable
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
                "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
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
                <Typography
                  variant="h5"
                  component="div"
                  color="primary"
                  gutterBottom
                >
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
