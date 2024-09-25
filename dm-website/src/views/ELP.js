import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import AppAppBar from '../components/AppAppBar';
import getLPTheme from '../getLPTheme';
import Footer from '../components/Footer';
import { Container, Typography, Grid } from '@mui/material';
import ScrollToTop from "../components/ScrollToTop";
import PageHero from '../components/PageHero';
import SquareCard from '../components/SquareCard';

import HeroPic from "../assets/images/overalls/SW.jpg";
import ELPPic from "../assets/images/pagepics/ELPPic.jpg";

export default function About() {
  const [mode, setMode] = React.useState('light');
  const LPtheme = createTheme(getLPTheme(mode));

  const toggleColorMode = () => {
    setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const data = [
    // Column 1
    [
      "Abby Neal", "Abhay Thungathurthi", "Abigail Lofstead", "Abigail Stafford", "Ahimsan Sivasekaran", "Alessandra Dunn",
      "Alexandra Saclayan", "Alexia Bello", "Alissa Gonzalez-Mir", "Ally McGill", "Amberina Khoja", "Ana Luiza Queiroz Damo",
      "Angela Hanna", "Anissa Moraille", "Annette Concepcion", "Annie Frost", "Anthony Soehnlein", "Ashley Buckley",
      "Ava Mariani", "Ava Eckstein-Schoemann", "Avery Collada", "Avery Thieman", "Bianca Filippone", "Bruna Pereira",
      "Catlin Neumann", "Caitlyn Galvez", "Camden Crews", "Carli Fitzpatrick", "Carolina Paz", "Caroline Fuss",
      "Caroline Morris", "Catherine Hanania", "Charlee Childers", "Chase LaGrande", "Chloe Hutt", "Christopher Hays",
      "Claire Dean", "Dakota Moss", "Daniela Frank-Fernandez", "Daniela San Martin", "Elisa Perez-Mena", "Elise Chapman",
      "Elizabeth Mallard", "Elizaveta Ivanova", "Ella Fedewa", "Ella Hartle", "Ella Zucchero", "Ellen Cocurull",
    ],
  
    // Column 2
    [
      "Ellie Alvis", "Elysse Sanchez", "Emely Almendarez", "Emilee Hass", "Emily Celestrin", "Emma Fetter",
      "Emma Joyner", "Emma Michalski", "Emma Shellard", "Erin Mooney", "Eryn Klaus", "Eva Sutton",
      "Evelyn McDaniel", "Fernando Santiago Balsalobre", "Gabriel Sengelmann", "Gabriela Castro", "Gabriela Wisz", "Gabriella Paredes",
      "Gavin Winkler", "Genesis Rodriguez", "Genevieve Lujan", "Georgia Little", "Grace Nesbit", "Haley Black",
      "Haley Hinkle", "Haley Randolph", "Halsey Fore", "Haven Copeland", "Heather Thomas", "Hudson Fry",
      "Illeana West", "Isabella Gomes", "Isabella Ward", "Isabelle Azambuja", "Isabelle Rosado", "Izzy Garcia",
      "Jackson Ferlan", "Jacob Bousky", "Jenna Bell", "Jennifer Lynfatt", "Jesse Zelahy", "Jessie Haller",
    ],
  
    // Column 3
    [
      "Jillian Jones", "Jocelyn Riley", "Jocelyn Salpeter", "Jordyn Klein", "Julia Cherwony", "Julianna Tran",
      "Julianne Jane", "Justien Nguyen", "Karishma Advani", "Katelyn Uzila", "Katherine Anderson", "Katherine Timmins",
      "Katrina Langer", "Kayla Flores", "Kendall O'Connor", "Kiersten Grimes", "Kristina Vela", "Kyle Kuhn",
      "Kyle Silverstain", "Kyra Jones", "Lauren Woodhouse", "Layna Hood", "Liam Knowles", "Lilah Edwards",
      "Lindsay Nattis", "Lindsey Perry", "Luisa Peralta", "Macey Warring", "Madeline Walsh", "Madisyn Moore",
      "Mallory Loge", "Marianna Mendoza", "Marisa Fabian", "Marisa Ricks", "Mary Chase Germain", "Matthew Anderson",
      "Meg Orie", "Meghan Dunlap", "Mia Corigliano", "Mollie Kron", "Morgan Kronlage", "Naseh Sukhera",
    ],
  
    // Column 4
    [
      "Natalie Mann", "Naydelin Trejo", "Nicole Barroso", "Olivia Book", "Olivia Martinez", "Olivia Rodriguez",
      "Raaghuv Nandur", "Rachel Leiter", "Rachel Yavner", "Rebecca Beer", "Rebekah Zuckerman", "Riley Taylor",
      "Rylee Brown", "Ryleigh Gray", "Sabrina Gomez", "Samantha Mirer", "Samantha Puma", "Samantha Santo",
      "Samantha Squires", "Samuel Mento", "Sarah Broe", "Sarah Eisenberg", "Sarah Thomas", "Shannon Detert",
      "Skylar Bons", "Sofia Amoroso", "Sofia Bostic", "Sophia Monsalve", "Sophia Ode", "Spencer Sturman",
      "Stella Monforte", "Surleen Sahni", "Sydney Holderman", "Sydney Ohs", "Sydney Sever", "Sydney Shapiro",
      "Sydney Stresen-Reuter", "Sydney Yee", "Tamille Hutson", "Thomas Chicles", "Victoria Hurles", "Victoria Rios",
      "Vladimir Handjiev", "William Cioffi"
    ]
  ];
  

  return (
    <ThemeProvider theme={LPtheme}>
      <ScrollToTop />
      <CssBaseline />
      <AppAppBar mode={mode} toggleColorMode={toggleColorMode} />
      <PageHero imageUrl={ELPPic} title='Emerging Leaders'/>
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
        <Box
          sx={{
            width: { sm: '100%', md: '100%' },
            textAlign: { sm: 'left', md: 'left' },
          }}
        >
            <Typography variant="body1" paragraph color="text.secondary">
              <b>The Emerging Leaders Program</b> aims to cultivate the leadership skills of new members of the Dance Marathon community by providing hands-on activities, shadowing opportunities with other captain teams, and education about Dance Marathon at the University of Florida and Children's Miracle Network. The program strives to engage students who have a passion for helping others and who are passionate in our fight for a future without childhood illness.            
            </Typography>
            <Typography variant="body1" paragraph color="text.secondary">
              Members of the Emerging Leaders Program will attend weekly small group meetings and monthly general body meetings. Throughout their small group meetings, Emerging Leaders will focus on completing diverse projects that inspire the Dance Marathon community, expanding their knowledge, leadership, and personal fundraising efforts, and participating in bonding with like-minded peers. At general body meetings, Emerging Leaders will have the opportunity to learn more about the goals and efforts of Dance Marathon, hear inspiring stories from our Miracle Families, and gain exposure to prominent speakers from the University of Florida and the Gainesville community.            
            </Typography>
            <Typography variant="body1" paragraph color="text.secondary">
              During the Main Event, Emerging Leaders will have the ability to use the skills they’ve learned throughout the year to participate in various leadership opportunities as well as enjoy the Main Event from different perspectives.            
            </Typography>
        </Box>
      
        <Typography variant="h5" align="center" gutterBottom color="text.secondary" marginTop={4}>
          2024 Emerging Leaders
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
        <Grid container spacing={2}>
          {data.map((column, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              {column.map((name, i) => (
                <Typography key={i} variant="body2" color="text.secondary">
                  {name}
                </Typography>
              ))}
            </Grid>
          ))}
        </Grid>
        </Box>
      </Container>
      <Footer />
    </ThemeProvider>
  );
}
