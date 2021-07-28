import React from "react";
import { Grid } from "@material-ui/core";
import Card from "@/components/Card";
import useStyle from "./style";

export default function CustomShows({ customShows, ...restProps }) {
  const classes = useStyle();

  return (
    <Grid container className={classes.root} {...restProps}>
      {customShows.map((show) => {
        return (
          <Grid item xs={2} className={classes.item} key={show.id}>
            <Card {...restProps} show={show} />
          </Grid>
        );
      })}
    </Grid>
  );
}
