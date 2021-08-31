import React from "react";
import "../css/select.css";
import Header from "./Header";
import Frenchise from "../images/Frenchise.png";
import Regular from "../images/Regular.png";

function Select() {


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
                    <img src={Regular} alt="regular_image" className="regular_button"/>
                    <div>
                      <a
                        href="/#"
                        className="btn btn-primary Buttons mt-3 mb-5"
                      >
                        &nbsp;Regular&nbsp;
                      </a>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <img src={Frenchise} alt="frenchise_image" className="franchise_button"/>
                    <div>
                      <a
                        href="/#"
                        className="btn btn-primary Buttons mt-3 mb-5"
                      >
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
