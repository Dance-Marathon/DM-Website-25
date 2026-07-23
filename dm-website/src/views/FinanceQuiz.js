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
    Link
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
      question: "You have one month to raise money.",
      answers: [
        { text: "Call businesses.", team: "Sponsorships" },
        { text: "Sell merch.", team: "Merchandise" },
        { text: "Build a fundraising campaign.", team: "Finance" },
        { text: "Partner with schools.", team: "Marathon Relations" },
      ],
    },
    {
      question: "Pick a skill.",
      answers: [
        { text: "Networking", team: "Sponsorships" },
        { text: "Creativity", team: "Merchandise" },
        { text: "Strategy", team: "Finance" },
        { text: "Mentoring", team: "Marathon Relations" },
      ],
    },
    {
      question: "Which sounds most exciting?",
      answers: [
        { text: "Closing a sponsorship deal.", team: "Sponsorships" },
        { text: "Launching apparel.", team: "Merchandise" },
        { text: "Watching fundraising totals climb.", team: "Finance" },
        { text: "Visiting Mini Marathons.", team: "Marathon Relations" },
      ],
    },
    {
      question: "Favorite conversation?",
      answers: [
        { text: "Business owner", team: "Sponsorships" },
        { text: "Customer", team: "Merchandise" },
        { text: "Fundraiser", team: "Finance" },
        { text: "Classmate", team: "Marathon Relations" },
      ],
    },
    {
      question: "Dream project?",
      answers: [
        { text: "Corporate partnership", team: "Sponsorships" },
        { text: "Clothing collection", team: "Merchandise" },
        { text: "Incentive challenge", team: "Finance" },
        { text: "Mini Marathon", team: "Marathon Relations" },
      ],
    },
    {
      question: "Biggest strength?",
      answers: [
        { text: "Confidence", team: "Sponsorships" },
        { text: "Creativity", team: "Merchandise" },
        { text: "Analysis", team: "Finance" },
        { text: "Encouragement", team: "Marathon Relations" },
      ],
    },
    {
      question: "Your desk has...",
      answers: [
        { text: "Business cards", team: "Sponsorships" },
        { text: "Mood boards", team: "Merchandise" },
        { text: "Excel", team: "Finance" },
        { text: "Travel schedule", team: "Marathon Relations" },
      ],
    },
    {
      question:
        "If someone gave you $5,000 to invest into Dance Marathon, what would you do first?",
      answers: [
        {
          text: "Meet with local businesses to turn it into even more support.",
          team: "Sponsorships",
        },
        {
          text: "Create merchandise everyone wants to buy.",
          team: "Merchandise",
        },
        {
          text: "Build a fundraising campaign that doubles the impact.",
          team: "Finance",
        },
        {
          text: "Invest in helping more Mini Marathons grow.",
          team: "Marathon Relations",
        },
      ],
    },
    {
      question: "You enjoy...",
      answers: [
        { text: "Pitching ideas", team: "Sponsorships" },
        { text: "Branding", team: "Merchandise" },
        { text: "Tracking progress", team: "Finance" },
        { text: "Teaching", team: "Marathon Relations" },
      ],
    },
    {
      question: "Favorite win?",
      answers: [
        { text: "New sponsor", team: "Sponsorships" },
        { text: "Merch sells out", team: "Merchandise" },
        { text: "Fundraising record", team: "Finance" },
        { text: "Successful Mini", team: "Marathon Relations" },
      ],
    },
    {
      question: "Ideal workday?",
      answers: [
        { text: "Meetings", team: "Sponsorships" },
        { text: "Designing", team: "Merchandise" },
        { text: "Planning", team: "Finance" },
        { text: "Traveling", team: "Marathon Relations" },
      ],
    },
    {
      question: "Pick a phrase.",
      answers: [
        { text: "Build partnerships.", team: "Sponsorships" },
        { text: "Wear the mission.", team: "Merchandise" },
        { text: "Fuel fundraising.", team: "Finance" },
        { text: "Inspire the next generation.", team: "Marathon Relations" },
      ],
    },
    {
      question: "What motivates you?",
      answers: [
        { text: "Relationships", team: "Sponsorships" },
        { text: "Creativity", team: "Merchandise" },
        { text: "Results", team: "Finance" },
        { text: "Legacy", team: "Marathon Relations" },
      ],
    },
    {
      question:
        "Five years from now, which achievement sounds the coolest?",
      answers: [
        {
          text: "Landing a huge corporate partnership.",
          team: "Sponsorships",
        },
        {
          text: "Seeing hundreds of people wearing merchandise you helped create.",
          team: "Merchandise",
        },
        {
          text: "Watching a fundraising campaign you designed break records.",
          team: "Finance",
        },
        {
          text: "Growing Mini Marathons across Florida.",
          team: "Marathon Relations",
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
        Sponsorships: 0,
        Merchandise: 0,
        Finance: 0,
        "Marathon Relations": 0,
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
        case "Sponsorships":
        return {
          team: "Sponsorships",
          description: "The Sponsorships Team serves as the main point of connection between Dance Marathon at UF and the business community, working with companies in Gainesville and beyond to secure monetary donations. These contributions support both our operational needs and directly benefit our fundraising efforts for UF Health Shands Children’s Hospital. Through strategic outreach and consistent business engagement, Sponsorships Captains ensure DM at UF’s partners feel valued and connected to the cause, providing them with tailored incentives and recognition that reflect their impact. This team provides the essential financial foundation that enables our organization to grow and expand our impact.",
        };
    
        case "Merchandise":
          return {
            team: "Merchandise",
            description: "The Merchandise Team is responsible for the ideation and distribution of all official Dance Marathon at the University of Florida merchandise, including clothing and accessories. Merchandise Captains help guide the creative direction of merchandise by creating mood boards to ensure alignment with the organization’s brand and fundraising goals. Captains also work at the merchandise store at events throughout the year, including fundraising pushes such as Transform Today, the Turlington Plaza store, high school Mini Marathons and the Main Event.",
          };
  
        case "Finance":
          return {
            team: "Finance",
            description: "The Finance Team supports the execution of the overall fundraising strategy for Dance Marathon at the University of Florida. Working under the Assistant Directors of Fundraising Innovation & Incentives, Internal Development, and Financial Planning, Captains help bring initiatives to life. Captains will develop and implement creative incentives, supporting participants and teams and staffing key efforts such as fundraising support stations and the incentives table during major events. They play an active role in encouraging participation, generating new ideas, and ensuring campaigns are engaging and appealing to participants. Captains also assist with tracking fundraising progress, contributing to monthly reports on fundraising performance and sharing new, encouraging ideas to further participant impact. Through mentorship, collaboration and development opportunities, Captains grow as leaders while fostering a positive and connected team culture.",
          };
        
        case "Marathon Relations":
          return {
            team: "Marathon Relations",
            description: "The Marathon Relations team is responsible for collaborating, advising and growing Dance Marathon at the University of Florida’s partner high school programs, known as Mini Marathons. They energize and support our “Minis” by educating students on Children’s Miracle Network and Dance Marathon at UF’s history and culture. They meet with and support our high school partner programs throughout the year, all culminating in their Mini Marathon during ‘Mini Season.’ Mini Season consists of a few weeks in the spring semester where Marathon Relations collaborates with various other teams to attend all Mini Marathons each weekend.",
          };
    
        default:
          return {
            team: "Sponsorships",
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