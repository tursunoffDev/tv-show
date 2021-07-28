import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { searchShows, clearSearchShows, signOut } from "@/redux";
import { useHistory, Link } from "react-router-dom";
import { AppBar, Button } from "@material-ui/core";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import LoginIcon from "@material-ui/icons/ExitToAppOutlined";

import UseAuthListener from "@/hooks/use-auth-listener";
import { useStyles } from "./style";

export default function PrimarySearchAppBar() {
  const dispatch = useDispatch();
  const authUser = UseAuthListener();
  const history = useHistory();
  const [searchTerm, setSearchTerm] = useState("");
  const searchHandler = (e) => {
    if (e.key === "Enter" && searchTerm.trim() !== "") {
      dispatch(searchShows(searchTerm));
      history.push("/");
    }
  };
  const classes = useStyles();
  const handleLogoClick = (e) => {
    e.preventDefault();
    dispatch(clearSearchShows());
    history.push("/");
  };

  return (
    <div className={classes.grow}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            <Link to="/" onClick={handleLogoClick} className={classes.title}>
              TV-Show
            </Link>
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
              onKeyPress={searchHandler}
            />
          </div>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            {authUser?.uid ? (
              <>
                <Button
                  size="medium"
                  className={classes.authBtns}
                  color="inherit"
                  startIcon={<AccountCircle />}
                  onClick={() => history.push("/profile")}
                >
                  Profile
                </Button>
                <Button
                  size="medium"
                  className={classes.authBtns}
                  color="inherit"
                  startIcon={<LoginIcon />}
                  onClick={() => dispatch(signOut())}
                >
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Button
                  size="medium"
                  color="inherit"
                  className={classes.authBtns}
                  startIcon={<LoginIcon />}
                >
                  <Link className={classes.link} to="/login">
                    Login
                  </Link>
                </Button>
                <Button
                  size="medium"
                  className={classes.authBtns}
                  color="inherit"
                  startIcon={<PersonAddIcon />}
                >
                  <Link className={classes.link} to="/register">
                    Sign Up
                  </Link>
                </Button>
              </>
            )}
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
