import React from "react";
import crypto from "../images/crypto.png";
import "../css/splash.css";
import google from "../images/google 1.png";
import apple from "../images/app 1.png";
import Header from "./Header";

function Splash() {
  return (
    <>
      {/* Header */}
      <Header />

      <div className="container">
        <div className="row text-center">
          <div>
            <div
              class="card mt-5 mb-5"
              style={{
                maxWidth: "100%",
                borderColor: "#0E73BC",
                padding: "25px",
                borderRadius: 8,
                boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.3)"
              }}
            >
              <div class="row no-gutters">
                <div class="col-md-6">
                  <div class="card-body">
                    <h5 class="card-title CardTitle">
                      Money <br />
                      Transfer
                    </h5>
                    <p class="card-text CardText">
                      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type. It has survived not only five centuries, It has survived not only five centuries, It has survived not only five centuries,
 
                    </p>
                    &nbsp;
                    <p className="card-text CardTitle2">Available At</p>
                    <div style={{ textAlign: "left" }}>
                    <img src={google} alt="google_playstore" className="pb-2"/>
                      &nbsp; &nbsp;
                     <img src={apple} alt="apple_store" width="136px" height="50px" className="pb-2"/>
                    </div>
                  </div>
                </div>

                <div class="col-md-6 mt-5 mb-3">
                  <img
                    src={crypto}
                    class="mt-5 mx-auto"
                    width="80%"
                    alt="crypto_image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Splash;
