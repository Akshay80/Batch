import React, { useContext, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import base64 from "base-64";

import AuthContext from "../context/auth/AuthContext";

import check from "../images/check.png";
import remove from "../images/remove.png";

const VerifyEmail = () => {
  const { isEmailVerified, verifyEmail, success_msg, error_msg } =
    useContext(AuthContext);

  const { base64Data } = useParams();

  // const userId = JSON.parse(base64.decode(base64Data)).data.userId;

  // console.log(userId);

  const [userId, setUserId] = useState("");

  const decodeBase64 = async () => {
    try {
      const id = JSON.parse(base64.decode(base64Data)).data.userId;
      setUserId(id);
      verifyEmail(id);
    } catch (error) {
      verifyEmail();
      console.log(error);
    }
  };

  useEffect(() => {
    decodeBase64();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      {!isEmailVerified && !error_msg && (
        <>
          <div className="mt-5 text-center">
            <div
              className="spinner-border spinner-border-lg"
              role="status"
              style={{
                color: "#0e73bc",
                fontSize: 1,
                width: 100,
                height: 100,
                marginBottom: 10,
              }}
            ></div>
            <p>Verifying your email</p>
          </div>
        </>
      )}

      {isEmailVerified && (
        <div className="container">
        <div className="row no-gutters">
          <div className="col-lg-12 col-md-12 col-sm">
            <div
              className="card verifyCard mt-5 d-block mx-auto"
              style={{
                borderRadius: 7,
                borderColor: "green",
                width: "50%",
                padding: "25px",
              }}
            >
              <form>
                <div className="text-center">
                  <img
                    src={check}
                    width="40px"
                    height="40px"
                    alt="check_logo"
                    className="mb-4"
                  />
                </div>
                <h3 className="text-center mb-4">
                  Email Verification Success
                </h3>
                <p className="text-center">
                  Congratulations! Your email has been verified successfully.
                  Now you may proceed to Login page by clicking on Login
                  button below.
                </p>
                <Link
                  to="/login"
                  style={{ textDecoration: "none", color: "unset" }}
                >
                  <button className="btn btn-outline-success btn-block text-center mx-auto d-block mt-5">
                    Go to Login Page &#10142;
                  </button>
                </Link>
              </form>
            </div>
          </div>
        </div>
        </div>
      )}

      {error_msg && (
        <>
         <div className="container">
          <div className="row no-gutters">
            <div className="col-lg-12 col-md-12 col-sm">
              <div
                className="card verifyCard mt-5 d-block mx-auto"
                style={{
                  borderRadius: 7,
                  borderColor: "red",
                  width: "50%",
                  padding: "25px",
                }}
              >
                <form>
                  <div className="text-center">
                    <img
                      src={remove}
                      width="40px"
                      height="40px"
                      alt="remove_logo"
                      className="mb-4"
                    />
                  </div>
                  <h3 className="text-center mb-4">
                    Email Verification Failed!
                  </h3>
                  <p className="text-center">
                    Error! Your email cannot be verified.
                    You can proceed to Login page by clicking on Login
                    button below.
                  </p>
                  <Link
                    to="/login"
                    style={{ textDecoration: "none", color: "unset" }}
                  >
                    <button className="btn btn-outline-danger btn-block text-center mx-auto d-block mt-5">
                      Go to Login Page &#10142;
                    </button>
                  </Link>
                </form>
              </div>
            </div>
          </div>
          </div>
        </>
      )}
    </>
  );
};

export default VerifyEmail;
