import React from "react";
import { Card, List, Link, ListItem } from "@material-ui/core";
// import { Link } from "react-router-dom";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import useStyles from "./style";
import Grid from "@material-ui/core/Grid";

export default function RecipeReviewCard({ show }) {
  const classes = useStyles();

  const removeTags = (text) => {
    if (text === "" || text == null) {
      return false;
    } else {
      text = text.toString();
    }
    return text.replace(/(<([^>]+)>)/gi, "");
  };

  return (
    <Card className={classes.root}>
      <Grid container>
        <Grid item xs={4}>
          <CardMedia
            className={classes.image}
            image={
              show.image ? show.image.original : "https://picsum.photos/200/300"
            }
            title="Paella dish"
          />
        </Grid>
        <Grid item xs={8}>
          <CardContent className={classes.content}>
            <Typography variant="h3">
              <strong>{show.name}</strong>
            </Typography>
            <Typography variant="body1" color="textPrimary" gutterBottom>
              {show.summary && removeTags(show.summary)}
            </Typography>
            <List className={classes.genreList}>
              {show.genres && show.genres.length > 0 ? (
                show.genres.map((genre) => (
                  <ListItem key={genre} className={classes.genreItem}>
                    {genre}
                  </ListItem>
                ))
              ) : (
                <>
                  <strong>Genres: </strong> <i> No genres found</i>
                </>
              )}
            </List>
            <Typography gutterBottom>
              {" "}
              <strong>Status:</strong>{" "}
              {show.status ? show.status : <i> no status details</i>}
            </Typography>
            <Typography gutterBottom>
              {" "}
              <strong>Language:</strong>{" "}
              {show.language ? show.language : <i> no language details</i>}
            </Typography>
            <Typography gutterBottom>
              {" "}
              <strong>Rating:</strong>{" "}
              {show.rating?.average ? (
                show.rating.average
              ) : (
                <i> no rating details</i>
              )}
            </Typography>
            <Typography gutterBottom>
              {" "}
              <strong>Official site:</strong>{" "}
              {show.officialSite ? (
                <Link href={show.officialSite}>{show.officialSite}</Link>
              ) : (
                <i> no official details</i>
              )}
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </Card>
  );
}
