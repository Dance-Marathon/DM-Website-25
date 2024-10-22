
// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";
import { Typography} from "@mui/material";
import CardContent from '@mui/material/CardContent';

function GetInvolvedCard({ name, description }) {
  return (
    <Card
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                flexGrow: 1,
                p: 0.5,
                ml: 2,
                mr: 2,
                mb: 2,
              }}
            >
              <CardContent>
                <Typography variant="subtitle2" color="primary">
                {name}
                </Typography>
                <Typography variant="body1" color="text.secondary" pt={1}>
                {description}
                </Typography>
              </CardContent>
    </Card>
  );
}

// Typechecking props for the HorizontalTeamCard
GetInvolvedCard.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default GetInvolvedCard;