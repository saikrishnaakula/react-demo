import * as actionTypes from "../actions/actionsTypes";

const initState = {
  token: null,
  userId: null,
  error: null,
  loading: false,
  redirecturl:"/"
};

const Auth = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_START:
      return { ...state, error: null, loading: true };
    case actionTypes.AUTH_SUCCESS:
      return {
        ...state,
        token: action.authData.idToken,
        userId: action.authData.localId,
        error: null,
        loading: false,
      };
    case actionTypes.AUTH_FAIL:
      return { ...state, error: action.error, loading: false };
    case actionTypes.AUTH_LOGOUT:
      return { ...state, token: null, userId: null };
    case actionTypes.AUTH_REDIRECT:
      return { ...state, redirecturl: action.path };

    default:
      return state;
  }
};

export default Auth;
