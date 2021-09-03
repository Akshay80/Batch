import React from 'react';
import '../css/confirm.css';


const Confirm = () => {

const style = {
    titles: {
        flex:2,
        textAlign:'left'
    },
    amounts:{
        flex:1
    },
    remAmount: {
        fontWeight: "500",
        flex:1
    }
}
 

return (
<React.Fragment>
    <div className="container">
    <div className="row">
        <div className="card mt-5 d-block mx-auto ConfirmCard"  style={{
                  borderRadius: 7,
                  borderColor: "#0e73bc",
                  width: "50%",
                  padding: "25px",
                  boxShadow: "1px 2px 5px"
                }}>
            <h2 className="text-center mb-4" style={{letterSpacing:2, color:"#0e73bc"}}>Confirm Payment</h2>
            <div class="card-body p-2">
              <div class="d-flex justify-content-around mb-1 text-center">
                <div class="p-2" style={style.titles}>Total Balance</div>
                <div class="p-2" style={style.amounts}>₹5000</div>
              </div>
              <div class="d-flex justify-content-around mb-1 text-center">
                <div class="p-2" style={style.titles}>Fee Rate&nbsp;&nbsp;&nbsp;&nbsp;</div>
                <div class="p-2 text-success" style={style.amounts}>
                  {' '}
                  - ₹300
                </div>
              </div>
              <div class="d-flex justify-content-around mb-1 text-center">
                <div class="p-2" style={style.titles}>Commission</div>
                <div class="p-2 text-danger" style={style.amounts}>
                   1%(₹50)
                </div>
              </div>
              <hr color="lightgrey mt-4"/>
              <div class="d-flex justify-content-around mb-1 text-center">
                <div class="p-2" style={style.titles}>Remaining Balance</div>
                <div class="p-2 font-weight-bold" style={style.remAmount}>
                  ₹4650
                </div>
              </div>
              <hr color="lightgrey"/>
              <div class="modal-footer border-0">
              <button
                type="button"
                class="btn btn-outline-success"
                style={{ backgroundColor: '' }}
              >
                Proceed to Pay
              </button>
              <button
                type="button"
                class="btn btn-outline-danger"
                data-bs-dismiss="modal"
                style={{ backgroundColor: '' }}
              >
                Deny
              </button>
            </div>



            </div>
            </div>
            </div>
            </div>
</React.Fragment>
)}

export default Confirm;