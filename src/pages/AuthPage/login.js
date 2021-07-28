import React, { useState } from "react";
import { connect } from "react-redux";
import { Button, TextField, Typography } from "@material-ui/core";
import { useStyles } from "./style";
import { signIn } from "@/redux";

function Login({ signIn }) {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const credentials = {
      email,
      password,
    };
    signIn(credentials);
  };

  return (
    <div className={classes.container}>
      <Typography variant="h3" className={classes.header}>
        Sign In
      </Typography>
      <form className={classes.form} onSubmit={handleSubmit}>
        <TextField
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          label="Email"
          type="email"
          variant="outlined"
        />
        <TextField
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          label="Password"
          type="password"
          variant="outlined"
        />
        <Button variant="contained" color="primary" type="submit">
          Sign In
        </Button>
      </form>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (credentials) => dispatch(signIn(credentials)),
  };
};

export default connect(null, mapDispatchToProps)(Login);
