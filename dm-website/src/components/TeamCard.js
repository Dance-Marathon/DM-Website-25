import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import { Box, Typography, Link } from "@mui/material";

function HorizontalTeamCard({ image, name, position, email }) {
  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        p: 2,
      }}
    >
      {/* Image Box */}
      <Box
        sx={{
          width: "100%", // smaller than full width
          aspectRatio: "1 / 1", // keeps it square
          overflow: "hidden",
          borderRadius: 2, // medium rounding (use 3 or "50%" for circular)
          mb: 2,
        }}
      >
        <Box
          component="img"
          src={image}
          alt={name}
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
        />
      </Box>

      {/* Text Content */}
      <Box
        sx={{
          textAlign: "center",
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Typography variant="h6" color="#7E31C8" fontWeight="bold">
          {name}
        </Typography>
        <Typography
          variant="body2"
          color="#7E31C8"
          sx={{ fontSize: "0.8rem", mb: 0.5 }}
        >
          {position.label}
        </Typography>
        {/* The corrected Link component */}
        <Link
          href={`mailto:${email}`}
          variant="caption"
          sx={{
            fontSize: "0.6rem",
            color: "#7E31C8",
            whiteSpace: "nowrap", // Keep text on a single line
            overflow: "hidden", // Hide any overflowing text
            textOverflow: "ellipsis", // Add "..." for truncated text
            display: "block", // Important for overflow/ellipsis to work
            maxWidth: "100%", // Ensure it doesn't exceed its parent's width
            mx: "auto", // Center the block if its content is shorter than maxWidth
          }}
        >
          {email}
        </Link>
      </Box>
    </Card>
  );
}

HorizontalTeamCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  position: PropTypes.shape({
    label: PropTypes.string.isRequired,
  }).isRequired,
  email: PropTypes.string.isRequired,
};

export default HorizontalTeamCard;
