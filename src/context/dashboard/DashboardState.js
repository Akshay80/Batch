import React, { useReducer } from "react";

import DashboardReducer from "./DashboardReducer";
import DashboardContext from "./DashboardContext";
import {
  SET_LOADING_TRUE,
  GET_FEE_RATE_SUCCESS,
  GET_BALANCE_SUCCESS,
  SET_UPLOAD_PERCENT,
  SET_UPLOADING_TRUE,
  SET_UPLOADING_FALSE,
  SET_RECEIPT_DATA_SUCCESS,
} from "./types";
import axios from "axios";

const DashboardState = (props) => {
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
  };

  const [state, dispatch] = useReducer(DashboardReducer, initialState);

  const user = JSON.parse(localStorage.getItem("user"));

  const setLoading = () => {
    dispatch({ type: SET_LOADING_TRUE });
  };

  const getFeeRate = async () => {
    setLoading();
    try {
      const { data } = await axios.get(
        baseURL + `/batch/feeRate/${user.userData.id}`,
        {
          headers: {
            Authorization: `Bearer ${user.jwtToken}`,
          },
        }
      );

      if (data.success) {
        dispatch({ type: GET_FEE_RATE_SUCCESS, payload: data.feeRate });
      }
    } catch (error) {
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
        dispatch({ type: GET_BALANCE_SUCCESS, payload: data.feeRate });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const batchTransaction = async (formData, setShowModal) => {
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
        console.log(data);
        dispatch({ type: SET_UPLOADING_FALSE });
        dispatch({
          type: SET_RECEIPT_DATA_SUCCESS,
          payload: data.transactionDetails,
        });
      }

      if (!data.success) {
        console.log("Success False");
      }
    } catch (error) {
      console.log(error.response.data);
      console.log(error.response.status);
      if (error.response.status === 400) {
        console.log(error.response.data.error);
        dispatch({ type: SET_UPLOADING_FALSE });

        if (error.response.data.externalWallets) {
          console.log("SET_RECEIPT_DATA_SUCCESS");
          dispatch({
            type: SET_RECEIPT_DATA_SUCCESS,
            payload: error.response.data,
          });
        }
      }
      if (error.response.status === 500) {
        if (error.response.data.error) {
          console.log("error", error.response.data.error);
          setShowModal(true);
        }

        console.log("Server Error");
        return dispatch({ type: SET_UPLOADING_FALSE });
      }
      dispatch({ type: SET_UPLOADING_FALSE });
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
        getFeeRate,
        getBalance,
        batchTransaction,
      }}
    >
      {props.children}
    </DashboardContext.Provider>
  );
};

export default DashboardState;
