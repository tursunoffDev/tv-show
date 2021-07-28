import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Button, TextField, Typography } from "@material-ui/core";
import { useStyles } from "./style";
import { signUp, setError } from "@/redux";

export default function Register() {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {}, [firstname, lastname]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      firstname,
      lastname,
      email,
      password,
    };
    if (password === confirmPass) {
      dispatch(signUp(user));
    } else {
      dispatch(
        setError("Password and Confirm password do not match, please check!")
      );
      return;
    }
  };

  const handleFirstname = (e) => {
    const firstname = e.target.value;
    const capFirstname = firstname.charAt(0).toUpperCase() + firstname.slice(1);
    setFirstname(capFirstname);
  };

  const handleLastname = (e) => {
    const lastname = e.target.value;
    const capLastname = lastname.charAt(0).toUpperCase() + lastname.slice(1);
    setLastname(capLastname);
  };

  return (
    <div className={classes.container}>
      <Typography variant="h3" className={classes.header}>
        Sign up
      </Typography>
      <form className={classes.form} onSubmit={handleSubmit}>
        <TextField
          onChange={handleFirstname}
          value={firstname}
          label="Firstname"
          type="text"
          variant="outlined"
        />
        <TextField
          onChange={handleLastname}
          value={lastname}
          label="Lastname"
          type="text"
          variant="outlined"
        />
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
        <TextField
          onChange={(e) => setConfirmPass(e.target.value)}
          value={confirmPass}
          label="Confirm password"
          type="password"
          variant="outlined"
        />
        <Button variant="contained" color="primary" type="submit">
          Sign up
        </Button>
      </form>
    </div>
  );
}
