import React from "react";
import err from "../images/error.png";
import { Link } from "react-router-dom";

const Error = (props) => {
  //console.log("...........................", props.location.state);

  const { error } = props.location.state;

  return (
    <React.Fragment>
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
                    src={err}
                    width="50px"
                    height="50px"
                    alt="errror_logo"
                    className="mb-4"
                  />
                </div>
                <h3 className="text-center mb-4" style={{ letterSpacing: 2 }}>
                  Payment Error
                </h3>
                <p className="text-center" style={{ letterSpacing: 1 }}>
                  {error}
                </p>
                {/* <Link
                  to="/batch-transaction"
                  style={{ textDecoration: "none", color: "unset" }}
                > */}
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    props.history.replace("/dashboard");
                  }}
                  className="btn btn-outline-danger btn-block text-center mx-auto d-block mt-5"
                >
                  Proceed to Batch Transaction Page &#10142;
                </button>
                {/* </Link> */}
              </form>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Error;
