import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import AppAppBar from "../components/AppAppBar";
import getLPTheme from "../getLPTheme";
import Footer from "../components/Footer";
import {
    Container,
    Typography,
    Card,
    CardContent,
    FormControlLabel,
    Radio,
    RadioGroup,
    Button,
    Box,
    Link,
  } from "@mui/material";
import ScrollToTop from "../components/ScrollToTop";
import PageHero from "../components/PageHero";
import LazyLoad from "react-lazyload";
import CaptainPic from "../assets/images/pagepics/CaptainsPic.jpg";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link as RouterLink } from "react-router-dom";

const originalQuestions = [
    {
      question: "Before a big event you're...",
      answers: [
        { text: "Making playlists.", team: "Morale" },
        { text: "Setting everything up.", team: "Event Management" },
        { text: "Ordering supplies.", team: "Hospitality" },
        { text: "Greeting guests.", team: "Family Relations" },
      ],
    },
    {
      question: "Which role sounds most fun?",
      answers: [
        { text: "Hype leader", team: "Morale" },
        { text: "Producer", team: "Event Management" },
        { text: "Host", team: "Hospitality" },
        { text: "Family buddy", team: "Family Relations" },
      ],
    },
    {
      question: "Friends rely on you for...",
      answers: [
        { text: "Energy", team: "Morale" },
        { text: "Organization", team: "Event Management" },
        { text: "Taking care of everyone", team: "Hospitality" },
        { text: "Compassion", team: "Family Relations" },
      ],
    },
    {
      question: "Dream event?",
      answers: [
        { text: "Pep rally", team: "Morale" },
        { text: "Concert", team: "Event Management" },
        { text: "Dinner", team: "Hospitality" },
        { text: "Family picnic", team: "Family Relations" },
      ],
    },
    {
      question: "Which part of a big event excites you the most?",
      answers: [
        {
          text: "The energy once everyone arrives.",
          team: "Morale",
        },
        {
          text: "Watching months of planning come together.",
          team: "Event Management",
        },
        {
          text: "Making sure every guest is taken care of.",
          team: "Hospitality",
        },
        {
          text: "Seeing Miracle Families smiling all day.",
          team: "Family Relations",
        },
      ],
    },
    {
      question: "Favorite compliment?",
      answers: [
        { text: '"You\'re so fun."', team: "Morale" },
        { text: '"Everything ran smoothly."', team: "Event Management" },
        { text: '"You thought of everything."', team: "Hospitality" },
        { text: '"You made us feel loved."', team: "Family Relations" },
      ],
    },
    {
      question: "During Main Event...",
      answers: [
        { text: "Dancing", team: "Morale" },
        { text: "Managing logistics", team: "Event Management" },
        { text: "Delivering supplies", team: "Hospitality" },
        { text: "Hanging with Miracle Families", team: "Family Relations" },
      ],
    },
    {
      question: "Which movie role?",
      answers: [
        { text: "Cheerleader", team: "Morale" },
        { text: "Director", team: "Event Management" },
        { text: "Host", team: "Hospitality" },
        { text: "Caregiver", team: "Family Relations" },
      ],
    },
    {
      question: "Favorite planning style?",
      answers: [
        { text: "Spontaneous fun", team: "Morale" },
        { text: "Detailed schedules", team: "Event Management" },
        { text: "Checklists", team: "Hospitality" },
        { text: "People first", team: "Family Relations" },
      ],
    },
    {
      question: "Biggest strength?",
      answers: [
        { text: "Enthusiasm", team: "Morale" },
        { text: "Problem solving", team: "Event Management" },
        { text: "Service", team: "Hospitality" },
        { text: "Empathy", team: "Family Relations" },
      ],
    },
    {
      question: "At the end of Main Event, what would make you feel the most fulfilled?",
      answers: [
        {
          text: "Knowing you kept everyone's energy high for 26.2 hours.",
          team: "Morale",
        },
        {
          text: "Knowing the event ran exactly as planned.",
          team: "Event Management",
        },
        {
          text: "Knowing every participant felt cared for and supported.",
          team: "Hospitality",
        },
        {
          text: "Knowing Miracle Families created lifelong memories.",
          team: "Family Relations",
        },
      ],
    },
    {
      question: "Pick a quote.",
      answers: [
        { text: "Bring the energy.", team: "Morale" },
        { text: "Make it happen.", team: "Event Management" },
        { text: "Serve others.", team: "Hospitality" },
        { text: "Love people well.", team: "Family Relations" },
      ],
    },
    {
      question: "Pick one event to go to!",
      answers: [
        { text: "Themed event", team: "Morale" },
        { text: "A day with a programmed itinerary", team: "Event Management" },
        { text: "Corporate Event", team: "Hospitality" },
        { text: "Volunteering at your local elementary school's field day", team: "Family Relations" },
      ],
    },
    {
      question: "Your ideal impact is...",
      answers: [
        { text: "Inspire participants.", team: "Morale" },
        { text: "Create unforgettable events.", team: "Event Management" },
        { text: "Care for everyone.", team: "Hospitality" },
        { text: "Change Miracle Families' lives.", team: "Family Relations" },
      ],
    },
  ];
  
