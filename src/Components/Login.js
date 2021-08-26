import React, { useState, useContext } from "react";
import "../css/login.css";
import mobile from "../images/mobile.png";
import Header from "./Header";

import AuthContext from "../context/auth/AuthContext";
import { Redirect } from "react-router-dom";
import VerifyEmailAlert from "./VerifyEmailAlert";

function Login() {
  const {
    isLoading,
    isAuth,
    login,
    login_error,
    clearErrors,
    showVerifyEmailAlert,
  } = useContext(AuthContext);

  const [formdata, setFormData] = useState({
    email: "",
    password: "",
  });

  if (isAuth) {
    return <Redirect to="/batch-transaction" />;
  }

  const handleChange = (e) => {
    clearErrors();
    setFormData({ ...formdata, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    login(formdata.email, formdata.password);
  };

  return (
    <>
      {showVerifyEmailAlert ? (
        <VerifyEmailAlert />
      ) : (
        <>
          <Header />
          <div className="container">
            <div className="row">
              <div>
                <div
                  className="card mt-5 mb-5 loginOuterCard"
                  style={{
                    maxWidth: "100%",
                    borderColor: "#0E73BC",
                    padding: "25px",
                    borderRadius: 3,
                    boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.3)",
                  }}
                >
                  <div className="row no-gutters">
                    <div className="col-md-6">
                      <div className="card-body">
                        <div
                          className="signup-form mt-3"
                          style={{ borderRadius: 7, borderColor: "#0E73BC" }}
                        >
                          <form autoComplete="off" onSubmit={handleLogin}>
                            <h2>Login</h2>
                            <div className="form-group">
                              <label
                                htmlFor="exampleFormControlInput1"
                                className="form-label"
                                style={{
                                  color: "black",
                                  marginBottom: "unset!important",
                                  letterSpacing: 1,
                                }}
                              >
                                Email
                              </label>
                              <input
                                type="email"
                                name="email"
                                className="form-control"   
                                autoComplete="off"
                                value={formdata.email}
                                onChange={handleChange}
                                required="required"
                              />
                            </div>
                            <div className="form-group">
                              <label
                                htmlFor="exampleFormControlInput1"
                                className="form-label"
                                style={{
                                  color: "black",
                                  marginBottom: "unset!important",
                                  letterSpacing: 1,
                                }}
                              >
                                Password
                              </label>
                              <input
                                type="password"
                                className="form-control"
                                name="password"
                                required="required"
                                autoComplete="off"
                                value={formdata.password}
                                onChange={handleChange}
                              />
                            </div>
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="flexCheckDefault"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexCheckDefault"
                                style={{ color: "black", letterSpacing: 1 }}
                              >
                                Remember Password
                              </label>
                            </div>
                            <p className="text-danger">{login_error}</p>
                            <div className="form-group">
                              <button
                                type="submit"
                                className="btn btn-primary btn-lg btn-block text-center mx-auto d-block mt-5"
                              >
                                {isLoading ? (
                                  <>
                                    <div
                                      className="spinner-border spinner-border-sm text-white"
                                      role="status"
                                    ></div>
                                  </>
                                ) : (
                                  "Sign In"
                                )}
                              </button>
                            </div>
                            <div
                              className="text-center"
                              style={{ color: "black", letterSpacing: 2 }}
                            >
                              Don't have a account
                            </div>
                            <div className="text-center">
                              <a
                                href="/registration"
                                style={{
                                  fontSize: 15,
                                  display: "block",
                                  margin: "0 auto",
                                  letterSpacing: 2,
                                }}
                              >
                                Register Now
                              </a>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-6 mt-5">
                      <img
                        className="mt-5 d-block mx-auto mobile"
                        src={mobile}
                        width="320px"
                        alt="mobile_image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Login;
