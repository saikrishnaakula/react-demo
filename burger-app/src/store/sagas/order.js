import axios from "../../axios-order";
import { put } from "redux-saga/effects";
import {
  purchaseBurgerStart,
  purchaseBurgerSuccess,
  purchaseBurgerFail,
  fetchOrdersStart,
  fetchOrdersSuccess,
  fetchOrdersFail,
} from "../actions/order";

export function* purchaseBurgerSaga(actions) {
  try {
    yield put(purchaseBurgerStart());
    const resp = yield axios.post(
      "/orders.json?auth=" + actions.token,
      actions.order
    );
    yield put(purchaseBurgerSuccess(resp.data.name, actions.order));
  } catch (error) {
    yield put(purchaseBurgerFail(error));
  }
}
export function* fetchOrdersSaga(actions) {
  try {
    yield put(fetchOrdersStart());
    const resp = yield axios.get(
      "/orders.json?auth=" +
        actions.token +
        '&orderBy="userId"&equalTo="' +
        actions.userId +
        '"'
    );
    const fetchedOrders = [];
    for (const k in resp.data) {
      fetchedOrders.push({ ...resp.data[k], id: k });
    }
    yield put(fetchOrdersSuccess(fetchedOrders));
  } catch (error) {
    yield put(fetchOrdersFail(error));
  }
}
