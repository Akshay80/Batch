import React from "react";
import "../css/registration.css";
import group from "../images/Group.png";
import Header from "./Header";
function Registration() {
  return (
    <>
      {/* Header */}
      <Header />

      <div className="container">
        <div className="row no-gutters">
          <div className="col-md-6">
            <div
              class="signup-form mt-3  mb-5"
              style={{ borderRadius: 7, borderColor: "#0E73BC" }}
            >
              <form autocomplete="off">
                <h2>Registration</h2>
                <div class="form-group">
                  <div class="row">
                    <div class="col">
                      <label
                        for="exampleFormControlInput1"
                        class="form-label"
                        style={{
                          color: "black",
                          marginBottom: "unset!important",
                          letterSpacing: 1
                        }}
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        class="form-control form-control-sm"
                        name="name"
                        // placeholder="Name"
                        required="required"
                      />
                    </div>
                    <div class="col">
                      <label
                        for="exampleFormControlInput1"
                        class="form-label"
                        style={{
                          color: "black",
                          marginBottom: "unset!important",
                          letterSpacing: 1
                        }}
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        class="form-control form-control-sm"
                        name="email"
                        // placeholder="Email"
                        required="required"
                      />
                    </div>
                  </div>
                </div>
                <div class="form-group">
                  <label
                    for="exampleFormControlInput1"
                    class="form-label"
                    style={{ color: "black", marginBottom: "unset!important",letterSpacing: 1 }}
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    class="form-control form-control-sm"
                    name="phoneno"
                    // placeholder="Phone number"
                    required="required"
                  />
                </div>
                <div class="form-group">
                  <label
                    for="exampleFormControlInput1"
                    class="form-label"
                    style={{ color: "black", marginBottom: "unset!important", letterSpacing: 1 }}
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    class="form-control form-control-sm"
                    name="password"
                    // placeholder="Password"
                    required="required"
                    autocomplete="off"
                  />
                </div>
                <div class="form-group">
                  <label
                    for="exampleFormControlInput1"
                    class="form-label"
                    style={{ color: "black", marginBottom: "unset!important", letterSpacing: 1}}
                  >
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    class="form-control form-control-sm"
                    name="confirm_password"
                    // placeholder="Confirm Password"
                    required="required"
                    autocomplete="off"
                  />
                </div>
                <div class="form-group">
                  <button
                    type="submit"
                    class="btn btn-primary btn-lg btn-block d-block mx-auto mb-4 mt-4"
                    style={{ fontWeight: "bold", letterSpacing: 1 }}
                  >
                    Sign Up
                  </button>
                </div>
                <div
                  class="text-center mt-4"
                  style={{
                    color: "black",
                    fontWeight: "300",
                    letterSpacing: 2,
                  }}
                >
                  Already have an account?{" "}
                </div>
                <a
                  href="/login"
                  class="text-center SignIn"
                  style={{ margin: "auto", display: "block" }}
                >
                  Sign In
                </a>
              </form>
            </div>
          </div>
          <div className="col-md-6 mt-5 pt-4">
            <img src={group} class="mt-5 mb-3 d-block mx-auto group" alt="group_image" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Registration;
