import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Card, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import useStyles from "./style";
import Grid from "@material-ui/core/Grid";
import { useHistory, useParams } from "react-router-dom";
import KeyboardArrowLeftIcon from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";

import { fetchRelatedEpisode } from "@/redux";

export default function RecipeReviewCard({ show }) {
  const { id } = useParams();
  let [epId, setEpId] = useState(parseInt(id));
  const dispatch = useDispatch();
  const classes = useStyles();
  const history = useHistory();

  const handleIncrement = () => {
    setEpId((prev) => prev + 1);
    history.push(`/episodes/${epId}`);
    dispatch(fetchRelatedEpisode(epId));
  };

  const handleDecrement = () => {
    setEpId((prev) => prev - 1);
    history.push(`/episodes/${epId}`);
    dispatch(fetchRelatedEpisode(epId));
  };

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
        <Grid item xs={8} className={classes.contentGrid}>
          <div className={classes.navBtns}>
            <Button
              size="medium"
              className={classes.authBtns}
              color="primary"
              startIcon={<KeyboardArrowLeftIcon />}
              onClick={handleDecrement}
            >
              Previouse episode
            </Button>
            <Button
              size="medium"
              className={classes.authBtns}
              color="primary"
              endIcon={<KeyboardArrowRightIcon />}
              onClick={handleIncrement}
            >
              Next episode
            </Button>
          </div>
          <CardContent className={classes.content}>
            <Typography variant="h3">
              <strong>{show.name}</strong>
            </Typography>
            <Typography variant="body1" color="textPrimary" gutterBottom>
              {show.summary && removeTags(show.summary)}
            </Typography>
            <Typography gutterBottom>
              {" "}
              <strong>Type:</strong>{" "}
              {show.type ? show.type : <i> no type details</i>}
            </Typography>
            <Typography gutterBottom>
              {" "}
              <strong>Season:</strong>{" "}
              {show.season ? show.season : <i> no season details</i>}
            </Typography>
            <Typography gutterBottom>
              {" "}
              <strong>Number:</strong>{" "}
              {show.number ? show.number : <i> no number details</i>}
            </Typography>
            <Typography gutterBottom>
              {" "}
              <strong>Runtime:</strong>{" "}
              {show.runtime ? show.runtime : <i> no runtime details</i>}
            </Typography>
            <Typography gutterBottom>
              {" "}
              <strong>Airdate:</strong>{" "}
              {show.airdate ? show.airdate : <i> no airdate details</i>}
            </Typography>
            <Typography gutterBottom>
              {" "}
              <strong>Official site:</strong>{" "}
              {show.url ? (
                <Link to={show.url}>{show.url}</Link>
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
