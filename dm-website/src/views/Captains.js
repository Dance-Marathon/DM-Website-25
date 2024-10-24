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

const teams = [
  {
    name: "Dancer Engagement",
    responsibilities: (
      <>
        The Dancer Engagement Team is responsible for welcoming and communicating with Miracle Makers by hosting Check-Ins, tracking Miracle Maker involvement, and providing a year-long experience for Miracle Makers through events and other engagement throughout the year. DE Captains work alongside the Recruitment Team to help register Miracle Makers during registration pushes. Captains will be responsible for a group of Miracle Makers that they will communicate with to promote all DM at UF and Miracle Maker events or opportunities. Captains are expected to attend Check-Ins on Wednesdays in Turlington, where they will Check in Miracle Makers, log their Spirit Points, help with the Check-Ins activity, and spread the word about DM at UF on campus. Dancer Engagement also plans events and other engagement specifically for Miracle Makers, which Captains will help execute! At the Main Event, their job is to Check in Miracle Makers, encourage and support them throughout the 26.2 hours, and run swim/shower overnight. As a DE Captain, you are also expected to be a support system for your Miracle Makers and be a resource to them throughout their entire DM at UF experience!
      </>
    ),
    leadership: {
      overallDirector: "Raegan DiRenzo",
      assistantDirectors: [
        "Frankie Provenzano - Assistant Director of Stewardship",
        "Katie McKeon - Assistant Director of Internal Relations",
        "Kate Hannah - Assistant Director of External Relations",
      ],
      captains: [
        "Natalia Romano",
        "Kendall Mehlenbacher",
        "Colby Bottger",
        "Daniella Escobar",
        "River Koile",
        "Morgan Schneider",
        "Avery McCormack",
        "Gabby London",
        "Cooper Neel",
        "Cami Rubin",
        "Summer Kauffman",
        "Davi Fishman",
      ],
    },
  },
  {
    name: "Digital Marketing",
    responsibilities: (
      <>
        The Digital Marketing Team is composed of graphic designers and software developers responsible for making the Dance Marathon at UF brand come to life. Technology Captains are responsible for either the development/maintenance of the website or mobile iOS/Android applications, and Design Captains are responsible for the creation of all print/web design needs (merchandise, social media graphics, newsletters, calendars, etc.). Throughout the year, Captains work together to create high-tech, portfolio-quality materials that showcase Dance Marathon as a professional student-run movement. During the Main Event, Captains run the tech booth, which includes managing multiple screens inside the O’Dome, sending app notifications, coordinating audio/visual feeds, and creating in-event graphics.
      </>
    ),
    leadership: {
      overallDirector: "Cameron Appel",
      assistantDirectors: [
        "Katrina Isé - Assistant Director of Internal Design",
        "Ansley Goldstein - Assistant Director of External Design",
        "Zachary Grosswirth - Assistant Director of Internal Technology",
        "Eric Hengber - Assistant Director of External Technology",
        "Hailey Paek - Assistant Director of Internal Affairs",
      ],
      captains: [
        "Kate Negron",
        "Chloe Greene",
        "Sean Cheema",
        "Katelyn King",
        "Jayden Spitulnik",
        "Sydney Barnett",
        "Jennifer Gardner",
        "Marina Cheema",
        "Mia Tunon",
        "Rachel Glew",
        "Phillip-Dylan Ndwiga",
        "Alicia Grant",
        "Riley Shapiro",
        "Jamie Knox",
      ],
    },
  },
    {
      name: "Family Relations Team",
      responsibilities: "The Family Relations Team is composed of Captains that serve as liaisons between the Dance Marathon at UF community and the Miracle Families. Captains are paired with at least one Miracle Family and their responsibilities include maintaining consistent contact with their paired Miracle Family, facilitating cause-connection between their Family and the community, and organizing events between the Miracle Families and participating Organizations. Captains will attend monthly Family Fun Days, design and build the Family Room for the 26.2-hour Main Event, and facilitate activities and entertainment for the Miracle Families throughout the entirety of the year.",
      leadership: {
        overallDirector: "Dawson Geller",
        assistantDirectors: [
          "Chloe Claxton - Assistant Director of Family Events",
          "Mary Bennett - Assistant Director of Tracking",
          "Jackson Bond - Assistant Director of Internal Outreach",
          "Kristen Russo - Assistant Director of External Outreach"
        ],
        captains: [
          "Stella Hurwitz", "Emma Shellard", "Parker Brown", "Samara Becker",
          "Hadassah Sternfeld", "Riley Hearn", "Emma Sugarman", "Logan Black",
          "Lilly Smith", "Aaron Fintz", "Sophia Diaz", "Jackie Bernstein",
          "Piper Dowdell", "Gabriella Paredes", "Rachel Beer", "Victoria Poliak",
          "Gabriella Vogel", "Alexa Diamond", "Mollie Kron", "Gabrielle Monk",
          "Ashleigh Churchill", "London Taylor", "Jake Rattner", "Catherine Hanania",
          "Kaya Hall", "Matthew Strogach", "Ava Rechter", "Shreya Shah",
          "Ryan Magee", "Janelle Sumbeling", "Abhay Thungathurthi", "Ashlin Cannella",
          "Angela Trinh", "Rebecca Beer", "Haven Copeland", "Jasmine Davis",
          "Maddie Avergonzado", "Arie Eitani", "Joshua Brandt", "Madison Daire"
        ]
      }
    },
    {
      name: "Finance Team",
      responsibilities: "The Finance Team is responsible for the financial oversight of Dance Marathon at UF. This is achieved through the creative planning and strategic tracking of fundraising campaigns throughout the year. Captains will actively participate in discussions and spearhead special projects involving the creation of fundraising campaigns, incentives, and templates used by all members of Dance Marathon at UF. Through collaborating with the Merchandise, Digital Marketing, and Organization Relations Teams, Finance Captains will have the opportunity to directly impact fundraising initiatives.",
      leadership: {
        overallDirector: "Ryan Beany",
        assistantDirectors: [
          "Aaron Niazi - Assistant Director of Fundraising Development",
          "Tyler Bonnoront - Assistant Director of Finance Tracking"
        ],
        captains: [
          "Alejandra Gomez-Pina", "Karas Silver", "Justien Nguyen", "Abby Scapillato",
          "Isabella Ebaugh-Santos", "Miray Eser Eser", "Jaxen Ranson", "Jacob Bousky",
          "Ava Fisher", "Chloe Field", "Grace Chukwu", "Daniel Mateu"
        ]
      }
    },
    {
      name: "Leadership Development Team",
      responsibilities: "The Leadership Development Team is responsible for overseeing and running the Emerging Leaders Program. This team will focus on developing and integrating students with minimal previous Dance Marathon experience into the Dance Marathon at UF community through tangible exposure to Dance Marathon’s various leadership roles.",
      leadership: {
        overallDirector: "Sophie Linale",
        assistantDirectors: [
          "Alyssa Fennen - Assistant Director of Development",
          "Maya Vaidya - Assistant Director of Engagement",
          "Emily Brundage - Assistant Director of Outreach",
          "Sophia Cuna - Assistant Director of Tracking"
        ],
        captains: [
          "Cristyl Rodriguez", "William Lynfatt", "Samantha Mirer", "Sabrina Gomez",
          "Bruna Pereira", "Isabella Garcia", "Julianne Jane", "Laynee Plawa",
          "Emma Michalski", "Emma Ackerman", "Madylin Morse", "Grace Nesbit",
          "Shannon Detert", "Lindsay Nattis", "Jillian Jones", "Caitlyn Galvez",
          "Gabriela Verez", "Alexia Bello", "Mackenzie Gale", "Haley Jones",
          "Isabelle Rosado", "Joshua Song", "Becca Reich", "Rebekah Zuckerman",
          "Gabriel Sengelmann", "Mia Corigliano", "Haley Black", "Victoria Rios",
          "Ally McGill", "Stella Monforte", "Ana Luiza Queiroz Damo", "Surleen Sahni"
        ]
      }
    },
    {
      name: "Marathon Relations Team",
      responsibilities: "The Marathon Relations Team is composed of Captains that are responsible for advising and growing Dance Marathon at UF’s high school programs, Mini Marathons. They energize and support our “Minis” by educating students on Children’s Miracle Network and Dance Marathon at UF’s history and culture.",
      leadership: {
        overallDirector: "Lexi Devescovi",
        assistantDirectors: [
          "Madelyn Scaringe - Assistant Director of Established Programs",
          "Gabriella Petillo - Assistant Director of Evolving Programs",
          "Grace Nelson - Assistant Director of New Programs",
          "Isabella Smedley - Assistant Director of Operations"
        ],
        captains: [
          "Inara Drainville", "Alexa Katz", "Allison Pace", "Eva Sutton",
          "Kyley Holder", "Faith Giambalvo", "Haven Wilson", "Tiffany Cain",
          "Matthew Lehman", "Kendyll Campi", "Marisa Ricks", "Grace Grier",
          "Maria Sacchi", "Sara Hassler", "Julia Paulsen", "Lucy Eichler",
          "Kaylin Djoko", "Amina Mubarak", "Lindsay Hersh", "Priya Kalaria",
          "Kenley Robinson", "Reagan Parker"
        ]
      }
    },
    {
      name: "Merchandise Team",
      responsibilities: "The Merchandise Team is responsible for creating and distributing all official Dance Marathon at the University of Florida merchandise, including clothing, accessories, and fundraising incentives.",
      leadership: {
        overallDirector: "Olivia Knier",
        assistantDirectors: [
          "Alexandra Kaye - Assistant Director of Incentives and Inventory",
          "Abby Thibodeau - Assistant Director of Fundraising",
          "Lauren Klein - Assistant Director of Internal Operations",
          "Chloe Lindow - Assistant Director of Stores and Mini Marathons"
        ],
        captains: [
          "Morgan Mayhann", "Camille Robinson", "Lindsey Perry", "Kenya Jarrett",
          "Isabel Acosta", "Abigayle Watson", "Kiersten Grimes", "Melody Alonso",
          "Alexis Pullos", "Joshua Yaciuk", "Emily Celestrin", "Taylor Barrett",
          "Elana Gabbay", "Adi Saigal", "Alexandra Saclayan"
        ]
      }
    },
    {
      name: "Morale Team",
      responsibilities: "The Morale Team is responsible for keeping the spirit of Dance Marathon energetic, positive, and meaningful throughout the entire year.",
      leadership: {
        overallDirector: "Dylan Siegel",
        assistantDirectors: [
          "Nina Rico - Assistant Director of Captain Relations",
          "Lilliana Remillard - Assistant Director of Event Planning",
          "Sam Gurrerro - Assistant Director of Fundraising",
          "Raina Khanna - Assistant Director of Mini Marathon Coordination"
        ],
        captains: [
          "Sean Campbell", "Emily Sanz", "DeLaney Brosen", "Kylie Finkelstein",
          "Carson Duke", "Daniel Trethewey", "Julia Zager", "Annalee Watts",
          "Lily Galkin", "Sophie Fakhouri", "Genesis Rodriguez", "Ally Salzberg",
          "Becca Harkins", "Makenzie Cole", "Zoe Donohoe", "Candalyn Thompson",
          "Jessica Perez", "Cecilia Coleman", "Hollyn O'Brien", "Jordan Cohan",
          "Casey Siner", "Julia Mortensen", "Lauren Maya", "Cassandra Musca",
          "Lily Darnell", "Olivia Caldara", "Kelsey Kettel", "Anna Garst",
          "Nika Forouzannia", "Katie East", "Lauren Price", "Delaney Kennedy",
          "Mary Grace Kelly", "Olivia Martinez", "Kayla Flores", "Joshua Waters",
          "Meghan Wilbrett", "Sydney Kollas"
        ]
      }
    },
    {
      name: "Multimedia Team",
      responsibilities: "The Multimedia Team is responsible for capturing and editing all photography and videography content for Dance Marathon at the University of Florida throughout the year.",
      leadership: {
        overallDirector: "Ava Dinow",
        assistantDirectors: [
          "Braden Romano - Assistant Director of Logistics",
          "Sydney Crenshaw - Assistant Director of Photography",
          "Sky Augusta - Assistant Director of Social Media",
          "Rebecca Salamon - Assistant Director of Videography"
        ],
        captains: [
          "Anais Ramentol", "Kyle DiDonato", "Jennifer Blardonis", "Alexa Freedman",
          "Marissa Haberlin", "Vanessa Garcia", "Katie Apolo", "Kathryn Burke",
          "Briana Boyd", "Maddox Forman", "Kieran McAteer", "Mallory Schumann",
          "Libby Clifton", "Lucy Tadlock", "Delaney Craig", "Abby Brady",
          "Bayden Armstrong", "Sophia Gonzalez"
        ]
      }
    },
    {
        name: "Organization Relations Team",
        responsibilities: "The Organization Relations Team is focused on fostering relationships between Dance Marathon and UF student organizations.",
        leadership: {
          overallDirector: "Caroline Lee",
          assistantDirectors: [
            "Cami Rosenthal - Assistant Director of Internal Relations",
            "Avery Collada - Assistant Director of External Relations",
            "Kaylee Wesner - Assistant Director of Tracking"
          ],
          captains: [
            "Cami Rosenthal", "Avery Collada", "Kaylee Wesner", "Harmon Klein",
            "Zoe Sakellarios", "Shaila Spritzer", "Holly Kaplan", "Ariana Feldman",
            "Julia Glacer", "Carly Salk", "Ryan LaLiberty", "Chloe Megginson",
            "Ashley Alex", "Samantha Santo", "Julianne Robinson", "Corey Schwartz",
            "Zach Wolsonovich", "Liam Miller"
          ]
        }
      },
      {
        name: "Outreach Team",
        responsibilities: "The Outreach Team seeks to grow the Dance Marathon community beyond our student body by sharing our passion and mission to Faculty and Staff, Members’ Families, and the broader Gainesville community.",
        leadership: {
          overallDirector: "Averie Engel",
          assistantDirectors: [
            "Maya Hershkowitz - Assistant Director of Community Engagement",
            "Lani Tudor-Dodd - Assistant Director of University Relations",
            "Alexandra Polo - Assistant Director of Logistics"
          ],
          captains: [
            "Catherine Hardy", "Jordan Hentrich", "Tori Kitchens", "Danielle Work",
            "Jenna Hentrich", "Mila Mullin", "Sonali Vijay", "Gabriella Williams",
            "Eden Zausner", "Kylie Katims", "Grace Carreno", "Abhilasha Kadel"
          ]
        }
      },
      {
        name: "Partnerships Team",
        responsibilities: "The Partnerships Team works year-round to solicit varied businesses, food distributors, and restaurants in the greater Gainesville area for monetary and in-kind item donations.",
        leadership: {
          overallDirector: "Jessica Winograd",
          assistantDirectors: [
            "Natalie Mann - Assistant Director of Monetary Donations",
            "Jaiden Lopes - Assistant Director of In-Kind Donations",
            "Elle Lentz - Assistant Director of Stewardship",
            "Chris Keeble - Assistant Director of Events",
            "Annie Ross - Assistant Director of Logistics"
          ],
          captains: [
            "Reagan Doucette", "Courtney Carter", "Annette Concepcion", "Erin Mooney",
            "Gabriela Wisz", "Jessie Squadrito", "Hadley Miller", "Alex Licht",
            "Sarah Klein", "Marcus Khanna", "Isabelle Azambuja", "Kayla Bigelman",
            "Emma Golub", "Katie Glennon", "Matthew Hill", "Renee Zaiss"
          ]
        }
      },
      {
        name: "Productions Team",
        responsibilities: "The Productions Team is responsible for all logistics and entertainment throughout the year and during the 26.2-hour Main Event.",
        leadership: {
          overallDirector: "Caroline Eaton",
          assistantDirectors: [
            "Ashley Paek - Assistant Director of Talent Relations",
            "Joshua Rosenblatt - Assistant Director of External Logistics",
            "Lillian Ghozali - Assistant Director of Internal Logistics",
            "Leah Johnson - Assistant Director of Fundraising"
          ],
          captains: [
            "Addison Dodd", "RyLee Haugh", "Sarah Broe", "Meagan Long",
            "Claire Dinh", "Layna Hood", "Isabella Ward", "Rebecca Weigle",
            "Olivia Rodriguez", "Dani Primerano", "Kristina Guerra", "Ava Scammell",
            "Vivian Lopez", "Meryn Rubenstein", "Daniela San Martin", "Elisa Crivelli"
          ]
        }
      },
      {
        name: "Public Relations Team",
        responsibilities: "The Public Relations Team focuses on maintaining the organization’s public reputation through outreach and communication.",
        leadership: {
          overallDirector: "Grey Chapin",
          assistantDirectors: [
            "Anabella Fernandez - Assistant Director of Internal Communications",
            "Rylie Pryor - Assistant Director of External Communications",
            "Lainey Shapiro - Assistant Director of Social Media"
          ],
          captains: [
            "Brooke Backof", "Sofia Amoroso", "Sofia Castaneda-Castellanos", "Elizabeth Mallard",
            "Taylor Dean", "Sarah Abisror", "Alexa Gingold", "Alyza Dooley",
            "Skylar Bons", "Logan Feldman", "Lexie Tantleff", "Kaylee McCarthy"
          ]
        }
      },
      {
        name: "Recruitment Team",
        responsibilities: "The Recruitment Team is responsible for recruiting participants for Dance Marathon.",
        leadership: {
          overallDirector: "Ava Orlando",
          assistantDirectors: [
            "Suki Sidhu - Assistant Director of Stewardship",
            "Gabriella Proulx - Assistant Director of Tracking",
            "Isabella Duarte - Assistant Director of External Engagement"
          ],
          captains: [
            "Jordan Hartman", "Ariel Banfalvy", "Abigail Elliott", "Casey Strauss",
            "Francesca Abarno", "Daniela Velasquez", "Amaana Quadir", "Lea Mattia",
            "Olivia Kaplan", "Isabella Diaz Figueroa", "Presley Berman", "Kaitlyn Koviack",
            "Prithika Bose", "Rae Weinstein"
          ]
        }
      }
    ];

export default function Captains() {
  const [mode, setMode] = React.useState(() => {
    // Retrieve the stored theme from localStorage or default to 'dark'
    return localStorage.getItem('theme') || 'dark';
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
      <PageHero imageUrl={CaptainPic} title='Captain Teams' />
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
        Each Captain Team is composed of an Overall Director, Assistant Directors, and Captains. Assistant Directors work year-long with their respective Overall Directors to ensure steady growth and management within their Captain Team. Captains are leaders within our organization who have specific duties throughout the year depending on their teams. Click each tab below to learn more about each team and its responsibilities.
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
            <span style={{ color: '#233563', fontWeight: 'bold' }}>Overall Director: </span>
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
