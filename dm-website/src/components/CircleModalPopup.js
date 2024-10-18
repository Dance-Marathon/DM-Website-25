import * as React from 'react';
import { Typography, Modal, Box, Button } from '@mui/material';
import { styled } from '@mui/system';

export default function CircleModalPopup({ image, title, content, learnMoreLink }) {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const Container = styled(Box)(({ theme }) => ({
    position: 'relative',
    width: '200px',
    height: '200px',
    overflow: 'hidden',
    borderRadius: '50%',
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
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'black',
    opacity: 0,
    transition: 'opacity 0.3s ease',
    textAlign: 'center',
    padding: '8px',
    borderRadius: '50%',
  }));

  return (
    <>
      <Box sx={{ textAlign: 'center' }}>
        <Container onClick={handleOpen}>
          <Image src={image} alt={title} />
          <Overlay className="overlay">
            <Typography variant="h6">{/* Optional hover text */}</Typography>
          </Overlay>
        </Container>

        <Typography
          variant="h6"
          color="text.secondary"
          sx={{ marginTop: 2, paddingRight: '60px' }}
        >
          {title}
        </Typography>
      </Box>

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
            width: '65%',
            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography
            id={`${title}-modal-title`}
            variant="h6"
            component="h2"
            sx={{ fontWeight: 'bold', color: '#000000', textAlign: 'left' }}
          >
            Meet {title}
          </Typography>
          <Typography
            id={`${title}-modal-description`}
            sx={{ mt: 2, color: '#000000', fontSize: '0.9rem', textAlign: 'left' }}
          >
            {content}
          </Typography>

          {learnMoreLink && (
            <Button
              href={learnMoreLink}
              target="_blank"
              rel="noopener noreferrer"
              variant="contained"
              sx={{
                mt: 3,
                alignSelf: 'start', // Left align the button
                padding: '10px 20px',  // Adjust padding for larger appearance
                fontWeight: 'bold', 
                color: '#000000',
              }}
            >
              Learn More
            </Button>
          )}

          <Button
            onClick={handleClose}
            sx={{ mt: 2, mx: 'auto', display: 'block', width: '20%' }}
          >
            Close
          </Button>
        </Box>
      </Modal>
    </>
  );
}
