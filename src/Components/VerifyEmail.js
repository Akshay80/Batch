import React, { useContext, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import base64 from "base-64";

import AuthContext from "../context/auth/AuthContext";

import check from "../images/check.png";

const VerifyEmail = () => {
  const { isEmailVerified, verifyEmail, success_msg } = useContext(AuthContext);

  const { base64Data } = useParams();

  // const userId = JSON.parse(base64.decode(base64Data)).data.userId;

  const [userId, setUserId] = useState("");

  const decodeBase64 = async () => {
    try {
      const userId = JSON.parse(base64.decode(base64Data)).data.userId;
      setUserId(userId);
    } catch (error) {
      console.log(error);
    }
  };

  decodeBase64();

  useEffect(() => {
    verifyEmail(userId);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      {!isEmailVerified ? (
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
      ) : (
        <div className="mt-5 text-center">
          <img
            src={check}
            alt="tick"
            width="100"
            height="100"
            style={{ marginBottom: 10 }}
          />
          <p>{success_msg}</p>
          <Link to="/login">
            <button className="btn btn-primary btn-lg btn-block text-center mx-auto d-block mt-5">
              Go to Login Page
            </button>
          </Link>
        </div>
      )}
    </>
  );
};

export default VerifyEmail;
