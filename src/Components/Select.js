import React from "react";
import "../css/select.css";
import Header from "./Header";
import Frenchise from "../images/Frenchise.png";
import Regular from "../images/Regular.png";

function Select() {
  return (
    <>
      {/* Header */}
      <Header />
      <div class="container">
        <div class="card mt-5 ">
          <div class="card-body p-4 outercard">
            <div class="card ">
              <div class="card-body innercard">
                <h5 class="card-title p-3 text-center title">
                  Choose Your Types
                </h5>

                <div class="row text-center">
                  <div class="col-sm-6">
                    <img src={Regular} alt="regular_image" width="250px" />
                    <div>
                      <a href="#" class="btn btn-primary Buttons mt-3 mb-5">
                        &nbsp;Regular&nbsp;
                      </a>
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <img src={Frenchise} alt="frenchise_image" width="250px" />
                    <div>
                      <a href="#" class="btn btn-primary Buttons mt-3 mb-5">
                        Franchise
                      </a>
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
