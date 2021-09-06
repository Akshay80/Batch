import React, { useContext } from "react";

import { Redirect } from "react-router-dom";

import DashboardContext from "../context/dashboard/DashboardContext";

import "../css/confirm.css";

const Confirm = (props) => {
  const { batchTransaction, showReceipt } = useContext(DashboardContext);

  console.log("props", props);

  console.log("state", props.location.state);

  const { commissionPercent, feeRate, file } = props.location.state;

  console.log("btcp", commissionPercent);
  console.log("fr", feeRate);
  console.log("f", file);

  const setShowModal = (props) => {};

  const handleConfirm = () => {
    const fd = new FormData();
    fd.set("commissionPercent", commissionPercent);
    fd.set("feeRate", feeRate);
    fd.set("file", file);
    fd.set("userId", JSON.parse(localStorage.getItem("user")).userData.id);

    batchTransaction(fd, props.history);
  };

  const style = {
    titles: {
      flex: 2,
      textAlign: "left",
    },
    amounts: {
      flex: 1,
    },
    remAmount: {
      fontWeight: "500",
      flex: 1,
    },
  };

  if (showReceipt) {
    return <Redirect to="/receipt" />;
  }

  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div
            className="card mt-5 d-block mx-auto ConfirmCard"
            style={{
              borderRadius: 7,
              borderColor: "#0e73bc",
              width: "50%",
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
                  ₹5000
                </div>
              </div>
              <div className="d-flex justify-content-around mb-1 text-center">
                <div className="p-2" style={style.titles}>
                  Fee Rate&nbsp;&nbsp;&nbsp;&nbsp;
                </div>
                <div className="p-2 text-success" style={style.amounts}>
                  {" "}
                  - ₹300
                </div>
              </div>
              <div className="d-flex justify-content-around mb-1 text-center">
                <div className="p-2" style={style.titles}>
                  Commission
                </div>
                <div className="p-2 text-danger" style={style.amounts}>
                  1%(₹50)
                </div>
              </div>
              <hr color="lightgrey mt-4" />
              <div className="d-flex justify-content-around mb-1 text-center">
                <div className="p-2" style={style.titles}>
                  Remaining Balance
                </div>
                <div className="p-2 font-weight-bold" style={style.remAmount}>
                  ₹4650
                </div>
              </div>
              <hr color="lightgrey" />
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
                  // data-bs-dismiss="modal"
                  style={{ backgroundColor: "" }}
                  onClick={() => props.history.push("/dashboard")}
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
