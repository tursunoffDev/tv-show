import React, { useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import { useSelector, useDispatch } from "react-redux";
import { clearError, removeFollowError, removeShowsError } from "@/redux";

export default function Error() {
  const follows = useSelector((state) => state.follows.error);
  const shows = useSelector((state) => state.shows.error);
  const auth = useSelector((state) => state.auth.authError);
  const dispatch = useDispatch();

  const style = {
    border: "1px solid red",
    textAlign: "center",
    padding: ".5rem .5rem",
    backgroundColor: "red",
    transition: ".3s linear",
  };

  const render = () => {
    setTimeout(() => {
      dispatch(clearError());
      dispatch(removeFollowError());
      dispatch(removeShowsError());
    }, 3000);
  };

  useEffect(() => {
    render();

    // eslint-disable-next-line
  }, [auth, shows, follows]);

  return (
    <>
      {auth !== null || follows !== null || shows !== null ? (
        <div style={style}>
          <Typography variant="body1">
            {auth && auth} {shows && shows} {follows && follows}
          </Typography>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
