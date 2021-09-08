import React, { useContext, useEffect } from "react";

import { Redirect, useHistory } from "react-router-dom";

import DashboardContext from "../context/dashboard/DashboardContext";

import "../css/confirm.css";

const Confirm = ({ history }) => {
  const { batchTransaction, showReceipt, confirmPayment, confirmPaymentData } =
    useContext(DashboardContext);

  // console.log("props", props);

  // console.log("state", props.location.state);

  // const { commissionPercent, feeRate, file } = props.location.state;

  // console.log("btcp", commissionPercent);
  // console.log("fr", feeRate);
  // console.log("f", file);

  const setShowModal = (props) => {};

  const handleConfirm = () => {
    // const fd = new FormData();
    // fd.set("commissionPercent", commissionPercent);
    // fd.set("feeRate", feeRate);
    // fd.set("file", file);
    // fd.set("userId", JSON.parse(localStorage.getItem("user")).userData.id);
    // batchTransaction(fd, props.history);

    const body = {};

    batchTransaction();
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
    confirmPayment();
  }, []);

  console.log("CPD", confirmPaymentData);

  const { commissionInBtc, estimateNetworkFees, totalAmountInBtc, receivers } =
    confirmPaymentData;

  const { error, externalWallets } = confirmPaymentData;

  if (showReceipt) {
    return <Redirect to="/receipt" />;
  }

  // const history = useHistory();

  const handleDeny = () => {
    history.replace("/dashboard");
  };

  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div
            className="card mt-5 d-block mx-auto ConfirmCard"
            style={{
              borderRadius: 7,
              borderColor: "#0e73bc",
              width: "70%",
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
              <div className="d-flex justify-content-around mb-1 text-center">
                <div className="p-2" style={style.titles}>
                  Total Balance
                </div>
                <div className="p-2" style={style.amounts}>
                  {totalAmountInBtc ? totalAmountInBtc : 0.00003}
                </div>
              </div>
              <div className="d-flex justify-content-around mb-1 text-center">
                <div className="p-2" style={style.titles}>
                  Fee Rate&nbsp;&nbsp;&nbsp;&nbsp;
                </div>
                <div className="p-2 text-success" style={style.amounts}>
                  {estimateNetworkFees ? estimateNetworkFees : 0.000002}
                </div>
              </div>
              <div className="d-flex justify-content-around mb-1 text-center">
                <div className="p-2" style={style.titles}>
                  Commission
                </div>
                <div className="p-2 text-danger" style={style.amounts}>
                  {commissionInBtc ? commissionInBtc : 0.000004}
                </div>
              </div>
              <hr color="lightgrey mt-4" />

              {/* User Info Table */}
              {error}
              <div className="table-responsive">
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

              <div className="modal-footer border-0">
                <button
                  type="button"
                  className="btn btn-outline-success"
                  style={{ backgroundColor: "" }}
                  onClick={handleConfirm}
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Confirm;
