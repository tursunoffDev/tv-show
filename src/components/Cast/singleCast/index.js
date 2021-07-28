import React from "react";
import { Link } from "react-router-dom";
import { Typography } from "@material-ui/core";
import { useStyles } from "../style";
import noImage from "@/assets/images/noImage.png";

export default function CastDetails({ person, character }) {
  const classes = useStyles();
  const { id } = person;

  return (
    <div className={classes.cast}>
      <img
        src={
          character.image
            ? character.image.medium
            : person.image
            ? person.image.medium
            : noImage
        }
        alt={character.name}
        className={classes.image}
      />
      <div className={classes.content}>
        <Link to={`/people/${id}`}>
          <Typography variant="h6">
            {person.name ? person.name : "No name provided"}
          </Typography>
        </Link>
        <Typography variant="body1">
          as {character.name ? character.name : "No character name provided"}
        </Typography>
      </div>
    </div>
  );
}
