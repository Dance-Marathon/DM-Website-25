import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import AppAppBar from '../components/AppAppBar';
import getLPTheme from '../getLPTheme';
import Footer from '../components/Footer';
import { Container, Typography, Box, Accordion, AccordionSummary, AccordionDetails, Chip, Grid} from '@mui/material';
import ScrollToTop from "../components/ScrollToTop";
import PageHero from '../components/PageHero';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CaptainPic from "../assets/images/pagepics/CaptainsPic.jpg";
import LazyLoad from 'react-lazyload';

const teams = [
  {
    name: "Communications and Public Relations Team",
    responsibilities: (
      <>
        The Communications and Public Relations Team is responsible for expanding Dance Marathon’s reach beyond the student body by engaging with faculty, staff, families, and the Gainesville community. This team also maintains the organization’s public reputation through strategic outreach and communication.
      </>
    ),
    leadership: {
      overallDirector: "Sofia Amoroso",
      assistantDirectors: [
        "Alyza Dooley - Assistant Director of Social Media",
        "Tori Kitchens - Assistant Director of Communications",
        "Sarah Abisror - Assistant Director of Internal Affairs"
      ],
      captains: [
        
      ],
    },
  },
  {
    name: "Digital Marketing Team",
    responsibilities: (
      <>
        The Digital Marketing Team is composed of graphic designers and software developers responsible for making the Dance Marathon at UF brand come to life. Technology Captains are responsible for either the development/maintenance of the website or mobile iOS/Android applications, and Design Captains are responsible for the creation of all print/web design needs (merchandise, social media graphics, newsletters, calendars, etc.). Throughout the year, Captains work together to create high-tech, portfolio-quality materials that showcase Dance Marathon as a professional student-run movement. During the Main Event, Captains run the tech booth, which includes managing multiple screens inside the O’Dome, sending app notifications, coordinating audio/visual feeds, and creating in-event graphics.
      </>
    ),
    leadership: {
      overallDirector: "Marina Cheema",
      assistantDirectors: [
        "Brendan Kenny - Assistant Director of Internal Design",
        "Sydney Barnett - Assistant Director of External Design",
        "Eric Hengber - Assistant Director of Technology",
        "Phillip-Dylan Ndwiga - Assistant Director of Internal Affairs",
      ],
      captains: [
        
      ],
    },
  },
  {
    name: "Event Management Team",
    responsibilities: (
      <>
        The Event Management Team is responsible for all logistics and entertainment throughout the year and during the 26.2-hour Main Event.
      </>
    ),
    leadership: {
      overallDirector: "Ashley Paek",
      assistantDirectors: [
        "Kristina Guerra - Assistant Director of Talent Relations",
        "Daniela San Martin - Assistant Director of External Logistics",
        "Meagan Long  - Assistant Director of Internal Logistics",
        "Vivian Lopez - Assistant Director of Fundraising"
      ],
      captains: [
        
      ],
    },
  },
    {
      name: "Family Relations Team",
      responsibilities: "The Family Relations Team is composed of Captains that serve as liaisons between the Dance Marathon at UF community and the Miracle Families. Captains are paired with at least one Miracle Family and their responsibilities include maintaining consistent contact with their paired Miracle Family, facilitating cause-connection between their Family and the community, and organizing events between the Miracle Families and participating Organizations. Captains will attend monthly Family Fun Days, design and build the Family Room for the 26.2-hour Main Event, and facilitate activities and entertainment for the Miracle Families throughout the entirety of the year.",
      leadership: {
        overallDirector: "Chloe Claxton",
        assistantDirectors: [
          "Emma Sugarman - Assistant Director of Family Events",
          "Ashlin Cannella - Assistant Director of Captain Engagement",
          "Madelyn Avergonzado - Assistant Director of Outreach",
          "Victoria Poliak - Assistant Director of Cause Connection"
        ],
        captains: [
          
        ]
      }
    },
    {
      name: "Finance Team",
      responsibilities: "The Finance Team is responsible for the financial oversight of Dance Marathon at UF. This is achieved through the creative planning and strategic tracking of fundraising campaigns throughout the year. Captains will actively participate in discussions and spearhead special projects involving the creation of fundraising campaigns, incentives, and templates used by all members of Dance Marathon at UF. Through collaborating with the Merchandise, Digital Marketing, and Organization Relations Teams, Finance Captains will have the opportunity to directly impact fundraising initiatives.",
      leadership: {
        overallDirector: "Tyler Bonnoront",
        assistantDirectors: [
          "Miray Eser - Assistant Director of Fundraising Development",
          "Alejandra Gomez-Pina - Assistant Director of Finance Tracking"
        ],
        captains: [
          
        ]
      }
    },
    {
      name: "Leadership Development Team",
      responsibilities: "The Leadership Development Team is responsible for overseeing and running the Emerging Leaders Program. This team will focus on developing and integrating students with minimal previous Dance Marathon experience into the Dance Marathon at UF community through tangible exposure to Dance Marathon’s various leadership roles.",
      leadership: {
        overallDirector: "Emily Brundage",
        assistantDirectors: [
          "Surleen Sahni - Assistant Director of Development",
          "Rebekah Zuckerman - Assistant Director of Logistics",
          "Sabrina Gomez - Assistant Director of Impact Advancement",
          "Bruna Pereira - Assistant Director of Internal Relations"
        ],
        captains: [
          
        ]
      }
    },
    {
      name: "Marathon Relations Team",
      responsibilities: "The Marathon Relations Team is composed of Captains that are responsible for advising and growing Dance Marathon at UF’s high school programs, Mini Marathons. They energize and support our “Minis” by educating students on Children’s Miracle Network and Dance Marathon at UF’s history and culture.",
      leadership: {
        overallDirector: "Gabriella Petillo",
        assistantDirectors: [
          "Grace Nelson  - Assistant Director of Established Programs",
          "Marisa Ricks - Assistant Director of Evolving Programs",
          "Lucy Eichler - Assistant Director of New Programs",
          "Inara Drainville - Assistant Director of Finance and Sponsorships",
          "Madelyn Scaringe - Assistant Director of Marketing and Engagement"
        ],
        captains: [
          
        ]
      }
    },
    {
      name: "Member Advancement Team",
      responsibilities: "The Member Advancement Team is responsible for overseeing the Miracle Maker lifecycle from recruitment to attendance at Dance Marathon at UF events. This team also represents Dance Marathon at UF at student events such as club fairs and involvement expos to further our recruitment efforts. This team will execute all Miracle Maker specific events including weekly check-ins, engagement/ fundraising activation plans, as well as Main Event programming (Swim + shower, Zen room, etc.).",
      leadership: {
        overallDirector: "Alexandra Polo",
        assistantDirectors: [
          "Kaitlyn Koviack - Assistant Director of Internal Relations",
          "Avery McCormack  - Assistant Director of Recruitment",
          "Isabella Diaz-Figueroa - Assistant Director of External Relations",
        ],
        captains: [
          
        ]
      }
    },
    {
      name: "Merchandise Team",
      responsibilities: "The Merchandise Team is responsible for creating and distributing all official Dance Marathon at the University of Florida merchandise, including clothing, accessories, and fundraising incentives.",
      leadership: {
        overallDirector: "Abby Thibodeau",
        assistantDirectors: [
          "Kenya Jarrett - Assistant Director of Stores and Incentives",
          "Lauren Klein - Assistant Director of Fundraising",
          "Taylor Barrett - Assistant Director of Inventory and Mini Marathons",
          "Camile Robinson - Assistant Director of Internal Operations"
        ],
        captains: [
          
        ]
      }
    },
    {
      name: "Morale Team",
      responsibilities: "The Morale Team is responsible for keeping the spirit of Dance Marathon energetic, positive, and meaningful throughout the entire year.",
      leadership: {
        overallDirector: "Kylie Finkelstein",
        assistantDirectors: [
          "Raina Khanna - Assistant Director of Captain Relations",
          "Katie East - Assistant Director of Event Planning",
          "Becca Harkins - Assistant Director of Fundraising",
          "Jessica Perez - Assistant Director of Mini Marathon Coordination"
        ],
        captains: [
          
        ]
      }
    },
    {
      name: "Multimedia Team",
      responsibilities: "The Multimedia Team is responsible for capturing and editing all photography and videography content for Dance Marathon at the University of Florida throughout the year.",
      leadership: {
        overallDirector: "Rebecca Salamon",
        assistantDirectors: [
          "Kathryn Burke - Assistant Director of Logistics",
          "Kieran McAteer - Assistant Director of Photography",
          "Alexa Freedman - Assistant Director of Social Media",
          "Marissa Haberlin - Assistant Director of Videography"
        ],
        captains: [
          
        ]
      }
    },
    {
        name: "Organization Relations Team",
        responsibilities: "The Organization Relations Team is focused on fostering relationships between Dance Marathon and UF student organizations.",
        leadership: {
          overallDirector: "Kelsey Reader",
          assistantDirectors: [
            "Ryan LaLiberty - Assistant Director of IFC Relations",
            "Kaylee Wesner - Assistant Director of Panhellenic Relations",
            "Suki Sidhu - Assistant Director of Student Organizations",
            "Harmon Klein - Assistant Director of Operations"
          ],
          captains: [
            
          ]
        }
      },
      {
        name: "Partnerships Team",
        responsibilities: "The Partnerships Team works year-round to solicit varied businesses, food distributors, and restaurants in the greater Gainesville area for monetary and in-kind item donations.",
        leadership: {
          overallDirector: "Jaxen Ranson",
          assistantDirectors: [
            "Joshua Yaciuk - Assistant Director of Development",
            "Natalie Mann - Assistant Director of Stewardship",
            "Courtney Carter  - Assistant Director of Events",
            "River Koile - Assistant Director of Logistics"
          ],
          captains: [
            
          ]
        }
      },
    ];

