import React, { useContext } from "react";
import logo from "../images/Logo.jpg";
import "../css/header.css";

import AuthContext from "../context/auth/AuthContext";

function Header() {
  const { isAuth, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
  };

  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-light"
        style={{ backgroundColor: "white" }}
      >
        <div className="container">
          <a className="navbar-brand" href="/">
            <img src={logo} alt="logo" />
          </a>
          <button
            className="navbar-toggler border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="btn btn-outline-primary m-2" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="btn btn-outline-primary m-2"
                  href="/batch-transaction"
                >
                  Account
                </a>
              </li>
              <li className="nav-item">
                <a className="btn btn-outline-primary m-2" href="/#">
                  CSV sample
                </a>
              </li>

              {isAuth ? (
                <li
                  className="nav-item btn btn-outline-primary m-2"
                  onClick={handleLogout}
                >
                  Logout
                </li>
              ) : (
                <>
                  <li className="nav-item">
                    <a
                      className="btn btn-outline-primary m-2"
                      href="/registration"
                    >
                      Sign Up
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="btn btn-primary m-2 signin" href="/login">
                      Sign In
                    </a>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
