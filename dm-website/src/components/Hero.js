import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function Hero() {
  return (
    <Box
      id="hero"
      sx={{
        position: 'relative',
        width: '100%',
        height: '60vh',
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
        <source src="/home_video.mp4" type='video/mp4'/>
      </video>
      <Typography
        variant="h1"
        component="div"
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          color: 'white',
          textAlign: 'center',
          zIndex: 1,
          fontSize: 'clamp(3rem, 4vw, 4rem)',
          textShadow: '4px 4px 4px rgba(0, 0, 0, 0.5)',
          maxWidth: '100%',
        }}
      >
        Dance Marathon at the University of Florida
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
