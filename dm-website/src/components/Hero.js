import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import "../App.css";

export default function Hero() {
  return (
    <Box
      id="hero"
      sx={{
        position: "relative",
        width: "100%",
        height: {
          xs: "40vh", // Small height for mobile
          sm: "50vh", // Slightly larger for tablets
          md: "70vh", // Default for medium and up
        },
        overflow: "hidden",
        backgroundColor: "black",
      }}
    >
      <video
        className="VideoTag"
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          pointerEvents: "none",
        }}
      >
        <source src="/home_video_summer25.mp4" type="video/mp4" />
      </video>
      {/* Centered text container */}
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          color: "white",
          zIndex: 1,
        }}
      >
        <Box sx={{ marginBottom: "0.2em" }}>
          <Typography
            variant="h1"
            component="div"
            sx={{
              fontFamily: "CasaPinada",
              fontWeight: 300,
              fontSize: {
                xs: "2rem",
                sm: "3rem",
                md: "clamp(3rem, 10vw, 5rem)",
              },
              textShadow: "4px 4px 4px rgba(0, 0, 0, 0.5)",
              whiteSpace: "nowrap",
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
              fontSize: {
                xs: "3rem",
                sm: "4rem",
                md: "clamp(3rem, 10vw, 5rem)",
              },
              textShadow: "4px 4px 4px rgba(0, 0, 0, 0.5)",
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
              fontSize: "clamp(2rem, 4vw, 5rem)",
              textShadow: "4px 4px 4px rgba(0, 0, 0, 0.5)",
            }}
          >
            @FeelTheMagic
          </Typography>
        </Box>
      </Box>
      {/* Bottom bar */}
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          height: "10px",
          backgroundColor: "secondary.main",
        }}
      />
    </Box>
  );
}
