import {
  GET_FEE_RATE_SUCCESS,
  // GET_FEE_RATE_FAILURE,
  GET_BALANCE_SUCCESS,
  SET_UPLOAD_PERCENT,
  CLEAR_UPLOAD_PERCENT,
  SET_UPLOADING_TRUE,
  SET_UPLOADING_FALSE,
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
    case SET_UPLOADING_TRUE:
      return {
        ...state,
        isUploading: true,
      };
    case SET_UPLOADING_FALSE:
      return {
        ...state,
        isUploading: false,
      };
    case SET_UPLOAD_PERCENT:
      return {
        ...state,
        uploadPercent: action.payload,
      };
    case CLEAR_UPLOAD_PERCENT:
      return {
        ...state,
        uploadPercent: 0,
      };
    default:
      return state;
  }
};

export default DashboardReducer;
