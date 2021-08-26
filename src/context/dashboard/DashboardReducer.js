import {
  GET_FEE_RATE_SUCCESS,
  // GET_FEE_RATE_FAILURE,
  GET_BALANCE_SUCCESS,
  SET_UPLOAD_PERCENT,
  // GET_BALANCE_FAILURE,
} from "./types";

const DashboardReducer = (state, action) => {
  switch (action.type) {
    case GET_BALANCE_SUCCESS:
      return {
        ...state,
        balance: action.payload,
      };
    case GET_FEE_RATE_SUCCESS:
      return {
        ...state,
        feeRate: action.payload,
      };
    case SET_UPLOAD_PERCENT:
      return {
        ...state,
        uploadPercent: action.payload,
      };
    default:
      return state;
  }
};

export default DashboardReducer;
