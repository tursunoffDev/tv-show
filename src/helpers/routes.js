import React from "react";
import { Route, Redirect } from "react-router-dom";
import { createBrowserHistory } from "history";

export const UseHistory = () => {
  const history = createBrowserHistory();

  return history;
};

export function ProtectPage({ user, redirectPath, children, ...restProps }) {
  return (
    <Route
      {...restProps}
      render={() => {
        if (user.isEmpty) return <Redirect to={{ pathname: redirectPath }} />;
        else return children;
      }}
    />
  );
}

export function RedirectPage({ user, redirectPath, children, ...restProps }) {
  return (
    <Route
      {...restProps}
      render={() => {
        if (user.isEmpty) return children;
        else return <Redirect to={{ pathname: redirectPath }} />;
      }}
    />
  );
}
