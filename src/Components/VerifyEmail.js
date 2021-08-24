import React from "react";
import "../css/login.css";

import Header from "./Header";

function VerifyEmail() {
  return (
    <>
      {/* Header */}
      <Header />

      <div className="container">
        <div className="row no-gutters">
          <div className="col-lg-12 col-md-12 col-sm">
            <div
              className="signup-form mt-3"
              style={{ borderRadius: 7, borderColor: "#0E73BC" }}
            >
              <form>
                <h2>Please verify your email first.</h2>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default VerifyEmail;
