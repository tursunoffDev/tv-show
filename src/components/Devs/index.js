import useStyles from "./style";
import { Typography, Grid, Link } from "@material-ui/core";
import { sortedUniqBy } from "lodash";
import noImage from "@/assets/images/noImage.png";

export default function Developers({ devs }) {
  const classes = useStyles();
  const sortedDevs = sortedUniqBy(
    devs.map((dev) => dev.person),
    "id"
  );

  return (
    <div className={classes.root}>
      <Typography variant="h3" color="primary" gutterBottom>
        {" "}
        Developed by:{" "}
      </Typography>
      {!(devs.length > 0) ? (
        <Typography variant="h5" color="textSecondary">
          {" "}
          <i>Oops, no developers are provided</i>{" "}
        </Typography>
      ) : (
        <Grid container spacing={2}>
          {sortedDevs.map((dev) => {
            return (
              <Grid item xs={3} key={dev.id}>
                <Link
                  className={classes.itemInner}
                  href={`/people/${dev.id}`}
                  underline="none"
                >
                  <img
                    className={classes.image}
                    src={dev.image?.medium ?? noImage}
                    alt={dev.name}
                  />
                  <Typography variant="subtitle1">
                    {dev.name} <br />
                  </Typography>
                </Link>
              </Grid>
            );
          })}
        </Grid>
      )}
    </div>
  );
}
