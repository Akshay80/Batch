import React from "react";
import "../css/login.css";
import mobile from "../images/mobile.png";
import Header from "./Header";

function Login() {
  return (
    <>
      {/* Header */}
      <Header />

      <div className="container">
        <div className="row">
          <div>
            <div
              class="card mt-5 mb-5"
              style={{
                maxWidth: "100%",
                borderColor: "#0E73BC",
                padding: "25px",
                borderRadius: 3,
                boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.3)",
              }}
            >
              <div class="row no-gutters">
                <div class="col-md-6">
                  <div class="card-body">
                    <div
                      class="signup-form mt-3"
                      style={{ borderRadius: 7, borderColor: "#0E73BC" }}
                    >
                      <form autocomplete="off">
                        <h2>Login</h2>
                        <div class="form-group">
                          <label
                            for="exampleFormControlInput1"
                            class="form-label"
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
                            class="form-control"
                            name="email"
                            // placeholder="Email"
                            required="required"
                            autocomplete="off"
                          />
                        </div>
                        <div class="form-group">
                          <label
                            for="exampleFormControlInput1"
                            class="form-label"
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
                            class="form-control"
                            name="password"
                            // placeholder="Password"
                            required="required"
                            autocomplete="off"
                          />
                        </div>
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                          />
                          <label
                            class="form-check-label"
                            for="flexCheckDefault"
                            style={{ color: "black", letterSpacing: 1 }}
                          >
                            Remember Password
                          </label>
                        </div>
                        <div class="form-group">
                          <button
                            type="submit"
                            class="btn btn-primary btn-lg btn-block text-center mx-auto d-block mt-5"
                          >
                            Sign In
                          </button>
                        </div>
                        <div
                          class="text-center"
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

                <div class="col-md-6 mt-5">
                  <img
                    className="mt-5 d-block mx-auto"
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
  );
}

export default Login;
