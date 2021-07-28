import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "row",
    maxWidth: "90%",
    minHeight: "60vh",
    margin: "5% auto",
    padding: "1rem 1rem",
    boxShadow: "none",
    fontFamily: "sans-serif, Helvetica Neue",
  },
  image: {
    width: "100%",
    height: "100%",
    backgroundPosition: "center",
    backgroundSize: "contain",
  },
  content: {},
  genreList: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  genreItem: {
    display: "flex",
    justifyContent: "center",
    maxWidth: "150px",
    border: "1px solid #ccc",
    marginRight: ".5rem",
    borderRadius: ".2rem",
  },
}));

export default useStyles;
