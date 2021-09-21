import React, { useReducer, useContext } from "react";

import DashboardReducer from "./DashboardReducer";
import DashboardContext from "./DashboardContext";

import AuthContext from "../auth/AuthContext";

import {
  SET_LOADING_TRUE,
  GET_FEE_RATE_SUCCESS,
  GET_BALANCE_SUCCESS,
  SET_UPLOAD_PERCENT,
  SET_UPLOADING_TRUE,
  SET_UPLOADING_FALSE,
  // SET_RECEIPT_DATA_SUCCESS,
  SET_BATCH_TRANSACTION_COMMISSION_PERCENT,
  CLEAR_BATCH_TRANSACTION_COMMISSION_PERCENT,
  SET_SHOW_CONFIRM_PAYMENT_TRUE,
  // SET_SHOW_CONFIRM_PAYMENT_FALSE,
  SET_CONFIRM_PAYMENT_DATA,
  CHECK_TRANSACTION_STATUS_SUCCESS,
  CHECK_TRANSACTION_STATUS_FAILURE,
  CLEAR_TRANSACTION_STATUS,
} from "./types";

import axios from "axios";

const DashboardState = (props) => {
  const { logout } = useContext(AuthContext);

  const baseURL = "http://18.207.182.108:9090";

  const initialState = {
    isLoading: false,
    feeRate: [],
    balance: "",
    uploadPercent: 0,
    isUploading: false,
    isUploaded: false,
    showReceipt: false,
    receiptData: [],
    batchTransactionCommissionPercent: "",
    showConfirmPayment: false,
    confirmPaymentData: {},
    transactionStatus: {
      message: "",
      status: "",
    },
  };

  const [state, dispatch] = useReducer(DashboardReducer, initialState);

  const user = JSON.parse(localStorage.getItem("user"));

  const setLoading = () => {
    dispatch({ type: SET_LOADING_TRUE });
  };

  const setBatchTransactionComnissionPercent = (percent) => {
    //console.log("selected percent", percent);
    dispatch({
      type: SET_BATCH_TRANSACTION_COMMISSION_PERCENT,
      payload: percent,
    });
  };

  const clearBatchTransactionCommissionPercent = () => {
    dispatch({ type: CLEAR_BATCH_TRANSACTION_COMMISSION_PERCENT });
  };

  const getFeeRate = async () => {
    setLoading();
    try {
      const res = await axios.get(
        baseURL + `/batch/feeRate/${user.userData.id}`,
        {
          headers: {
            Authorization: `Bearer ${user.jwtToken}`,
          },
        }
      );

      if (res.data.success) {
        dispatch({ type: GET_FEE_RATE_SUCCESS, payload: res.data.feeRate });
      }
    } catch (error) {
      if (error?.response?.status === 403) {
        logout();
      }
      //console.log(error);
    }
  };

  const getBalance = async () => {
    try {
      const { data } = await axios.get(
        baseURL + `/user/protected/getBalance/${user.userData.id}`,
        {
          headers: {
            Authorization: `Bearer ${user.jwtToken}`,
          },
        }
      );

      if (data.success) {
        dispatch({ type: GET_BALANCE_SUCCESS, payload: data.balance });
      }
    } catch (error) {
      //console.log(error);
    }
  };

  const setShowConfirmPayment = () => {
    //console.log("setShowConfirmPayment State");
    dispatch({ type: SET_SHOW_CONFIRM_PAYMENT_TRUE });
  };

  const confirmPayment = async (formData, history) => {
    //console.log("Confirm Payment");
    dispatch({ type: SET_UPLOADING_TRUE });
    try {
      const { data } = await axios.post(
        baseURL + "/batch/batchTransaction",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${user.jwtToken}`,
          },
          onUploadProgress: (e) => {
            dispatch({
              type: SET_UPLOAD_PERCENT,
              payload: parseInt(Math.round((e.loaded * 100) / e.total)),
            });
          },
        }
      );

      if (data.success) {
        dispatch({ type: SET_CONFIRM_PAYMENT_DATA, payload: data.paymentInfo });

        history.push({
          pathname: "/confirm-payment",
          state: { feeRate: formData.get("feeRate") },
        });
      }
    } catch (error) {
      //console.log(error.response);

      if (error.response?.status === 400) {
        //console.log(error.response.data.error);
        dispatch({ type: SET_UPLOADING_FALSE });

        if (error.response.data.externalWallets) {
          //console.log("SET_RECEIPT_DATA_SUCCESS");
          dispatch({
            type: SET_CONFIRM_PAYMENT_DATA,
            payload: error.response.data,
          });
          history.push({
            pathname: "/confirm-payment",
            state: { feeRate: formData.get("feeRate") },
          });
        }
      }
      if (error.response?.status === 500) {
        if (error.response.data.error) {
          //console.log("error", error.response.data.error);
          // setShowModal(true);
          // history.push("/dashboard");
        }

        //console.log("Server Error");
        return dispatch({ type: SET_UPLOADING_FALSE });
      }
      dispatch({ type: SET_UPLOADING_FALSE });
    }
  };

  // const batchTransaction = async (formData, history) => {
  //   dispatch({ type: SET_UPLOADING_TRUE });
  //   try {
  //     const { data } = await axios.post(
  //       baseURL + "/batch/batchTransaction",
  //       formData,
  //       {
  //         headers: {
  //           "Content-Type": "multipart/form-data",
  //           Authorization: `Bearer ${user.jwtToken}`,
  //         },
  //         onUploadProgress: (e) => {
  //           dispatch({
  //             type: SET_UPLOAD_PERCENT,
  //             payload: parseInt(Math.round((e.loaded * 100) / e.total)),
  //           });
  //         },
  //       }
  //     );

  //     if (data.success) {
  //       //console.log(data);
  //       dispatch({ type: SET_UPLOADING_FALSE });
  //       dispatch({
  //         type: SET_RECEIPT_DATA_SUCCESS,
  //         payload: data.transactionDetails,
  //       });
  //     }

  //     if (!data.success) {
  //       //console.log("Success False");
  //     }
  //     if (data.success) {
  //     }
  //   } catch (error) {
  //     //console.log(error.response.data);
  //     //console.log(error.response.status);
  //     if (error.response.status === 400) {
  //       //console.log(error.response.data.error);
  //       dispatch({ type: SET_UPLOADING_FALSE });

  //       if (error.response.data.externalWallets) {
  //         //console.log("SET_RECEIPT_DATA_SUCCESS");
  //         dispatch({
  //           type: SET_RECEIPT_DATA_SUCCESS,
  //           payload: error.response.data,
  //         });
  //       }
  //     }
  //     if (error.response.status === 500) {
  //       if (error.response.data.error) {
  //         //console.log("error", error.response.data.error);
  //         // setShowModal(true);
  //         history.push("/dashboard");
  //       }

  //       //console.log("Server Error");
  //       return dispatch({ type: SET_UPLOADING_FALSE });
  //     }
  //     dispatch({ type: SET_UPLOADING_FALSE });
  //   }
  // };

  // const confirmPayment = async () => {
  //   try {
  //     const { data } = await axios.post(baseURL + "/batch/confirmPayment");

  //     if (data.success) {
  //     }
  //   } catch (error) {
  //     //console.log(error);
  //   }
  // };

  const batchTransaction = async (body, history) => {
    try {
      const { data } = await axios.post(
        baseURL + "/batch/confirmPayment",
        // data.success=true
        // "http://localhost:5000/",
        body,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user.jwtToken}`,
          },
        }
      );

      console.log(data);

      if (data.success) {
        return history.replace({
          pathname: "/receiptt",
          state: data,
        });
      }
    } catch (error) {
      if (error.response.status === 500) {
        if (error.response.data.success === false) {
          history.replace({
            pathname: "/error",
            state: { error: error.response.data.error },
          });
        }
      }
    }
  };

  const checkTransactionStatus = async (interval) => {
    try {
      const { data } = await axios.get(
        baseURL + `/batch/checkTxnStatus/${user.userData.id}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user.jwtToken}`,
          },
        }
      );
      // console.log(data);
      if (data.success) {
        dispatch({ type: CHECK_TRANSACTION_STATUS_SUCCESS, payload: data });
        if (data.status === "confirmed") {
          return clearInterval(interval);
        }
      }
    } catch (error) {
      dispatch({ type: CHECK_TRANSACTION_STATUS_FAILURE });
      console.log(error);
    }
  };

  const clearTransactionStatus = () => {
    dispatch({ type: CLEAR_TRANSACTION_STATUS });
  };

  return (
    <DashboardContext.Provider
      value={{
        isLoading: state.isLoading,
        feeRate: state.feeRate,
        balance: state.balance,
        uploadPercent: state.uploadPercent,
        isUploading: state.isUploading,
        isUploaded: state.isUploaded,
        showReceipt: state.showReceipt,
        receiptData: state.receiptData,
        batchTransactionCommissionPercent:
          state.batchTransactionCommissionPercent,
        showConfirmPayment: state.showConfirmPayment,
        getFeeRate,
        getBalance,
        // batchTransaction,
        setBatchTransactionComnissionPercent,
        clearBatchTransactionCommissionPercent,
        setShowConfirmPayment,
        confirmPaymentData: state.confirmPaymentData,
        confirmPayment,
        batchTransaction,
        checkTransactionStatus,
        transactionStatus: state.transactionStatus,
        clearTransactionStatus,
      }}
    >
      {props.children}
    </DashboardContext.Provider>
  );
};

export default DashboardState;
