import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import AppAppBar from "../components/AppAppBar";
import getLPTheme from "../getLPTheme";
import Footer from "../components/Footer";
import {
 Container,
 Typography,
 Box,
 Accordion,
 AccordionSummary,
 AccordionDetails,
 Chip,
 Grid,
} from "@mui/material";
import ScrollToTop from "../components/ScrollToTop";
import PageHero from "../components/PageHero";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CaptainPic from "../assets/images/pagepics/CaptainsPic.jpg";
import LazyLoad from "react-lazyload";
import Link from "@mui/material/Link";

const teams = [
 {
   name: "Digital Marketing Team",
   responsibilities: (
     <>
       The Digital Marketing Team is composed of graphic designers and software developers responsible for making portfolio-quality materials that bring the Dance Marathon at UF brand to life. Technology Captains are responsible for either the development/maintenance of the website or mobile app. Design Captains are responsible for the creation of all print/web design needs such as all DM at UF merchandise, social media graphics, newsletters and more using Adobe platforms. During the Main Event, Captains run the tech booth, which includes managing multiple screens inside the O’Dome, sending app notifications, coordinating audio/visual feeds, and creating in-event graphics.
     </>
   ),
   leadership: {
     overallDirector: "Sydney Barnett",
     assistantDirectors: ["Assistant Director of Internal Design: Nicole Main", "Assistant Director of External Design: Joey Laratro", "Assistant Director of Internal Technology: Danny Gleeson", "Assistant Director of External Technology: Savana Pham", "Assistant Director of Internal Affairs: Riley Floyd"],
     captains: [],
   },
 },
 {
   name: "Event Management Team",
   responsibilities: (
     <>
       The Event Management Team is responsible for all logistics and entertainment throughout the year and during the Main Event. Event Management Captains play an integral role in setting up and striking Dance Marathon at UF events, while also managing and supporting entertainment acts. This team focuses on bringing ideas to life while ensuring a seamless and engaging experience for participants.
     </>
   ),
   leadership: {
     overallDirector: "Kristina Guerra",
     assistantDirectors: ["Assistant Director of Talent Relations: Ashley Erwin", "Assistant Director of External Logistics: Brooke Pham", "Assistant Director of Internal Logistics: Mia Jimenez", "Assistant Director of Fundraising: Victoria Garvey"],
     captains: [],
   },
 },
 {
   name: "Family Relations Team",
   responsibilities:
     "The Family Relations Team is composed of Captains that serve as liaisons between the Dance Marathon at UF community and the Miracle Families. Captains are paired with at least one Miracle Family and their responsibilities include maintaining consistent contact with their paired Miracle Family, facilitating cause-connection between their Family and the community, and organizing events between the Miracle Families and participating Organizations. Captains will attend monthly Family Fun Days, design and build the Family Room for the Main Event, and facilitate activities and entertainment for the Miracle Families throughout the entirety of the year.",
   leadership: {
     overallDirector: "Gabriella Paredes",
     assistantDirectors: ["Assistant Director of Family Events: Rebecca Beer","Assistant Director of Captain Engagement: Tristan Swain", "Assistant Director of Outreach: Emma Shellard", "Assistant Director of Cause Connection: Lilly Smith"],
     captains: [],
   },
 },
 {
   name: "Finance Team",
   responsibilities:
     "The Finance Team supports the execution of the overall fundraising strategy for Dance Marathon at the University of Florida. Working under the Assistant Directors of Fundraising Innovation & Incentives, Internal Development, and Financial Planning, Captains help bring initiatives to life. Captains will develop and implement creative incentives, supporting participants and teams and staffing key efforts such as fundraising support stations and the incentives table during major events. They play an active role in encouraging participation, generating new ideas, and ensuring campaigns are engaging and appealing to participants. Captains also assist with tracking fundraising progress, contributing to monthly reports on fundraising performance and sharing new, encouraging ideas to further participant impact. Through mentorship, collaboration and development opportunities, Captains grow as leaders while fostering a positive and connected team culture.",
   leadership: {
     overallDirector: "Zachary Myton",
     assistantDirectors: ["Assistant Director of Internal Affairs: Barra Shiffman", "Assistant Director of Financial Tracking: Rena Eberhardt", "Assistant Director of Strategy and Incentives: Kendall Mehlenbacher"],
     captains: [],
   },
 },
 {
   name: "Hospitality Team",
   responsibilities:
     "The Hospitality Team is responsible for planning, coordinating and securing a continuous and consistent flow of in-kind donations for Miracle Makers, Internal Members and Miracle Families throughout the year. Hospitality Captains oversee all donation-related logistics for all Dance Marathon at UF events, ensuring that all participant needs are met. They also work to establish partnerships with local businesses to obtain in-kind contributions and host benefit nights, such as Hospitality Nights, supporting the organization’s fundraising efforts while fostering community engagement.",
   leadership: {
     overallDirector: "Courtney Carter",
     assistantDirectors: ["Assistant Director of Stewardship: Natalie Mann", "Assistant Director of Outreach: Gaven Ranson", "Assistant Director of Internal Affairs: Aviana Gonzalez", "Assistant Director of Events: Corey Schwartz"],
     captains: [],
   },
 },
 {
   name: "Leadership Development Team",
   responsibilities:
     "The Leadership Development Team is responsible for overseeing and running the Emerging Leaders Program. This team will focus on developing and integrating students with minimal previous Dance Marathon experience into the Dance Marathon at UF community through tangible exposure to Dance Marathon’s various leadership roles.",
   leadership: {
     overallDirector: "Surleen Sahni",
     assistantDirectors: ["Assistant Director of Development: Hailey Rudman", "Assistant Director of Logistics: Gabriela Perez", "Assistant Director of Fundraising and Impact: Olivia Murphy", "Assistant Director of Internal Affairs: AJ Hamil"],
     captains: [],
   },
 },
 {
   name: "Marathon Relations Team",
   responsibilities:
     "The Marathon Relations team is responsible for collaborating, advising and growing Dance Marathon at the University of Florida’s partner high school programs, known as Mini Marathons. They energize and support our “Minis” by educating students on Children’s Miracle Network and Dance Marathon at UF’s history and culture. They meet with and support our high school partner programs throughout the year, all culminating in their Mini Marathon during ‘Mini Season.’ Mini Season consists of a few weeks in the spring semester where Marathon Relations collaborates with various other teams to attend all Mini Marathons each weekend. ",
   leadership: {
     overallDirector: "Grace Nelson",
     assistantDirectors: ["Assistant Director of Established Programs: Marisa Ricks", "Assistant Director of Evolving Programs: Elizabeth Chapman", "Assistant Director of Emerging Programs: Seth Edwards", "Assistant Director of Finance and Sponsorships: Inara Drainville", "Assistant Director of Marketing and Recruitment: Haven Wilson"],
     captains: [],
   },
 },
 {
   name: "Member Development Team",
   responsibilities:
     "The Member Development Team is responsible for overseeing the Ambassador and Miracle Maker lifecycle. Member Development Captains will be paired with Ambassadors and assist them in their organization engagement and communication and fundraising efforts, serving as the liaison between the assigned organization and Dance Marathon at UF. This team will execute all Ambassador and Miracle Maker-specific events including cause connection, general body meetings, bonding and Main Event programming. ",
   leadership: {
     overallDirector: "Rebekah Zuckerman",
     assistantDirectors: ["Assistant Director of Emerging Organizations: Abby McCaskill", "Assistant Director of Evolving Organizations: Ava Piersynski", "Assistant Director of Established Organizations: Juliana Buckley", "Assistant Director of Fundraising Development: Ari Spiegel", "Assistant Director of Internal Affairs: Alexis Arnoldi"],
     captains: [],
   },
 },
 {
   name: "Merchandise Team",
   responsibilities:
     "The Merchandise Team is responsible for the ideation and distribution of all official Dance Marathon at the University of Florida merchandise, including clothing and accessories. Merchandise Captains help guide the creative direction of merchandise by creating mood boards to ensure alignment with the organization’s brand and fundraising goals. Captains also work at the merchandise store at events throughout the year, including fundraising pushes such as Transform Today, the Turlington Plaza store, high school Mini Marathons and the Main Event.",
   leadership: {
     overallDirector: "Maizy Sadlo",
     assistantDirectors: ["Assistant Director of Stores and Minis: Samantha Elmer", "Assistant Director of Fundraising: Ryan LaLiberty", "Assistant Director of Inventory: Sofia Durante", "Assistant Director of Internal Operations: Hank Klein"],
     captains: [],
   },
 },
 {
   name: "Morale Team",
   responsibilities:
     "The Morale Team is responsible for keeping the spirit of Dance Marathon at UF energetic, positive and meaningful throughout the entire year. Morale Captains create the linedance, lead theme hours at the Main Event and plan and execute events such as Moralloween and Morale Madness. Morale Captains also consistently engage with participants through outreach, hype, and personal connection, driving fundraising and maintaining excitement across the organization.",
   leadership: {
     overallDirector: "Anna Timko",
     assistantDirectors: ["Assistant Director of Captain Relations: Ethan Richards", "Assistant Director of Event Planning: Jessica Perez", "Assistant Director of Fundraising: Lily Galkin", "Assistant Director of Mini Marathon Coordination: Abigail Hennessee"],
     captains: [],
   },
 },
 {
   name: "Multimedia Team",
   responsibilities:
     "The Multimedia Team is responsible for capturing and editing all photography and videography content for Dance Marathon at the University of Florida throughout the year.",
   leadership: {
     overallDirector: "Kathryn Burke",
     assistantDirectors: ["Assistant Director of Photography: Katie Apolo", "Assistant Director of Social Engagement: Natalia Martinez", "Assistant Director of Videography: Julia Adkins", "Assistant Director of Multimedia Logistics: Adriana Acevedo"],
     captains: [],
   },
 },
 {
   name: "Public Relations Team",
   responsibilities: (
     <>
       The Public Relations Team is responsible for representing Dance Marathon at UF and engaging within and outside of the organization by communicating to members, faculty, staff, families and the broader Gainesville community. This team maintains DM at UF’s reputation through strategic outreach and communication, using resources such as social media, press relations and more.
     </>
   ),
   leadership: {
     overallDirector: "Shae Helmer",
     assistantDirectors: ["Assistant Director of Social Media: Molly Freeburg", "Assistant Director of Communications: Emma Golub", "Assistant Director of Internal Affairs: Abigail Buckley", "Assistant Director of Strategy and Fundraising: Kayla Birkenmeyer"],
     captains: [],
   },
 },
 {
   name: "Recruitment Team",
   responsibilities:
     "The Recruitment Team is responsible for representing Dance Marathon at UF in the most positive light by spreading our message across campus and throughout the Gainesville community. This team fosters relationships with existing organizations while building new connections with different student groups through outreach efforts. Recruitment Captains plan and execute a yearlong recruitment strategy that includes tabling opportunities, classroom and organization presentations, flyering and engagement with academic colleges and campus partners. The team oversees all informational sessions and events aimed at acquiring new members, while also promoting awareness of Dance Marathon at UF’s mission. Additionally, the Recruitment Team coordinates and executes all visitor affairs during the Main Event, ensuring a welcoming and engaging experience for all guests.",
   leadership: {
     overallDirector: "Bruna Pereira",
     assistantDirectors: ["Assistant Director of Campus Relations: Raquel Christie", "Assistant Director of Tracking: Avery McCormack", "Assistant Director of Internal Affairs: Rebecca Beer", "Assistant Director of Organization Development: Alexis Zanella"],
     captains: [],
   },
 },
 {
   name: "Sponsorships Team",
   responsibilities:
     "The Sponsorships Team serves as the main point of connection between Dance Marathon at UF and the business community, working with companies in Gainesville and beyond to secure monetary donations. These contributions support both our operational needs and directly benefit our fundraising efforts for UF Health Shands Children’s Hospital. Through strategic outreach and consistent business engagement, Sponsorships Captains ensure DM at UF’s partners feel valued and connected to the cause, providing them with tailored incentives and recognition that reflect their impact. This team provides the essential financial foundation that enables our organization to grow and expand our impact.",
   leadership: {
     overallDirector: "Violet Collins",
     assistantDirectors: ["Assistant Director of Stewardship: Julian Morgan", "Assistant Director of Internal Affairs: Cristina Castresan", "Assistant Director of Logistics: Eden Gabbai"],
     captains: [],
   },
 },
];


