import React, { useEffect, useState } from "react";
import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import CardMedia from "@material-ui/core/CardMedia";
import useStyles from "./style";
import { Card, Typography } from "@material-ui/core";
import { take, shuffle } from "lodash";

export default function CustomShows({ episodes }) {
  const classes = useStyles();
  const [showEpisodes, setShowEpisodes] = useState([]);

  useEffect(() => {
    const randomShows = take(shuffle(episodes), 10);
    setShowEpisodes(randomShows);
  }, [episodes]);

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        <Typography variant="h2" gutterBottom color="primary">
          Episodes
        </Typography>
      </Grid>
      {showEpisodes.map((show) => {
        return (
          <Grid item xs={2} className={classes.item} key={show.id}>
            <Card className={classes.card}>
              <Link to={`/episodes/${show.id}`}>
                <CardMedia
                  className={classes.media}
                  image={
                    show.image
                      ? show.image.original
                      : "https://picsum.photos/200/300"
                  }
                  title={show.name}
                />
              </Link>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
}
