import React from "react";
import "../css/fail.css";
import Header from "./Header";
import fails from "../images/Fail icon.png";
import failbox from "../images/Fail-box.png";
import successbox from "../images/success-box.png";

function Fail() {
  return (
    <>
      {/* Header */}
      <Header />

      <div className="container">
        <div className="row">
          <div>
            <div
              class="card mt-5 mb-5"
              style={{
                maxWidth: "100%",
                borderWidth: 2,
                borderColor: "#0E73BC",
                borderRadius: 9,
                boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.3)",
              }}
            >
              <div className="card-body">
                <h2 class="card-title text-center cardTitle mb-2">
                  Batch Transition
                </h2>

                {/* Fail Component */}

                <img
                  src={fails}
                  alt="fail_image"
                  className="d-block mx-auto mt-5"
                />
                <img
                  src={failbox}
                  alt="fail_box"
                  width="250px"
                  className="d-block mx-auto mt-5 failImage"
                />

                <div class="container">
                  <div className="card innerCards">
                    <div class="row">
                      <div class="col-sm pb-3">
                        <div class="input-group input-group-sm ">
                          <span
                            class="input-group-text textboxSide"
                            id="basic-addon1"
                          >
                            Wallet ID
                          </span>
                          <input
                            type="text"
                            class="form-control rounded-start"
                            placeholder="183nxjndhncjsn28"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                          />
                        </div>
                      </div>
                      <div class="col-sm">
                        <div class="input-group input-group-sm ">
                          <span
                            class="input-group-text textboxSide"
                            id="basic-addon1"
                          >
                            Amount
                          </span>
                          <input
                            type="text"
                            class="form-control rounded-start"
                            placeholder="$102570.00"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div class="col-sm mt-3">
                        <div class="input-group input-group-sm ">
                          <span
                            class="input-group-text textboxSide"
                            id="basic-addon1"
                          >
                            &nbsp;&nbsp;Email&nbsp;&nbsp;&nbsp;
                          </span>
                          <input
                            type="text"
                            class="form-control rounded-start"
                            placeholder="sample@gmail.com"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                          />
                        </div>
                      </div>
                      <div class="col-sm mt-3">
                        <div class="input-group input-group-sm ">
                          <span
                            class="input-group-text textboxSide"
                            id="basic-addon1"
                          >
                            &nbsp;Name&nbsp;&nbsp;
                          </span>
                          <input
                            type="text"
                            class="form-control rounded-start"
                            placeholder="Test"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Fail Component Ends Here */}

                {/* Success Component */}

                <img
                  src={successbox}
                  alt="success_box"
                  width="250px"
                  className="d-block mx-auto mt-5 failImage"
                />

                <div class="container">
                  <div className="card innerCards mb-4">
                    <div class="row">
                      <div class="col-sm pb-3">
                        <div class="input-group input-group-sm ">
                          <span
                            class="input-group-text textboxSide"
                            id="basic-addon1"
                          >
                            Wallet ID
                          </span>
                          <input
                            type="text"
                            class="form-control rounded-start"
                            placeholder="183nxjndhncjsn28"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                          />
                        </div>
                      </div>
                      <div class="col-sm">
                        <div class="input-group input-group-sm ">
                          <span
                            class="input-group-text textboxSide"
                            id="basic-addon1"
                          >
                            Amount
                          </span>
                          <input
                            type="text"
                            class="form-control rounded-start"
                            placeholder="$102570.00"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div class="col-sm mt-3">
                        <div class="input-group input-group-sm ">
                          <span
                            class="input-group-text textboxSide"
                            id="basic-addon1"
                          >
                            &nbsp;&nbsp;Email&nbsp;&nbsp;&nbsp;
                          </span>
                          <input
                            type="text"
                            class="form-control rounded-start"
                            placeholder="sample@gmail.com"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                          />
                        </div>
                      </div>
                      <div class="col-sm mt-3">
                        <div class="input-group input-group-sm ">
                          <span
                            class="input-group-text textboxSide"
                            id="basic-addon1"
                          >
                            &nbsp;Name&nbsp;&nbsp;
                          </span>
                          <input
                            type="text"
                            class="form-control rounded-start"
                            placeholder="Test"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Success Component Ends Here */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Fail;
