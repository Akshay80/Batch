import React, { useContext } from "react";
import { Redirect, Route } from "react-router-dom";

import AuthContext from "../context/auth/AuthContext";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { isAuth } = useContext(AuthContext);

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuth ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
