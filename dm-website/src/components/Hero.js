import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import '../App.css';

export default function Hero() {
  return (
    <Box
      id="hero"
      sx={{
        position: 'relative',
        width: '100%',
        height: '70vh',
        overflow: 'hidden',
        backgroundColor: 'black',
      }}
    >
      <video
        className='VideoTag'
        autoPlay
        loop
        muted
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      >
        <source src="/home_video_summer25.mp4" type='video/mp4' />
      </video>
      {/* Centered text container */}
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          color: 'white',
          zIndex: 1,
        }}
      >
        <Box sx={{ marginBottom: '0.2em' }}>
          <Typography
            variant="h1"
            component="div"
            sx={{
              fontFamily: "CasaPinada",
              fontWeight: 300,
              fontSize: 'clamp(3rem, 10vw, 5rem)',
              textShadow: '4px 4px 4px rgba(0, 0, 0, 0.5)',
              whiteSpace: 'nowrap',
            }}
          >
            Dance Marathon at the
          </Typography>
        </Box>
        <Box>
          <Typography
            variant="h1"
            component="div"
            sx={{
              fontFamily: "CasaPinada",
              fontWeight: 300,
              fontSize: 'clamp(3rem, 10vw, 5rem)',
              textShadow: '4px 4px 4px rgba(0, 0, 0, 0.5)',
            }}
          >
            University of Florida
          </Typography>
        </Box>
        <Box>
          <Typography
            variant="h1"
            component="div"
            sx={{
              fontFamily: "CasaPinada",
              fontWeight: 300,
              fontSize: 'clamp(2rem, 4vw, 5rem)',
              textShadow: '4px 4px 4px rgba(0, 0, 0, 0.5)',
            }}
          >
            @FeelTheMagic
          </Typography>
        </Box>
      </Box>
      {/* Bottom bar */}
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
