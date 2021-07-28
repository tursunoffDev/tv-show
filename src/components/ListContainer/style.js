import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
  list: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    padding: "2rem 1rem",
    listStyle: "none",
  },
  item: {
    margin: "1rem .8rem",
  },
}));
