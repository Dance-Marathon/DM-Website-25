import { Grid, Button } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import blogs from "../data/blogData";

export default function BlogNavigation() {
  const { linkName } = useParams();
  const navigate = useNavigate();

  const reversedBlogs = [...blogs].reverse();

  const currentIndex = reversedBlogs.findIndex(
    (blog) => blog.linkName === linkName,
  );

  const prevBlog = reversedBlogs[currentIndex - 1];
  const nextBlog = reversedBlogs[currentIndex + 1];

  const hasPrev = !!prevBlog;
  const hasNext = !!nextBlog;

  return (
    <Grid
      container
      spacing={2}
      sx={{
        mt: 4,
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
      {prevBlog && (
        <Grid item xs={12} sm="auto">
          <Button
            fullWidth
            variant="outlined"
            startIcon={<ArrowBackIcon />}
            onClick={() => navigate(`/blog/${prevBlog.linkName}`)}
          >
            Previous Blog
          </Button>
        </Grid>
      )}

      {nextBlog && (
        <Grid item xs={12} sm="auto">
          <Button
            fullWidth
            variant="outlined"
            endIcon={<ArrowForwardIcon />}
            onClick={() => navigate(`/blog/${nextBlog.linkName}`)}
          >
            Next Blog
          </Button>
        </Grid>
      )}
    </Grid>
  );
}
