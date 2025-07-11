import React from "react";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { useTheme } from "@mui/material/styles"; // Import useTheme

const Container = styled(Box)(({ theme }) => ({
  position: "relative",
  overflow: "hidden",
  boxShadow: "2px 2px 2px rgba(0, 0, 0, 0.5)",
  cursor: "pointer",
  "&:hover .overlay": {
    opacity: 1,
  },
  // Responsive sizing for the card itself
  [theme.breakpoints.down("sm")]: {
    // On screens smaller than 'sm' (typical mobile devices)
    width: "calc(50vw - 36px)", // Approx. 50% of viewport width minus some for padding/gap
    height: "calc(50vw - 36px)", // Keep it square
    borderRadius: "15px", // Original border radius for smaller cards
  },
  [theme.breakpoints.up("sm")]: {
    // On screens 'sm' and larger (tablets and desktops)
    width: "215px", // Original desktop width
    height: "215px", // Original desktop height
    borderRadius: "15px", // Original border radius
  },
}));

const Image = styled("img")({
  width: "100%",
  height: "100%",
  objectFit: "cover",
});

const Overlay = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "white",
  opacity: 0,
  transition: "opacity 0.3s ease",
  textAlign: "center",
  padding: "8px",
}));

const SquareCardSmall = ({ image, title, hoverText, link }) => {
  // Removed 'theme' from props as it's not directly used here
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
          fontWeight={500}
          sx={{
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "block",
            // Responsive font size for title
            fontSize: { xs: 15, sm: 19 }, // Smaller on mobile
          }}
        >
          {title}
        </Typography>
      </Box>
      <Overlay className="overlay">
        <Typography
          variant="h6"
          sx={{
            // Responsive font size for hover text
            fontSize: { xs: 10, sm: 16 }, // Smaller on mobile
            height: "65%", // Maintain scrollability
            overflow: "auto",
            textOverflow: "ellipsis",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {hoverText}
        </Typography>
      </Overlay>
    </Container>
  );
};

export default SquareCardSmall;
