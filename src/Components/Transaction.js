import React from "react";
import "../css/transaction.css";
import Header from "./Header";
import info from "../images/info.png";
import csv from "../images/csv.png";

function Transaction() {
  return (
    <>
      {/* Header */}
      <Header />

      <div className="container">
        <div className="row no-gutters">
          <div className="col-lg-12 col-md-12 col-sm">
            <div
              class="signup-form mt-3"
              style={{ borderRadius: 7, borderColor: "#0E73BC" }}
            >
              <form>
                <h2 class="mb-5">Batch Transaction</h2>

                <div class="form-group">
                  <label
                    for="exampleFormControlInput1"
                    class="form-label"
                    style={{ color: "black" }}
                  >
                    Bitcoin Address
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    name="btcAddress"
                    placeholder="0x1F1tAaz5x1HUXrCNLbtMDqcw6o5GNn4xqX"
                  />
                </div>
                <label
                  for="exampleFormControlInput1"
                  class="form-label"
                  style={{ color: "black" }}
                >
                  Select Fee Rate
                </label>
                <select class="form-select">
                  <option selected>Open this select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>

                <label
                  for="exampleFormControlInput1"
                  class="form-label mt-3"
                  style={{ color: "black" }}
                >
                  Upload CSV
                </label>
                <div class="input-group">
                  <input
                    type="file"
                    class="form-control"
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
                  class="modal fade "
                  id="exampleModal"
                  tabindex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                      <div class="modal-header border-0">
                        <button
                          type="button"
                          class="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div class="modal-body">
                        <img src={csv} alt="csv_image" width="100%" />
                      </div>
                      <div class="modal-footer border-0">
                        <button
                          type="button"
                          class="btn btn-secondary SendBtn"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="form-group">
                  <button
                    type="submit"
                    class="btn btn-primary btn-lg btn-block text-center mx-auto d-block mt-4 SendBtn"
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
