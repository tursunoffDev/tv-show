import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(10, 2),
  },

  item: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  image: {
    width: 440,
    height: 540,
    backgroundSize: "contain",
    backgroundPosition: "center",
  },
}));
