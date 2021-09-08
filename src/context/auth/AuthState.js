import React, { useReducer } from "react";

import axios from "axios";

import AuthContext from "./AuthContext";
import AuthReducer from "./AuthReducer";

import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  // REGISTER_SUCCESS,
  REGISTER_FAILURE,
  LOGOUT,
  // VALIDATE_PASSCODE_SUCCESS,
  // VALIDATE_PASSCODE_FAILURE,
  VERIFY_EMAIL_SUCCESS,
  VERIFY_EMAIL_FAILURE,
  SET_LOADING_TRUE,
  CLEAR_ERRORS,
  SHOW_VERIFY_EMAIL_ALERT,
} from "./types";

if (!localStorage.getItem("isAuth")) {
  localStorage.setItem("isAuth", "false");
}

const AuthState = (props) => {
  const baseURL = "http://walletapi.ftechiz.com:9090";

  const initialState = {
    isLoading: false,
    isAuth: localStorage.user ? true : false,
    login_error: "",
    register_error: "",
    showVerifyEmailAlert: false,
    isEmailVerified: false,
    success_msg: "",
  };

  const [state, dispatch] = useReducer(AuthReducer, initialState);

  const setLoading = () => {
    dispatch({ type: SET_LOADING_TRUE });
  };

  const clearErrors = () => {
    dispatch({ type: CLEAR_ERRORS });
  };

  const login = async (email, password) => {
    setLoading();
    try {
      const { data } = await axios.post(
        baseURL + "/user/login",
        { email, password },
        { headers: { "Content-Type": "application/json" } }
      );

      if (data.success) {
        dispatch({ type: LOGIN_SUCCESS, payload: data });
      }
    } catch (error) {
      //console.log(error.response);

      if (
        error?.response?.data?.error ===
        "Email is not verified yet. Please check the inbox of email you used for registration, email may also be in spam folder"
      ) {
        dispatch({
          type: SHOW_VERIFY_EMAIL_ALERT,
          payload: error.response.data.error,
        });
      }

      if (error?.response?.data?.error) {
        return dispatch({
          type: LOGIN_FAILURE,
          payload: error.response.data.error,
        });
      }
      dispatch({ type: LOGIN_FAILURE, payload: "Something went wrong." });
    }
  };

  const register = async (name, email, password) => {
    setLoading();
    try {
      const { data } = await axios.post(
        baseURL + "/user/register",
        { email, name, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (data.success) {
        dispatch({ type: SHOW_VERIFY_EMAIL_ALERT });
        return;
      } else {
        dispatch({ type: REGISTER_FAILURE, payload: data.error });
      }
    } catch (error) {
      if (error.response.data.error) {
        return dispatch({
          type: REGISTER_FAILURE,
          payload: error.response.data.error,
        });
      }

      dispatch({ type: REGISTER_FAILURE, payload: "Something went wrong." });
    }
  };

  const verifyEmail = async (userId) => {
    setLoading();
    try {
      const { data } = await axios.get(baseURL + `/user/verifyEmail/${userId}`);

      if (data.success) {
        dispatch({ type: VERIFY_EMAIL_SUCCESS, payload: data.message });
      } else {
        dispatch({ type: VERIFY_EMAIL_FAILURE, payload: data.error });
      }
    } catch (error) {
      //console.log("Error");
      // //console.log(error);
      // //console.log(error.response);
      if (error.response.status === 404) {
        //console.log(error.response);
        return dispatch({
          type: VERIFY_EMAIL_FAILURE,
          payload: "Your email cannot be validated.",
        });
      }
      dispatch({
        type: VERIFY_EMAIL_FAILURE,
        payload: "Something went wrong.",
      });
    }
  };

  const logout = () => {
    dispatch({ type: LOGOUT });
  };

  return (
    <AuthContext.Provider
      value={{
        isAuth: state.isAuth,
        isLoading: state.isLoading,
        login_error: state.login_error,
        register_error: state.register_error,
        showVerifyEmailAlert: state.showVerifyEmailAlert,
        isEmailVerified: state.isEmailVerified,
        success_msg: state.success_msg,
        error_msg: state.error_msg,
        login,
        register,
        verifyEmail,
        logout,
        clearErrors,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
