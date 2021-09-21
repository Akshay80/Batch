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
  SET_SHOW_CONFIRM_PAYMENT_TRUE,
  SET_SHOW_CONFIRM_PAYMENT_FALSE,
  SET_CONFIRM_PAYMENT_DATA,
  CHECK_TRANSACTION_STATUS_SUCCESS,
  CHECK_TRANSACTION_STATUS_FAILURE,
  CLEAR_TRANSACTION_STATUS,
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
        batchTransactionCommissionPercent: "",
      };
    case SET_SHOW_CONFIRM_PAYMENT_TRUE:
      //console.log("SET_SHOW_CONFIRM_PAYMENT_TRUE");
      return {
        ...state,
        showConfirmPayment: true,
      };
    case SET_SHOW_CONFIRM_PAYMENT_FALSE:
      return {
        ...state,
        showConfirmPayment: false,
      };
    case SET_CONFIRM_PAYMENT_DATA:
      //console.log("dataaaaaaaaaaaa", action.payload);
      return {
        ...state,
        confirmPaymentData: action.payload,
      };

    case CHECK_TRANSACTION_STATUS_SUCCESS:
      return {
        ...state,
        transactionStatus: {
          message: action.payload.message,
          status: action.payload.status,
        },
      };
    case CHECK_TRANSACTION_STATUS_FAILURE:
      return {
        ...state,
        transactionStatus: {
          message: "Error.",
          status: "Error",
        },
      };
    case CLEAR_TRANSACTION_STATUS:
      return {
        ...state,
        transactionStatus: {
          message: "Waiting for the transaction.",
          status: "pending",
        },
      };
    default:
      return state;
  }
};

export default DashboardReducer;
