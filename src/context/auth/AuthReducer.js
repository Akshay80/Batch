import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  LOGOUT,
  // VERIFY_EMAIL_SUCCESS,
  // VERIFY_EMAIL_FAILURE,
  SET_LOADING_TRUE,
  CLEAR_ERRORS,
} from "./types";

const AuthReducer = (state, action) => {
  switch (action.type) {
    case CLEAR_ERRORS:
      return {
        ...state,
        login_error: "",
        register_error: "",
      };
    case SET_LOADING_TRUE:
      return {
        ...state,
        isLoading: true,
      };
    case LOGIN_SUCCESS:
      localStorage.setItem("isAuth", true);
      localStorage.setItem("user", JSON.stringify(action.payload));
      return {
        ...state,
        isAuth: true,
        isLoading: false,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        login_error: action.payload,
        isLoading: false,
      };
    case REGISTER_SUCCESS:
      localStorage.setItem("isAuth", true);
      localStorage.setItem("user", action.payload);
      return {
        isAuth: true,
        isLoading: false,
      };
    case REGISTER_FAILURE:
      return {
        ...state,
        register_error: action.payload,
        isLoading: false,
      };

    case LOGOUT:
      localStorage.clear();
      return {
        isAuth: false,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default AuthReducer;
