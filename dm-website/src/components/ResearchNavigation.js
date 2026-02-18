import { Grid, Button } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import researchData from "../data/researchData";

export default function ResearchNavigation() {
  const { linkName } = useParams();
  const navigate = useNavigate();

  const sorted = [...researchData].reverse();

  const currentIndex = sorted.findIndex((r) => r.linkName === linkName);

  const prevResearch = sorted[currentIndex - 1];
  const nextResearch = sorted[currentIndex + 1];

  const hasPrev = !!prevResearch;
  const hasNext = !!nextResearch;

  return (
    <Grid
      container
      spacing={2}
      sx={{
        mt: 2,
        flexDirection: { xs: "column", sm: "row" },
        justifyContent: {
          xs: "center",
          sm:
            hasPrev && hasNext
              ? "space-between"
              : hasNext
                ? "flex-end"
                : "flex-start",
        },
      }}
    >
      {prevResearch && (
        <Grid item xs={12} sm="auto">
          <Button
            fullWidth
            variant="outlined"
            startIcon={<ArrowBackIcon />}
            onClick={() => navigate(`/research/${prevResearch.linkName}`)}
          >
            Previous Research Spotlight
          </Button>
        </Grid>
      )}

      {nextResearch && (
        <Grid item xs={12} sm="auto">
          <Button
            fullWidth
            variant="outlined"
            endIcon={<ArrowForwardIcon />}
            onClick={() => navigate(`/research/${nextResearch.linkName}`)}
          >
            Next Research Spotlight
          </Button>
        </Grid>
      )}
    </Grid>
  );
}
