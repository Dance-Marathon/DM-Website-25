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
  } from "@mui/material";
import ScrollToTop from "../components/ScrollToTop";
import PageHero from "../components/PageHero";
import LazyLoad from "react-lazyload";
import CaptainPic from "../assets/images/pagepics/CaptainsPic.jpg";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link } from "react-router-dom";

  const originalQuestions = [
    {
      question: "You have a free Saturday. What's your ideal way to spend it?",
      answers: [
        { text: "Designing something creative or making content", team: "Marketing" },
        { text: "Hanging out with a big group and meeting new people", team: "Membership" },
        { text: "Running errands, organizing plans, crossing things off a list", team: "Finance" },
        { text: "Planning a party or hosting friends", team: "Operations" },
      ],
    },
    {
      question: "At a group project, you're usually...",
      answers: [
        { text: "Making the presentation look amazing", team: "Marketing" },
        { text: "Keeping everyone motivated", team: "Membership" },
        { text: "Creating timelines and budgets", team: "Finance" },
        { text: "Making sure everything actually happens", team: "Operations" },
      ],
    },
    {
      question: "Your friends describe you as...",
      answers: [
        { text: "Creative", team: "Marketing" },
        { text: "Friendly", team: "Membership" },
        { text: "Reliable", team: "Finance" },
        { text: "Energetic", team: "Operations" },
      ],
    },
    {
      question: "Which sounds the most satisfying?",
      answers: [
        { text: "Watching something you created go viral", team: "Marketing" },
        { text: "Helping someone feel included", team: "Membership" },
        { text: "Reaching a fundraising goal", team: "Finance" },
        { text: "Seeing an event run perfectly", team: "Operations" },
      ],
    },
    {
      question: "Pick a Disney character.",
      answers: [
        { text: "Rapunzel", team: "Marketing" },
        { text: "Anna", team: "Membership" },
        { text: "Tiana", team: "Finance" },
        { text: "Hercules", team: "Operations" },
      ],
    },
    {
      question: "If you won $10,000 for DM, what's your first thought?",
      answers: [
        { text: "Let's tell everyone!", team: "Marketing" },
        { text: "Think about how it'll inspire people.", team: "Membership" },
        { text: "Track where every dollar goes.", team: "Finance" },
        { text: "Celebrate with an event.", team: "Operations" },
      ],
    },
    {
      question: "Which app do you open first?",
      answers: [
        { text: "Instagram", team: "Marketing" },
        { text: "GroupMe", team: "Membership" },
        { text: "Google Sheets", team: "Finance" },
        { text: "Calendar", team: "Operations" },
      ],
    },
    {
      question: "Your dream leadership role involves...",
      answers: [
        { text: "Sharing stories", team: "Marketing" },
        { text: "Building people", team: "Membership" },
        { text: "Building strategy", team: "Finance" },
        { text: "Building experiences", team: "Operations" },
      ],
    },
    {
      question: "Pick a campus location.",
      answers: [
        { text: "Library West", team: "Marketing" },
        { text: "Plaza of the Americas", team: "Membership" },
        { text: "Marston", team: "Finance" },
        { text: "O'Connell Center", team: "Operations" },
      ],
    },
    {
      question: "Which compliment makes you happiest?",
      answers: [
        { text: "“You're so creative.”", team: "Marketing" },
        { text: "“You make everyone feel welcome.”", team: "Membership" },
        { text: "“We couldn't have done this without you.”", team: "Finance" },
        { text: "“That event was incredible.”", team: "Operations" },
      ],
    },
    {
      question: "Which superpower would you choose?",
      answers: [
        { text: "Mind reading", team: "Marketing" },
        { text: "Instant friendship", team: "Membership" },
        { text: "Predict the future", team: "Finance" },
        { text: "Teleportation", team: "Operations" },
      ],
    },
    {
      question: "During the Main Event you'd rather...",
      answers: [
        { text: "Capture memorable moments.", team: "Marketing" },
        { text: "Meet participants.", team: "Membership" },
        { text: "Watch fundraising totals climb.", team: "Finance" },
        { text: "Be behind the scenes making everything happen.", team: "Operations" },
      ],
    },
    {
      question: "Pick a motto.",
      answers: [
        { text: "Create it.", team: "Marketing" },
        { text: "Connect it.", team: "Membership" },
        { text: "Improve it.", team: "Finance" },
        { text: "Make it happen.", team: "Operations" },
      ],
    },
    {
      question: "If your friends were planning a surprise birthday for someone, what job would you naturally take?",
      answers: [
        {
          text: "Designing invitations, making TikToks, and creating decorations.",
          team: "Marketing",
        },
        {
          text: "Making sure everyone feels included and excited to come.",
          team: "Membership",
        },
        {
          text: "Handling the budget, RSVPs, and keeping everything organized.",
          team: "Finance",
        },
        {
          text: "Setting everything up the day of and making sure everything runs smoothly.",
          team: "Operations",
        },
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
      Marketing: 0,
      Membership: 0,
      Finance: 0,
      Operations: 0,
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
      case "Marketing":
      return {
        team: "Marketing",
        description: "Take the Marketing quiz to find your dream team!",
        link: "/marketingquiz",
      };
  
      case "Membership":
        return {
          team: "Membership",
          description: "Take the Membership quiz to find your dream team!",
          link: "/membershipquiz",
        };

      case "Finance":
        return {
          team: "Finance",
          description: "Take the Finance quiz to find your dream team!",
          link: "/financequiz",
        };

      case "Operations":
        return {
          team: "Operations",
          description: "Take the Operations quiz to find your dream team!",
          link: "/operationsquiz",
        };
  
      default:
        return {
          team: "Marketing",
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
        Which Dance Marathon Branch is your Perfect Match?
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
    color: theme.palette.mode === "dark" ? "#FFFFFF" : "#233563", mb:3,
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
            It looks like you belong in the {result?.team} Branch!
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
          </Typography>
          <Button
            component={Link}
            to={result?.link}
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
            {result?.team} Quiz
          </Button>
        </Box>
        )}
    </Container>
    <Footer />
    </ThemeProvider>
    );
}