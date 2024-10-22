// NotFound.js
import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import CursedCam from "../assets/images/cursedcam.jpg";

const NotFound = () => (
  <Box
    sx={{
      minHeight: '100vh',
      backgroundImage: `url(${CursedCam})`, // Use the imported image
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      color: 'white',
      padding: 2,
    }}
  >
    <Typography variant="h1" component="h1" gutterBottom sx={{ fontFamily: "CasaPinada", color: "black", fontWeight: "bold" }}>
      Error 404
    </Typography>
    <Typography variant="h4" component="h2" gutterBottom sx={{ fontFamily: "CasaPinada", color: "black"}}>
      Oops! Page Not Found
    </Typography>
    <Button
      variant="contained"
      color="primary"
      component={Link}
      to="/"
      sx={{ mt: 3 }}
    >
      Back to Home
    </Button>
  </Box>
);

export default NotFound;
