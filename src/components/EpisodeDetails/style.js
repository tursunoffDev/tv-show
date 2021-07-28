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
    backgroundSize: "cover",
  },

  contentGrid: {
    display: "flex",
    flexDirection: "column",
    alignContent: "space-between",
    alignItems: "flex-end",
    padding: theme.spacing(2),
  },
  content: {},
  navBtns: {
    display: "flex",
    justifyContent: "space-between",
    alignSelf: "stretch",
    padding: theme.spacing(0, 1),
  },
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
