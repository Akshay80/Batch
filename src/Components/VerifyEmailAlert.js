import React from "react";
import "../css/login.css";

import Header from "./Header";

function VerifyEmailAlert() {
  return (
    <>
      <Header />
      <div className="container">
        <div className="row no-gutters">
          <div className="col-lg-12 col-md-12 col-sm">
            <div
              className="signup-form mt-3"
              style={{ borderRadius: 7, borderColor: "#0E73BC" }}
            >
              <form>
                <h2>
                  Email is not verified yet. Please check the inbox of email you
                  used for registration, email may also be in spam folder.
                </h2>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default VerifyEmailAlert;
