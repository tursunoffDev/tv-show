import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(6),
  },
  image: {
    width: "120px",
    height: "140px",
    backgroundPosition: "center",
    backgroundSize: "contain",
    marginBottom: theme.spacing(2),
  },
  itemInner: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    border: "1px solid #ccc",
    borderRadius: '1rem',
    minHeight: "120px",
    padding: theme.spacing(2)
  },
}));

export default useStyle;
