import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  header: {
    padding: theme.spacing(3, 6),
  },

  logoContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    position: "relative",
    borderRadius: "50%",
    backgroundColor: "pink",
    color: "white",
    width: 100,
    height: 100,
  },
  text: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    color: "white",
  },
}));

export default useStyles;
