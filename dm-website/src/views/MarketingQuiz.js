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
import { Link as RouterLink} from "react-router-dom";

const originalQuestions = [
    {
      question: "Your phone storage is mostly...",
      answers: [
        { text: "Photos & videos", team: "Multimedia" },
        { text: "Screenshots of posts/messages", team: "Public Relations" },
        { text: "Canva files & design inspiration", team: "Digital Marketing" },
      ],
    },
    {
      question: "A project needs help. You volunteer to...",
      answers: [
        { text: "Film it.", team: "Multimedia" },
        { text: "Write about it.", team: "Public Relations" },
        { text: "Design/build it.", team: "Digital Marketing" },
      ],
    },
    {
      question: "Favorite Adobe program?",
      answers: [
        { text: "Premiere Pro", team: "Multimedia" },
        { text: "Express", team: "Public Relations" },
        { text: "Photoshop/Illustrator/Figma", team: "Digital Marketing" },
      ],
    },
    {
      question: "Your perfect assignment is...",
      answers: [
        { text: "Creating a cinematic recap.", team: "Multimedia" },
        { text: "Running social media.", team: "Public Relations" },
        { text: "Designing an entire campaign.", team: "Digital Marketing" },
      ],
    },
    {
      question: "Which compliment means the most to you?",
      answers: [
        { text: '"Amazing video."', team: "Multimedia" },
        { text: '"You communicate so well."', team: "Public Relations" },
        { text: '"That design looks professional."', team: "Digital Marketing" },
      ],
    },
    {
      question: "Pick a career.",
      answers: [
        { text: "Videographer", team: "Multimedia" },
        { text: "PR Specialist", team: "Public Relations" },
        { text: "UX Designer", team: "Digital Marketing" },
      ],
    },
    {
      question: "You notice...",
      answers: [
        { text: "Lighting", team: "Multimedia" },
        { text: "Messaging", team: "Public Relations" },
        { text: "Layout", team: "Digital Marketing" },
      ],
    },
    {
      question: "Which project sounds the most fun?",
      answers: [
        {
          text: "Following a Miracle Family around with a camera all day to tell their story.",
          team: "Multimedia",
        },
        {
          text: "Writing captions, interviewing participants, and sharing updates throughout the event.",
          team: "Public Relations",
        },
        {
          text: "Designing graphics, running screens, and managing the event technology.",
          team: "Digital Marketing",
        },
      ],
    },
    {
      question: "Favorite creative outlet?",
      answers: [
        { text: "Photography", team: "Multimedia" },
        { text: "Writing", team: "Public Relations" },
        { text: "Graphic Design", team: "Digital Marketing" },
      ],
    },
    {
      question: "What excites you most?",
      answers: [
        { text: "Storytelling", team: "Multimedia" },
        { text: "Connecting people", team: "Public Relations" },
        { text: "Solving design problems", team: "Digital Marketing" },
      ],
    },
    {
      question: "Which sounds the most fun?",
      answers: [
        { text: "Making a hype reel", team: "Multimedia" },
        { text: "Interviewing Miracle Families", team: "Public Relations" },
        { text: "Designing event graphics", team: "Digital Marketing" },
      ],
    },
    {
      question: "What's your workspace?",
      answers: [
        { text: "Camera bag", team: "Multimedia" },
        { text: "Notebook", team: "Public Relations" },
        { text: "Dual monitors", team: "Digital Marketing" },
      ],
    },
    {
      question: "What's your biggest strength?",
      answers: [
        { text: "Creativity", team: "Multimedia" },
        { text: "Communication", team: "Public Relations" },
        { text: "Innovation", team: "Digital Marketing" },
      ],
    },
    {
      question: "What's your dream Main Event job?",
      answers: [
        { text: "Capture memories", team: "Multimedia" },
        { text: "Tell the story", team: "Public Relations" },
        { text: "Run the technology", team: "Digital Marketing" },
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
        Multimedia: 0,
        "Public Relations": 0,
        "Digital Marketing": 0,
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
        case "Multimedia":
        return {
          team: "Multimedia",
          description: "The Multimedia Team is responsible for capturing and editing all photography and videography content for Dance Marathon at the University of Florida throughout the year.",
        };
    
        case "Public Relations":
          return {
            team: "Public Relations",
            description: "The Public Relations Team is responsible for representing Dance Marathon at UF and engaging within and outside of the organization by communicating to members, faculty, staff, families and the broader Gainesville community. This team maintains DM at UF’s reputation through strategic outreach and communication, using resources such as social media, press relations and more.",
          };
  
        case "Digital Marketing":
          return {
            team: "Digital Marketing",
            description: "The Digital Marketing Team is composed of graphic designers and software developers responsible for making portfolio-quality materials that bring the Dance Marathon at UF brand to life. Technology Captains are responsible for either the development/maintenance of the website or mobile app. Design Captains are responsible for the creation of all print/web design needs such as all DM at UF merchandise, social media graphics, newsletters and more using Adobe platforms. During the Main Event, Captains run the tech booth, which includes managing multiple screens inside the O’Dome, sending app notifications, coordinating audio/visual feeds, and creating in-event graphics.",
          };
    
        default:
          return {
            team: "Multimedia",
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