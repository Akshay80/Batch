import React from "react";
import Splash from "./Components/Splash";
import Registration from "./Components/Registration";
import Login from "./Components/Login";
import VerifyEmail from "./Components/VerifyEmail";
import Select from "./Components/Select";
import Fail from "./Components/Fail";
import Success from "./Components/Success";

import PrivateRoute from "./Components/PrivateRoute";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Transaction from "./Components/Transaction";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import AuthState from "./context/auth/AuthState";

function App() {
  return (
    <>
      <AuthState>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Splash} />
            <Route path="/registration" component={Registration} />
            <Route path="/login" component={Login} />
            <PrivateRoute path="/verifyEmail" component={VerifyEmail} />
            <PrivateRoute path="/select" component={Select} />
            <PrivateRoute path="/batch-transaction" component={Transaction} />
            <PrivateRoute path="/success" component={Success} />
            <PrivateRoute path="/fail" component={Fail} />
          </Switch>
        </BrowserRouter>
      </AuthState>
    </>
  );
}

export default App;
