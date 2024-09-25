import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function PageHero({ imageUrl, title }) {
  return (
    <Box
      id="pagehero"
      sx={{
        position: 'relative',
        width: '100%',
        height: '60vh',
        overflow: 'hidden',
        backgroundColor: 'black',
      }}
    >
      <Box
        component="img"
        src={imageUrl}
        alt="Page Hero"
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      />
      <Typography
        variant="h1"
        component="div"
        sx={{
          fontFamily: "CasaPinada",
          fontWeight: 300,
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          color: 'white',
          textAlign: 'center',
          zIndex: 1,
          fontSize: 'clamp(3rem, 10vw, 5rem)',
          textShadow: '2px 2px 2px rgba(0, 0, 0, 0.5)',
          maxWidth: '100%',
        }}
      >
        {title}
      </Typography>
      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          height: '10px',
          backgroundColor: 'secondary.main',
        }}
      />
    </Box>
  );
}

PageHero.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default PageHero;
