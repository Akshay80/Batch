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
  SET_RECEIPT_DATA_SUCCESS,
  SET_BATCH_TRANSACTION_COMMISSION_PERCENT,
  CLEAR_BATCH_TRANSACTION_COMMISSION_PERCENT,
  SET_SHOW_CONFIRM_PAYMENT_TRUE,
  SET_SHOW_CONFIRM_PAYMENT_FALSE,
  SET_CONFIRM_PAYMENT_DATA,
} from "./types";

import axios from "axios";

const DashboardState = (props) => {
  const { logout } = useContext(AuthContext);

  const baseURL = "http://walletapi.ftechiz.com:9090";

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
  };

  const [state, dispatch] = useReducer(DashboardReducer, initialState);

  const user = JSON.parse(localStorage.getItem("user"));

  const setLoading = () => {
    dispatch({ type: SET_LOADING_TRUE });
  };

  const setBatchTransactionComnissionPercent = (percent) => {
    console.log("selected percent", percent);
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
      console.log(error);
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
      console.log(error);
    }
  };

  const setShowConfirmPayment = () => {
    console.log("setShowConfirmPayment State");
    dispatch({ type: SET_SHOW_CONFIRM_PAYMENT_TRUE });
  };

  const confirmPayment = async (formData, history) => {
    console.log("Confirm Payment");
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
        history.push("/confirm-payment");
      }
    } catch (error) {
      console.log(error.response);
      console.log(error.response.status);
      if (error.response.status === 400) {
        console.log(error.response.data.error);
        dispatch({ type: SET_UPLOADING_FALSE });

        if (error.response.data.externalWallets) {
          console.log("SET_RECEIPT_DATA_SUCCESS");
          dispatch({
            type: SET_CONFIRM_PAYMENT_DATA,
            payload: error.response.data,
          });
          history.push("/confirm-payment");
        }
      }
      if (error.response.status === 500) {
        if (error.response.data.error) {
          console.log("error", error.response.data.error);
          // setShowModal(true);
          // history.push("/dashboard");
        }

        console.log("Server Error");
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
  //       console.log(data);
  //       dispatch({ type: SET_UPLOADING_FALSE });
  //       dispatch({
  //         type: SET_RECEIPT_DATA_SUCCESS,
  //         payload: data.transactionDetails,
  //       });
  //     }

  //     if (!data.success) {
  //       console.log("Success False");
  //     }
  //     if (data.success) {
  //     }
  //   } catch (error) {
  //     console.log(error.response.data);
  //     console.log(error.response.status);
  //     if (error.response.status === 400) {
  //       console.log(error.response.data.error);
  //       dispatch({ type: SET_UPLOADING_FALSE });

  //       if (error.response.data.externalWallets) {
  //         console.log("SET_RECEIPT_DATA_SUCCESS");
  //         dispatch({
  //           type: SET_RECEIPT_DATA_SUCCESS,
  //           payload: error.response.data,
  //         });
  //       }
  //     }
  //     if (error.response.status === 500) {
  //       if (error.response.data.error) {
  //         console.log("error", error.response.data.error);
  //         // setShowModal(true);
  //         history.push("/dashboard");
  //       }

  //       console.log("Server Error");
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
  //     console.log(error);
  //   }
  // };

  const batchTransaction = async () => {
    const body = {
      commission: 0,
      feeRate: 0,
      receivers: [
        {
          amount: 0,
          btcAddress: "string",
          email: "string",
          name: "string",
        },
      ],
      userId: "string",
    };

    try {
      const { data } = await axios.post(
        baseURL + "/batch/confirmPayment",
        body,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${user.jwtToken}`,
          },
        }
      );
    } catch (error) {
      console.log(error);
    }
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
      }}
    >
      {props.children}
    </DashboardContext.Provider>
  );
};

export default DashboardState;
