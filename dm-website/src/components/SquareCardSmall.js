import React from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/system';

const Container = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: '250px',
  height: '250px',
  overflow: 'hidden',
  borderRadius: '15px',
  boxShadow: '2px 2px 2px rgba(0, 0, 0, 0.5)',
  cursor: 'pointer',
  '&:hover .overlay': {
    opacity: 1,
  },
}));

const Image = styled('img')({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});

const Overlay = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: 'white',
  opacity: 0,
  transition: 'opacity 0.3s ease',
  textAlign: "center",
  padding: "8px"
}));

const SquareCardSmall = ({ image, title, hoverText, link, theme }) => {
  const handleClick = () => {
    window.location.href = link;
  };

  return (
    <Container onClick={handleClick}>
      <Image src={image} alt={title} />
      <Box
        position="absolute"
        bottom="0px"
        left="0px"
        width="100%"
        height="20%"
        backgroundColor="#7E31C880" /*rgba(35, 53, 99, 0.75)*/
        padding="5px 10px"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Typography
          variant="h4"
          color="white"
          fontSize={22}
          fontWeight={500}
          sx={{
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: 'block',
            //textShadow: '2px 2px 2px rgba(0, 0, 0, 0.5)',
          }}
        >
          {title}
        </Typography>
      </Box>
      <Overlay className="overlay">
        <Typography
          variant="h6"
        >
          {hoverText}
        </Typography>
      </Overlay>
    </Container>
  );
};

export default SquareCardSmall;
