import React from "react";
import { useHistory, Link } from "react-router-dom";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
// import { Link } from "@material-ui/core";
import CardActions from "@material-ui/core/CardActions";
import CardMedia from "@material-ui/core/CardMedia";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { setFollows } from "@/redux";
import { connect } from "react-redux";
import { useStyles } from "./style";
import { find } from "lodash";
import DeleteIcon from "@material-ui/icons/Delete";
import { Card, Typography, IconButton } from "@material-ui/core";
import { removeFollow } from "@/redux";
import UseAuthListener from "@/hooks/use-auth-listener";

function RecipeReviewCard({ props, follows, removeFollow, setFollows }) {
  const classes = useStyles();
  const user = UseAuthListener();
  const history = useHistory();
  const { show, icon } = props;

  const handleLikeClick = (id) => {
    if (user.isEmpty) {
      history.push("/login");
    }
    if (!find(follows, { id })) {
      setFollows(id);
    }
  };

  return (
    <Card className={classes.root}>
      <Link to={`/singleShow/${show.id}`}>
        <CardMedia
          className={classes.media}
          image={
            show.image ? show.image.original : "https://picsum.photos/200/300"
          }
          title={show.name}
        />
      </Link>
      <span className={classes.bottomContent}>
        <Typography variant="body1" noWrap>
          {show.name ? show.name : <i>(no title provided)</i>}
        </Typography>
        <CardActions disableSpacing>
          {icon === "FavoriteIcon" ? (
            <IconButton
              aria-label="add to favorites"
              color="inherit"
              onClick={() => handleLikeClick(show.id)}
            >
              <FavoriteIcon />
            </IconButton>
          ) : (
            <IconButton
              aria-label="add to favorites"
              color="inherit"
              onClick={() => removeFollow(show.id)}
            >
              <DeleteIcon />
            </IconButton>
          )}
        </CardActions>
      </span>
    </Card>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    props: ownProps,
    follows: state.firestore.ordered.follows,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeFollow: (id) => dispatch(removeFollow(id)),
    setFollows: (id) => dispatch(setFollows(id)),
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([{ collection: "follows" }])
)(RecipeReviewCard);
