import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import AppAppBar from "../components/AppAppBar";
import getLPTheme from "../getLPTheme";
import Footer from "../components/Footer";
import { Container, Typography, Box, Grid } from "@mui/material";
import ScrollToTop from "../components/ScrollToTop";
import PageHero from "../components/PageHero";
import LazyLoad from "react-lazyload";

import OurStoryHero from "../assets/images/pagepics/OurStoryHero.JPG";
import "../App.css";

export default function OurStory() {
  function createData(year, total, image) {
    return { year, total, image };
  }

  const rows = [
    createData("1995", "$12,424.66", OurStoryHero),
    createData("1996", "$23,783.27", null),
    createData("1997", "$57,057.02", null),
    createData("1998", "$75,938.18", null),
    createData("1999", "$114,511.81", null),
    createData("2000", "$158,603.56", null),
    createData("2001", "$195,148.15", null),
    createData("2002", "$217,945.10", null),
    createData("2003", "$247,941.04", null),
    createData("2004", "$250,012.48", null),
    createData("2005", "$319,842.78", null),
    createData("2006", "$361,454.68", null),
    createData("2007", "$370,317.00", null),
    createData("2008", "$435,560.89", null),
    createData("2009", "$416,485.27", null),
    createData("2010", "$520,871.79", null),
    createData("2011", "$713,053.68", null),
    createData("2012", "$886,726.15", null),
    createData("2013", "$1,169,722.16", null),
    createData("2014", "$1,528,330.16", null),
    createData("2015", "$2,015,307.17", null),
    createData("2016", "$2,434,315.18", null),
    createData("2017", "$2,724,324.19", null),
    createData("2018", "$3,026,420.19", null),
    createData("2019", "$3,230,025.23", null),
    createData("2020", "$2,526,418.24", null),
    createData("2021", "$2,270,311.40", null),
    createData("2022", "$2,334,217.21", null),
    createData("2023", "$2,007,079.05", null),
    createData("2024", "$1,531,518.24", null),
  ];

  const [hoveredIndex, setHoveredIndex] = React.useState(null);
  const [hoverLeft, setHoverLeft] = React.useState(0);
  const scrollerRef = React.useRef(null);
  const itemRefs = React.useRef([]);

  const updateHoverPosition = React.useCallback(() => {
    if (hoveredIndex === null) {
      return;
    }
    const scroller = scrollerRef.current;
    const item = itemRefs.current[hoveredIndex];
    if (!scroller || !item) {
      return;
    }
    const left = item.offsetLeft - scroller.scrollLeft + item.offsetWidth / 2;
    setHoverLeft(left);
  }, [hoveredIndex]);

  React.useEffect(() => {
    updateHoverPosition();
  }, [updateHoverPosition]);

  React.useEffect(() => {
    const handleResize = () => updateHoverPosition();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [updateHoverPosition]);

  const [mode, setMode] = React.useState(() => {
    // Retrieve the stored theme from localStorage or default to 'light'
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
      <LazyLoad height={200} offset={100} once>
        <PageHero imageUrl={OurStoryHero} title="Our Story" />
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
        <Box
          sx={{
            width: { sm: "100%", md: "100%" },
            textAlign: { sm: "left", md: "left" },
          }}
        >
          <Typography
            variant="h5"
            component="h2"
            gutterBottom
            style={{ color: "#233563" }}
            sx={{ marginTop: { xs: 2, sm: 0 } }}
          >
            Where The Money Goes
          </Typography>
          <Typography variant="body1" paragraph color="text.secondary">
            <span style={{ color: "#e2883c", fontWeight: "bold" }}>100%</span>{" "}
            of the funds raised by DM at UF go directly to UF Health Shands
            Children's Hospital, our local Children Miracle Network Hospital. Of
            these funds, most recently,{" "}
            <span style={{ color: "#e2883c", fontWeight: "bold" }}>48%</span>{" "}
            goes to research,{" "}
            <span style={{ color: "#e2883c", fontWeight: "bold" }}>10%</span> to
            education and{" "}
            <span style={{ color: "#e2883c", fontWeight: "bold" }}>42%</span> to
            patient care.
          </Typography>
          <Typography variant="body1" paragraph color="text.secondary">
            Patient care funding provides necessities such as bandages and
            patient gowns, as well as life-saving equipment and hospital
            improvements including the recent expansion of the Neonatal
            Intensive Care Unit. These funds also provide sleeper sofas for
            parents, playrooms for children, and Child Life programs, in an
            effort to make hospital stays more enjoyable for children and their
            families.
          </Typography>
          <Typography variant="body1" paragraph color="text.secondary">
            Research funding helps our doctors find solutions for incurable
            diseases such as diabetes, cystic fibrosis, and cancer, and it
            allows them to develop new technology and enhanced processes that
            improve the daily lives of pediatric patients. Education funding
            supports programs such as Child Life Diversion therapy and goes
            toward raising funds and awareness for the Children's Miracle
            Network.
          </Typography>

          <Box
            sx={{
              mt: 3,
              mb: 3,
              p: { xs: 2, sm: 3 },
              borderRadius: 3,
              border: "1px solid rgba(35, 53, 99, 0.15)",
              background:
                "linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(245,248,255,1) 100%)",
            }}
          >
            <Typography
              variant="h5"
              component="h3"
              gutterBottom
              sx={{ color: "#233563" }}
            >
              Yearly Impact Timeline
            </Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              Hover over a year to see the total raised.
            </Typography>

            <Box sx={{ position: "relative", minHeight: 220 }}>
              <Box
                sx={{
                  overflowX: "auto",
                  pb: 5,
                  pt: 4,
                }}
                ref={scrollerRef}
                onScroll={updateHoverPosition}
              >
                <Box
                  sx={{
                    position: "relative",
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 3,
                    minWidth: "max-content",
                    pt: 2,
                    pb: 2,
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      left: 0,
                      right: 0,
                      top: "50%",
                      transform: "translateY(-50%)",
                      height: 2,
                      backgroundColor: "rgba(35, 53, 99, 0.2)",
                    },
                  }}
                >
                  {rows.map((row, index) => (
                    <Box
                      key={row.year}
                      ref={(el) => {
                        itemRefs.current[index] = el;
                      }}
                      sx={{
                        position: "relative",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        minWidth: 90,
                        cursor: "pointer",
                      }}
                      onMouseEnter={() => setHoveredIndex(index)}
                      onMouseLeave={() => setHoveredIndex(null)}
                      onFocus={() => setHoveredIndex(index)}
                      onBlur={() => setHoveredIndex(null)}
                      tabIndex={0}
                      role="button"
                    >
                      <Box
                        sx={{
                          width: 14,
                          height: 14,
                          borderRadius: "50%",
                          backgroundColor: "#ffffff",
                          border: "2px solid rgba(35, 53, 99, 0.5)",
                          position: "relative",
                          zIndex: 1,
                        }}
                      />
                      <Typography
                        variant="subtitle2"
                        sx={{ color: "#233563", mt: 1.5 }}
                      >
                        {row.year}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Box>

              {hoveredIndex !== null && (
                <Box
                  sx={{
                    position: "absolute",
                    left: hoverLeft,
                    top: 100,
                    transform: "translateX(-50%)",
                    px: 2,
                    py: 1.5,
                    borderRadius: 2,
                    border: "1px solid rgba(226, 136, 60, 0.6)",
                    backgroundColor: "rgba(255, 248, 240, 0.95)",
                    boxShadow: "0 8px 20px rgba(35, 53, 99, 0.08)",
                    minWidth: 180,
                    maxWidth: 320,
                    textAlign: "center",
                    whiteSpace: "nowrap",
                    zIndex: 2,
                  }}
                >
                  <Typography
                    variant="subtitle1"
                    sx={{ color: "#233563", lineHeight: 1.05 }}
                  >
                    {rows[hoveredIndex].year}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {rows[hoveredIndex].total} raised
                  </Typography>
                  {rows[hoveredIndex].image && (
                    <Box
                      component="img"
                      src={rows[hoveredIndex].image}
                      alt={`${rows[hoveredIndex].year} highlight`}
                      sx={{
                        width: "100%",
                        borderRadius: 2,
                        objectFit: "cover",
                        maxHeight: 120,
                        mt: 1,
                      }}
                    />
                  )}
                </Box>
              )}
            </Box>
          </Box>

          <Box>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Typography
                  variant="h5"
                  component="h2"
                  gutterBottom
                  style={{ color: "#233563", marginTop: "40px" }}
                >
                  Participants
                </Typography>
                <ul className="custom-bullet-points">
                  <li>
                    <Typography
                      variant="body1"
                      component="span"
                      color="text.secondary"
                    >
                      Number of Registered Miracle Makers in 2024:{" "}
                      <span style={{ color: "#e2883c", fontWeight: "bold" }}>
                        483
                      </span>
                    </Typography>
                  </li>
                  <li>
                    <Typography
                      variant="body1"
                      component="span"
                      color="text.secondary"
                    >
                      Number of Captains:{" "}
                      <span style={{ color: "#e2883c", fontWeight: "bold" }}>
                        395
                      </span>
                    </Typography>
                  </li>
                  <li>
                    <Typography
                      variant="body1"
                      component="span"
                      color="text.secondary"
                    >
                      Number of Emerging Leaders:{" "}
                      <span style={{ color: "#e2883c", fontWeight: "bold" }}>
                        176
                      </span>
                    </Typography>
                  </li>
                  <li>
                    <Typography
                      variant="body1"
                      component="span"
                      color="text.secondary"
                    >
                      Number of Miracle Families:{" "}
                      <span style={{ color: "#e2883c", fontWeight: "bold" }}>
                        32
                      </span>
                    </Typography>
                  </li>
                  <li>
                    <Typography
                      variant="body1"
                      component="span"
                      color="text.secondary"
                    >
                      Number of Sponsors:{" "}
                      <span style={{ color: "#e2883c", fontWeight: "bold" }}>
                        74
                      </span>
                    </Typography>
                  </li>
                  <li>
                    <Typography
                      variant="body1"
                      component="span"
                      color="text.secondary"
                    >
                      Most Years as a Dancer:{" "}
                      <span style={{ color: "#e2883c", fontWeight: "bold" }}>
                        4 years
                      </span>
                    </Typography>
                  </li>
                </ul>

                <Typography
                  variant="h5"
                  component="h2"
                  gutterBottom
                  style={{ color: "#233563", marginTop: "40px" }}
                >
                  Fundraising
                </Typography>
                <ul className="custom-bullet-points">
                  <li>
                    <Typography
                      variant="body1"
                      component="span"
                      color="text.secondary"
                    >
                      <span style={{ color: "#e2883c", fontWeight: "bold" }}>
                        26,147
                      </span>{" "}
                      donations on DonorDrive
                    </Typography>
                  </li>
                  <li>
                    <Typography
                      variant="body1"
                      component="span"
                      color="text.secondary"
                    >
                      <span style={{ color: "#e2883c", fontWeight: "bold" }}>
                        1,363
                      </span>{" "}
                      fundraisers raised at least $1
                    </Typography>
                  </li>
                  <li>
                    <Typography
                      variant="body1"
                      component="span"
                      color="text.secondary"
                    >
                      Amount raised in 2024:{" "}
                      <span style={{ color: "#e2883c", fontWeight: "bold" }}>
                        $1,531,518.24
                      </span>
                    </Typography>
                  </li>
                  <li>
                    <Typography
                      variant="body1"
                      component="span"
                      color="text.secondary"
                    >
                      Total amount raised in past 31 years: over{" "}
                      <span style={{ color: "#e2883c", fontWeight: "bold" }}>
                        33 million dollars
                      </span>
                    </Typography>
                  </li>
                  <li>
                    <Typography
                      variant="body1"
                      component="span"
                      color="text.secondary"
                    >
                      Alumni Contribution:{" "}
                      <span style={{ color: "#e2883c", fontWeight: "bold" }}>
                        $124,904.76
                      </span>
                    </Typography>
                  </li>
                </ul>
                {/* <Typography variant="h5" component="h2" gutterBottom
style={{ color: '#233563', marginBottom: '1px' }}>
         Event Title
       </Typography>
       <Typography variant="body1" color="text.secondary">
         First Reference: Dance Marathon at the University of Florida
       </Typography>
       <Typography variant="body1" color="text.secondary">
         Second Reference: Dance Marathon at UF
       </Typography>
       <Typography variant="body1" color="text.secondary">
         Social Media and Marketing Reference: DM at UF
       </Typography>
       <Typography variant="body1" color="text.secondary">
         Not Acceptable: DM UF, UF DM, DM @ UF
       </Typography> */}

                {/* <ul className="custom-bullet-points">
                  <li>
                    <Typography
                      variant="body1"
                      sx={{ fontWeight: "bold", color: "#e2883c" }}
                    >
                      Overall Directors
                    </Typography>
                    <ul style={{ paddingLeft: "20px" }}>
                      <li>
                        <Typography
                          variant="body1"
                          component="span"
                          color="text.secondary"
                        >
                          Executive Director
                        </Typography>
                      </li>
                      <li>
                        <Typography
                          variant="body1"
                          component="span"
                          color="text.secondary"
                        >
                          Operations Manager
                        </Typography>
                      </li>
                      <li>
                        <Typography
                          variant="body1"
                          component="span"
                          color="text.secondary"
                        >
                          Marketing Manager
                        </Typography>
                      </li>
                      <li>
                        <Typography
                          variant="body1"
                          component="span"
                          color="text.secondary"
                        >
                          Membership Manager
                        </Typography>
                      </li>
                      <li>
                        <Typography
                          variant="body1"
                          component="span"
                          color="text.secondary"
                        >
                          Finance Manager
                        </Typography>
                      </li>
                      <li>
                        <Typography
                          variant="body1"
                          component="span"
                          color="text.secondary"
                        >
                          Dancer Engagement
                        </Typography>
                      </li>
                      <li>
                        <Typography
                          variant="body1"
                          component="span"
                          color="text.secondary"
                        >
                          Digital Marketing
                        </Typography>
                      </li>
                      <li>
                        <Typography
                          variant="body1"
                          component="span"
                          color="text.secondary"
                        >
                          Family Relations
                        </Typography>
                      </li>
                      <li>
                        <Typography
                          variant="body1"
                          component="span"
                          color="text.secondary"
                        >
                          Finance
                        </Typography>
                      </li>
                      <li>
                        <Typography
                          variant="body1"
                          component="span"
                          color="text.secondary"
                        >
                          Leadership Development
                        </Typography>
                      </li>
                      <li>
                        <Typography
                          variant="body1"
                          component="span"
                          color="text.secondary"
                        >
                          Marathon Relations
                        </Typography>
                      </li>
                      <li>
                        <Typography
                          variant="body1"
                          component="span"
                          color="text.secondary"
                        >
                          Merchandise
                        </Typography>
                      </li>
                      <li>
                        <Typography
                          variant="body1"
                          component="span"
                          color="text.secondary"
                        >
                          Morale
                        </Typography>
                      </li>
                      <li>
                        <Typography
                          variant="body1"
                          component="span"
                          color="text.secondary"
                        >
                          Multimedia
                        </Typography>
                      </li>
                      <li>
                        <Typography
                          variant="body1"
                          component="span"
                          color="text.secondary"
                        >
                          Organization Relations
                        </Typography>
                      </li>
                      <li>
                        <Typography
                          variant="body1"
                          component="span"
                          color="text.secondary"
                        >
                          Outreach
                        </Typography>
                      </li>
                      <li>
                        <Typography
                          variant="body1"
                          component="span"
                          color="text.secondary"
                        >
                          Partnerships
                        </Typography>
                      </li>
                      <li>
                        <Typography
                          variant="body1"
                          component="span"
                          color="text.secondary"
                        >
                          Productions
                        </Typography>
                      </li>
                      <li>
                        <Typography
                          variant="body1"
                          component="span"
                          color="text.secondary"
                        >
                          Public Relations
                        </Typography>
                      </li>
                      <li>
                        <Typography
                          variant="body1"
                          component="span"
                          color="text.secondary"
                        >
                          Recruitment
                        </Typography>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <Typography
                      variant="body1"
                      sx={{ fontWeight: "bold", color: "#e2883c", marginTop: 2 }}
                    >
                      Assistant Directors & Captains
                    </Typography>
                    <ul style={{ paddingLeft: "20px" }}>
                      <li>
                        <Typography
                          variant="body1"
                          component="span"
                          color="text.secondary"
                        >
                          Dancer Engagement
                        </Typography>
                      </li>
                      <li>
                        <Typography
                          variant="body1"
                          component="span"
                          color="text.secondary"
                        >
                          Digital Marketing
                        </Typography>
                      </li>
                      <li>
                        <Typography
                          variant="body1"
                          component="span"
                          color="text.secondary"
                        >
                          Family Relations
                        </Typography>
                      </li>
                      <li>
                        <Typography
                          variant="body1"
                          component="span"
                          color="text.secondary"
                        >
                          Finance
                        </Typography>
                      </li>
                      <li>
                        <Typography
                          variant="body1"
                          component="span"
                          color="text.secondary"
                        >
                          Leadership Development
                        </Typography>
                      </li>
                      <li>
                        <Typography
                          variant="body1"
                          component="span"
                          color="text.secondary"
                        >
                          Marathon Relations
                        </Typography>
                      </li>
                      <li>
                        <Typography
                          variant="body1"
                          component="span"
                          color="text.secondary"
                        >
                          Merchandise
                        </Typography>
                      </li>
                      <li>
                        <Typography
                          variant="body1"
                          component="span"
                          color="text.secondary"
                        >
                          Morale
                        </Typography>
                      </li>
                      <li>
                        <Typography
                          variant="body1"
                          component="span"
                          color="text.secondary"
                        >
                          Multimedia
                        </Typography>
                      </li>
                      <li>
                        <Typography
                          variant="body1"
                          component="span"
                          color="text.secondary"
                        >
                          Organization Relations
                        </Typography>
                      </li>
                      <li>
                        <Typography
                          variant="body1"
                          component="span"
                          color="text.secondary"
                        >
                          Outreach
                        </Typography>
                      </li>
                      <li>
                        <Typography
                          variant="body1"
                          component="span"
                          color="text.secondary"
                        >
                          Partnerships
                        </Typography>
                      </li>
                      <li>
                        <Typography
                          variant="body1"
                          component="span"
                          color="text.secondary"
                        >
                          Productions
                        </Typography>
                      </li>
                      <li>
                        <Typography
                          variant="body1"
                          component="span"
                          color="text.secondary"
                        >
                          Public Relations
                        </Typography>
                      </li>
                      <li>
                        <Typography
                          variant="body1"
                          component="span"
                          color="text.secondary"
                        >
                          Recruitment
                        </Typography>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <Typography
                      variant="body1"
                      sx={{ fontWeight: "bold", color: "#233563", marginTop: 2 }}
                    >
                      Emerging Leaders
                    </Typography>
                  </li>
                  <li>
                    <Typography
                      variant="body1"
                      sx={{ fontWeight: "bold", color: "#233563" }}
                    >
                      Kirstyn's Krew
                    </Typography>
                  </li>
                  <li>
                    <Typography
                      variant="body1"
                      sx={{ fontWeight: "bold", color: "#233563" }}
                    >
                      Ambassadors
                    </Typography>
                  </li>
                  <li>
                    <Typography
                      variant="body1"
                      sx={{ fontWeight: "bold", color: "#233563" }}
                    >
                      Miracle Makers
                    </Typography>
                  </li>
                  <li>
                    <Typography
                      variant="body1"
                      sx={{ fontWeight: "bold", color: "#233563" }}
                    >
                      Dance Marathon Alumni (DMA)
                    </Typography>
                  </li>
                </ul> */}
              </Grid>
              <Grid item xs={12} sm={6}>
                {/* Hospital Title Section */}
                <Typography
                  variant="h5"
                  component="h2"
                  gutterBottom
                  style={{
                    color: "#233563",
                    marginTop: "25px",
                    marginBottom: "1px",
                  }}
                >
                  Hospital Title
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  First Reference: UF Health Shands Children’s Hospital
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Second Reference: UF Health Shands
                </Typography>

                {/* Children and their Families Section */}
                <Typography
                  variant="h5"
                  component="h2"
                  gutterBottom
                  style={{
                    color: "#233563",
                    marginTop: "40px",
                    marginBottom: "1px",
                  }}
                >
                  Children and their Families
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Miracle Family
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Miracle Children
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Miracle Child (0-12)
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Miracle Teen (13+)
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  CMN Hospital(s) Ambassador (18+)
                </Typography>

                <Typography
                  variant="h5"
                  component="h2"
                  gutterBottom
                  style={{ color: "#233563", marginTop: "40px" }}
                >
                  Levels of Involvement
                </Typography>
                <ul className="custom-bullet-points">
                  <li>
                    <Typography
                      variant="body1"
                      sx={{ color: "text.secondary" }}
                    >
                      Managers
                    </Typography>
                  </li>
                  <li>
                    <Typography
                      variant="body1"
                      sx={{ color: "text.secondary" }}
                    >
                      Executive Team (Overall Directors)
                    </Typography>
                  </li>
                  <li>
                    <Typography
                      variant="body1"
                      sx={{ color: "text.secondary" }}
                    >
                      Assistant Directors
                    </Typography>
                  </li>
                  <li>
                    <Typography
                      variant="body1"
                      sx={{ color: "text.secondary" }}
                    >
                      Captains
                    </Typography>
                  </li>
                  <li>
                    <Typography
                      variant="body1"
                      sx={{ color: "text.secondary" }}
                    >
                      Emerging Leaders
                    </Typography>
                  </li>
                  <li>
                    <Typography
                      variant="body1"
                      sx={{ color: "text.secondary" }}
                    >
                      Ambassadors
                    </Typography>
                  </li>
                  <li>
                    <Typography
                      variant="body1"
                      sx={{ color: "text.secondary" }}
                    >
                      Miracle Makers
                    </Typography>
                  </li>
                  <li>
                    <Typography
                      variant="body1"
                      sx={{ color: "text.secondary" }}
                    >
                      Dance Marathon Alumni (DMA)
                    </Typography>
                  </li>
                </ul>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
      <Footer />
    </ThemeProvider>
  );
}