export default function Captains() {
  const [mode, setMode] = React.useState(() => {
    // Retrieve the stored theme from localStorage or default to 'light'
    return localStorage.getItem('theme') || 'light';
  });
  const LPtheme = createTheme(getLPTheme(mode));

  const toggleColorMode = () => {
    setMode((prev) => {
      const newMode = prev === 'dark' ? 'light' : 'dark';
      localStorage.setItem('theme', newMode); // Store the new mode in localStorage
      return newMode;
    });
  };
  return (
    <ThemeProvider theme={LPtheme}>
      <ScrollToTop />
      <CssBaseline />
      <AppAppBar mode={mode} toggleColorMode={toggleColorMode} />
      <LazyLoad height={200} offset={100} once>
      <PageHero imageUrl={CaptainPic} title='Captain Teams' />
      </LazyLoad>
      <Container
        sx={{
          pt: { xs: 2, sm: 6 },
          pb: { xs: 2, sm: 8 },
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'left',
          gap: { xs: 2, sm: 3 },
        }}
      >
      {/* <Typography variant="h4" color='#233563' gutterBottom>
        Captain Teams
      </Typography> */}
      <Typography variant="body1" color="text.secondary" paragraph>
        Each <span style={{color: '#233563', fontWeight: 'bold'}}>Captain Team</span> is composed of an Overall Director, Assistant Directors, and Captains. Assistant Directors work year-long with their respective Overall Directors to ensure steady growth and management within their Captain Team. Captains are leaders within our organization who have specific duties throughout the year depending on their teams. Click each tab below to learn more about each team and its responsibilities.
      </Typography>

      {teams.map((team, index) => (
        <Accordion key={index}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h6" color="text.secondary">{team.name}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body2" color="text.secondary" marginBottom={1}>
            <span style={{ color: '#233563', fontWeight: 'bold' }}>Responsibilities: </span>
              {team.responsibilities}
            </Typography>
            <Typography variant="body2" color="text.secondary" marginBottom={1}>
            <span style={{ color: '#233563', fontWeight: 'bold' }}>Overall Director:  </span>
              <Chip 
                label={`${team.leadership.overallDirector}`} 
                style={{ variant:"outlined" }} 
              />
            </Typography>
            <Typography variant="body2" color="text.secondary" gutterBottom>
            <span style={{ color: '#233563', fontWeight: 'bold' }}>Assistant Directors:</span>
            </Typography>
            <Grid container spacing={2} justifyContent="center" sx={{ mb: 2 }}>
  {team.leadership.assistantDirectors.map((ad, i) => {
    const [name, title] = ad.split(' - ');
    return (
      <Grid item xs={12} sm={6} md={4} key={i}>
        <Box
          sx={{
            p: 2,
            border: '1px solid #ccc',
            borderRadius: '8px',
            textAlign: 'center',
            height: '80px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center', // Center content vertically
            alignItems: 'center' // Center content horizontally
          }}
        >
          <Typography variant="body1" color="text.secondary" sx={{ fontWeight: 'bold' }}>
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">{title}</Typography>
        </Box>
      </Grid>
       );
        })}
            </Grid>
            <Typography variant="body2" color="text.secondary">
            <span style={{ color: '#233563', fontWeight: 'bold' }}>Captains:</span>
              <Box sx={{display: 'flex', flexWrap: 'wrap', gap: 1, pl: 3, pt: 1 }}>
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
