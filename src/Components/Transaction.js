import React, { useState, useEffect, useContext, useRef } from "react";
import { Redirect } from "react-router-dom";

import { Modal } from "reactstrap";

import "../css/transaction.css";
import Header from "./Header";
import info from "../images/info.png";
import csv from "../images/csv.svg";

import DashboardContext from "../context/dashboard/DashboardContext";

const Transaction = (props) => {
  const {
    feeRate,
    getFeeRate,
    getBalance,
    batchTransaction,
    isUploading,
    uploadPercent,
    showReceipt,
  } = useContext(DashboardContext);

  const { className } = props;

  const userData = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    getFeeRate();
    getBalance();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const [formData, setFormData] = useState({
    commissionPercent: "",
    feeRate: "",
    file: null,
    userId: "",
  });

  const fileAlert = useRef(null);

  const handleFileChange = (e) => {
    if (e.target.files[0]?.type.split("/")[1] === "csv" || e.target.files[0]?.type.split("/")[1] === "comma-separated-values") {
      fileAlert.current.innerText = "";
      setFormData({ ...formData, file: e.target.files[0] });
    } else {
      setFormData({ ...formData });
      console.log("Not a valid file type");
      fileAlert.current.innerText = "Not a valid file type.";
    }
  };

  const handleBatchTransaction = (e) => {
    e.preventDefault();

    const errors = [];

    if (formData.commissionPercent === "") {
      errors.push(1);
    }
    if (formData.feeRate === "") {
      errors.push(1);
    }
    if (formData.file === null) {
      errors.push(1);
    }

    if (errors.length === 0) {
      const fd = new FormData();
      fd.set("commissionPercent", formData.commissionPercent);
      fd.set("feeRate", formData.feeRate);
      fd.set("file", formData.file);
      fd.set("userId", JSON.parse(localStorage.getItem("user")).userData.id);

      batchTransaction(fd, setShowModal);
    }
  };

  const [showModal, setShowModal] = useState(false);
  const toggle = () => {
    setShowModal(false);
  };

  if (showReceipt) {
    return <Redirect to="/receipt" />;
  }

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
                    defaultValue={userData.btcAddress}
                    disabled
                  />
                </div>

                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                  style={{ color: "black" }}
                >
                  Comission Percent
                </label>
                <div className="input-group">
                  <select
                    className="form-select"
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        commissionPercent: e.target.value,
                      })
                    }
                  >
                    <option value="">Select Comission Percent</option>
                    <option value="1">{userData.defixCommission}%</option>
                    <option value="1.5">{userData.externalCommission}%</option>
                  </select>
                  <input
                    type="image"
                    src={info}
                    data-bs-toggle="modal"
                    width="38"
                    style={{ border: "1px solid lightgrey", padding: 10, borderRadius: "0px 4px 4px 0px" }}
                    data-bs-target="#exampleModal2"
                    alt="info2"
                  />
                </div>

                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label mt-3"
                  style={{ color: "black" }}
                >
                  Select Fee Rate
                </label>
                <select
                  className="form-select"
                  onChange={(e) =>
                    setFormData({ ...formData, feeRate: e.target.value })
                  }
                >
                  <option value="">Select Fee Rate</option>
                  {feeRate.map((item, index) => (
                    <option key={index} value={item.feeRate}>
                      {item.message} - {item.priority}
                    </option>
                  ))}
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
                    id="inputGroupFile"
                    aria-describedby="inputGroupFileAddon"
                    required="required"
                    onChange={handleFileChange}
                  />
                  <input
                    type="image"
                    src={info}
                    id="inputGroupFileAddon04"
                    data-bs-toggle="modal"
                    width="38"
                    style={{ border: "1px solid #0E73BC", padding: 10, borderRadius: "0px 4px 4px 0px"}}
                    data-bs-target="#exampleModal"
                    alt="info"
                    
                  />
                </div>
                {/* CSV Modal */}
                <p ref={fileAlert} className="text-danger mt-2"></p>
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
                {/* CSV Modal Ends Here */}

                {/* Commission Rate Modal */}

                <div
                  className="modal fade"
                  id="exampleModal2"
                  tabIndex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog">
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
                        <h4 className="text-center">
                          Important information regarding commission
                        </h4>

                        <h6 className="mt-4">
                          1. <u>1% Commission:</u>
                        </h6>
                        <p>
                          With 1.0% commission you can send batch transaction to
                          defix wallets users only.
                        </p>
                        <h6 className="mt-4">
                          2. <u>1.5% Commission:</u>
                        </h6>

                        <p>
                          With 1.5% commission you can send batch transaction to
                          any bitcoin address (external wallet or defix wallet
                          user).
                        </p>
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

                {/* Comission Rate Modal Ends Here */}

                {/* 1.5% Rate Modal */}
                <div>
                  <Modal
                    isOpen={showModal}
                    toggle={toggle}
                    className={className}
                  >
                    <div className="modal-header border-0">
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss={toggle}
                        aria-label="Close"
                        onClick={toggle}
                      ></button>
                    </div>
                    <div className="modal-body">
                      <h4 className="text-center">1.5% Commission</h4>

                      <p className="text-center mt-4">
                        Amount you want to send (including transaction fee) is
                        greater than the total balance of your wallet.
                      </p>
                    </div>
                    <div className="modal-footer border-0">
                      <button
                        type="button"
                        className="btn btn-secondary SendBtn"
                        data-bs-dismiss={toggle}
                        onClick={toggle}
                      >
                        Close
                      </button>
                    </div>
                  </Modal>
                </div>
                {/* 1.5% Rate Modal Ends Here */}

                <div className="form-group">
                  <button
                    type="submit"
                    className="btn btn-primary btn-lg btn-block text-center mx-auto d-block mt-4 SendBtn"
                    onClick={handleBatchTransaction}
                    disabled={isUploading ? true : false}
                  >
                    {isUploading ? `Uploading...${uploadPercent}%` : "Send"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Transaction;
