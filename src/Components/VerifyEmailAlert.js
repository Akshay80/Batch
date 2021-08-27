import React from "react";
import "../css/verifyEmail.css";
import mail from "../images/mail.png";
import Header from "./Header";

function VerifyEmailAlert() {
  return (
    <>
      {/* Header */}
      <Header />
      <div className="container">
        <div className="row no-gutters">
          <div className="col-lg-12 col-md-12 col-sm">
            <div
              className="card verifyCard mt-5 d-block mx-auto"
              style={{
                borderRadius: 7,
                borderColor: "#0E73BC",
                width: "50%",
                padding: "25px",
              }}
            >
              <form>
                <div className="text-center">
                  <img
                    src={mail}
                    width="60px"
                    height="60px"
                    alt="mail_logo"
                    className="mb-3"
                  />
                </div>
                <h3 className="text-center mb-4">Verify Your Email First</h3>
                <p className="text-center">
                  Email is not verified yet. Please check the inbox of email you
                  used for registration, email may also be in spam folder.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default VerifyEmailAlert;
