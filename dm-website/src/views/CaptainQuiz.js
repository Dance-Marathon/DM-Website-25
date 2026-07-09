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

  const questions = [
    {
      question: "Placeholder Question 1",
      answers: [
        "Answer A",
        "Answer B",
        "Answer C",
        "Answer D",
      ],
    },
    {
      question: "Placeholder Question 2",
      answers: [
        "Answer A",
        "Answer B",
        "Answer C",
        "Answer D",
      ],
    },
    {
      question: "Placeholder Question 3",
      answers: [
        "Answer A",
        "Answer B",
        "Answer C",
        "Answer D",
      ],
    },
  ];
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
        <Typography variant="h6" color= "#233563" gutterBottom>
        Answer a few questions and we'll match you with the perfect captain team!
        </Typography>
        {currentQuestion < questions.length ? (
        <>
            <Card sx={{ borderRadius: 4 }}>
            <CardContent>
                <Typography variant="h5" color= "#233563" gutterBottom>
                Question {currentQuestion + 1} of {questions.length}
                </Typography>

                <Typography variant="h6" color= "#233563" sx={{ mb: 3 }}>
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
                    value={answer}
                    control={<Radio />}
                    label={answer}
                    sx={{
                        "& .MuiFormControlLabel-label": {
                          color: "#233563",
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
                sx={{
                    backgroundColor: "#4965a6",
                    color: "white",    
                    fontWeight: 600,
                    "&:hover": {
                    backgroundColor: "#233563",
                    color: "white",
                    },
                }}
                disabled={currentQuestion === 0}
                onClick={() => setCurrentQuestion(currentQuestion - 1)}
            >
                Back
            </Button>

            <Button
                sx={{
                    backgroundColor: "#4965a6",
                    color: "white",    
                    fontWeight: 600,
                    "&:hover": {
                    backgroundColor: "#233563",
                    color: "white",
                    },
                }}
                variant="contained" 
                disabled={!answers[currentQuestion]}
                onClick={() => {
                if (currentQuestion < questions.length - 1) {
                    setCurrentQuestion(currentQuestion + 1);
                } else {
                    setCurrentQuestion(questions.length);
                }
                }}
            >
                {currentQuestion === questions.length - 1
                ? "See Results"
                : "Next"}
            </Button>
            </Box>
        </>
        ) : (
        <Typography
            variant="h4"
            sx={{
            textAlign: "center",
            mt: 4,
            color: "#233563",
            fontWeight: "bold",
            }}
        >
            You belong on the ___ Team!
        </Typography>
        )}
    </Container>
    <Footer />
    </ThemeProvider>
    );
}