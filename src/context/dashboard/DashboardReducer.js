import {
  GET_FEE_RATE_SUCCESS,
  // GET_FEE_RATE_FAILURE,
  GET_BALANCE_SUCCESS,
  SET_UPLOAD_PERCENT,
  CLEAR_UPLOAD_PERCENT,
  SET_UPLOADING_TRUE,
  SET_UPLOADING_FALSE,
  // GET_BALANCE_FAILURE,
  SET_RECEIPT_DATA_SUCCESS,
  SET_RECEIPT_DATA_FAILURE,
  SET_BATCH_TRANSACTION_COMMISSION_PERCENT,
  CLEAR_BATCH_TRANSACTION_COMMISSION_PERCENT,
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
    case SET_RECEIPT_DATA_SUCCESS:
      return {
        ...state,
        receiptData: action.payload,
        showReceipt: true,
      };
    case SET_RECEIPT_DATA_FAILURE:
      return {
        ...state,
        receiptData: [],
        showReceipt: false,
        receiptDataError: action.payload,
      };
    case SET_BATCH_TRANSACTION_COMMISSION_PERCENT:
      return {
        ...state,
        batchTransactionCommissionPercent: action.payload,
      };
    case CLEAR_BATCH_TRANSACTION_COMMISSION_PERCENT:
      return {
        ...state,
        batchTransactionComissionPercent: "",
      };
    default:
      return state;
  }
};

export default DashboardReducer;
