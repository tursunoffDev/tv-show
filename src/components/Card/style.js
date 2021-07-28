import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    width: "220px",
    maxWidth: 345,
    height: 310,
    position: "relative",
    boxShadow: "none",
    overflow: "hidden",
    transition: "0.3s linear",

    "&:hover": {
      transform: "scale(1.1)",

      "& $bottomContent": {
        bottom: -5,
      },

      "& $media": {
        transform: "scale(1.1)",
      },
    },
  },

  bottomContent: {
    position: "absolute",
    width: "100%",
    bottom: -100,
    color: "#ffffff",
    backgroundColor: "rgba(0,0,0,0.8)",
    transition: "0.3s linear",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    padding: theme.spacing(0, 1),
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

  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },

  summary: {
    height: "200px",
    textOverflow: "ellipsis",
  },
}));
