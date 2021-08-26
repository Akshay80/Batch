import React, { useContext } from "react";
import "../css/success.css";
import Header from "./Header";
import success from "../images/success-icon.png";
import failbox from "../images/Fail-box.png";
import successbox from "../images/success-box.png";

import DashboardContext from "../context/dashboard/DashboardContext";

function Receipt() {
  const { receiptData } = useContext(DashboardContext);

  console.log("RECEIPT_DATA", receiptData);

  const { externalWallets } = receiptData;

  return (
    <>
      <Header />
      <div className="container">
        <div className="row">
          <div>
            <div
              className="card mt-5 mb-5"
              style={{
                maxWidth: "100%",
                borderWidth: 2,
                borderColor: "#0E73BC",
                borderRadius: 9,
                boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.3)",
              }}
            >
              <div className="card-body">
                <h2 className="card-title text-center cardTitle mb-2">
                  Batch Transition
                </h2>

                <img
                  src={success}
                  alt="success_image"
                  className="d-block mx-auto mt-5"
                />

                {/* Success Component */}

                <img
                  src={successbox}
                  alt="success_box"
                  width="250px"
                  className="d-block mx-auto mt-5 failImage"
                />

                <div className="container">
                  <div className="card outerSuccessCard">
                    {/* First Card (Txn ID, Amount, Fees, Confirmation) */}
                    <div className="card innerCards1 mb-3">
                      <div className="row">
                        <div className="col-sm">
                          <div className="input-group input-group-sm ">
                            <span
                              className="input-group-text textboxSide"
                              id="basic-addon1"
                            >
                              Txn ID
                            </span>
                            <input
                              type="text"
                              className="form-control rounded-start"
                              placeholder="f0d8dsk90sdksd9sdsd00asdsddsdsds9jkasdsd"
                              aria-label="Username"
                              aria-describedby="basic-addon1"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-sm mt-3">
                          <div className="input-group input-group-sm ">
                            <span
                              className="input-group-text textboxSide"
                              id="basic-addon1"
                            >
                              Amount
                            </span>
                            <input
                              type="text"
                              className="form-control rounded-start"
                              placeholder="-995.45"
                              aria-label="Username"
                              aria-describedby="basic-addon1"
                            />
                          </div>
                        </div>
                        <div className="col-sm mt-3">
                          <div className="input-group input-group-sm ">
                            <span
                              className="input-group-text textboxSide"
                              id="basic-addon1"
                            >
                              &nbsp;&nbsp;Fee&nbsp;&nbsp;&nbsp;
                            </span>
                            <input
                              type="text"
                              className="form-control rounded-start"
                              placeholder="-995.45"
                              aria-label="Username"
                              aria-describedby="basic-addon1"
                            />
                          </div>
                        </div>
                        <div className="col-sm mt-3">
                          <div className="input-group input-group-sm ">
                            <span
                              className="input-group-text textboxSide"
                              id="basic-addon1"
                            >
                              Confirmation
                            </span>
                            <input
                              type="text"
                              className="form-control rounded-start"
                              placeholder="0"
                              aria-label="Username"
                              aria-describedby="basic-addon1"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* First Card (TxnID, Amount, Fees, Confirmation) Ends Here */}

                    {/* Second Card (Address, Amount) */}

                    <div className="card innerCards1 mb-1">
                      <div className="row">
                        <div
                          className="input-group-text textboxTitle mb-3"
                          id="basic-addon1"
                        >
                          Address
                        </div>
                        <div className="col-lg-6 col-sm pb-3">
                          <div className="input-group input-group-sm ">
                            <input
                              type="text"
                              className="form-control rounded-start"
                              placeholder="Ravindra Nagar Rudrapur Udham singh nagar"
                              aria-label="Username"
                              aria-describedby="basic-addon1"
                            />
                          </div>
                        </div>
                        <div className="col-sm">
                          <div className="input-group input-group-sm ">
                            <input
                              type="text"
                              className="form-control rounded-start"
                              placeholder="Ravindra Nagar Rudrapur Udham singh nagar"
                              aria-label="Username"
                              aria-describedby="basic-addon1"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div
                          className="input-group-text textboxTitle mt-3"
                          id="basic-addon1"
                        >
                          Amount
                        </div>
                        <div className="col-sm col-lg-6 mt-3">
                          <div className="input-group input-group-sm ">
                            <input
                              type="text"
                              className="form-control rounded-start"
                              placeholder="-0.998"
                              aria-label="Username"
                              aria-describedby="basic-addon1"
                            />
                          </div>
                        </div>
                        <div className="col-sm mt-3">
                          <div className="input-group input-group-sm ">
                            <input
                              type="text"
                              className="form-control rounded-start"
                              placeholder="-0.9095"
                              aria-label="Username"
                              aria-describedby="basic-addon1"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Second Card (Address, Amount) ends here */}
                  </div>
                </div>
                {/* Success Component Ends Here */}

                {externalWallets.map(
                  ({ amount, name, bitcoinAddress, message, email }) => {
                    return (
                      <React.Fragment key={bitcoinAddress}>
                        <img
                          src={failbox}
                          alt="success_box"
                          width="250px"
                          className="d-block mx-auto mt-5 failImage"
                        />
                        <div className="container">
                          <div className="card outerfailureCard">
                            <p>{message}</p>
                            <div className="card innerCards1">
                              <div className="row">
                                <div className="col-sm col-lg-6 pb-3">
                                  <div className="input-group input-group-sm ">
                                    <span
                                      className="input-group-text textboxSide"
                                      id="basic-addon1"
                                    >
                                      Bitcoin Address
                                    </span>
                                    <input
                                      type="text"
                                      className="form-control rounded-start"
                                      placeholder={bitcoinAddress}
                                      disabled
                                      aria-label="Username"
                                      aria-describedby="basic-addon1"
                                    />
                                  </div>
                                </div>
                                <div className="col-sm">
                                  <div className="input-group input-group-sm ">
                                    <span
                                      className="input-group-text textboxSide"
                                      id="basic-addon1"
                                    >
                                      Amount
                                    </span>
                                    <input
                                      type="text"
                                      className="form-control rounded-start"
                                      placeholder={amount}
                                      disabled
                                      aria-label="Username"
                                      aria-describedby="basic-addon1"
                                    />
                                  </div>
                                </div>
                              </div>

                              <div className="row">
                                <div className="col-sm mt-3">
                                  <div className="input-group input-group-sm ">
                                    <span
                                      className="input-group-text textboxSide"
                                      id="basic-addon1"
                                    >
                                      &nbsp;&nbsp;Email&nbsp;&nbsp;&nbsp;
                                    </span>
                                    <input
                                      type="text"
                                      className="form-control rounded-start"
                                      placeholder={email}
                                      disabled
                                      aria-label="Username"
                                      aria-describedby="basic-addon1"
                                    />
                                  </div>
                                </div>
                                <div className="col-sm mt-3">
                                  <div className="input-group input-group-sm ">
                                    <span
                                      className="input-group-text textboxSide"
                                      id="basic-addon1"
                                    >
                                      &nbsp;Name&nbsp;&nbsp;
                                    </span>
                                    <input
                                      type="text"
                                      className="form-control rounded-start"
                                      placeholder={name}
                                      disabled
                                      aria-label="Username"
                                      aria-describedby="basic-addon1"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </React.Fragment>
                    );
                  }
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Receipt;
