import * as actionType from "./actionsTypes";

export const authStart = () => {
  return {
    type: actionType.AUTH_START,
  };
};

export const authSuccess = (authData) => {
  return {
    type: actionType.AUTH_SUCCESS,
    authData,
  };
};

export const authFail = (error) => {
  return {
    type: actionType.AUTH_FAIL,
    error,
  };
};
export const authLogout = () => {
  // localStorage.removeItem("token");
  // localStorage.removeItem("expirationDate");
  // localStorage.removeItem("localId");
  return {
    type: actionType.AUTH_INIT_LOGOUT,
  };
};
export const authLogoutSucceed = () => {
  return {
    type: actionType.AUTH_LOGOUT,
  };
};

export const authExpir = (timeOut) => {
  return { type: actionType.AUTH_INIT_TIMEOUT_LOGOUT, timeOut };
};

export const auth = (email, password, method) => {
  return {
    type: actionType.AUTH_USER,
    email,
    password,
    method,
  };
};

export const redirecturl = (path) => {
  return {
    type: actionType.AUTH_REDIRECT,
    path,
  };
};

export const authCheckState = () => {
  return {
     type: actionType.AUTH_CHECK_STATE,
  };
};
