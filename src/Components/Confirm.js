import React, { useContext, useEffect, useState } from "react";

import { Redirect } from "react-router-dom";

import DashboardContext from "../context/dashboard/DashboardContext";
import copy from "../images/copy_icon.png";
import copy1 from "../images/copied_icon.png";
import { CopyToClipboard } from "react-copy-to-clipboard";
import QRCode from "react-qr-code";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../css/confirm.css";

import check from "../images/check.png";
// import remove from "../images/remove.png";

const Confirm = (props) => {
  const {
    batchTransaction,
    batchTransactionCommissionPercent,
    showReceipt,
    confirmPayment,
    confirmPaymentData,
    checkTransactionStatus,
    transactionStatus,
    clearTransactionStatus,
  } = useContext(DashboardContext);
  const [isCopied, setisCopied] = useState(false);
  const [notifies, setNotify] = useState(false);

  toast.info("Copied", {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: false,
    progress: 0,
    limit: 1,
  });

  const user = JSON.parse(localStorage.getItem("user"));

  const { feeRate } = props.location.state;

  const { estimateNetworkFees, totalAmountInBtc, receivers } =
    confirmPaymentData;

  const { error, externalWallets, message } = confirmPaymentData;

  const handleCopy = () => {
    setisCopied(true);
    setNotify(true);
    setTimeout(() => {
      setNotify(false);
    }, 5000);
  };

  const handleConfirm = () => {
    let r = [];

    receivers?.map((item) => {
      return r.push({
        amount: item.amount,
        btcAddress: item.btcAddress,
        email: item.email,
        name: item.name,
      });
    });

    externalWallets?.map((item) => {
      return r.push({
        amount: item.amount,
        btcAddress: item.bitcoinAddress,
        email: item.email,
        name: item.name,
      });
    });

    const body = {
      commission: batchTransactionCommissionPercent,
      feeRate: feeRate,
      receivers: r,
      userId: JSON.parse(localStorage.getItem("user")).userData.id,
    };

    batchTransaction(body, props.history);
  };

  const style = {
    titles: {
      flex: 2,
      textAlign: "left",
      marginLeft: 20,
    },
    amounts: {
      flex: 1,
      textAlign: "right",
    },
    remAmount: {
      fontWeight: "500",
      flex: 1,
    },
  };

  useEffect(() => {
    confirmPayment(); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //console.log("CPD", confirmPaymentData);

  const handleDeny = () => {
    props.history.replace("/dashboard");
  };

  // console.log("txn0000", transactionStatus);

  // const handleCheckTransactionStatus = (txn) => {
  //   console.log("txn1111", txn);
  //   const interval = setInterval((transactionStatus) => {
  //     console.log("txn2222", txn);
  //     console.log("txn3333", transactionStatus);
  //     console.log("TXN STATUS", txn.status);
  //     if (txn.status === "confirmed") {
  //       clearInterval(interval);
  //     } else {
  //       checkTransactionStatus();
  //     }
  //   }, 5000);
  // };

  // let i = setInterval(() => {
  //   checkTransactionStatus(i);
  // }, 2000);

  // const i = () => {
  //   let a = setInterval(() => {
  //     checkTransactionStatus(a);
  //   }, 2000);
  //   return a;
  // };

  const handleCheckTransactionStatus = () => {
    // clearInterval(i);
    clearTransactionStatus();
    // i();
    let interval = setInterval(() => {
      checkTransactionStatus(interval);
    }, 2000);
  };

  if (showReceipt) {
    return <Redirect to="/receipt" />;
  }

  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div
            className="card mt-5 mb-5 d-block mx-auto ConfirmCard"
            style={{
              borderRadius: 7,
              borderColor: "#0e73bc",
              width: "60%",
              padding: "25px",
              boxShadow: "1px 2px 5px",
            }}
          >
            <h2
              className="text-center mb-4"
              style={{ letterSpacing: 2, color: "#0e73bc" }}
            >
              Confirm Payment
            </h2>

            <div className="card-body p-2">
              {!error && (
                <>
                  <div className="d-flex justify-content-around mb-1 text-center">
                    <div className="p-2" style={style.titles}>
                      Total Balance
                    </div>
                    <div className="p-2" style={style.amounts}>
                      {totalAmountInBtc ? totalAmountInBtc.toFixed(8) : 0.00003}
                    </div>
                  </div>
                  <div className="d-flex justify-content-around mb-1 text-center">
                    <div className="p-2" style={style.titles}>
                      Fee Rate
                    </div>
                    <div className="p-2 text-success" style={style.amounts}>
                      {estimateNetworkFees ? estimateNetworkFees.toFixed(8) : 0.000002}
                    </div>
                  </div>
                  {/* <div className="d-flex justify-content-around mb-1 text-center">
                    <div className="p-2" style={style.titles}>
                      Commission
                    </div>
                    <div className="p-2 text-danger" style={style.amounts}>
                      {commissionInBtc ? commissionInBtc : 0.000004}
                    </div>
                  </div> */}
                  <hr color="lightgrey mt-4" />
                </>
              )}
              {/* User Info Table */}
              <p
                className="text-danger d-block mx-auto mt-4"
                style={{ textAlign: "center" }}
              >
                {error}
              </p>

              <label
                htmlFor="exampleFormControlInput1"
                className="form-label mt-3"
                style={{ color: "black" }}
              >
                Your Bitcoin Address
              </label>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  name="btcAddress"
                  value={user.btcAddress}
                  disabled={true}
                />
                <CopyToClipboard
                  onCopy={() => setisCopied(true)}
                  text={user.btcAddress}
                >
                  {isCopied ? (
                    <input
                      type="image"
                      src={copy1}
                      id="copy1"
                      width="48"
                      style={{
                        border: "1px solid #0E73BC",
                        padding: 10,
                        borderRadius: "0px 4px 4px 0px",
                      }}
                      alt="copy_icon"
                      data-toggle="tooltip"
                      data-placement="bottom"
                      title="Copied"
                    />
                  ) : (
                    <input
                      type="image"
                      id="copy"
                      src={copy}
                      width="48"
                      style={{
                        border: "1px solid #0E73BC",
                        padding: 10,
                        borderRadius: "0px 4px 4px 0px",
                      }}
                      alt="copied_icon"
                      data-toggle="tooltip"
                      data-placement="bottom"
                      title="Copy Address"
                      onClick={handleCopy}
                    />
                  )}
                </CopyToClipboard>
              </div>

              <p
                className="text-center pt-5"
                style={{ fontSize: "large", fontWeight: "500" }}
              >
                Your Payment Address QR Code
              </p>
              <div className="text-center pb-5">
                <QRCode id="qrStyle" size={150} value={user.btcAddress} />
              </div>
              <p>{message}</p>
              <div className="text-center pb-4">
                <button
                  type="button"
                  className="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  onClick={handleCheckTransactionStatus}
                >
                  Check Transaction Status
                </button>
              </div>
              <div
                className="modal fade"
                id="exampleModal"
                tabIndex="-1"
                data-bs-backdrop={
                  transactionStatus.status === "confirmed" ? "true" : "static"
                }
                data-bs-keyboard={
                  transactionStatus.status === "confirmed" ? "true" : "false"
                }
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div class="modal-header border-0">
                      {transactionStatus.status === "confirmed" && (
                        <button
                          type="button"
                          class="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      )}
                    </div>
                    <h4 className="text-center pt-3">Transaction Status</h4>
                    <div className="modal-body">
                      <p className="text-center">{transactionStatus.message}</p>
                      {/* SVG icon starts here */}
                      <div className="text-center">
                        {transactionStatus.status === "confirmed" && (
                          <img src={check} alt="confirmed" width="36" />
                        )}

                        {transactionStatus.status === "pending" && (
                          <svg
                            width="44"
                            height="44"
                            viewBox="0 0 44 44"
                            xmlns="http://www.w3.org/2000/svg"
                            stroke="#000"
                          >
                            <g fill="none" fillRule="evenodd" strokeWidth="2">
                              <circle cx="22" cy="22" r="1">
                                <animate
                                  attributeName="r"
                                  begin="0s"
                                  dur="1.8s"
                                  values="1; 20"
                                  calcMode="spline"
                                  keyTimes="0; 1"
                                  keySplines="0.165, 0.84, 0.44, 1"
                                  repeatCount="indefinite"
                                />
                                <animate
                                  attributeName="stroke-opacity"
                                  begin="0s"
                                  dur="1.8s"
                                  values="1; 0"
                                  calcMode="spline"
                                  keyTimes="0; 1"
                                  keySplines="0.3, 0.61, 0.355, 1"
                                  repeatCount="indefinite"
                                />
                              </circle>
                              <circle cx="22" cy="22" r="1">
                                <animate
                                  attributeName="r"
                                  begin="-0.9s"
                                  dur="1.8s"
                                  values="1; 20"
                                  calcMode="spline"
                                  keyTimes="0; 1"
                                  keySplines="0.165, 0.84, 0.44, 1"
                                  repeatCount="indefinite"
                                />
                                <animate
                                  attributeName="stroke-opacity"
                                  begin="-0.9s"
                                  dur="1.8s"
                                  values="1; 0"
                                  calcMode="spline"
                                  keyTimes="0; 1"
                                  keySplines="0.3, 0.61, 0.355, 1"
                                  repeatCount="indefinite"
                                />
                              </circle>
                            </g>
                          </svg>
                        )}
                      </div>
                      {/* Svg icon ends */}
                    </div>

                    <p className="text-center pb-1">
                      Status:{" "}
                      <span
                        className={
                          transactionStatus.status === "confirmed"
                            ? "text-success"
                            : "text-warning"
                        }
                      >
                        {transactionStatus.status}
                      </span>
                    </p>

                    {transactionStatus.status === "confirmed" && (
                      <div className="modal-footer border-0">
                        <button
                          type="button"
                          className="btn btn-outline-success"
                          data-bs-dismiss="modal"
                          style={{ backgroundColor: "" }}
                          onClick={handleConfirm}
                          disabled={error ? "true" : false}
                        >
                          Proceed to Pay
                        </button>
                        <button
                          type="button"
                          className="btn btn-outline-danger"
                          data-bs-dismiss="modal"
                          onClick={handleDeny}
                        >
                          Deny
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="table-responsive" style={{ height: 300 }}>
                <table className="table table-bordered mt-4 mb-3">
                  <thead>
                    <tr>
                      <th
                        scope="col"
                        style={{ fontWeight: 500, color: "#0E73BC" }}
                      >
                        Bitcoin Address
                      </th>
                      <th
                        scope="col"
                        style={{ fontWeight: 500, color: "#0E73BC" }}
                      >
                        Amount
                      </th>
                      <th
                        scope="col"
                        style={{ fontWeight: 500, color: "#0E73BC" }}
                      >
                        Name
                      </th>
                      <th
                        scope="col"
                        style={{ fontWeight: 500, color: "#0E73BC" }}
                      >
                        Email
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {receivers?.map((item) => (
                      <tr>
                        <th scope="row" style={{ fontWeight: 400 }}>
                          {item.btcAddress}
                        </th>
                        <td>{item.amount}</td>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                      </tr>
                    ))}
                    {externalWallets?.map((item) => (
                      <tr>
                        <th scope="row" style={{ fontWeight: 400 }}>
                          {item.bitcoinAddress}
                        </th>
                        <td>{item.amount}</td>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {/* 
              <div className="modal-footer border-0">
                <button
                  type="button"
                  className="btn btn-outline-success"
                  style={{ backgroundColor: "" }}
                  onClick={handleConfirm}
                  disabled={error ? "true" : false}
                >
                  Proceed to Pay
                </button>
                <button
                  type="button"
                  className="btn btn-outline-danger"
                  onClick={handleDeny}
                >
                  Deny
                </button>
              </div> */}

              {notifies ? (
                <ToastContainer
                  position="bottom-right"
                  autoClose={5000}
                  hideProgressBar={true}
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss={false}
                  draggable={false}
                  pauseOnHover={false}
                  limit={1}
                />
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Confirm;
