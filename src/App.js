import React from "react";
import Splash from "./Components/Splash";
import Registration from "./Components/Registration";
import Login from "./Components/Login";
import VerifyEmailAlert from "./Components/VerifyEmailAlert";
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
import DashboardState from "./context/dashboard/DashboardState";
import Sample from "./Components/Sample";

function App() {
  return (
    <>
      <AuthState>
        <DashboardState>
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={Splash} />
              <Route path="/sample" component={Sample} />
              <Route path="/registration" component={Registration} />
              <Route path="/login" component={Login} />
              <Route path="/verifyEmail" component={VerifyEmailAlert} />
              <Route path="/email_verify/:base64Data" component={VerifyEmail} />
              <PrivateRoute path="/select" component={Select} />
              <PrivateRoute path="/batch-transaction" component={Transaction} />
              <PrivateRoute path="/success" component={Success} />
              <PrivateRoute path="/fail" component={Fail} />
            </Switch>
          </BrowserRouter>
        </DashboardState>
      </AuthState>
    </>
  );
}

export default App;

