import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    margin: theme.spacing(4, "auto"),
    padding: theme.spacing(4, 4),
    width: "30%",
    border: "1px solid #ccc",
    borderRadius: ".5rem",
  },

  header: {
    margin: theme.spacing(4, 2),
  },

  form: {
    display: "flex",
    flexDirection: "column",

    "& .MuiTextField-root": {
      margin: theme.spacing(2, "auto"),
      width: "100%",
    },
  },
}));