export default function Captains() {
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
       <PageHero imageUrl={CaptainPic} title="Captain Teams" />
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
       {/* <Typography variant="h4" color='#233563' gutterBottom>
       Captain Teams
     </Typography> */}
     
       <Typography variant="body1" color="text.secondary" paragraph>
         Each{" "}
         <span style={{ color: "#233563", fontWeight: "bold" }}>
           Captain Team
         </span>{" "}
         is composed of an Overall Director, Assistant Directors, and Captains.
         Assistant Directors work year-long with their respective Overall
         Directors to ensure steady growth and management within their Captain
         Team. Captains are leaders within our organization who have specific
         duties throughout the year depending on their teams. Click each tab
         below to learn more about each team and its responsibilities.
       </Typography>
       <Typography variant="body1" color="text.secondary" paragraph>
         Unsure which team to join? Take this{" "}
         <Link
          component="button"
          onClick={() => {
            window.location.href = "/captainquiz";
          }}
          sx={{
            color: "#233563",
            textDecoration: "none",
            font: "inherit",
            lineHeight: "inherit",
            verticalAlign: "baseline",
            fontWeight: "bold",
            "&:hover": {
              color: "#3B82F6",
            },
          }}
        >
          quiz
        </Link>
        {" "}to find the right fit for you!
       </Typography>

       {teams.map((team, index) => (
         <Accordion key={index}>
           <AccordionSummary expandIcon={<ExpandMoreIcon />}>
             <Typography variant="h6" color="text.secondary">
               {team.name}
             </Typography>
           </AccordionSummary>
           <AccordionDetails>
             <Typography
               variant="body2"
               color="text.secondary"
               marginBottom={1}
             >
               <span style={{ color: "#233563", fontWeight: "bold" }}>
                 Responsibilities:{" "}
               </span>
               {team.responsibilities}
             </Typography>
             <Typography
               variant="body2"
               color="text.secondary"
               marginBottom={1}
             >
               <span style={{ color: "#233563", fontWeight: "bold" }}>
                 Overall Director:{" "}
               </span>
               <Chip
                 label={`${team.leadership.overallDirector}`}
                 style={{ variant: "outlined" }}
               />
             </Typography>
             <Typography variant="body2" color="text.secondary" gutterBottom>
               <span style={{ color: "#233563", fontWeight: "bold" }}>
                 Assistant Directors:
               </span>
             </Typography>
             <Grid
               container
               spacing={2}
               justifyContent="center"
               sx={{ mb: 2 }}
             >
               {team.leadership.assistantDirectors.map((ad, i) => {
                 const [name, title] = ad.split(" - ");
                 return (
                   <Grid item xs={12} sm={6} md={4} key={i}>
                     <Box
                       sx={{
                         p: 2,
                         border: "1px solid #ccc",
                         borderRadius: "8px",
                         textAlign: "center",
                         height: "80px",
                         display: "flex",
                         flexDirection: "column",
                         justifyContent: "center", // Center content vertically
                         alignItems: "center", // Center content horizontally
                       }}
                     >
                       <Typography
                         variant="body1"
                         color="text.secondary"
                         sx={{ fontWeight: "bold" }}
                       >
                         {name}
                       </Typography>
                       <Typography variant="body2" color="text.secondary">
                         {title}
                       </Typography>
                     </Box>
                   </Grid>
                 );
               })}
             </Grid>
             <Typography variant="body2" color="text.secondary">
               <span style={{ color: "#233563", fontWeight: "bold" }}>
                 Captains:
               </span>
               <Box
                 sx={{
                   display: "flex",
                   flexWrap: "wrap",
                   gap: 1,
                   pl: 3,
                   pt: 1,
                 }}
               >
                 {team.leadership.captains.map((captain, i) => (
                   <Chip key={i} label={captain} variant="outlined" />
                 ))}
               </Box>
             </Typography>
           </AccordionDetails>
         </Accordion>
       ))}
     </Container>
     <Footer />
   </ThemeProvider>
 );
}


