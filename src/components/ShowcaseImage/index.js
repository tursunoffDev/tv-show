import React from "react";
import { Grid } from "@material-ui/core";
import { useStyles } from "./style";

export default function BasicImageList({ images }) {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      {images.map((img) => {
        return (
          <Grid className={classes.item} item xs={4} key={img.id}>
            <img
              src={img?.image?.original}
              alt={img.title}
              className={classes.image}
            />
          </Grid>
        );
      })}
    </Grid>
  );
}
