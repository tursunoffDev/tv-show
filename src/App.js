import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "@/components/Navbar";
import HomePage from "@/pages/HomePage";
import Episodes from "@/pages/Episodes";
import PersonDetailsPage from "@/pages/PersonDetails";
import SingleShowPage from "@/pages/SingleShowPage";
import ProfilePage from "@/pages/ProfilePage";
import UserAccount from "@/pages/UserAccount";
import Error from "@/components/Error";
import UseAuthListener from "@/hooks/use-auth-listener";
import { SignUpPage, SignInPage } from "@/pages/AuthPage";
import { RedirectPage, ProtectPage } from "@/helpers/routes";
import { UseHistory } from "@/helpers/routes";

function App() {
  const user = UseAuthListener();
  const history = UseHistory();

  return (
    <>
      <Router history={history}>
        <Navbar />
        <Error />
        <Switch>
          <ProtectPage user={user} path="/people/:id/" redirectPath="/login">
            <PersonDetailsPage />
          </ProtectPage>
          <ProtectPage user={user} path="/singleShow/:id" redirectPath="/login">
            <SingleShowPage />
          </ProtectPage>
          <ProtectPage user={user} path="/episodes/:id" redirectPath="/login">
            <Episodes />
          </ProtectPage>
          <ProtectPage user={user} path="/profile" redirectPath="/login">
            <ProfilePage />
          </ProtectPage>
          <ProtectPage user={user} path="/account" redirectPath="/login">
            <UserAccount />
          </ProtectPage>
          <RedirectPage user={user} path="/register" redirect="/">
            <SignUpPage />
          </RedirectPage>
          <RedirectPage user={user} path="/login" redirect="/">
            <SignInPage />
          </RedirectPage>
          <Route axact path="/">
            <HomePage />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
