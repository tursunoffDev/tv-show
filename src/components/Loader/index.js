import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: "flex",
    justifyContent: "center",
  },
  loader: {
    marginTop: "10%",
  },
}));

export default function CircularUnderLoad() {
  const { wrapper, loader } = useStyles();

  return (
    <div className={wrapper}>
      <CircularProgress size="3rem" className={loader} disableShrink />
    </div>
  );
}
