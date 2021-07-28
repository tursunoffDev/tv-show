import React, { useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import { useSelector, useDispatch } from "react-redux";
import { clearMessage } from "@/redux";

export default function SuccessMessage() {
  const style = {
    border: "2px solid white",
    textAlign: "center",
    padding: ".5rem .5rem",
    backgroundColor: "green",
    position: "fixed",
    top: 80,
    right: 0,
    minWidth: "20%",
    borderRadius: 5,
    color: "white",
  };

  const dispatch = useDispatch();
  const message = useSelector((state) => state.follows.message);

  const render = () => {
    setTimeout(() => {
      dispatch(clearMessage());
    }, 3000);
  };

  useEffect(() => {
    render();

    // eslint-disable-next-line
  }, [message]);

  console.log("message", message);

  return (
    <>
      {message && message !== null ? (
        <div style={style}>
          <Typography variant="body1">{message}</Typography>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
