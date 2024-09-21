import * as React from 'react';
import { Typography, Modal, Box, Button } from '@mui/material';
import { styled } from '@mui/system';

export default function CircleModalPopup({ image, title, content }) {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // Container for the circular card
  const Container = styled(Box)(({ theme }) => ({
    position: 'relative',
    width: '200px',
    height: '200px',
    overflow: 'hidden',
    borderRadius: '50%', // Make it circular
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
    backgroundColor: 'rgba(255, 255, 255, 0.5)', // Light overlay
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'black', // Change the text color to black for better contrast
    opacity: 0,
    transition: 'opacity 0.3s ease',
    textAlign: 'center',
    padding: '8px',
    borderRadius: '50%', // Make the overlay circular as well
  }));

  return (
    <>
      {/* Circular Image Container */}
      <Box sx={{ textAlign: 'center' }}> {/* Centering the entire component */}
        <Container onClick={handleOpen}>
          <Image src={image} alt={title} />
          <Overlay className="overlay">
            <Typography variant="h6">{/* Hover text can go here */}</Typography>
          </Overlay>
        </Container>

        {/* Title Below the Image, Centered with manual padding */}
        <Typography
          variant="h6"
          color="text.secondary"
          sx={{
            marginTop: 2,
            paddingRight: '60px', // Move the text to the left
          }}
        >
          {title}
        </Typography>
      </Box>

      {/* Modal for the Card */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby={`${title}-modal-title`}
        aria-describedby={`${title}-modal-description`}
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '75%',
            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography id={`${title}-modal-title`} variant="h6" component="h2" sx={{ fontWeight: 'bold', color: '#000000' }}>
            Meet {title}
          </Typography>
          <Typography id={`${title}-modal-description`} sx={{ mt: 2, color: '#000000' }}>
            {content}
          </Typography>
          <Button onClick={handleClose} sx={{ mt: 2 }}>
            Close
          </Button>
        </Box>
      </Modal>
    </>
  );
}
