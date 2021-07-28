import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2, 5),
  },
  item: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: theme.spacing(2, 0),
  },
  card: {
    width: "220px",
    maxWidth: 345,
    height: 310,
    position: "relative",
    boxShadow: "none",
    overflow: "hidden",
    transition: "0.3s linear",

    "&:hover": {
      transform: "scale(1.1)",

      "& $media": {
        transform: "scale(1.1)",
      },
    },
  },

  media: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: "100%",
    backgroundPosition: "center",
    backgroundSize: "cover",
    transition: "0.3s linear",
  },

  summary: {
    height: "200px",
    textOverflow: "ellipsis",
  },
}));

export default useStyles;
