import React from "react";
import "../css/transaction.css";
import Header from "./Header";
import info from "../images/info.png";
import csv from "../images/csv.png";

function Transaction() {
  const userData = JSON.parse(localStorage.getItem("user"));

  console.log(userData);

  return (
    <>
      <Header />
      <div className="container">
        <div className="row no-gutters">
          <div className="col-lg-12 col-md-12 col-sm">
            <div
              className="signup-form mt-3"
              style={{ borderRadius: 7, borderColor: "#0E73BC" }}
            >
              <form>
                <h2 className="mb-5">Batch Transaction</h2>

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
                    // placeholder="0x1F1tAaz5x1HUXrCNLbtMDqcw6o5GNn4xqX"
                    defaultValue={userData.btcAddress}
                    disabled
                  />
                </div>
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                  style={{ color: "black" }}
                >
                  Select Fee Rate
                </label>
                <select className="form-select">
                  <option>Open this select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>

                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label mt-3"
                  style={{ color: "black" }}
                >
                  Upload CSV
                </label>
                <div className="input-group">
                  <input
                    type="file"
                    className="form-control"
                    id="inputGroupFile04"
                    aria-describedby="inputGroupFileAddon04"
                    required="required"
                  />
                  <input
                    type="image"
                    id="inputGroupFileAddon04"
                    className="InfoImage"
                    src={info}
                    alt="info"
                    align="left"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  />
                </div>

                <div
                  className="modal fade "
                  id="exampleModal"
                  tabIndex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                      <div className="modal-header border-0">
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div className="modal-body">
                        <img src={csv} alt="csv_image" width="100%" />
                      </div>
                      <div className="modal-footer border-0">
                        <button
                          type="button"
                          className="btn btn-secondary SendBtn"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <button
                    type="submit"
                    className="btn btn-primary btn-lg btn-block text-center mx-auto d-block mt-4 SendBtn"
                  >
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Transaction;
