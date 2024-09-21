
// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import { Box, Typography, Link } from "@mui/material";
import getLPTheme from "../getLPTheme";

function HorizontalTeamCard({ image, name, position, email }) {
  return (
    <Card sx={{ mt: 1}}>
      <Grid container>
        <Grid item xs={12} md={6} lg={4} sx={{ mt: -6 }}>
          <Box width="100%" pt={7.5} pb={1} px={1}>
            <Box
              component="img"
              src={image}
              alt={name}
              width="100%"
              borderRadius="10%"
              shadow="lg"
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={6} lg={8} sx={{ my: "auto" }}>
          <Box pt={{ xs: 1, lg: 2.5 }} pb={2.5} pr={4} pl={{ xs: 4, lg: 1 }} lineHeight={1}>
            <Typography variant="h5" color="primary">{name}</Typography>
            <Typography variant="h6" color={'primary'} mb={0.5}>
              {position.label}
            </Typography>
            <Link variant="body2" color="secondary">
                {email}
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Card>
  );
}

// Typechecking props for the HorizontalTeamCard
HorizontalTeamCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  position: PropTypes.shape({
    label: PropTypes.string.isRequired,
  }).isRequired,
  description: PropTypes.string.isRequired,
};

export default HorizontalTeamCard;