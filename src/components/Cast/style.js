import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  container: {
    margin: "auto",
    padding: theme.spacing(6),
  },

  cast: {
    display: "flex",
    flexDirection: "row",
    borderRadius: ".5rem",

    "& img": {
      minWidth: "110px",
      height: "140px",
      backgroundSize: "contain",
      backgroundPosition: "center",
      borderRadius: ".5rem",
    },
  },

  content: {
    padding: "1rem 1rem",
  },
}));
