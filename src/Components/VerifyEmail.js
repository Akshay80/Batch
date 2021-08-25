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

      {error_msg && (
        <>
          <div className="mt-5 text-center">
            <img
              src={remove}
              alt="tick"
              width="100"
              height="100"
              style={{ marginBottom: 10 }}
            />
            <p>{error_msg}</p>
          </div>
        </>
      )}
    </>
  );
};

export default VerifyEmail;
