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
      question: "A new member walks in alone...",
      answers: [
        { text: "Mentor them.", team: "Leadership Development" },
        { text: "Introduce them around.", team: "Member Development" },
        { text: "Convince them to join.", team: "Recruitment" },
      ],
    },
    {
      question: "Your leadership style is...",
      answers: [
        { text: "Teacher", team: "Leadership Development" },
        { text: "Supporter", team: "Member Development" },
        { text: "Motivator", team: "Recruitment" },
      ],
    },
    {
      question: "Favorite activity?",
      answers: [
        { text: "Workshops", team: "Leadership Development" },
        { text: "Small groups", team: "Member Development" },
        { text: "Tabling", team: "Recruitment" },
      ],
    },
    {
      question: "Best compliment?",
      answers: [
        { text: '"You helped me grow."', team: "Leadership Development" },
        { text: '"You always check in."', team: "Member Development" },
        { text: '"You got me involved."', team: "Recruitment" },
      ],
    },
    {
      question: "Pick a job.",
      answers: [
        { text: "Leadership Coach", team: "Leadership Development" },
        { text: "Advisor", team: "Member Development" },
        { text: "Recruiter", team: "Recruitment" },
      ],
    },
    {
      question: "Group projects...",
      answers: [
        { text: "Develop everyone.", team: "Leadership Development" },
        { text: "Support everyone.", team: "Member Development" },
        { text: "Find more people.", team: "Recruitment" },
      ],
    },
    {
      question: "What motivates you?",
      answers: [
        { text: "Helping future leaders.", team: "Leadership Development" },
        { text: "Helping individuals succeed.", team: "Member Development" },
        { text: "Growing the organization.", team: "Recruitment" },
      ],
    },
    {
      question: "Favorite conversation?",
      answers: [
        { text: "Career goals", team: "Leadership Development" },
        { text: "Personal check-ins", team: "Member Development" },
        { text: "Why they should join", team: "Recruitment" },
      ],
    },
    {
      question: "Ideal event?",
      answers: [
        { text: "Leadership retreat", team: "Leadership Development" },
        { text: "Family bonding", team: "Member Development" },
        { text: "Info session", team: "Recruitment" },
      ],
    },
    {
      question: "Biggest strength?",
      answers: [
        { text: "Mentoring", team: "Leadership Development" },
        { text: "Relationship building", team: "Member Development" },
        { text: "Networking", team: "Recruitment" },
      ],
    },
    {
      question: "You're happiest when...",
      answers: [
        { text: "Someone gains confidence.", team: "Leadership Development" },
        { text: "Someone feels included.", team: "Member Development" },
        { text: "Someone signs up.", team: "Recruitment" },
      ],
    },
    {
      question: "Which phrase speaks to you most?",
      answers: [
        { text: "Develop leaders.", team: "Leadership Development" },
        { text: "Build community.", team: "Member Development" },
        { text: "Expand the mission.", team: "Recruitment" },
      ],
    },
    {
      question: "Favorite challenge?",
      answers: [
        { text: "Teaching", team: "Leadership Development" },
        { text: "Supporting", team: "Member Development" },
        { text: "Recruiting", team: "Recruitment" },
      ],
    },
    {
      question: "Someone new joins Dance Marathon. What's your first instinct?",
      answers: [
        {
          text: "Teach them everything and help them become a future leader.",
          team: "Leadership Development",
        },
        {
          text: "Check in with them throughout the year and make sure they feel supported.",
          team: "Member Development",
        },
        {
          text: "Introduce them to everyone and convince all their friends to join too.",
          team: "Recruitment",
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
        "Leadership Development": 0,
        "Member Development": 0,
        "Recruitment": 0,
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
        case "Leadership Development":
        return {
          team: "Leadership Development",
          description: "The Leadership Development Team is responsible for overseeing and running the Emerging Leaders Program. This team will focus on developing and integrating students with minimal previous Dance Marathon experience into the Dance Marathon at UF community through tangible exposure to Dance Marathon’s various leadership roles.",
        };
    
        case "Member Development":
          return {
            team: "Member Development",
            description: "The Member Development Team is responsible for overseeing the Ambassador and Miracle Maker lifecycle. Member Development Captains will be paired with Ambassadors and assist them in their organization engagement and communication and fundraising efforts, serving as the liaison between the assigned organization and Dance Marathon at UF. This team will execute all Ambassador and Miracle Maker-specific events including cause connection, general body meetings, bonding and Main Event programming.",
          };
  
        case "Recruitment":
          return {
            team: "Recruitment",
            description: "The Recruitment Team is responsible for representing Dance Marathon at UF in the most positive light by spreading our message across campus and throughout the Gainesville community. This team fosters relationships with existing organizations while building new connections with different student groups through outreach efforts. Recruitment Captains plan and execute a yearlong recruitment strategy that includes tabling opportunities, classroom and organization presentations, flyering and engagement with academic colleges and campus partners. The team oversees all informational sessions and events aimed at acquiring new members, while also promoting awareness of Dance Marathon at UF’s mission. Additionally, the Recruitment Team coordinates and executes all visitor affairs during the Main Event, ensuring a welcoming and engaging experience for all guests.",
          };
    
        default:
          return {
            team: "Leadership Development",
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
                    component={RouterLink}
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