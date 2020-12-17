import { put, delay } from "redux-saga/effects";
import { authLogoutSucceed, authLogout } from "../actions/";
import { authStart, authExpir, authSuccess, authFail } from "../actions/auth";
import Axios from "axios";

export function* logoutSaga(action) {
  yield localStorage.removeItem("token");
  yield localStorage.removeItem("expirationDate");
  yield localStorage.removeItem("localId");
  yield put(authLogoutSucceed());
}

export function* checkAuthTimeOut(action) {
  yield delay(action.timeOut * 1000);
  yield put(authLogout());
}

export function* authSaga(action) {
  yield put(authStart());
  let url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=`;
  if (action.method) {
    url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?k`;
  }
  try {
    const resp = yield Axios.post(url, {
      email: action.email,
      password: action.password,
      returnSecureToken: true,
    });

    yield localStorage.setItem("token", resp.data.idToken);
    yield localStorage.setItem("localId", resp.data.localId);
    yield localStorage.setItem(
      "expirationDate",
      new Date(new Date().getTime() + resp.data.expiresIn * 1000)
    );
    yield put(authSuccess(resp.data));
    yield put(authExpir(resp.data.expiresIn));
  } catch (error) {
    yield put(authFail(error.response.data.error));
  }
}

export function* authCheckStateSaga(action) {
  const token = yield localStorage.getItem("token");
  const localId = yield localStorage.getItem("localId");
  if (token) {
    yield put(authLogout());
  } else {
    const expiresIn = new Date(yield localStorage.getItem("expirationDate"));
    if (expiresIn <= new Date()) {
      yield put(authLogout());
    } else {
      yield put(authSuccess({ token, localId }));
      yield put(authExpir(expiresIn.getTime() - new Date().getTime()) / 1000);
    }
  }
}