export default function CaptainQuiz() {
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

  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const [answers, setAnswers] = React.useState({});

  const shuffleArray = (array) => {
    const shuffled = [...array];
  
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
  
    return shuffled;
  };

  const questions = React.useMemo(
    () =>
      originalQuestions.map((question) => ({
        ...question,
        answers: shuffleArray(question.answers),
      })),
    []
  );

  const getResult = () => {
      const counts = {
        Morale: 0,
        "Event Management": 0,
        Hospitality: 0,
        "Family Relations": 0,
      };
    
      Object.values(answers).forEach((team) => {
        counts[team]++;
      });
    
      const max = Math.max(...Object.values(counts));
    
      const tiedTeams = Object.keys(counts).filter(
        (team) => counts[team] === max
      );
    
      const winner =
        tiedTeams[Math.floor(Math.random() * tiedTeams.length)];
    
      switch (winner) {
        case "Morale":
        return {
          team: "Morale",
          description: "The Morale Team is responsible for keeping the spirit of Dance Marathon at UF energetic, positive and meaningful throughout the entire year. Morale Captains create the linedance, lead theme hours at the Main Event and plan and execute events such as Moralloween and Morale Madness. Morale Captains also consistently engage with participants through outreach, hype, and personal connection, driving fundraising and maintaining excitement across the organization.",
        };
    
        case "Event Management":
          return {
            team: "Event Management",
            description: "The Event Management Team is responsible for all logistics and entertainment throughout the year and during the Main Event. Event Management Captains play an integral role in setting up and striking Dance Marathon at UF events, while also managing and supporting entertainment acts. This team focuses on bringing ideas to life while ensuring a seamless and engaging experience for participants.",
          };
  
        case "Hospitality":
          return {
            team: "Hospitality",
            description: "The Hospitality Team is responsible for planning, coordinating and securing a continuous and consistent flow of in-kind donations for Miracle Makers, Internal Members and Miracle Families throughout the year. Hospitality Captains oversee all donation-related logistics for all Dance Marathon at UF events, ensuring that all participant needs are met. They also work to establish partnerships with local businesses to obtain in-kind contributions and host benefit nights, such as Hospitality Nights, supporting the organization’s fundraising efforts while fostering community engagement.",
          };
        
        case "Family Relations":
          return {
            team: "Family Relations",
            description: "The Family Relations Team is composed of Captains that serve as liaisons between the Dance Marathon at UF community and the Miracle Families. Captains are paired with at least one Miracle Family and their responsibilities include maintaining consistent contact with their paired Miracle Family, facilitating cause-connection between their Family and the community, and organizing events between the Miracle Families and participating Organizations. Captains will attend monthly Family Fun Days, design and build the Family Room for the Main Event, and facilitate activities and entertainment for the Miracle Families throughout the entirety of the year.",
          };
    
        default:
          return {
            team: "Morale",
            description: "",
          };
      }
    };
  
    const [result, setResult] = React.useState(null);

  return (
    <ThemeProvider theme={LPtheme}>
      <ScrollToTop />
      <CssBaseline />
      <AppAppBar mode={mode} toggleColorMode={toggleColorMode} />
      <LazyLoad height={200} offset={100} once>
        <PageHero imageUrl={CaptainPic} title="Captain Quiz" />
      </LazyLoad>
      <Container
        sx={{
          pt: { xs: 4, sm: 6 },
          pb: { xs: 4, sm: 8 },
          display: "flex",
          flexDirection: "column",
          alignItems: "left",
          gap: { xs: 2, sm: 3 },
        }}
      >
        <Typography component="p" variant="h6" gutterBottom sx={(theme) => ({
    color: theme.palette.mode === "dark" ? "#FFFFFF" : "#233563",
  })}>
        Which Dance Marathon Team is your Perfect Match?
        </Typography>
        {currentQuestion < questions.length ? (
        <>
            <Card sx={{ borderRadius: 4 }}>
            <CardContent>
                <Typography component="p" variant="h5" gutterBottom sx={(theme) => ({
    color: theme.palette.mode === "dark" ? "#FFFFFF" : "#233563",
  })}>
                Question {currentQuestion + 1} of {questions.length}
                </Typography>

                <Typography component="p" variant="h6" gutterBottom sx={(theme) => ({
    color: theme.palette.mode === "dark" ? "#FFFFFF" : "#233563", mb:3
  })}>
                {questions[currentQuestion].question}
                </Typography>

                <RadioGroup
                value={answers[currentQuestion] || ""}
                onChange={(e) =>
                    setAnswers({
                    ...answers,
                    [currentQuestion]: e.target.value,
                    })
                }
                >
                {questions[currentQuestion].answers.map((answer, index) => (
                    <FormControlLabel
                    key={index}
                    value={answer.team}
                    control={<Radio />}
                    label={answer.text}
                    sx={{
                        "& .MuiFormControlLabel-label": {
                          color: mode === "dark" ? "#FFFFFF" : "#233563",
                        },
                      }}
                    />
                ))}
                </RadioGroup>
            </CardContent>
            </Card>
            <Box
            sx={{
                display: "flex",
                justifyContent: "space-between",
                mt: 3,
            }}
            >
            <Button
              variant="outlined"
              startIcon={<ArrowBackIcon />}
              disabled={currentQuestion === 0}
              onClick={() => setCurrentQuestion(currentQuestion - 1)}
              sx={{
                color: "#E2883C",
                borderColor: "#E2883C",
                backgroundColor: "rgba(198, 106, 26, 0.08)",
                "&:hover": {
                  borderColor: "#E2883C",
                  backgroundColor: "rgba(198, 106, 26, 0.2)",
                  color: "#EB9F68",
                },
              }}
            >
              Back
            </Button>

            <Button
              variant="outlined"
              endIcon={<ArrowForwardIcon />}
              disabled={!answers[currentQuestion]}
                onClick={() => {
                  if (currentQuestion < questions.length - 1) {
                    setCurrentQuestion(currentQuestion + 1);
                  } else {
                    setResult(getResult());
                    setCurrentQuestion(questions.length);
                  }
                }}
              sx={{
                color: "#E2883C",
                borderColor: "#E2883C",
                backgroundColor: "rgba(198, 106, 26, 0.08)",
                "&:hover": {
                  borderColor: "#E2883C",
                  backgroundColor: "rgba(198, 106, 26, 0.2)",
                  color: "#EB9F68",
                },
              }}
            >
              {currentQuestion === questions.length - 1
                ? "See Results"
                : "Next"}
            </Button>
            </Box>
        </>
        ) : (
          <Box textAlign="center" mt={4}>
          <Typography
            component="p"
            variant="h3"
            sx={{
              color: mode === "dark" ? "#FFFFFF" : "#233563",
              fontWeight: "bold",
              mb: 2,
            }}
          >
            {result?.team} is your dream team!
          </Typography>
        
          <Typography
                    component="p"
                      variant="h6"
                      sx={{
                        color: mode === "dark" ? "#FFFFFF" : "#233563",
                        maxWidth: 700,
                        mx: "auto",
                        mb: 4,
                      }}
                    >
                      {result?.description}
                      <br />
                      <br />
                      If you have any questions about getting involved, please email{" "}
                      <Link
  href="mailto:leichler@floridadm.org"
  sx={{
    color: mode === "dark" ? "#fff" : "#233563",
    fontWeight: "bold",
    textDecoration: "none",
    "&:visited": {
      color: mode === "dark" ? "#fff" : "#233563",
    },
    "&:hover": {
      color: "#3B82F6",
    },
  }}
>
  leichler@floridadm.org
</Link>
                      !
                  </Typography>
          <Button
                      component={Link}
                      to="/captains"
                      variant="outlined"
                      sx={{
                        color: "#E2883C",
                        borderColor: "#E2883C",
                        backgroundColor: "rgba(198, 106, 26, 0.08)",
                        "&:hover": {
                          borderColor: "#E2883C",
                          backgroundColor: "rgba(198, 106, 26, 0.2)",
                          color: "#EB9F68",
                        },
                      }}
                    >
                      Back to Captain Teams page
                    </Button>
        </Box>
        )}
    </Container>
    <Footer />
    </ThemeProvider>
    );
}