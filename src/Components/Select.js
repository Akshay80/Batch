import React, { useContext, useEffect } from "react";

import { Redirect } from "react-router-dom";

import "../css/select.css";
import Header from "./Header";
import Frenchise from "../images/Frenchise.png";
import Regular from "../images/Regular.png";

import DashboardContext from "../context/dashboard/DashboardContext";

function Select() {
  const {
    batchTransactionCommissionPercent,
    setBatchTransactionComnissionPercent,
  } = useContext(DashboardContext);

  console.log("commission percent", batchTransactionCommissionPercent);

  useEffect(() => {
    console.log(batchTransactionCommissionPercent);
  }, [batchTransactionCommissionPercent]);

  if (batchTransactionCommissionPercent) {
    return <Redirect to="batch-transaction" />;
  }

  const user = JSON.parse(localStorage.getItem("user"));

  const handleSelectTypeRegular = () => {
    setBatchTransactionComnissionPercent(user.defixCommission);
  };

  const handleSelectTypeFranchise = () => {
    setBatchTransactionComnissionPercent(user.externalCommission);
  };

  return (
    <>
      {/* Header */}
      {/* <Header /> */}
      <div className="container">
        <div className="card mt-5 ">
          <div className="card-body p-4 outercard">
            <div className="card ">
              <div className="card-body innercard">
                <h5 className="card-title p-3 text-center title">
                  Choose Your Types
                </h5>

                <div className="row text-center">
                  <div className="col-sm-6">
                    <img
                      src={Regular}
                      alt="regular_image"
                      className="regular_button"
                    />
                    <div>
                      <button
                        className="btn btn-primary Buttons mt-3 mb-5"
                        onClick={handleSelectTypeRegular}
                      >
                        &nbsp;Regular&nbsp;
                      </button>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <img
                      src={Frenchise}
                      alt="frenchise_image"
                      className="franchise_button"
                    />
                    <div>
                      <button
                        className="btn btn-primary Buttons mt-3 mb-5"
                        onClick={handleSelectTypeFranchise}
                      >
                        Franchise
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Select;
