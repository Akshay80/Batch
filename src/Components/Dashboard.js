import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";

import DashboardContext from "../context/dashboard/DashboardContext";

const Dashboard = () => {
  const { balance, getBalance ,clearBatchTransactionCommissionPercent} = useContext(DashboardContext);

  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    clearBatchTransactionCommissionPercent();
    getBalance(); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); 

  return (
    // Header
    <React.Fragment>
      <Header />
      <div className="container">
        <div className="row no-gutters">
          <div className="col-lg-12 col-md-12 col-sm">
            <div
              className="card mt-5 mb-5"
              style={{
                borderRadius: 10,
                borderColor: "#0E73BC",
                border: "2px solid #0e73bc",
                background: "#ffffff",
                padding: 30,
                boxShadow: "5px 5px 10px rgb(0 0 0 / 30%)",
              }}
            >
              <form>
                <h2
                  className="mb-5 text-center"
                  style={{ color: "#0E73BC", letterSpacing: 2 }}
                >
                  Dashboard
                </h2>

                <div className="form-group">
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label"
                    style={{ color: "black" }}
                  >
                    Bitcoin Address
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="btcAddress"
                    defaultValue={user.btcAddress}
                    disabled
                  />
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label mt-4"
                    style={{ color: "black" }}
                  >
                    Current Balance
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="currentBalance"
                    defaultValue={balance}
                    disabled
                  />
                  <div className="form-group">
                    <Link
                      to="/select"
                      className="btn btn-primary btn-block text-center mx-auto d-block mt-4 SendBtn"
                      style={{ letterSpacing: 1, fontWeight: 500 }}
                    >
                      Batch Transaction
                    </Link>
                    {/* <button
                    type="submit"
                    className="btn btn-primary btn-block text-center mx-auto d-block mt-4 SendBtn"
                    style={{letterSpacing:1, fontWeight: 500}}
                  >
                    Batch Transaction
                  </button> */}
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Dashboard;
