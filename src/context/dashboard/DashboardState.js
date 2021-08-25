import React, { useReducer } from "react";

import DashboardReducer from "./DashboardReducer";
import DashboardContext from "./DashboardContext";
import {
  SET_LOADING_TRUE,
  GET_FEE_RATE_SUCCESS,
  GET_BALANCE_SUCCESS,
  SET_UPLOAD_PERCENT,
} from "./types";
import axios from "axios";

const DashboardState = (props) => {
  const baseURL = "http://walletapi.ftechiz.com:9090";

  const initialState = {
    isLoading: false,
    feeRate: [],
    balance: "",
    uploadPercent: 0,
    isUploaded: false,
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

  const batchTransaction = async (formData) => {
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
      }
    } catch (error) {
      console.log(error.response.data);
      console.log(error.response.status);
      if (error.response.status === 400) {
        console.log(error.response.data.error);
      }
      if (error.response.status === 500) {
        console.log("Server Error");
      }
    }
  };

  return (
    <DashboardContext.Provider
      value={{
        isLoading: state.isLoading,
        feeRate: state.feeRate,
        balance: state.balance,
        uploadPercent: state.uploadPercent,
        isUploaded: state.isUploaded,
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
