import React, { useEffect } from "react";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import { connect } from "react-redux";
import { setFollows, setLoading } from "@/redux";
import Loader from "@/components/Loader";
import CustomShows from "@/components/CustomShows";
import { Typography, Grid } from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import useStyles from "./style";

function UserProfile({ follows, loading, setLoading, state, profile }) {
  const classes = useStyles();

  useEffect(() => {
    loadListener();
    // eslint-disable-next-line
  }, [follows]);

  const loadListener = () => {
    if (follows === undefined) {
      setLoading(true);
    } else if (follows.length < 1) {
      setLoading(false);
    } else {
      setLoading(false);
    }
  };

  console.log('profile', profile)
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Grid container className={classes.header}>
            <Grid item xs={12}>
              <Typography variant="h3" color="textSecondary" gutterBottom>
                User Profile Page
              </Typography>
            </Grid>
            <Grid item xs={2} className={classes.logoContainer}>
              <div className={classes.logo}>
                <Typography
                  className={classes.text}
                  variant="h3"
                  color="textSecondary"
                  gutterBottom
                >
                  {profile.initials}
                </Typography>
              </div>
            </Grid>
            <Grid item xs={10}>
              <Typography variant="body1" color="textSecondary" gutterBottom>
                <strong>Firstname: </strong> {profile.firstname}
              </Typography>
              <Typography variant="body1" color="textSecondary" gutterBottom>
                <strong>Lastname: </strong>
                {profile.lastname}
              </Typography>
              <Typography variant="body1" color="textSecondary" gutterBottom>
                <strong>Email: </strong>
                {profile.email}
              </Typography>
              <Typography variant="body1" color="textSecondary" gutterBottom>
                <strong>Password: </strong>
                {profile.password}
              </Typography>
            </Grid>
          </Grid>
          {follows && follows.length > 0 ? (
            <CustomShows icon={FavoriteIcon} customShows={follows} />
          ) : (
            <div className={classes.header}>
              <Typography variant="body1" color="textSecondary" gutterBottom>
                <i> Oops, no followed shows yet </i>
              </Typography>
            </div>
          )}
        </>
      )}
    </>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    setFollows: (follow) => dispatch(setFollows(follow)),
    setLoading: (val) => dispatch(setLoading(val)),
  };
};

const mapStateToProps = (state) => {
  return {
    follows: state.firestore.ordered.follows,
    loading: state.follows.loading,
    stateFollows: state.follows.follows,
    state,
    profile: state.firebase.profile,
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([{ collection: "follows" }])
)(UserProfile);
