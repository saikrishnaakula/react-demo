import { takeEvery, all, takeLatest } from "redux-saga/effects";

import {
  logoutSaga,
  checkAuthTimeOut,
  authSaga,
  authCheckStateSaga,
} from "./auth";
import { initIngreSaga } from "./burgerBuilder";
import * as actionType from "../actions/actionsTypes";
import { fetchOrdersSaga, purchaseBurgerSaga } from "./order";

export function* watchAuth() {
  yield all([
    takeEvery(actionType.AUTH_INIT_LOGOUT, logoutSaga),
    takeEvery(actionType.AUTH_INIT_TIMEOUT_LOGOUT, checkAuthTimeOut),
    takeEvery(actionType.AUTH_USER, authSaga),
    takeEvery(actionType.AUTH_CHECK_STATE, authCheckStateSaga),
  ]);
}
export function* watchBurgerBuilder() {
  yield takeEvery(actionType.Fetch_INGRE_START, initIngreSaga);
}
export function* watchOrders() {
  yield takeLatest(actionType.FETCH_ORDERS_INIT, fetchOrdersSaga);
  yield takeEvery(actionType.BURGER_PURCHASE_INIT, purchaseBurgerSaga);
}
