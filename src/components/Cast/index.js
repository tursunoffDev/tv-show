import React from "react";
import CastDetails from "./singleCast";
import { Typography, Grid } from "@material-ui/core";
import { useStyles } from "./style";

export default function Cast({ casts }) {
  const classes = useStyles();

  return (
    <section className={classes.container}>
      <Typography variant="h2" gutterBottom color="primary">
        Casts
      </Typography>
      {!(casts.length > 0) ? (
        <Typography variant="h5" color="textSecondary">
          {" "}
          <i>Oops, no casts are provided</i>{" "}
        </Typography>
      ) : (
        <Grid container spacing={3}>
          {casts.map(({ person, character }) => {
            return (
              <Grid item xs={3} key={character.id}>
                <CastDetails person={person} character={character} />
              </Grid>
            );
          })}
        </Grid>
      )}
    </section>
  );
}
