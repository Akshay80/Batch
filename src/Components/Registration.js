import React, { useState, useContext } from "react";
import { Redirect } from "react-router-dom";
import "../css/registration.css";
import group from "../images/Group.png";
import Header from "./Header";


import AuthContext from "../context/auth/AuthContext";
import VerifyEmailAlert from "./VerifyEmailAlert";

function Registration() {
  const {
    isLoading,
    isAuth,
    register,
    register_error,
    clearErrors,
    showVerifyEmailAlert,
  } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  if (isAuth) {
    return <Redirect to="/batch-transaction" />;
  }

  const handleChange = (e) => {
    clearErrors();
    setFormData({ ...formData, [e.target.name]: e.target.value });
    const password = document.querySelector('input[name=password]');
    const confirm = document.querySelector('input[name=confirmPassword]');
    
  if (confirm.value === password.value) {
    confirm.setCustomValidity('');
  } 
  
  else if(confirm.value === '')
    {
      confirm.setCustomValidity('Please fill in this field!');
    }
  
  else {
    confirm.setCustomValidity('Passwords do not match!');
  }
  };

  const handleRegister = (e) => {
    e.preventDefault();

    const errors = [];
    if (formData.name === "") {
      errors.push(1);
    }
    if (formData.email === "") {
      errors.push(1);
    }
    if (formData.password === "") {
      errors.push(1);
    }
    if (formData.confirmPassword === "") {
      errors.push(1);
    }
    if (formData.password !== formData.confirmPassword) {
      errors.push(1);
    }
    if (errors.length === 0) {
      register(formData.name, formData.email, formData.password, Redirect);
    }
  };

  return (
    <>
      {showVerifyEmailAlert ? (
        <VerifyEmailAlert />
      ) : (
        <>
          <Header />
          <div className="container">
            <div className="row no-gutters">
              <div className="col-md-6">
                <div
                  className="signup-form mt-3  mb-5"
                  style={{ borderRadius: 7, borderColor: "#0E73BC" }}
                >
                  <form autoComplete="off" onSubmit={handleRegister}>
                    <h2>Registration</h2>
                    <div className="form-group">
                      <div className="row">
                        <div className="col">
                          <label
                            htmlFor="exampleFormControlInput1"
                            className="form-label"
                            style={{
                              color: "black",
                              marginBottom: "unset!important",
                              letterSpacing: 1,
                            }}
                          >
                            Name
                          </label>
                          <input
                            type="text"
                            className="form-control form-control-sm"
                            name="name"
                            // placeholder="Name"
                            required="required"
                            value={formData.name}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="col">
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
                            className="form-control form-control-sm"
                            name="email"
                            // placeholder="Email"
                            required="required"
                            value={formData.email}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
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
                        className="form-control form-control-sm"
                        name="password"
                        // placeholder="Password"
                        required="required"
                        autoComplete="off"
                        value={formData.password}
                        onChange={handleChange}
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
                        Confirm Password
                      </label>
                      <input
                        type="password"
                        className="form-control form-control-sm"
                        name="confirmPassword"
                        // placeholder="Confirm Password"
                        required="required"
                        autoComplete="off"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                      />
                     
                    </div>
                    <p className="text-danger">{register_error}</p>
                    <div className="form-group">
                      <button
                        type="submit"
                        className="btn btn-primary btn-lg btn-block d-block mx-auto mb-4 mt-4"
                        style={{ fontWeight: "bold", letterSpacing: 1 }}
                      >
                        {isLoading ? (
                          <>
                            <div
                              className="spinner-border spinner-border-sm text-white"
                              role="status"
                            ></div>
                          </>
                        ) : (
                          "Sign Up"
                        )}
                      </button>
                    </div>
                    <div
                      className="text-center mt-4"
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
                      className="text-center SignIn"
                      style={{ margin: "auto", display: "block" }}
                    >
                      Sign In
                    </a>
                  </form>
                </div>
              </div>
              <div className="col-md-6 mt-5 pt-4">
                <img
                  src={group}
                  className="mt-5 mb-3 d-block mx-auto group"
                  alt="group_image"
                />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Registration;
