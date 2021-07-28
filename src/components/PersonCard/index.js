import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { Grid, Link } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import { Typography } from "@material-ui/core";
import ButtonBase from "@material-ui/core/ButtonBase";
import useStyles from "./style";
import { fetchPersonCrewCredits } from "@/redux";
import noImage from "@/assets/images/noImage.png";

function PersonCard({ person, fetchCredits, castCredits }) {
  const { image, country, deathday, birthday, name, gender } = person;
  const classes = useStyles();
  const { id } = useParams();

  useEffect(() => {
    fetchCredits(id);

    // eslint-disable-next-line
  }, []);

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img
                className={classes.img}
                alt={person.name}
                src={image ? image.medium : ""}
              />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="row" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="h5">
                  Personel Info
                </Typography>
                <Typography gutterBottom variant="body2">
                  <strong>Name:</strong> {name ? name : <i>No details</i>}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  <strong>Gender: </strong>{" "}
                  {gender ? gender : <i>No details</i>}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  <strong>Date of birth: </strong>
                  {birthday ? birthday : <i>No details</i>}
                </Typography>
                {deathday !== null && (
                  <Typography variant="body2" gutterBottom>
                    <strong>Date of death: </strong>
                    {deathday ? deathday : <i>No details</i>}
                  </Typography>
                )}
                <Typography variant="body2" gutterBottom>
                  <strong>Born in:</strong>{" "}
                  {country?.name ? country?.name : <i>No details</i>}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>

      {castCredits && castCredits.length < 1 ? (
        <Paper className={classes.paper}>
          <Typography gutterBottom variant="h5" color="textSecondary">
            <i> Oops, no crewcredits provided about him/her</i>
          </Typography>{" "}
        </Paper>
      ) : (
        <Paper className={classes.paper}>
          <Typography gutterBottom variant="h5">
            Also known for
          </Typography>
          <Grid container spacing={2}>
            {castCredits.map(({ _embedded }) => {
              const { show } = _embedded;
              return (
                <Grid item xs={2} key={show.id}>
                  <Link
                    href={`/singleShow/${show.id}`}
                    className={classes.image}
                  >
                    <img
                      className={classes.img}
                      alt={person.name}
                      src={show.image?.medium ? show.image.medium : noImage}
                    />
                  </Link>
                </Grid>
              );
            })}
          </Grid>
        </Paper>
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    castCredits: state.shows.castCredits,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCredits: (id) => dispatch(fetchPersonCrewCredits(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PersonCard);
