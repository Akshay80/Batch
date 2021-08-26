import React from "react";
import clip from "../images/clip.png";
import csv from "../assets/sampleCSV.csv";
import Header from "./Header";

function Sample() {
  return (
    <React.Fragment>
        {/* Header */}
        <Header />
        <div className="container">
        <div className="row no-gutters">
        <div className="col-lg-12 col-md-12 col-sm">
        <div className="card mt-5" style={{
                  borderRadius: 7,
                  borderColor: "#0E73BC",
                  padding: "25px",
                }}>
      <div class="table-responsive">
      <h3 className="text-center mb-4" style={{color:"#0E73BC",fontSize:27, fontWeight: "500"}}>CSV Sample</h3>
        <p>This is the CSV file viewed as spread sheet:</p>
        <table class="table table-bordered mb-5">
        
  
  <thead>
    <tr>
      <th scope="col" style={{fontWeight:500, color:"#0E73BC"}}>Bitcoin Address</th>
      <th scope="col" style={{fontWeight:500, color:"#0E73BC"}}>Amount</th>
      <th scope="col" style={{fontWeight:500, color:"#0E73BC"}}>Name</th>
      <th scope="col" style={{fontWeight:500, color:"#0E73BC"}}>Email</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row" style={{fontWeight:400}}>TdcxYYOBiubc7Gy4uDShzBR</th>
      <td>0.00001000</td>
      <td>Dave Zavier</td>
      <td>dave@email.com</td>
    </tr>
    <tr>
      <th scope="row" style={{fontWeight:400}}>EzEb9FsWu8GcOPOn8ohqW7d</th>
      <td>0.00005000</td>
      <td>John Doe</td>
      <td>john@email.com</td>
    </tr>
    <tr>
      <th scope="row" style={{fontWeight:400}}>Ksz98i2jds92kds9iSJMW92</th>
      <td>0.00009000</td>
      <td>Jonas Richard</td>
      <td>jonas@email.com</td>
    </tr>
  </tbody>

        </table>
        <a href={csv} download >
           <p><img src={clip} alt="clip_icon" width="20"/> Download: CSV file with Sample data </p>
        </a>
      </div>
      </div>
      </div>
      </div>
      </div>
    </React.Fragment>
  );
}

export default Sample;
