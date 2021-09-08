import React, { useContext, useEffect } from "react";

import { Redirect } from "react-router-dom";

import DashboardContext from "../context/dashboard/DashboardContext";

import "../css/confirm.css";

const Confirm = (props) => {
  const {
    batchTransaction,
    batchTransactionCommissionPercent,
    showReceipt,
    confirmPayment,
    confirmPaymentData,
  } = useContext(DashboardContext);

  // //console.log("props", props);

  // //console.log("state", props.location.state);

  const { feeRate } = props.location.state;

  const { commissionInBtc, estimateNetworkFees, totalAmountInBtc, receivers } =
    confirmPaymentData;

  const { error, externalWallets } = confirmPaymentData;

  // //console.log("btcp", commissionPercent);
  // //console.log("fr", feeRate);
  // //console.log("f", file);

  //console.log(props.location);

  // const setShowModal = (props) => {};

  const handleConfirm = () => {
    // const fd = new FormData();
    // fd.set("commissionPercent", commissionPercent);
    // fd.set("feeRate", feeRate);
    // fd.set("file", file);
    // fd.set("userId", JSON.parse(localStorage.getItem("user")).userData.id);
    // batchTransaction(fd, props.history);

    let r = [];

    //console.log(externalWallets);
    //console.log(receivers);

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

    //console.log("confirm body", body);

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

  if (showReceipt) {
    return <Redirect to="/receipt" />;
  }

  // const history = useHistory();

  const handleDeny = () => {
    props.history.replace("/dashboard");
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
              {!error && (
                <>
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
                </>
              )}
              {/* User Info Table */}
              <p
                className="text-danger d-block mx-auto mt-4"
                style={{ textAlign: "center" }}
              >
                {error}
              </p>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Confirm;
